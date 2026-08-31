---
id: remi
title: "REMI remote production"
sidebar_label: "REMI"
description: "Set up REMI remote production with Cyanview. Control cameras from anywhere over the internet using RIO +WAN gateways and the Cyanview cloud."
keywords: [REMI, remote production, cloud, RIO +WAN, internet, camera control, REMI tag, manual IP, broadcast, connectivity check, Cyanview]
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

Cloud REMI is available on **RCP** and **RIO +WAN** devices. It is included at no charge, with no data caps and no time limits.

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

**Example:** connect a Sony FX3 to the RIO over USB and a 4G dongle to the RIO. The RIO reaches the RCP over the cellular link, and the FX3 is shaded wirelessly from any location.

:::note
The RIO +WAN supports up to 128 cameras and includes cloud access for control from any location.
:::

### RCP-to-RCP workflow

<img src="/img/Configuration/REMI/remi-rcp.png" width="600" alt="RCP-to-RCP REMI wiring diagram" />

Use RCP-to-RCP sharing for:
- Controlling the same camera from multiple locations (LAN — from the truck and another desk)
- Controlling cameras across different venues (WAN — over the internet)

### Multi-site RCP over WAN

<img src="/img/Configuration/REMI/RCP_WAN.png" width="600" alt="Several RCPs in a central MCR controlling remote sites over WAN" />

Use this when several RCPs sit in a central MCR and you need to reach cameras — or other RCPs — at remote sites. The REMI tag links them across the WAN.

### RIO fronting IP cameras over WAN

<img src="/img/Configuration/REMI/RCP_WAN_LAN.png" width="600" alt="RCP connecting over WAN to a RIO that controls IP cameras on its own LAN" />

Use this when several IP cameras sit at a remote location while the RCPs stay in a local MCR. The RCPs connect to the RIO over the WAN, and the RIO talks to the cameras on its own LAN.

Control traffic stays between the RIO and the cameras on the local link, so WAN latency never reaches them.

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

### Manual IP mode (when broadcast is blocked)

REMI discovers devices by broadcasting the tag across the local network. Some networks drop broadcast traffic — wireless IP mesh is the common case, where the radios block it — so devices that share a tag never find each other. When that happens, add the remote device by its IP address instead.

1. Click the three dots on the **REMI** settings:

<img src="/img/Configuration/Quick_Start/RIO_Advanced_REMI.png" width="368" alt="Three-dot menu on the REMI settings panel" />

2. Click **Advanced Mode**. A **Manual IP** section appears:

<img src="/img/Configuration/Quick_Start/RIO_REMI_Manual_IP.png" width="368" alt="Manual IP section shown in REMI advanced mode" />

3. Enter the RIO's IP address and click **+**:

<img src="/img/Configuration/Quick_Start/RIO_REMI_Manual_IP2.png" width="368" alt="RIO IP address added to the REMI manual IP list" />

Once the address is listed, import cameras exactly as described below.

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

## Troubleshooting

### The cloud icon is red

A red cloud icon in the **REMI** tab means the device has no connection to the Cyanview cloud. Check the device's internet connection, then open the **Admin** page and scroll down to the connectivity check:

<img src="/img/Configuration/REMI/Remote_Connectivity_check.png" width="600" alt="Connectivity check on the Admin page" />

Every check must be green before REMI over the internet will work.

### The device is online but no REMI devices appear

Check which cloud server the device is using — if you operate in the US, you need to change it.

Open the **REMI** tab, activate the advanced menu (three dots, top right), and select the server:

<img src="/img/Configuration/REMI/US_Server_REMI.png" width="383" alt="Cloud server selection in the REMI advanced menu" />
