---
id: p2-serial
title: "Panasonic P2 serial cameras"
sidebar_label: "Panasonic P2 serial"
description: "Connect Panasonic P2 cameras via serial to Cyanview through a CI0 or RIO for remote camera control."
keywords: [Panasonic P2, serial, CI0, RIO, broadcast]
slug: /integrations/cameras/panasonic/p2-serial
---

<img src="/img/Integrations/Panasonic/aj-hpx3100g.jpg" width="600" />

## Supported Models

* AG-HPX300
* AG-HPX500
* AJ-HPX2700
* AJ-HPX3100
* Generic : this model assumes all features are available so this can be used with any other camera. Some features may not be available or may not function as expected depending on what is supported by the specific camera model.

:::note
All AJ-HPX cameras with the Hirose 10p connector are supported. Simply select `Generic` model. Depending on the model (if not specificaly listed), some features may not be available or not working properly.
:::


## Supported Control

|Control|AG-HPX300|AG-HPX500|AJ-HPX2700|AJ-HPX3100|Generic|
|:-------|:----:|:----:|:----:|:---:|:---:|
|OSD|✔|✔|✔|✔|✔|
|Gain (M / R / B)|✔|✔|✔|✔|✔|
|Pedestal (M / R / B)|✔|✔|✔|✔|✔|
|Gamma (M / R / B)|||✔|✔|✔|
|Black gamma|||✔|✔|✔|
|Saturation|||✔|✔|✔|
|Whiteclip|||✔|✔|✔|
|Knee|||✔|✔|✔|
|Matrix|||✔|✔|✔|
|Detail|||✔|✔|✔|
|ND filters||RO|||✔|
|AWB|✔|✔|✔|✔|✔|
|Iris|✔|✔|✔|✔|✔|
|Shutter|✔|✔|✔|✔|✔|


## Workflow

The camera is controlled over a serial link and requires a CY-CIO or CY-RIO interface.

The appropriate cable is [CY-CBL-6P-PAN-10P](/docs/Accessories/CableCatalog#cy-cbl-6p-pan-10p).

<img src="/img/Integrations/Panasonic/Panasonic-P2serial-connect.png" width="900" />


## Setup

Add a camera on your RCP or RIO:

  * Select **Panasonic** brand
  * Select **Serial** model
  * Select your CI0 or RIO port to which the camera is plugged

<img src="/img/Integrations/Panasonic/P2-config-setup.png" width="200" />
