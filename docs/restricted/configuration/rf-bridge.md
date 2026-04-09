---
id: rf-bridge
title: RF bridge
description: "Set up a point-to-point RF link between a RCP and a RIO for wireless camera control."
keywords: [rf bridge, rfd900, radio, wireless, bonding, remi, serial]
slug: /restricted/configuration/rf-bridge
---

# RF bridge

## Overview

The RF bridge establishes a point-to-point link between a RCP and a RIO.

:::warning
The RF bridge is only available on broadcast devices (RCP and RIO). Check your licenses.
:::

Here is a RFD900A module:

<img src="/img/restricted/configuration/RFBridge/RFD900A.png" width="100"/>

## RF modules

The link works over any serial connection, but:

- It must be full duplex (the communication is bidirectional).
- Tx/Rx commutation must be fast. Some modules have a 1-second delay between Rx and Tx but are fast between two consecutive Tx or Rx — these will not work.

**Wired:**

- Null modem cable

**Open bands:**

- RFD900A (902–928 MHz)

**Reserved bands:**

- SATEL modems

## Wiring

### RF only

In this example, only the RF link is used to control the camera:

<img src="/img/restricted/configuration/RFBridge/RFBridge-wiring1.png" width="800"/>

This works in pairs — you need one RF bridge per camera.

### RF + cloud

In this example, RF and 4G are combined to control the camera:

<img src="/img/restricted/configuration/RFBridge/RFBridge-wiring2.png" width="800"/>

This creates a bonding between the two links:

- When you move a button on the RCP, data is sent to both cloud and RF.
- The RIO receives the data from whichever link arrives first (cloud, RF, or both).

### RF + cloud with a hop

In this example, RF and 4G are combined as above, but a NIO is used as a hop. This can help when the RF module needs to be outside in the stadium (NIO) while the RCP stays in the truck.

<img src="/img/restricted/configuration/RFBridge/RFBridge-wiring3.png" width="800"/>

In this case:

- The camera is controlled by the RIO (Ethernet between FX6 and RIO, or serial for another camera type).
- The NIO and RIO communicate using both RF and cloud (4G for RIO, Ethernet to the router for NIO).
- The RCP communicates with the RIO using the NIO as a hop. The NIO handles the RF + cloud bonding. The RCP-to-NIO link is simple LAN Ethernet.

:::note
The NIO can be replaced by any Cyanview device with USB and built-in gateway: RIO, NIO, or RCP.
:::

## Setup

This guide covers the most complex case (RCP + NIO + RIO). For a direct link between RCP and RIO, apply the NIO steps to the RCP instead.

### Initial setup

1. Place your RCP, NIO, and RIO on the same Ethernet network.
2. Configure your REMI tag/group on RIO, NIO, and RCP.
3. Configure your camera on the RIO.
4. Import the camera from RIO to NIO.
5. Import the camera from NIO to RCP.

Verify that this works before continuing.

Ensure your RFD900A modules are connected:

- To the RIO (any USB port).
- To the NIO (any USB port).
- The modems are properly paired: the ACT LED should be steady green.

:::info
If using RFD900 on an RCP, plug it into the USB port next to the RJ45, not the one on top.
:::

:::warning
If the RFD900 LEDs are not steady green at this point, check the configuration:

- Power is limited to 500 mA on RCP/RIO/NIO, while the RFD900 can draw up to 1 A. Ensure it is configured for limited power or use external power.
- `NET_ID` and bands must match on both RFD900 modules.
:::

### RIO/NIO/RCP REMI setup

| RIO | NIO | RCP |
|:---:|:---:|:---:|
| <img src="/img/restricted/configuration/RFBridge/RFBridge-RIO-cam-block.png" height="200"/> | <img src="/img/restricted/configuration/RFBridge/RFBridge-NIO-cam-block.png" height="200"/> | <img src="/img/restricted/configuration/RFBridge/RFBridge-RCP-cam-block.png" height="200"/> |

All three devices share the same REMI tag:

- The camera is configured on the RIO.
- The NIO imports from the RIO.
- The RCP imports from the NIO.

### RF bridge setup

#### RIO

Open the RIO web UI and append `/dev/app.html` to the URL (for example, `http://10.192.52.62/dev/app.html` for `cy-rio-52-62`).

Search for the `UsbSerial` block:

1. Click on it (text turns orange).
2. In the right panel, set **speed** to `57600` (default baud rate of the RFD900A — adjust if you changed it).
3. Click **OK** (text turns black).

