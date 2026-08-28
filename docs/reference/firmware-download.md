---
id: firmware-download
title: "Firmware download"
sidebar_label: "Firmware download"
description: "Download the latest firmware for your Cyanview devices. RCP, RIO, NIO, and VP4 update files."
keywords: [firmware, download, update, latest version]
slug: /reference/firmware-download
---

The following downloads are available for full system updates of CY-RCP, CY-RIO, CY-NIO, and CY-VP4. Incremental application updates are only available through the web interface when the device has internet access.

See the [product update guide](/docs/reference/product-update) for step-by-step update instructions.

## Latest releases

Identify your device by serial number before downloading.

<!-- PLACEHOLDER_STABLE_RELEASES — upstream fills this table from scripts/build_releases.sh.
     The fork has no equivalent generator, so the links are served from the official site below. -->

The signed update files for each device and release are published on the official Cyanview
download page: **[support.cyanview.com — Release Download](https://support.cyanview.com/docs/Configuration/RelDownload)**.

Match the file to your device family (`cy-rcp`, `cy-rio`, `cy-nio`, `cy-vp4`) and check the
serial-number notes on that page: the earliest `cy-rio-15-*` and `cy-nio-22-*` units take a
different image from later ones.

## RCP-J joystick after update or downgrade

:::note
After a system update, the RCP-J joystick may stay on **Waiting for connection**. This happens when the update changes the internal network compared to the previous version.

To recover the connection, force the joystick bootloader — see [Iris joystick — Force bootloader](/docs/reference/manuals/iris-joystick#force-bootloader).

Apply the same procedure after downgrading an RCP-J to a version older than **26.4.1**.
:::
