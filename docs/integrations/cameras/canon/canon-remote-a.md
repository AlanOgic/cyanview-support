---
id: canon-remote-a
title: "Canon Remote A protocol"
sidebar_label: "Canon Remote A"
description: "Integrate Canon cameras using the Remote A protocol with Cyanview for serial-based camera control."
keywords: [Canon, Remote A, serial, camera control, protocol]
slug: /integrations/cameras/canon/canon-remote-a
---

<img src="/img/Integrations/Canon/canon-C200.png" width="300"/>


## Supported models

We support all CXX models through the `Remote A` control:
* C100
* C200
* C300mk1 and C300mk2
* C500mk1
* C700
* XF705

:::note
If you have a:
* C70
* C300mk3
* C500mk2

Remote-A is supported, but prefer the <a href="/docs/Integrations/Canon/CanonXC">Canon XC</a> protocol, it is IP, faster and bidirectional.
:::


## Wiring

<img src="/img/Integrations/Canon/canon-LANC-wiring.png"/>


* Plug the cable [CY-CBL-6P-LANC-03](/docs/Accessories/CableCatalog#cy-cbl-6p-lanc-03) in your camera
* Plug the other side on the CI0 port 2 (port 1 is not compatible with `Remote A`)

## Controls

|Control|Remote-A
:-----|:----
**Exposure** (Iris, Gain, Shutter, ND filter)|✔
**White balance** (R/B)|✔
**Black balance** (R/B, master black and black gamma)|✔
**Other settings** (knee, detail)|✔
**OSD/Menu**|✔
**Lens** <a href="/docs/Manuals/RCP/RCPUI/RCPUIScene">(zoom, focus)</a>|✔
**Scene file** : <a href="/docs/Manuals/RCP/RCPUI/RCPUIScene">save/recall</a>|✔

:::note
The protocol Remote-A is unidirection (no feedback from camera) and limited. We try to display the most accurate values, but we receive no feedback from the camera so this is always an approximation. Ensure to precisely follow the camera setup guide below to ensure the best match between RCP values and camera values.
:::

## Camera configuration

You can find more information on the Canon camera [manual](https://www.usa.canon.com/internet/portal/us/home/support/details/cameras/cinema-eos/eos-c200?tab=manuals) and in the RCV-100 [manual](https://www.usa.canon.com/internet/portal/us/home/support/details/supplies-accessories/controllers-remotes-wireless-microphones/remote-controller-rc-v100?tab=manuals)

You need to check (if you don't change it, it will probably work, but the values on the RCP and camera will not match):
* The IRIS :
    * `Iris Increment` set to `1/3 stop`
    * `Fine Increment` set to `on`


<img src="/img/Integrations/Canon/canon-LANC-menu-iris.png" width="300"/>


* The Shutter :
    * `Shutter Mode` to `Speed`
    * `Shutter Increment to `1/4 stop`
    * `ISO/Gain` to `Gain`
    * `ISO/Gain Extended Range` to `Off`
    * `Gain Increment` to `Fine`

<img src="/img/Integrations/Canon/canon-LANC-menu-shutter.png" width="300"/>

* Remote mode : `REMOTE Term.` to `RC-V100`


<img src="/img/Integrations/Canon/canon-LANC-menu-remote.png" width="300"/>

* Red/Blue gain, Red/Blue pedestal, master black:
    * `Custom picture` to any value except `off`

## Setup

* Click on the `+` in the camera block, a new panel will appear on the right
* In `General` Configure a Number and a Name
* Select `Canon` for the brand and ``Remote A`` as the model.
* Then select in the interface drop-down list your CI0 serial (only port 2 is available for `Remote A`)
* Here, my CI0 is `CI0-15-13`, on the port `2`

<img src="/img/Integrations/Canon/canon-LANC-setup.png" width="300"/>

The block:

<img src="/img/Integrations/Canon/canon-LANC-block.png" width="300"/>
