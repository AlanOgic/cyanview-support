---
id: ikegami-icpp
title: "Ikegami ICPP integration"
sidebar_label: "Ikegami ICPP"
description: "Connect Ikegami cameras via the ICPP protocol with Cyanview for remote paint and camera control."
keywords: [Ikegami, ICPP, broadcast camera, paint control]
slug: /integrations/cameras/other/ikegami-icpp
---

<img src="/img/Integrations/Ikegami/Ikegami_HDK_79EX3.png" width="400" />

## Compatible cameras

If you camera has a RS422 control with 8 pins PRC05-PB8M connector, it should work.

Supported models:
* Ikegami HDK-79EX
* Ikegami HDK-79GX
* Ikegami HDK-73
* Ikegami HDK-97
* Ikegami HDK-99


:::warning
We don't support any of the 55 (hdk-55, FA-55, etc.). The 55 was an entry level camera system where not all features were installed and it can't be controlled through the serial port from what Ikegami told us.
:::

## Camera control

|Control|Ikegami ICPP
:-----|:-----:|
**White balance** (R/B and Color temp)|✔
**Black balance** (R/B)|✔
**Other** (Master Gamma, Knee and Detail)|✔
**Exposure** (Iris, Gain, Shutter and ND filter)|✔
**Scene file** : <a href="/docs/reference/manuals/rcp/ui/scene">save/recall</a>|✔
**Auto** (Auto Iris, Auto White Balance, Auto Black Balance)|✔
## Camera wiring

<img src="/img/Integrations/Ikegami/Ikegami-wiring.png" width="700" />

You will need:
* RCP
* CI0
* <a href="/docs/resources/cable-catalog#cy-cbl-6p-fan">CY-CBL-6P-FAN</a>
* <a href="/docs/resources/cable-catalog#ikegami">Tajimi Male Plug 8 pins PRC05-PB8M connector</a>

The connector is pricey, difficult to find, so we don't sell it.
You can follow <a href="/docs/resources/cable-catalog#ikegami">this wiring guide</a> to combine our `CY-CBL-6P-FAN` and the connector to make your own cable.

## Camera configuration

Configure the camera in RS422, with one-way remote control data (U4) with 38400 baudrate:
* `Engineering Menu` > `COMMAND MODE` : select `U4(38400)`

## RCP configuration

Set up a new camera via the <a href="/docs/reference/manuals/rcp/web-ui">RCP Configuration UI</a>:
- Enter a custom number, name, etc.
- Select **Ikegami** brand
- Select **ICPP** for the model
- Select your CI0 and port : CI0 `21-96` on port `1` in my case

This should look like this:

<img src="/img/Integrations/Ikegami/Ikegami-setup.png" width="300" />

And once correctly connected, it should be green:

<img src="/img/Integrations/Ikegami/Ikegami-block.png" width="300" />
