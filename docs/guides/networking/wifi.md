---
id: wifi
title: "WiFi configuration guide"
sidebar_label: "WiFi"
description: "Configure WiFi connections for Cyanview devices. Connect to existing networks or create direct wireless links to cameras."
keywords: [WiFi, wireless, configuration, network]
slug: /guides/networking/wifi
---

<img src="/img/Configuration/TPLink-wiring.png"/>

This guide is intended to provide a Wi-Fi connectivity to Cyanview devices:
* CI0 : to control a camera over Wi-Fi (Blackmagic, etc.) `schema 1`
* RIO : to get internet using Wi-Fi
* RCP : to connect to a LAN using Wi-Fi `schema 2`
* IP/Ethernet Camera : to control it over Wi-Fi (PTZ, BGH1, etc.) `schema 3`

You have various way to achieve that, the one presented here is using a TP-Link Nano Router.

## Setup

You can find the documentation [here](https://www.tp-link.com/nl-be/support/download/tl-wr802n/)

- [step 1] Connect your TP-Link to its USB power supply
- [step 2] Connect your device to the Ethernet port of the TP-Link
- [step 3] Check on the sticker to find the SSID/Password and connect to it with your laptop
- [step 4] Navigate to [http://tplinkwifi.net/](http://tplinkwifi.net/) and login using the password (default is admin/admin)

Now, you should set up the TP-Link in Client mode:
* It will connect to a Wi-Fi AP
* And act as a bridge between Ethernet and Wi-Fi

You should ensure to set up this parameter:
* Connect the TP-Link to the good Wi-Fi AP
* Mode should be `Client`
* Keep `Smart IP` to have the bridge mode

Your setup should look like this:


<img src="/img/Configuration/TPLink-nano-overview.png"/>

After validating, the TP-Link will reboot, you will be disconnected and the setup is applied.

Now every device plugged to the Ethernet will be accessible over Wi-Fi.
