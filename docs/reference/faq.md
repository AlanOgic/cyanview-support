---
id: faq
title: "Frequently asked questions"
sidebar_label: "FAQ"
description: "Answers to common questions about Cyanview products. Camera compatibility, networking, tally, licensing, and troubleshooting."
keywords: [FAQ, questions, answers, help, common issues]
slug: /reference/faq
---

## Can the CIO power a camera from PoE only?

Yes, the CI0 can typically power and control one mini-camera on each port. The CI0 is not meant to power larger camcorders that typically run on batteries or supply and in this case the control cable will not include power. For some camcorders like Sony ENG cameras, the CI0 will be powered from the camera in which case power doesn't have to be provided by PoE or external (the right cable is necessary for this). You can find more information on power here in the [CI0 Manual](/docs/Manuals/CI0/CI0Manual).

## How many CIO's can one RCP control?

There's no limitation. You can use as much CI0 as needed.

## In multi RCP and multi CIO on one network, how is the addressing/numbering done, can any CIO be controlled from any RCP?

Only **one** RCP can control a CI0 and the camera(s) connected on it. The pairing happens once the CI0 is used in the configuration of any of the RCP in which case it becomes unavailable to the other RCPs until removed from the configuration.
If one camera has to be controlled from multiple RCPs, we have multi-operator workflows using the CY-GWY or upcoming options using a distributed architecture for remote production.


## I would like to set my own IP addresses, is this possible?

The RCP, GWY and RIO can be configured with multiple IP addresses and the default route for internet access can be changed as from releases 21. Typically multiple IPs are useful to reach a range of IP cameras (typically PTZ), a technical network, change the internet access from DHCP to static or add special routes for VPNs or vlans. See [IP Configuration](/docs/Configuration/ConfIP).
You can't remove the factory IP though as it is used to control devices on the local network like a CI0. The CI0 IP can't be changed at this stage, we have plans to allow that in the future but in all cases a CI0 is not the right device to go over latency networks such as VPNs. A RIO is typically used in these cases.


## Is there documentation on the GPIO-8 cable to make it by ourselves?

The GPIO-8 is an active cable with electronic components and IDs for auto-detection.


## Can different camera models with different control protocols be controlled by the same RCP system?

Yes, all protocols we support can be mixed on a single controller, even the CI0 can use different protocols on each port.


## What is discovery?

Cyanview device have an automatic discovery functionality.

RCP will discover Cyanview devices connected to the network.

When connecting a new Cyanview device to the network, it is automatically discovered by the already present RCP.

The discovery page displays the list of the discovered devices.

This allows easy network configurations verification.

## What is RCP dashboard?

The *dashboard* page is an extended monitoring page.

URL: `[Cy-RCP IP/DNS name]:5000`

From the *dashboard* page, you can:

- Verify the RCP health (memory, temperature, etc...).
- Execute ping command.
- Use the MQTT client interface.

## Is there a possibility to connect a separate Tally Light to the CI0?

Yes, the easiest way is to connect an LED to the 12V output of the second port. There are some other pins that can be used for GPIO and which could drive external electronics to control a tally light.

