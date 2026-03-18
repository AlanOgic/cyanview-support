---
id: gh5s
title: "Panasonic GH5S integration"
sidebar_label: "Panasonic GH5S"
description: "Control the Panasonic GH5S mirrorless camera with Cyanview through serial or IP connection."
keywords: [Panasonic GH5S, mirrorless, serial, IP control]
slug: /integrations/cameras/panasonic/gh5s
---

<img src="/img/Integrations/Panasonic/GH5S.png" width="400"/>

Supported controls:
* Auto exposure modes P, A, S or manual
* Exposure compensation
* Iris
* Shutter
* Gain in ISO
* Color temperature
* A-B/G-M settings are mapped to R/B encoders, it's not standard red/blue gains

For the GH7:
* Saturation
* Hue
* Detail
* Noise reduction
* Knee (just on/off/manual, no control of point and slope)

## Wiring

This camera must be connected with a USB cable to a RCP or a RIO.

## Configuration

Connect the USB cable to a RCP or a RIO, and connect the camera. When the USB cable is connected to the camera, you'll have to choose between three USB options :

- PC (storage)
- PC (Tether)
- PictBridge (PTP)

Select **PC (Tether)**. Then, configure the camera in the configuration interface :

- Click on the `+` in the camera block, a new panel will appear on the right
- In `General` Configure a Number and a Name
- Select `Panasonic` for the brand and `DC-GH5S` or `DC-GH7` for the model.

Your settings should look like:


<img src="/img/Integrations/Panasonic/Panasonic-GH5S-setup.png" width="200"/>


And your camera block:

<img src="/img/Integrations/Panasonic/Panasonic-GH5S-block.png" width="200"/>

## Notes

- To use the full ISO range, the "Dual Native ISO Setting" in the Exposure menu must be set to "AUTO".
