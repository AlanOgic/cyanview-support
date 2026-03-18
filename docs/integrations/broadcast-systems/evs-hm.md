---
id: evs-hm
title: "EVS integration"
sidebar_label: "EVS"
description: "Integrate EVS replay and highlight systems with Cyanview for coordinated camera and replay control."
keywords: [EVS, replay, highlight, broadcast, integration]
slug: /integrations/broadcast-systems/evs-hm
---

## Overview

:::note
This guide assumes that you have a compatible slow motion camera (Atom SSM500, Phantom, ...) already configured on your RCP.
:::

:::note
For extended information about the EVS configuration and operation, please refer to the EVS documentation available [here](https://download-area.evs.com/en/download-area-version/3499).
:::

## Configuration

> To integrate the EVS to the Cyanview RCP, the RCP will be configured as an hypermotion camera into the EVS.
> That will allow the RCP to perform all the protocols conversion to abstract the camera origins and compatibility from the EVS.

> At first we need all the devices to connect to each other via the network.
> to do so, we need to check the EVS IP and apply it to the Cyanview RCP.

[step 1] Connect to the EVS Web UI and open the Server TAB. 

<img alt="cyanview-support-integration-evs-Hypermotion-configuration-server-gui-IP" src="/img/Integrations/EVS/cyanview-support-integration-evs-Hypermotion-configuration-server-gui-IP.png"  width="700" />

[step 2] Check the Configured PC LAN address.

<img alt="cyanview-support-integration-evs-Hypermotion-configuration-server-gui-IP-details" src="/img/Integrations/EVS/cyanview-support-integration-evs-Hypermotion-configuration-server-gui-IP-details.png"  width="500" />

[step 3] Access the [Configuration page](/docs/Manuals/RCP/ConfWebUI#configuration) of the RCP [Configuration Web UI](/docs/Configuration/ConfIP#lan-web-ui-access).

[step 4] Click the IP Connection panel

[step 5] Add a new IP to the RCP interface.

[step 6] Click the <strong>+</strong> (plus) button to add a new IP address.
Chose <strong>Static</strong> and specify the <strong>IP Address</strong> and the <strong>IP Mask</strong>.

<img alt="cyanview-support-integration-evs-Hypermotion-EVS-Add-IP" src="/img/Integrations/EVS/EVS-Add-IP.png"  width="400" />

The devices can now "see" each other in the network. Configure the RCP as a Hypermotion Camera in the EVS.

[step 1] Connect to the EVS Web UI and open the Operator TAB.
<img alt="cyanview-support-integration-evs-Hypermotion-Operation" src="/img/Integrations/EVS/cyanview-support-integration-evs-Hypermotion-Operation.png"  width="600" />

[step 2] Scroll to the Hypermotion Camera section.

[step 3] Set the following parameters:

<img alt="cyanview-support-integration-evs-Hypermotion-Operation-control" src="/img/Integrations/EVS/cyanview-support-integration-evs-Hypermotion-Operation-control.png" width="600" />

 - Port: should be the **Lan PC**
 - Protocol: **7115**
 - IP adress: **RCP's new IP**

[step 4]  Click Apply
