---
id: arri-cforce
title: "ARRI cforce motors"
sidebar_label: "ARRI cforce"
description: "Control ARRI cforce lens motors with Cyanview through a RIO for precision focus, iris, and zoom control."
keywords: [ARRI, cforce, lens motor, focus, iris, zoom]
slug: /integrations/cameras/arri/arri-cforce
---

# ARRI cforce motors


## Overview

Compatible models:
* ARRI cforce mini
* ARRI cforce mini RF
* ARRI cforce plus

<img src="https://www.arri.com/resource/responsive-image/344442/text-media-halfsize/lg/5/cforce-motors-group-articles.jpg" width="400"/>


## Wiring

<img src="/img/Integrations/ARRI/cforce/ARRI-cforce-wiring.png" width="1000"/>

* up to 3 motors on the CAN bus
* the last motor takes power from 2nd port
* the first motor connects the LBUS CAN-L and CAN-H to the USB dongle
* the USB dongle plugs in any USB port of the RIO

optional:
* link RCP/RIO through ethernet, wifi, 4G, etc.
* add blackmagic handles (so iris is done on RCP and zoom/focus with the blackmagic handles)

On the USB dongle, should be wired:
* CAN-L
* CAN-H

## Setup

On an existing camera, scroll to `Lens` section:
* `Model` : select `ARRI - cforce`
* `Interface` : select your USB dongle (in my case `USB:1`, which means USB on port 1)

By default:
* iris + zoom + focus are controlled
* iris 1.6 to 32 with torque 2, direction left
* zoom torque 2, direction left
* focus torque 2, direction left

You can alter the configuration, especially to adapt the iris range:
* top right of the panel, click on `...`
* activate "advanced mode"
* come back to your lens setup, new `Advanced` field
* text, `zoom|iris|focus` config serparated by `,` (each block should be fully configured: range if applicable, function, torque and direction). If you just configure iris, default focus and default zoom are still applied.
* formats:
  * iris : `IRIS_MIN:IRIS_MAX:iris:IRIS_TORQUE:IRIS_DIRECTION`
    * `IRIS_MIN` is the minimum iris value
    * `IRIS_MAX` is the maxium iris value
    * `IRIS_TORQUE` is the torque of the iris motor (1, 2, 3 or 4)
    * `IRIS_DIRECTION` is the direction of the iris motor (left or right) 
  * zoom: `zoom:ZOOM_TORQUE:ZOOM_DIRECTION`
    * `ZOOM_TORQUE` is the torque of the zoom motor (1, 2, 3 or 4)
    * `ZOOM_DIRECTION` is the direction of the zoom motor
  * focus: `focus:FOCUS_TORQUE:ZOOM_DIRECTION`
    * `FOCUS_TORQUE` is the torque of the focus motor (1, 2, 3 or 4)
    * `FOCUS_DIRECTION` is the direction of the focus motor (left or right)
  * examples:
    * `1.6:32:iris:2:left` : iris from 2 to 8, torque is 2, direction is left
    * `2:32:iris:2:right` : iris from 2 to 32, torque is 2, direction is right
    * `1.6:32:iris:2:left,zoom:4:right` : iris from 1.6 to 32, left and torque is 2. Zoom with torque 4 and direction is right. No focus.
    * `1.6:32:iris:2:left,zoom:4:right,focus:2:left` : iris, zoom and focus with torque 2 and direction left


<img src="/img/Integrations/ARRI/cforce/ARRI-cforce-setup.png" width="400"/>

If everything is properly configured and wired, the `lens` block should appear green:

<img src="/img/Integrations/ARRI/cforce/ARRI-cforce-block.png" width="400"/>


:::info
Here the camera head is "Not controlled", so I just have read/write of iris/zoom/focus. But I could combine it with any camera control.
:::

## Calibration

You can run the motor calibration from the RCP:


This menu is available in `MENU > LENS > LENS > ACTION`, click on `Calibrate`


<img src="/img/Integrations/ARRI/cforce/RCP-UI/calibration.gif" width="400"/>
