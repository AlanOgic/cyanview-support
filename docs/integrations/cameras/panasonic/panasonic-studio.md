---
id: panasonic-studio
title: "Panasonic studio cameras"
sidebar_label: "Panasonic Studio"
description: "Control Panasonic studio cameras with Cyanview. Full CCU-style paint control for multi-camera studio production."
keywords: [Panasonic, studio camera, CCU, paint control]
slug: /integrations/cameras/panasonic/panasonic-studio
---

![Panasonic AK-UC4000](/img/Integrations/Panasonic/AK-UC4000.jpg)

Control Panasonic studio cameras from your RCP or RIO over IP — either directly to the camera head or through a CCU. The integration supports virtually all available paint and camera functions.

## Supported models

- AK-UC4000
- AK-UCX100
- AK-UC3300
- AK-PLV100GSJ
- AK-HC3900

:::note
Development and testing was done on an AK-UC4000. The integration has been confirmed working on the PLV100. Other models listed should work but have not been tested yet.
:::

## Connection options

### Direct camera head control

Connect your RCP or RIO to the same network as the camera using the RJ45 port on the camera head.

The camera does have a serial remote control port, but this is a legacy protocol and is not supported.

### Control through a CCU

You can also control the camera through a CCU. In this case, set the IP address in the configuration to the CCU's IP — not the camera's.

All controls are forwarded to the camera through the CCU, except tally. To receive tally, you must use either a physical GPI connection or TSL sent directly to the CCU.

:::info
The RCP cannot currently send TSL to a CCU — you must provide tally directly to the CCU. Support for this is planned.
:::

## Setup

Add a new camera via the [RCP Configuration UI](/docs/reference/manuals/rcp/web-ui):

1. Select **Panasonic** as the brand.
2. Select **Studio** as the model.
3. Enter the IP address of the CCU, or the camera head if not using a CCU.

![Studio camera config setup](/img/Integrations/Panasonic/studio-config-setup.png)
