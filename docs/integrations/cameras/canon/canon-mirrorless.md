---
id: canon-mirrorless
title: "Canon mirrorless cameras"
sidebar_label: "Canon mirrorless"
description: "Control Canon mirrorless cameras like the R5 with Cyanview via USB through a RIO gateway."
keywords: [Canon mirrorless, R5, USB, RIO, remote control]
slug: /integrations/cameras/canon/canon-mirrorless
---

<img src="/img/Integrations/Canon/canon-R5.png" width="300"/>

Supported model: R5

:::note
The R5-C is not suitable for video applications. Unlike the R5, it features a new video processing pipeline that differs from the picture mode and cannot be controlled via a USB connection. As a result, the R5-C can only be managed in picture mode, making it non practical for video use.
:::


## Controls

|Control|R5
:-----|:-----|
**Exposure** (Iris, Gain, Shutter)|✔
**White balance** (R/B and Color temp)|✔
**Scene file** : <a href="/docs/reference/manuals/rcp/ui/scene">save/recall</a>|✔


## Wiring

You can plug it either:
* on RCP : mainly for testing or if the camera/RCP is not too far
* on RIO/NIO : for all other cases, allow you to control it remotely from anywhere over IP

You will need a USB cable USB-A (RCP/RIO/NIO) to USB-C (camera)

### RCP

<img src="/img/Integrations/Canon/canon-DSLR-RCP.png"/>

On the RCP, use any of the USB-A port on the back of the RCP (not the one on top, use the one next to RJ45).
Then plug the USB-C side inside the camera.

### RIO/NIO

<img src="/img/Integrations/Canon/canon-DSLR-RIO.png"/>

On the RIO/NIO, use any of the USB-A port.
Then plug the USB-C side inside the camera.

## Configuration

* Click on the `+` in the camera block, a new panel will appear on the right
* In `General` Configure a Number and a Name
* Select `Canon` for the brand and `DSLR` as the model.

Your settings should look like:

<img src="/img/Integrations/Canon/Canon-DSLR-setup.png" width="200"/>

And your camera block:

<img src="/img/Integrations/Canon/Canon-DSLR-block.png" width="200"/>


:::note
Interface should show `SN:*` meaning it will automatically connect to the first camera connected.
:::
