---
id: sony-fr7
title: "Sony FR7 integration"
sidebar_label: "Sony FR7"
description: "Control the Sony FR7 PTZ cinema camera with Cyanview. Full paint, PTZ, and lens control over IP for remote production."
keywords: [Sony FR7, PTZ, cinema, IP control, REMI]
slug: /integrations/cameras/sony/sony-fr7
---

![Sony FR7 PTZ cinema camera](/img/Integrations/Sony/Sony-FR7/FR7.png)

Control the Sony FR7 over IP with full paint, PTZ, lens, and tally from your Cyanview RCP. The integration combines the [Web app GUI](https://helpguide.sony.net/ilc/2240/v1/en/contents/TP1000669507.html) settings with the [s700 IP protocol](https://helpguide.sony.net/ilc/2240/v1/en/contents/TP1000954839.html) RCP functions.

## Camera control

| Control | FR7 |
|:--------|:----|
| **White balance** (R/B and color temp) | ✔ |
| **Exposure** (iris, gain, base ISO, EI, shutter, variable ND filter) | ✔ |
| **Master black and black balance** | ✔ |
| **Detail level and crispening** | ✔ |
| **User matrix** | ✔ |
| **Multi matrix** | ✔ |
| **Knee** | ✔ |
| **Green and red tally** | ✔ |
| **Camera menu navigation** | ✔ |
| **Lens** — [zoom, focus](/docs/reference/manuals/rcp/ui/scene) | ✔ |
| **Pan/Tilt** — [from RCP touchscreen](/docs/reference/manuals/rcp/ui/scene) or [USB joystick](/docs/integrations/accessories/anxinshi-ptz-usb-joystick) | ✔ |
| **Presets/Positions** — [save/recall](/docs/reference/manuals/rcp/ui/scene#save-and-load) | ✔ |

:::info
When the camera is in SLOG-3 or CineEI mode, the camera disables most paint controls.
:::

## Camera wiring

### With Sony PTZ panel

The Sony PTZ panel provides wired control of pan, tilt, and zoom. The Cyanview RCP runs shading in parallel, and a tablet can handle auto focus independently.

![FR7 wiring diagram with Sony PTZ panel](/img/Integrations/Sony/Sony-FR7/FR7-wiring.png)

- **RCP** — shading, tally, camera menu control
- **PTZ panel** — pan, tilt, zoom
- **Tablet** (optional) — auto focus

### With USB joystick

A [USB joystick](/docs/integrations/accessories/anxinshi-ptz-usb-joystick) attached to the RCP handles pan, tilt, and zoom. When you navigate between cameras on the RCP, the joystick follows. A tablet can still control auto focus in parallel.

![FR7 wiring diagram with USB joystick](/img/Integrations/Sony/Sony-FR7/FR7-wiring-USB.png)

- **RCP** — shading, tally, camera menu control
- **USB joystick** — pan, tilt, zoom
- **Tablet** (optional) — auto focus

## Camera configuration

:::warning
RCP firmware 23.8.1 or later and Sony FR7 firmware **1.10 or later** are required.
:::

Ensure your FR7 is powered on, connected to your network, assigned a static IP address, and that you can reach its web interface.

In `Settings > Technical > Tally`:
- `Tally Lamp Brightness` — set to your preference
- `G Tally Lamp` — `Enable`
- `Tally Control` — `External`

![FR7 tally settings in the web interface](/img/Integrations/Sony/Sony-FR7/FR7-setup-tally.png)

In `Settings > Technical > RCP/MSU`:
- `CNS Mode` — `Bridge`

![FR7 RCP/MSU settings in the web interface](/img/Integrations/Sony/Sony-FR7/FR7-setup-RCP.png)

In `Settings > Network > Brute Force Attack Protection`:
- `Setting` — disable

![FR7 brute force attack protection setting](/img/Integrations/Sony/Sony-FR7/FR7-bruteforce.jpeg)

:::info
If you just disabled Brute Force Attack Protection, power cycle the camera to apply the setting.
:::

## RCP configuration

Add the camera in the [RCP Configuration UI](/docs/reference/manuals/rcp/web-ui):
- Enter a camera number and name.
- Select **Sony** brand.
- Select **Sony FR7** model.
- Enter the camera IP address.
- Enter your login and password.

:::note
If your camera is on a different subnet from your RCP (not 10.192.0.0/16), follow the [IP configuration guide](/docs/guides/networking/ip-configuration) to add a route.
:::

![FR7 camera setup form in RCP configuration UI](/img/Integrations/Sony/Sony-FR7/FR7-setup.png)

When connected successfully, the camera block turns green.

![FR7 camera block showing green connected status](/img/Integrations/Sony/Sony-FR7/FR7-block.png)
