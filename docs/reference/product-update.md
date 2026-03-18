---
id: product-update
title: "Firmware update guide"
sidebar_label: "Product update"
description: "Update your Cyanview devices to the latest firmware. Step-by-step instructions for RCP, RIO, CI0, VP4, and NIO."
keywords: [firmware, update, upgrade, latest version]
slug: /reference/product-update
---

Cyanview provides 2 types of updates: **Application updates** and **System Updates**.

- The **Application update** is a quick way to upgrade the main software only:
    * The device has to be connected on the internet
    * Your configuration is loaded back after the update
    * This is only possible when the application can be updated without requiring update of the file system libraries. This option is disabled otherwise and a **system update** is required.
- The **System update** is an update of the complete filesystem: OS, libraries and applications
    * This can be applied offline
    * It is slower and takes about 15 minutes
    * The previous configuration is not loaded back but an automatic backup is made prior to the upgrade. The configuration can be restored manually from the "File" section of the web interface and is labeled "Snapshot @ SWUPDATE".

The CI0 and the first generation of RCP (serials CY-RCP-11-xx) are not updated "manually", they will automatically get their firmware from the RCP, RIO or GWY that they are connected to.

## Backup your configuration

It is always a good idea to do a backup of your setup following this [guide](/docs/reference/manuals/rcp/web-ui#file). It will allows you to get back your configuration later if needed.


## Application update

1. Make sure the device has **internet** access. Check the [Connectivity check block](/docs/reference/manuals/rcp/web-ui#admin), everything should be green
2. Access your device [web interface](/docs/guides/networking/ip-configuration#find-devices-ip)
3. Click the **Admin** TAB wait until the list of available version are displayed.
4. Click `Select and start` button of the release you want to upgrade to, wait a couple of minutes

<img alt="cyanview-support-manual-update-firmware-application-available-releases" src="/img/productGfx/RCP/cyanview-support-manual-update-firmware-application-available-releases.png" width="600"/>

6. After a few seconds, the release you selected will turn green.

<img alt="cyanview-support-manual-update-firmware-application-running-executed-releases" src="/img/productGfx/RCP/cyanview-support-manual-update-firmware-application-running-executed-releases.png" width="600"/>

7. Your RCP Application is now updated

By default, only stable releases are displayed.
If you want to test beta version, you need to enable it by clicking on the top right button in the admin tab ***Show dev releases**

<img alt="cyanview-dev-button" src="/img/productGfx/RCP/cyanview-dev-button.png" width="600" />


Once activated, you will see all releases (stable and beta).

## System update


The **System Update** can be performed from a separate web interface


### System Update from the web interface

1. Download the latest system update from the [Release Download](/docs/reference/firmware-download) page.
2. Open the update UI :
    * [Find your device IP](/docs/guides/networking/ip-configuration#find-devices-ip)
    * Base on previous link, navigate to http://10.192.XX.YY:8080 (pay attention to port 8080)
    <img alt="cyanview-swupdate-page" src="/img/productGfx/RCP/cyanview-swupdate-page.png" width="600" />
    * You can see on this page some usefull informations:
        - **HW** : this is the type of hardware and revision (here **cy-rcp**)
        - **Operating System** : this is the actual version of your device (here **21.5.1rc18**)
3. Drag and drop the downloaded .swu file into the Software Update section of the page.
    <img alt="cyanview-swupdate-page" src="/img/productGfx/RCP/cyanview-swupdate-running.png" width="600" />
4. Don't close this tab and wait (takes around 15 minutes).
5. After the update is completed, the device will reboot
    <img alt="cyanview-swupdate-page" src="/img/productGfx/RCP/cyanview-swupdate-done.png" width="600" />
6. You can refresh the page if required and check **Operating System** value, it should be the same as the one in your SWU file name.
7. Based on this example:
    * I upgraded from 21.5.1rc18 to 21.5.1rc19
    * I should see 21.5.1rc18 in step 1 and 21.5.1rc19 in step 6

<!-- ### System Update from USB key

:::warning
This requires a base system with minimum **21.10.3**
:::

1. Format a USB key in FAT (instructions for [Windows](https://www.windowscentral.com/how-format-usb-flash-drive-windows-10) and [Mac OS X](https://www.techsolutions.support.com/how-to/how-to-format-a-usb-drive-on-a-mac-12899) )
2. Download the **SWU** file for your device [here](/docs/reference/firmware-download).
3. Put the file on your USB key
4. Insert the USB key in your device (RCP, RIO, VP4) and wait 15 minutes until your device reboots in the new version.

You can check that the update was successful by pluging the USB key back in your computer, you will find:
* the **SWU** file you downloaded
* the same filename (empty content) with a new extension : `YOUR-DEVICE-SERIAL.done`
* `cmd_logs.YOUR-DEVICE-SERIAL.txt` with the update logs (the last line should contains `Update Successful`)

:::note
You can reuse this USB on multiple devices (to update all your RCP with the same USB key).
::: -->
