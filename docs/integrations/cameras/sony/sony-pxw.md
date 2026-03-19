---
id: sony-pxw
title: "Sony PXW camcorders"
sidebar_label: "Sony PXW"
description: "Integrate Sony PXW series professional camcorders with Cyanview for remote paint and camera control."
keywords: [Sony PXW, camcorder, professional, broadcast]
slug: /integrations/cameras/sony/sony-pxw
---

![Sony PXW-Z200 camcorder](/img/Integrations/Sony/Sony-PXW/PXW-Z200.png)

Control Sony PXW camcorders from your Cyanview RCP over a direct LAN connection. The integration uses the Sony SDK released in 2025.

## Supported models

- PXW-Z200
- PXW-Z300
- HXR-NX800

:::danger Minimum firmware required
This integration requires RCP and RIO firmware **25.10.1Beta2 or later**. Update your devices before proceeding — see [Software update](/docs/reference/firmware-download).
:::

## Supported controls

:::info
Control is limited in the current beta release. Future releases will expand the available parameters.
:::

| Control | Notes |
|:--------|:------|
| **Exposure** — Iris, Gain, Shutter | |
| **ND** | |
| **Colour temperature and tint** | |

## Workflow

The RCP connects directly to the camcorder's LAN port — no additional hardware required.

![Sony IP camcorder workflow diagram](/img/Integrations/Sony/Sony-PXW/Sony_IP_Camcorder.png)

## Configuration

### Camera setup

1. Set a `Username` and `Password` on the camcorder — you will need these when adding the camera to the RCP.
2. Go to `Network > Wired LAN`:
   - Enable `Camera Remote Control`.
   - Set the camera's `IP Address` and other network settings.
3. Set the switch on the camera body to **Manual**.

![Camera body Manual switch position](/img/Integrations/Sony/Sony-PXW/Sony_PXW_Manaul_Switch.png)

### RCP/RIO setup

Open the RCP web UI and go to **Quick Start Guide — RCP Start**.

1. In the Camera section, click `+` to add a new camera.

   ![Quick Start — add camera button](/img/Configuration/Quick_Start/Quick_Start_Addcamera.png)

2. In **General**, enter a camera `number` and `name`.

   ![Quick Start — general camera name field](/img/Configuration/Quick_Start/Quick_Start_GeneralName.png)

3. Select brand: **Sony**.
4. Select model: **FX6**.

   :::info
   Until the UI is updated to reflect these models, use **FX6** as the model for PXW-Z200, PXW-Z300, and HXR-NX800.
   :::

5. Enter the `Login` and `Password` you set on the camera.

   ![Sony FX6 login and password setup form](/img/Integrations/Sony/Sony-FX6/FX6-setup.png)

When configured correctly, the camera block turns green.

![Sony FX6 camera block showing green connected status](/img/Integrations/Sony/Sony-FX6/FX6-block.png)
