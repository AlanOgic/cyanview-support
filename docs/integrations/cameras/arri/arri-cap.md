---
id: arri-cap
title: "ARRI CAP integration"
sidebar_label: "ARRI CAP"
description: "Integrate ARRI Alexa cameras using the Camera Access Protocol (CAP) with Cyanview for IP-based remote paint and exposure control."
keywords: [ARRI, CAP, Camera Access Protocol, Alexa, IP, remote, Cyanview]
slug: /integrations/cameras/arri/arri-cap
---

Control your ARRI Alexa cameras over IP using the Camera Access Protocol (CAP). This integration provides remote exposure, white balance, black balance, recording, and paint control from a Cyanview RCP.

## Compatible models

- ARRI Alexa Mini
- ARRI Alexa Mini LF
- ARRI Alexa 35

For the ARRI Amira, use the [ARRI SSCP integration](/docs/integrations/cameras/arri/arri-sscp) instead.

## Available controls

| Control | ARRI CAP |
|:--------|:--------:|
| **Exposure** (iris, ISO, shutter, ND filter) | ✔ |
| **White balance** (R/B and color temp) | ✔ |
| **Black balance** (R/B) | ✔ |
| **REC** (start/stop and status) | ✔ |
| **Other** (multi matrix, black gamma, knee, test/bars) | ✔ |
| **Scene files** ([save/recall](/docs/reference/manuals/rcp/ui/scene)) | ✔ |

<img src="/img/Integrations/ARRI/RCP-alexa35/RCP-alexa35.gif" alt="ARRI Alexa 35 paint control on RCP" />

## Wiring

Connect the camera and RCP over IP using a standard Ethernet connection:

<img src="/img/Integrations/camera/ARRI/arri-wiring.png" width="800" alt="ARRI CAP Ethernet wiring diagram" />

## Setup

### Camera setup

Prepare your ARRI camera with three steps:
1. Set a static IP address
2. Activate and configure the CAP server
3. Unlock a look (required for full paint control)

#### Set the camera IP

In **System > Network/WiFi**, configure:
- **LAN IP mode** to `static`
- **LAN static IP** to your desired camera IP (example: `10.0.2.6`)
- **LAN static subnet** to your desired subnet (example: `255.255.0.0`)

<img src="/img/Integrations/camera/ARRI/ARRI-CAP-IP.png" width="500" alt="ARRI CAP IP configuration" />

:::note
If the RCP does not have an IP address in the same range as the camera, add one by following the [IP configuration guide](/docs/guides/networking/ip-configuration).

In this example, the camera IP is `10.0.2.6/16` and the RCP IP is `10.0.3.10/16`.
:::

#### Enable the CAP server

In **System > Camera Access Protocol (CAP)**:
- Check **Enable CAP Server**
- Set **CAP Server Password** to `arri`

<img src="/img/Integrations/camera/ARRI/arri-CAP.png" width="500" alt="ARRI CAP server settings" />

#### Unlock a look for paint control

To access full paint controls (R/B gains, blacks, and more), you need an unlocked look:

1. Navigate to **Image > Look > Look** on the camera menu
2. Select your desired look and duplicate it
3. Select the duplicated look as the active look

:::info
Unlocking a look is optional but limits your control:
- **With a locked look** — you can only adjust exposure (iris, ISO, shutter, ND filter) and white balance (color temp and tint)
- **With an unlocked look** — you get full paint access including R/B gains, blacks, and all shading parameters

If you already have an unlocked look, skip this step.
:::

### Configure the RCP

Add and configure the camera in the [RCP web UI](/docs/reference/manuals/rcp/web-ui):

1. Click **+** in the camera block. A new panel appears on the right.
2. In **General**, set a number and a name for the camera.
3. Select **ARRI** as the brand and **CAP** as the model.
4. Enter the **IP** of your camera.

<img src="/img/Integrations/camera/ARRI/arri-cap-setup.png" width="300" alt="ARRI CAP RCP configuration" />

When the connection succeeds, the camera block turns green:

<img src="/img/Integrations/camera/ARRI/arri-cap-block.png" width="300" alt="ARRI CAP connected status" />

## Going further

### External lens control with a RIO

Control the iris through the **Lens** block on the RCP:
- For a Fuji or Canon motorized lens, follow the [cine lens integration guide](/docs/integrations/lenses/cine-lens)
- For a non-motorized lens, integrate [Tilta motors](/docs/integrations/lenses/tilta)

### Extend shading control beyond CAP

The CAP protocol supports the controls listed above. For additional shading parameters, combine CAP with a [LUT processor](/docs/integrations/generic/3d-lut-processor). See the [VP4 manual](/docs/reference/manuals/vp4-manual) for configuration details.

## Troubleshooting

Before investigating specific issues:
- Update your camera firmware and your RCP/RIO firmware to the latest versions
- Verify that your RCP and RIO run matching firmware versions

### Iris not controllable or value not matching (LBUS)

This issue applies when you use an L-Bus motor for iris control alongside CAP:

<img src="/img/Integrations/ARRI/ARRI-CAP-LBUS.png" alt="ARRI CAP with LBUS motor setup" />

Verify that the WCU (Wireless Compact Unit) is not claiming priority over iris. If you are unsure, split the bus into two: iris controlled by the camera, and focus/zoom by the WCU.

Follow these steps in order:
1. Power on the camera
2. Plug in the L-Bus motor
3. Load the lens table (using a WCU or camera SD card)
4. Calibrate the motor
5. Plug Ethernet into the camera
6. Configure the ARRI/CAP camera on the RCP

At this point, the motor should blink red/green as if disconnected. Move the iris knob on the RCP so the camera takes control of the motor.

### Camera block stays red

If the camera block does not turn green:
- Verify the camera IP address is correct
- Verify the RCP IP address is correct
- Confirm CAP is active and the password is set to `arri`
- Test connectivity by pinging both the RCP and camera from a laptop on the same network

### Paint controls limited to exposure only

If you can adjust iris, ISO, shutter, ND, color temp, and tint, but whites and blacks remain unavailable, your look is locked.

Unlock the look by following the [look unlocking procedure above](#unlock-a-look-for-paint-control).
