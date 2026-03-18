---
id: tethering
title: "USB tethering guide"
sidebar_label: "Tethering"
description: "Use USB tethering with Cyanview devices for internet sharing from a smartphone or tablet in the field."
keywords: [tethering, USB, smartphone, internet sharing, field]
slug: /guides/networking/tethering
---

## Overview

<img alt="tethering-apple-android-mobile-modem-rcp-overview" src="/img/diagrams/tethering-apple-android-mobile-modem-rcp-overview@2x-8.png" width="600" />

Cyanview devices can be granted 4G or WIFI Internet access via USB connection to mobile device.

## Tethering with Apple mobile

### Enable sharing connection on your IOS device.

- Go to Settings > Cellular > Personal Hotspot or Settings > Personal Hotspot.
- Tap the slider next to Allow Others to Join (must be "1" and Green).

### Plug your IOS device on the USB port of your Cyanview device.

- If it's a RIO or NIO, any port is OK.
- If it's a RCY-GWY, use ports at the back (not the front one)

<img alt="RCP-USB-back-port" src="/img/productGfx/RCP/RCP-USB-back-port@2x-8.png" width="300" />

- You will be asked to trust this device and to enter your IOS code. 

  confirmation screen.

  <img alt="apple-IOS-trust" src="/img/3Parties/apple/IOS-trust.png" width="300" />

  Password required.

  <img alt="apple-IOS-password" src="/img/3Parties/apple/IOS-pwd.png" width="300" />
  
  Sharing is OK.

  <img alt="apple-IOS-sharing-KO" src="/img/3Parties/apple/IOS-sharing-KO.png" width="300" />


- Then disable/enable your sharing to make activate it (now that it's trusted).


*Note:*
 
If the "blue dot" at the top left corner is not present, your device is not sharing internet.

<img alt="apple-IOS-sharing-KO" src="/img/3Parties/apple/IOS-sharing-OK.png" width="300" />

To fix this, keep your device plugged and disable/enable the IOS sharing ("Allow Others to Join").

If the blue dot is not appearing, repeat the procedure and double check your wiring.

## Tethering with Android mobile

#### Plug your Android device on the USB port of your Cyanview device.

- If it's a RIO or NIO, any port is OK.
- If it's a RCY-GWY, use ports at the back (not the front one)

<img alt="RCP-USB-back-port" src="/img/productGfx/RCP/RCP-USB-back-port@2x-8.png" width="300" />

### Enable sharing connexion on android device.

- Go to "Settings"
- Search for "USB tethering" and enable it

<img alt="Android-sharing-ok" src="/img/3Parties/android/Android-sharing-OK.png" width="300" />

## Verification

The connection status can be controlled in the *connectivity check* of the RCP admin page.

<img alt="RCP-connection-status" src="/img/productGfx/RCP/cyanview-support-RCP-remote-connection-status.png" width="400" />













