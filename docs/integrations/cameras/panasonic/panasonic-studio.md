---
id: panasonic-studio
title: "Panasonic studio cameras"
sidebar_label: "Panasonic Studio"
description: "Control Panasonic studio cameras with Cyanview. Full CCU-style paint control for multi-camera studio production."
keywords: [Panasonic, studio camera, CCU, paint control]
slug: /integrations/cameras/panasonic/panasonic-studio
---

<img src="/img/Integrations/Panasonic/AK-UC4000.jpg" width="600" />

## Supported models

Panasonic studio cameras can be controlled through the CCU or using the camera head directly without CCU. The following models are supported:

* AK-UC4000
* AK-UCX100
* AK-UC3300
* AK-PLV100GSJ
* AK-HC3900

:::note
The developments have been done using an UC4000 camera, and it has been reported working correctly with the PLV100. It should work with the following models but it has not been tested yet.
:::

## Controls and Wiring

As a studio camera system, these models offer comprehensive control capabilities via RCP, and our integration supports virtually all available paint camera functions.

### Control of the camera head only

The control is over IP so you need to connect your RCP or RIO to the same network as your camera. The camera has an RJ45 connector for this.

Even though the camera does have a serial remote control port, this is a legacy protocol that we don't support and is of no interest today.

### Control through a CCU

Control of the camera through the CCU is also possible, the target IP address set in the configuration is now the IP address of the CCU and not the camera.

All controls will be forwarded to the camera except tally. The only options to receive tally is either a physical GPI connection or TSL sent directly to the CCU. The RCP currently can't send TSL to a CCU but we have plans for this. At the moment you have to provide tally dirctly to the CCU.

## Setup

On your RCP/RIO:
- Setup a new camera via the [RCP Configuration UI](/docs/reference/manuals/rcp/web-ui):
    * Select **Panasonic** brand
    * Select **Studio** model
    * Add the IP address of the CCU or without CCU, the IP of the camera head

<img src="/img/Integrations/Panasonic/studio-config-setup.png" width="200" />
