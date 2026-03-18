---
id: arri-sscp
title: "ARRI SSCP integration"
sidebar_label: "ARRI SSCP"
description: "Control ARRI cameras over the SSCP protocol with Cyanview. Full remote paint and lens control for ARRI cinema cameras."
keywords: [ARRI, SSCP, cinema camera, remote control, paint]
slug: /integrations/cameras/arri/arri-sscp
---

# ARRI SSCP

Compatible model: ARRI Amira

## Setup

### Camera IP

<img src="/img/Integrations/camera/ARRI/arri-IP.png" width="500"/>

Setup:
* **LAN IP mode** to `static`
* **LAN static IP** to desired cam IP (here `192.168.2.101`)
* **LAN static subnet** to desired cam subnet (here `255.255.255.0`)

:::note
If the RCP doesn't have an IP address in the same range as the camera IP, you should add one in the LAN section by following this [guide](/docs/guides/networking/ip-configuration).

In this setup, my camera IP is `192.168.2.101/24` and my RCP IP is `192.168.2.10/24`
:::

### Activate SSCP

<img src="/img/Integrations/camera/ARRI/arri-sscp.png" width="500"/>

Setup:
* **SSCP device IP** to the RCP IP (here `192.168.2.10`)
* **SSCP device port** to desired port (here `7800`)
* **Multicam** checked (to activate the previous parameters)

:::note
With ARRI Amira, this is the camera that connects to the RCP.

If you want ton control multiple camera from a single RCP, ensure they all have different ports and adapt the configuration in your RCP to distinguish them properly.
:::

### RCP configuration

* Click on the `+` in the camera block, a new panel will appear on the right
* In `General` Configure a Number and a Name
* Select `ARRI` for the brand and `Amira` as the model
* Enter the `IP` of your camera (optional as the camera connects to the RCP, source IP is not checked)
* Enter the `port` configured in your camera (mandatory)


<img src="/img/Integrations/camera/ARRI/arri-setup.png" width="300"/>


If everything went as expected, it should go green:


<img src="/img/Integrations/camera/ARRI/arri-block.png" width="300"/>

### Activate shadding

By default the shading, even if active is not display (neither on viewfinder or SDI outputs), you need to activate it.

In the `HOME` menu, click on `LOOK`:

<img src="/img/Integrations/camera/ARRI/arri-look1.png" width="500"/>

Click on `LOOK PARAM`:

<img src="/img/Integrations/camera/ARRI/arri-look2.png" width="500"/>

Click on `DUPLICATE`:

<img src="/img/Integrations/camera/ARRI/arri-look3.png" width="500"/>

Enter a look name, here for example: `ARRI 709aaa` and then click on `SAVE`:

<img src="/img/Integrations/camera/ARRI/arri-look4.png" width="500"/>

Then in `LOOK` menu, click on `LOOK CONFIG`:

<img src="/img/Integrations/camera/ARRI/arri-sdilook.png" width="500"/>

Ensure:
* `EVF/Mon proc` is setup to the `LOOK` created above (`ARRI 709aaa` in our case)
* `SDI 1 processing` is setup to the `LOOK` created above (`ARRI 709aaa` in our case)
