---
id: bm-handles
title: "Blackmagic camera handles"
sidebar_label: "BM Handles"
description: "Use Blackmagic camera handles with Cyanview-controlled cameras for on-camera operator control."
keywords: [Blackmagic, handles, operator, camera control]
slug: /integrations/cameras/blackmagic/bm-handles
---

# Blackmagic Zoom and Focus demand

<img src="/img/Integrations/Blackmagic/Handles/BMF.jpeg" width="400" />
<img src="/img/Integrations/Blackmagic/Handles/BMZ.jpeg" width="400" />

## Control

The goal of this integration is to provide zoom and focus input to your RIO/NIO/RCP.

We also map the buttons to allow you to control the video feedback signal (allows the cameraman to switch on a single monitor between its own camera, live feed, other camera with wide angle, etc.)

It allows you to control any lens that Cyanview is able to control:
* lens driven directly by the camera (through the protocol)
* external lens (B4, PL, etc.)
* motors (tilta, etc.)

And thanks to our IP architecture, the handles can be placed:
* on the camera with a RIO/RIO-live (cameraman, polecam operator, etc.)
* in a remote location with a NIO (cable cam, etc.)

This gives you more flexibility (various lens, even the ones that can't support handles like prime lens or E-mount, various workflow and setup thanks to IP) while keeping the same control that you are used to with typical handles plugged directly on the lens (fujinon/canon handles).

## Wiring

Here is an example of a setup with a FX9 and a cine lens that we motorise with tilta motors:

<img src="/img/Integrations/Blackmagic/Handles/BMHandles-wiring.png" width="800" />


* `lens` : RIO will drive the 3 Tilta motors (zoom, focus, iris) over serial.
* `camera` : RIO will drive the FX9 over Ethernet (using a USB dongle bridging both and acting as an ethernet switch)
* `handles` : Blackmagic handles are plugged on RIO over USB.

:::note
Works also with motorised lens:
* through the camera (E-mount on FX9, B4 on a broadcast camera, etc.)
* through the lens (Canon Cine Servo, Fujinon Cabrio, B4 broadcast, etc.)
:::

## Setup

You can wire the zoom and focus together:
* USB-C to USB-C cable from Focus `cam` port to Zoom `loop` port
* USB-C to USB-A cable from Zoom `cam` port to RIO/NIO/RCP

Or separately using 2 USB-C to USB-A cables (one for each).

Configure your camera, lens, etc. as usual.
Then in your camera configure (in the `right panel`), in the `User controllers` section, you will find the `Blackmagic handles` controllers (`BMFocus` and `BMZoom`):

<img src="/img/Integrations/Blackmagic/Handles/BMHandles-setup.png" width="400" />

Ensure you selected both (they should be listed in the `User controllers` section).

If paired properly, the LED of the handles should be steady white.

## Video return configuration

You first need to setup your:
* handles
* switcher/router

Then you can follow <a href="/docs/Configuration/advanced/B4Ret">this guide</a> to link the handles buttons to the switcher/router desired inputs/output.

## Buttons mapping

<img src="/img/Integrations/Blackmagic/Handles/BMHandles-buttons2.png" width="400" />
<div/>
<img src="/img/Integrations/Blackmagic/Handles/BMHandles-buttons1.png" width="400" />


1. VTR
2. RET1
3. 
    * Long press : Switch zoom speed encoder to iris control
    * 3 x short press : Switch zoom rocker to focus speed
4. 
    * Long press : Switch zoom speed encoder to focus control
    * 3 x short press : Switch zoom rocker to iris
5. Long press : calibrate zoom rocker (zero position)



:::note

To ensure that the long-press action has been validated, keep the button pressed for at least 5 seconds.

If the Zoom is drifting, the calibration must be done by long-pressing the button number 5.

:::



## From the field

### BM handles on a Canon Cine Servo and RED Komodo

* RCP
* RIO[^1]
* 1 x <a href="/docs/Accessories/CableCatalog#cy-cbl-6p-b4-01-default">CY-CBL-6P-B4-01</a>[^2]
* BM zoom and focus handles

<img src="/img/Workflows/BM-handles-Komodo-Canon.png" width="400"/>

[^1]: RIO is powered by D-DTAP, connected to the cam using USB Ethernet dongle. And to the RCP using the onboard Ethernet (no need for an additional switch, we can bridge both networks).

[^2]: <a href="/docs/Accessories/CableCatalog#cy-cbl-6p-b4-01-default">CY-CBL-6P-B4-01</a> is used to connect the RIO to the lens (Canon Cine Servo) using the 12pin port (data + power). Here, RIO takes control of zoom, focus and iris. BM handles can then act on zoom and focus, while RCP can paint and control the iris.