---
id: lawo-vsm
title: "Lawo VSM integration"
sidebar_label: "Lawo VSM"
description: "Connect Cyanview with Lawo VSM broadcast control system for centralized studio management and tally routing."
keywords: [Lawo, VSM, broadcast control, studio, tally]
slug: /integrations/broadcast-systems/lawo-vsm
---

> This manual will walk you trough the integration of a **Cyanview RCP** as a *control system* in a Lawo [VSM IP broadcast control and workflow solution](https://lawo.com/vsm/) using **pro-bel** protocol.

## VSM configuration

- [step 1] Create a new Virtual Layer for automation.
- [step 2] Click the ‘Automation Entry Point’.

 <img alt="cyanview-support-RCP-VSM-Automation-Entry-Point" src="/img/Integrations/VSM/RCP-VSM-Automation-Entry-Point.png"  width="500"/>

- [step 3] Add the virtual layer in the matrix, assign cameras and router outputs (monitors).

 <img alt="cyanview-support-RCP-VSM-Add-virtual-layer" src="/img/Integrations/VSM/RCP-VSM-Add-virtual-layer.png"  width="500"/>

- [step 4] Create a new port X-Switches / pro-bel / SW-P-08.

 <img alt="cyanview-support-RCP-VSM-Create-new-port" src="/img/Integrations/VSM/RCP-VSM-Create-new-port.png"  width="500"/>

- [step 5] Choose TCP - Inbound, assign a port number.

 <img alt="cyanview-support-RCP-VSM-Set-TCP-inbound-assign-port-number" src="/img/Integrations/VSM/RCP-VSM-Set-TCP-inbound-assign-port-number.png"  width="500"/>

- [step 6] In the layer assignment section, assign the virtual layer created above and select “The
attached device is a control system” in order to enable bi-directional control.

 <img alt="cyanview-support-RCP-VSM-Layer-assignment" src="/img/Integrations/VSM/RCP-VSM-Layer-assignment.png"  width="500"/>

## RCP / GWY Configuration

- [step 1] If a different network is used for VSM, [add an IP address](/docs/guides/networking/ip-configuration#lan-configuration) to the RCP.

- [step 2] Add a [pro-bel Router](/docs/integrations/generic/routers) module from the Components section .

 <img alt="cyanview-support-RCP-VSM-Add-Probel" src="/img/Integrations/VSM/RCP-VSM-Add-Probel.png"  width="500"/>

- [step 3] Set the IP address of the VSM server and port number that was created above, then
assign cameras and monitors.

 <img alt="cyanview-support-RCP-VSM-Set-TCP-inbound-assign-port-number" src="/img/Integrations/VSM/RCP-VSM-Set-TCP-inbound-assign-port-number.png" width="500"/>
