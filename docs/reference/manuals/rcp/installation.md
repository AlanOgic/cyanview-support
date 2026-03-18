---
id: installation
title: "RCP installation guide"
sidebar_label: "Installation"
description: "Install and mount your Cyanview RCP. Physical setup, power connections, and initial configuration steps."
keywords: [RCP, installation, mounting, power, PoE, setup]
slug: /reference/manuals/rcp/installation
---

## Mounting RCP

### RCP-J Dimensions

Download [PDF](/img/Manual/RCP/CY-RCP-J-assembly.pdf) and [STEP](/img/Manual/RCP/CY-RCP-J-assembly.step) files.

[<img alt="CY-RCP-J-assembly.png" src="/img/Manual/RCP/CY-RCP-J-assembly.png"  width="500"/>](/img/Manual/RCP/CY-RCP-J-assembly.pdf)


### RCP dimensions

Download [PDF](/img/Manual/RCP/CY-RCP-assembly.pdf) and [STEP](/img/Manual/RCP/CY-RCP-assembly.step) files.

[<img alt="CY-RCP-assembly.png" src="/img/Manual/RCP/CY-RCP-assembly.png"  width="500"/>](/img/Manual/RCP/CY-RCP-assembly.pdf)


### Mounting Frame for the short RCP version

To fit with standard RCP dimensions, a **Mounting Frame** can be added and is composed of a frame and cover.

Download [PDF](/img/Manual/RCP/CY-RCP-assembly-frame.pdf) and [STEP](/img/Manual/RCP/CY-RCP-assembly-frame.step) files.

[<img alt="CY-RCP-assembly-frame.png" src="/img/Manual/RCP/CY-RCP-assembly-frame.png"  width="500"/>](/img/Manual/RCP/CY-RCP-assembly-frame.pdf)


The RCP can be aligned at the bottom of the frame (option A) or at the top (option B).

<img alt="Cyanview-RCP-frame-mounting-options" src="/img/productGfx/RCP/Cyanview-RCP-frame-mounting-options@2x-8.png" width="300"/>

## Powering the RCP

The RCP can be powered from **PoE** or using an external **12V power supply**.

- PoE 802.3af
- DC Input: +12V 200mA (acceptable range: 9V to 24V)

    Power plug is a [switchcraft 762K](http://www.switchcraft.com/Product.aspx?ID=7007) or compatible (5.5x2.1mm).

    <img alt="cyanview-support-manual-CI0-switchcraft-power-connector" src="/img/3Parties/cyanview-support-manual-switchcraft-power-connector.png" width="120" />

    <img alt="cyanview-support-manual-CI0-switchcraft-762k-pinout" src="/img/3Parties/Switchraft-762K-pinout@2x-8.png" width="250" />   

## RCP UI

RCP is *configured* and *managed* via a **[Configuration Web UI](/docs/Manuals/RCP/ConfWebUI)**.

## RCP Update

Make sure your RCP runs our latest releases.

Please refer to the [update manual](/docs/Manuals/RCP/ProductUpdate).

## Troubleshooting

### Force upgrade

* Unplug power (remove RJ45 if PoE, 12V if external power supply)
* Push the "lock" / "power" button (top left) and keep pressed
* Plug back the power and wait until a "loading screen" is displayed, then you can release
* Wait a couple of minutes and it should "load" the upgrade and then reboot and reload the camera list and values
 
