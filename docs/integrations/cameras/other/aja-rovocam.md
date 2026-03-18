---
id: aja-rovocam
title: "AJA RovoCam integration"
sidebar_label: "AJA RovoCam"
description: "Control the AJA RovoCam compact camera with Cyanview for remote paint and camera control in broadcast setups."
keywords: [AJA, RovoCam, compact camera, broadcast]
slug: /integrations/cameras/other/aja-rovocam
---

<img src="/img/Integrations/AJA/rovocam.png" width="300" />

# Camera wiring

<img src="/img/Integrations/AJA/AJARovocam-wiring.png" width="800" />

Cable needed: <a href="/docs/Accessories/CableCatalog#cy-cbl-6p-aja-01">cy-cbl-6p-aja-01</a>

:::note
* Compatible with CI0/RIO/RIO-live
* The camera is powered by the CI0/RIO/RIO-live (data + control, single cable)
* If you need to control it wirelessly, you need to use the RIO/RIO-live
* You can plug a camera per CI0/RIO/RIO-live port
* You can chain them on a single CI0/RIO/RIO-live port, on a bus, as every camera has a unique ID
:::

# Camera control


|Control|AJA RovoCam
:-----|:-----|
**White balance** (R/B and color temp)|✔
**Black balance** (R/B, master pedestal)|✔
**Other control** (Master gamma, saturation, detail)|✔
**Exposure** (Iris, Gain, Shutter)|✔
**Camera Menu Control**|✔
**Lens** <a href="/docs/Manuals/RCP/RCPUI/RCPUIScene">(zoom, focus)</a>|✔
**Scene file** : <a href="/docs/Manuals/RCP/RCPUI/RCPUIScene">save/recall</a>|✔


# Setup

Before starting, ensure to setup/know your camera ID using the AJA RovoCam app

## VISCA BUS

Access the <a href="/docs/Manuals/RCP/ConfWebUI">RCP Configuration UI</a>.

Create a new `Sony VISCA` BUS:
- In `Feature` block, click on `+`
- Select `Sony: VISCA Bus`
- Setup the bus ID range (0-7 by default)
- Setup the bus type `RS232`
- Setup the baudrate to `9600`
- Setup your serial port (here: `CI0-31-52:1`), in my case CI0 `CI0-31-52` on port 1

The Feature `+` button and list:

<img alt="AJA RovoCam bus block" src="/img/Integrations/AJA/AJA-RovoCam-VISCABUS-select.png" width="300"/>


The block:

<img alt="AJA RovoCam bus block" src="/img/Integrations/AJA/AJA-RovoCam-VISCABUS-block.png" width="300"/>

The setup should look like this:

<img alt="AJA RovoCam bus setup" src="/img/Integrations/AJA/AJA-RovoCam-VISCABUS-setting.png" width="300"/>

## Camera

Access the <a href="/docs/Manuals/RCP/ConfWebUI">RCP Configuration UI</a>.

Create a new camera:
- In the Camera sectionlick on `+`
- Enter a custom number, name, etc.
- Select **AJA** brand
- Select **Rovocam** for the model
- Select the camera bus and ID


This should look like this:

<img alt="AJA RovoCam bus setup" src="/img/Integrations/AJA/AJA-RovoCam-setting.png" width="300"/>


And once correctly connected, it should be green:

<img alt="AJA RovoCam bus setup" src="/img/Integrations/AJA/AJA-RovoCam-block.png" width="300"/>
