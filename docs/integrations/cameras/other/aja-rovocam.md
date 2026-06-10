---
id: aja-rovocam
title: "AJA RovoCam integration"
sidebar_label: "AJA RovoCam"
description: "Control the AJA RovoCam compact camera with Cyanview for remote paint and camera control in broadcast setups."
keywords: [AJA, RovoCam, compact camera, broadcast]
slug: /integrations/cameras/other/aja-rovocam
---

![AJA RovoCam compact camera](/img/Integrations/AJA/rovocam.png)

Cyanview controls the AJA RovoCam over a VISCA serial bus, giving you remote paint, exposure, and lens control from the RCP.

## Camera wiring

![AJA RovoCam wiring diagram](/img/Integrations/AJA/AJARovocam-wiring.png)

Required cable: [CY-CBL-6P-AJA-01](/docs/resources/cable-catalog#cy-cbl-6p-aja-01)

:::note
- Compatible with CI0 and RIO.
- The camera is powered by the CI0/RIO (data + power over a single cable).
- For wireless control, use a RIO.
- One camera per CI0/RIO port, or chain multiple cameras on a single port — each camera has a unique ID.
:::

## Camera control

| Control | AJA RovoCam |
|:--------|:-----------:|
| **White balance** (R/B and color temp) | ✔ |
| **Black balance** (R/B, master pedestal) | ✔ |
| **Other** (Master gamma, saturation, detail) | ✔ |
| **Exposure** (Iris, Gain, Shutter) | ✔ |
| **Camera menu control** | ✔ |
| **Lens** ([zoom, focus](/docs/reference/manuals/rcp/ui/scene)) | ✔ |
| **Scene file** — [save/recall](/docs/reference/manuals/rcp/ui/scene) | ✔ |

## Setup

Before starting, set up and note your camera ID using the AJA RovoCam app.

### VISCA bus

Open the [RCP Configuration UI](/docs/reference/manuals/rcp/web-ui) and create a new Sony VISCA bus:
- In the `Feature` block, click `+`.
- Select `Sony: VISCA Bus`.
- Set the bus ID range (0–7 by default).
- Set the bus type to `RS232`.
- Set the baudrate to `9600`.
- Select your serial port (for example: `CI0-31-52:1`).

![AJA RovoCam VISCA bus type selection](/img/Integrations/AJA/AJA-RovoCam-VISCABUS-select.png)

![AJA RovoCam VISCA bus block](/img/Integrations/AJA/AJA-RovoCam-VISCABUS-block.png)

![AJA RovoCam VISCA bus settings](/img/Integrations/AJA/AJA-RovoCam-VISCABUS-setting.png)

### Camera

Open the [RCP Configuration UI](/docs/reference/manuals/rcp/web-ui) and create a new camera:
- In the Camera section, click `+`.
- Enter a custom number, name, etc.
- Select **AJA** brand.
- Select **Rovocam** for the model.
- Select the camera bus and ID.

![AJA RovoCam camera settings](/img/Integrations/AJA/AJA-RovoCam-setting.png)

Once connected correctly, the status turns green:

![AJA RovoCam camera connected green status](/img/Integrations/AJA/AJA-RovoCam-block.png)
