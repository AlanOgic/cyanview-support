---
id: sony-fcb
title: "Sony FCB block cameras"
sidebar_label: "Sony FCB"
description: "Control Sony FCB block cameras with Cyanview over VISCA serial. Compact camera modules for robotic and specialty applications."
keywords: [Sony FCB, block camera, VISCA, robotic, compact]
slug: /integrations/cameras/sony/sony-fcb
---

# Sony FCB

<img src="/img/Integrations/Sony/Sony-FCB/Sony-FCB-ER8530.jpeg" width="400" />

## Compatible models

* Sony FCB-7520
* Sony FCB-8230
* Sony FCB-8530
* Sony FCB-8550
* Sony FCB-H11

:::note
More or less all the FCB models are compatible, but we only tested the ones listed above.

If your model is different, as they're often similar and just different capabilities, chose a close model and try it.
:::

## Controls

|Control|FCB-XXX
:-----|:-----:|
**Exposure** (Iris, Gain, Shutter)|✔
**White balance** (R/B)|✔
**Advance Shading** (Master Gamma, Detail value + on/off)|✔
**Lens** (Zoom/focus in speed/position)|✔
**Menus** (I_lens, I_cam, ICRon, ICRoff, FlipOn, FlipOff)|✔
**Other** (AWB/ATW, Auto Focus, Auto Gain/Shutter/Iris (and EV comp))|✔
**Scene file** : <a href="/docs/reference/manuals/rcp/ui/scene">save/recall</a>|✔

## Wiring

<img src="/img/Integrations/Sony/Sony-FCB/Sony-FCB-wiring.png" width="900" />

* The camera is connected to the CI0 using the cable <a href="/docs/resources/cable-catalog#cy-cbl-6p-fan">CY-CBL-6P-FAN</a>:
    - GND / PWR to the camera power input (the CI0 can be powered by PoE or 12V and will power the camera + control it over serial)
    - GND / Tx / Rx to the VISCA/RS232 port of the camera
* The RCP is connected to the CI0 using Ethernet

:::note
For remote/wireless/RF applications, you can use a RIO with a <a href="/docs/resources/cable-catalog#cy-cbl-6p-fan">CY-CBL-6P-FAN</a> cable to connect to the camera.
:::

## Setup

### VISCA bus

This camera is controlled using the VISCA protocol over serial.

You need to add the BUS to the RCP configuration via the <a src="/docs/reference/manuals/rcp/web-ui">RCP Configuration UI</a>.

In Features:
* click on `+`
* select `Sony: VISCA Bus`
* click on the new `Sony VISCA` block that just appeared

Configure it as follow:

<img src="/img/Integrations/Sony/Sony-FCB/Sony-FCB-VISCA-setup.png" width="400" />

:::note
Adapt IDs, baudrate, etc. based on your camera setup.
:::

It should look like this:

<img src="/img/Integrations/Sony/Sony-FCB/Sony-FCB-VISCA-block.png" width="400" />

:::note
This bus has no status (red/green), as it only makes sense when linked to a camera
:::

## Camera

You can now create a camera in the RCP configuration via the <a src="/docs/reference/manuals/rcp/web-ui">RCP Configuration UI</a>, and link it to the VISCA bus.

In Camera:
* Click on `+`
* Click on the new camera block that just appeared
* Enter a number
* Enter a name
* Select `Sony` as brand
* Select `FCBXXXX` as model, here in my case `FCB8230` as my exact model is `FCB-ER8530` and not in the list
* Select the `CI0` port and `VISCA bus ID`, here in my case `CI0-20-99:2:Visca:1` (my `VISCA bus` on CI0 `20-99`, port `2` and the camera `ID` on this bus is `1`).

<img src="/img/Integrations/Sony/Sony-FCB/Sony-FCB-setup.png" width="400" />

It should look like this:

<img src="/img/Integrations/Sony/Sony-FCB/Sony-FCB-block.png" width="400" />
