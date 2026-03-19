---
id: sony-cbm
title: "Sony CBM cameras"
sidebar_label: "Sony CBM"
description: "Integrate Sony CBM camera back models with Cyanview for remote paint and iris control in broadcast environments."
keywords: [Sony, CBM, camera back, broadcast]
slug: /integrations/cameras/sony/sony-cbm
---

![Sony FX6 camera](/img/Integrations/camera/Sony/FX6.jpg)

Control Sony CBM-compatible cameras over WiFi or wired Ethernet using your Cyanview RCP. Any camera that supports the Sony CBM protocol works with this integration.

**Compatible models:**
- FX9
- Z280

## Wiring

![Sony CBM WiFi wiring diagram](/img/Integrations/camera/Sony/FX6-WiFi.png)

OR

![Sony CBM WiFi with Ethernet wiring diagram](/img/Integrations/camera/Sony/FX6-WiFi-ethernet.png)

## Camera control

| Control | Notes | |
|:--------|:------|:----:|
| White balance | Color temp, Tint | ✔ |
| Exposure | Iris, Gain, Shutter, ND | ✔ |
| Lens | Zoom, Focus (position display only; control is speed-based) | ✔ |
| Auto | Iris, Gain, Shutter, ND, ATW, AWB, Focus | ✔ |
| Menu | Up/Down, Left/Right | ✔ |
| OETF | HyperGamma, STD | ✔ |
| Pattern | Bars | ✔ |

## Camera configuration

Set your camera login to `admin` and password to `Abcdef123`.

Navigate to `Menu > Network > ST Mode Settings` and set:
- `Camera Remote Control` — `Enable`
- `Connected Network` — enter your WiFi SSID, password, and IP settings (static or DHCP)

![FX9 network ST Mode settings menu](/img/Integrations/camera/Sony/Sony-FX9/FX9-menu-network-STmode.jpg)

:::note
The same applies in **Access Point** mode — make sure to enable `Camera Remote Control` there too.
:::

## RCP/RIO configuration

Add the camera in the [RCP Configuration UI](/docs/reference/manuals/rcp/web-ui):
- Enter a camera number and name.
- Select **Sony** brand.
- Select **Sony CBM** protocol.
- Enter the camera IP address.

![Sony CBM camera setup form in RCP configuration UI](/img/Integrations/camera/Sony/FX6-config-block.png)

When connected successfully, the camera block turns green.

![Sony CBM camera block showing green connected status](/img/Integrations/camera/Sony/FX6-config-setup.png)
