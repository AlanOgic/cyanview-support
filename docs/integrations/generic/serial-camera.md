---
id: serial-camera
title: "Serial camera integration"
sidebar_label: "Serial cameras"
description: "Connect Sony 8-pin, LANC, and VISCA serial cameras to your Cyanview system through a CI0 or RIO gateway for full remote control."
keywords: [serial camera, Sony 8-pin, LANC, VISCA, CI0, RIO]
slug: /integrations/generic/serial-camera
---

## Overview

<img alt="cyanview-Serial-camera-configuration-workflow-CI0-RCP" src="/img/diagrams/cyanview-Serial-camera-configuration-workflow-CI0-RCP@2x-8.png" width="800" />

The CI0 interface is used to control serial cameras over IP networks from your RCP.


## Prerequisites

* **PoE Network Switch**: both CI0 and RCP are PoE compatible and the easiest way to get started is to use a PoE switch. Inexpensive models from Netgear, Ubiquity, TPC Link, etc. are perfectly fine. Without a PoE switch, 12V power supplies with locking plugs can be ordered separately (they are not included in the default package). Regular DC 12V power adapters can also be used.

* **Camera Cable**: we provide various cables to connect any of the supported cameras to your CI0. All pinouts are published if you prefer to make your own cables: [CI0 cable pinouts](/docs/Accessories/CableCatalog)

* **Computer**: required to access the web configuration of the RCP.


## Connection Setup

[ 1] Connect the RCP, the CI0 and your computer to the PoE switch. For software update, connect the switch to your internet access.

<img alt="cyanview-Serial-camera-configuration-connection-CI0-RCP" src="/img/diagrams/cyanview-Serial-camera-configuration-connection-CI0-RCP@2x-8.png" width="700" />

[ 2] Check the CI0 network status on the LCD. Once the CI0 discovers the RCP, it should indicate this sign: `>-<`. This means that the RCP is reachable but the CI0 isn't part of the configuration yet.

<img alt="cyanview-Serial-camera-configuration-status-screen-CI0-RCP-3" src="/img/productGfx/CI0/cyanview-Serial-camera-configuration-status-screen-CI0-RCP-3.png" width="300" />

[ 3] Connect the camera to the right CI0 port. Follow the *Integrations* section for details about your camera setup and cable. A mini-camera can also be directly mounted using the top 1/4" screw using a small flat screwdriver from the bottom of the CI0.

<img alt="cyanview-Serial-camera-RCP-Marshall-CI0-Mounting-2" src="/img/Integrations/camera/marshall/cyanview-Serial-camera-RCP-Marshall-CI0-Mounting-2.png"  width="600" />


## RCP configuration

[ 1] Access the RCP [Configuration Web UI](/docs/Configuration/ConfIP#lan-web-ui-access).

The following diagram shows a static configuration for an RCP with serial `CY-RCP-18-34`.

<img alt="cyanview-Serial-camera-configuration-Network-CI0-RCP" src="/img/diagrams/cyanview-Serial-camera-configuration-Network-CI0-RCP-2@2x-8.png" width="700" />

You should get access to the following page.

<img alt="cyanview-Serial-camera-configuration-web-gui-page-CI0-RCP" src="/img/productGfx/config/cyanview-Serial-camera-configuration-web-gui-page-CI0-RCP.png" width="600" />

[ 2] Add a camera: click the `+` button on the top right of the camera section. New camera properties appear in the right sidebar. Fill-in these fields:

  * **Number**: camera number displayed on the RCP
  * **Name**: camera name displayed on the RCP
  * **Camera Head Model**: Select your camera make and model from the list. An interface section will appear.
  * **Interface Port**: Select your CI0 in the list, the last digit indicates which CI0 connector (1 or 2) the camera is connected to.

<video poster="/img/productGfx/config/cyanview-Serial-camera-configuration-web-gui-Add-CI0-RCP.png" muted controls>
    <source src="/img/productGfx/config/cyanview-Serial-camera-configuration-web-gui-Add-CI0-RCP.mp4"/>
</video>

[ 3] Checking if the camera is properly connected.

  * The camera icon in the web inteface will turn green when the camera has been detected and configured.

  * The CI0 will also display the camera number in bold [D], which indicates that the camera is communicating. If the number is small [C], the CI0 has been configured by the RCP but no communication can be established with the camera. Check the cable, connection and the troubleshooting section of your camera in the *Integrations* section.

<img alt="cyanview-Serial-camera-configuration-status-screen-CI0-RCP-1" src="/img/productGfx/CI0/cyanview-Serial-camera-configuration-status-screen-CI0-RCP-1.png" width="300"/>

  * The camera icon on the RCP turns green, indicating that the camera is properly controlled. The icon stays red if communication with the camera can't be established.

<img alt="cyanview-support-camera-configuration-main-screen-RCP" src="/img/productGfx/RCP/cyanview-support-camera-configuration-main-screen-RCP.png" width="300" />


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

This does update the software running on the RCP but doesn't update the full system. Refer to the [Update Manual](/docs/Manuals/RCP/ProductUpdate) for more information on keeping the full system up to date.
