---
id: haivision-data-bridge
title: "Haivision Data Bridge"
sidebar_label: "Haivision Data Bridge"
description: "Use Haivision Data Bridge with Cyanview for camera control data transport alongside your video contribution feed."
keywords: [Haivision, Data Bridge, SRT, data transport, REMI]
slug: /integrations/broadcast-systems/haivision-data-bridge
---

The **Haivision DataBridge** creates a data tunnel between a **StreamHub** and **Pro and Air Series transmitters**, enabling communication between an RCP and a RIO over the same cellular or network connection used for Haivision video transmission.

The RIO handles camera control locally, which ensures reliable operation even over high-latency connections that many camera protocols cannot tolerate. It also reduces latency effects for IP-based cameras such as PTZ models.

The DataBridge operates as a Layer 3 VPN — it links two or more distinct networks, each with its own IP range. Unlike a Layer 2 bridge, which merges networks, a Layer 3 VPN keeps them separate. You must **set up routing rules** on each device so packets can reach the other network. Without routes, devices cannot communicate across the bridge even when it is active.

A typical workflow has multiple transmitters, each with its own network. In the example below, both the StreamHub and the RCP are on the same network and have internet access.

![Haivision DataBridge topology — RCP, StreamHub, transmitter, and RIO](/img/Integrations/Haivision/Haivision-Databridge-diagram_1.png)

The RCP is on `192.168.1.0/24`. To reach the RIO on `192.168.8.0/24`, the RCP needs a route through the StreamHub. For return communication, the RIO needs a route back to the RCP through the transmitter.

Each additional transmitter requires its own network, and its associated RIO uses that transmitter as its gateway. If more than one StreamHub is used, the RCP needs additional routes.

In some workflows, internet access comes through a separate port on the StreamHub:

![Haivision DataBridge alternative topology with separate internet port on StreamHub](/img/Integrations/Haivision/Haivision-Databridge-diagram_2.png)

:::note
Read the [IP networking primer](/docs/reference/troubleshooting/ip-primer) if the notation above or the routing concepts are unfamiliar.
:::

## Configuration of the Haivision DataBridge

From a working Haivision setup, activating the DataBridge requires only a few more steps.

1. On the StreamHub, no special configuration is required — but you need a DataBridge license.

   ![Haivision DataBridge license entry on StreamHub](/img/Integrations/Haivision/Haivision-License.png)

2. On Pro Series transmitters, set the **ETH2** interface to **Gateway** mode and configure the IP address and subnet mask to match the camera network.

   ![Haivision transmitter ETH2 set to Gateway mode](/img/Integrations/Haivision/Haivision-transmitter-gateway.png)

3. Enable the **DataBridge** function on the transmitter and select the destination StreamHub. Status icons on both devices confirm an active connection.

   ![Haivision DataBridge enabled on transmitter with active status icons](/img/Integrations/Haivision/Haivision-DataBridge.png)

