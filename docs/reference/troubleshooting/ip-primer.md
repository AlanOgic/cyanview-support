---
id: ip-primer
title: "IP networking primer"
sidebar_label: "IP primer"
description: "Understand IP networking basics for Cyanview setups. Subnets, DHCP, static IPs, and common network configurations."
keywords: [IP networking, primer, subnet, DHCP, static IP]
slug: /reference/troubleshooting/ip-primer
---

# Scope of this guide

Outside of ST 2110 environments, two main approaches to IP networking have emerged in the live media industry, shaped largely by scale and increasing security demands. On one side are large operations with dedicated IT specialists who manage complex network configurations. On the other are smaller teams for whom networking is not the core focus; in these cases, the same people operating and supporting production equipment also take on the responsibility of setting up and maintaining the network, doing their best to follow best practices and ensure sufficient reliability.

This primer is aimed squarely at the second category. Our goal is to highlight a few key concepts you need to understand to navigate today’s IP-based workflows, and to provide some guidance for slightly more advanced configurations (beyond what you’d encounter in a typical home network).

The following sections cover fundamental topics such as IP addressing, subnet masks, DHCP, and static IP configuration, which are typically encountered in local network environments.

The concepts of gateways and routing are introduced to explain how devices access the internet or communicate with other networks over custom routes, including across VPNs. This is needed when using our products for remote production, controlling a camera over cellular or requiring remote support.

<!-- TODO
A dedicated section addresses firewall behavior, outlining possible reasons for connection problems due to blocked ports or restricted traffic.

Finally, VLANs are covered as a standard method in the industry to isolate traffic at the data link layer (think like separating your network into different simple network switches), enabling separation of network segments without requiring complex routing or filtering. -->


## IP Addressing and Subnet Mask: An Overview

In IP-based networks, every device must have a unique address to send or receive data. This address, known as the IP address, serves the same purpose as a street address in a city: it identifies where a message should be delivered.

An IP address (e.g., `192.168.10.24`) is a numerical label assigned to a device on a network. It allows routers and switches to determine the destination of data packets, just as a postal service uses street addresses to deliver mail. The IP address has 32bits and is divided into four octets, each containing eight bits. Each octet represents a number between 0 and 255. For example, the IP address 192.168.1.2 consists of four octets: 192, 168, 1, and 2.

![IP address notation](/img/Configuration/Network/IP_Primer.notation.svg)

:::warning
Let’s make one thing clear right away: **no two devices on the same network can share the same IP address**. It’s similar to two houses having the exact same street address — deliveries wouldn’t know where to go, and confusion would be inevitable. In a network, duplicate IP addresses lead to unpredictable behavior and communication errors, often making devices unreachable or causing intermittent failures.
This sounds simple, but **duplicate IPs are one of the most common causes of remote troubleshooting** we encounter in the field.
:::

The **subnet mask** works alongside the IP address to define which part of the address refers to the "network" (comparable to a city or district) and which part refers to the specific device (comparable to a house number within that district). For example, a common subnet mask like 255.255.255.0 indicates that the first three segments (192.168.10) represent the network, while the last segment (.24) identifies the specific device.

Using the analogy of a city:

* The network is the neighborhood or street.
* The host (or device) is the individual house on that street.
* The subnet mask defines where the network (street) ends and where the host (house) numbering begins.

This structure allows devices to efficiently determine whether another device is on the same network — also called the local network (like being in the same neighborhood) — or on a different network (like a different city). In the latter case, data must be sent through a gateway or router, and a corresponding route must be defined.

In summary:

* IP address: Uniquely identifies a device on a network.
* Subnet mask or Netmask: Defines the boundary between the network and device portions of the address.

**CIDR notation** (Classless Inter-Domain Routing) is a compact way to represent an IP address and its associated network mask. Instead of writing the full subnet mask (like `255.255.255.0`), CIDR uses a slash (`/`) followed by a number to indicate how many bits are fixed as the network portion. For example, `192.168.1.2/24` means the first 24 bits define the network, leaving 8 bits for host addresses — equivalent to a `255.255.255.0` subnet mask. CIDR makes it easier to understand and work with IP ranges, especially when dealing with routing and subnetting.
For clarity and conciseness, **CIDR notation will be used throughout all diagrams and examples in this guide**.

A **network or IP range** is the full set of IP addresses which can be reached from a given IP address and subnet mask. For example, if we refer to the `192.168.1.0/24` network, this represents the range of IP addresses from `192.168.1.0` to `192.168.1.255`.

