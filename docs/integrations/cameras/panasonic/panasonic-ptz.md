---
id: panasonic-ptz
title: "Panasonic PTZ cameras"
sidebar_label: "Panasonic PTZ"
description: "Control Panasonic PTZ cameras with Cyanview over IP. Paint, pan, tilt, and zoom from your RCP."
keywords: [Panasonic PTZ, IP control, pan tilt zoom, RCP]
slug: /integrations/cameras/panasonic/panasonic-ptz
---

# Panasonic PTZ

This guide describe how to configure Panasonic PTZ cameras

<img src="/img/Integrations/Panasonic/AW-UE150.png" width="300"/>


## Supported Models

AW-HE:
* AW-HE40
* AW-HE42
* AW-HE50
* AW-HE60
* AW-HE70
* AW-HE120
* AW-HE130

AW-UE:
* AW-UE70
* AW-UE100
* AW-UE150
* AW-UE160

AW-HR/UR:
* AW-UR100 (select *AW-UE100* instead)
* AW-HR140 (select *AW-HE130* instead)

If you are looking for a new model not yet listed, you can try selecting a similar model, as the most important commands are typically the same.

:::warning **Unuspported models**:

* AW-UE20
* AW-UE4

These models use ProAV-style controls such as brightness and contrast instead of traditional broadcast parameters like black level and gain, which are not currently supported.
:::


## Supported Control

|Control|Notes|
|:-----|:-----|
**Exposure** — Iris, Gain, Shutter, ND filter|
**White balance** — R,G,B gains, Color Temperature|
**Black balance** — R,G,B, master |
**Matrix**|Only the *User* mode allows to define manual matrix parameters or use the multi-matrix. The Matrix will be automatically changed from `Normal/EBU/NTSC` to `User` when you activate the Multi-Matrix or User Matrix.
**Multi-Matrix**|
**Knee**|
**White Clip**|
**Detail**|
**Denoise**|
**Red/Green Tally**|
**Camera Menu Control**|
**PTZ** — Pan, Tilt, Zoom, Focus|

Note: there are now more controls than this list, we have to update it. Nearly all paint settings from the cameras are now available on the RCP
<!--TODO: complete this list -->

## Workflow

A typical setup involves multiple cameras controlled by a single RCP on an IP network. All Panasonic PTZ cameras accept multiple connections simultaneously, so the RCP can be used at the same time as the Panasonic PTZ controller panel.

<img src="/img/Integrations/Panasonic/Panasonic-PTZ-connect.png" width="600"/>


## Configuration

The communication is over IP so the configuration only involves adding an IP camera.

:::warning
Avoid configuring multiple RCPs to control the same camera. If you need to control the same camera from multiple RCPs, configure the camera on one RCP and use REMI mode to control the camera from other devices. This minimizes the number of connections to a camera, which can slow down camera operations, especially on older models like the AW-HE120.
:::

You can follow the generic guide <a href="/docs/Integrations/Generic/PTZ">here</a> for more details.
<!--TODO: section on adding caemras over IP, point there-->

<!--TODO: add notes on settings to set in the camera to not recall video settings with position settings-->
