---
id: sony-mirrorless-gimbal
title: "Sony mirrorless on gimbal workflow"
sidebar_label: "Sony gimbal"
description: "Control Sony mirrorless cameras mounted on gimbals with Cyanview for dynamic cinematographic broadcast shots."
keywords: [Sony, mirrorless, gimbal, cinema, dynamic]
slug: /guides/workflows/sony-mirrorless-gimbal
---

This guide walks through the building blocks of a typical Sony mirrorless gimbal setup. It highlights the workflow and key components — your rigging and camera choice are up to you.

## Wiring

![Wiring diagram for Cyanview FX3 control over 4G](/img/Workflows/FX3-gimbal-wiring.png)

A typical setup includes:
- A Sony mirrorless camera controlled over USB
- Video transmission via RF
- Camera control and shading over 4G using RIO
- RCP controlling the camera over 4G, plus a VP4 for advanced shading and matching

## Camera choice

The RIO connects to the camera via USB-C. See the [Sony mirrorless control guide](/docs/integrations/cameras/sony/sony-alpha) for supported models.

The FX3 is the most popular choice on the field: compact, active cooling, no viewfinder, and full-size 10-bit HDMI. The FX30 is a great alternative (lower cost, S35 sensor). The A7S III is the second most common. Control is identical across all models — the choice comes down to size, weight, features, and budget.

Note that Sony mirrorless cameras are controlled via USB-C only. Wi-Fi and multi-port control are not supported.

## Video transmission

Common RF solutions include:
- Vislink — solid, with dedicated reserved bands
- Hollyland, DJI, Teradek — easy to set up and budget-friendly

For more flexibility and coverage, you can also use a 4G encoder such as Aviwest or LiveU. Video transmission is a matter of compromise and budget, and it's completely independent of camera control.

## Camera control

The RIO connects to the camera via USB-C and to the internet via 4G:
- **4G USB stick** — compact, easy to set up and rig, self-powered, affordable
- **4G/5G Ethernet router** — more reliable with external antennas (e.g., Teltonika RUT240, Netgear Nighthawk)

:::note
Camera shading sends only a few bytes — far less than any webpage reload. So even when 4G is unreliable on your phone, it's often perfectly usable for shading. That said, you don't own the infrastructure, so quality of service is outside your control. Conditions can vary between venues, and between rehearsal and live. If it worked during a live test at a given venue, it will consistently work there.
:::

## Remote shading with RCP

The RCP connects to the internet to reach the REMI cloud (hosted on AWS) and control the RIO and camera. Global latency depends on your internet connection but is typically 30–60 ms, which is acceptable for shading.

## Combining camera control with a color corrector (VP4)

Sony mirrorless cameras offer limited control (exposure, white balance, and REC). Most operators combine camera control with a color corrector to match the mirrorless against the main cameras.

Basic black level can be added with a VPro8, AJA FS-HDR, or similar. For full broadcast-grade matching — multi-matrix, detail, coring — use the [VP4](/docs/reference/manuals/vp4-manual).

On the RCP, you get a single camera entry that combines camera control and VP4 control:
- Touching exposure controls the camera
- Adjusting black or multi-matrix controls the VP4

## Tally

See the [tally overview guide](/docs/guides/tally/tally) for full details.

Tally input can be IP (ATEM, TSL, etc.) or GPIO. Because this kit typically travels with a Steadicam operator, most users prefer GPI input — no IP configuration, easy to test with a contact closure.

Tally output normally propagates through the camera protocol. Since mirrorless cameras have no built-in tally, use an external [tally box](/docs/reference/manuals/tally-light-manual) connected to the RIO.

## Setup steps

1. Configure your 4G dongles: buy a SIM, set it up, and confirm your laptop has internet through it. Follow the [cellular guide](/docs/guides/networking/cellular).
2. Set up your RIO and RCP with REMI/cloud. Follow the [REMI guide](/docs/guides/networking/remi).
3. Configure your camera on RIO and RCP. Follow the [Sony Alpha guide](/docs/integrations/cameras/sony/sony-alpha).
4. Import your camera from the RIO into your RCP. Follow the [REMI guide](/docs/guides/networking/remi).
5. Configure the VP4 format and genlock settings. Follow the [VP4 manual](/docs/reference/manuals/vp4-manual).
6. Add the VP4 channel to your imported camera on the RCP.

## From the field

### FX30 with Fujinon 18-55 mm

Andy from 4ACrew with his Rocky gear:
- FX30 camera
- Fujinon 18-55 mm lens
- RIO with ZTE 4G USB stick
- VP4
- RCP

![Cyanview FX30 with Fujinon 18-55 mm, RIO 4G control](/img/Workflows/FX30-fujinon-18-55.png)

### FX3 with Sony FE 16-35 mm F2.8 GM

Fabry (freelance) with his Cyanview kit:
- FX3 camera
- Sony FE 16-35 mm F2.8 GM lens
- RIO with Huawei 4G USB stick
- VP4
- RCP

![Cyanview FX3 with Sony FE 16-35 mm F2.8 GM, RIO 4G control](/img/Workflows/FX3-Sony-Emount.jpeg)

### FX3 with RIO 4G using RUT240

- FX3 camera
- Sony FE PZ 16-35 mm F4 G lens
- RIO with Teltonika RUT240 4G router[^1]
- Cyanview tally light[^2]
- DJI RS3 Pro gimbal
- CV-HD Pro800 for video transmission
- VP4
- RCP

![Cyanview FX3, DJI RS3, RIO with RUT240 4G router](/img/Workflows/FX3-DJIRS3-RIO-RUT240.png)

[^1]: External antenna improves connection stability.

[^2]: Tally input from ATEM via RCP; tally output via tally module on RIO port 1.
