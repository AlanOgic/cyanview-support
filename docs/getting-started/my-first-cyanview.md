---
id: my-first-cyanview
title: "Set up your first Cyanview system"
sidebar_label: My first Cyanview
description: "From unboxing to your first camera: wire and power your devices, reach the web interface, update the firmware, and add a serial or IP camera."
keywords: [cyanview, first setup, quick start, unboxing, wiring, PoE, IP address, mDNS, web UI, firmware update, RCP, RIO, CI0, camera configuration]
slug: /getting-started/my-first-cyanview
---

# Set up your first Cyanview system

You just unboxed your Cyanview equipment. This guide takes you from a box of powered-off hardware to a camera you can control, in five steps:

1. Wire and power your devices
2. Open the web interface
3. Put the device on your production network
4. Update the firmware
5. Add your first camera

Follow them in order. Updating comes before configuring on purpose — a system update does not restore your configuration automatically, so it costs nothing to update an empty device and an evening to update a configured one.

## Before you start

You need:

- Your Cyanview devices and their power supplies
- An Ethernet switch, ideally one with Power over Ethernet (PoE)
- A computer with a browser — there is no software to install
- Your camera, plus the right cable for a serial camera (see the [cable catalog](/docs/resources/cable-catalog))

### How each device is powered

| Device | Power |
|---|---|
| **RCP** — Remote Control Panel | PoE (802.3af), or 12V DC (9V to 24V) |
| **CI0** — Camera Interface | PoE+ (802.3af/at), or 12V 2A DC |
| **RIO** — Remote I/O gateway | **Not PoE.** 12V DC (10V to 24V) |
| **VP4** — Video Processor | See the [VP4 manual](/docs/reference/manuals/vp4-manual) |
| **NIO** — Network I/O | See the [NIO manual](/docs/reference/manuals/nio-manual) |

:::caution
The RIO passes its input voltage straight through to the camera port. If you power a RIO from a battery, confirm your camera accepts that voltage first. Camera consumption must stay under 12W per port.
:::

## Step 1: Wire and power your devices

Every Cyanview device connects over Ethernet. Put your devices, your cameras and your computer on the same switch.

![Management computer, Cyanview devices and controlled cameras on one switch, with a modem for internet access](/img/diagrams/IP-Configuration-Basics-connections-requirement@2x-8.png)

## Step 2: Open the web interface

### Find the device's address

**Read it off the device.** The RCP prints everything you need on its boot screen: an mDNS hostname, its IP address, and a QR code.

![RCP boot screen listing the configuration interface hostname, the device IP address, the serial number and a QR code](/img/Configuration/Quick_Start/RCP_IP_Address.png)

If the boot screen has already gone, open **Menu** → **System** → **Info**.

On the RIO, press the left and right arrows on the front panel to cycle through the menus until the address appears.

![RIO front panel display showing the device IP address and subnet mask](/img/Configuration/Quick_Start/RIO_IP_Address.png)

:::caution
Ignore the **Firmware IP Address** on the RCP info screen. It is an internal address that does not reach the web interface. Use the **IP Address** or **DHCP Address**.
:::

**Work it out from the serial number.** Every device ships with a default address derived from its serial: `10.192.x.y`, mask `255.255.0.0`, where `x` and `y` are the last two numbers of the serial.

| Serial number | Default address |
|---|---|
| `cy-rcp-18-4` — an RCP, batch 18, device 4 | `10.192.18.4` |
| `cy-rio-15-151` — a RIO | `10.192.15.151` |
| `cy-vp4-14-35` — a VP4 | `10.192.14.35` |
| `cy-nio-22-63` — a NIO | `10.192.22.63` |

### Reach it from your computer

Your computer needs a route to the device. Two ways:

- **By hostname.** If your network has a DHCP server with mDNS (Bonjour) support, open `http://cy-rcp-18-4.local` and you are done — nothing to reconfigure on your computer.
- **By IP.** Otherwise, join the device's factory network: give your computer a static IP in the `10.192.0.0/16` range, for example `10.192.0.1` with mask `255.255.0.0`. The [IP primer](/docs/reference/troubleshooting/ip-primer) covers Windows, macOS and Linux.

Enter the address in a browser. The configuration interface loads straight away.

