---
id: cine-lens
title: "Cine lens control"
sidebar_label: "Cine lenses"
description: "Control cine servo and motorized lenses with Cyanview. Canon Cine-Servo, Fujinon Cabrio, and compatible motors."
keywords: [cine lens, Cine-Servo, Cabrio, motorized, focus]
slug: /integrations/lenses/cine-lens
---

## Introduction

<img src="/img/Integrations/Lens/canon-cine-servo.png" width="300"/>
<img src="/img/Integrations/Lens/fujinon-cabrio.png" width="300"/>

The goal is to set up a lens control in parallel to the camera control.

This is only required if the lens is not controllable by the camera:
* If you have a Sony FX9 with an E-mount lens : the lens will be controlled through the FX9 protocol (IP)
* If you have a Sony FX9 with a PL-mount lens : then, this guide is for you

When changing:
* iris/zoom/focus, we will send it to the lens
* shading, we will send it to the camera,
and it is transparent for the vision engineer on the RCP.

## Lens compatibility

Any lens from Canon (12P digital) or Fujinon (12P or 20P digital) that is motorized.

Any lens with cmotion motorization.

If you have a non motorized lens or a prime lens, we can also drive external motors:
* <a href="/docs/Integrations/Generic/Lens">this generic guide</a>
* <a href="/docs/Integrations/Lens/Tilta">Tilta motors</a>

:::note
Example: Canon 18-80 mm photo lens.

It doesn't have any 12P port, only the 20P port (analog) that only allows to plug zoom/focus handle. If you want to remote iris from the RCP on this lens, you need to add external motors (cmotion, ARRI, Tilta, etc.) that we control.
:::

## Wiring

Required cable:
* Canon Cine-Servo, C-Motion : <a href="/docs/Accessories/CableCatalog#cy-cbl-6p-b4-01-default">CY-CBL-6P-B4-01</a>
* Fujinon Cabrio : <a href="/docs/Accessories/CableCatalog#cy-cbl-6p-fuji-02-default">CY-CBL-6P-FUJI-02</a> combined with <a href="/docs/Accessories/CableCatalog#cy-cbl-6p-b4-01-default">CY-CBL-6P-B4-01</a>

<img src="/img/Integrations/Lens/B4-cabrio.png" width="800" />

## Compatible Cyanview device

- CI0/RIO Live for local (LAN)
- RIO for remote control (internet)

:::note
Advantage of each solution:

* **CI0** is acting as a serial/IP converter. If the link between RCP/CI0 is broken or unstable, the lens will not be controlled anymore and iris will close/reset.

* **RIO live** is a CI0, but with the brain of an RCP (all the protocol). If the link between RCP/RIO Live is broken or unstable, the lens is still controlled by the RIO Live.

* **RIO** same as RIO Live, but can control multiple cameras and has cloud connectivity.
:::

## Controls

* Iris
* Zoom
* Focus

By default, the RCP will control iris and let zoom and focus handled by the cameraman.

But for some robotic applications, the RCP can control iris, zoom and focus.

:::note
Once the lens is properly setup in the configuration (see below):

If you only need the Iris control and let zoom/focus controlled by the cameraman, on your RCP:
* Click on `Lens`, to open the lens menu
* Click again on `Lens`, to open the second page of the lens menu (`Lens2`)
* Click on `Z/F En` to disable it (only `Iris En` should be highlighted with white background)
:::

## Setup RCP/RIO

- Set up your camera as usual following one of the guide available (here, I will show the setup with an <a href="/docs/Integrations/Sony/SonyFX9">FX9</a>)
- In the <a href="/docs/Manuals/RCP/ConfWebUI">`configuration`</a> tab, click on your camera
- In the right tab, scroll down to `Lens` block:
   - Select **B4 Generic**
   - Select your CI0/RIO and the port on which the lens is plugged (here, my lens is on : `RIO-15-215` on `port 1`)

This should look like this:

<img src="/img/Integrations/Lens/B4-config-setup.png" width="300" />

And once correctly connected, it should be green:

<img src="/img/Integrations/Lens/B4-config-block.png" width="300" />

## Troubleshooting

### Iris is not displayed on the RCP

* Check your wiring:
   - <a href="/docs/Accessories/CableCatalog#cy-cbl-6p-b4-01-default">CY-CBL-6P-B4-01</a> for Canon
   -  <a href="/docs/Accessories/CableCatalog#cy-cbl-6p-b4-01-default">CY-CBL-6P-B4-01</a> and <a href="/docs/Accessories/CableCatalog#cy-cbl-6p-fuji-02-default">CY-CBL-6P-FUJI-02</a> for Fujinon
   - Check connectors on lens and RIO, ensure they are properly plugged
   - Check that the port on RIO match your configuration (port 1 or 2)
* Check in your web UI that the lens block is green (connection OK)
* Check on RCP in the lens menu that the lens name/info is displayed (lens communication is OK)

If lens block is green and lens info is not displayed, it means that the RCP is not receiving any information from the lens.

### Iris is not moving

* Check that the lens is not in manual mode (put the slider to `A` for auto)
* Check that the lens iris servo is activated (if applicable)
* Ensure that lens is properly powered (some big lens requires external power), try moving zoom rocker to see if the lens is powered
* Check that iris priority is set to `cable` (if applicable).

In `Menu > Info > I/Fprior`, set it to `Cable`:
<img src="/img/Integrations/Lens/B4-iris-priority.png" width="300" />

### Iris stopped moving after a while

* Check power supply
* Check wiring (any wobbly cable?)

If all of the above is correct, try to reset the lens (see your lens manual, it's usually a combination of buttons to press on power up).