---
id: jvc-camcorder
title: "JVC camcorder integration"
sidebar_label: "JVC"
description: "Control JVC professional camcorders with Cyanview for remote paint and camera settings management."
keywords: [JVC, camcorder, professional, remote control]
slug: /integrations/cameras/other/jvc-camcorder
---

![JVC professional camcorder](/img/Integrations/JVC/JVC-camcorder.jpg)

Cyanview controls JVC professional camcorders over IP, giving you remote access to paint, exposure, and white balance from the RCP.

## Controls

- **Tally** (red)
- **Menu** navigation
- **Iris**
- **Shutter**
- **Master Gain**
- **Red gain**
- **Blue gain**
- **Master black**
- **AWB** (oneshot)
- **Detail**
- **Auto Iris**
- **Auto Exp**

## Connection

This camera is controlled over IP (ethernet or WiFi) and requires a compatible dongle — check your camera manual. A single RCP can control multiple cameras. You can also pair a RIO on the camera side with an RCP for remote control over internet or 4G.

## Setup

- If you have a motorised lens, set it to AUTO to control it from the RCP.
- [Configure a static IP](https://manual3.jvckenwood.com/pro/mobile/gy/lst1586-001en/QUDFSYpukgjkvh.php) in your camera.
- Add a new camera in the RCP, select brand **JVC**, model **Camcorder**, and enter the matching IP address.

![JVC camera setup configuration](/img/Integrations/JVC/JVC-camera-setup.png)

If everything is correct, the status turns green:

![JVC camera connected green status](/img/Integrations/JVC/JVC-camera-block.png)

:::note
If your camera is not in the default Cyanview range (10.192.0.0/16), change your camera IP or add a [new IP range in the RCP](/docs/guides/networking/ip-configuration#lan-configuration).
:::

:::tip
For advanced shading, combine camera control with a [VP4](/docs/reference/manuals/vp4-manual).
:::