:::note
The CI0 has no web interface of its own, only a small LCD status screen. You configure a CI0 and its cameras entirely from the RCP — see [step 5](#step-5-add-your-first-camera).
:::

## Step 3: Put the device on your production network

Skip this step if your cameras and computer already sit on the factory `10.192.x.y` network.

Your production network almost certainly uses a different range. Rather than renumber anything, add a second IP address to the device:

1. Open **Configuration** > **IP Connections**
2. In the **LAN connections** block, click **+**
3. Select **LAN1**
4. Enter your production IP address and subnet mask

![IP connections panel with the LAN connections block and its add button](/img/Configuration/Network/Network-IP-block.png)

![LAN connection form with the IP address and subnet mask fields filled in](/img/Configuration/Network/Network-RCP-LAN-non-persist.png)

The factory `10.192.x.y` address stays permanently — you cannot remove it. Your device now answers on both addresses, and you can add several IPs on one interface to work across subnets at once.

:::tip Persistent or volatile?
Tick **persist** and the address survives configuration resets and system updates — what you want for a fixed production address. Leave it unticked for a temporary address, such as reaching cameras on another subnet without renumbering them. A full factory reset clears both kinds.
:::

## Step 4: Update the firmware

Update now, before you invest time in configuration. Two kinds exist:

- **Application update** — upgrades the software only. Your configuration is restored afterwards. The device needs internet access.
- **System update** — replaces the whole filesystem, including the operating system. It runs offline and takes about 15 minutes. Your configuration is not restored automatically, but the device writes a backup labelled `Snapshot @ SWUPDATE` before upgrading, which you restore from the **File** section.

Either way, [back up your configuration](/docs/reference/manuals/rcp/web-ui#file) first, then follow the [update guide](/docs/reference/product-update).

## Step 5: Add your first camera

### Where to configure it

How the camera connects decides which device hosts it:

| Connection | Configure on |
|---|---|
| IP (Ethernet) | RCP, or RIO |
| Serial (Sony 8-pin, LANC, VISCA) | RIO, or RCP when the camera is wired to a CI0 |
| USB (Sony Alpha, Canon R5) | RIO |
| Wireless | RIO with a [Wi-Fi dongle](/docs/guides/networking/wifi-usb) |

The CI0 is a serial-only bridge: it converts Ethernet data from the RCP into serial signals for the cameras wired to it. Because it has no web interface, you add its cameras on the RCP and pick the CI0 serial port as the connection.

:::info CI0 or RIO?
The RIO adds a web interface, its own USB and IP handling, and autonomous operation — it keeps controlling your cameras even when the link to the RCP drops. The CI0 is the lightweight option when all you need is serial connectivity.
:::

### Add the camera

The first four steps are the same wherever the camera is connected. Only the last one differs.

1. Open the web interface of the device that hosts the camera

2. Click **+** to add a camera

   ![Web interface with the add camera button highlighted](/img/Configuration/Quick_Start/Quick_Start_Addcamera.png)

3. In **General**, enter a camera **number** and **name**

   ![General section of the camera form with the number and name fields](/img/Configuration/Quick_Start/Quick_Start_GeneralName.png)

4. Select the camera's **manufacturer** and **model**

5. Point the entry at the camera:
   - **Serial** — assign the serial port the camera is wired to
   - **IP** — enter the camera's IP address

Finish with the model-specific settings in your camera's [integration guide](/docs/integrations).

#### Serial cameras

![Network diagram of a serial camera on a CI0 controlled from an RCP](/img/diagrams/cyanview-Serial-camera-configuration-Network-CI0-RCP-2@2x-8.png)

You need a [CI0](/docs/products/ci0) or a [RIO](/docs/products/rio), an RCP, and the cable for your camera. Full instructions: [serial camera guide](/docs/integrations/generic/serial-camera).

#### IP cameras

![Network diagram of an IP camera controlled directly from an RCP](/img/productGfx/RCP/cyanview-configuration-RCP-web-gui-page-Add-IP-network-overview@2x-8.png)

An RCP and the camera on a reachable subnet are enough. Full instructions: [IP camera guide](/docs/integrations/generic/ip-camera).

:::note
Some IP cameras need a username and password. Check your camera's documentation for the default credentials before you start.
:::

### Verify the connection

A **green** camera icon in the web interface means the camera is detected and communicating. A **red** icon means communication failed — check the wiring and the port assignment, and confirm that an IP camera shares a subnet with the RCP (see [step 3](#step-3-put-the-device-on-your-production-network)).

On the CI0 front screen:

- **Bold** camera number, for example **01** — the camera is active and communicating
- Small camera number, for example 01 — the CI0 received its configuration from the RCP but cannot reach the camera

![CI0 LCD status screen showing camera numbers for both ports](/img/productGfx/CI0/cyanview-Serial-camera-configuration-status-screen-CI0-RCP-1.png)

## What to do next

**Bring a RIO's cameras into your RCP.** Cameras on a RIO reach an RCP through [REMI](/docs/guides/networking/remi) (Remote Integration Model), on a local network or across the internet. Set the same tag on both devices, then import the cameras you want.

:::warning
The REMI tag is case-sensitive, and it works like a password: anyone who knows it can reach and control your configuration. Choose something unique and non-obvious.
:::

:::note
A NIO does not use REMI. It is discovered automatically when it shares a switch with the RCP.
:::

**Set up your cameras.** Find your brand in the [integrations](/docs/integrations) section for model-specific instructions.

**Configure tally.** Route tally between your switcher and your cameras, over GPIO or over the network. See the [tally guide](/docs/guides/tally/tally).

**Integrate with your switcher or router.** Sync RCP camera selection with an auxiliary output and take tally back in. See the [router guide](/docs/integrations/generic/routers).

**Control color correctors.** Pair a standalone color corrector with a camera head, or drive it on its own. See the [color corrector guide](/docs/integrations/generic/color-corrector).

Still stuck? Read the [FAQ](/docs/reference/faq), work through the [troubleshooting guide](/docs/reference/troubleshooting/troubleshooting), or email **support@cyanview.com**.
