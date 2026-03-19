---
id: lawo-vsm
title: "Lawo VSM integration"
sidebar_label: "Lawo VSM"
description: "Connect Cyanview with Lawo VSM broadcast control system for centralized studio management and tally routing."
keywords: [Lawo, VSM, broadcast control, studio, tally]
slug: /integrations/broadcast-systems/lawo-vsm
---

This guide walks you through integrating a Cyanview RCP as a control system in a [Lawo VSM IP broadcast control and workflow solution](https://lawo.com/vsm/) using the pro-bel protocol.

## VSM configuration

1. Create a new Virtual Layer for automation.
2. Click the **Automation Entry Point**.

   ![VSM Automation Entry Point](/img/Integrations/VSM/RCP-VSM-Automation-Entry-Point.png)

3. Add the virtual layer in the matrix, then assign cameras and router outputs (monitors).

   ![VSM Add virtual layer](/img/Integrations/VSM/RCP-VSM-Add-virtual-layer.png)

4. Create a new port: `X-Switches > pro-bel > SW-P-08`.

   ![VSM Create new port](/img/Integrations/VSM/RCP-VSM-Create-new-port.png)

5. Choose **TCP - Inbound** and assign a port number.

   ![VSM Set TCP inbound and assign port number](/img/Integrations/VSM/RCP-VSM-Set-TCP-inbound-assign-port-number.png)

6. In the layer assignment section, assign the virtual layer you created and select **The attached device is a control system** to enable bi-directional control.

   ![VSM Layer assignment](/img/Integrations/VSM/RCP-VSM-Layer-assignment.png)

## RCP / GWY configuration

1. If VSM uses a separate network, [add an IP address](/docs/guides/networking/ip-configuration#lan-configuration) to the RCP.

2. Add a [pro-bel Router](/docs/integrations/generic/routers) module from the Components section.

   ![Add pro-bel module](/img/Integrations/VSM/RCP-VSM-Add-Probel.png)

3. Set the VSM server IP address and the port number you created above, then assign cameras and monitors.

   ![Set IP and port, assign cameras and monitors](/img/Integrations/VSM/RCP-VSM-Set-TCP-inbound-assign-port-number.png)
