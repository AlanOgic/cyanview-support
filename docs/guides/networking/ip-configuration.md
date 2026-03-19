---
id: ip-configuration
title: "IP configuration guide"
sidebar_label: "IP configuration"
description: "Configure IP addresses on Cyanview devices. Find device IPs, set up LAN and WAN connections, and manage network routes."
keywords: [IP, network, LAN, WAN, configuration]
slug: /guides/networking/ip-configuration
---

All Cyanview device communication relies on IP networking.

![IP configuration connections requirement diagram](/img/diagrams/IP-Configuration-Basics-connections-requirement@2x-8.png)

## Find your device's IP

There are several ways to find your device's network IP.

**Derive from the serial number**

The default IP and subnet mask follow this pattern: **IP** = `10.192.x.y`, **subnet mask** = `255.255.0.0` (/16), where **x** and **y** are the last two numbers of the serial number.

![RCP serial number label location](/img/productGfx/RCP/cyanview-support-faq-RCP-Serial-Number-sn@2x-8.png)

Example:
- **Serial number:** `CY-RCP-25-250`
- **IP:** `10.192.25.250`
- **Subnet mask:** `255.255.0.0`
- **mDNS:** `http://cy-rcp-25-250.local`[^1]

[^1]: Requires a DHCP server that supports mDNS (multicast DNS). If Bonjour works, mDNS works.

## LAN configuration

![Diagram showing RCP adding an IP to communicate with an IP camera or router](/img/diagrams/IP-Configuration-Add-IP-To-Connect-To-Ressources@2x-8.png)

Use case: you have an RCP and an IP camera or router on the same network and need them to communicate without changing the camera or router IP.

1. In the `Configuration` tab, click `IP Connections`:

   ![IP Connections block in the Configuration tab](/img/Configuration/Network/Network-IP-block.png)

2. In the right panel, click `+` in the `LAN connections` block.
3. Select `LAN1`.
4. Enter a new IP and subnet mask for your RCP.

   ![LAN configuration form showing IP and mask fields (non-persistent)](/img/Configuration/Network/Network-RCP-LAN-non-persist.png)

Your RCP is now:
- Reachable at `10.10.115.2`.
- Able to reach all devices on `10.10.115.0/24` (from `10.10.115.1` to `10.10.115.254`).
- Able to communicate with the PTZ at `10.10.115.1`.

## LAN web UI access

![Diagram showing RCP adding IP to join a corporate subnet for web UI access](/img/diagrams/IP-Configuration-Add-IP-To-RCP-To-Join-Subnet@2x-8.png)

Use case: you want to access the RCP web UI from a corporate network without using the factory IP.

1. In the `Configuration` tab, click `IP Connections`.
2. In the right panel, click `+` in the `LAN connections` block.
3. Select `LAN1`.
4. Enter a new IP and subnet mask for your RCP.
5. Tick `persist`.

   ![LAN configuration form showing corporate IP with persist option enabled](/img/Configuration/Network/Network-RCP-corporate.png)

Your RCP is now:
- Reachable at `172.16.0.115`.
- Able to reach all devices on `172.16.0.0/24`.
- Accessible from your computer at `172.16.0.114`.
- Configured with a **persistent** IP — this address survives configuration resets and system updates.

:::note
Setting a static IP on both your RCP and computer makes web UI access predictable. Follow [this guide](https://kb.netgear.com/27476/How-do-I-set-a-static-IP-address-in-Windows) for Windows and Mac.
:::

## WAN setup

By default, all Cyanview devices connect to the internet via DHCP. If your network requires a static WAN configuration, follow these steps.

1. In the `Configuration` tab, click `IP Connections`.
2. In the right panel, click `+` in the `WAN connections` block.
3. Select `LAN1`.
4. Enter the IP, mask, gateway, and a DNS server (e.g., Google's `8.8.8.8`).
5. Tick `persist`.

   ![WAN configuration form showing IP, mask, gateway, and DNS fields](/img/Configuration/Network/Network-WAN-static.png)

Your RCP is now:
- Reachable at `192.168.8.100`.
- Connected to the internet through the router at `192.168.8.1`.
- Using DNS server `8.8.8.8`.
- Configured with a **persistent** IP.

## Route setup

Use case: you need to reach a specific network through a specific router.

1. In the `Configuration` tab, click `IP Connections`.
2. In the right panel, click `+` in the `Routes` block.
3. Select `LAN1`.
4. Enter the gateway, destination network, and network mask. The gateway must already be reachable by the RCP.

   ![Route configuration form showing gateway, destination network, and mask fields](/img/Configuration/Network/Network-Route.png)

Your RCP can now reach network `192.168.9.1/24`, with traffic routed through `192.168.8.1`.

## USB dongles

Cyanview supports a wide range of USB Ethernet dongles, allowing you to connect to physically separate networks. Dongles appear alongside `LAN1` in the interface dropdown when connected.

![USB Ethernet dongle interface appearing in the LAN dropdown](/img/Configuration/Network/Network-USB.png)

## Network overview

Open the `Diagnostics` tab for an overview of all IP addresses across all interfaces, including DHCP-assigned addresses.

![Diagnostics tab navigation](/img/Configuration/Network/Network-diagnostics-tab.png)

![Diagnostics panel showing all IP addresses per interface](/img/Configuration/Network/Network-diagnostics.png)

In this example, the RCP has:
- Factory IP: `10.192.18.4` (from serial number `cy-rcp-18-4`)
- DHCP-assigned IP: `192.168.88.30`

## Internet check

Open the `Admin` tab and wait a few seconds for the connectivity check to complete (up to a minute if there are network issues). If all items in the `Connectivity check` block are green, you have internet access.

![Admin tab navigation](/img/Configuration/Network/Network-admin-tab.png)

![Connectivity check block showing all green indicators](/img/Configuration/Network/Network-connectivity-check.png)
