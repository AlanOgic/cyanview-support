---
id: wireless
title: "Wireless networking guide"
sidebar_label: "Wireless"
description: "Configure wireless networking for Cyanview devices. WiFi, cellular, and HaLow options for cable-free camera control."
keywords: [wireless, WiFi, cellular, HaLow, networking]
slug: /guides/networking/wireless
---

# List of existing wireless solutions

Cyanview does not manufacture any wireless solutions but offers various integrations with existing solutions. The most appropriate system depends on the conditions of your production, the required reliability as well as your budget. Wireless is usually tricky and we don't have any RF expertise to recommend any solution ourselves or provide support for these.

What we provide is a list of options known to be used by our clients with some pros and cons based on the received feedback, as well as guidelines for the integration.

Our control architecture being IP based, most of these solutions are around IP technologies.


## IP Mesh (licensed frequencies)

  A few Manufacturers like [Domo](https://www.domobroadcast.com/product-category/ip-mesh/) provide IP mesh nodes which can be understood as a wireless switch, where each wireless device connects to a node and becomes visible on your LAN network as if it was wired.

  **Pros**

    * Broadcast grade equipemnt based on military technologies
    * The companies provide support
    * Licensed frequencies guarantees that you won't get interference from other systems

  **Cons**

    * Higher budgets


## Bitbox (USA unlicensed frequency)

  The company [Bitpart](https://bitpart.com/) designed an IP based wireless system specifically for camera control. This currently only runs on unlicensed frequencies in the 915MHz band for America.

  When paired, each node acts like a port of a switch.

  **Pros**

    * Long range
    * The company provides support
    * Affordable
    * Mostly plug and play
    * The USB interface can directly be connected to most cameras supporting ethernet USB dongles

## Wi-Fi Halow (UHF unlicensed)

  * Guide for [Wi-Fi Halow](/docs/Configuration/Halow)

  Although certified by the Wi-Fi Alliance, the Halow technology is not a regular consumer Wi-Fi but has been designed for the internet of things with longer range and lower bitrates. Like the previous solutions, this consists of nodes which will link all devices to an IP network. The frequencies are legal in the following countries:
  * 915 MHz (US)
  * 866 MHz (EU)
  * 924 MHz (JP)
  * 922 MHz (KR)
  * 920 MHz (TW)

  **Pros**

    * Long range
    * Inexpensive

  **Cons**

    * No support provided


## Cellular 4G, 5G, private 5G

  * Guide for using [Cellular modems and routers](/docs/Configuration/Cellular)

  The cellular network can be used for wireless remote control. The latency for control is not an issue for most situations, it is much lower than the latency you might have in mind for video. A RIO on the camera side and a Cyanview cloud relay will handle the link over the internet to the control room. The solution uses 4G USB dongles on a RIO for the connectivity, but these are now replaced by cellular access points which can now handle 5G and can be used on private 5G networks as well.

  **Pros**

    * Easy deployment as this uses the cellular network so no antennas needed
    * Can be used for itinerant coverage like cameras on motorbikes for cycling races or marathons, or a beauty shot further away from the main site
    * When a private 5G network is deployed, adding camera control is an easy and reliable solution

  **Cons**

    * No guarantee that it will work over the public network, it can be very reliable or not work at all


## Regular Wi-Fi

  * Guide for [USB Wi-Fi dongles on a RIO or RCP](/docs/Configuration/WiFiUSB)
  * Guide for [Wi-Fi clients used with wired ethernet devices](/docs/Configuration/WiFi)

  Wi-Fi can be used in controlled environments like studios but is known to be very unreliable during public events and as such, this is rarely used. A typical use case is to control IP cameras directly over Wi-Fi, each camera will connect to a Wi-Fi router and be visible to the RCP like if they were wired. This workflow is easy and reliable if the Wi-Fi network itself is reliable.

  Wi-Fi can get much more complicated for other types of cameras, requiring subnets and address translation, usually exceeding the knowledge of most engineers in the broadcast industry.

  It is possible to use a RIO with a Wi-Fi dongle to connect to the main network and control everything which can be plugged on the RIO itself. This solution is not too complex and has been useful to some. But it has been unreliable to others so test first and deploy gradually.

  The Wi-Fi configuration interface in the RIO is rather basic. If you have to rely on Wi-Fi for anything critical, it is recommended to use standalone Wi-Fi clients from renowned brands. Small devices like the Mikrotik mAP probably have all the options you need.

  **Pros**

    * Inexpensive
    * Easy to control cameras which are already on a Wi-Fi network

  **Cons**

    * Known to be completely unreliable and avoided by most
    * No support provided by any company


## Unofficial solutions

Other possibilities exist based on serial links, which, while not ideal, may be suitable for certain specialty systems. These are presented solely for reference and may be helpful; however, we are unable to provide support for them.

### RIO Serial bridge for RF modems

  We developed a serial bridge for some specialty and RF vendors to integrate with their system. This isn't ideal as the connection status of the camera isn't consistent and reliable. But it has been useful to many people as it allows to use RF modems on licensed frequencies like the Satel modems.

  This might be integrated to the main configuration GUI at some point but for now it is using the development interface. There's a guide which documents the process [here](/docs/restricted/configuration/RFBridge).

### Serial data for mini-cams

  Finally, for Marshall, Dreamchip and Proton mini cameras, it is possible to link the serial data out of a CI0 or USB dongle to the camera over RF. This is sometimes used with some existing serial radio systems. The RCP is using bidirectional data but for those cameras, a unidirectional link is possible from the advanced menu of the cameras (3-dots icon on the top right of the camera properties column). You can then untick the bidirectional link. The delay option can be used instead to keep a birectional link but add the amount of delay in ms to the check of the returned commands. You should set this delay to the round trip delay of your RF system.
