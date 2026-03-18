---
id: ip-configuration
title: IP configuration
sidebar_label: IP configuration
description: "Configure IP addresses on your Cyanview devices. Find device IPs from serial numbers, set up LAN and WAN connections, and add custom routes."
keywords: [cyanview, IP configuration, network, LAN, WAN, serial number, mDNS]
slug: /getting-started/ip-configuration
---

# IP configuration

All Cyanview devices communicate over IP networks. This guide walks you through finding your device on the network and configuring IP addresses for your production environment.

![IP configuration basics](/img/diagrams/IP-Configuration-Basics-connections-requirement@2x-8.png)

## Find your device's IP {#find-devices-ip}

Every Cyanview device ships with a default IP address derived from its serial number.

The pattern is: **10.192.x.y** with subnet mask **255.255.0.0** (/16), where **x** and **y** are the last two numbers of the serial number.

![Serial number example](/img/productGfx/RCP/cyanview-support-faq-RCP-Serial-Number-sn@2x-8.png)

**Example:** Serial number `CY-RCP-25-250`
- **IP:** 10.192.25.250
- **Subnet mask:** 255.255.0.0
- **mDNS:** http://cy-rcp-25-250.local (requires a DHCP server with mDNS/Bonjour support)

## LAN configuration

![LAN configuration diagram](/img/diagrams/IP-Configuration-Add-IP-To-Connect-To-Ressources@2x-8.png)

Add a LAN IP address when you need your device to communicate with cameras, routers, or other gear on a specific subnet — without changing their existing IP addresses.

1. Open the **Configuration** tab and select **IP Connections**
2. In the right panel, click **+** in the **LAN connections** block
3. Select **LAN1**
4. Enter the IP address and subnet mask

![LAN IP configuration](/img/Configuration/Network/Network-IP-block.png)

![LAN connection settings](/img/Configuration/Network/Network-RCP-LAN-non-persist.png)

Your device is now reachable on the new IP and can communicate with all devices on that subnet.

## LAN web UI access

![Corporate LAN access](/img/diagrams/IP-Configuration-Add-IP-To-RCP-To-Join-Subnet@2x-8.png)

To access the device's web UI from your corporate network:

1. Open **Configuration** > **IP Connections**
2. Click **+** in the **LAN connections** block
3. Select **LAN1** and enter your corporate network IP and mask
4. Click **persist** to keep this IP across reboots and firmware updates

![Persistent corporate IP](/img/Configuration/Network/Network-RCP-corporate.png)

:::tip
Set up a static IP on both your RCP and your computer for reliable web UI access. Follow [this guide](https://kb.netgear.com/27476/How-do-I-set-a-static-IP-address-in-Windows) for Windows and macOS.
:::

## WAN setup

By default, all devices connect to the internet using DHCP. To use a static IP instead:

1. Open **Configuration** > **IP Connections**
2. Click **+** in the **WAN connections** block
3. Enter the IP address, subnet mask, gateway, and DNS server
4. Click **persist**

![WAN static configuration](/img/Configuration/Network/Network-WAN-static.png)

You can use `8.8.8.8` (Google DNS) as a DNS server if you do not have a local one.

## Route setup

Add custom routes when you need to reach a specific network through a specific gateway.

1. Open **Configuration** > **IP Connections**
2. Click **+** in the **Routes** block
3. Enter the gateway, destination network, and subnet mask

![Route configuration](/img/Configuration/Network/Network-Route.png)

## USB Ethernet dongles

Cyanview devices support USB-to-Ethernet adapters, giving you physically separated networks. USB adapters appear alongside **LAN1** in the interface dropdown.

![USB dongle in dropdown](/img/Configuration/Network/Network-USB.png)

## Network overview

Open the **Diagnostics** tab to see all IP addresses on all interfaces, including DHCP-assigned addresses.

![Diagnostics tab](/img/Configuration/Network/Network-diagnostics-tab.png)

![Network overview](/img/Configuration/Network/Network-diagnostics.png)

## Internet connectivity check

Open the **Admin** tab and check the **Connectivity check** block. All indicators should turn green within a few seconds if your device has internet access.

![Internet connectivity check](/img/Configuration/Network/Network-connectivity-check.png)