### /24 Network Example

The most common subnet configuration uses a `/24` network mask (equivalent to `255.255.255.0`), which allows 254 usable IP addresses within a single network segment. Devices with IP addresses that share the same first three octets can communicate directly with each other. In this example, if you have pre-configured cameras in the `192.168.1.0/24` network, you can assign IP addresses in the same range to the RCP and a computer.

![IP notation in a /24 network](/img/Configuration/Network/IP_Primer.notation_C.svg)

* Any IP address that starts with `192.168.1` is part of the `192.168.1.0/24` network.
* Assigning the IP `192.168.1.2/24` to the RCP means setting the IP address to `192.168.1.2` and the network mask to `255.255.255.0`.
* All devices that need to communicate together must be assigned an IP address within this range.

![/24 network example](/img/Configuration/Network/IP_Primer.classCExample.png)

### /16 Network Example
Cyanview products come with factory IP addresses assigned in the `10.192.0.0/16` network. The last two octets of the IP address are assigned based on the serial number of the device, ensuring that no two devices will ever have the same IP address.

![IP notation in a /16 network](/img/Configuration/Network/IP_Primer.notation_B.svg)

* Any IP address that starts with `10.192` is part of the `10.192.0.0/16` local network.
* Assigning your computer an IP address like `10.192.1.1` with a netmask of `255.255.0.0` will allow you to access any Cyanview device or any other device having an IP address in the `10.192.0.0/16` network — any address from `10.192.0.0` to `10.192.255.255`.
* All devices that need to communicate together must be assigned an IP address within this range.

![/16 network example](/img/Configuration/Network/IP_Primer.classBExample.png)

:::note
We regularly see assigment of IP addresses with the wrong network mask. Typically, with an RCP at `10.192.46.2`, some would assign an IP address such as `10.192.46.1` with a network mask of `255.255.255.0` (`/24`). This results in the computer not being able to reach any other Cyanview device because it limits communication to only the `10.192.46.0/24` subnet instead of the full `10.192.0.0/16` network where other devices reside.
:::


## IP gateway

A **gateway** in an IP network is a device that routes traffic from a local network to other networks — typically to the internet or to another subnet. It acts as the entry and exit point for network traffic that needs to go beyond the local network.

You can think of it like sending a letter: if the destination is within your neighborhood, you can deliver it directly. But if it’s going to another city, it has to go through the **post office** — the gateway — to be properly routed.

The gateway is a **router** that knows how to forward data to its destination. Devices on a network use the gateway's IP address as their next-hop destination when communicating with devices outside their own subnet. In a home network, your internet router acts as the gateway device, forwarding any non-local traffic to the internet. A gateway could also route traffic to a single subnet like a VPN or a data tunnel. Multiple gateways can exist on a network to provide routing to multiple subnets.


## DNS servers

A **DNS server** (Domain Name System server) is a service that translates human-readable domain names — like `example.com` — into IP addresses that computers use to locate and communicate with each other on a network.

While humans prefer to use names, devices communicate using IP addresses. Without DNS, you would have to remember and type in IP addresses for every website or remote service you want to access. The DNS server acts like the **phone book** of the internet: when you type a domain name into a browser or a network configuration, the DNS server looks up the corresponding IP address and returns it so the connection can be made.

DNS servers are especially used in any network that connects to the internet. Without a DNS server, the device can still communicate using IP addresses, but it will not be able to access any services or websites by name. For the Cyanview system, DNS servers are used by services like the REMI cloud relay as well as the remote support connection.


## DHCP or static IP configuration

A **Static IP** means that these configuration values are set manually by the user and will not change unless edited in the configuration. **DHCP** is a protocol that automatically assigns IP addresses to devices on a network instead of having to manually configure them. DHCP is the usual configuration on home networks, assigned from your internet router. It will assign IP addresses, mask and gateway to all devices, making sure that all IP addresses are unique amongst devices, avoiding any conflicts that could occur with manually assigned IPs.

### LAN — Local Area Network Configuration (and exceptions to the rule)

In the **broadcast industry, static IP addresses** are commonly used to communicate with devices on a local network that is intentionally isolated from any other network — especially the internet. Keeping the network disconnected from the internet is also the most straightforward and effective way to minimize the risk of security breaches, particularly in environments where advanced network security expertise is not available.

For local-only communication — such as between an RCP and connected cameras — only the **IP address** and **subnet mask** typically need to be configured. The **gateway** field can be left blank, as no external routing is required.

