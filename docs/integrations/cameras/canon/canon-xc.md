---
id: canon-xc
title: "Canon XC series"
sidebar_label: "Canon XC"
description: "Connect Canon XC series camcorders to Cyanview for remote camera control over IP."
keywords: [Canon XC, camcorder, IP control, remote]
slug: /integrations/cameras/canon/canon-xc
---

# Canon XC

This allows to control your camera over ethernet as long as your camera is compatible with XC protocol.


## Supported models

We support all the compatible models through the `XC` control (IP):
* C70
* C80
* C300mk3
* C400
* C500mk2
* <a href="/docs/integrations/cameras/canon/canon-xf605">XF605</a>

:::note
For other models, you can use the `Remote A` control (2.1 mm jack), see <a href="/docs/integrations/cameras/canon/canon-remote-a">Canon Remote A</a>
:::

## Wiring

<img src="/img/Integrations/Canon/XC/XC-wiring.png" width="900"/>

## Camera control

|Control|XC
:-----|:----
**Exposure** (Iris, Gain, Shutter, ND filter)|✔
**White balance** (R/B, Color temp)|✔
**Black balance** (R/B, master black and black gamma)|✔
**Other settings** (saturation, knee, detail, denoise)|✔
**Tally**|✔
**OSD/Menu**|✔
**Lens** <a href="/docs/reference/manuals/rcp/ui/scene">(zoom, focus)</a>|✔
**Scene file** : <a href="/docs/reference/manuals/rcp/ui/scene">save/recall</a>|✔

## Camera Configuration

You need to:
* Configure ethernet static IP
* Enable XC protocol

You can follow the wizard in the menu ´Network Settings > New Conn. Settings (Wizard)`:
<img src="/img/Integrations/Canon/XC/XC-wizard-step1.jpg" width="300"/>

* For `Select Function` step, chose `XC Protocol`

<img src="/img/Integrations/Canon/XC/XC-wizard-step2.jpg" width="300"/>

* For `Communication Settings`, chose `Create New Comm. Setting`

* For `Network Type`, chose `Ethernet`

* For `Setting Method`, chose `Setup with Network Connection`

* For `IP Address Settings (IPV4)`, chose `Manual Setting`

* Then enter a valid IP

<img src="/img/Integrations/Canon/XC/XC-wizard-step3.jpg" width="300"/>

* For `XC Protocol`, chose `Create New Func. Setting`

<img src="/img/Integrations/Canon/XC/XC-wizard-step4.jpg" width="300"/>

* For `Authentication Method`, chose `No Auth.`

<img src="/img/Integrations/Canon/XC/XC-wizard-step5.jpg" width="300"/>

If your camera IP is not in the range `10.192.0.0/16`, you can follow this [guide](/docs/guides/networking/ip-configuration#lan-configuration)

For the control:
* In the menu `Custom Picture`, Seletect `UserXX`
* Edit and ensure to setup `Color Space` to `BT.709 Standard` to access advanced shading (detail, etc.)

<img src="/img/Integrations/Canon/XC/canon-profile.jpg" width="300"/>

## RCP/RIO configuration

Setup a new camera via the [RCP Configuration UI](/docs/reference/manuals/rcp/web-ui):
- Enter a custom number, name, etc.
- Select **Canon** brand
- Select **XC** for the protocol
- Enter the IP of your camera

This should looks like this:

<img src="/img/Integrations/Canon/XC/Canon-XC-setup.png" width="300" />

And once correctly connected, it should be green:

<img src="/img/Integrations/Canon/XC/Canon-XC-block.png" width="300" />

## Troubleshooting

### No paint control

Ensure your camera is not in `ATW`.

Ensure your camera `Custom Picture` profile is `Unprotect`:
* Open menu (can be done from RCP)
* Navigate to `CP`
* Click on `Edit CP File`
* Ensure `Protect` is set to `Unprotect`
