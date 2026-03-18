---
id: lens
title: "RCP UI — Lens control"
sidebar_label: "Lens"
description: "Lens control interface on the Cyanview RCP. Focus, zoom, iris settings, and lens motor configuration."
keywords: [RCP, UI, lens control, focus, zoom, iris]
slug: /reference/manuals/rcp/ui/lens
---

## Overview

The Lens menu allows you to control:
* lens : zoom, focus
* robotics : pan/tilt/roll

The type of control (speed or position) and what you can control will vary, based on:
* the camera
* the lens
* the robotic head

This will also vary if you:
* have a PTZ
* have a lens (iris, zoom, focus) is controlled through the camera
* have an external lens (iris, zoom, focus) is controlled externally (in parallel of the camera) directly through the lens or using motors (ARRI, Tilta)

:::note
Usually:
* PTZ have speed/position control for everything (zoom, focus, pan, tilt)
* Camera have iris control in position, but no zoom/focus control
* Lens (+Camera) have iris in position and zoom/focus (optional) in speed and position

It's based on the camera protocol limitations.
:::

:::note
This speed/position is important:
* To use external zoom/focus control (BM handles, etc.), you need to ensure you have zoom in speed and focus in position.
* To smooth the remote control (4G, etc.), it's better to use speed instead of position as it smooth the network jitter
* you can only save/recall absolute positions
:::

## Lens menu

Path : `MENU > LENS`

<img src="/img/Manual/RCP/Lens/F1.BMP"/>

* `LENS` is dedicated to setup/infos
* `PTZF` is dedicated to PTZ control/operation

<img src="/img/Manual/RCP/Lens/F2.BMP"/>

This page only works for external lens (i.e. Canon PL lens on FX9 controlled with RIO-live):
* control is exclusive : if RIO takes control, cameraman lose control
* Iris : usually enabled as it's the main usage for RCP
* Zoom : usually disable to let the cameraman zoom in/out. Used for robotic application or beauty shot (then RCP or any cyanview device can operate the zoom/focus)
* Focus : usually disable to let the cameraman focus. Used for robotic application or beauty shot (then RCP or any cyanview device can operate the zoom/focus)

<img src="/img/Manual/RCP/Lens/F3.BMP"/>

If using external lens (Canon PL lens on FX9 controlled with RIO-live), you can check here if the communication is established as the lens model will be displayed.

<img src="/img/Manual/RCP/Lens/F4.BMP"/>

## PTZF menu

### Control of PTZF

<img src="/img/Manual/RCP/Lens/F5.BMP"/>
<img width="480px" src="/img/Manual/RCP/RCP-encoders.png"/>

Here you can control:
* Zoom
* Focus
* Pan
* Tilt

Using:
* Encoders : position/absolute control
* Touchscreen : speed/relative control

Sometime you will have an absolute value displayed, but no absolute control. This depends on every camera protocol.

### Positions save/load

You can save/load 10 presets for:
* zoom
* focus
* pan
* tilt

If you have absolute control and values, then you can save/recall presets:

<img src="/img/Manual/RCP/Lens/F6.BMP"/>
<img width="480px" src="/img/Manual/RCP/RCP-encoders.png"/>

If you click on `Save`, then one of the position, it save the values in this slot.

If you click on a slot, it recalls the values you saved (zoom, focus, pan, tilt).

You can clear a slot by clicking on `Clear` then the desired slot.

### Settings

<img src="/img/Manual/RCP/Lens/F7.BMP"/>

You can setup:
* Horizontal/Vertical flip
* Digital zoom toggle
* Stabilisation toggle

Control:
* Roll
* Digital zoom

:::note
Here in my case, on my PTZ, I can only flip horizontally or vertically.
:::

### Focus

<img src="/img/Manual/RCP/Lens/F9.BMP"/>
<img width="480px" src="/img/Manual/RCP/RCP-encoders.png"/>

You can control:
* Focus relatively, in speed (using the touchscreen)
* Focus in absolute position using the first encoder
* Change AF mode (if available) using the second encoder
* Do a one shot focus (touchscreen button)
* Toggle AF on/off (touchscreen button)

:::note
In my case, on my PTZ:
* I can toggle AF on/off
* control focus in speed and position

Nothing else
:::


