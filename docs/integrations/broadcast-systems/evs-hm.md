---
id: evs-hm
title: "EVS integration"
sidebar_label: "EVS"
description: "Integrate EVS replay and highlight systems with Cyanview for coordinated camera and replay control."
keywords: [EVS, replay, highlight, broadcast, integration]
slug: /integrations/broadcast-systems/evs-hm
---

The RCP integrates with EVS as a Hypermotion camera, allowing it to perform protocol conversion and abstract camera origins from the EVS system.

:::note
This guide assumes you already have a compatible slow-motion camera (Atom SSM500, Phantom, etc.) configured on your RCP. For extended EVS configuration details, refer to the [EVS documentation](https://download.evs.com/).
:::

## Configuration

### Network setup

First, align the RCP's IP address with the EVS network.

1. Connect to the EVS Web UI and open the **Server** tab.

   ![EVS server GUI showing IP configuration](/img/Integrations/EVS/cyanview-support-integration-evs-Hypermotion-configuration-server-gui-IP.png)

2. Note the **Configured PC LAN address**.

   ![EVS PC LAN IP address details](/img/Integrations/EVS/cyanview-support-integration-evs-Hypermotion-configuration-server-gui-IP-details.png)

3. Open the [Configuration page](/docs/reference/manuals/rcp/web-ui#configuration) of the RCP [Configuration Web UI](/docs/guides/networking/ip-configuration#lan-web-ui-access).

4. Click the **IP Connection** panel.

5. Click **+** to add a new IP address. Choose **Static** and enter the **IP Address** and **IP Mask** to match the EVS network.

   ![Adding a static IP to the RCP](/img/Integrations/EVS/EVS-Add-IP.png)

The RCP and EVS can now reach each other on the network.

### Hypermotion camera setup

Configure the RCP as a Hypermotion camera in the EVS.

1. Connect to the EVS Web UI and open the **Operator** tab.

   ![EVS Operator tab](/img/Integrations/EVS/cyanview-support-integration-evs-Hypermotion-Operation.png)

2. Scroll to the **Hypermotion Camera** section.

3. Set the following parameters:

   ![EVS Hypermotion camera control settings](/img/Integrations/EVS/cyanview-support-integration-evs-Hypermotion-Operation-control.png)

   - **Port**: set to `Lan PC`
   - **Protocol**: `7115`
   - **IP address**: the new IP you assigned to the RCP

4. Click **Apply**.
