---
id: arri-cap
title: "ARRI CAP and Multicam integration"
sidebar_label: "ARRI CAP & Multicam"
description: "Integrate ARRI Alexa cameras using CAP and Multicam (Alexa 35 Live) with Cyanview for IP-based remote paint, exposure, and live production control."
keywords: [ARRI, CAP, Multicam, Camera Access Protocol, Alexa, Alexa 35 Live, IP, remote, Cyanview]
slug: /integrations/cameras/arri/arri-cap
---

Control your ARRI Alexa cameras over IP using CAP (Camera Access Protocol) or Multicam mode for the Alexa 35 Live. This integration provides remote exposure, white balance, black balance, recording, and full paint control from a Cyanview RCP.

## Compatible models

- ARRI Alexa 35 Live
- ARRI Alexa 35
- ARRI Alexa Mini
- ARRI Alexa Mini LF
- ARRI Amira — additional controls are available with the [ARRI SSCP integration](/docs/integrations/cameras/arri/arri-sscp)

:::note
Alexa 35 Live software is still evolving. Keep camera software and RCP/RIO versions up to date.
:::

## Available controls

The Alexa 35 Live can operate in **Multicam** mode (requires the Live option — hardware or software). When Multicam is active, all controls listed below are available.

| Control | Notes | CAP | Multicam |
|:--------|:------|:---:|:--------:|
| **Iris** | T-stop | ✔ | ✔ |
| **ND** | ND filter | ✔ | ✔ |
| **Shutter** | Shutter time/angle | ✔ | ✔ |
| **Gain / EI** | EI ISO list from camera | ✔ | ✔ |
| **Gain mode** | Normal / Enhanced sensitivity | ✔ | ✔ |
| **White balance** | Color temperature and tint | ✔ | ✔ |
| **White gain** | White M+RGB | | ✔ |
| **Auto white** | One-shot AWB | ✔ | ✔ |
| **Black level** | Pedestal M+RGB | | ✔ |
| **Black gamma** | M+RGB | | ✔ |
| **Knee** | Knee point and slope | | ✔ |
| **Cinema knee**\* | | | ✔ |
| **Saturation** | Part of CDL | ✔ | ✔ |
| **Color correction (multimatrix)** | 6 segments of HSL correction | | ✔ |
| **Lift + CDL**\* | Lift, power, slope, offset — M+RGB | | ✔ |
| **Audio gain** | 4 channels | ✔ | ✔ |
| **Bars / Pattern** | Bars, black, RP198 | ✔ | ✔ |
| **Tally** | Red only | ✔ | ✔ |
| **Timecode** | Display recording or playback timecode | ✔ | ✔ |
| **Record** | | ✔ | ✔ |
| **Playback control** | Play, pause, speed, clip skip | ✔ | ✔ |
| **Playback status** | Current clip, total clips | ✔ | ✔ |
| **Look files**\* | List/add/install/delete/rename/load/save | ✔ | ✔ |
| **Textures**\* | List/load/delete/upload | ✔ | ✔ |
| **Lens tables**\* | List/upload/install/delete/load/unload | ✔ | ✔ |

\* Available in the dashboard only.

<img src="/img/Integrations/ARRI/RCP-alexa35/RCP-alexa35.gif" alt="ARRI Alexa 35 paint control on RCP" />

## Workflows

### Alexa 35 Live (Multicam)

<img src="/img/Integrations/ARRI/arri-ccu.png" width="800" alt="ARRI Alexa 35 Live Multicam workflow" />

When using the Live Production System **LPS-1**, the RCP communicates with the CCU over IP. Use the CCU IP address in the Cyanview configuration (not the camera head IP), and select model **Multicam**.

When the Alexa 35 is used with the Live software option only (without the hardware package), the RCP connects directly to the camera head over IP. In this case as well, select **Multicam**.

### Standard CAP workflow

<img src="/img/Integrations/camera/ARRI/arri-wiring.png" width="800" alt="ARRI CAP Ethernet wiring diagram" />

Without the Live system, compatible cameras are controlled through standard CAP commands. Select model **CAP** and connect the RCP directly to the camera over IP.

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
Unlocking a look is optional, but keeping it locked limits your control:
- **With a locked look** — you can only adjust exposure (iris, ISO, shutter, ND filter) and white balance (color temp and tint)
- **With an unlocked look** — you get full paint access including R/B gains, blacks, and all shading parameters

If you already have an unlocked look, skip this step.

For Multicam mode, also enable the Multicam menus/options on the camera and ensure a compatible look is loaded for paint controls.
:::

### Configure the RCP

Add and configure the camera in the [RCP web UI](/docs/reference/manuals/rcp/web-ui):

1. Click **+** in the camera block. A new panel appears on the right.
2. In **General**, set a number and a name for the camera.
3. Select **ARRI** as the brand and the model according to your workflow:
   - **Multicam** for Alexa 35 Live workflows
   - **CAP** for standard CAP workflows
4. Enter the target **IP**:
   - CCU IP for LPS-1 workflows
   - Camera IP for standard CAP workflows

<img src="/img/Integrations/camera/ARRI/arri-cap-setup.png" width="300" alt="ARRI CAP RCP configuration" />

When the connection succeeds, the camera block turns green:

<img src="/img/Integrations/camera/ARRI/arri-cap-block.png" width="300" alt="ARRI CAP connected status" />

:::tip
If cforce motors or a servo lens are connected directly to the camera, do not enable external lens control on the RCP — otherwise camera-driven iris control is replaced.
:::

## Dashboard controls

<img src="/img/Integrations/ARRI/arri-dashboard-controls.png" width="300" alt="ARRI Multicam dashboard controls" />

Some controls in the table above are marked as *dashboard-only*. These are not available from the RCP UI and must be operated from the dashboard on a second screen.

For details, see the [Multi-Cam Dashboard guide](/docs/reference/manuals/rcp/multi-cam-dashboard).

ARRI Dashboard setup:

<iframe width="560" height="315" src="https://www.youtube.com/embed/NebfzqL9sDA?si=qjESNJmCixqDV3O5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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

Verify that the WCU (Wireless Compact Unit) is not claiming priority over iris.

Follow these steps in order:
1. Power on the camera
2. Plug in the L-Bus motor
3. Load the lens table (using a WCU or camera SD card)
4. Calibrate the motor
5. Plug Ethernet into the camera
6. Configure the ARRI/CAP camera on the RCP

At this point, the motor should blink red/green as if disconnected. Move the iris knob on the RCP so the camera takes control of the motor.

If another remote or the camera takes over iris control, you must resend the iris control request (part of initialization). Do this from the RCP: **SCENES > S.FILES > ACTIONS > Sync Camera**.

<img src="/img/Manual/RCP/Scenes/RCP-menu-scene-quick-actions.BMP" width="300" alt="RCP Sync Camera menu" />

### Camera block stays red

If the camera block does not turn green:
- Verify the camera IP address is correct
- Verify the RCP IP address is correct
- Confirm CAP is active and the password is set to `arri`
- Test connectivity by pinging both the RCP and camera from a laptop on the same network

### Paint controls limited to exposure only

If you can adjust iris, ISO, shutter, ND, color temp, and tint, but whites and blacks remain unavailable, your look is locked.

Unlock the look by following the [look unlocking procedure above](#unlock-a-look-for-paint-control).
