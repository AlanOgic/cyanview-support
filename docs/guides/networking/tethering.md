---
id: tethering
title: "USB tethering guide"
sidebar_label: "Tethering"
description: "Use USB tethering with Cyanview devices for internet sharing from a smartphone or tablet in the field."
keywords: [tethering, USB, smartphone, internet sharing, field]
slug: /guides/networking/tethering
---

![Tethering overview — Apple, Android, mobile modem, and RCP](/img/diagrams/tethering-apple-android-mobile-modem-rcp-overview@2x-8.png)

You can give your Cyanview device 4G or Wi-Fi internet access by connecting it to a smartphone via USB. Both iOS and Android are supported.

## Tethering with an Apple device

### Enable personal hotspot on iOS

1. Go to **Settings > Cellular > Personal Hotspot** (or **Settings > Personal Hotspot**).
2. Enable **Allow Others to Join** — the slider must be green.

### Connect your iOS device

Plug your iPhone or iPad into the USB port of your Cyanview device:

- **RIO or NIO** — any USB port works.
- **RCY-GWY** — use the ports at the back, not the front.

![RCP back USB port](/img/productGfx/RCP/RCP-USB-back-port@2x-8.png)

Your iOS device will prompt you to trust the connected device and enter your passcode:

![iOS trust confirmation screen](/img/3Parties/apple/IOS-trust.png)

![iOS password prompt](/img/3Parties/apple/IOS-pwd.png)

![iOS sharing active](/img/3Parties/apple/IOS-sharing-KO.png)

Once trusted, toggle **Allow Others to Join** off and back on to activate sharing.

:::warning
If the blue dot does not appear in the top-left corner of your iPhone screen, internet is not being shared. Toggle **Allow Others to Join** off and on while the device remains plugged in. If the dot still does not appear, check your cable and repeat the trust procedure.
:::

![iOS sharing active — blue dot visible](/img/3Parties/apple/IOS-sharing-OK.png)

## Tethering with an Android device

### Connect your Android device

Plug your Android phone into the USB port of your Cyanview device:

- **RIO or NIO** — any USB port works.
- **RCY-GWY** — use the ports at the back, not the front.

![RCP back USB port](/img/productGfx/RCP/RCP-USB-back-port@2x-8.png)

### Enable USB tethering on Android

1. Open **Settings**.
2. Search for **USB tethering** and enable it.

![Android USB tethering enabled](/img/3Parties/android/Android-sharing-OK.png)

## Verification

Check the connection status in the **Connectivity check** section of the RCP admin page.

![RCP remote connection status](/img/productGfx/RCP/cyanview-support-RCP-remote-connection-status.png)
