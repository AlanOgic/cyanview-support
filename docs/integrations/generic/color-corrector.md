---
id: color-corrector
title: "Color corrector integration"
sidebar_label: "Color correctors"
description: "Control standalone color correctors or pair them with camera heads through your Cyanview RCP for unified color management."
keywords: [color corrector, CCU, color grading, live color]
slug: /integrations/generic/color-corrector
---

Connecting the RCP to your color corrector lets you control each CC channel directly from the RCP, and optionally combine camera head control and color corrector control in a single camera slot.

## Supported devices

* Blackmagic Teranex
* Lawo VPro8
* AJA FS series (FS 2, FS 4, FS HDR)
* AJA ColorBox and OG-ColorBox (OpenGear version)
* FOR-A FA-1010 and FA-1616 (FA-1616 requires firmware R3.30 or later)
* EVS Neuron and select Synapse cards
* Cobalt (select cards)
* Imagine SNP
* Flanders BoxIO
* VMix
* Riedel MicroN

## Wiring

Connect your RCP to the same network as the color corrector.

![Color corrector wiring diagram](/img/Integrations/Generic/CC/CC-wiring.png)

## Setup

Open your [RCP Configuration UI](/docs/reference/manuals/rcp/web-ui).

If your color corrector is outside the default `10.192.0.0/16` range, follow the [IP configuration guide](/docs/guides/networking/ip-configuration) to ensure the RCP can reach it.

In the `Configuration` tab, under `Components`, click `+`, then select `Video Processor`. Choose your color corrector from the list.

Click the new block that appears on the right:

![Color corrector setup panel](/img/Integrations/Generic/CC/CC-setup.png)

* **Step 1** — enter a name for the color corrector (optional)
* **Step 2** — enter the device IP address

When connected successfully, the block turns green:

![Color corrector block — green](/img/Integrations/Generic/CC/CC-block.png)

### Color corrector only

To control a CC channel without a camera head:

1. Create a new camera with a number and a name.
2. Set `Camera Head` to `Not controlled`.
3. Under `Video Processor`, select your CC and channel in the format `NAME:CHANNEL_ID`.

Your configuration should look like this:

![CC-only camera setup](/img/Integrations/Generic/CC/CC-alone-setup.png)

When connected, the block turns green:

![CC-only block — green](/img/Integrations/Generic/CC/CC-alone-block.png)

### Color corrector combined with camera control

To control both a camera and a CC together:

1. Create a new camera with a number and a name.
2. Select your camera brand and model.
3. Under `Video Processor`, select your CC and channel in the format `NAME:CHANNEL_ID`.

Your configuration should look like this:

![Combined camera + CC setup](/img/Integrations/Generic/CC/CC-combined-setup.png)

When connected, the block turns green:

![Combined block — green](/img/Integrations/Generic/CC/CC-combined-block.png)

### RCP operation

By default, camera head control takes priority over CC control. For example, on a camera with white controls only:
* Adjusting gain on the RCP sends the command to the camera.
* Adjusting blacks sends the command to the CC.

Three buttons appear on the RCP when a CC is configured:
* `CAM` — toggle camera head control
* `POST` — toggle CC control
* `C->P` / `P->C` — switch priority between camera and CC

#### Camera and CC combined (camera priority)

![RCP — camera and CC combined, camera priority](/img/Manual/VP4/VP4-postpro-camera-combined.png)

Camera and CC are both active. Camera has priority — the CC compensates only what the camera does not handle.

#### Camera only

![RCP — camera only](/img/Manual/VP4/VP4-cam-only.png)

#### CC only

![RCP — CC only](/img/Manual/VP4/VP4-postpro-camera-only.png)

#### Camera and CC combined (CC priority)

![RCP — camera and CC combined, CC priority](/img/Manual/VP4/VP4-postpro-camera-postpro.png)

* `P->C` = Post (processing) over Camera
* `C->P` = Camera over Post (processing)
