---
id: proton-cam
title: "Proton camera integration"
sidebar_label: "Proton"
description: "Integrate Proton camera systems with Cyanview for remote camera control in broadcast production."
keywords: [Proton, camera, broadcast, remote control]
slug: /integrations/cameras/other/proton-cam
---

<img src="/img/Integrations/Proton/ProtonCam/ProtonCam.jpeg" width="400" />

## Supported models

All Proton cameras are currently supported. This includes the following models:
- PROTON CAM, RAIN, FLEX
- PROTON ZOOM
- PROTON 4K, 4K FLEX
- PROTON HFR

The PROTON PIO-E is a small PoE camera interface which is also supported and allows to control the cameras over ethernet (IP) in a similar way as the Cyanview CI0 interface. So the PIO-E can replace the CI0 in the diagrams below. Note that the PIO-E is only compatible with Poroton cameras.


## Supported controls

| Control                                                     | Notes |
| :---------------------------------------------------------- | :-- |
|**Exposure** - Iris, Gain, Shutter, CLS (Clearscan)| Iris available on the ZOOM model only; Gain can be set to ISO|
|**Auto Exposure** - Iris, Gain, Shutter|
|**White balance** - Color temperature and tint, RGB gains | RGB gains are applied on top of the color temperature settings, so start by selecting the correct color temperature.|
|**Auto White balance** - AWB (Single shot auto-white), ATW (continious)|
|**Master Black and black balance** - RB/Master|
|**Flare** - RGB/Master|
|**Detail** - Level|
|**Saturation** and Hue|
|**User Matrix**|
|**Multi-Matrix**|Selection 12, 16, 24 or 32 vectors|
|**Knee** - Point, slope|
|**White Clip**|
|**Gamma** - Master|
|**Denoise** - Level and Color noise|
|**OETF** - SDR, HLG, PQ, S-Log3|Extra options for PQ and HLG supported|
|**Color space** - BT.709, BT.2020, S-Gamut3, S-Gamut3.Cine|
|**Video Formats** - 1080i 50/59/60, 1080p and 2160p 23/24/25/29/30/50/59/60|Formats can be changed from the RCP|
|**Genlock***|
|**Zoom/Focus**|On the ZOOM model|
|**Flip** - upside-down or mirror|
|**Red Tally**|
|**Audio** - Mic Levels|
|**Fan** - model|Available in the Custom pages|
|**Record using Timecode**|In custom pages, enabling timecode is used to trigger external recorders|
|**Status**| Temperature and firmware version are reported|

## Wiring

<img src="/img/Integrations/Proton/ProtonCam/proton-wiring.png" />

Gear required:

- 1 x CI0
- 1 x RCP

:::info
No specific cable needed, the camera plugs directly in CI0 serial port. CI0 provide data and power.
:::

## Setup

Set up a new camera via the <a href="/docs/reference/manuals/rcp/web-ui">RCP Configuration UI</a>:

- Enter a custom number and a name
- Select **Proton** brand
- Select **Cam** for the model
- Select your CI0 and port (in my case: `CI0-21-148:2` for `cy-ci0-21-148` on port `2`)


<img src="/img/Integrations/Proton/ProtonCam/proton-cam-setup.png" width="300" />

And after a couple of seconds, if everything is properly connected, it should turn green:

<img src="/img/Integrations/Proton/ProtonCam/proton-cam-block.png" width="300" />
