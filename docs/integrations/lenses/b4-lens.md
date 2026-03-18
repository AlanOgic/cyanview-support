---
id: b4-lens
title: "B4 broadcast lens control"
sidebar_label: "B4 lenses"
description: "Control B4 broadcast lenses with Cyanview through a RIO gateway. Servo zoom, focus, and iris control."
keywords: [B4 lens, broadcast, servo, zoom, focus, iris, RIO]
slug: /integrations/lenses/b4-lens
---

## Introduction

The goal is to setup a lens control in parallel of the camera control.

Use case:
* specialty/robotic applications
* when the camera cannot control the lens (dreamchip atom one + B4 ENG lens)
* the lens is not compatible with the camera

When changing:
* iris/zoom/focus, we will send it to the lens
* shading, we will send it to the camera
and it is transparent for the vision engineer on the RCP.

Works with ENG lens, box lens, etc. from Canon and Fujinon.

## Wiring

Required cable : [CY-CBL-6P-B4-01](/docs/Accessories/CableCatalog#cy-cbl-6p-b4-01-default).

<img src="/img/Integrations/Lens/B4-ENG.png" width="800" />

## Compatible Cyanview device

- CI0/RIO live for local (LAN)
- RIO for remote control (internet)

:::note
Advantage of each solution:

* **CI0** is acting as a serial/IP converter. If the link between RCP/CI0 is broken or unstable, lens will not be controlled anymore and iris will close/reset.

* **RIO Live** is a CI0, but with the brain of a RCP (all the protocol). If the link between RCP/RIO Live is broken or unstable, lens is still controlled by the RIO live.

* **RIO** same as RIO Live, but can control multiple cameras and has cloud connectivity.
:::

## Controls

* Iris
* Zoom
* Focus

## Setup RCP/RIO

Overview:
* I will have one `CI0` : `CI0-12-137`.
* My Dreamchip AtomOne plugged on port 1.
* My B4 lens plugged on port 2 of the same CI0.

Setup:
- Navigate to [`configuration`](/docs/Manuals/RCP/ConfWebUI) tab, create a new cam or edit an existing one
- Setup your camera as usual following one of the guide available (<a href="/docs/Integrations/Generic/SerialCamera"> serial camera</a>, <a href="/docs/Integrations/Generic/IPCamera">IP camera</a>)

   * Set up `number` and `name`:
   

<img src="/img/Integrations/Lens/B4-setup-basic.png" width="300"/>


   * Set up `brand` and `model`:
   
<img src="/img/Integrations/Lens/B4-setup-camhead.png" width="300"/>


- In `Lens` block:
   - Select **B4 Generic**
   - Select your CI0/RIO and the port on which the lens is plugged

<img src="/img/Integrations/Lens/B4-setup-lens.png" width="300"/>

:::note
If you only need the Iris control and let zoom/focus controlled by the cameraman, on your RCP:
* Click on `Lens`, to open the lens menu
* Click again on `Lens`, to open the second page of the lens menu (`Lens2`)
* Click on `Z/F En` to disable it (only `Iris En` should be highlighted with white background)
:::


Once correctly connected, it should be green:

<img src="/img/Integrations/Lens/B4-block.png" width="300" />




