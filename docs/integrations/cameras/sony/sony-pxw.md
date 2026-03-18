---
id: sony-pxw
title: "Sony PXW camcorders"
sidebar_label: "Sony PXW"
description: "Integrate Sony PXW series professional camcorders with Cyanview for remote paint and camera control."
keywords: [Sony PXW, camcorder, professional, broadcast]
slug: /integrations/cameras/sony/sony-pxw
---

<img src="/img/Integrations/Sony/Sony-PXW/PXW-Z200.png" width="500" />

## Supported Models

The new Sony SDK (Released 2025) enables remote control support of:

- PXW-Z200
- PXW-Z300
- HXR-NX800

:::danger New Integration
Please note, the update to Sony SDK, (released in 2025) is only supported from `25.10.1Beta2`

Ensure the RCP and RIO is updated to this version or later. See here: [Software update](/docs/reference/firmware-download)
:::

## Supported control

:::info Note
In the current beta, the supported control is limited. Later releases will enable more control
:::

|Control|Notes|
|:-----|:-----|
|**Exposure** - Iris, Gain, Shutter|
|**ND**|
|**Colour Temperature & Tint**|

## Workflow

The RCP connects to the camcorders directly to the LAN port. All over IP

<img class="diagram" alt="Sony_IP_Camcorder" src="/img/Integrations/Sony/Sony-PXW/Sony_IP_Camcorder.png" width="500" />

## Configuration

### Camera Setup

- Set a `Username` and `Password` on the camcorder

:::info Note
Make a note of this, you will need to add it to the RCP
:::

- Go to `Network` -> `Wired LAN`
    - Enable `Camera Remote Control`
    - Setup the camera's `IP Address` and remaining `Network Settings`

- **Important Step** - Ensure the switch is set to 'Manual' on the camera's body

![Camera_Body](/img/Integrations/Sony/Sony-PXW/Sony_PXW_Manaul_Switch.png)

### RCP/RIO Setup

Access the RCP's UI -> 'Quick Start Guide - RCP Start'

- In the Camera section click on `+` to add a new camera

![Quick Start Add Camera](/img/Configuration/Quick_Start/Quick_Start_Addcamera.png)

- In `General` add a camera `number` and `name`. This is anything related to your workflow.

![Quick Start General Add Name](/img/Configuration/Quick_Start/Quick_Start_GeneralName.png)

- Select brand: Sony
- Select model: `FX6`

:::info Note - Setup
Currently, the only way to setup these cameras is to use the `FX6` model

There will be an update where the UI is related to the model
:::

- Add the `Login` and `Password`

![Sony FX6 Setup](/img/Integrations/Sony/Sony-FX6/FX6-setup.png)

If all correctly setup, the status will go green

![Sony FX6 Block](/img/Integrations/Sony/Sony-FX6/FX6-block.png)

