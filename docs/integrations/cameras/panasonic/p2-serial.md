---
id: p2-serial
title: "Panasonic P2 serial cameras"
sidebar_label: "Panasonic P2 serial"
description: "Connect Panasonic P2 cameras via serial to Cyanview through a CI0 or RIO for remote camera control."
keywords: [Panasonic P2, serial, CI0, RIO, broadcast]
slug: /integrations/cameras/panasonic/p2-serial
---

![Panasonic AJ-HPX3100G](/img/Integrations/Panasonic/aj-hpx3100g.jpg)

Control older Panasonic P2 cameras over a serial link using a CY-CIO or CY-RIO interface.

## Supported models

- AG-HPX300
- AG-HPX500
- AJ-HPX2700
- AJ-HPX3100
- Generic — assumes all features are available; use this for any other model. Some features may not work depending on what the specific camera supports.

:::note
All AJ-HPX cameras with the Hirose 10-pin connector are supported. Select `Generic` if your model is not specifically listed. Some features may not be available or may behave unexpectedly depending on the camera.
:::

## Supported control

| Control | AG-HPX300 | AG-HPX500 | AJ-HPX2700 | AJ-HPX3100 | Generic |
| :------ | :-------: | :-------: | :--------: | :--------: | :-----: |
| OSD | ✔ | ✔ | ✔ | ✔ | ✔ |
| Gain (M / R / B) | ✔ | ✔ | ✔ | ✔ | ✔ |
| Pedestal (M / R / B) | ✔ | ✔ | ✔ | ✔ | ✔ |
| Gamma (M / R / B) | | | ✔ | ✔ | ✔ |
| Black gamma | | | ✔ | ✔ | ✔ |
| Saturation | | | ✔ | ✔ | ✔ |
| White clip | | | ✔ | ✔ | ✔ |
| Knee | | | ✔ | ✔ | ✔ |
| Matrix | | | ✔ | ✔ | ✔ |
| Detail | | | ✔ | ✔ | ✔ |
| ND filters | | RO | | | ✔ |
| AWB | ✔ | ✔ | ✔ | ✔ | ✔ |
| Iris | ✔ | ✔ | ✔ | ✔ | ✔ |
| Shutter | ✔ | ✔ | ✔ | ✔ | ✔ |

## Workflow

Connect the camera to a CY-CIO or CY-RIO using the [CY-CBL-6P-PAN-10P](/docs/resources/cable-catalog#cy-cbl-6p-pan-10p) cable.

![Panasonic P2 serial connection diagram](/img/Integrations/Panasonic/Panasonic-P2serial-connect.png)

## Setup

Add a camera on your RCP or RIO:

1. Select **Panasonic** as the brand.
2. Select **Serial** as the model.
3. Select the CI0 or RIO port the camera is connected to.

![P2 serial config setup](/img/Integrations/Panasonic/P2-config-setup.png)
