---
id: aw-ub
title: "Panasonic AW-UB cameras"
sidebar_label: "Panasonic AW-UB"
description: "Integrate Panasonic AW-UB box cameras with Cyanview for remote paint and camera control over IP."
keywords: [Panasonic, AW-UB, box camera, IP control]
slug: /integrations/cameras/panasonic/aw-ub
---

# Panasonic AW-UB10 and AW-UB50

<img src="/img/Integrations/Panasonic/PanaUB50.jpg" width="400"/>


## Supported Models

The control protocol and features are the same for all models.

* AW-UB10
* AW-UB50


## Supported Control

|Control | Notes | All models |
:-----|:-----|:-----|
**Exposure** — Iris, Gain, Shutter | |✔|
**Auto Exposure** — Iris, Gain, Shutter | |✔|
**Syncro Scan** | |✔|
**White balance** — R/B and Color temperature| |✔|
**ATW / Manual**| |✔|
**Black level and balance** (R/B/Master) | |✔|
**Detail** | |✔|
**Skin Detail** | |✔|
**Knee** — Point, Slope | |✔|
**User Matrix** | 6 values user matrix |✔|
**Multi Matrix** | 16 vectors |✔|
**Menu Navigation** | |✔|
**Lens control** — Zoom, Focus, auto-focus** | |✔|
**Digital zoom** | |✔|
**Tally** |Red only |✔|
**Bars** | |✔|


## Workflow

The camera is controlled over IP using the same protocol as Panasonic controllers, such as the RP150. For details, refer to the 'Remote Operations > Controlling with Controller' section in the camera manual.

The camera is equipped with a standard RJ45 connector, so no special setup is required in this regard.


## Configuration

:::warning
Use credentials assigned by 'EasyIP SetupTool' and not the login and password from the camera
:::

The camera requires login credentials that differ from those configurable directly on the camera, which are for Lumix Tether. To set these credentials, you must use either the 'EasyIP SetupTool Plus' or the 'Media Production Suite'.
