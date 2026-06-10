---
id: zcam-p2r1
title: "Z CAM integration"
sidebar_label: "Z CAM"
description: "Integrate Z CAM cameras with Cyanview for remote paint and camera control in cinema production."
keywords: [Z CAM, cinema, remote control, IP]
slug: /integrations/cameras/other/zcam-p2r1
---

![Z CAM cinema camera front view](/img/Integrations/Zcam/camera_front.png)

Cyanview controls Z CAM cameras over IP, giving you remote paint, PTZ, and recording control from the RCP.

## Supported controls

- **Paint**
  - **White balance**[^WB] — Color Temperature, Tint
  - **Matrix**
  - **Multimatrix**
  - **Gain** — ISO, EV
  - **Gamma**[^GAMMA] — OETF, SDR Gamma
  - **Shutter**
  - **Color** — Saturation, Hue
- [**Lens/PTZF**](/docs/reference/manuals/rcp/ui/lens.md)
  - **Iris**
  - **Pan/tilt** — status, speed control
  - **Zoom/Focus** — status, speed control, Digital Zoom
  - **PTZ Presets**
  - **Vertical Flip**
- **Camera**
  - **Auto** — Focus, Focus Oneshot, Shutter, Gain
  - **SDI Video Format**
  - **Test**
- **Others**
  - **Record**

[^WB]: White balance control via color temperature and tint requires the camera to be in white balance mode **Manual**.

[^GAMMA]: SDR Gamma is accessible only when OETF is set to **Gamma**.

## Configuration

Configure the camera using the [Generic PTZ guide](/docs/integrations/generic/ptz).

By default, the Z CAM uses IP address `10.98.32.1`. Make sure this address is reachable by the RCP — see the [IP configuration page](/docs/guides/networking/ip-configuration#lan-configuration) for details.

## Workflow

The [Anxinshi joystick](/docs/integrations/accessories/anxinshi-ptz-usb-joystick) provides a more convenient interface than the RCP touchscreen for pan, tilt, zoom, and presets.

The [Elgato Stream Deck](/docs/integrations/accessories/elgato-stream-deck) can recall PTZ presets.
