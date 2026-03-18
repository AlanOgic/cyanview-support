---
id: color-corrector
title: "Color corrector integration"
sidebar_label: "Color correctors"
description: "Control standalone color correctors or pair them with camera heads through your Cyanview RCP for unified color management."
keywords: [color corrector, CCU, color grading, live color]
slug: /integrations/generic/color-corrector
---

# Color Correctors

## Overview

Connecting the RCP to your color corrector allows you to:
* control each CC channel from the RCP instead of a web page
* mix camera head control and color corrector control in a single camera

## Supported devices

* Blackmagic Teranex
* Lawo VPro8
* AJA FS serie (FS 2, FS 4, FS HDR)
* AJA ColorBox and OG-ColorBox (OpenGear version)
* FOR-A FA-1010 and FA-1616 (FA-1616 requires firmware version R3.30 or later)
* EVS Neuron and some Synapse cards
* Cobalt (support of a few of their cards)
* Imagine SNP
* Flanders BoxIO
* VMix
* Riedel MicroN

## Wiring

Connects your RCP to the same network.

<img src="/img/Integrations/Generic/CC/CC-wiring.png" width="900"/>

## Setup

Navigate to your [RCP Configuration UI](/docs/reference/manuals/rcp/web-ui).

If your color corrector is not in the default range `10.192.0.0/16`, check [this guide](/docs/guides/networking/ip-configuration) to ensure your RCP can communicate with it.

In the `Configuration` tab, in the `Components` section, click on `+`.

Select `Video Processor`. In the list, select your color corrector.

A new block should appear, click on it, on the right side:

<img src="/img/Integrations/Generic/CC/CC-setup.png" width="300"/>

- [step 1] chose a name for your color corrector (optional)
- [step 2] enter the IP of your device

If everything goes well, your block shoud turn green:

<img src="/img/Integrations/Generic/CC/CC-block.png" width="300"/>


### Color corrector channel alone

To control a CC channel:
* Create a new camera, with a number and a name
* Select `Not controlled` in the `Camera Head`
* Select your CC and channel in the `Video processor` section
* The format is: `NAME:CHANNEL_ID`

It should look like this:

<img src="/img/Integrations/Generic/CC/CC-alone-setup.png" width="300"/>

And if everything is fine, the block should appear `green`:

<img src="/img/Integrations/Generic/CC/CC-alone-block.png" width="300"/>

### Color corrector combined with camera control

To control both a camera and the CC combined:
* Create a new camera, with a number and a name
* Select the your camera brand and model in the list
* Select your CC and channel in the `Video processor` section
* The format is: `NAME:CHANNEL_ID`

It should look like this:

<img src="/img/Integrations/Generic/CC/CC-combined-setup.png" width="300"/>

And if everything is fine, the block should appear `green`:

<img src="/img/Integrations/Generic/CC/CC-combined-block.png" width="300"/>

### RCP operation

By default, camera head control has priority over CC control.
For example, on a camera that only have white controls:
* if you touch the gain on the RCP, we will send it to the camera
* if you touch the blacks, we will send it to the CC

In this case, 3 new buttons will appear on your RCP:
* `CAM` to toggle the camera head control
* `POST` to toggle the CC control
* `C->P` | `P->C` to change the camera/CC control priority

#### RCP : Camera and CC combined by default

<img src="/img/Manual/VP4/VP4-postpro-camera-combined.png" width="250" />

Combine camera and CC, camera has priority (CC only compensate what the camera has not)

#### RCP : Camera only

<img src="/img/Manual/VP4/VP4-cam-only.png" width="250" />

#### RCP : CC only

<img src="/img/Manual/VP4/VP4-postpro-camera-only.png" width="250" />

#### RCP : Camera and CC, CC has priority over camera

<img src="/img/Manual/VP4/VP4-postpro-camera-postpro.png" width="250" />

* `P->C` stands for Post (processing) over Camera control
* `C->P` stands for Camera over Post (processing) control
