---
id: rio-live-manual
title: "RIO +LAN manual"
sidebar_label: "RIO +LAN manual"
description: "Manual for the Cyanview RIO +LAN (formerly RIO Live). Local production companion for up to 2 cameras."
keywords: [RIO +LAN, RIO Live, manual, local, LAN only]
slug: /reference/manuals/rio-live-manual
---

Pronounce [rɪəʊ lɪv]. The RIO +LAN combines the serial ports, display, and buttons of a CI0 with the full protocol stack and web UI of an RCP. It is a standalone device for lens control, USB cameras (mirrorless, etc.), WiFi LAN control, and Polecam setups — linkable to an RCP for remote shading.

![RIO +LAN device](/img/Manual/RIO/rio-live.jpeg)

Unlike the CI0 (a slave device), the RIO +LAN operates independently: unplug the RCP and the camera and lens remain controlled. The RCP–RIO +LAN link is also more robust on unreliable networks like WiFi, and configuration works differently — you configure on the RIO web UI and then import into the RCP.

## Power supply

The RIO +LAN is not PoE. Power it using 12V DC via:

- D-Tap (from camera, battery, etc.)
- External PSU

The DC input accepts 10V to 24V. The input voltage is passed directly to the camera, so if you power from a battery, confirm that the camera supports the higher voltage. Camera consumption must not exceed 12W per port for thermal reasons.

## Wiring

The RIO and RCP communicate over IP.

![RIO +LAN wiring diagram](/img/Manual/RIO/rio-live-wiring.png)

## Setup

Camera configuration on the RIO +LAN follows the same process as the RCP. Find your device's IP address using [this guide](/docs/guides/networking/ip-configuration#find-your-devices-ip), then follow the [RCP web UI](/docs/reference/manuals/rcp/web-ui) documentation. Any integration guide on this site applies equally to RCP and RIO.

## RCP link

To set up the RIO +LAN with an RCP:

1. Configure the camera on your RIO web UI.
2. Set a tag/group on your RIO.
3. Set the same tag/group on your RCP.
4. Import the camera from your RIO into your RCP.

Your RCP now has full control of the camera. See the [REMI pairing guide](/docs/guides/networking/remi) for more details on how RCP and RIO +LAN work together.

## Dimensions

Download the [PDF](/img/Manual/RIO/CY-RIO-assembly.pdf) or [STEP](/img/Manual/RIO/CY-RIO-assembly.step) file for mechanical drawings.

[![RIO assembly drawing](/img/Manual/RIO/CY-RIO-assembly.png)](/img/Manual/RIO/CY-RIO-assembly.pdf)
