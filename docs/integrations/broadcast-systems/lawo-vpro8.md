---
id: lawo-vpro8
title: "Lawo V__pro8 integration"
sidebar_label: "Lawo V__pro8"
description: "Integrate Lawo V__pro8 video processing with Cyanview for unified camera and video processing control."
keywords: [Lawo, V__pro8, video processing, integration]
slug: /integrations/broadcast-systems/lawo-vpro8
---

<img src="/img/Integrations/VPro8/VPro8.png" width="400"/>


## Supported models

- V__pro8
- V__remote4
- V__link4 
- V__matrix


## Supported controls

All devices support the same set of primary corrections. These corrections function similarly to a ProcAMP, operating on gamma-corrected signals. Note that they do not emulate the behavior of a real camera.

| Control                                                     | Notes |
| :---------------------------------------------------------- | :-- |
|**Gain** - Master/RB|
|**Gamma** - Master/RB|
|**Black** - Master/RB|
|**Saturation**|


## Wiring

<img src="/img/Integrations/VPro8/VPro8-wiring.png" width="900"/>


## Setup

[Step 1] : Ensure your V__pro8 version is at least V_pro8_120121. We don't support older versions.

[Step 2] : Connect the RCP to the V__pro8

* In the [RCP Configuration UI](/docs/reference/manuals/rcp/web-ui), in `Components` block, click on `+`
* Select `Video Processor > Lawo: V__pro8`
* Enter the IP of your V__pro8


<img src="/img/Integrations/VPro8/VPro8-settings.png" width="400"/>


If everything is correct, it should go green:


<img src="/img/Integrations/VPro8/VPro8-block.png" width="400"/>

:::note
If you have more than one V__pro8, simply repeat the operation and make sure to give each one a unique name.
:::


[Step 3] : Control the desired channels

* In the [RCP Configuration UI](/docs/reference/manuals/rcp/web-ui), in `Camera` block, click on `+`
* In the `General` section, give it a number and a name
* In the `Camera Head` section, select **Not controlled** brand
* In the `Video Processor`, select your V__pro8 and video channel (format : `VPRO8_NAME : VPRO8_CHANNEL`)

<img src="/img/Integrations/VPro8/VPro8-config-setup.png" width="400"/>

If everything is correctly configured, it should looks like this:

<img src="/img/Integrations/VPro8/VPro8-config-block.png" width="400"/>

:::note
Repeat the operation for all your V__pro8 video channel.
:::
