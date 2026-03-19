---
id: lawo-vpro8
title: "Lawo V__pro8 integration"
sidebar_label: "Lawo V__pro8"
description: "Integrate Lawo V__pro8 video processing with Cyanview for unified camera and video processing control."
keywords: [Lawo, V__pro8, video processing, integration]
slug: /integrations/broadcast-systems/lawo-vpro8
---

![Lawo V__pro8 video processor](/img/Integrations/VPro8/VPro8.png)

The Lawo V__pro8 integration lets you control video processor channels directly from your RCP alongside camera control. All supported devices share the same primary correction controls.

## Supported models

- V__pro8
- V__remote4
- V__link4
- V__matrix

## Supported controls

All devices support the same primary corrections. These operate on gamma-corrected signals, similar to a ProcAMP — they do not emulate real camera behavior.

| Control | Notes |
| :--- | :--- |
| **Gain** - Master/RB | |
| **Gamma** - Master/RB | |
| **Black** - Master/RB | |
| **Saturation** | |

## Wiring

![V__pro8 wiring diagram](/img/Integrations/VPro8/VPro8-wiring.png)

## Setup

**Step 1 — Check firmware version**

Your V__pro8 must run firmware `V_pro8_120121` or newer. Older versions are not supported.

**Step 2 — Connect the RCP to the V__pro8**

1. Open the [RCP Configuration UI](/docs/reference/manuals/rcp/web-ui) and go to the `Components` block.
2. Click `+` and select `Video Processor > Lawo: V__pro8`.
3. Enter the IP address of your V__pro8.

![V__pro8 settings panel](/img/Integrations/VPro8/VPro8-settings.png)

When connected successfully, the component turns green.

![V__pro8 connected block](/img/Integrations/VPro8/VPro8-block.png)

:::tip
If you have more than one V__pro8, repeat this step for each unit and give each a unique name.
:::

**Step 3 — Map video channels to cameras**

1. In the `Camera` block, click `+`.
2. In the `General` section, assign a number and a name.
3. In the `Camera Head` section, select **Not controlled** as the brand.
4. In the `Video Processor` section, select your V__pro8 and video channel using the format `VPRO8_NAME : VPRO8_CHANNEL`.

![V__pro8 camera config setup](/img/Integrations/VPro8/VPro8-config-setup.png)

When configured correctly, the camera block looks like this:

![V__pro8 camera config block](/img/Integrations/VPro8/VPro8-config-block.png)

Repeat this step for each V__pro8 video channel you want to control.
