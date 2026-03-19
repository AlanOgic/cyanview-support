---
id: ip-primer
title: "IP networking primer"
sidebar_label: "IP primer"
description: "Understand IP networking basics for Cyanview setups. Subnets, DHCP, static IPs, and common network configurations."
keywords: [IP networking, primer, subnet, DHCP, static IP]
slug: /reference/troubleshooting/ip-primer
---

Outside of ST 2110 environments, two main approaches to IP networking have emerged in the live media industry. Large operations use dedicated IT specialists who manage complex configurations. Smaller teams — where the same people operate production gear and set up networks — rely on best practices and good documentation. This primer targets the second group. It covers the concepts you need to navigate IP-based workflows and configure slightly more advanced setups beyond a typical home network.

The following sections cover IP addressing, subnet masks, DHCP, and static IP configuration for local networks. Gateway and routing concepts are introduced to explain how devices access the internet or communicate across VPNs — useful for remote production, cellular camera control, and remote support.

## IP addressing and subnet mask

Every device on an IP network needs a unique address to send and receive data. An **IP address** (e.g., `192.168.10.24`) is a 32-bit numerical label divided into four octets, each between 0 and 255.

![IP address notation diagram](/img/Configuration/Network/IP_Primer.notation.svg)

:::warning
No two devices on the same network can share the same IP address. Duplicate IPs cause unpredictable behavior, unreachable devices, and intermittent failures — and they are one of the most common issues we encounter in the field.
:::

The **subnet mask** works alongside the IP address to define which part of the address identifies the network and which part identifies the device. For example, `255.255.255.0` means the first three octets (`192.168.10`) are the network, and the last octet (`.24`) is the device.

Using a city analogy:
- The network is the neighborhood or street.
- The device is the individual house.
- The subnet mask defines where the street name ends and the house number begins.

**CIDR notation** expresses the IP address and network mask together. Instead of writing `255.255.255.0`, you write `/24` — meaning 24 bits are fixed as the network portion. For example, `192.168.1.2/24` is equivalent to IP `192.168.1.2` with subnet mask `255.255.255.0`. All diagrams and examples in this guide use CIDR notation.

A **network range** is the full set of IP addresses within a given address and mask. For example, `192.168.1.0/24` spans from `192.168.1.0` to `192.168.1.255`.

### /24 network example

The most common configuration uses a `/24` mask (`255.255.255.0`), giving 254 usable addresses within one segment. Devices sharing the same first three octets can communicate directly. If your cameras are on `192.168.1.0/24`, assign the RCP and computer addresses in the same range.

![IP notation in a /24 network](/img/Configuration/Network/IP_Primer.notation_C.svg)

- Any address starting with `192.168.1` is on the `192.168.1.0/24` network.
- Setting the RCP to `192.168.1.2/24` means IP `192.168.1.2` and mask `255.255.255.0`.
- All devices that need to communicate must have addresses within this range.

![/24 network example diagram](/img/Configuration/Network/IP_Primer.classCExample.png)

### /16 network example

Cyanview devices ship with factory IP addresses on the `10.192.0.0/16` network. The last two octets are derived from the device serial number, so no two devices share the same IP.

![IP notation in a /16 network](/img/Configuration/Network/IP_Primer.notation_B.svg)

- Any address starting with `10.192` is on the `10.192.0.0/16` network.
- Setting your computer to `10.192.1.1/255.255.0.0` lets you reach any Cyanview device — any address from `10.192.0.0` to `10.192.255.255`.
- All devices that need to communicate must have addresses within this range.

![/16 network example diagram](/img/Configuration/Network/IP_Primer.classBExample.png)

:::note
A common mistake is to assign a Cyanview device like `10.192.46.2` but use a `/24` mask (`255.255.255.0`). This limits the device to the `10.192.46.0/24` subnet and prevents communication with other Cyanview devices on different subnets. Use `/16` (`255.255.0.0`) to reach the full Cyanview network.
:::

## IP gateway

A **gateway** routes traffic from your local network to other networks or the internet. Think of it like a post office: local deliveries go directly, but anything going to another city must pass through the post office.

Your gateway is a **router** that forwards traffic beyond the local subnet. On a home network, your internet router is the gateway. A gateway can also route to a single subnet — such as a VPN or data tunnel. Multiple gateways can exist on one network.

## DNS servers

A **DNS server** translates human-readable domain names — like `example.com` — into IP addresses. Without DNS, devices can still communicate using IP addresses directly, but they cannot reach services or websites by name. Cyanview uses DNS for services like the REMI cloud relay and remote support connections.

## DHCP or static IP configuration

A **static IP** is configured manually and does not change unless you edit it. **DHCP** automatically assigns IP addresses from a pool, ensuring uniqueness and avoiding conflicts. Home networks typically use DHCP from the router.

### LAN — local area network configuration

In broadcast, **static IP addresses** are common on isolated local networks, especially when keeping the network offline minimizes security risk. For local-only communication — such as between an RCP and connected cameras — you only need the **IP address** and **subnet mask**. Leave the **gateway** field empty.

Example:
- **Device IP address**: `192.168.1.2`
- **Subnet mask**: `255.255.255.0` (also written as `/24`)

