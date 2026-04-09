---
id: halow
title: "WiFi HaLow guide"
sidebar_label: "HaLow"
description: "Set up WiFi HaLow (802.11ah) for long-range, low-power wireless camera control with Cyanview devices."
keywords: [HaLow, 802.11ah, long range, wireless, low power]
slug: /guides/networking/halow
---

Wi-Fi HaLow is a long-range (up to 2 km line-of-sight), low-bandwidth (around 1 Mbps) wireless IP link on unlicensed UHF frequencies. Although certified by the Wi-Fi Alliance, it is not traditional Wi-Fi — phones and computers will not connect to it. HaLow is therefore not affected by crowd congestion on 2.4 GHz or 5 GHz. It has been reported to work reliably at large events compared to regular Wi-Fi or cellular.

Because it uses unlicensed frequencies, interference from other equipment is possible. Multiple channels are available to help avoid conflicts.

Cyanview has tested radios from **Alfa Networks** only.

**Supported frequencies by region:**
- 847 MHz (TW)
- 866 MHz (EU)
- 915 MHz (US)
- 922 MHz (KR)
- 924 MHz (JP)

**Bandwidth:** 1/2/4 MHz

Typical round-trip latency between nodes is 10–20 ms when tested with `ping`. This can affect some protocols' responsiveness but is generally fine for camera shading.

You can use the radios in two modes:
- **Point-to-multipoint** — One access point with multiple client nodes.
- **IP mesh** — All nodes communicate together and can extend range. Mesh mode currently works reliably with 2–3 cameras.

## Devices

