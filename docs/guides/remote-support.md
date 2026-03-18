---
id: remote-support
title: "Remote support guide"
sidebar_label: "Remote support"
description: "Enable remote support on your Cyanview devices. Let the Cyanview team troubleshoot and diagnose issues remotely."
keywords: [remote support, troubleshooting, diagnostics, help]
slug: /guides/remote-support
---

## Overview

<img alt="cyanview-remote-support-internet-network-configuration-ssh-RCP" src="/img/diagrams/cyanview-remote-support-internet-network-configuration-ssh-RCP@2x-8.png" width="600" />

**Cyanview Devices** must be connected to internet to allow different support activities.

The RCP will connect to *ssh.cyanview.com* on port *22*.

The status of this connection can be verified in the RCP's screen and in the RCP's web UI. 

### RCP Screen 

To verify the **Remote support** status on the RCP screen, see [RCP Network Status](/docs/Manuals/RCP/RCPControls#network) on RCP screen.

     Remote support       Available

If the status is *Not Available*, proceed to the RCP's *Admin* page.

### RCP Admin page

Access the RCP [Configuration Web UI](/docs/Configuration/ConfIP#lan-web-ui-access).
Open [Admin](/docs/Manuals/RCP/ConfWebUI#admin) page in your browser.

<img alt="cyanview-support-RCP-remote-connection-status" src="/img/productGfx/RCP/cyanview-support-RCP-remote-connection-status.png" width="400" />

The **Remote support** section provides a global status of the *remote support* functionality.

If the status is not *Connection OK*, verify the different statuses of the **Connectivity check** section to identify the cause.

When an issue is reported, click the orange **?** to get additional information.

<img alt="RCP-Admin-Connectivity-Check-SSH-Connection-Failure" src="/img/productGfx/RCP/RCP-Admin-Connectivity-Check-SSH-Connection-Failure.png" width="400" />

You can get technical informations on the *Connectivity diagnostic page*. The *Connectivity diagnostic page* is accessible at 
- http://*IP*/dev/connectivity-support.html









