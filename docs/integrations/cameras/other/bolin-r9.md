---
id: bolin-r9
title: "Bolin R9 integration"
sidebar_label: "Bolin R9"
description: "Integrate the Bolin R9 PTZ camera with Cyanview for remote pan, tilt, zoom, and paint control."
keywords: [Bolin, R9, PTZ, remote control]
slug: /integrations/cameras/other/bolin-r9
---

![Bolin R9 PTZ camera front view](/img/Integrations/Bolin/R9_front.png)

Cyanview controls the Bolin R9 PTZ camera over IP, giving you remote paint and PTZ control from the RCP.

## Supported controls

- **Paint**
  - **Filters** — ND Filters
  - **White balance**[^WB] — red gain, blue gain
  - **Black balance** — master black
  - **Matrix**
  - **Multimatrix**
  - **Gain** — ISO, EV
  - **Shutter**
  - **Color** — Saturation, Hue
- [**Lens/PTZF**](/docs/reference/manuals/rcp/ui/lens.md)
  - **Iris**
  - **Pan/tilt** — status, speed/position control
  - **Zoom/Focus** — status, speed/position control
  - **PTZ Presets**
- **Camera**
  - **Auto** — Focus, Shutter, Gain
  - **Menu**[^MENU] — OSD
  - **Tally**[^TALLY]

[^WB]: Red and blue gains are only available when the camera WB Mode is set to **User**.
[^MENU]: The OSD is available on SDI#1.
[^TALLY]: Tally requires **SYSTEM > TALLY MODE > ON** in the camera menu.

## Configuration

Configure the camera using the [Generic PTZ guide](/docs/integrations/generic/ptz).

Bolin provides a discovery tool to help set up the camera. Make sure the camera IP address is reachable by the RCP — see the [IP configuration page](/docs/guides/networking/ip-configuration?_highlight=ip#lan-configuration) for details.

## Workflow

The [Anxinshi joystick](/docs/integrations/accessories/anxinshi-ptz-usb-joystick) provides a more convenient interface than the RCP touchscreen for pan, tilt, zoom, and presets.

The [Elgato Stream Deck](/docs/integrations/accessories/elgato-stream-deck) can recall PTZ presets.
