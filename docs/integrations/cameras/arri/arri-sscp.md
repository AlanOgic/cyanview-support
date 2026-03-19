---
id: arri-sscp
title: "ARRI SSCP integration"
sidebar_label: "ARRI SSCP"
description: "Control ARRI Amira cameras over the SSCP protocol with Cyanview. Full remote paint and lens control for ARRI cinema cameras."
keywords: [ARRI, SSCP, Amira, cinema camera, remote control, paint, Cyanview]
slug: /integrations/cameras/arri/arri-sscp
---

Control your ARRI Amira remotely over the SSCP protocol with a Cyanview RCP. This integration provides full paint and lens control for live production workflows.

**Compatible model:** ARRI Amira

## Configure the camera IP

Set a static IP address on your ARRI Amira so the RCP can communicate with it reliably.

<img src="/img/Integrations/camera/ARRI/arri-IP.png" width="500" alt="ARRI Amira IP configuration" />

In the camera network settings, configure:
- **LAN IP mode** to `static`
- **LAN static IP** to your desired camera IP (example: `192.168.2.101`)
- **LAN static subnet** to your desired subnet (example: `255.255.255.0`)

:::note
If the RCP does not have an IP address in the same range as the camera, add one by following the [IP configuration guide](/docs/guides/networking/ip-configuration).

In this example, the camera IP is `192.168.2.101/24` and the RCP IP is `192.168.2.10/24`.
:::

## Activate SSCP on the camera

Point the camera's SSCP settings toward your RCP so the Amira initiates the connection.

<img src="/img/Integrations/camera/ARRI/arri-sscp.png" width="500" alt="ARRI SSCP configuration" />

Configure the following:
- **SSCP device IP** to the RCP IP (example: `192.168.2.10`)
- **SSCP device port** to your desired port (example: `7800`)
- **Multicam** checked (activates the IP and port parameters above)

:::note
With the ARRI Amira, the camera connects to the RCP (not the other way around).

To control multiple cameras from a single RCP, assign a different port to each camera and match those ports in the RCP configuration.
:::

## Configure the RCP

Add and configure the camera in the RCP interface:

1. Click **+** in the camera block. A new panel appears on the right.
2. In **General**, set a number and a name for the camera.
3. Select **ARRI** as the brand and **Amira** as the model.
4. Enter the **IP** of your camera (optional — the camera connects to the RCP and the source IP is not checked).
5. Enter the **port** you configured on the camera (required).

<img src="/img/Integrations/camera/ARRI/arri-setup.png" width="300" alt="ARRI SSCP RCP configuration" />

When the connection succeeds, the camera block turns green:

<img src="/img/Integrations/camera/ARRI/arri-block.png" width="300" alt="ARRI SSCP connected status" />

## Activate shading output

By default, shading adjustments are active but not visible on the viewfinder or SDI outputs. Follow these steps to enable shading display.

1. In the **HOME** menu, click **LOOK**:

<img src="/img/Integrations/camera/ARRI/arri-look1.png" width="500" alt="ARRI LOOK menu" />

2. Click **LOOK PARAM**:

<img src="/img/Integrations/camera/ARRI/arri-look2.png" width="500" alt="ARRI LOOK PARAM" />

3. Click **DUPLICATE**:

<img src="/img/Integrations/camera/ARRI/arri-look3.png" width="500" alt="ARRI LOOK DUPLICATE" />

4. Enter a look name (for example: `ARRI 709aaa`) and click **SAVE**:

<img src="/img/Integrations/camera/ARRI/arri-look4.png" width="500" alt="ARRI save look" />

5. In the **LOOK** menu, click **LOOK CONFIG**:

<img src="/img/Integrations/camera/ARRI/arri-sdilook.png" width="500" alt="ARRI SDI look configuration" />

6. Verify that both settings point to the look you created:
   - **EVF/Mon proc** set to your look (example: `ARRI 709aaa`)
   - **SDI 1 processing** set to your look (example: `ARRI 709aaa`)
