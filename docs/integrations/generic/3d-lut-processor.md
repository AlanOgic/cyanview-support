---
id: 3d-lut-processor
title: "3D LUT processor integration"
sidebar_label: "3D LUT processors"
description: "Integrate 3D LUT processors with Cyanview for real-time LUT-based color management in your broadcast production pipeline."
keywords: [3D LUT, color management, LUT processor, broadcast]
slug: /integrations/generic/3d-lut-processor
---

# 3D LUT Processor

## Overview

The RCP can control a 3D LUT processor and integrate with `Davinci Resolve`, `Premiere`, etc.

It means you can:
* Get some rushes from the cameras
* Grade in Resolve
* Export the LUT to the RCP
* Shade in live from the RCP, combining camera + LUT
* Export the LUT from the RCP to resolve at the end of the show

## Supported devices

* Cyanview VP4
* Flanders BoxIO
* AJA ColorBox
* Blackmagic Terranex Mini

## Wiring

<img src="/img/Integrations/Generic/3DLUTP/3DLUTP-wiring.png" width="600"/>

:::note
The laptop is optional and only requires for:
* setup
* import/export of the LUT
:::

## Setup

The setup is similar to any <a href="/docs/integrations/generic/color-corrector">Color Corrector integration</a>.

Navigate to your <a href="/docs/reference/manuals/rcp/web-ui">RCP Configuration UI</a>.

In the `Configuration` tab, in the `Components` section, click on `+`.

Select `Video Processor`.

In the list, select your color corrector and fill in the `name` and `IP address`:


<img src="/img/Integrations/Generic/3DLUTP/3DLUTP-setup.png" width="300"/>

- [step 1] chose a name for your color corrector (optional)
- [step 2] enter the IP of your device

If everything goes well, your block should turn green:


<img src="/img/Integrations/Generic/3DLUTP/3DLUTP-block.png" width="300"/>

:::note
In the VP4 case, it is autodetected and nothing to do
:::

You can now create a camera and in the `Video Processor` section, select the CC you just created.

<img src="/img/Integrations/Generic/3DLUTP/3DLUTP-cam1.png" width="300"/>

:::note
Here the cam is `Not controlled`, it means I just control the CC.

We could combine camera control (a FX9, etc.) with my BoxIO control.
:::

## Usage

For RCP operation of CC and combined cam+CC, you can refer to this <a href="/docs/integrations/generic/color-corrector#rcp-operation">generic guide</a>.

I'll show here the integration with `Davinci Resolve`, but the workflow is similar with any grading software.

### 3D LUT import/export in RCP

In your grading/editing software, export the LUT (format: 33 Point Cube):

<img src="/img/Integrations/Generic/3DLUTP/resolve-export.png" width="300"/>

:::note
This guide focus on mac os, but the workflow is similar on windows:
* ensure your PC has a compatible IP (you should be able to browse the RCP web UI)
* open file explorer in `This PC`
* right click, `Add a network location`
* network address: `\\<IP of your RCP>\3DLUT` (pay attention to the backslash), example: `\\10.192.18.4\3DLUT`
:::

Ensure your computer is wired and can reach your RCP:

<img src="/img/Integrations/Generic/3DLUTP/mac-fixed-IP.png" width="300"/>

Open your file explorer, and in `Network`, the Cyanview devices should appear with their serial number:

<img src="/img/Integrations/Generic/3DLUTP/mac-network-browse.png" width="300"/>

Click on the RCP, then double-click on `3DLUT` to mount this network directory locally on your computer:

<img src="/img/Integrations/Generic/3DLUTP/mac-rcp-browse.png" width="300"/>

You should see this:

<img src="/img/Integrations/Generic/3DLUTP/mac-rcp-3DLUT-empty.png" width="300"/>


The directory `exports` will contain exported LUT from the RCP.

Copy and paste the exported LUT from your computer to this directory (3DLUT root directory):

<img src="/img/Integrations/Generic/3DLUTP/mac-rcp-3DLUT.png" width="300"/>

Here for example, I have 2 dummy LUT:
* unsaturated
* saturated

:::note

LUT names can contain `-`, `_` or `.`.

Should end with `.cube`.

Are case-sensitive : `saturated.cube` is different from `SATURATED.cube`

No space allowed in name : `LUT Blackmagic_1.3007_12311817_C012.cube` is not allowed.
:::

### RCP operation

In this case, the basic screen displayed on RCP looks like this:

<img src="/img/Integrations/Generic/3DLUTP/rcp-scene0.png" width="300"/>

Navigate to `Paint 1 > Color`

<img src="/img/Integrations/Generic/3DLUTP/rcp-nolut.png" width="300"/>

By turning the 3rd encoder below the screen, I can see the LUT I exported from my computer.

* <img src="/img/Integrations/Generic/3DLUTP/rcp-browse-lut1.png" width="300"/>
* <img src="/img/Integrations/Generic/3DLUTP/rcp-browse-lut2.png" width="300"/>

Once you're on the desired LUT, click on the 3rd encoder (`Set LUT > Apply`).

This will load this LUT on the BoxIO channel 1 (based on my RCP configuration).

Once loaded, `Apply` will not be displayed anymore:

<img src="/img/Integrations/Generic/3DLUTP/rcp-save.png" width="300"/>

Here, I loaded my LUT `unsaturated.cube`.

Now, when I shade using my RCP, the RCP recalculate the LUT based on this one.

At the end of the show, I can then click on the 4th encoder (`Save LUT > Save`).

And my `live` LUT (base LUT + live shading) will be exported in the `exports` directory:

<img src="/img/Integrations/Generic/3DLUTP/rcp-3DLUT-exported.png" width="300"/>

The name is: `X_Y.cube` with:
* `X` : my camera number
* `Y` : my camera name

So in this case, in `exports`, I have a file: `1_BoxIO-CH1.cube` that I can import back to resolve through the network.

## Downloads

You can download the following dummy 3D LUT (generated from Davinci Resolve):
* <a target="_blank" href="/files/3DLUTP/unsaturated.cube">zero saturation, black and white</a>
* <a target="_blank" href="/files/3DLUTP/saturated.cube">over saturated</a>