| Tube-AH [(AHM27292U)](https://www.alfa.com.tw/products/tube-ah) | Halow-U [(AHUC7292U)](https://www.alfa.com.tw/products/halow-u) |
|:------|:------|
| ![Alfa Tube-AH outdoor PoE radio](/img/Configuration/RFUHF/alfa-tubeah.jpg) | ![Alfa Halow-U compact USB radio](/img/Configuration/RFUHF/alfa-halowu.jpg) |
| **Connectivity:** passive PoE Ethernet RJ45 (12–36V DC) | **Connectivity:** USB-C |
| Use as access point or as a node on a camera | Plug directly into a RIO. Some cameras also support a direct connection. Can also serve as an intermediate mesh node powered by a USB battery. |
| **Antenna:** Type-N | **Antenna:** female SMA |
| **Size:** ~30 cm × 4 cm | **Size:** ~9 cm × 5 cm × 2 cm |

## Where to buy

- **USA**: [Rokland](https://store.rokland.com/pages/alfa-halow-u-tube-ah-802-11ah-support-page) — ships with old firmware, update before use.
- **Europe**: VARIA System — [Tube-AH](https://en.varia-store.com/product/alfa-network-tube-ah-eu-384957-access-point/) and [Halow-U](https://www.varia-store.com/en/produkt/863568-802-11ah-halow-usb-adaptersupport-ap-amp-client-mode.html) with ~2-month lead time.
- **Australia**: RFShop — [Tube-AH](https://rfshop.com.au/product/halow_outdoor_ap_cpe_poe/) and [Halow-U](https://en.varia-store.com/product/alfa-network-halow-u-eu-375132-adapter/).
- **Bulk orders**: Contact [Alfa Networks](https://contact.alfa.com.tw/) directly. Expect 3-week lead time, higher shipping, and import taxes.
- **Limited stock**: Cyanview keeps a small stock of units with 868 MHz antennas for Europe to help clients evaluate the solution quickly. We do not intend to become an official reseller and do not offer demos or product support.

## Configuration

Each radio is configured through a web page. The factory default IP is `192.168.100.1`. This IP is only used for radio configuration — it is not used for communication between radios or for the Cyanview IP network.

Configuration steps for each radio:
1. Change the default IP address and disable the DHCP server (credentials: `admin | admin`).
2. Select the operational mode: AP or Station (point-to-multipoint) or Mesh Node.
3. Choose a frequency channel.
4. Assign a Wi-Fi HaLow network name.
5. Install the firewall on AP radios.

:::warning Old firmware
Rokland ships products with an old OpenWRT-based firmware using a different interface. If your interface does not match the screenshots below, [update the firmware](#firmware-update) first.
:::

### Configuration through the radio web page

:::warning All units share the same factory IP
Configure one radio at a time. Change its IP to a unique address before powering the next radio.
:::

1. **Connect and power the radio.**
   - For the Tube-AH, connect it to a switch. LEDs should turn on.
   - For the Halow-U, connect it to a RIO or RCP over USB (use a cable that carries data). The `IP Connections` block shows the new USB connection in red — this is expected. Scroll to the bottom of the right-side settings and tick the USB interface to add it to the `Bridge`. This makes the radio accessible from the LAN port of the RIO or RCP.

   ![IP Connections block showing USB interface](/img/Configuration/halow/alfa-IPConnections.png)
   ![IP bridge configuration with USB ticked](/img/Configuration/halow/alfa-IP-bridge.png)

2. **Set a static IP on your computer** in the `192.168.100.x` range. The radio has a DHCP server enabled by default but you will disable it shortly — do not rely on it.

3. **Open the configuration page** at `http://192.168.100.1`. Credentials: `admin | admin`.

   ![Alfa Networks radio login page](/img/Configuration/halow/alfa-login.png)

   If you cannot access the page, check your network configuration until `ping 192.168.100.1` succeeds. [Reset the device](#device-reset) if it was previously configured.

4. **From the Network section on the left** (not the Dashboard), disable the DHCP server, then change the IP address and netmask. Click **Save** in the top right.

   We suggest the `10.192.5.xxx` range. Cyanview devices start from `10.192.10.0`, so any address below `10` avoids conflicts. Using the `10.192.5.xxx` range with a `255.255.0.0` netmask lets any Cyanview device access the radio directly. Label each unit with its IP.

   ![Alfa radio network settings page with IP and DHCP fields](/img/Configuration/halow/alfa-network.png)

5. **Set your wireless network:**
   - Click **EDIT** in the top right.
   - Set `AH Mode` to `AP Mode` or `Client Mode (Station)` for point-to-multipoint, or `MESH Node` for mesh. Ignore `MESH AP` (identical to Node). Do not select `Hardware Switch` on Halow-U — the switch is too easy to toggle accidentally.

   ![Alfa radio wireless mode selection](/img/Configuration/halow/alfa-config-1.png)

   - Set a network name. SSIDs are case-sensitive and can be up to 32 characters. A common error: lowercase on one device, capitalized on another.

   ![Alfa radio SSID configuration field](/img/Configuration/halow/alfa-config-2.png)

   - Click **OK** to save.

6. **Once two devices share the same network name, they connect wirelessly.** Watch for network loops at this stage.

   :::warning Network loops bring down your network
   Connecting two radios to the same switch — directly or through a RIO bridge — creates a loop. Broadcast traffic overwhelms the network and stops all communication. A HaLow wireless link behaves like a cable, so connecting both ends of a link to the same switch creates a loop. Similarly, connecting a RIO's RJ45 while a Halow-U is also bridged through USB creates a loop.

   To avoid this: connect only the AP radio (or a single Mesh Node in mesh mode) to the switch. Disconnect the RJ45 on all RIOs that have a Halow-U connected via USB. Those RIOs are then reachable through the wireless network only. Reboot the RIO after switching between wired and wireless to ensure proper network reinitialization.
   :::

### Configuration scripts on RCP or RIO

Cyanview provides a custom page on the RCP and RIO at port 5000 for configuring and monitoring Alfa Network HaLow radios. Access it by adding `:5000` to the device IP address.

Example: for `CY-RCP-40-151`, the main GUI is at `http://10.192.40.151` and the HaLow page is at `http://10.192.40.151:5000`.

![Cyanview HaLow management dashboard at port 5000](/img/Configuration/RFUHF/Cyanview-dashboard.png)

:::warning
If you do not see `Alfa actions` and `Alfa config` at the bottom of the page, [update your RCP or RIO](/docs/reference/firmware-download).
:::

Each action uses the radio IP entered in the top field.

#### Changing the region

:::warning
Although this page was designed to also change the IP address, there are known bugs. Use the manual web configuration to change radio IPs.
:::

In **Alfa Config**, enter the radio IP and click **Load**. Key settings:
- **Zone** — Region code. `DE` is Europe. Changing the region adjusts available frequency bands and requires a matching antenna.
- **Power** — Default is 23 dBm. Values from 23–30 dBm are equivalent. You can reduce power down to 0 dBm.

![Cyanview HaLow dashboard — Alfa Config panel](/img/Configuration/halow/dashboard5000-config.png)

Click **Save** to save changes. A power cycle is required to apply them.

Camera control does not require much bandwidth — the 1 MHz bandwidth has never been a limitation and minimizes interference risk.

#### Adding a firewall

Cyanview provides firewall rules that block broadcast traffic off the radios. Wireless performance degrades as more nodes are added, and broadcast traffic is a major contributor. ARP requests still pass through. The `setup-firewall` action is in the **Alfa actions** section.

This only needs to be done once. The firewall persists until a factory reset or a `remove-firewall` action.

![Cyanview HaLow dashboard — set-firewall action](/img/Configuration/halow/dashboard5000-setfirewall.png)

#### Scanning bands to find the best channel

Run `scan-bands` to get a list of all channels with a percentage of activity. Lower is better. The last two lines before `OK` indicate the optimal frequency and channel. Run it multiple times to observe stability.

![Cyanview HaLow dashboard — scan-bands results showing channel activity](/img/Configuration/halow/dashboard5000-scanbands.png)

If radios fail to connect, run this scan to check for interference. Changing channels is easiest when all radios are temporarily connected to the network. Changes are saved but not applied until a power cycle — you can update all radios then power cycle them without reconnecting each one.

## Monitoring

### Dashboard of the main radio

The radio web page Dashboard section shows all connections. Note: connection status is not very reactive and may persist after some radios are powered off.

![Alfa radio dashboard showing connected nodes and signal levels](/img/Configuration/halow/alfa-config-3.png)

Signal quality references:
- **Good:** 0 to −70 dBm
- **Low:** −70 to −80 dBm
- **Weak:** −80 to −90 dBm
- **Too low:** −90 dBm and below

:::warning
Opening multiple radio web pages consumes significant wireless bandwidth — more than most camera control protocols require. Only monitor the page of the main node (AP or the Mesh Node connected to the LAN). Monitoring the main node does not use wireless bandwidth.
:::

### LEDs

**Halow-U** boot sequence — full boot takes ~75 seconds:

| Stage | LED 1 (red/blue) | LED 2 (green) | LED 3 (green) | LED 4 (green) | Duration |
|:-----:|:----------------:|:-------------:|:-------------:|:-------------:|:--------:|
| 1 | steady | steady | off | steady | 15 s |
| 2 | steady | blinking slowly | off | steady | 1 min |
| 3 | steady | steady | steady | steady | — |

**Tube-AH** boot sequence — full boot takes ~60 seconds:

| Stage | Network LED | Wi-Fi LED (green) | Power LED (green) | Duration |
|:-----:|:-----------:|:-----------------:|:-----------------:|:--------:|
| 1 | steady | off | steady | 10 s |
| 2 | blinking green | off | steady | 20 s |
| 3 | steady blue | steady | steady | — |

## REMI through the firewall

With the firewall installed on Tube-AH or Halow-U radios, automatic RIO discovery from the RCP is blocked (discovery uses broadcast). Any RIO connected wirelessly will not appear on the REMI page automatically.

Add the RIO IP manually on the RCP. In the `REMI` tab, enable **Advanced Mode** via the top-right 3-dot menu.

![RCP REMI advanced mode toggle](/img/Configuration/RFUHF/RCP-REMI-advanced.png)

Enter the IP address of each wireless RIO in the **Manual IP** section and click **+** for each.

![RCP REMI manual IP entry field](/img/Configuration/RFUHF/RCP-REMI-manual-IP.png)

Once the RIO connects to the network, it appears in the left section and its IP is removed from the manual list.

![RCP REMI page showing RIO discovered and moved to the connected list](/img/Configuration/RFUHF/RCP-REMI-RIO.png)

## Troubleshooting

### Latency

Expect 10–20 ms latency even with multiple radios. If latency is higher, improve antenna placement and check signal levels (RSSI). If signal is weak in point-to-multipoint mode, try mesh mode for setups with only a few wireless cameras.

### Device reset

If you lose the radio IP, a factory reset restores `192.168.100.1`.

**From the web page:** Go to the `admin` menu in the top right.

![Alfa radio factory reset option in admin menu](/img/Configuration/halow/alfa-gui-factory.png)

**Using the reset button:**
1. Power on the device and wait for the status LED to stop flashing (~70 seconds).
2. Press and hold the reset button for 10 seconds.
3. Wait for the device to reboot with factory settings (~2 minutes 30 seconds).

:::note
A factory reset removes any installed firewall rules. Reinstall them after the reset.
:::

### Firmware update

The latest firmware from Alfa Networks is **v1.3**.

Check the current version in the **System** section [1] and update via the **admin** menu [2] using the files below.

![Alfa radio firmware update page showing System section and admin menu](/img/Configuration/halow/alfa-gui-firmware.png)

Downloads:
- [Tube-AH v1.3](/files/AlfaNetworksFirmwareV1.3/matrixpro_v1.3_aui_ahm27292u_squashfs_sysupgrade.bin)
- [Halow-U v1.3](/files/AlfaNetworksFirmwareV1.3/matrixpro_v1.3_aui_ahuc7292u_squashfs_sysupgrade.bin)

If the web page shows OpenWRT instead of the Alfa Networks interface, the firmware can still be updated, but we do not have screenshots of that procedure at this time.

<!--
## Workflow

![HaLow wiring overview](/img/Configuration/RFUHF/RFUHF-wiring.png)

## Examples of topologies

### Wireless FX3

![RF topology — wireless FX3](/img/Configuration/RFUHF/RF-topology-FX3.png)

Gear needed:

- 1 x RCP
- 1 x RIO (or RIO +LAN)
- 1 x Tube-AH
- 1 x Halow-U
- 1 x FX3
- 1 x USB-C to USB-A (with data)

Wiring:

- RIO is powered through D-TAP
- RIO powers the Halow-U through USB
- RIO communicates with FX3 through USB

More info on FX3 setup [here](/docs/integrations/cameras/sony/sony-alpha).

### Wireless FX6

![RF topology — wireless FX6](/img/Configuration/RFUHF/RF-topology-FX6.png)

Gear needed:

- 1 x RCP
- 1 x RIO (or RIO +LAN)
- 1 x Tube-AH
- 1 x Halow-U
- 1 x FX6
- 1 x USB-C Ethernet dongle (compatible with FX6)

Wiring:

- RIO is powered through D-TAP
- RIO powers the Halow-U through USB
- FX6 has a USB-C Ethernet
- RIO uses its onboard Ethernet to connect to the FX6 Ethernet dongle
- FX6 IP is in the range `10.192.0.0/16` so RIO can talk directly to it

More info on FX6 setup [here](/docs/integrations/cameras/sony/sony-fx6).

### Mesh

![RF topology — mesh network](/img/Configuration/RFUHF/RF-topology-mesh.png)

Typical use case:

- Long distance where point-to-multipoint does not reach
- Obstacles obstructing one or more nodes (a building, etc.)

Setup:

- Same as above (IP setup, RF setup)
- Set all nodes to `MESH Node` mode instead of AP/Station

## Wireless Best Practices

![HaLow outdoor test](/img/Configuration/halow/test-out.png)
-->
