---
id: faq
title: "Frequently asked questions"
sidebar_label: "FAQ"
description: "Answers to common questions about Cyanview products. Camera compatibility, networking, tally, licensing, and troubleshooting."
keywords: [FAQ, questions, answers, help, common issues]
slug: /reference/faq
---

Common questions about CI0 power, networking, IP configuration, device discovery, and tally. If you don't find what you need here, email **support@cyanview.com**.

## Can the CI0 power a camera from PoE only?

Yes. The CI0 can typically power and control one mini-camera on each port.

It is not designed to power larger camcorders that run on batteries or an external supply — in those cases, the control cable carries no power. With some camcorders (such as Sony ENG cameras), the camera powers the CI0 instead, so neither PoE nor an external supply is required. The correct cable is essential for this to work.

For full power details, see the [CI0 manual](/docs/reference/manuals/ci0/ci0-manual).

## How many CI0s can one RCP control?

There is no limit. You can connect as many CI0 units as your setup requires.

## In a multi-RCP, multi-CI0 network, can any CI0 be controlled from any RCP?

No. Only **one** RCP can control a given CI0 and its connected cameras. Once you add a CI0 to an RCP configuration, it becomes unavailable to all other RCPs until you remove it from that configuration.

If you need a single camera accessible from multiple RCPs, use the CY-GWY multi-operator workflow or the upcoming distributed architecture for remote production.

## Can I set my own IP addresses?

Yes, from release 21 onward. The RCP, GWY, and RIO each support multiple IP addresses, and you can change the default route for internet access. Common use cases include:

- Reaching a range of IP cameras (typically PTZ)
- Connecting to a technical network
- Switching from DHCP to a static address
- Adding routes for VPNs or VLANs

See [IP configuration](/docs/guides/networking/ip-configuration) for step-by-step instructions.

:::caution
You cannot remove the factory IP address — it is required to control local devices such as the CI0. The CI0 IP address is not user-configurable. Because the CI0 is not suited to high-latency networks (VPNs, WAN links), use a RIO in those scenarios instead.
:::

## Is there documentation on the GPIO-8 cable so I can build my own?

No. The GPIO-8 is an active cable with embedded electronic components and ID circuits for auto-detection. It cannot be replicated with a standard cable.

## Can I mix different camera models and control protocols on one RCP?

Yes. The RCP supports all Cyanview-compatible protocols simultaneously. The CI0 itself can run a different protocol on each port, so you can control a mixed fleet from a single controller.

## What is device discovery?

Cyanview devices support automatic discovery. When you connect a new Cyanview device to the network, any RCP already on the same network detects it automatically.

The **Discovery** page in the RCP interface lists all discovered devices, making it easy to verify your network configuration at a glance.

:::tip
Use the discovery page as a quick sanity check whenever you add or move a device on the network.
:::

## What is the RCP dashboard?

The dashboard is an extended monitoring page for the RCP. Access it at:

```
http://[RCP-IP-or-hostname]:5000
```

From the dashboard you can:

- Check RCP health — memory usage, temperature, and more
- Run a ping to test network reachability
- Use the built-in MQTT client interface

## Can I connect an external tally light to the CI0?

Yes. The simplest approach is to wire an LED to the 12 V output on the second port. Additional GPIO pins are available on the connector and can drive external electronics for more advanced tally light circuits.
