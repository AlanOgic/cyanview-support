---
id: cc-follow
title: Color corrector sync channels
description: "Sync multiple color corrector channels together so a single camera on the RCP shades several CC inputs at once."
keywords: [color corrector, sync, follow, vpro8, snp, vmix, for-a, micron, boxio]
slug: /restricted/configuration/cc-follow
---

# Color corrector sync channels

## Introduction

This procedure lets you sync multiple color corrector channels together. Set up a single camera on the RCP and shade multiple CC channels at once.

Compatible color correctors:

- V\_\_pro8
- SNP
- vMix
- For-A
- Micron
- BoxIO

:::note
You can only sync channels of the same CC. You cannot sync two separate CCs together.
:::

## Setup

Follow the [generic color corrector guide](/docs/integrations/generic/color-corrector) to set up your color corrector.

You should have a CC block:

<img src="/img/Configuration/restricted/CCFollow/vpro-block.png" width="400"/>

Create at least one camera to control your master channel (here channel 1):

<img src="/img/Configuration/restricted/CCFollow/vpro-ch1.png" width="400"/>

Navigate to the advanced configuration by appending `/dev/app.html` to your RCP URL (for example, `http://10.192.18.4/dev/app.html`).

Find your CC block (here the name entered is `Vpro8`):

<img src="/img/Configuration/restricted/CCFollow/vpro-devapp.png" width="400"/>

Inside the block, click on the slave input (here `input 2`). In the right panel, set the `follow_input` value to your master channel (here `1`):

<img src="/img/Configuration/restricted/CCFollow/vpro-ch2-follow-ch1.png" width="400"/>

You now have one camera on the RCP (named `VPro-CH1`) that controls both `input 1` and `input 2` (which follows `input 1`).
