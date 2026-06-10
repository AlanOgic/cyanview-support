---
id: rio-manual
title: "RIO manual"
sidebar_label: "RIO manual"
description: "Complete manual for the Cyanview RIO. Licenses (RIO +LAN and RIO +WAN), power supply, wiring, setup, and RCP pairing."
keywords: [RIO, RIO +WAN, RIO +LAN, manual, installation, gateway, configuration, cloud, REMI]
slug: /reference/manuals/rio-manual
---

Pronounce [rɪəʊ]. The RIO is a standalone camera control device. It combines:

- The serial ports, display, and buttons of a CI0
- The camera protocols and configuration web UI of an RCP

Use it for:

- Lens control
- USB cameras, such as mirrorless cameras
- WiFi LAN control
- Polecam, gimbal, and remote camera workflows

![RIO device](/img/Manual/RIO/rio.jpeg)

The RIO runs the camera configuration by itself: if the link to the RCP is unplugged or unstable, the RIO keeps control of the camera and lens.

## Licenses

The hardware is the same for RIO +LAN and RIO +WAN — the license defines the available REMI features.

- **RIO +WAN** — unlimited cameras, REMI access through the cloud.
- **RIO +LAN** (formerly RIO Live) — limited to two cameras, REMI access only on the local network.

:::tip
You can upgrade a RIO +LAN to a RIO +WAN at any time — it is a one-time license fee, no hardware swap needed.
:::

## Power supply

The RIO is not PoE. Power it using 12V DC via:

- D-Tap (from a camera or battery)
- External PSU

The DC input accepts 10V to 24V. The RIO passes the input voltage directly to the camera, so if you power from a battery, confirm that the camera supports the higher voltage. Camera consumption must not exceed 12W per port for thermal reasons.

## Wiring

The RIO and RCP communicate over IP.

![RIO wiring diagram](/img/Manual/RIO/rio-wiring.png)

## Setup

Camera configuration on the RIO follows the same process as the RCP. Find your device's IP address using [this guide](/docs/guides/networking/ip-configuration#find-your-devices-ip), then follow the [RCP web UI](/docs/reference/manuals/rcp/web-ui) documentation. Any integration guide on this site applies equally to RCP and RIO.

## RCP link

To set up the RIO with an RCP:

1. Configure the camera on your RIO web UI.
2. Set a tag/group on your RIO.
3. Set the same tag/group on your RCP.
4. Import the camera from your RIO into your RCP.

Your RCP now has full control of the camera. See the [REMI pairing guide](/docs/guides/networking/remi) for details on how the RCP and RIO pair and work together.

## Dimensions

Download the [PDF](/img/Manual/RIO/CY-RIO-assembly.pdf) or [STEP](/img/Manual/RIO/CY-RIO-assembly.step) file for mechanical drawings.

[![RIO assembly drawing](/img/Manual/RIO/CY-RIO-assembly.png)](/img/Manual/RIO/CY-RIO-assembly.pdf)
