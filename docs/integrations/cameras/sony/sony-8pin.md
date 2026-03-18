---
id: sony-8pin
title: "Sony 8-pin serial cameras"
sidebar_label: "Sony 8-pin"
description: "Connect Sony 8-pin serial cameras to Cyanview through a CI0 or RIO. Full paint control over the standard Sony serial protocol."
keywords: [Sony, 8-pin, serial, camera control, paint]
slug: /integrations/cameras/sony/sony-8pin
---

<img alt="cyanview-support-Sony-PMW-XXX" src="/img/Integrations/camera/Sony/Sony-PMW/Sony-PMW-XXX@2x-8.png" width="900" />


This guide covers the different Sony cameras that have a **8Pins Remote Connector**.

<img alt="cyanview-support-Sony-Camcorder-Remote-Connector" src="/img/Integrations/camera/Sony/Sony-PMW/SONY-Shoulder-Camcorder-Remote-Connector@2x-8.png" width="900" />

These camera can be controlled directly from a **CI0** (local) or via a **RIO** (remote).

<img alt="cyanview-support-Sony-PMW-RIO-RCP" src="/img/Integrations/camera/Sony/Sony-PMW/SONY-PMW-XXX-RCP-CI0@2x-8.png" width="900" />

<img alt="cyanview-support-Sony-PMW-CI0-RCP" src="/img/Integrations/camera/Sony/Sony-PMW/Sony-PMW-XXX-RCP-RIO-Internet@2x-8.png" width="900" />

## Connection

Connect the **Remote connector** terminal on the camera to the **CI0** / **RIO** with a [CY-CBL-6P-SONY-8-03](/docs/Accessories/CableCatalog#cy-cbl-sony-8p-03).

The **RIO** can be powered by the camera using this cable.

:::warning
On some camcorders, and when the cable reference is CY-CBL-6P-SONY-8-02, the RIO will need an external power supply to avoid a boot loop:
* the camera will starts
* the camera will power the RIO
* the RIO will start to control the camera
* the camera will change from `uncontrolled` to `controlled` and will require a power cycle, etc.

Use an external power supply (or a D-Tap cable from external batteries).

The point is to ensure that RIO should start before the cam.

When a CY-CBL-6P-SONY-8-02 is used, there's no bootloop conditions.
:::

<img alt="cyanview-support-Sony-RIO-4G-12V" src="/img/Integrations/camera/Sony/Sony-PMW/Sony-RIO-4G-12v@2x-8.png" width="900" />

## Setup

- **Connect** the camera to the **CI0** / **RIO** with a **[CY-CBL-6P-SONY-8-01](/docs/Accessories/CableCatalog#cy-cbl-sony-8p-03)** cable.
- **Power ON** the camera.
- **Add the Camera** to the RCP configuration via the [RCP Configuration UI](/docs/Manuals/RCP/ConfWebUI).
   - Select **Sony** brand.
   - Select **Legacy** model.
   - Select the **CI0** / **RIO** and port on which the camera is connected to.
   - Open the RCP menu : **Cam** > **Tally**, try to turn **ON** and **OFF** tally **Red** encoder.
   - If *Tally* works, you're good to go.
   - If *Tally* does not work, in the same **Cam** > **Tally** menu, try to turn **ON** and **OFF** the **Call** encoder.
   - If *Call* is working but not *Tally RED*, then change the camera model from **Legacy** to **Camcorder**.

## Note on RS422

Some cameras needs to be configured in RS422 (HXC-D70, CA-FB70, etc.) to work properly with our system.

You can find an example on how to change that [here](https://www.markertek.com/Attachments/Manuals/SonyProAudio/CA-FB70-Manual.pdf).

Search for section `Outputting Trunk Signal`.
