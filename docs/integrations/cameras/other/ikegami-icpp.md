---
id: ikegami-icpp
title: "Ikegami ICPP integration"
sidebar_label: "Ikegami ICPP"
description: "Connect Ikegami cameras via the ICPP protocol with Cyanview for remote paint and camera control."
keywords: [Ikegami, ICPP, broadcast camera, paint control]
slug: /integrations/cameras/other/ikegami-icpp
---

![Ikegami HDK-79EX3 broadcast camera](/img/Integrations/Ikegami/Ikegami_HDK_79EX3.png)

Cyanview controls Ikegami cameras via the ICPP serial protocol, giving you full remote paint and exposure control from the RCP.

## Compatible cameras

Any camera with RS422 control using an 8-pin PRC05-PB8M connector should work.

Supported models:
- Ikegami HDK-79EX
- Ikegami HDK-79GX
- Ikegami HDK-73
- Ikegami HDK-97
- Ikegami HDK-99

:::warning
The HDK-55 series (HDK-55, FA-55, etc.) is not supported. The 55 was an entry-level system where the serial port control was not fully implemented.
:::

## Camera control

| Control | Ikegami ICPP |
|:--------|:------------:|
| **White balance** (R/B and color temp) | ✔ |
| **Black balance** (R/B) | ✔ |
| **Other** (Master Gamma, Knee and Detail) | ✔ |
| **Exposure** (Iris, Gain, Shutter and ND filter) | ✔ |
| **Scene file** — [save/recall](/docs/reference/manuals/rcp/ui/scene) | ✔ |
| **Auto** (Auto Iris, Auto White Balance, Auto Black Balance) | ✔ |

## Camera wiring

![Ikegami ICPP wiring diagram](/img/Integrations/Ikegami/Ikegami-wiring.png)

You will need:
- RCP
- CI0
- [CY-CBL-6P-FAN](/docs/resources/cable-catalog#cy-cbl-6p-fan)
- [Tajimi Male Plug 8-pin PRC05-PB8M connector](/docs/resources/cable-catalog#ikegami)

The connector is expensive and hard to source, so Cyanview does not sell it. Follow the [wiring guide](/docs/resources/cable-catalog#ikegami) to combine the `CY-CBL-6P-FAN` with the connector and build your own cable.

## Camera configuration

Configure the camera in RS422 with one-way remote control data (U4) at 38400 baud:
- `Engineering Menu` > `COMMAND MODE`: select `U4(38400)`

## RCP configuration

Set up a new camera via the [RCP Configuration UI](/docs/reference/manuals/rcp/web-ui):
- Enter a custom number, name, etc.
- Select **Ikegami** brand.
- Select **ICPP** for the model.
- Select your CI0 and port (for example: CI0 `21-96` on port `1`).

![Ikegami camera setup configuration](/img/Integrations/Ikegami/Ikegami-setup.png)

Once connected correctly, the status turns green:

![Ikegami camera connected green status](/img/Integrations/Ikegami/Ikegami-block.png)
