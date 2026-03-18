---
id: cmotion-cgate
title: "cmotion Cgate integration"
sidebar_label: "cmotion Cgate"
description: "Connect cmotion Cgate wireless lens controllers with Cyanview for remote focus and iris control on cinema setups."
keywords: [cmotion, Cgate, wireless, lens control, cinema]
slug: /integrations/accessories/cmotion-cgate
---

# cmotion cGate

## Overview

<img src="/img/Integrations/cmotion/cgate_left.png" width="250"/>
<img src="/img/Integrations/cmotion/cgate_front.avif" width="250"/>
<img src="/img/Integrations/cmotion/cgate_right.png" width="250"/>

The cgate needs to have a Cyanview compatible firmware (v2.0.0 or above)

## Wiring

<img src="/img/Integrations/cmotion/cgate_wiring.png" width="750"/>

* Connect the cgate ethernet to the same network as the RCP/RIO.
* The wiring of the motor(s) on the LBUS side of cgate is as in the cForce.
* Up to 3 motors connected to the cGate
* Provide power through for the cGate and motors the LBUS

optional:
* add blackmagic handles (so iris is done on RCP and zoom/focus with the blackmagic handles)

## Setup

On an existing camera, scroll to `Lens - External control override` section:
* `Model` : select `cmotion - cGate`
* [Toggle Advanced Mode](/docs/guides/advanced/serial-camera#toggle-advanced-mode)
* `Advanced` : put the ip address of the cgate. When done, the `Interface` should update to the ip address. Make sure that the ip address of the cgate is reachable by the RCP, see [this page](/docs/guides/networking/ip-configuration?_highlight=ip#lan-configuration) for more information about ip configuration.

If everything is properly configured, the `lens` block should turn green:
<img src="/img/Integrations/cmotion/config_base_cam_400x307.png"/>
<img src="/img/Integrations/cmotion/config_base_lens_390x307.png"/>
:::info
Here the camera head is "Not controlled", so I just have read/write of iris/zoom/focus. But I could combine it with any camera control.
:::

The default setup provides iris control with the following parameters : 
* iris values from `1.6` to `32`
* Torque setting `2`
* Motor direction `left`

All motors are automatically discovered.

Follow the [Advanced setup](#advanced-setup) section to add other axis or change parameters.

## Advanced setup

By default:
* iris + zoom + focus are controlled
* iris 1.6 to 32 with torque 2, direction left
* zoom torque 2, direction left
* focus torque 2, direction left

You can alter the configuration, especially to adapt the iris range:
* come back to your lens setup, in the `Advanced` field
* `zoom|iris|focus` config separated by `,` (each block should be fully configured: range if applicable, function, torque and direction). If you just configure iris, default focus and default zoom are still applied. To leave a setting unchange you can use "_".
* formats:
  * iris : `IRIS_MIN:IRIS_MAX:iris:IRIS_TORQUE:IRIS_DIRECTION`
    * `IRIS_MIN` is the minimum iris value
    * `IRIS_MAX` is the maximum iris value
    * `IRIS_TORQUE` is the torque of the iris motor (1, 2, 3 or 4)
    * `IRIS_DIRECTION` is the direction of the iris motor (left or right)
  * zoom: `zoom:ZOOM_TORQUE:ZOOM_DIRECTION`
    * `ZOOM_TORQUE` is the torque of the zoom motor (1, 2, 3 or 4)
    * `ZOOM_DIRECTION` is the direction of the zoom motor
  * focus: `focus:FOCUS_TORQUE:ZOOM_DIRECTION`
    * `FOCUS_TORQUE` is the torque of the focus motor (1, 2, 3 or 4)
    * `FOCUS_DIRECTION` is the direction of the focus motor (left or right)
  * examples:
    * `2:8:iris:2:left` : iris from 2 to 8, torque is 2, direction is left
    * `2:32:iris:2:right` : iris from 2 to 32, torque is 2, direction is right
    * `1.6:32:iris:_:left,zoom:4:_` : iris from 1.6 to 32, direction is left and torque is unchanged. Zoom with torque 4 and direction is unchanged. No focus.
    * `1.6:32:iris:2:left,zoom:4:right,focus:2:left` : iris and focus with torque 2 and direction left. Zoom with torque 4 and direction right.

<img src="/img/Integrations/cmotion/config_iris_zoom_392x307.png"/>

If everything is properly configured and wired, the `lens` block should appear green.

:::warning The config for an axis needs to be complete.
If you only need to set the iris direction, you still have to set the torque. The only exception is the iris min and max that can be set without torque and direction.
:::

:::note
The motor direction is internal the RCP. It will not change the direction setting of the motor itself. That way, you can invert the direction even if you are using the motor on a 3D setup with motors on each side. It is the controller direction and not the motor direction.
:::

## Calibration

You can run the motor calibration from the RCP:


This menu is available in `MENU > LENS > LENS > ACTION`, click on `Calibrate`

Make sure to have a powerful enough power supply as calibration all the motors at the same time requires a lot of current. 

<img src="/img/Integrations/ARRI/cforce/RCP-UI/calibration.gif" width="400"/>

## cGate with RCP and HandUnit

If the RCP and a cmotion Hand Unit both try to control the cgate, the RCP will win by default. In order to give control to the Hand Unit, you can release the cgate from the RCP for specific axis from the menu 'Lens>Lens>Control' and toggle the switches.

<img src="/img/Manual/RCP/RCP-menu-lens-1_1_2.BMP"/>

## Troubleshooting

### Lens is green, but nothing happens
There can be several causes : 
- Motor not calibrated : inspected the motor led button, it should be green. If it's not the case, perform a calibration either by long pressing the motor button or though the [RCP Lens action](#calibration).
- Wrong advanced setup : if there is a syntax error in the parameters of the motor it can cause an issue. Make sure to follow the exact syntax described in the [Advanced setup](#advanced-setup).

### The iris value on the RCP does not match the lens on the camera
The RCP does not know the iris range of the lens. To match the iris value to the lens on the camera follow the [Advanced setup](#advanced-setup)
