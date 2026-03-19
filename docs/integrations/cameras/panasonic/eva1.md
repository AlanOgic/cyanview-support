---
id: eva1
title: "Panasonic EVA1 integration"
sidebar_label: "Panasonic EVA1"
description: "Connect the Panasonic AU-EVA1 cinema camera to Cyanview for remote paint and iris control."
keywords: [Panasonic EVA1, AU-EVA1, cinema, paint control]
slug: /integrations/cameras/panasonic/eva1
---

The Panasonic AU-EVA1 provides remote control and multiple direct-access functions over serial protocol. A typical setup uses a CI0 IP-to-serial interface to control the camera over IP from an RCP.

![AU-EVA1 configuration overview](/img/Integrations/camera/panasonic/cyanview-support-integration-panasonic-camcorder-AU-EVA1-configuration-overview.png)

## Supported control

| Function | Notes |
| :- | :- |
| OSD menus | All functions available |
| Exposure | Iris<sup>1,2</sup>, Shutter, Gain, Auto Exposure |
| White balance | Auto (ATW), One Push, Manual |
| Primary corrections | Master Black<sup>1</sup>, Master Gamma, Color Gains, Saturation |
| Lens<sup>2</sup> | Iris, Focus, Auto focus, Zoom |
| Other | Detail Enhancement, Digital Zoom<sup>1</sup>, White Clip |

1. Not supported on all models.
2. On zoom block cameras only.

:::info
Red and Blue gains are not supported by the AU-EVA1 protocol.
:::

## Setup

### USB connection

The AU-EVA1 is controlled over IP using one of the supported USB-to-Ethernet adapters below. Other models will not work.

- UGREEN USB 3.0 to Ethernet RJ45 Gigabit Adapter (SKU 20256 — order the USB 3.0 version, not USB 2.0)
- Plugable USB 3.0 Gigabit Ethernet Adapter
- BUFFALO Wired LAN adapter LUA4-U3-AGT

### Connecting

Plug the USB-Ethernet adapter into the top back of the camera.

![AU-EVA1 USB adapter location](/img/Integrations/camera/panasonic/cyanview-support-integration-panasonic-camcorder-AU-EVA1-USB.jpg)

Connect both your AU-EVA1 and your Cyanview RCP to a PoE network.

### Camera setup

![AU-EVA1 IP menu configuration](/img/Integrations/camera/panasonic/cyanview-support-integration-panasonic-camcorder-AU-EVA1-IP-Menu-Configuration.svg)

1. Verify your AU-EVA1 firmware is version 3.00-00-0.00 or later.
2. In the camera menus, select `NETWORK SETTINGS`.
3. Under `NETWORK FUNC`, either delete all accounts or add an account with username `guest` and password `auguest` (all lowercase).
4. Under `NETWORK PROPERTY`, set `TYPE` to `INFRA(MANUAL)`.
5. Set `DHCP` to OFF. For this example, keep the default IP address `192.168.0.1`.
6. Change `NETWORK SEL` from OFF to WLAN.

![AU-EVA1 power button](/img/Integrations/camera/panasonic/cyanview-support-integration-panasonic-camcorder-AU-EVA1-IP-power-button.jpg)

7. Power cycle the camera to apply the network changes.

:::note
After any network configuration or user account change, you must power cycle the camera for the changes to take effect.
:::
