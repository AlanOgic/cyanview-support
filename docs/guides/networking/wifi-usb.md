---
id: wifi-usb
title: "WiFi USB dongle guide"
sidebar_label: "WiFi USB dongle"
description: "Use USB WiFi dongles with Cyanview devices for wireless camera connections. Ideal for cameras with WiFi-only connectivity."
keywords: [WiFi, USB dongle, wireless, camera connection]
slug: /guides/networking/wifi-usb
---

![Wi-Fi USB dongle overview diagram showing connection modes](/img/Configuration/wifi/wifi-overview.png)

This guide covers adding Wi-Fi connectivity to Cyanview RIO/RIO +LAN and RCP devices.

**Use cases:**
- Internet access — the RCP or RIO connects to your venue access point.
- RIO/RCP as access point — connect your smartphone or laptop for configuration.
- Wi-Fi camera control — a Wi-Fi camera (FX9, etc.) connects to your venue AP, and the RCP controls it over Wi-Fi.
- Wi-Fi/Ethernet bridge — a Wi-Fi camera connects to the RIO access point, then communicates with the RCP through Ethernet.

## Compatible USB dongles

Look for dongles using one of these supported drivers:

**RTL8812BU** (AC1200 and AC1300 adapters):
- ASUS: AC1300 USB-AC55 B1, U2, USB-AC53 Nano, USB-AC58
- D-Link: DWA-181, DWA-182, DWA-183 D Version, DWA-185, DWA-T185
- Edimax: EW-7822ULC, EW-7822UTC, EW-7822UAD
- NetGear A6150
- TP-Link: Archer T3U, Archer T3U Plus, Archer T4U V3, Archer T4U Plus
- TRENDnet TEW-808UBM
- ZYXEL NWD6602

**RTL8811CU, RTL8821CU** (AC600 and AC650 adapters):
- UGREEN AC650
- Many unbranded devices (usually list the IC)

**RTL8192EU** (N300 adapters):
- TP-Link TL-WN823N

## Setup

Plug the dongle into any USB port at the back of your RIO or RCP (next to the RJ45). In the web interface, the IP block shows the new interface:

![IP block showing wlan0 and wlan1 interfaces after dongle is detected](/img/Configuration/wifi/wifi-IPBlock.png)

- `wlan0` — first Wi-Fi interface
- `wlan1` — second Wi-Fi interface (some dongles, like the TP-Link AC1300, provide two interfaces in one USB device)

:::note
Green/red status indicates carrier presence. In Wi-Fi, this only confirms a link is detected — not that it is working.
:::

### RIO/RCP internet access

![Diagram showing RCP connecting to venue access point for internet](/img/Configuration/wifi/wifi-internet.png)

Video guide — connecting an RCP to an iPhone hotspot:

<video poster="/img/Configuration/wifi/RCP-WiFi-iPhone.png" muted controls>
    <source src="/img/Configuration/wifi/RCP-WiFi-iPhone.mp4"/>
</video>

1. Click the `IP` block.
2. In the right panel, scroll to the `Wi-Fi` section.
3. In the `wlan0` block, set `Configuration Mode` to `Station`.
4. Click `Show all networks` to expand the SSID list.
5. Click your network, enter the password if required, then click elsewhere to confirm.

![Wi-Fi Station mode setup showing SSID and password fields](/img/Configuration/wifi/wifi-internet-setup.png)

After a few seconds, the connection is established. Expand `Details` to view the connection information:

![Wi-Fi connection details showing SSID and assigned IP address](/img/Configuration/wifi/wifi-internet-status.png)

In this example, the RCP is connected to SSID `CYANVIEW-guest` and received IP `192.168.88.129`.

### RIO/RCP web UI access via smartphone or laptop

![Diagram showing RCP acting as access point for smartphone and laptop](/img/Configuration/wifi/wifi-AP.png)

1. Click the `IP` block.
2. In the right panel, scroll to the `Wi-Fi` section.
3. In the `wlan1` (or `wlan0`) block, set `Configuration Mode` to `Access Point`.
4. Enter your SSID in `Network Name`.
5. Enter your password in `Password`.

![Wi-Fi access point setup showing SSID and password fields](/img/Configuration/wifi/wifi-AP-setup.png)

After a few seconds, scan for Wi-Fi on your smartphone and connect using the SSID and password you configured:

![Smartphone Wi-Fi scan showing RCP access point SSID](/img/Configuration/wifi/wifi-AP-status.png)

Browse to `http://10.1.1.1` to access the RIO/RCP configuration interface.

### RIO Wi-Fi camera control

![Diagram showing RIO as access point bridging Wi-Fi camera to RCP over Ethernet](/img/Configuration/wifi/wifi-APBridge.png)

1. Click the `IP` block.
2. In the right panel, scroll to the `Wi-Fi` section.
3. In the `wlan1` (or `wlan0`) block, set `Configuration Mode` to `Bridged`.
4. Enter your SSID in `Network Name`.
5. Enter your password in `Password`.

![Wi-Fi bridged access point setup showing SSID and password fields](/img/Configuration/wifi/wifi-APBridge-setup.png)

After a few seconds, scan for Wi-Fi on your camera and connect to the RIO AP using the configured SSID and password.

:::note
Your Wi-Fi password must be at least **8 characters** long. The access point will not be created with a shorter password.

When everything is running, the interface dot in the `IP Connections` block turns green.
:::

## Troubleshooting

### RIO/RCP not accessible or not linking on Wi-Fi

Verify your Wi-Fi configuration on all devices.

Do not mix LAN and Wi-Fi Station on the same device unless you understand the routing implications.

:::note
A common issue when testing at home: the same router provides DHCP for both LAN and Wi-Fi on the same range (e.g., `192.168.X.Y/24`). If both LAN and Wi-Fi are connected to the same router via DHCP, you may get two IPs on the same subnet on two different interfaces, causing routing conflicts.

The simplest working setup:
- RCP on Ethernet/DHCP.
- RIO on Wi-Fi Station/DHCP.
- Your Wi-Fi AP is the same router — both devices get IPs on the same subnet, no routing issues.

If you need more complex routing, use static IPs and add appropriate routes.
:::

You can check for IP range conflicts in the `Diagnostics` tab.
