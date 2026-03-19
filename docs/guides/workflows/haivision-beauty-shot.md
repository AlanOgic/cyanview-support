---
id: haivision-beauty-shot
title: "Haivision beauty shot workflow"
sidebar_label: "Haivision beauty shot"
description: "Create beauty shot setups with Haivision and Cyanview for automated fixed-camera positions in broadcast production."
keywords: [Haivision, beauty shot, automated, fixed camera]
slug: /guides/workflows/haivision-beauty-shot
---

This guide walks through a Panasonic Varicam beauty shot setup using the Haivision DataBridge to tunnel REMI between RIO and RCP.

![Haivision Aviwest Cyanview RCP RIO Panasonic Varicam](/img/Integrations/Haivision/Haivision-Panasonic-Varicam.jpeg)

## Wiring

The RIO connects to:
- The Haivision DataBridge using the onboard Ethernet port
- The Panasonic Varicam using a USB-Ethernet dongle on the RIO USB port (the RIO has only one onboard RJ45 port)

RIO and RCP communicate via [REMI](/docs/guides/networking/remi) tunneled through the [Haivision DataBridge](/docs/integrations/broadcast-systems/haivision-data-bridge).

![Haivision Panasonic Varicam wiring diagram](/img/Workflows/Haivision-Panasonic-Varicam-wiring.png)

## Setup

Before starting, confirm:
- Your encoder and decoder are properly set up.
- The `Data Hot Spot` licence is activated on your decoder.
- You have the LAN port and LAN IP of your encoder (for the RIO static WAN configuration).
- You have the LAN port and LAN IP of your decoder (for the RCP static WAN configuration).
- Your Panasonic Varicam IP is `10.193.1.2` with netmask `255.255.0.0`.

Follow the [Haivision integration guide](/docs/integrations/broadcast-systems/haivision-data-bridge) for full encoder/decoder setup.

### RIO, camera, and encoder side

First, configure a static LAN IP on the RIO to communicate with the camera.

In the RIO web UI, click `IP Connections`:

![RIO IP connections block](/img/Workflows/Haivision-RIO-IP-block.png)

Add a new static IP: `10.193.1.1/16`:

![RIO static LAN IP setup](/img/Workflows/Haivision-RIO-static-LAN.png)

:::note
In this example, the RIO shows two connections:
- `LAN1` — the onboard RJ45 port
- `USBLAN_8cae4ce9c681` — the USB-Ethernet dongle

The suffix `8cae4ce9c681` is the dongle's MAC address (`8C:AE:4C:E9:C6:81`), useful for identifying it when multiple dongles are connected. A green indicator means a cable is plugged in and has a carrier — not that it's fully configured.
:::

Now configure the camera. In `Configuration`:
- Create a new camera
- Select brand `Panasonic` and model `Varicam`
- Enter the camera IP: `10.193.1.2`

![RIO Varicam camera setup](/img/Workflows/Haivision-RIO-cam-setup.png)

Your camera block should look like this:

![RIO Varicam camera block](/img/Workflows/Haivision-RIO-cam-block.png)

:::note
Make sure the Varicam is connected to the USB-Ethernet dongle on the RIO. In this example, the `10.193.1.1/16` static IP was configured on the USB dongle — not on `LAN1`.
:::

Now configure REMI. In the web UI, open the REMI tab and add a new tag (here `flypackNY`):

![RIO REMI tag setup](/img/Workflows/Haivision-RIO-remi.png)

Finally, connect the RIO to the Haivision DataBridge. In the WAN section, configure `LAN1` as a static interface:
- `Interface`: `LAN1`
- `Mode`: Static
- `IP Address`: `192.168.10.2`
- `Netmask`: `255.255.255.0`
- `Gateway`: `192.168.10.1` (the encoder IP)

![Haivision RIO static WAN configuration](/img/Integrations/Haivision/Haivision-RIO-WAN.png)

:::note
This sets `LAN1` (onboard RJ45) as the WAN interface. It connects to the encoder Ethernet port, providing the DataBridge tunnel.
:::

### RCP and decoder side

First, connect the RCP to the Haivision DataBridge. In the WAN section, configure a static interface:
- `Mode`: Static
- `IP Address`: `192.168.20.2`
- `Netmask`: `255.255.255.0`
- `Gateway`: `192.168.20.1` (the decoder IP)

![Haivision RCP static WAN setup](/img/Integrations/Haivision/Haivision-RCP-WAN.png)

Next, add the same REMI tag as the RIO (here `flypackNY`):

![RCP REMI tag setup](/img/Workflows/Haivision-RIO-remi.png)

:::note
RIO and RCP can each have multiple tags — they link whenever they share at least one. The cloud icon in the top-right may appear red here, indicating the RCP is not connected to the REMI cloud server. That's expected: with a direct DataBridge tunnel between RCP and RIO, the cloud server isn't needed.
:::

After adding the tag, your RIO appears in the REMI list with the camera below it:

![RCP REMI device list](/img/Workflows/Haivision-RCP-remi.png)

Check the box next to your camera to import it from the RIO to the RCP.

Back in the `Configuration` tab, you should see your imported camera:

![RCP imported camera](/img/Workflows/Haivision-RCP-cam.png)

:::note
If the camera appears red in your configuration, one of two things is wrong:
- The DataBridge is down (encoder or decoder offline or disconnected)
- The camera is disconnected (e.g., changing battery)

To distinguish between the two, check the RIO/RCP link status in the REMI tab — it should be green if the DataBridge is healthy.
:::

### Tips

- Once you've imported your camera from the RIO to the RCP, you can freely rename or renumber it on either side.
- You can update the camera on the RIO (name, number, model, etc.) — the link persists until you explicitly remove the camera on one side.
- Once the DataBridge is active and the static WAN IPs are set, you can access the RIO web UI directly from the RCP web UI. This lets you link RIO and RCP first, then configure the camera remotely in a second step. See the [REMI guide](/docs/guides/networking/remi#step-3-access-the-remote-web-ui) for details.