For more information and testing instructions, see the [Haivision documentation on using the DataBridge](https://doc.haivision.com/NARPP/how-to-use-databridge-for-ptz-camera-remote-control).

## Configuration of the RIO and RCP

Access both devices using their factory default IPs (in the `10.192.0.0/16` range) before applying the DataBridge network settings. Set your computer to an unused address in the `10.192.x.x` range to reach the web interfaces of both devices.

![RCP and RIO initial IP setup diagram using factory default IPs](/img/Integrations/Haivision/Haivision-Databridge-IPSetup.png)

### RCP configuration

Assign a new IP address in the **LAN** section:
- **IP:** `192.168.1.10`
- **Mask:** `255.255.255.0`

![Haivision RCP LAN IP configuration form](/img/Integrations/Haivision/Haivision-RCP-LAN.png)

Create a custom route to allow the RCP to reach the RIO network through the StreamHub:
- **Interface:** `LAN1`
- **Destination network:** `192.168.8.0`
- **Netmask:** `255.255.248.0`
- **Gateway (GWY):** `192.168.1.5`

![Haivision RCP custom route configuration form](/img/Integrations/Haivision/Haivision-RCP-Route.png)

The **gateway** (`192.168.1.5`) is the StreamHub IP, which routes packets from the RCP to the transmitters and RIOs.

:::tip Netmask explanation
The `/21` netmask (`255.255.248.0`) covers the range `192.168.8.0` to `192.168.15.254` — see the [IP calculator](https://jodies.de/ipcalc?host=192.168.8.0&mask1=21&mask2=). This combines 8 separate `/24` subnets into one route, so the StreamHub can serve as gateway for up to 8 cameras or transmitters (e.g., `192.168.8.1/24` through `192.168.15.1/24`).
:::

**Why use a LAN IP and custom route instead of WAN?** If you need a separate internet connection, the WAN entry should be reserved for that. With multiple StreamHubs, you may also need multiple custom routes — not possible with a single WAN default route.

### RIO configuration

Assign a new IP address in the **WAN** section:
- **IP:** `192.168.9.2`
- **Mask:** `255.255.255.0`
- **Gateway (GWY):** `192.168.9.1`

![Haivision RIO WAN IP configuration form](/img/Integrations/Haivision/Haivision-RIO-WAN.png)

Using WAN is the simplest approach when the RIO only needs to connect to the transmitter and does not require separate internet access.

### Bridging a USB Ethernet interface on the RIO

If your camera connects over IP and you need a second network port on the RIO, add a USB Ethernet dongle and bridge it to the LAN1 port. Both ports will be on the same network, like two ports on a switch. Enable bridging in the IP configuration page by ticking the box in the **Bridge** section.

![USB Ethernet bridge configuration on RIO](/img/Integrations/Haivision/Haivision-USB-bridge.png)

Once bridged, the USB interface does not appear as a separate entry in the LAN configuration — it is managed together with LAN1. Any device plugged into the USB Ethernet port is on the same network and uses the same settings.

### REMI configuration

While the RIO and RCP share the same network using factory default IPs, configure and test camera control before applying the DataBridge IP settings. The factory IPs let you verify the REMI link without touching the new network configuration.

To enable RCP–RIO communication, add the same **tag** in both devices via the REMI tab of each device's interface.

- Add the REMI tag to both devices.

  ![Haivision REMI tag entry on RCP and RIO](/img/Integrations/Haivision/Haivision-Tag.png)

- Add the camera configuration in the RIO.
- Verify the camera icon turns green in the RIO.

  ![Haivision camera configuration on RIO — camera icon green](/img/Integrations/Haivision/Haivision-Camera-Config.png)

- The RIO appears on the RCP REMI page — tick the camera to add it.

  ![Haivision REMI page on RCP with RIO listed and camera tickbox](/img/Integrations/Haivision/Haivision-REMI-tick.png)

Once the RIO moves to the transmitter side, automatic discovery via broadcast stops. Manually add the RIO IP to the RCP REMI page:

- Open the RCP REMI page.
- Enable Advanced mode via the 3-dot menu in the top-right corner.
- In **Manual IP — Import Cameras from IP**, enter the RIO IP (`192.168.9.2`) and click **+**.

  ![Haivision RCP REMI advanced mode with manual IP entry field](/img/Integrations/Haivision/Haivision-REMI-IP.png)

- Move the RIO to the transmitter side and connect it to ETH2 of the Pro Series. Power cycle the RIO to apply the IP configuration.
- Once discovered, the IP address moves to the left column next to the RIO entry — confirming successful configuration.

  ![Haivision REMI page showing RIO discovered with IP moved to left column](/img/Integrations/Haivision/Haivision-REMI-remIP.png)

## Troubleshooting

Test network connectivity by pinging each device from a computer.

**Step 1: Set your computer's network settings**

- **IP address:** `192.168.1.6`
- **Subnet mask:** `255.255.255.0`
- **Gateway:** `192.168.1.5`

This lets your computer reach devices on the StreamHub/RCP network and forward traffic to other networks through the StreamHub.

![Haivision DataBridge topology diagram for troubleshooting reference](/img/Integrations/Haivision/Haivision-Databridge-diagram_1.png)

**Step 2: Test each connection**

:::tip ping
Help on using **ping** is in the [IP primer](/docs/reference/troubleshooting/ip-primer#checking-connectivity-using-ping).
:::

1. **Ping the StreamHub:** `ping 192.168.1.5` — If no reply, check StreamHub network settings.
2. **Ping the RCP:** `ping 192.168.1.10` — If no reply, check RCP network settings.
3. **Ping the transmitter:** `ping 192.168.9.1` — If no reply, check DataBridge setup or your computer's gateway setting.
4. **Ping the RIO:** `ping 192.168.9.2` — If no reply, check RIO WAN settings.

Work through each step in order to identify where the connection breaks down.
