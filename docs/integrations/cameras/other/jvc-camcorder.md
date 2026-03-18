---
id: jvc-camcorder
title: "JVC camcorder integration"
sidebar_label: "JVC"
description: "Control JVC professional camcorders with Cyanview for remote paint and camera settings management."
keywords: [JVC, camcorder, professional, remote control]
slug: /integrations/cameras/other/jvc-camcorder
---

<img src="/img/Integrations/JVC/JVC-camcorder.jpg" width="450" />

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

This camera is controlled over IP (**ethernet** or **WiFi**), requires a **compatible dongle** (check your camera manual).
A single RCP can control multiple cameras (ethernet, WiFi).
You can also use a RIO on the camera side, combined with a RCP if you need remote control (internet, 4G).

## Setup

- If you have a motorised lens, ensure it is in AUTO if you want to control if from the RCP
- Setup a [static IP](https://manual3.jvckenwood.com/pro/mobile/gy/lst1586-001en/QUDFSYpukgjkvh.php) in your camera
- Setup a new camera, select brand JVC, model Camcorder. Ensure the IP match the one configured in your camera.

<img src="/img/Integrations/JVC/JVC-camera-setup.png" width="450" />

- If everything is fine, status should go green

<img src="/img/Integrations/JVC/JVC-camera-block.png" width="450" />

:::note
If your camera is not in the default Cyanview range (10.192.0.0/16), you can either change your camera IP, or add a [new IP range inside the RCP](/docs/guides/networking/ip-configuration#lan-configuration)
:::

:::note
If you need advanced shading, you can combine camera control with a [VP4](/docs/reference/manuals/vp4-manual)
:::
