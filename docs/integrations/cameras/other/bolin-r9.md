---
id: bolin-r9
title: "Bolin R9 integration"
sidebar_label: "Bolin R9"
description: "Integrate the Bolin R9 PTZ camera with Cyanview for remote pan, tilt, zoom, and paint control."
keywords: [Bolin, R9, PTZ, remote control]
slug: /integrations/cameras/other/bolin-r9
---

<img src="/img/Integrations/Bolin/R9_front.png" width="450" />

## Supported Controls
- **Paint**
  - **Filters** : ND Filters
  - **White Balance[^WB]** : red gain, blue gain
  - **Black Balance** : master black
  <!-- - **Detail** -->
  <!-- - **Skin Detail** -->
  - **Matrix**
  <!-- - **Color Corrector** -->
  - **Multimatrix**
  - **Gain** : ISO, EV
  <!-- - **Gamma** -->
  <!-- - **Knee** -->
  - **Shutter**
  - **Color** : Saturation, Hue
  <!-- - **Look** -->
  <!-- - **Denoise** -->
- [**Lens/PTZF**](/docs/Manuals/RCP/RCPUI/RCPUILens.md)
  - **Iris**
  - **Pan/tilt** : Status, Speed/Position Control
  - **Zoom/Focus** : Status, Speed/Position Control
  - **PTZ Presets**
  <!-- - **Vertical Flip** -->
<!-- - **Camera** -->
  <!-- - **Audio** -->
  <!-- - **Auto** : Focus, Focus Oneshot, Shutter, Gain -->
  <!-- - **Custom** -->
  <!-- - **SDI Video Format** -->
  <!-- - **Menu** : not in API-->
  <!-- - **Power** -->
  <!-- - **Sensor** -->
  <!-- - **Status** : camera model and software version -->
  <!-- - **Tally** : Red and Green -->
  <!-- - **Test** -->
<!-- - **Others** -->
  <!-- - **Record** -->
  
:::note
Some of the other features of the camera will be availble in an upcoming software update. Among those features are the auto modes, record and tally.
:::

[^WB]: Red and Blue gains are only available when the camera 'WB Mode' is set to 'User'.

## Configuration

The camera can be configured using the [Generic PTZ Guide](/docs/Integrations/Generic/PTZ)

Bolin provides a discovery tool to help setup the camera. Make sure that the ip address of the camera is reachable by the RCP, see [this page](/docs/Configuration/ConfIP?_highlight=ip#lan-configuration) for more information about ip configuration.

## Workflow

The [Anxinshi joystick](/docs/Integrations/Accessories/AnxinshiPTZUSBJoystick) can provide a more convenient user interface than the RCP touchscreen for pan, tilt, zoom and presets.

The [Elgato Stream Deck](/docs/Integrations/Accessories/ElgatoStreamDeck) can be used to recall the PTZ presets.
