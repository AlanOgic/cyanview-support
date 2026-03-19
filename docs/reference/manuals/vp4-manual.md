---
id: vp4-manual
title: "VP4 manual"
sidebar_label: "VP4 manual"
description: "Complete manual for the Cyanview VP4 video processor. Installation, video connections, and color correction setup."
keywords: [VP4, manual, video processor, color correction]
slug: /reference/manuals/vp4-manual
---

The VP4 is an advanced color corrector designed for camera matching. It includes secondary corrections such as a 12-vector multimatrix, detail, and coring — controls typically found only in CCUs. All channels are controllable directly from the RCP.

![VP4 workflow overview diagram](/img/diagrams/cyanview-VP4-RCP-color-corrector-CCU-workflow-Overview@2x-8.png)

## Prerequisites

- **Network**: the VP4 requires an ethernet connection to the RCP. Use a PoE switch to power the RCP, or connect an external 12V power supply.
- **SDI cables**: 9× 3G-SDI cables with DIN 1.0/2.3 connectors are required to connect the 4 channels and reference.
- **Computer**: required to access the RCP web configuration.

## Connection

![VP4 connection diagram](/img/diagrams/cyanview-support-VP4-configuration-connection-RCP.png)

**Step 1 — Network setup**: connect the RCP, the VP4 LAN port, and your computer to the switch. For software updates, connect the switch to your internet access.

![VP4 back panel LAN port](/img/productGfx/VP4/cyanview-support-VP4-connection-back-panel-lan@2x-8.png)

**Step 2 — Video connection**:

![VP4 back panel DVI connectors](/img/productGfx/VP4/cyanview-support-VP4-connection-back-panel-dvi@1x-50.jpg)

- Connectors: DIN 1.0/2.3
- Video: 720p/1080i HD-SDI or 1080p 3G-SDI at 50/59/60 Hz
- Reference: compatible with Black Burst and Tri-Level

**Step 3 — Power on**: long-press the power button to turn the VP4 on or off. Boot status is shown on the front panel LEDs.

![VP4 front panel LED status indicators](/img/productGfx/VP4/cyanview-support-VP4-front-panel-led-status@1x-50.jpg)

- First LED turns green when the unit is powered.
- Second LED turns green when the unit is booted and operational.

## Configuration

You can operate the VP4 standalone via its own web UI, or from an RCP.

### VP4 channel alone

To control a VP4 channel independently:

1. Create a new camera with a number and a name.
2. Select `Not controlled` in the `Camera Head` field.
3. Select your VP4 and channel in the `Video processor` section using the format `SERIAL:CHANNEL_ID`.

![VP4 channel 1 block configuration](/img/Manual/VP4/VP4-CH1-block.png)

When the connection is established, the block turns green.

![VP4 channel 1 setup — green state](/img/Manual/VP4/VP4-setup-CH1.png)

### VP4 combined with camera control

To control a camera and VP4 together:

1. Create a new camera with a number and a name.
2. Select your camera brand and model from the list.
3. Select your VP4 and channel in the `Video processor` section using the format `SERIAL:CHANNEL_ID`.

![VP4 channel 1 combined block configuration](/img/Manual/VP4/VP4-CH1-combined-block.png)

When the connection is established, the block turns green.

![VP4 channel 1 combined setup — green state](/img/Manual/VP4/VP4-CH1-combined-setup.png)

### RCP operation

By default, camera head control has priority over VP4 control. For example, if both your camera and the VP4 have a gain control, the gain knob controls the camera by default.

When a camera and VP4 are combined, three buttons appear on your RCP:

- `CAM` — toggle camera head control
- `POST` — toggle VP4 control
- `C->P` / `P->C` — switch control priority between camera and VP4

#### Camera and VP4 combined (camera priority, default)

![RCP combined camera and VP4 — camera priority](/img/Manual/VP4/VP4-postpro-camera-combined.png)

Camera has priority; the VP4 only compensates what the camera does not control.

#### Camera only

![RCP camera-only mode](/img/Manual/VP4/VP4-cam-only.png)

#### VP4 only

![RCP VP4-only mode](/img/Manual/VP4/VP4-postpro-camera-only.png)

#### Camera and VP4 — VP4 priority

![RCP combined — VP4 has priority over camera](/img/Manual/VP4/VP4-postpro-camera-postpro.png)

- `P->C` — Post (processing) over Camera control
- `C->P` — Camera over Post (processing) control

#### Vector selection

Vectors are numbered **1** to **16**.

**GATE** highlights the selected vector by desaturating all other colors, making visual selection quick and accurate. Do not use GATE while the camera is on air, as it affects the main signal. Instead, press the **vect/peek** knob to generate a brief saturation burst on the selected vector — visible on a vectorscope without significantly affecting the live image.

![RCP multimatrix VP4 peek and gate controls](/img/productGfx/VP4/RCP-Menu-VP4-M-Matrix-Peek-Gate@2x-8.png)

#### VP4 controls

![RCP multimatrix VP4 controls](/img/productGfx/VP4/RCP-Menu-VP4-M-Matrix-Controls@2x-8.png)

- **vect/peek** — rotate to select the color vector to modify; push to trigger a saturation peek for on-screen identification.
- **hue** — rotate to change the hue of the selected vector.
- **saturation** — rotate to set vector color saturation.
- **enable** — rotate to select OFF, ON, or Gate.
  - *GATE*: highlights the selected vector by desaturating others.
  - *ON*: enables color correction.
  - *OFF*: disables color correction.

## Genlock settings

Configure genlock on the VP4 web interface. Find your device's IP address using [this guide](/docs/guides/networking/ip-configuration#find-your-devices-ip).

![VP4 genlock settings page](/img/Manual/VP4/VP4-settings.png)

Genlock is disabled by default (freerun). You can enable it and adjust horizontal and vertical phase.

## Web UI operations

VP4 color correction and color matching are operated via the **Multi Matrix** on the RCP. To access it, press *Paint1*, then press the same button again to reach *Paint2* using the blue buttons, then press **M-Matrix** in the *Paint2* menu using the white buttons. See [RCP screens overview](/docs/reference/manuals/rcp/controls#rcp-screen) for navigation details.

Color correction works by selecting a **color vector** and adjusting its **hue** and **saturation**.

![VP4 multimatrix screen on RCP](/img/Manual/VP4/VP4-multimatrix.png)
