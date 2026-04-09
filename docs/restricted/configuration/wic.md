---
id: wic
title: WIC
description: "Boot a Cyanview device from USB with a WIC image for remote support diagnostics."
keywords: [wic, usb, boot, remote support, balena, flash]
slug: /restricted/configuration/wic
---

# WIC

Take a USB drive of at least 8 GB and flash the WIC image onto it.

<!-- PLACEHOLDER_WIC_RELEASES — insert download links here when available -->

To flash the image, use [balenaEtcher](https://www.balena.io/etcher/). Select the downloaded file and your USB key, then flash it.

Once flashed:

1. Plug the USB drive into one of the USB ports near the RJ45 connector.
2. Power the device. The boot process takes approximately 5 minutes.
3. The screen changes from "connecting" to the standard interface once boot completes.

:::note
This is not a permanent solution. It is a way to allow the Cyanview support team to remotely check your device.
:::

:::note
You may see reboots every 30 seconds — this is only a screen glitch. The device is not actually rebooting, and this behavior is expected.
:::
