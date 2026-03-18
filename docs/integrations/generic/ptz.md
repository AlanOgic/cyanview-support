---
id: ptz
title: "PTZ camera integration"
sidebar_label: "PTZ cameras"
description: "Control pan-tilt-zoom cameras with Cyanview. Set up PTZ joystick control, presets, and speed curves over IP or serial connections."
keywords: [PTZ, pan tilt zoom, joystick, presets, VISCA]
slug: /integrations/generic/ptz
---

# PTZ

This guide describes how to configure a PTZ cameras.

<img src="/img/Integrations/Panasonic/AW-UE150.png" width="300"/>

## Compatible PTZ

If your model is not listed, you can try a `similar` or `close` model.

If that doesn't work, contact Cyanview support.

### BirdDog

* BirdDog P100
* BirdDog P200
* BirdDog P400
* BirdDog P4K
* BirdDog X1
* BirdDog X4
* BirdDog X5

### Canon

* CR-N300
* CR-N500

### Panasonic:

AW-HE:
* AW-HE40
* AW-HE42
* AW-HE50
* AW-HE60
* AW-HE70
* AW-HE120
* AW-HE130

AW-UE:
* AW-UE70
* AW-UE100
* AW-UE150

AW-HR:
* AW-HR140 (use `AW-HE130` model)

### Sony

* ILME-FR7
* BRC-X1000
* BRC-X400
* BRC-H900
* BRC-H800

### Z Cam

* P2-R1

## Controls

You can control:
* Exposure
* White balance
* Black balance
* Advance shading (multi matrix, etc.) based on camera compatibility
* Pan/Tilt/Zoom/Focus

For a more detailed list, check if your model has its own integration guide.

## Wiring

Compatible Cyanview device: RCP, RIO, RIO Live

If the RCP/RIO doesn't have an IP address in the same range as the camera IP, you should add one in the LAN section by following this <a href="/docs/guides/networking/ip-configuration">guide</a>.

<img src="/img/Integrations/Generic/ptz-wiring.png" width="900"/>

## Setup

In this example, we will set up a Panasonic AW-UE150, but the setup is similar for all other PTZ.

On the same RCP. You can have multiple PTZ from multiple brands without any issue.

<img src="/img/Integrations/Panasonic/panasonic-ptz-setup.png" width="300"/>

Setup:
* Click on the `+` in the camera block, a new panel will appear on the right
* In `General` Configure a Number and a Name
* Select the brand (here `Panasonic`)
* Select the model (here `AW-UE150`)
* Enter the IP of your PTZ

If everything went well, it should go green:

<img src="/img/Integrations/Panasonic/panasonic-ptz-block.png" width="300"/>

## Pan/Tilt

Once the camera is configured, you can have:
* Cyanview RCP (shading) and Sony joystick panel (`rm-ip500`)
* Cyanview RCP (shading + pan/tilt/zoom/focus) from touchscreen, more information <a href="/docs/reference/manuals/rcp/ui/scene">here</a>
* Cyanview RCP (shading + pan/tilt/zoom/focus) from USB joystick, more information <a href="/docs/integrations/accessories/anxinshi-ptz-usb-joystick">here</a>

## Remote control / Remote production

Even if the PTZ control is IP, it can be interesting to combine a PTZ with a <a href="/docs/reference/manuals/rio-manual">RIO</a> (with AVIWEST for example).

Or combine local shading with RCP with remote shading from anywhere in the world using a second RCP.

For more information, take a look at <a href="/docs/guides/networking/remi">REMI page</a>