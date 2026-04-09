---
id: blackmagic-haivision
title: "Blackmagic and Haivision workflow"
sidebar_label: "Blackmagic + Haivision"
description: "Combine Blackmagic cameras with Haivision transport for remote production using Cyanview camera control."
keywords: [Blackmagic, Haivision, REMI, remote production]
slug: /guides/workflows/blackmagic-haivision
---

![Blackmagic backpack tracking shot](/img/Workflows/Blackmagic-backpack-track.jpeg)

This guide covers remote control of a wireless Blackmagic URSA G2, used here during an event produced by [AVEO](https://aveo-groupe.fr/), [APR](https://www.apr.org/) and [LENI](https://www.leni.fr/) (France). You'll learn how to configure camera control over SDI, set up the Haivision DataBridge tunnel for REMI, and route tally from an ATEM to the remote camera.

Topics covered:
- Blackmagic URSA G2 camera control
- Haivision integration through their [DataBridge](https://www.haivision.com/glossary/databridge/)
- RIO with RSBM (Blackmagic SDI interface)
- RCP
- Tally input from an ATEM, routed to the remote camera through RCP and RIO

## Backpack setup

![Blackmagic backpack field setup](/img/Workflows/Blackmagic-backpack.jpeg)

The backpack contains:
- The RIO and RSBM (blue boxes), providing camera control and tally output
- The Haivision encoder, encoding video and providing the DataBridge to link RCP/RIO through the Haivision tunnel
- The camera wired to the backpack:
  - Power supply to a hot-swap battery system
  - SDI out, going to the Haivision encoder
  - SDI in, coming from RIO/RSBM to provide camera control and tally

:::info
The Blackmagic URSA G2 supports IP control with the latest firmware, but the IP protocol has no tally support. If you need tally, you must use SDI (camera SDI input), which requires an RSBM to provide SDI from your RIO.
:::

## RIO setup

### Checking for updates

Before a new season, check for firmware updates when you have time. You get all new features and bug fixes — and you help the Cyanview community identify new ones.

Update your RIO:

![RIO firmware version 24.7.1](/img/Workflows/RIO-24.7.1.png)

And your RCP:

![RCP firmware version 24.7.1](/img/Workflows/RCP-24.7.1.png)

:::info
You can update through the admin page (online, via internet) or download offline update files [here](/docs/reference/firmware-download).

- Online update: click on a new version — the RIO/RCP downloads and installs it automatically.
- Offline update: download the file to your computer, then drag and drop it onto your device's webpage.
:::

### Camera configuration

See the [Blackmagic SDI integration guide](/docs/integrations/cameras/blackmagic/blackmagic-camera-control) for full details.

Start by creating a Blackmagic bus:

![Blackmagic bus creation](/img/Workflows/blackmagic-bus.png)

:::info
If your camera ID is 1 (the default), you can skip the Blackmagic bus step. Creating a bus lets you select a specific camera ID later.
:::

![Blackmagic bus configuration](/img/Workflows/blackmagic-bus-config.png)

- In `Interface : Port`, select your RIO (`50-82`) and the port it uses (here port `1`, leaving port 2 free).
- In `IDs`, select a range that includes your camera ID (camera is ID `10`, so `1-12` works).

Now create your camera:

![Blackmagic camera setup block](/img/Workflows/blackmagic-cam-setup.png)
![Blackmagic camera configuration](/img/Workflows/blackmagic-cam.png)

- Camera name (`CAM1`) and number (`1`) to identify it clearly.
- Brand and model: `Blackmagic` and `SDI`.
- Interface: the Blackmagic bus you created, with camera ID `10`.

When the block turns green, the camera is properly configured — RIO and RSBM are working.

:::warning
In IP mode, control is bidirectional. In SDI mode, control is unidirectional, so a green status means the configuration is correct, not that camera control is working. Always verify from RCP: change tally or iris and confirm you see a response. Check for broken SDI cables, wrong camera IDs, and lens settings (iris auto, remote control active, servo enabled).
:::

:::tip
Alternatively, use Blackmagic IP control and add an external tally light:
- [Tally box](/docs/reference/manuals/tally-light-manual) — mounts on top of the camera
- [Tally LED](/docs/resources/build-tally-led) — fits inside the viewfinder
:::

:::info
You don't need to configure tally or external lens separately in this setup. Tally is handled by the camera through SDI, and iris/lens control is also through SDI.
:::

## RIO/RCP REMI setup

REMI is the protocol used between RCP and RIO. It works over:
- LAN (Ethernet, fiber, Wi-Fi)
- Internet (Ethernet, 4G, etc.)
- RF
- In this case: through the Haivision DataBridge

The DataBridge offers two key advantages:
- Video and telemetry travel together — you won't have video without telemetry.
- No 4G modem or SIM to manage — you use the Haivision data plan.

:::tip
REMI is optimized for remote control: low bandwidth, reduced latency. This matters even for IP cameras, since most camera protocols aren't designed to tolerate network latency or packet drops. Adding a RIO on the camera side helps in these situations (PTZ, etc.).
:::

Add a REMI tag in your RIO:

![RIO REMI tag configuration](/img/Workflows/rio-remi.png)

Add the same tag in your RCP:

![RCP REMI tag configuration](/img/Workflows/rcp-remi.png)

The RCP now automatically discovers and lists RIOs, RCPs, and shared cameras:

![RCP REMI device list](/img/Workflows/rcp-remi-list.png)

Select a camera to import it into your RCP and start controlling it:

![RCP REMI imported camera](/img/Workflows/rcp-remi-cam.png)

:::note
The camera shows as `Imported` in the RCP because the RIO handles actual camera control. The RCP sends and receives information through REMI, but the camera protocol runs on the RIO side — reducing latency and improving stability.
:::

## Haivision DataBridge

DataBridge configuration is specific to your kit and setup and is not covered in full here. See the [Haivision integration guide](/docs/integrations/broadcast-systems/haivision-data-bridge) for details.

The wiring looks like this:

![Haivision DataBridge wiring diagram](/img/Integrations/Haivision/Haivision-wiring.png)

## Tally input from ATEM

See the [router/switcher integration guide](/docs/integrations/generic/routers) for full details.

In the RCP configuration:
- Add your ATEM in the component section.
- Set a name (`ATEM`, or anything you prefer).
- Enter the IP address (`192.168.88.1`) — confirm it matches your RCP network.
- Link camera 1 to input 1 to enable proper tally routing.
- Set tally red and green to `AUTO` to receive tally from the ATEM.

RCP now receives tally data and routes it to your camera automatically.

:::note
With only one camera, you don't need to link the RCP to any output. With multiple cameras, you can preview your current RCP camera selection on an aux output.
:::

:::tip
`AUTO` mode reads tally from the ATEM and supports picture-in-picture and similar features. For complex setups — like a music festival — you can configure multiple tally outputs (output 1 for the big screen, output 2 for Instagram live, etc.) and the RCP will derive tally from that.
:::

![RCP ATEM tally configuration](/img/Workflows/rcp-atem-conf.png)
![RCP ATEM tally active](/img/Workflows/rcp-atem.png)
