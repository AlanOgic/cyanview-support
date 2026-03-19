---
id: cellular
title: "Cellular connectivity guide"
sidebar_label: "Cellular"
description: "Set up cellular (4G/5G) connectivity for Cyanview devices. Control cameras over mobile networks for outdoor production."
keywords: [cellular, 4G, 5G, mobile, outdoor, remote]
slug: /guides/networking/cellular
---

![4G dongle connected to RCP and RIO with internet](/img/diagrams/4G-Dongle-RCP-RIO-Internet@2x-8.png)

Cellular connections let you control cameras remotely over the internet through a cloud relay. The typical setup places a RIO on the camera side — it controls the camera and provides the internet uplink.

Any internet connection works, but when using cellular you have three common options:

- A 4G or 5G modem router
- A 4G USB dongle
- A cellular video backpack that provides internet access like a standard router

4G USB dongles were once the simplest choice, but availability has declined and many models are being phased out. 4G/5G modem routers are now more practical: they offer professional configuration interfaces and connect to the RIO via wired Ethernet (RJ45 or USB), making them the more reliable long-term option.

## Cellular 4G or 5G routers

Any 4G or 5G router with an Ethernet port works with Cyanview devices. Some models provide multiple RJ45 ports configured as a switch, letting you connect a camera and a RIO simultaneously. Others offer Ethernet over USB, freeing the RJ45 port for another device.

Supported router brands include:

- [Peplink](https://www.peplink.com/)
- [Teltonika](https://teltonika-networks.com/) — e.g. RUT241
- [Cradlepoint](https://cradlepoint.com/)
- [Mikrotik](https://mikrotik.com/)
- [Huawei](https://consumer.huawei.com/)

On the RIO, configure a standard Ethernet connection. The router provides internet access either via DHCP or a static IP address, gateway, and DNS servers set in the WAN section.

## 4G USB dongles

Choose a **4G USB + Wi-Fi AP** model when possible. You can then configure and monitor the dongle from a smartphone or laptop over Wi-Fi, without installing drivers.

| Region | Model |
|--------|-------|
| US | ZTE MF833V |
| US | [Novatel Wireless USB800](https://www.att.com/buy/connected-devices-and-more/att-global-modem-usb800.html) (AT&T) |
| Europe | HUAWEI E8372h-320 (4G USB + Wi-Fi AP) |
| Europe | HUAWEI E3372h-320 (4G USB) |
| Australia | HUAWEI E8372h-608 (4G USB + Wi-Fi AP) |
| Australia | HUAWEI E3372h-608 (4G USB) |

:::note
All E8372h-xxx and E3372h-xxx variants are supported — choose the model suited to your local network operator.
:::

### Dongle configuration

The steps below are based on the HUAWEI E3372h LTE USB Stick. The web UI may differ slightly between models, but the parameters are the same.

1. Insert your SIM card into the modem.
2. Connect the dongle to your computer. Install drivers if prompted (Windows or macOS).
3. The modem configuration page opens automatically in your browser.

**Parameters to configure:**

- PIN code
- APN, login, and password for your operator
- Data roaming
- DHCP range — must not overlap with **10.192.0.0/16** to avoid conflicts

**Step-by-step:**

1. Click the **Settings** tab.

   ![4G dongle web UI home screen](/img/Integrations/Dongle4G/Cyanview-Support-4G-USB-Dongle-WebUI-Home@2x-8.png)

2. Enable **Data Roaming**.

   ![4G dongle web UI — roaming enabled](/img/Integrations/Dongle4G/Cyanview-Support-4G-USB-Dongle-WebUI-Settings-Roaming-Enabled@2x-8.png)

3. Open **Profile Management** and create a **New Profile**.

   ![4G dongle web UI — new profile](/img/Integrations/Dongle4G/Cyanview-Support-4G-USB-Dongle-WebUI-New-Profile@2x-8.png)

4. Enter the profile details. Set the **APN** to match your SIM's network operator.

   ![4G dongle web UI — APN configuration](/img/Integrations/Dongle4G/Cyanview-Support-4G-USB-Dongle-WebUI-APN@2x-8.png)

5. If your SIM requires a PIN, enter it under **Security > PIN management**.

   ![4G dongle web UI — PIN management](/img/Integrations/Dongle4G/Cyanview-Support-4G-USB-Dongle-WebUI-Security-PIN@2x-8.png)

### Verify internet access

Before connecting the dongle to your Cyanview device, confirm it has internet:

1. Disable all other internet sources on your computer (Ethernet, Wi-Fi).
2. Open [https://fast.com/](https://fast.com/) and run a speed test.

   ![fast.com speed test](/img/Integrations/Dongle4G/FastCom.png)

### Connect the dongle to your Cyanview device

1. Plug the 4G dongle into the USB port on the back of the RCP.

   ![RCP back USB port](/img/productGfx/RCP/RCP-USB-back-port@2x-8.png)

   Use a USB extension cable if the dongle is too wide to fit directly.

2. Verify the internet connection in the [RCP admin page](/docs/reference/manuals/rcp/web-ui#admin).

For all other devices (RIO, NIO, etc.), any USB port works.
