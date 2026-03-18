---
id: sony-cbm
title: "Sony CBM cameras"
sidebar_label: "Sony CBM"
description: "Integrate Sony CBM camera back models with Cyanview for remote paint and iris control in broadcast environments."
keywords: [Sony, CBM, camera back, broadcast]
slug: /integrations/cameras/sony/sony-cbm
---

# Sony CBM

<img src="/img/Integrations/camera/Sony/FX6.jpg" width="400" />

This allows to control your camera over WiFi.

As long as your camera is compatible with the Sony CBM, you can control it using our RCP.

Compatible models:
* FX9
* Z280

## Wiring


<img src="/img/Integrations/camera/Sony/FX6-WiFi.png" width="900" />


OR


<img src="/img/Integrations/camera/Sony/FX6-WiFi-ethernet.png" width="900" />


## Camera Control

|Control|Notes|Control
|:-----|:-----|:----:
| White balance | Color temp, Tint | ✔ |
| Exposure | Iris, Gain, Shutter and ND | ✔ |
| Lens | Zoom, Focus (position is display only, control is in speed) | ✔ |
| Auto | Iris, Gain, Shutter, ND, ATW, AWB, Focus| ✔ |
| Menu | Up/Down, Left/Right | ✔ |
| OETF | HyperGamma, STD | ✔ |
| Pattern | Bars | ✔ |


## Camera Configuration

Ensure to setup your login to `admin` and password to `Abcdef123`.

Ensure to activate the remote control on your WiFi interface.

Navigate to `Menu > Network > ST Mode Settings` and ensure to set:
* `Camera Remote Control` to `Enable`
* `Connected Network` to enter your WiFi SSID/password and static/DHCP

<img src="/img/Integrations/camera/Sony/Sony-FX9/FX9-menu-network-STmode.jpg" width="900" />

:::note
Same with the `Access Point` mode. Don't forget to activate `Camera Remote Control`
:::

## RCP/RIO configuration

Setup a new camera via the [RCP Configuration UI](/docs/Manuals/RCP/ConfWebUI):
- Enter a custom number, name, etc.
- Select **Sony** brand
- Select **Sony CBM** for the protocol
- Enter the IP of your camera

This should looks like this:

<img src="/img/Integrations/camera/Sony/FX6-config-block.png" width="300" />

And once correctly connected, it should be green:

<img src="/img/Integrations/camera/Sony/FX6-config-setup.png" width="300" />

