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

## Networking the RCP

The RCP Ethernet port is **10/100 Mbit/s** (Fast Ethernet). It also provides **PoE (802.3af)** power over the RJ45 connection.

:::warning
If the RCP does not link up when connected to a switch or media converter, verify that the device supports **10/100 Mbit/s**. Some equipment only supports **1 Gbit/s** and will not establish a link with a 10/100 port. This is especially common with certain media converters.
:::

## RCP configuration

Configure and manage your RCP through the **[Configuration Web UI](/docs/reference/manuals/rcp/web-ui)**.

## RCP update

Keep your RCP on the latest firmware. See the [update guide](/docs/reference/product-update) for instructions.

## Troubleshooting

### RCP not detected on the network

1. If the touchscreen stays on the **Connecting...** screen, this typically indicates a configuration issue rather than a network problem. A common cause is the RCP entry being removed from the Controllers section in the Web UI. See [Configuration Web UI: Controllers](/docs/reference/manuals/rcp/web-ui#configuration) and add the RCP entry back (or reset the configuration to restore the default controller entries).

   ![RCP entry in Controllers section](/img/Configuration/configuration-tab/rcp-entry-in-controllers.png)

2. If the touchscreen displays the camera list and live values after booting, internal networking is working via the factory `10.192.0.0/16` network. You should be able to ping the RCP factory IP (`10.192.X.Y`, derived from the serial number) from a computer with a static IP in the same range. See [IP primer](/docs/reference/troubleshooting/ip-primer#default-ip-configuration-of-cyanview-devices-except-ci0).

   If you cannot ping the RCP in this scenario, the Ethernet interface to the internal switch may be damaged. Contact support for an RMA — see [RMA procedure](/docs/reference/rma-procedure).

   As a temporary workaround, plug a USB-Ethernet dongle into the RCP. It will be configured as **DHCP** by default, so on a DHCP-enabled network you can find its IP address in your DHCP server leases. See [USB dongles](/docs/guides/networking/ip-configuration#usb-dongles).

### Test mode (hardware check)

Use this procedure to enter the hardware check menu and verify each physical button and encoder:

1. Press **LOCK** to open the **POWER** menu (or navigate to **MENU > SYSTEM > POWER**).
2. Press **SCREEN OFF**. The panel switches off, with only the **LOCK** button remaining lit.
3. Press and hold **MENU**, then press **LOCK**. The hardware check menu opens.

In this menu you can test all encoders, buttons, and the touchscreen.

To exit, press the **LOCK** button and release it after the beep stops.

### Force upgrade

Use this procedure if the RCP is stuck and will not update normally:

1. Unplug power (remove the RJ45 cable if using PoE, or disconnect the 12V supply).
2. Press and hold the **Lock/Power** button (top left).
3. Reconnect power while keeping the button held. Release once the loading screen appears.
4. Wait a few minutes for the upgrade to complete. The RCP will reboot and reload the camera list and values.

:::tip
If the RCP does not show a loading screen after reconnecting power, repeat from step 1. The button must be held before power is restored.
:::
