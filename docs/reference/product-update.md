---
id: product-update
title: "Firmware update guide"
sidebar_label: "Product update"
description: "Update your Cyanview devices to the latest firmware. Step-by-step instructions for RCP, RIO, CI0, VP4, and NIO."
keywords: [firmware, update, upgrade, latest version]
slug: /reference/product-update
---

Cyanview provides two types of updates: **application updates** and **system updates**.

- **Application update** — Upgrades the main software only. The device must have internet access. Your configuration is restored after the update. This option is unavailable when a system-level change is required; in that case, a system update is mandatory.
- **System update** — Updates the complete filesystem including the OS, libraries, and applications. You can apply it offline. It takes about 15 minutes. Your previous configuration is not restored automatically, but a backup labeled "Snapshot @ SWUPDATE" is created before the upgrade. You can restore it manually from the **File** section of the web interface.

The CI0 and first-generation RCP (serials CY-RCP-11-xx) update automatically. They receive their firmware from the RCP, RIO, or GWY they are connected to.

## Back up your configuration

Always back up your setup before updating. Follow the [backup guide](/docs/reference/manuals/rcp/web-ui#file) so you can restore your configuration if needed.

## Application update

1. Ensure the device has **internet** access. Check the [Connectivity check block](/docs/reference/manuals/rcp/web-ui#admin) — all items should be green.
2. Open your device's [web interface](/docs/guides/networking/ip-configuration#find-your-devices-ip).
3. Click the **Admin** tab and wait for the list of available versions to appear.
4. Click `Select and start` next to the release you want, then wait a few minutes.

![Available firmware releases list in the Admin tab](/img/productGfx/RCP/cyanview-support-manual-update-firmware-application-available-releases.png)

5. The selected release turns green when the update completes.

![Firmware update completed — selected release shown in green](/img/productGfx/RCP/cyanview-support-manual-update-firmware-application-running-executed-releases.png)

Your RCP application is now updated.

By default, only stable releases appear. To see beta versions, click **Show dev releases** in the top-right corner of the Admin tab.

![Show dev releases toggle button in Admin tab](/img/productGfx/RCP/cyanview-dev-button.png)

## System update

### System update from the web interface

:::warning Keep the update tab active
Keep the update tab open and visible in the foreground until the update completes. Some browsers unload inactive tabs, and an unloaded tab can make the update fail.
:::

1. Download the latest system update from the [Firmware download](/docs/reference/firmware-download) page.
2. Open the update UI:
   - [Find your device IP](/docs/guides/networking/ip-configuration#find-your-devices-ip).
   - Navigate to `http://10.192.XX.YY:8080` (note port 8080).

   ![SWUpdate page showing hardware type and current OS version](/img/productGfx/RCP/cyanview-swupdate-page.png)

   This page shows:
   - **HW** — hardware type and revision (e.g., `cy-rcp`)
   - **Operating System** — current firmware version (e.g., `21.5.1rc18`)

3. Drag and drop the downloaded `.swu` file into the Software Update section.

   ![SWUpdate page with firmware upload in progress](/img/productGfx/RCP/cyanview-swupdate-running.png)

4. Keep the tab open and wait — the process takes about 15 minutes.
5. The device reboots when the update completes.

   ![SWUpdate page showing update completed successfully](/img/productGfx/RCP/cyanview-swupdate-done.png)

6. Refresh the page and verify the **Operating System** value matches the version in your `.swu` filename.

   For example: if you started at `21.5.1rc18` and upgraded to `21.5.1rc19`, you should see `21.5.1rc18` in step 2 and `21.5.1rc19` after the update.
