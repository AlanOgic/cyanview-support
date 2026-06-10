---
id: wifi-nano-ap
title: "WiFi Nano AP setup"
sidebar_label: "WiFi Nano AP"
description: "Configure a TP-Link Nano Router in Client mode to bridge Cyanview devices and cameras onto an existing WiFi network."
keywords: [WiFi, Nano AP, access point, direct connection]
slug: /guides/networking/wifi-nano-ap
---

![TP-Link wiring diagram](/img/Configuration/TPLink-wiring.png)

Use a TP-Link Nano Router in Client mode as a bridge that connects your Cyanview device's Ethernet port to an existing Wi-Fi access point. This covers several use cases:

- **CI0** — control a camera over Wi-Fi (Blackmagic, etc.) `schema 1`
- **RIO** — access the internet over Wi-Fi
- **RCP** — connect to a LAN over Wi-Fi `schema 2`
- **IP/Ethernet camera** — control a PTZ, BGH1, or similar device over Wi-Fi `schema 3`

## Setup

Refer to the [TP-Link TL-WR802N documentation](https://www.tp-link.com/nl-be/support/download/tl-wr802n/) for hardware details.

1. Connect your TP-Link to its USB power supply.
2. Connect your Cyanview device to the Ethernet port of the TP-Link.
3. Check the sticker on the TP-Link for its SSID and password, then connect your laptop to that network.
4. Open [http://tplinkwifi.net/](http://tplinkwifi.net/) and log in (default credentials: `admin` / `admin`).

Configure the TP-Link in **Client** mode so it bridges Ethernet and Wi-Fi:

- **Network** — select the target Wi-Fi access point.
- **Mode** — set to `Client`.
- **IP** — keep `Smart IP` to enable bridge mode.

Your configuration should look like this:

![TP-Link Nano client mode configuration](/img/Configuration/TPLink-nano-overview.png)

:::tip
After you save the settings, the TP-Link reboots and disconnects your laptop from its own network. This is expected — the configuration is applied.
:::

Every device connected to the Ethernet port is now accessible over Wi-Fi.
