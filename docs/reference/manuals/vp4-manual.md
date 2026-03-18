---
id: vp4-manual
title: "VP4 manual"
sidebar_label: "VP4 manual"
description: "Complete manual for the Cyanview VP4 video processor. Installation, video connections, and color correction setup."
keywords: [VP4, manual, video processor, color correction]
slug: /reference/manuals/vp4-manual
---

## Overview

<img alt="cyanview-VP4-RCP-color-corrector-CCU-workflow-Overview" src="/img/diagrams/cyanview-VP4-RCP-color-corrector-CCU-workflow-Overview@2x-8.png" width="800" />

The VP4 is an advanced color corrector ideal to color match cameras. It does feature secondary corrections like a 12 vectors multimatrix and other controls only found in CCUs such as detail and coring. All channels can directly be controlled  from the RCP.

## Prerequisites

* **Network**: the VP4 needs an ethernet connection to the RCP, and a PoE Switch is necessary to power the RCP or an external 12V power supply should be used.

* **SDI Cables**: 9x 3G-SDI cables with DIN 1.0/2.3 connectors are required to connect the 4 channels and reference.

* **Computer**: required to access the web configuration of the RCP.

## Connection

<img alt="cyanview-support-VP4-configuration-connection-RCP" src="/img/diagrams/cyanview-support-VP4-configuration-connection-RCP.png" width="600" />

- [step 1] Network setup: connect the RCP, the VP4 *LAN port* and your computer to the switch. For software update, connect the switch to your internet access.
 <img alt="cyanview-support-VP4-connection-back-panel-lan" src="/img/productGfx/VP4/cyanview-support-VP4-connection-back-panel-lan@2x-8.png" width="300" />

- [step 2] Video connection
 <img alt="cyanview-support-VP4-connection-back-panel-dvi" src="/img/productGfx/VP4/cyanview-support-VP4-connection-back-panel-dvi@1x-50.jpg" width="300" />

  - Connectors: DIN 1.0/2.3
  - Video: 720p/1080i HD-SDI or 1080p 3G-SDI in 50/59/60
  - Reference: compatible with Black Burst and Tri-Level
- [step 3] Turn VP4 ON
 Long press on the power button will turn VP4 on/off.
 The boot status is displayed on the LED on the front panel.
 <img alt="cyanview-support-VP4-front-panel-led-status" src="/img/productGfx/VP4/cyanview-support-VP4-front-panel-led-status@1x-50.jpg" width="300" />

  - The first LED turns green when the unit is powered.
  - The second LED turns green when the unit is booted and operational.

## Configuration

The VP4 can be operated in standalone using its own web UI.
You can also operate it from a RCP.

### VP4 channel alone

To control a VP4 channel:
* Create a new camera, with a number and a name
* Select `Not controlled` in the `Camera Head`
* Select your VP4 and channel in the `Video processor` section
* The format is: `SERIAL:CHANNEL_ID`

It should look like this:

<img src="/img/Manual/VP4/VP4-CH1-block.png" width="250" />

And if everything is fine, the block should appear `green`:

<img src="/img/Manual/VP4/VP4-setup-CH1.png" width="250" />

### VP4 combined with camera control

To control both a camera and the VP4 combined:
* Create a new camera, with a number and a name
* Select the your camera brand and model in the list
* Select your VP4 and channel in the `Video processor` section
* The format is: `SERIAL:CHANNEL_ID`

It should look like this:

<img src="/img/Manual/VP4/VP4-CH1-combined-block.png" width="250" />

And if everything is fine, the block should appear `green`:

<img src="/img/Manual/VP4/VP4-CH1-combined-setup.png" width="250" />

### RCP operation
By default, camera head control has priority over VP4 control.
For example, if both your camera and the VP4 have gain, by default, gain controls the camera gain.

In this case, 3 new buttons will appear on your RCP:
* `CAM` to toggle the camera head control
* `POST` to toggle the VP4 control
* `C->P` | `P->C` to change the camera/VP4 control priority

#### RCP : Camera and VP4 combined by default

<img src="/img/Manual/VP4/VP4-postpro-camera-combined.png" width="250" />

Combine camera and VP4, camera has priority (VP4 only compensate what the camera has not)

#### RCP : Camera only

<img src="/img/Manual/VP4/VP4-cam-only.png" width="250" />

#### RCP : VP4 only

<img src="/img/Manual/VP4/VP4-postpro-camera-only.png" width="250" />

#### RCP : Camera and VP4, VP4 has priority over camera

<img src="/img/Manual/VP4/VP4-postpro-camera-postpro.png" width="250" />

* `P->C` stands for Post (processing) over Camera control
* `C->P` stands for Camera over Post (processing) control

#### Vector selection

Vectors are identified by a number from **1** to **16**.

**GATE** will highlight the selected vector by desaturating the unselected colors. This allows a quick visual selection of the right vector. This can't be used while the camera is on air as this affect the main signal. Another option is to press the **vect/peek** knob which will generate a small burst of saturation on the selected vector which will be visible on the vectorscope but won't affect the live image  significantly.

<img alt="cyanview-support-RCP-Menu-Multi-Matrix-VP4-Peek-Gate" src="/img/productGfx/VP4/RCP-Menu-VP4-M-Matrix-Peek-Gate@2x-8.png" width="300" />

#### VP4 Controls

<img alt="cyanview-support-RCP-Menu-Multi-Matrix-VP4-Controls" src="/img/productGfx/VP4/RCP-Menu-VP4-M-Matrix-Controls@2x-8.png" width="300" />

- **vect/peek** Rotate the encoder to select the color vector that needs to be modified. Push the encoder will do a saturation peek allowing to  identify the current color vector on screen.

- **hue** Rotate to change the hue of the selected color vector.

- **Saturation** Rotate the encoder to set vector color saturation.

- **enable** Rotate the encoder to select OFF, ON, Gate.
  - *GATE* will highlight the selected vector by desaturating the unselected colors.
  - *ON* enable color correction.
  - *OFF* disable color correction.


## Genlock settings

You can configure the genlock parameters on the VP4 web interface.
You can find it based on [your device serial](/docs/Configuration/ConfIP#find-devices-ip)

<img src="/img/Manual/VP4/VP4-settings.png" width="500" />

It is disabled by default (freerun) and you can:
* enable it
* change horizontal phase
* change vertical phase

## Web UI operations

The **VP4** *color correction* and *color matching* are operated via a **Multi Matrix** on the **RCP**.

To access the RCP Multi Matrix screen, Click on *Paint1*, then push the same button again to see *Paint2* using the *blue buttons*.
Then click on **M-Matrix** in *paint2* menu using the *white buttons*. (see [RCP Screens Overview/Navigation](/docs/Manuals/RCP/RCPControls#rcp-screen))

Color correction is done by selecting a **color vector** and the changing his **hue** and **saturation**.

<img src="/img/Manual/VP4/VP4-multimatrix.png" width="400" />