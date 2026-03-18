---
id: zcam-p2r1
title: "Z CAM integration"
sidebar_label: "Z CAM"
description: "Integrate Z CAM cameras with Cyanview for remote paint and camera control in cinema production."
keywords: [Z CAM, cinema, remote control, IP]
slug: /integrations/cameras/other/zcam-p2r1
---

<img src="/img/Integrations/Zcam/camera_front.png" width="450" />

## Supported Controls
- **Paint**
  <!-- - **Filters** -->
  - **White Balance[^WB]** : Color Temperature, Tint
  <!-- - **Black Balance** -->
  <!-- - **Detail** -->
  <!-- - **Skin Detail** -->
  - **Matrix**
  <!-- - **Color Corrector** -->
  - **Multimatrix**
  - **Gain** : ISO, EV
  - **Gamma[^GAMMA]** : OETF, SDR Gamma
  <!-- - **Knee** -->
  - **Shutter**
  - **Color** : Saturation, Hue
  <!-- - **Look** -->
  <!-- - **Denoise** -->
- [**Lens/PTZF**](/docs/reference/manuals/rcp/ui/lens.md)
  - **Iris**
  - **Pan/tilt** : Status, Speed Control
  - **Zoom/Focus** : Status, Speed Control, Digital Zoom
  - **PTZ Presets**
  - **Vertical Flip**
- **Camera**
  <!-- - **Audio** -->
  - **Auto** : Focus, Focus Oneshot, Shutter, Gain
  <!-- - **Custom** -->
  - **SDI Video Format**
  <!-- - **Menu** : not in API-->
  <!-- - **Power** -->
  <!-- - **Sensor** -->
  <!-- - **Status** : camera model and software version -->
  <!-- - **Tally** : Red and Green -->
  - **Test**
- **Others**
  - **Record**

[^WB]: In order to have control of the white balance through the color temperature and tint, the camera must be in white balance mode manual.

[^GAMMA]: The SDR Gamma is accessible only if the OETF is set to "Gamma".

## Configuration

The camera can be configured using the [Generic PTZ Guide](/docs/integrations/generic/ptz)

By default, the Z CAM has the ip address `10.98.32.1`. Make sure that the address is reachable by the RCP, see [this page](/docs/guides/networking/ip-configuration?_highlight=ip#lan-configuration) for more information about ip configuration.

## Workflow

The [Anxinshi joystick](/docs/integrations/accessories/anxinshi-ptz-usb-joystick) can provide a more convenient user interface than the RCP touchscreen for pan, tilt, zoom and presets.

The [Elgato Stream Deck](/docs/integrations/accessories/elgato-stream-deck) can be used to recall the PTZ presets.
