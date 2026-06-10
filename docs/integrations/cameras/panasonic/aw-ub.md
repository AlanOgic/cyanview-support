---
id: aw-ub
title: "Panasonic AW-UB cameras"
sidebar_label: "Panasonic AW-UB"
description: "Integrate Panasonic AW-UB box cameras with Cyanview for remote paint and camera control over IP."
keywords: [Panasonic, AW-UB, box camera, IP control]
slug: /integrations/cameras/panasonic/aw-ub
---

The Panasonic AW-UB10 and AW-UB50 box cameras connect to Cyanview over IP using the same protocol as Panasonic controllers such as the RP150.

![Panasonic AW-UB50 box camera](/img/Integrations/Panasonic/PanaUB50.jpg)

## Supported models

The control protocol and feature set are identical across all models:
- AW-UB10
- AW-UB50

## Supported controls

| Control | Notes | All models |
|:--------|:------|:----------:|
| **Exposure** — Iris, Gain, Shutter | | ✔ |
| **Auto exposure** — Iris, Gain, Shutter | | ✔ |
| **Syncro Scan** | | ✔ |
| **White balance** — R/B and color temperature | | ✔ |
| **ATW / Manual** | | ✔ |
| **Black level and balance** (R/B/Master) | | ✔ |
| **Detail** | | ✔ |
| **Skin detail** | | ✔ |
| **Knee** — Point, Slope | | ✔ |
| **User matrix** | 6-value user matrix | ✔ |
| **Multi matrix** | 16 vectors | ✔ |
| **Menu navigation** | | ✔ |
| **Lens control** — Zoom, Focus, auto-focus | | ✔ |
| **Digital zoom** | | ✔ |
| **Tally** | Red only | ✔ |
| **Bars** | | ✔ |

## Workflow

The camera connects over IP using the same protocol as Panasonic controllers. Refer to the *Remote Operations > Controlling with Controller* section of the camera manual for details. The camera uses a standard RJ45 connector — no special hardware setup is required.

## Configuration

:::warning
IP control requires login credentials. Use the credentials assigned by **EasyIP SetupTool Plus** or **Media Production Suite** — not the login and password configured directly on the camera, which are for Lumix Tether.
:::

The camera requires login credentials that differ from those configurable directly on the camera. These must be set using either **EasyIP SetupTool Plus** or **Media Production Suite**.
