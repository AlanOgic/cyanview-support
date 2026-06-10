---
id: sony-8pin
title: "Sony 8-pin serial cameras"
sidebar_label: "Sony 8-pin"
description: "Connect Sony 8-pin serial cameras to Cyanview through a CI0 or RIO. Full paint control over the standard Sony serial protocol."
keywords: [Sony, 8-pin, serial, camera control, paint]
slug: /integrations/cameras/sony/sony-8pin
---

![Sony PMW series cameras with 8-pin remote connector](/img/Integrations/camera/Sony/Sony-PMW/Sony-PMW-XXX@2x-8.png)

Connect Sony cameras with an 8-pin remote connector to a **CI0** (local) or **RIO** (remote) for full paint control over the standard Sony serial protocol.

![Sony shoulder camcorder 8-pin remote connector detail](/img/Integrations/camera/Sony/Sony-PMW/SONY-Shoulder-Camcorder-Remote-Connector@2x-8.png)

![Sony PMW connected via RIO to an RCP](/img/Integrations/camera/Sony/Sony-PMW/SONY-PMW-XXX-RCP-CI0@2x-8.png)

![Sony PMW connected via CI0 to an RCP over internet](/img/Integrations/camera/Sony/Sony-PMW/Sony-PMW-XXX-RCP-RIO-Internet@2x-8.png)

## Connection

Connect the camera's **Remote connector** to the **CI0** or **RIO** using a [CY-CBL-SONY-8P-03](/docs/resources/cable-catalog#cy-cbl-sony-8p-03) cable.

The RIO can draw power from the camera through this cable.

:::warning
Some cameras require a software update for remote control. Early versions of the PXW-Z450, for example, need a firmware update before they can be controlled remotely.
:::

:::warning
On some camcorders, using cable **CY-CBL-6P-SONY-8** can cause a boot loop:

1. The camera starts and powers the RIO.
2. The RIO begins controlling the camera.
3. The camera transitions from `uncontrolled` to `controlled` and requires a power cycle — then repeats.

Use an external power supply or a D-Tap cable from an external battery to ensure the RIO starts before the camera. This issue does not occur with the **CY-CBL-6P-SONY-8-03** cable.
:::

![Sony RIO connected with 4G and 12V external power](/img/Integrations/camera/Sony/Sony-PMW/Sony-RIO-4G-12v@2x-8.png)

## Setup

1. Connect the camera to the CI0 or RIO with a [CY-CBL-SONY-8P-03](/docs/resources/cable-catalog#cy-cbl-sony-8p-03) cable.
2. Power on the camera.
3. Add the camera in the [RCP Configuration UI](/docs/reference/manuals/rcp/web-ui):
   - Select **Sony** brand.
   - Select **Legacy** model.
   - Select the CI0 or RIO and the port the camera is connected to.
4. Open **Cam > Tally** in the RCP menu and toggle **Tally Red** on and off.
   - If tally responds, you're done.
   - If tally does not respond, toggle **Call** in the same menu.
   - If **Call** works but **Tally Red** does not, change the camera model from **Legacy** to **Camcorder**.

## Note on RS422

Some cameras (HXC-D70, CA-FB70, etc.) must be configured for RS422 to work with Cyanview. Refer to your camera's manual for the `Outputting Trunk Signal` section — [see this example](https://www.markertek.com/Attachments/Manuals/SonyProAudio/CA-FB70-Manual.pdf).
