---
id: gh5s
title: "Panasonic GH5S integration"
sidebar_label: "Panasonic GH5S"
description: "Control the Panasonic GH5S and GH7 mirrorless cameras with Cyanview through a USB connection."
keywords: [Panasonic GH5S, mirrorless, USB control]
slug: /integrations/cameras/panasonic/gh5s
---

![Panasonic GH5S](/img/Integrations/Panasonic/GH5S.png)

Connect the Panasonic DC-GH5S or DC-GH7 to a Cyanview RCP or RIO via USB for remote exposure and color control.

## Supported controls

**All models (GH5S, GH7):**
- Auto exposure modes P, A, S, or manual
- Exposure compensation
- Iris
- Shutter
- Gain (ISO)
- Color temperature
- A-B / G-M settings mapped to R/B encoders — these are not standard red/blue gains

**GH7 additional controls:**
- Saturation
- Hue
- Detail
- Noise reduction
- Knee (on/off/manual — point and slope not controllable)

## Wiring

Connect the camera to a RCP or RIO using a USB cable.

## Configuration

Connect the USB cable to the RCP or RIO, then connect the camera. When the USB cable is connected, the camera prompts you to choose a USB mode. Select **PC (Tether)**.

Then configure the camera in the RCP configuration interface:

1. Click `+` in the camera block — a new panel appears on the right.
2. Under `General`, set a number and a name.
3. Select `Panasonic` for the brand and `DC-GH5S` or `DC-GH7` for the model.

Your settings should look like this:

![GH5S setup configuration](/img/Integrations/Panasonic/Panasonic-GH5S-setup.png)

And your camera block:

![GH5S camera block](/img/Integrations/Panasonic/Panasonic-GH5S-block.png)

:::tip
To use the full ISO range, set **Dual Native ISO Setting** (in the Exposure menu) to **AUTO**.
:::