:::note
Some Sony cinema cameras require a **valid gateway IP address** to activate their network interface, even without external communication. "Valid" means the gateway must fall within the same subnet — the gateway device itself does not need to exist or respond. This is a firmware limitation unlikely to be fixed. Provide a placeholder gateway within the correct subnet to meet the camera's requirement. Some Sony models also require a reboot for the interface to activate, without indicating this is necessary. Test each model carefully and document the behavior.
:::

### WAN static IP configuration

A typical internet connection includes IP, mask, gateway, and DNS. Example:

- **IP address**: `192.168.1.25`
- **Subnet mask**: `255.255.255.0` (`/24`)
- **Default gateway**: `192.168.1.1` (your home router)
- **DNS servers**: addresses of servers that resolve domain names

In practice, this configuration appears in production when controlling a camera over cellular on a RIO. The gateway is the exit point for any traffic outside your local subnet. Without it, the device can only communicate locally. Without DNS, the device cannot reach services like `remi.cyanview.com` or `support.cyanview.com`.

Use Google's public DNS servers (`8.8.8.8` and `8.8.4.4`) if you have internet access but no local DNS server.

### DHCP

DHCP automatically assigns the same information as a static setup — IP address, subnet mask, gateway, and DNS — without manual configuration on each device. Think of it as an automated address assignment service: a DHCP server (typically your router) hands out available addresses from a predefined pool and tracks what is in use.

On a home network, the same IP address is not guaranteed to reassign to the same device. In broadcast environments, managed DHCP servers can assign fixed addresses to specific devices, centralizing configuration.

**Key advantages of DHCP:**
- No IP conflicts — the server tracks all assigned addresses.
- Simplified setup — devices connect without manual configuration.
- Centralized management — change network settings in one place.

## Default IP configuration of Cyanview devices (except CI0)

Cyanview devices such as the RCP and RIO ship with a **factory static IP** on the `10.192.0.0/16` network. The address is derived from the serial number using the last two bytes as the host portion. For example, `CY-RCP-18-123` gets factory IP `10.192.18.123`. This ensures a unique, predictable address out of the box that also acts as a permanent recovery IP.

**DHCP is enabled by default.** If a DHCP server is present (such as a typical router), the device automatically receives an IP address for internet access. This enables out-of-the-box cloud connectivity for REMI production and remote support without any manual configuration.

The factory static IP in the `10.192.0.0/16` range **cannot be removed**, but it does not interfere with other settings. To use a different static IP for your network, simply **add a new IP address**. Tick the **Persistent** box to ensure it survives reboots and resets.

## Troubleshooting

### Checking connectivity using `ping`

`ping` is a command-line tool available in Windows Command Prompt and macOS Terminal. It sends ICMP echo requests to a target IP and waits for a response — a quick way to check if a device is reachable. Both directions must work for a ping to succeed.

Video tutorials: [Windows ping](https://www.youtube.com/watch?v=CmZhQQrQLE0) | [Mac ping](https://www.youtube.com/watch?v=HN7Zr0l2a8g)

### Finding duplicate IPs

A common mistake is entering the camera IP in every field of the RCP configuration, which results in assigning the same IP to both camera and RCP. This creates a conflict that prevents communication and disrupts web interface access. When troubleshooting, check for duplicate IPs first. If issues persist and the cause is unclear, reset all device configurations and start fresh.

On Windows, use [Advanced IP Scanner](https://www.advanced-ip-scanner.com/) to scan the network and report duplicates.

On Mac and Linux, use `arping` and `arp-scan` from the terminal. Install them via Homebrew on Mac.

#### Using `arping` to detect duplicate IPs on Linux

Check if an IP address is already in use:

```
arping <IP_ADDRESS>
```

- Multiple MAC addresses in replies — duplicate IP detected.
- Single MAC address — IP is in use by one device.
- No replies — IP is likely free.

Example output showing a duplicate:
```
Unicast reply from 192.168.1.100 [AA:BB:CC:DD:EE:01]  1.123ms
Unicast reply from 192.168.1.100 [AA:BB:CC:DD:EE:02]  1.456ms
Sent 2 probes (1 broadcast(s))
Received 2 response(s)
```

Additional tips:
- Use `-D` for duplicate address detection (as done by DHCP clients):
  ```
  sudo arping -D -I <interface> <IP_ADDRESS>
  ```
- Specify the interface explicitly:
  ```
  sudo arping -I eth0 192.168.1.100
  ```

#### Using `arp-scan` to scan an entire range for duplicates

Scan your entire local subnet to discover all active devices:

```
sudo arp-scan 192.168.1.0/24
```

The output lists all responding IP addresses with their MAC addresses. Any IP appearing more than once with different MACs indicates a conflict.

Example output with a duplicate:
```
192.168.1.100  AA:BB:CC:DD:EE:01  SomeVendor
192.168.1.100  AA:BB:CC:DD:EE:02  AnotherVendor
```

Specify the interface if needed:
```
sudo arp-scan -I eth0 192.168.1.0/24
```

Install `arp-scan` via Homebrew on Mac (`brew install arp-scan`) or your Linux package manager.

### All devices must be on the same network

IP communication is bidirectional — both devices must have a valid IP address, matching subnet mask, and be on the same network. A common mistake is configuring a camera on the `10.192.0.0/16` network with a `/24` mask, placing it on a different subnet than the RCP. TCP communication will fail entirely. UDP communication may partially work — the camera may receive and respond to paint changes, but the RCP will receive nothing back.
