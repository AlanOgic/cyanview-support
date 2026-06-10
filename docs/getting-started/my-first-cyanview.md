---
id: my-first-cyanview
title: My first Cyanview
sidebar_label: My first Cyanview
description: "Set up your Cyanview system from unboxing to first camera control. Find device IPs, access the web UI, and configure serial or IP cameras with RCP, RIO, and CI0."
keywords: [cyanview, first setup, unboxing, IP address, web UI, RCP, RIO, CI0, camera configuration]
slug: /getting-started/my-first-cyanview
---

# My first Cyanview

You just unboxed your Cyanview equipment — this guide takes you from powered-off devices to controlling your first camera. You will:

1. Find your device on the network
2. Access the web-based configuration interface
3. Add your first camera

Once you complete these steps, head to the [integrations](/docs/integrations) section for camera-specific setup.

## Find your device's IP address

### RCP / RCP-J

#### Method 1 — read it at boot

The RCP displays its IP address on the front screen during startup.

<!-- TODO: add image /img/Configuration/Quick_Start/RCP_IP_Address.png when available -->

#### Method 2 — check the info screen

Navigate to **Menu** → **System** → **Info** to view the current IP address.

:::caution
Ignore the **Firmware IP Address** — it is an internal address that does not give access to the web interface. Use the **IP Address** or **DHCP Address** instead.
:::

### RIO

Press the left and right arrows on the RIO front panel to cycle through menus until the IP address appears.

## Access the web interface

Your computer must be on the same subnet as the Cyanview device to reach its web interface.

Cyanview devices ship with a default IP in the `10.192.0.0/16` range. Set your computer to a static IP in this range — for example, `10.192.0.1` with subnet mask `255.255.0.0`. The [IP primer](/docs/reference/troubleshooting/ip-primer) explains how to do this on Windows, macOS, and Linux.

:::note
The CI0 has no web interface — you configure it entirely through the RCP. See [configure with a CI0](#configure-with-a-ci0) below.
:::

Open a browser and enter the device's IP address. The configuration interface loads directly — no software to install.

## Add a production IP address

Your production network almost certainly uses a different IP range than `10.192.x.y`. Add a second IP address so the device can communicate on your network:

1. Open the web interface and select the **Configuration** tab
2. In the **LAN connections** block, click **+**
3. Enter your production IP address and subnet mask

![LAN IP configuration](/img/Configuration/Network/Network-IP-block.png)

![LAN connection settings](/img/Configuration/Network/Network-RCP-LAN-non-persist.png)

The factory `10.192.x.y` address stays permanently — you cannot remove it. Your device now responds on both addresses.

:::tip Persistent vs temporary IPs
Mark an IP as **Persistent** to keep it after a factory reset — ideal for fixed production addresses. Leave it unchecked for temporary addresses, such as when you need to reach cameras on a different subnet without changing their IPs.
:::

You can add multiple IPs on the same interface to communicate across several subnets at once.

## Decide where to configure the camera

Your connection type determines where you add the camera:

| Connection | Configure on |
|---|---|
| IP (Ethernet) | RCP |
| Serial (8-pin, LANC, VISCA) | RIO, or RCP when using a CI0 |
| Wireless | Depends on model — see the [integration guide](/docs/integrations) |

### Add a camera on the RCP or RIO

The process is the same on both devices. On the RCP you set IP addresses; on the RIO you assign serial ports.

1. Click **+** to add a camera

   ![Add camera](/img/Configuration/Quick_Start/Quick_Start_Addcamera.png)

2. In **General**, enter a camera **number** and **name**

   ![Camera name](/img/Configuration/Quick_Start/Quick_Start_GeneralName.png)

3. Complete the setup by following your camera's [integration guide](/docs/integrations)

### Configure with a CI0

The CI0 is a serial-only bridge — it converts Ethernet data from the RCP into serial signals for connected cameras. Unlike the RIO, it has no web interface — only a small LCD status screen.

:::info CI0 vs RIO
The RIO combines a web interface, autonomous processing, and built-in serial ports. The CI0 is a lightweight alternative when you only need serial connectivity.
:::

Because the CI0 has no web interface, you configure it from the RCP:

1. Add a camera on the RCP following the steps above
2. When selecting the connection type, choose the CI0 serial port

## Connect a RIO to the RCP

Use [REMI](/docs/guides/networking/remi) to import cameras from a RIO into your RCP:

1. On the **RIO**, open the **REMI** menu and create a **Tag**
2. On the **RCP**, open the **REMI** menu and enter the same tag

   ![REMI configuration](/img/Configuration/REMI/remi-rcp.png)

3. Once the tags match, the RIO appears in the RCP's REMI list

   ![RIO in REMI menu](/img/Configuration/REMI/remi-remi-imported.png)

4. Enable **Remote Control** for the cameras you want to import — or check it at the top level to import all of them
5. Open the RCP **Configuration** menu — imported cameras display an "Imported" label

   ![Imported cameras](/img/Configuration/REMI/remi-configuration-imported.png)

:::warning
The REMI tag is **case-sensitive**. Treat it like a password — anyone who knows the tag can access and control your configuration. Choose a unique, non-obvious tag.
:::

## Set up a serial camera

This example uses a CI0. The steps are similar with a RIO — see the [RIO documentation](/docs/products/rio) for differences.

![Serial camera network diagram](/img/diagrams/cyanview-Serial-camera-configuration-Network-CI0-RCP-2@2x-8.png)

1. Open the RCP web interface
2. Click **+** to add a camera
3. Enter a camera **number** and **name** in the **General** section
4. Select the camera's **manufacturer** and **model**
5. Assign the CI0 **serial port** the camera is wired to

### Verify the connection

A **green** camera icon in the web interface confirms the camera is detected and communicating. A **red** icon means communication failed — check your wiring and port assignment.

On the CI0 front screen:
- **Bold** camera number (e.g., **01**) — camera is active and communicating
- **Small** camera number (e.g., 01) — CI0 received its configuration from the RCP but cannot reach the camera

![CI0 status screen](/img/productGfx/CI0/cyanview-Serial-camera-configuration-status-screen-CI0-RCP-1.png)

## Set up an IP camera

![IP camera network diagram](/img/productGfx/RCP/cyanview-configuration-RCP-web-gui-page-Add-IP-network-overview@2x-8.png)

1. Open the RCP web interface
2. Click **+** to add a camera
3. Enter a camera **number** and **name** in the **General** section
4. Select the camera's **manufacturer** and **model**
5. Enter the camera's **IP address**

:::note
Some IP cameras require a **username and password**. Check your camera's documentation for default credentials before starting.
:::

A **green** camera icon confirms the connection. If the icon stays **red**, verify that the RCP and camera are on the same subnet — see [add a production IP address](#add-a-production-ip-address) above.

## What to do next

1. **Update your firmware** — always update to the latest version before going into production. Back up your configuration first — updates wipe it. See the [update guide](/docs/reference/product-update).
2. **Set up your cameras** — find your camera brand in the [integrations](/docs/integrations) section for model-specific instructions.
3. **Configure tally** — route tally signals between your switcher and cameras. See the [tally guide](/docs/guides/tally/tally).
4. **Control color correctors** — pair a standalone color corrector with a camera head or control it independently. See the [color corrector guide](/docs/integrations/generic/color-corrector).
5. **Integrate with your switcher** — sync RCP camera selection with router or switcher aux outputs. See the [router guide](/docs/integrations/generic/routers).
