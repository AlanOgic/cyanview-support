---
id: br-remote-micro-l-head
title: "BR Remote Micro L-Head"
sidebar_label: "BR Remote"
description: "Integrate BR Remote Micro L-Head robotic mounts with Cyanview for combined PTZ and camera paint control."
keywords: [BR Remote, Micro L-Head, robotic mount, PTZ]
slug: /integrations/accessories/br-remote-micro-l-head
---

The Micro L Head from Bradley is available directly from [BR Remote](https://brremote.com), and also under the Marshall, Dreamchip, and Proton brands.

![BR Remote Micro L Head robotic mount](/img/Integrations/BRRemote/Bradley-MicroL.png)

The integration provides basic pan/tilt motion support. There are no controls for maximum pan or tilt speed, nor for joystick direction configuration. The head is primarily used for reframing and saving/recalling positions from the RCP or with an optional USB joystick.

## Supported controls

| Control | Notes |
| :--- | :--- |
| **Pan / Tilt** | Speed control only |
| **Positions** | Save and recall positions |
| **Home** | Set the home position reference |

On the RCP, pan/tilt speed controls are in `Lens > PTZF > PTZF`. Position controls are in the next tab, and the `Home` function is accessible via the `ACTION` button within that tab.

## Wiring

The head uses RS485 serial control and is designed for use with mini cameras that are also serially controlled. Either a CI0 or RIO can control both the head and the camera over serial, and forward control remotely over IP to an RCP or another control device.

![BR Remote wiring diagram](/img/Integrations/BRRemote/brremote-wiring.png)

:::warning Independent wiring of camera and head
Do not use the built-in slip ring for camera control. The slip ring uses the Bradley protocol only — it is not a transparent data link, which would limit you to the functions Bradley supports in unidirectional mode. The slip ring also does not carry video, so video cabling must be routed separately regardless. To maintain full camera control, bypass the slip ring entirely and run independent connections for the head and camera.
:::

Because the camera and head connections are independent, you need two outputs from a CI0 or RIO: one for the head and one for the camera.

Cyanview supplies thinner, longer camera cables to give greater freedom of movement with the head:
- **Marshall**: `CY-CBL-6P-MARS-02` (now the standard supplied cable)
- **Dreamchip**: `CY-CBL-DREAMCHIP-03`

## Setup

Add a camera and configure it as usual. If you only want to control the head without camera controls, leave the camera control unassigned.

In the right column of the camera configuration, scroll down to **Pan and Tilt**:

1. Select the model: `BR remote - Micro L Head`
2. Select the interface, for example `CI0-31-18:2` for port 2.

![BR Remote pan/tilt setup in RCP configuration](/img/Integrations/BRRemote/brremote-setup.png)

When configured correctly, the pan/tilt block icon in the camera control turns green.

![BR Remote pan/tilt block showing green status](/img/Integrations/BRRemote/brremote-block.png)
