---
id: ip-camera
title: "IP camera integration"
sidebar_label: "IP cameras"
description: "Connect IP-enabled cameras directly to your RCP over Ethernet. Control Panasonic PTZ, Sony FX9, Canon C300, and other networked cameras."
keywords: [IP camera, Ethernet, PTZ, direct connection, RCP]
slug: /integrations/generic/ip-camera
---

## Overview

<img alt="cyanview-IP-camera-configuration-RCP-overview" src="/img/productGfx/RCP/cyanview-IP-camera-configuration-RCP-overview@2x-8.png" width="700" />

The RCP provides direct control of cameras over IP networks.

## Prerequisites

* **PoE Network Switch**: RCP is PoE compatible and the easiest way to get started is to use a PoE switch. Inexpensive models from Netgear, Ubiquity, TPC Link, etc. are perfectly fine. Without a PoE switch, 12V power supplies with locking plugs can be ordered separately (they are not included in the default package). Regular DC 12V power adapters can also be used.

* **Computer**: required to access the web configuration of the RCP.

## Connection Setup

[step 1] Connect the RCP and your computer to the PoE switch. For software update, connect the switch to your internet access.

<img alt="cyanview-IP-camera-configuration-RCP-connection-internet-access" src="/img/productGfx/RCP/cyanview-IP-camera-configuration-RCP-connection-internet-access@2x-8.png" width="700" />

[step 2] Connect the camera to the PoE switch. Follow the *Integrations* section for details about your camera setup.

## RCP configuration

[step 1] Access the RCP [Configuration Web UI](/docs/guides/networking/ip-configuration#lan-web-ui-access).

The following diagram shows a static configuration for an RCP with serial `CY-RCP-18-34`.

<img alt="cyanview-IP-camera-configuration-RCP-network" src="/img/diagrams/cyanview-IP-camera-configuration-RCP-network@2x-8.png" width="700" />

You should get access to the following page.

<img alt="cyanview-IP-camera-configuration-web-gui-page-RCP" src="/img/productGfx/config/cyanview-IP-camera-configuration-web-gui-page-RCP.png" width="600" />

[step 2] Add camera: click the `+` button on the top right of the camera section. New camera properties appear in the right sidebar. Fill-in these fields:

  * **Number**: camera number displayed on the RCP
  * **Name**: camera name displayed on the RCP
  * **Camera Head Model**: Select your camera make and model from the list. An interface section will appear.
  * **IP Address**: Add the default IP address of your camera.


<video poster="/img/productGfx/RCP/cyanview-configuration-RCP-web-gui-page-Add-camera-IP.png" muted controls>
    <source src="/img/productGfx/RCP/cyanview-configuration-RCP-web-gui-page-Add-camera-IP.mp4"/>
</video>

[step 3] Add an IP to RCP.

Add an IP in the range of your camera's IP.

 **Note:** For now, Cyanview devices only support *CIDR* (/16, /24, ...) entry type. Please refer to [this page](https://docs.netgate.com/pfsense/en/latest/network/cidr.html) for CIDR explanations.


<video poster="/img/productGfx/RCP/cyanview-configuration-RCP-web-gui-page-Add-IP-static.png" muted controls>
    <source src="/img/productGfx/RCP/cyanview-configuration-RCP-web-gui-page-Add-IP-static.mp4"/>
</video>

 * **Camera**   ip 10.10.115.1 mask 255.255.255.0
 * **RCP**  ip 10.10.155.2 mask 255.255.255.0

<img alt="cyanview-configuration-RCP-web-gui-page-Add-IP-network-overview" src="/img/productGfx/RCP/cyanview-configuration-RCP-web-gui-page-Add-IP-network-overview@2x-8.png" width="700" />

[step 4] Checking if the camera is properly connected.

  * The camera icon in the web inteface will turn green when the camera has been detected and configured.

  * The camera icon on the RCP turns green, indicating that the camera is properly controlled. The icon stays red if communication with the camera can't be established.

<img alt="cyanview-configuration-RCP-screen-IP-camera-online" src="/img/productGfx/RCP/cyanview-configuration-RCP-screen-IP-camera-online.png" width="300" />


## Operation

The RCP should now be operational. A few tips to get started:

* The top row of buttons selects the top menu of the main LCD
* The bottom row selects the submenus which are the second row of labels on the LCD
* The paint menu can be cycled between OFF -> PAINT 1 -> PAINT 2
* The `Menu` button shows some status pages including the IP Address received by DHCP
* The left/right arrows on the bottom of the page cycle between cameras

Refer to the **RCP Manual**.


## Software update

We deliver product updates continuously so it is a good idea to get your system up to date at this point. For this, connect the switch to an internet access, a modem, or a 4G access point.

<img alt="cyanview-support-camera-configuration-RCP-software-update-network" src="/img/diagrams/cyanview-support-camera-configuration-RCP-software-update-network.png" width="700" />

Once the RCP has internet access, it will list the available releases in the `Admin` tab of the web interface. Clicking on `Download Latest` will refresh the list. Simply click `Select and start` on the latest release to activate it: the release name indicates the release date: `20(year).11(month).1(number)`. The update takes roughly 30 seconds and will automatically upgrade your configuration.

<img alt="cyanview-support-camera-configuration-RCP-Web-GUI-release-list" src="/img/productGfx/config/cyanview-support-camera-configuration-RCP-Web-GUI-release-list.png" width="600" />

This does update the software running on the RCP but doesn't update the full system. Refer to the [Update Manual](/docs/reference/product-update) for more information on keeping the full system up to date.
