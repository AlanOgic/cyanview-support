---
id: ip-configuration
title: "IP configuration guide"
sidebar_label: "IP configuration"
description: "Configure IP addresses on Cyanview devices. Find device IPs, set up LAN and WAN connections, and manage network routes."
keywords: [IP, network, LAN, WAN, configuration]
slug: /guides/networking/ip-configuration
---

Cyanview devices *communication* relies on **IP Network**.

<!--img alt="cyanview-support-IP-Configuration-Basic" src="/img/diagrams/IP-Configuration-Basic@2x-8.png" width="650" /-->

<img alt="cyanview-support-IP-Configuration-Basics-connections-requirement" src="/img/diagrams/IP-Configuration-Basics-connections-requirement@2x-8.png" width="650" />

## Find device's IP

There are several ways to find your device's **Network IP**.

- **Deduce IP from the device Serial Number**

 The default *IP* and *Subnet Mask* of the Cyanview devices has the following pattern: **IP**= 10.192.**x**.**y** and **Subnet Mask**= 255.255.0.0 (or /16) where **x**, **y** are the two last numbers of the serial number.

  <img alt="cyanview-support-faq-RCP-Serial-Number-sn" src="/img/productGfx/RCP/cyanview-support-faq-RCP-Serial-Number-sn@2x-8.png" width="500" />

  - **SN**: CY-RCP-**25**-**250**
  - **IP**: 10.192.**25**.**250**
  - **Subnet Mask**: 255.255.0.0
  - **mDNS** : http://cy-rcp-25-250.local<sup>1</sup>
1. requires a DHCP supporting mDNS (multicast DNS). If `Bonjour` is working, mDNS is working.


## LAN configuration

<img src="/img/diagrams/IP-Configuration-Add-IP-To-Connect-To-Ressources@2x-8.png" width="600" />

Use case:
* You have a RCP and an IP camera or an IP router
* They need to communicate with each other
* You don't want to change your camera/router IP

In the `Configuration` tab, click on `IP Connections`:

<img src="/img/Configuration/Network/Network-IP-block.png" width="600" />

On the right panel:
* Click on `+` of the `LAN connections` block
* Select `LAN1`
* Enter a new IP and mask for your RCP

<img src="/img/Configuration/Network/Network-RCP-LAN-non-persist.png" width="300" />

Now, your RCP:
* is reachable on `10.10.115.2`
* can reach all devices on the network `10.10.115.0/24` (from `10.10.115.1` to `10.10.115.254`)
* in particular the PTZ at `10.10.115.1`

## LAN web UI access

<img src="/img/diagrams/IP-Configuration-Add-IP-To-RCP-To-Join-Subnet@2x-8.png" width="600" />

Use case:
* You have a RCP
* You have a computer
* You need to access the RCP web UI from the corporate network (not the factory IP of the RCP)

In the `Configuration` tab, click on `IP Connections`:

<img src="/img/Configuration/Network/Network-IP-block.png" width="600" />

On the right panel:
* Click on `+` of the `LAN connections` block
* Select `LAN1`
* Enter a new IP and mask for your RCP
* Click on `persist`

<img src="/img/Configuration/Network/Network-RCP-corporate.png" width="300" />

Now, your RCP:
* is reachable on `172.16.0.115`
* can reach all devices on the network `172.16.0.0/24` (from `172.16.0.1` to `172.16.0.254`)
* in particular from your computer (which has the IP `172.16.0.114`)
* this IP is marked as `persist`, this will stay even if you reset your config or upgrade the OS with a SWU

:::note
It is interesting to setup a static IP on your RCP and computer. This way your computer can easily access your RCP web UI.
To setup a static IP on your computer (Windows and Mac OSX), you can follow this [guide](https://kb.netgear.com/27476/How-do-I-set-a-static-IP-address-in-Windows)
:::

## WAN setup

By default, all our devices will connect to internet using DHCP.

You can change that if your network setup needs a static setup (IP, mask and gateway).

In the `Configuration` tab, click on `IP Connections`:

<img src="/img/Configuration/Network/Network-IP-block.png" width="600" />

On the right panel:
* Click on `+` of the `WAN connections` block
* Select `LAN1`
* Enter a new IP and mask for your RCP
* Enter the gateway of your router
* Enter a valid DNS server/relay (you can use google ones : `8.8.8.8`)
* Click on `persist`

<img src="/img/Configuration/Network/Network-WAN-static.png" width="300" />

Now, your RCP:
* is reachable on `192.168.8.100`
* can reach all devices on the network `192.168.8.0/24` (from `192.168.8.1` to `192.168.8.254`)
* can connect to internet using the router located at `192.168.8.1`
* using DNS server `8.8.8.8`
* this IP is marked as `persist`, this will stay even if you reset your config or upgrade the OS with a SWU

## Route setup

Use case, you need to access a specific network through a specific router.

In the `Configuration` tab, click on `IP Connections`:

<img src="/img/Configuration/Network/Network-IP-block.png" width="600" />

On the right panel:
* Click on `+` of the `Routes` block
* Select `LAN1`
* Enter the gateway (this gateway should be reachable by the RCP)
* Enter the network destination
* Enter the network mask

<img src="/img/Configuration/Network/Network-Route.png" width="300" />

Now, your RCP
* can reach the network `192.168.9.1/24`
* the trafic for this network is routed to `192.168.8.1`

## USB dongles

We support a wide range of USB ethernet dongles.
This allows you to have physically separated networks.

In the web UI, they will appear allongside `LAN1` in the dropdown list.

<img src="/img/Configuration/Network/Network-USB.png" width="300" />

## Network overview

You can navigate to the `Diagnotics` tab.

<img src="/img/Configuration/Network/Network-diagnostics-tab.png" width="600" />

And here, you have an overview of all your IP's for all the interfaces (including DHCP addresses, etc.).

<img src="/img/Configuration/Network/Network-diagnostics.png" width="300" />

Here in my example, my RCP has:
* a factory IP : `10.192.18.4` (based on serial number `cy-rcp-18-4`)
* a DHCP address : `192.168.88.30`

## Internet check

You can navigate to the `Admin` tab.

<img src="/img/Configuration/Network/Network-admin-tab.png" width="600" />

Wait some time (usually a couple of seconds if everything is OK, up to a minute if you have network issues).

And in the `Connectivity check` block, if everything is green, you're connected to internet.

<img src="/img/Configuration/Network/Network-connectivity-check.png" width="300" />