- **Device IP Address**: `192.168.1.2`
- **Subnet Mask**: `255.255.255.0` (also written as `/24`)

:::note
However, certain devices (notably some Sony cinema cameras or camcorders) require a **valid gateway IP address** to activate their network interface, even when no external communication is involved. In this context, "valid" means that the gateway IP address must fall within the same subnet as the device’s IP address. The gateway device itself does not need to exist or respond — the requirement is purely for configuration validation. While this behavior is technically unnecessary for local communication, it is the result of firmware limitations that are unlikely to be addressed. In such cases, a placeholder gateway address within the correct subnet must be provided to meet the device's requirements. Although not functionally required, the setting is **practically necessary** to ensure proper device initialization. This of course is not documented and only applicable to some models. Talking about Sony cameras, other models also require a reboot for the interface to be activated, without explicitly indicating that this step is necessary. Some suspect Sony cameras are quietly testing your patience. Be sure to test the behaviors properly and document it for each model you own.

For most other devices, the correct rule applies and only the IP address and subnet mask are required.
:::

### WAN static IP configuration

A typical home network configuration includes IP, mask and gateway to give access to the public internet, and DNS servers. A typical example:

- **Your Computer's IP Address**: `192.168.1.25`
- **Subnet Mask**: `255.255.255.0` (also written as `/24`)
- **Default Gateway**: `192.168.1.1` (your home router's IP address)
- **DNS Servers**: The addresses of servers that translate domain names to IP addresses

In practice, this configuration is not that common for a local production but is often used when controlling a camera over cellular on a RIO. Compared to the LAN configuration, this adds the "gateway" IP address as the default route to reach any computer outside the local network defined by the network mask. This gateway acts as the "exit point" from your local network — when your device needs to communicate with any IP address that doesn't belong to your local subnet (as defined by the subnet mask), it automatically forwards that traffic to the gateway device. The gateway then handles routing the data to its final destination, whether that's another network segment, a remote location via VPN, or the public internet. Without a properly configured gateway, devices can only communicate within their immediate local network and cannot reach any external destinations.

In addition to these, one or more DNS servers must be specified to resolve domain names like `remi.cyanview.com` or `support.cyanview.com`. Without a DNS server, the device can still communicate using IP addresses, but it will not be able to access services or websites by name. This affects REMI services as well as remote support functionality.

Public DNS servers like Google's `8.8.8.8` and `8.8.4.4` can typically be used if you don't have a local DNS server available but have a working internet connection.

### DHCP

DHCP (Dynamic Host Configuration Protocol) automatically provides the exact same network configuration information that we just covered for static IP setup — but without requiring manual configuration on each device.

When a device connects to a network with DHCP enabled, it essentially asks: "Can someone please give me my network address?" The DHCP server (typically your router or a dedicated network device) responds by automatically assigning:

- **IP Address**: A unique address from an available pool
- **Subnet Mask**: Defining which network segment the device belongs to
- **Default Gateway**: The route to reach other networks or the internet
- **DNS Servers**: (Additionally) The addresses of servers that translate domain names to IP addresses

Think of DHCP as an automated address assignment service. Instead of manually writing down each house's address, the postal service automatically assigns available addresses from a pre-defined neighborhood range, ensuring no two houses get the same number.

On a home network, IP addresses are assigned automatically by the router as devices appear on the network. There is no guarantee that the same IP address will be assigned to the same device every time it connects. This is because DHCP leases are typically short-lived and can be renewed or reassigned.

Managed DHCP servers can be configured to assign specific IP addresses to devices, ensuring consistent connectivity. This is particularly useful in our broadcast environments where devices need to maintain a stable IP address for communication. But instead of having to configure each device independently, the configuration is centralized on the DHCP server.

**Key Advantages of DHCP:**

- **No IP conflicts**: The DHCP server keeps track of which addresses are in use
- **Simplified device setup**: Devices can connect to the network without manual configuration
- **Centralized management**: Network settings can be changed in one place and automatically distributed


## Default IP configuration of Cyanview devices (except CI0)

### Default IP Configuration of Cyanview Devices

Cyanview devices such as the RCP and RIO come preconfigured with a **factory static IP address** in the `10.192.0.0/16` network. This address is derived from the device’s serial number, using the last two bytes as the host portion of the IP. This ensures that each device has a unique and predictable address out of the box for local communication and can act as a recovery IP at any time. RCP with serial `CY-RCP-18-123` would have a factory IP of `10.192.18.123`.

In addition to the static IP, **DHCP is enabled by default**. If a DHCP server is present on the network (such as a typical router), the device will automatically receive an IP address for internet access. This enables out-of-the-box **cloud connectivity for REMI production** and allows for **remote support** without requiring any manual configuration.

The default static IP in the `10.192.0.0/16` range **cannot be removed**, but it does not interfere with other settings. If you need to configure a different static IP for your network setup, simply **add a new static IP address**. To ensure it persists across reboots or resets, make sure to **tick the “Persistent” box** when saving the configuration.

<!-- TODO --
## Subnetting

### What Is a Subnet?

A **subnet** is a smaller segment of a larger IP network, like dividing a city into distinct neighborhoods. Subnets are used to divide a large address space into smaller, more manageable blocks.

Each subnet is defined by two components:
- An **IP address** that represents the network.
- A **subnet mask** (or prefix), which determines how many addresses belong to that subnet.

### Example: Multiple /24 Subnets

Consider the address range `192.168.0.0/16`, which allows for 65,536 IP addresses. Instead of placing all devices in one large network, this range can be divided into smaller **/24 subnets**, each with 256 addresses.

Here are a few examples of /24 subnets derived from the `192.168.0.0/16` block:

- `192.168.1.0/24` → Includes addresses from `192.168.1.1` to `192.168.1.254`
- `192.168.2.0/24` → Includes addresses from `192.168.2.1` to `192.168.2.254`
- `192.168.3.0/24` → Includes addresses from `192.168.3.1` to `192.168.3.254`

Each of these subnets has its own broadcast and network address, and devices within the same subnet can communicate directly. But devices in different subnets need a way to route packets between them.

### Example: A Single /16 Subnet

In the case of our products — such as RCPs, CI0, RIOs, and others — the entire `10.192.0.0/16` range is used as one subnet. It includes all addresses from `10.192.0.1` to `10.192.255.254`, supporting up to 65,534 usable IP addresses in one network.

When assigning an address to a computer that needs to reach any of the Cyanview devices, you can use any address within this range — meaning the address starts with `10.192` — while ensuring the network mask is set to `255.255.0.0`. This configuration indicates that any variation in the last two bytes belongs to the local network and does not require routing.


## Routing

*To be written*

### Defining Routes

*To be written*

### Default route

**Understanding Default Routes**

Think of a default route as the "catch-all" instruction for your network's postal service. When your computer wants to send data somewhere, it first checks: "Is this destination in my local neighborhood?" If the answer is yes, it delivers directly. But if the answer is no, it needs to know where to send the data.

This is where the default route comes in. It's essentially saying: "For any address I don't recognize as local, send it to this specific gateway device." In most home and office networks, this gateway is your router or modem — the device that connects your local network to the internet.

**How It Works in Practice**

Let's look at a typical home network setup to make this concrete:

- **Your Computer's IP Address**: `192.168.1.25`
- **Subnet Mask**: `255.255.255.0` (also written as `/24`)
- **Default Gateway**: `192.168.1.1` (your home router's IP address)

In this configuration:
- Your local network encompasses all devices from `192.168.1.1` to `192.168.1.254`
- Any device with an IP address in this range can communicate directly with each other
- Your router at `192.168.1.1` serves as the gateway to reach any destination outside this range
- The subnet mask `255.255.255.0` defines that the first three octets (`192.168.1`) identify your local network, while the last octet identifies individual devices

When your computer at IP address `192.168.1.25` wants to reach Google's servers, it checks its routing table:

1. "Is 8.8.8.8 (Google's DNS) in my local network 192.168.1.0/24?" — No
2. "Do I have a specific route for 8.8.8.8?" — No
3. "What's my default route?" — Send to gateway at 192.168.1.1, this is defined in your IP configuration
4. The gateway (your router) then handles getting the data to Google and back

This default route is given as the "gateway" parameter in a static or DHCP connection.


## Firewall

*To be written*

## VLANs

*To be written*
-->

## Troubleshooting

### Checking connectivity using `ping`

`ping` is a command-line utility used from the Windows Command Prompt or Apple Terminal. By sending ICMP echo requests to a specified IP address and waiting for a response, it is a quick way to check if a device is reachable over the network. The connection is tested in both directions for a `ping` to succeed.

Video tutorials on how to perform a ping on [Windows](https://www.youtube.com/watch?v=CmZhQQrQLE0) and [Mac](https://www.youtube.com/watch?v=HN7Zr0l2a8g) are available.

### Finding duplicate IPs

Again, we would like to emphasize that anyone unfamiliar with IP networks might start by entering the camera's IP address in every available field in the RCP configuration, hoping that eventually something will work. However, this approach usually results in assigning the same IP address to both the camera and the RCP. This creates an IP address conflict that prevents proper communication and will also disrupt network access to device configuration interfaces. When troubleshooting communication issues, checking for duplicate IP addresses should be among the first steps. If network communication problems persist and the source isn't immediately apparent, resetting all device configurations to start fresh is often the most efficient approach to resolve IP conflicts.

On Windows, there are tools like [Advanced IP Scanner](https://www.advanced-ip-scanner.com/) to perform a network scan and report duplicate IPs.

On Mac and Linux, you can use `arping` and `arp-scan` from the terminal. These utilities can be installed via Homebrew on Mac.

#### Using `arping` to Detect Duplicate IPs on Linux

You can use the `arping` command-line tool to check if an IP address is already in use or if there are duplicate IPs on your local network. This is especially useful for troubleshooting IP conflicts.

**Basic Usage**

To check if an IP address is already in use, run:
```
arping <IP_ADDRESS>
```
Replace `<IP_ADDRESS>` with the address you want to check.

- If you see replies with different MAC addresses, it means multiple devices are responding to the same IP (duplicate IP situation).
- If you see replies from only one MAC address, the IP is in use by a single device.
- If you see no replies, the IP is likely not in use.

**Sample output with a duplicate IP:**
```
Unicast reply from 192.168.1.100 [AA:BB:CC:DD:EE:01]  1.123ms
Unicast reply from 192.168.1.100 [AA:BB:CC:DD:EE:02]  1.456ms
Sent 2 probes (1 broadcast(s))
Received 2 response(s)
```
Notice the two different MAC addresses.

**4. Additional Tips**

- Use the `-D` flag to perform a "duplicate address detection" (DAD) as done by DHCP clients:
  ```
  sudo arping -D -I <interface> <IP_ADDRESS>
  ```
  Replace `<interface>` with your network interface (e.g., `eth0`).

- To specify the interface explicitly:
  ```
  sudo arping -I eth0 192.168.1.100
  ```

**Summary**

- Use `arping <IP>` to check for responses.
- Multiple MAC addresses in the output = duplicate IP detected.
- No response = IP is likely free.

#### Using `arp-scan` to Scan an Entire IP Range for Duplicates

The `arp-scan` tool allows you to scan your entire local network or a specific IP range to discover all devices currently responding on the network. This is useful for identifying all active devices and spotting duplicate IP addresses.

**Basic Usage**

To scan your local subnet (for example, `192.168.1.0/24`), run:
```
sudo arp-scan 192.168.1.0/24
```
Replace `192.168.1.0/24` with your actual network range.

**Interpreting Results**

- The output will list all IP addresses that responded, along with their MAC addresses.
- If you see the same IP address listed more than once with different MAC addresses, this indicates a duplicate IP situation.
- Each IP should normally correspond to a single, unique MAC address.

**Example Output with a Duplicate IP:**
```
192.168.1.100  AA:BB:CC:DD:EE:01  SomeVendor
192.168.1.100  AA:BB:CC:DD:EE:02  AnotherVendor
```
Here, `192.168.1.100` is claimed by two different devices, showing a duplicate IP conflict.

**Tips**

- You may need to specify your network interface with the `-I` flag, for example:
  ```
  sudo arp-scan -I eth0 192.168.1.0/24
  ```
- Install `arp-scan` via Homebrew on Mac (`brew install arp-scan`) or your Linux package manager.

**Summary**

- Use `arp-scan <network>` to list all devices on your subnet.
- Look for repeated IP addresses with different MAC addresses to detect duplicates.

### All devices have to be configured and on the same network

It is worth noting that most IP communication we're interested in is bidirectional, meaning that data flows in both directions between devices. For direct communication to work, both devices must be properly configured with an IP address and subnet mask, and they must be on the same network (same netmask).
A common mistake we see is to configure a camera in the `10.192.0.0/16` network but with a mask of `255.255.255.0`. This results in the camera being on a different network than the RCP, preventing direct communication. A TCP communication will not work as it requires bidirectional communication which will not be able to be established. But If the camera uses UDP communication, the camera will receive the packets coming from the RCP and might react to any paint changes done on the panel. But the RCP will not receive any packets back from the camera.
