---
id: panasonic-ptz
title: "Panasonic PTZ cameras"
sidebar_label: "Panasonic PTZ"
description: "Control Panasonic PTZ cameras with Cyanview over IP. Full paint, pan, tilt, zoom, and focus from your RCP — alongside the native Panasonic controller."
keywords: [Panasonic PTZ, AW-UE150, AW-UE100, IP control, pan tilt zoom, RCP, broadcast]
slug: /integrations/cameras/panasonic/panasonic-ptz
---

Control your Panasonic PTZ cameras directly from the Cyanview RCP over IP. You get full paint control — exposure, white balance, black balance, matrix, knee, detail — plus pan, tilt, zoom, and focus. Your RCP works alongside the native Panasonic controller without conflict, since all Panasonic PTZ cameras accept multiple simultaneous connections.

<img src="/img/Integrations/Panasonic/AW-UE150.png" width="300" alt="Panasonic AW-UE150 PTZ camera" />

## Supported models

**AW-HE series:**
- AW-HE40, AW-HE42, AW-HE50, AW-HE60, AW-HE70, AW-HE120, AW-HE130

**AW-UE series:**
- AW-UE70, AW-UE100, AW-UE150, AW-UE160

**AW-HR/UR series:**
- AW-UR100 — select *AW-UE100* in the RCP configuration
- AW-HR140 — select *AW-HE130* in the RCP configuration

If your model is not listed, try selecting a similar model. The core control commands are typically the same across models in the same series.

:::warning Unsupported models

- **AW-UE20**
- **AW-UE4**

These models use ProAV-style controls (brightness, contrast) instead of traditional broadcast parameters (black level, gain), which Cyanview does not currently support.
:::

## Supported controls

| Control | Notes |
|:--------|:------|
| **Exposure** — Iris, Gain, Shutter, ND filter | |
| **White balance** — R, G, B gains, Color temperature | |
| **Black balance** — R, G, B, master | |
| **Matrix** | Only *User* mode allows manual matrix parameters. Activating Multi-Matrix or User Matrix automatically switches from `Normal/EBU/NTSC` to `User`. |
| **Multi-matrix** | |
| **Knee** | |
| **White clip** | |
| **Detail** | |
| **Denoise** | |
| **Red/green tally** | |
| **Camera menu control** | |
| **PTZ** — Pan, Tilt, Zoom, Focus | |

Nearly all paint parameters available on the camera are now accessible from the RCP.

## Typical workflow

A typical setup connects multiple Panasonic PTZ cameras to a single RCP over an IP network. Since Panasonic PTZ cameras accept multiple simultaneous connections, you can use the Cyanview RCP at the same time as the native Panasonic PTZ controller panel.

<img src="/img/Integrations/Panasonic/Panasonic-PTZ-connect.png" width="600" alt="Panasonic PTZ network diagram with Cyanview RCP" />

## Configuration

All communication happens over IP, so configuration is straightforward — you add each camera as an IP camera in the RCP web UI.

:::warning
Avoid configuring multiple RCPs to control the same camera directly. If you need control from multiple locations, configure the camera on one RCP and use [REMI](/docs/guides/networking/remi) to share it with other devices. This minimizes connections to the camera, which can slow down operations on older models like the AW-HE120.
:::

Follow the [PTZ integration guide](/docs/integrations/generic/ptz) for step-by-step instructions on adding IP cameras to your RCP.

## Getting started

1. Connect your Panasonic PTZ camera and RCP to the same IP network
2. Configure the camera's IP address (DHCP or static) through the camera's web interface
3. [Add the camera in the RCP web UI](/docs/reference/manuals/rcp/web-ui) — select **Panasonic** as the brand and your specific model
4. Ensure the RCP has an IP address on the same subnet as the camera (see the [IP configuration guide](/docs/guides/networking/ip-configuration))