<img src="/img/restricted/configuration/RFBridge/RFBridge-RIO-USB.png" width="400"/>

Select the `UsbSerial` block, then click the **new RF Bridge (camera)** button in the right panel:

<img src="/img/restricted/configuration/RFBridge/RFBridge-RIO-Bridge.png" width="400"/>

The RF bridge is now:

- Associated with the `UsbSerial`.
- `rf_bonding` linked to the REMI session (not present if you only use RF without 4G/REMI).
- `rf_id 1` associated with your camera.

:::info
`rf_bonding` means the bonding between RF and cloud is active on this link.
:::

<img src="/img/restricted/configuration/RFBridge/RFBridge-RIO-cam.png" width="400"/>

If `rf_id 1` is not present (order matters):

1. Click on **RF Bridge**.
2. Click on your camera, then click **connect**.

If you have multiple cameras on the same RIO, connect them to the same RF bridge. Ensure each camera has a unique `rf_id` (rule of thumb: set `rf_id` equal to the camera number).

#### NIO

In this setup, the RF bridge is between RIO and NIO. If you do not have a NIO in the loop and the RF link is direct between RCP and RIO, follow these steps on your **RCP** instead.

Configure the RF bridge as you did on the RIO:

1. Plug the USB module.
2. Configure the baud rate.

Then click **new RF Bridge (rcp)**:

<img src="/img/restricted/configuration/RFBridge/RFBridge-NIO-USB.png" width="400"/>

If `rf_id` is not present:

1. Click on **RF Bridge**.
2. Click on your camera.
3. Click **connect**.

If your RIO/NIO are connected to the internet/cloud/REMI, set up the bonding:

1. Click on `cam_ctrl` in your camera block.
2. Find the associated **Session Importer**.
3. The middle block should match your RIO serial.
4. Click on it.
5. Click **connect**.

<img src="/img/restricted/configuration/RFBridge/RFBridge-NIO-bonding.png" width="400"/>

:::warning
This is only important if you use 4G + RF. If only RF is in use, `rf_bonding` is not needed. However, if you have RF + 4G and the bonding is not configured properly, you may experience issues with tally, menus, and other features.
:::

<img src="/img/restricted/configuration/RFBridge/RFBridge-NIO-cam.png" width="400"/>

:::info
Ensure `rf_id` matches between your RIO and your NIO.
:::

#### RCP

Nothing special is needed on the RCP since the camera is imported using standard REMI:

<img src="/img/restricted/configuration/RFBridge/RFBridge-RCP-cam-block.png" height="200"/>

:::info
If your RCP has the USB/RF module and you are not using a NIO in between, apply the NIO guide to your RCP.
:::

### Test

While both IP/Ethernet and RF links are active, turn any knob on the RCP:

- Camera control works.
- The ACT LED on the RFD is steady green.
- The COM LED on the RFD blinks when data is transmitted/received.
- Camera status is green on the RCP.

Remove the Ethernet cable from the RIO:

- Camera control still works.
- The ACT LED is steady green.
- The COM LED blinks during data transfer.
- Camera status shows red on the RCP because the status represents the IP link. RF status display will be improved in a future update.

## Troubleshooting

### Camera shows red on the RCP but control works

The RF link is optimized to reduce bandwidth. If a status packet is lost, there is no glitch, but the status is not re-requested by default.

To request a full status refresh on your RCP:

1. Long-press **MENU**.
2. Select **SCENE**.
3. Select **S. FILES**.
4. Select **ACTIONS**.
5. Select **Sync Camera**.

### RFD900 LED is blinking green

If the LED is not steady green, the two modules are not linked. This is not related to your Cyanview configuration.

Check the RFD configuration:

- `NET_ID`
- Bands
- Power

Ensure both modules match. You can plug both RFD modules into your computer, open both serial ports, and verify they can communicate without any Cyanview device.

### Tally blinks, menu appears and disappears

This is likely caused by RF + cloud links being active without proper bonding. The RIO receives duplicate messages (tally toggle, menu toggle) — one from RF, one from 4G.

Fix the `rf_bonding` by ensuring the link is between your RF bridge and the session with your RIO (middle block).

### RFD900 reboots continuously

The RIO/NIO/RCP USB ports are limited to 500 mA. The RFD900 can draw up to 1000 mA, causing a power cycle loop.

Solutions:

- Lower the power in the RFD900 configuration.
- Use an external power supply that supports 1000 mA and keep USB for data only.
