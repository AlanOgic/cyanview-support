---
id: eva1
title: "Panasonic EVA1 integration"
sidebar_label: "Panasonic EVA1"
description: "Connect the Panasonic AU-EVA1 cinema camera to Cyanview for remote paint and iris control."
keywords: [Panasonic EVA1, AU-EVA1, cinema, paint control]
slug: /integrations/cameras/panasonic/eva1
---

## Overview

  <img alt="cyanview-support-integration-panasonic-camcorder-AU-EVA1-configuration-setup" src="/img/Integrations/camera/panasonic/cyanview-support-integration-panasonic-camcorder-AU-EVA1-configuration-setup.jpg" width="500" />

Panasonic AU-EVA1 camera provide remote control and multiple direct access functions over serial protocol. A typical setup consists of a CI0 IP to serial interface to control the camera over IP from an RCP.

<img alt="cyanview-support-integration-panasonic-camcorder-AU-EVA1-configuration-overview" src="/img/Integrations/camera/panasonic/cyanview-support-integration-panasonic-camcorder-AU-EVA1-configuration-overview.png" width="800" />

## Main Adjustments

| Function | Notes |
| :- | :- |
| OSD menus | All functions available |
| Exposure | Iris<sup>1,2</sup>, Shutter, Gain, Auto Exposure |
| White balance | Auto (ATW), One Push, Manual |
| Primary corrections | Master Black<sup>1</sup> , Master Gamma, Color Gains, Saturation |
| Lens<sup>2</sup> | Iris, Focus, Auto focus, Zoom |
| Other | Detail Enhancement, Digital Zoom<sup>1</sup>, White Clip |
1. not supported on all models
2. on zoom block cameras

**Note:** Red and Blue gains are not supported by the AU-EVA1 protocol.

## Setup

### USB connection
The Panasonic AU-EVA1 camera is controlled over IP using one of the supported USB to Ethernet adapters listed below. Other models will not work.
- UGREEN USB 3.0 to Ethernet RJ45 Lan Gigabit Adapter for 10/100/1000 (SKU 20256, make sure to order the USB 3.0 version, not the USB 2.0) Plugable USB3.0 Gigabit Ethernet Adapter
- BUFFALO Wired LAN adapter LUA4-U3-AGT
### Connecting
- Plug the USB - Ethernet adapter at the top back of the camera
  <img alt="cyanview-support-integration-panasonic-camcorder-AU-EVA1-USB" src="/img/Integrations/camera/panasonic/cyanview-support-integration-panasonic-camcorder-AU-EVA1-USB.jpg" width="500" />
- Connect both your Panasonic AU-EVA1 and your Cyanview RCP to a PoE network access.

### Cam setup

  <img alt="cyanview-support-integration-panasonic-camcorder-AU-EVA1-IP-Menu-Configuration" src="/img/Integrations/camera/panasonic/cyanview-support-integration-panasonic-camcorder-AU-EVA1-IP-Menu-Configuration.svg" width="800" />

- [step 1]Verify your Panasonic AU-EVA1 Firmware is in version 3.00-00-0.00 or later.
- [step 2]In the camera menus, select `NETWORK SETTINGS`.
- [step 3]Under `NETWORK FUNC`, either delete all accounts or add an account named `guest` and password `auguest` all lowercase.
- [step 4]Under `NETWORK PROPERTY`, set `TYPE` to 'INFRA(MANUAL)'.
- [step 5]Change `DHCP` to OFF, we will keep the default 192.168.0.1 IP address for this example.
- [step 6]Change `NETWORK SEL` from OFF to WLAN.

  <img alt="cyanview-support-integration-panasonic-camcorder-AU-EVA1-IP-power-button" src="/img/Integrations/camera/panasonic/cyanview-support-integration-panasonic-camcorder-AU-EVA1-IP-power-button.jpg" width="500" />

- [step 7]Power cycle the camera to apply the network changes.


:::note
When changing network configuration or user account, it is usually required to power cycle the camera to apply the changes
:::
