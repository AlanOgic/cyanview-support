---
id: remi
title: "REMI remote production"
sidebar_label: "REMI"
description: "Set up REMI remote production with Cyanview. Control cameras from anywhere over the internet using RIO +WAN gateways and the Cyanview cloud."
keywords: [REMI, remote production, cloud, RIO +WAN, internet, camera control, Cyanview]
slug: /guides/networking/remi
---

REMI (Remote Integration Model) lets you control and share cameras between Cyanview devices from any location — on the same LAN or across the internet. With REMI, a camera configured on one device (RCP or RIO) becomes available to other devices in the same group.

This is how you:
- Import a camera from a **RIO +WAN** into your **RCP** over the internet
- Share cameras between multiple **RCPs** on a local network
- Control cameras from a **RIO +LAN** on your **RCP** over LAN

## How REMI works

REMI uses **tags** (shared group names) to connect devices. Any device with the same tag can see and import cameras from other devices in that group.

**Example:** You have a main RCP (`cy-rcp-25-165`) with several cameras, and you want to control one of them from a second RCP-J (`cy-rcp-18-80`). You set the same REMI tag on both devices, then import the camera on the second RCP.

The same principle applies when importing cameras from a RIO +WAN or RIO +LAN into an RCP. Multiple devices can import the same camera simultaneously.

<video poster="/img/Configuration/REMI/RCP-REMI.png" muted controls>
    <source src="/img/Configuration/REMI/RCP-REMI.mp4"/>
</video>

## Cloud connectivity

Cloud REMI is available on **RCP** and **RIO +WAN** devices. It is included, unlimited, and free of charge.

The Cyanview cloud acts as a rendezvous server — all devices open outgoing connections, so you do not need to configure firewalls or port forwarding.

:::note
If your network requires explicit firewall rules:
- **DNS (dynamic):** remi.cyanview.com
- **DNS (Europe):** 1-eu-west-3.remi.cyanview.com
- **DNS (US):** 1-us-west-2.remi.cyanview.com
- **Port:** 7887
:::

**RIO +LAN** devices do not have cloud access. They can only share cameras on the local network. To upgrade a RIO +LAN to full RIO +WAN with cloud access, purchase a license upgrade.

## Wiring diagrams

### RIO +LAN workflow

<img src="/img/Configuration/REMI/remi-rio-lan.png" width="600" alt="RIO +LAN REMI wiring diagram" />

Use a RIO +LAN for:
- Lens control on a local network
- Wi-Fi camera control
- USB camera control
- Polecam setups

:::note
The RIO +LAN works like a CI0 but supports all protocols (serial, USB, IP — like an RCP). It is limited to 2 cameras and LAN-only control (no cloud).
:::

### RIO +WAN workflow

<img src="/img/Configuration/REMI/remi-rio.png" width="600" alt="RIO +WAN REMI wiring diagram" />

Use a RIO +WAN for:
- Beauty shots with remote control
- Gimbals and Steadicam setups
- Any remote production scenario

:::note
The RIO +WAN supports unlimited cameras and includes cloud access for control from any location.
:::

### RCP-to-RCP workflow

<img src="/img/Configuration/REMI/remi-rcp.png" width="600" alt="RCP-to-RCP REMI wiring diagram" />

Use RCP-to-RCP sharing for:
- Controlling the same camera from multiple locations (LAN — from the truck and another desk)
- Controlling cameras across different venues (WAN — over the internet)

## Configuration

### Step 1: Set up REMI tags

On each device (RCP, RIO +WAN, or RIO +LAN), open the **REMI** tab:

<img src="/img/Configuration/REMI-tab.png" width="300" alt="REMI tab in web UI" />

In the right panel, under **Shared Camera Control**:
1. Enter a tag name in the text box
2. Click **+** to add it

<img src="/img/Configuration/REMI/remi-cloud-status.png" width="300" alt="REMI cloud status and tags" />

The status panel shows:
- **Cloud** — Green icon means your device is connected to the Cyanview cloud
- **Tags** — The list of groups your device belongs to
- **Remote GUI** — Enabled by default, allows remote access to the device's web UI

:::warning
Tags act as passwords. Anyone who knows a tag can connect to your group. Use secure, non-guessable tag names and do not share them with unauthorized users.
:::

:::note
One device can belong to multiple groups simultaneously.
:::

### Step 2: Verify group connectivity

Once all devices share the same tag, you can see the status of every device in your group:

<img src="/img/Configuration/REMI/remi-webpage.png" width="600" alt="REMI group status page" />

The icons indicate:
- **Cloud icon** — Device is reachable via the Cyanview cloud (internet)
- **Ethernet icon** — Device is reachable on the local network

You also see the list of cameras exported by each device.

### Step 3: Access the remote web UI

Click the **cloud** or **IP address** link next to any device to open its web UI remotely.

### Step 4: Import a camera

To import a camera from a RIO into your RCP:

1. Create and configure the camera on your RIO as you would on an RCP:

<img src="/img/Configuration/REMI/remi-rio-cam.png" width="400" alt="Camera configured on RIO" />

2. On your RCP, check the checkbox next to the camera you want to import:

<img src="/img/Configuration/REMI/remi-remi-imported.png" width="600" alt="Import camera checkbox" />

3. The camera now appears in your RCP configuration:

<img src="/img/Configuration/REMI/remi-configuration-imported.png" width="400" alt="Imported camera in RCP" />

By default, the camera keeps the same number and name as on the source device. You can change the number and name on either device — the link persists.

:::note
The same process applies when importing from one RCP to another RCP.
:::

:::tip
You can configure REMI on a LAN/Ethernet connection, then switch to 4G or Wi-Fi — the configuration carries over automatically.
:::

## Advanced: change RIO import/export direction

By default, RIO +WAN and RIO +LAN devices only **export** cameras (making them available to other devices). To also **import** cameras on a RIO:

1. Open the RIO web UI (e.g., `http://10.192.29.108`)
2. Navigate to `/dev/app.html` (e.g., `http://10.192.29.108/dev/app.html`)
3. Find the **Cloud** block and click it:

<img src="/img/Configuration/REMI/REMI-advanced-block.png" width="400" alt="REMI advanced Cloud block" />

4. Edit the **direction** field in the right panel:

<img src="/img/Configuration/REMI/REMI-advanced-setup.png" width="400" alt="REMI direction configuration" />

Available values:
- `exporter` — Export cameras only (default on RIO)
- `importer` — Import cameras only
- `both` — Export and import cameras (default on RCP)
