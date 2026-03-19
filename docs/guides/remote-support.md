---
id: remote-support
title: "Remote support guide"
sidebar_label: "Remote support"
description: "Enable remote support on your Cyanview devices. Let the Cyanview team troubleshoot and diagnose issues remotely."
keywords: [remote support, troubleshooting, diagnostics, help]
slug: /guides/remote-support
---

Your RCP must be connected to the internet to enable remote support. Once connected, it establishes an outbound SSH connection to `ssh.cyanview.com` on port `22`, allowing the Cyanview team to diagnose and troubleshoot your setup remotely.

![RCP remote support network diagram](/img/diagrams/cyanview-remote-support-internet-network-configuration-ssh-RCP@2x-8.png)

## Check the connection status

You can verify the remote support status from two places: the RCP screen or the RCP web UI.

### RCP screen

On the RCP screen, navigate to the [Network status section](/docs/reference/manuals/rcp/controls#network). Look for the **Remote support** row:

```
Remote support       Available
```

If the status shows **Not Available**, proceed to the RCP Admin page to investigate.

### RCP Admin page

Open the [Configuration Web UI](/docs/guides/networking/ip-configuration#lan-web-ui-access) and go to the [Admin page](/docs/reference/manuals/rcp/web-ui#admin).

![RCP Admin page showing remote connection status](/img/productGfx/RCP/cyanview-support-RCP-remote-connection-status.png)

The **Remote support** section shows the overall connection status. If it does not read **Connection OK**, check the **Connectivity check** section for details on each step of the connection.

Click the orange **?** next to any failed item to get more information.

![RCP Admin connectivity check failure](/img/productGfx/RCP/RCP-Admin-Connectivity-Check-SSH-Connection-Failure.png)

:::tip
For deeper diagnostics, open the connectivity diagnostic page directly in your browser at `http://<RCP-IP>/dev/connectivity-support.html`.
:::
