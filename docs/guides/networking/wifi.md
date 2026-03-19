---
id: wifi
title: "WiFi configuration guide"
sidebar_label: "WiFi"
description: "Configure WiFi connections for Cyanview devices. Connect to existing networks or create direct wireless links to cameras."
keywords: [WiFi, wireless, configuration, network]
slug: /guides/networking/wifi
---

![TP-Link wiring diagram](/img/Configuration/TPLink-wiring.png)

Use a TP-Link Nano Router to add Wi-Fi connectivity to your Cyanview device. This covers several use cases:

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

Configure the TP-Link in **Client** mode:

- **Network** — select the target Wi-Fi access point.
- **Mode** — set to `Client`.
- **IP** — keep `Smart IP` to enable bridge mode.

This makes the TP-Link act as a bridge between Ethernet and Wi-Fi, so any device on its Ethernet port appears on the wireless network.

Your configuration should look like this:

![TP-Link Nano client mode configuration](/img/Configuration/TPLink-nano-overview.png)

:::tip
After you save the settings, the TP-Link reboots and your laptop loses its connection to the router's own network. This is expected — the setup is applied and your Cyanview device is now on the Wi-Fi network.
:::

Every device connected to the Ethernet port is now accessible over Wi-Fi.
