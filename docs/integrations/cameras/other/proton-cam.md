---
id: proton-cam
title: "Proton camera integration"
sidebar_label: "Proton"
description: "Integrate Proton camera systems with Cyanview for remote camera control in broadcast production."
keywords: [Proton, camera, broadcast, remote control]
slug: /integrations/cameras/other/proton-cam
---

![Proton broadcast camera](/img/Integrations/Proton/ProtonCam/ProtonCam.jpeg)

Cyanview controls all Proton camera models via serial connection through the CI0, giving you comprehensive paint and exposure control from the RCP.

## Supported models

- PROTON CAM, RAIN, FLEX
- PROTON ZOOM
- PROTON 4K, 4K FLEX
- PROTON HFR

The PROTON PIO-E is a small PoE camera interface that lets you control Proton cameras over ethernet (IP), replacing the CI0 in the wiring diagram. Note that the PIO-E is compatible with Proton cameras only.

## Supported controls

| Control | Notes |
| :---------------------------------------------------------- | :-- |
| **Exposure** — Iris, Gain, Shutter, CLS (Clearscan) | Iris available on the ZOOM model only; Gain can be set to ISO |
| **Auto Exposure** — Iris, Gain, Shutter | |
| **White balance** — Color temperature and tint, RGB gains | RGB gains are applied on top of the color temperature settings — start by selecting the correct color temperature |
| **Auto white balance** — AWB (single shot), ATW (continuous) | |
| **Master black and black balance** — R/B/Master | |
| **Flare** — RGB/Master | |
| **Detail** — Level | |
| **Saturation** and Hue | |
| **User Matrix** | |
| **Multi-Matrix** | Selection of 12, 16, 24, or 32 vectors |
| **Knee** — Point, slope | |
| **White Clip** | |
| **Gamma** — Master | |
| **Denoise** — Level and Color noise | |
| **OETF** — SDR, HLG, PQ, S-Log3 | Extra options for PQ and HLG supported |
| **Color space** — BT.709, BT.2020, S-Gamut3, S-Gamut3.Cine | |
| **Video Formats** — 1080i 50/59/60, 1080p and 2160p 23/24/25/29/30/50/59/60 | Formats can be changed from the RCP |
| **Genlock*** | |
| **Zoom/Focus** | On the ZOOM model |
| **Flip** — upside-down or mirror | |
| **Red Tally** | |
| **Audio** — Mic Levels | |
| **Fan** — mode | Available in the Custom pages |
| **Record using Timecode** | In custom pages, enabling timecode triggers external recorders |
| **Status** | Temperature and firmware version are reported |

## Wiring

![Proton camera wiring diagram](/img/Integrations/Proton/ProtonCam/proton-wiring.png)

Required gear:
- 1 x CI0
- 1 x RCP

:::info
No specific cable is needed — the camera plugs directly into the CI0 serial port. The CI0 provides both data and power.
:::

## Setup

Set up a new camera via the [RCP Configuration UI](/docs/reference/manuals/rcp/web-ui):

- Enter a custom number and a name.
- Select **Proton** brand.
- Select **Cam** for the model.
- Select your CI0 and port (for example: `CI0-21-148:2` for `cy-ci0-21-148` on port `2`).

![Proton camera setup configuration](/img/Integrations/Proton/ProtonCam/proton-cam-setup.png)

After a couple of seconds, if everything is properly connected, the status turns green:

![Proton camera connected green status](/img/Integrations/Proton/ProtonCam/proton-cam-block.png)
