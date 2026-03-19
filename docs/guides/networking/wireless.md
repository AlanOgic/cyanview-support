---
id: wireless
title: "Wireless networking guide"
sidebar_label: "Wireless"
description: "Configure wireless networking for Cyanview devices. WiFi, cellular, and HaLow options for cable-free camera control."
keywords: [wireless, WiFi, cellular, HaLow, networking]
slug: /guides/networking/wireless
---

Cyanview does not manufacture wireless solutions, but integrates with several existing options. The right choice depends on your production conditions, required reliability, and budget. Wireless is inherently complex — Cyanview does not provide RF expertise or support for these third-party solutions. What follows is a list of options used by clients, with pros and cons based on field feedback and integration guidelines.

Cyanview's control architecture is IP-based, so all options below are IP technologies.

## IP mesh (licensed frequencies)

Manufacturers like [Domo](https://www.domobroadcast.com/product-category/ip-mesh/) provide IP mesh nodes that function as a wireless switch — each wireless device connects to a node and appears on your LAN as if wired.

**Pros:**
- Broadcast-grade equipment based on military technologies.
- Manufacturer support.
- Licensed frequencies guarantee no interference from other systems.

**Cons:**
- Higher cost.

## Bitbox (USA unlicensed frequency)

[Bitpart](https://bitpart.com/) designed an IP-based wireless system specifically for camera control, currently running on unlicensed 915 MHz frequencies for the Americas. Each paired node acts like a port on a switch.

**Pros:**
- Long range.
- Manufacturer support.
- Affordable.
- Mostly plug-and-play.
- The USB interface can connect directly to cameras that support Ethernet USB dongles.

## Wi-Fi HaLow (UHF unlicensed)

See the [Wi-Fi HaLow guide](/docs/guides/networking/halow).

Although certified by the Wi-Fi Alliance, HaLow is not consumer Wi-Fi — it was designed for IoT with longer range and lower bitrates. Nodes link all devices to an IP network. Legal frequencies:
- 915 MHz (US)
- 866 MHz (EU)
- 924 MHz (JP)
- 922 MHz (KR)
- 920 MHz (TW)

**Pros:**
- Long range.
- Low cost.

**Cons:**
- No support provided.

## Cellular 4G, 5G, private 5G

See the guide for [cellular modems and routers](/docs/guides/networking/cellular).

Cellular networks work well for remote camera control. Control latency is much lower than video latency and is not an issue for most scenarios. A RIO on the camera side and the Cyanview cloud relay handle the link over the internet to the control room. 4G USB dongles on RIOs have largely been replaced by cellular access points that support 5G and private 5G networks.

**Pros:**
- Easy deployment — uses the existing cellular network, no antennas required.
- Works for itinerant coverage such as cameras on motorbikes for cycling races or marathons.
- Easy and reliable addition to private 5G deployments.

**Cons:**
- No guarantee of reliability over the public network — can be very reliable or fail entirely.

## Regular Wi-Fi

See the guides for [USB Wi-Fi dongles on a RIO or RCP](/docs/guides/networking/wifi-usb) and [Wi-Fi clients used with wired Ethernet devices](/docs/guides/networking/wifi).

Wi-Fi works in controlled environments like studios but is unreliable at public events and rarely used there. A typical use case is controlling IP cameras over Wi-Fi — each camera connects to a Wi-Fi router and the RCP sees it as if wired. Simple and reliable when the Wi-Fi network itself is reliable.

For other camera types, Wi-Fi setups can require subnets and address translation, often beyond the knowledge available in broadcast environments.

A RIO with a Wi-Fi dongle can connect to the main network and control anything plugged into the RIO. This approach has worked for some clients and failed for others — test before deploying in production. If Wi-Fi is critical, use standalone Wi-Fi clients from established brands. Small devices like the Mikrotik mAP have the options you need.

**Pros:**
- Inexpensive.
- Easy for cameras already on a Wi-Fi network.

**Cons:**
- Known to be unreliable, especially at public events.
- No support provided by any vendor.

## Unofficial solutions

The following options use serial links. They are presented for reference only — Cyanview cannot provide support for them.

### RIO serial bridge for RF modems

Cyanview developed a serial bridge for specialty and RF vendors. The connection status of the camera is not consistent or reliable, but it has been useful for setups using RF modems on licensed frequencies such as Satel modems. This feature currently uses the development interface — a guide is available [here](#).

### Serial data for mini-cameras

For Marshall, Dreamchip, and Proton mini cameras, it is possible to route the serial data from a CI0 or USB dongle to the camera over RF. The RCP uses bidirectional data, but these cameras support a unidirectional link from the camera's advanced menu (3-dot icon in the camera properties). Untick the bidirectional link option. Alternatively, use the delay option to keep a bidirectional link but add the RF system's round-trip delay in milliseconds.
