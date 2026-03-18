---
id: cellular
title: "Cellular connectivity guide"
sidebar_label: "Cellular"
description: "Set up cellular (4G/5G) connectivity for Cyanview devices. Control cameras over mobile networks for outdoor production."
keywords: [cellular, 4G, 5G, mobile, outdoor, remote]
slug: /guides/networking/cellular
---

<img alt="4G-Dongle-RCP-RIO-Internet" src="/img/diagrams/4G-Dongle-RCP-RIO-Internet@2x-8.png" width="900" />

## Overview

Cellular connections can be used to remotely and wirelessly control cameras over the internet through a cloud relay. When using cellular, the typical workflow is to have a RIO on the camera side, which controls the camera and connects to the internet.

Any internet connection will work but when considering cellular, these are the most common options:
* Using a 4G or 5G modem router
* Using a 4G USB dongle
* Using a cellular video backpack: some products provide an internet access just like a standard router

Initially, we used 4G USB dongles because they were the simplest solution. However, their availability is limited, and the situation hasn’t improved with Huawei being banned in the U.S. Additionally, these dongles are gradually disappearing from the market. On the other hand, 4G—and now 5G—modems have become more widespread, offering professional-grade configuration interfaces and settings. They also connect to the RIO via wired Ethernet (RJ45 or USB), making them a more reliable alternative. The drawback is that it's another box to fix and power.

## Cellular 4G or 5G Routers

As the connection to the RIO is wired ethernet, any 4G or 5G router with an ethernet port will work. The sometimes provide multiple RJ45 which can be configured to be used as a switch and also connect a camera. Some units provide ethernet connectivity over USB leaving the RJ45 port available for another device.

Here are some examples:
  - [Peplink](https://www.peplink.com/)
  - [Teltonika](https://teltonika-networks.com/): i.e. RUT241
  - [Cradlepoint](https://cradlepoint.com/)
  - [Mikrotik](https://mikrotik.com/)
  - [Huawei](https://consumer.huawei.com/)

The configuration on the RIO side is a standard ethernet configuration, with the internet access provided by the router either through DHCP or manually configured in the WAN section with a static IP address, gateway and DNS servers.

## 4G USB dongles

We recommend to take a `4G USB + WiFi AP` version of the dongles to access the dongle configuration over Wi-Fi. They are much easier to configure from a smartphone/laptop and monitoring on the field as you connect over wifi instead of having to install drivers and software.

   - US:
     - ZTE MF833V
     - AT&T : <a href="https://www.att.com/buy/connected-devices-and-more/att-global-modem-usb800.html">Novatel Wireless USB800</a>
     <!-- - `Verizon` : Novatel Wireless USB8L -->
   - Europe:
     - HUAWEI E8372h-320 (4G USB + WiFi AP)
     - HUAWEI E3372h-320 (4G USB)
   - Australia:
     - HUAWEI E8372h-608 (4G USB + WiFi AP)
     - HUAWEI E3372h-608 (4G USB)

:::note

We support all *E8372h-xxx* and *E3372h-xxx* if you find the model suitable for your local network operator.

:::

### Configuration

   - Use your computer to configure your *4G Dongle*.
   - Configuration examples are based on the *HUAWEI E3372h LTE USB Stick*.
   - Check that your SIM is inserted in the modem
   - Depending on your OS you will maybe need to install some drivers (windows, mac)
   - After this step, the modem configuration webpage will open automatically

#### Dongle Configuration

The webpage may differ based on model and version, but parameters to check are the same:
* PIN
* APN/login/password
* Roaming
* DHCP range should be different from **10.192.0.0/16** to avoid conflicts

To configure your modem:
   1. Click the **Settings** TAB.

   <img alt="Cyanview-Support-4G-USB-Dongle-WebUI-Home" src="/img/Integrations/Dongle4G/Cyanview-Support-4G-USB-Dongle-WebUI-Home@2x-8.png" width="400" />

   2. **Important:** Enable **Data Roaming**.

   <img alt="Cyanview-Support-4G-USB-Dongle-WebUI-Settings-Roaming-Enabled" src="/img/Integrations/Dongle4G/Cyanview-Support-4G-USB-Dongle-WebUI-Settings-Roaming-Enabled@2x-8.png" width="400" />

   3. Open **Profile Management**.
   4. Create a **New Profile**.

   <img alt="Cyanview-Support-4G-USB-Dongle-WebUI-New-Profile" src="/img/Integrations/Dongle4G/Cyanview-Support-4G-USB-Dongle-WebUI-New-Profile@2x-8.png" width="400" />

   5. Enter **New Profile** information, **Important:** specify the **APN** of the *SIM*'s ISP.

    <img alt="Cyanview-Support-4G-USB-Dongle-WebUI-APN" src="/img/Integrations/Dongle4G/Cyanview-Support-4G-USB-Dongle-WebUI-APN@2x-8.png" width="400" />

   6. If your *SIM* requires a **PIN Code**, entre the **PIN Code** in the **Security -> PIN management** page.

    <img alt="Cyanview-Support-4G-USB-Dongle-WebUI-Security-PIN" src="/img/Integrations/Dongle4G/Cyanview-Support-4G-USB-Dongle-WebUI-Security-PIN@2x-8.png" width="400" />


#### Verify the internet access

Now that your modem is correctly configured, check that you have internet:

- Ensure to disable all your other internet sources (ethernet, wifi, etc.) to only keep 4G USB
- Open https://fast.com/ in a browser and verify the connection by performing the speed test.

   <img alt="Cyanview-Support-4G-USB-Dongle-Connection-check-Fast-com" src="/img/Integrations/Dongle4G/FastCom.png" width="400" />

### Cyanview device connection

1. Connect the *4G Dongle* to the CY-RCP using the USB port on the back.

<img alt="Cyanview-Support-4G-USB-Dongle-RCP-USB" src="/img/productGfx/RCP/RCP-USB-back-port@2x-8.png" width="200"/>

2. USB extension may be required as some 4G USB modems are too large to fit there.

3. You can check that the RCP is correctly connected to internet by checking this [page](/docs/Manuals/RCP/ConfWebUI#admin) on your RCP.

For all other devices (RIO, NIO, etc.), any USB port will work.
