---
id: varicam
title: "Panasonic VariCam integration"
sidebar_label: "Panasonic VariCam"
description: "Integrate the Panasonic VariCam cinema camera with Cyanview for remote paint and exposure control."
keywords: [Panasonic VariCam, cinema, paint, exposure]
slug: /integrations/cameras/panasonic/varicam
---

<img src="/img/Integrations/Panasonic/varicam.png" width="900" />

## Controls

- [tally (red, green, call)](/docs/Configuration/Tally/)
- OSD/Menu
- Lens
- Iris
- Gains (master, red, blue)
- Blacks (master, red, blue)
- Whiteclip
- Shutter
- Knee
- Saturation
- Detail
- Multimatrix

## Compatible Cyanview device

- RCP for local (LAN) and remote control (internet)
- RIO for remote control (internet)

## Setup

The link between the RCP/RIO and the camera is IP.

On camera side:
- Setup a static IP
- Ensure to have a **user/password** : **guest/p2guest**

On RCP side:
- Ensure to be be on your camera network with [a compatible IP](/docs/Configuration/ConfIP#lan-configuration)
- Setup a new camera via the [RCP Configuration UI](/docs/Manuals/RCP/ConfWebUI):
    * Select **Panasonic** brand
    * Select **Varicam** model
    * Enter the IP of your camera

<img src="/img/Integrations/Panasonic/varicam-setup.png" width="200" />

And once the camera is correctly controlled by the RCP, it should look like that:

<img src="/img/Integrations/Panasonic/varicam-block.png" width="300" />


