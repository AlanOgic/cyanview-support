---
id: installation
title: "RCP installation guide"
sidebar_label: "Installation"
description: "Install and mount your Cyanview RCP. Physical setup, power connections, and initial configuration steps."
keywords: [RCP, installation, mounting, power, PoE, setup]
slug: /reference/manuals/rcp/installation
---

Use this guide to mount your RCP, connect power, and get it ready for configuration.

## Mounting the RCP

### RCP-J dimensions

Download the [PDF](/img/Manual/RCP/CY-RCP-J-assembly.pdf) and [STEP](/img/Manual/RCP/CY-RCP-J-assembly.step) mechanical files.

[![RCP-J assembly drawing](/img/Manual/RCP/CY-RCP-J-assembly.png)](/img/Manual/RCP/CY-RCP-J-assembly.pdf)

### RCP dimensions

Download the [PDF](/img/Manual/RCP/CY-RCP-assembly.pdf) and [STEP](/img/Manual/RCP/CY-RCP-assembly.step) mechanical files.

[![RCP assembly drawing](/img/Manual/RCP/CY-RCP-assembly.png)](/img/Manual/RCP/CY-RCP-assembly.pdf)

### Mounting frame for the short RCP version

A **Mounting Frame** (frame + cover) is available to bring the short RCP version up to standard RCP panel dimensions.

Download the [PDF](/img/Manual/RCP/CY-RCP-assembly-frame.pdf) and [STEP](/img/Manual/RCP/CY-RCP-assembly-frame.step) files.

[![RCP frame assembly drawing](/img/Manual/RCP/CY-RCP-assembly-frame.png)](/img/Manual/RCP/CY-RCP-assembly-frame.pdf)

You can align the RCP at the bottom of the frame (option A) or at the top (option B).

![RCP frame mounting options A and B](/img/productGfx/RCP/Cyanview-RCP-frame-mounting-options@2x-8.png)

## Powering the RCP

The RCP accepts power from **PoE** or an external **12V supply**:

- PoE 802.3af
- DC input: +12V 200mA (acceptable range: 9V–24V)

The DC power connector is a [Switchcraft 762K](http://www.switchcraft.com/Product.aspx?ID=7007) or compatible 5.5×2.1mm barrel connector.

![Switchcraft power connector](/img/3Parties/cyanview-support-manual-switchcraft-power-connector.png)

![Switchcraft 762K pinout](/img/3Parties/Switchraft-762K-pinout@2x-8.png)

## RCP configuration

Configure and manage your RCP through the **[Configuration Web UI](/docs/reference/manuals/rcp/web-ui)**.

## RCP update

Keep your RCP on the latest firmware. See the [update guide](/docs/reference/product-update) for instructions.

## Troubleshooting

### Force upgrade

Use this procedure if the RCP is stuck and will not update normally:

1. Unplug power (remove the RJ45 cable if using PoE, or disconnect the 12V supply).
2. Press and hold the **Lock/Power** button (top left).
3. Reconnect power while keeping the button held. Release once the loading screen appears.
4. Wait a few minutes for the upgrade to complete. The RCP will reboot and reload the camera list and values.

:::tip
If the RCP does not show a loading screen after reconnecting power, repeat from step 1. The button must be held before power is restored.
:::
