---
id: serial-camera
title: "Advanced serial camera configuration"
sidebar_label: "Serial camera config"
description: "Advanced serial camera configuration for Cyanview. Protocol settings, baud rates, and troubleshooting serial connections."
keywords: [serial, advanced, protocol, baud rate, configuration]
slug: /guides/advanced/serial-camera
---

Advanced mode exposes low-level serial parameters for cameras like Dreamchip and Marshall — useful when the default settings don't match your setup.

## Toggle advanced mode

![Advanced mode toggle](/img/Configuration/advanced/advanced-toggle.png)

1. In the [RCP Configuration UI](/docs/reference/manuals/rcp/web-ui), click your camera.
2. In the top-right corner, click `...`.
3. Click the popup message to toggle advanced mode. The current status is shown — for example, `OFF`.

## Advanced parameters

In the `Camera Head` section, you'll find the following settings:

![Advanced serial parameters](/img/Configuration/advanced/advanced-parameters.png)

- **Speed** — changes the baud rate between the CI0/RIO and your camera.
- **Bidirectional** — when unchecked, communication is one-way: the RCP sends data but expects no response. Useful for half-duplex HF modems.
- **Delay** — available only when `Bidirectional` is active. Adds an extra timeout delay, helpful for full-duplex HF modems that introduce latency in the Rx/Tx switch.
