---
id: ci0-manual
title: "CI0 manual"
sidebar_label: "CI0 manual"
description: "Complete manual for the Cyanview CI0 camera interface. Installation, wiring, configuration, and troubleshooting."
keywords: [CI0, manual, installation, wiring, configuration]
slug: /reference/manuals/ci0/ci0-manual
---

This page covers the generic CI0 characteristics and configurations. Camera-specific configuration guidance is in the *Integration* section.

## CI0 ports

### Serial ports

![CI0 serial port overview diagram](/img/productGfx/CI0/cyanview-support-CI0-manual-serial-port@2x-8.png)

#### Connectors

Serial port connector reference: Hirose HR10A-7R-6S(73). Mating plug for cables: HR10A-7P-6P(73).

Cyanview provides a range of cables for most cameras — see the [cable catalog](/docs/resources/cable-catalog). Integration manuals also specify which cable to use for each camera.

#### Port pinout

<table>
<tr>
<th rowspan='9'><img alt="CI0 serial port female receptacle pinout diagram" src="/img/productGfx/CI0/cyanview-support-CI0-manual-serial-port-pinout@2x-8.png" width="200px"/><br/>Female receptacle.</th>
<th>PIN number</th>
<th colspan='3'>Protocol pinouts</th>
</tr>
<tr>
<th></th>
<th>RS232</th>
<th>RS422</th>
<th>RS485</th>
</tr>
<tr>
<td>1</td>
<td></td>
<td>Y/TX+</td>
<td>A/+</td>
</tr>
<tr>
<td>2</td>
<td>TX</td>
<td>Z/TX-</td>
<td>B/-</td>
</tr>
<tr>
<td>3</td>
<td>RX</td>
<td>A/RX+</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td></td>
<td>B/RX-</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>GND</td>
<td>GND</td>
<td>GND</td>
</tr>
<tr>
<td>6</td>
<td>+12V</td>
<td>+12V</td>
<td>+12V</td>
</tr>
<tr>
<td>Shell</td>
<td></td>
<td></td>
<td></td>
</tr>
</table>

#### CI0 models

CI0 models differ in the number and type of ports:

- **CY-CI0** — Standard two ports.
- **CY-CI03P** — A third port for camera head management.
- **CY-CI0BM** — Two ports with a BlackMagic SDI control extension (see the BM serial camera integration manual).

#### Supported protocols

| Port/Protocol | RS485 | RS232 | RS422 | LANC | SBUS | VISCA | B4 lens |
| ------------- | :---: | :---: | :---: | :--: | :--: | :---: | :-----: |
| P1            | ✔     | ✔     | ✔     |      |      | ✔     | ✔       |
| P2            | ✔     | ✔     | ✔     | ✔    | ✔    | ✔     | ✔       |
| P3            |       |       |       |      | ✔    |       |         |

### Ethernet port

10/100 Mb Ethernet, PoE+ (Power over Ethernet) 802.3af/at.

## Supported serial topologies

### Single camera on CI0

![CI0 with one serial camera — basic configuration diagram](/img/productGfx/CI0/cyanview-support-CI0-manual-serial-one-camera-configuration@2x-8.png)

Basic configuration where the CI0 makes a camera remotely managed.

### One camera per port

![CI0 with two serial cameras — one per port configuration diagram](/img/productGfx/CI0/cyanview-support-CI0-manual-serial-two-camera-configuration@2x-8.png)

Multiple serial cameras connected to the CI0, one per port. The base **CY-CI0** has two ports; the **CY-CI03P** has three.

### A bus of cameras

![CI0 serial bus topology with multiple cameras on one port](/img/productGfx/CI0/cyanview-support-CI0-manual-serial-bus-camera@2x-8.png)

When a camera supports **serial bus**, multiple cameras can share a single port — see the CI0 Serial BUS documentation.

## Connection and setup

### Network setup

![CI0 IP network connection diagram](/img/diagrams/cyanview-support-CI0-manual-serial-IP-network@2x-8.png)

The CI0 is designed to be plug-and-play. IP addresses are fixed based on the serial number, and a discovery process makes the CI0 appear automatically in the RCP interface.

**Required ports:**
- UDP 3838 for discovery.
- TCP 1883.
- Random port for serial communication.

### WiFi

![CI0 WiFi setup with TPLink nano router](/img/Configuration/CI0WiFi.png)

Use a TP-Link nano router to control your camera over WiFi. Follow the [WiFi setup guide](/docs/guides/networking/wifi).

### Power connection

The CI0 can be powered through **PoE+** or an external **12V 2A DC** power supply.

With PoE, the output voltage on port connectors is 12V DC regulated. With the DC IN plug, the voltage is not regulated — the input voltage passes directly to the camera ports. Ensure your cameras support the voltage you supply.

![CI0 power supply specification diagram](/img/productGfx/CI0/cyanview-support-CI0-manual-serial-power-supply-specification@2x-8.png)

- **DC IN** accepts 10–24V. The input voltage is applied directly to the camera, so if you use batteries, confirm the camera supports the higher battery voltage. Camera consumption should not exceed **12W per port** for thermal reasons.
- With **PoE+**, the power supplied to the camera is **12V 1A** depending on the switch. Regular PoE is sufficient for most mini-cameras.

The power plug is a [Switchcraft 762K](http://www.switchcraft.com/Product.aspx?ID=7007) or compatible (5.5×2.1 mm) with a locking screw. D-TAP to DC locking screw cables are available online. For custom cables, you can also use a [Digikey 10-00110](https://www.digikey.com/en/products/detail/tensility-international-corp/10-00110/2123065) cable cut in half.

![Switchcraft 762K locking power connector](/img/3Parties/cyanview-support-manual-switchcraft-power-connector.png)

![Switchcraft 762K pinout diagram](/img/3Parties/Switchraft-762K-pinout@2x-8.png)

## CI0 status

Network connectivity status appears on the lateral LCD screen.

![CI0 lateral LCD status screen](/img/productGfx/CI0/cyanview-support-manual-screen-lcd@2x-8.png)

Status icons:
- ![CI0 waiting for network connection status icon](/img/productGfx/CI0/cyanview-support-manual-screen-lcd-wait-ethernet-status.png) — CI0 is waiting for a network connection.
- ![CI0 connected to network but not RCP status icon](/img/productGfx/CI0/cyanview-support-manual-screen-lcd-X-status.png) — CI0 is connected to the network but not to an RCP.
- ![CI0 discovered by an RCP status icon](/img/productGfx/CI0/cyanview-support-manual-screen-lcd-discovery-status.png) — CI0 is discovered by an RCP.
- ![Camera 01 configured on port 1 but not connected status icon](/img/productGfx/CI0/cyanview-support-manual-screen-lcd-camera-configured-status.png) — Camera 01 is configured on port 1 but not connected.
- ![Camera 01 connected to CI0 status icon](/img/productGfx/CI0/cyanview-support-manual-screen-lcd-camera-connected-status.png) — Camera 01 is connected to CI0.

If a camera is configured on port 2, the number appears on the right side: ![Camera connected on port 2 status icon](/img/productGfx/CI0/cyanview-support-manual-screen-lcd-camera-connected-status-port-2.png)

On the CY-CI03P, the third port status appears in the center: ![Camera connected on port 3 status icon (CI03P)](/img/productGfx/CI0/cyanview-support-manual-screen-lcd-camera-connected-status-port-3.png)

Press either button beside the screen to cycle through: camera name on PORT1, PORT2, CI0 IP address, CI0 MAC address. The screen returns to default after a few seconds.

## Update

The CI0 updates automatically when the RCP or GWY software version changes, ensuring firmware stays synchronized. If the CI0 firmware version does not match what the RCP requires, it updates at startup.

## Troubleshooting

See the [troubleshooting section](/docs/reference/troubleshooting/troubleshooting) for common issues and solutions.

### CI0 doesn't start

A working CI0 shows:
- Steady green RJ45 LED (100 Mbps link)
- Blinking orange RJ45 LED (link activity)
- Screen displaying `>-<` or `<->` with numbers

Steps to resolve:
1. Check your wiring. Try connecting your CI0 and RCP/GWY to the same switch.
2. Perform a config reset on your RCP/RIO/GWY to verify the CI0 is detected.
3. If using PoE, try a 12V DC power supply.
4. If already using a 12V DC supply, try a different one.

### Force a firmware update

You can force a CI0 firmware update. Make sure an RCP, GWY, or RIO is on the same network.

1. Hold both buttons while powering the CI0.
2. Release after 5 seconds.
3. If the LEDs blink, the CI0 is in bootloader mode.
4. Within 1 minute, the CI0 should return to normal and display `>-<`.

<video poster="/img/productGfx/CI0/cyanview-support-manual-force-firmware-update.jpg" muted controls>
    <source src="/img/productGfx/CI0/cyanview-support-manual-force-firmware-update.mp44"/>
</video>

### Power supply issues

If camera control drops intermittently or the camera reboots continuously, switch from PoE to a dedicated power supply.

On some cameras (for example, a Dreamchip ATOM 4K with a motorized lens), the startup power spike can overwhelm the supply. Use a dedicated power supply for the camera.

If multiple cameras are connected to the same CI0, remove them all and reconnect them one at a time.

### CI0 screen shows 'X'

The CI0 cannot communicate with the RCP/RIO over the network.

- Check your wiring.
- Verify network activity on the green and yellow LEDs of the Ethernet port.
- Make sure UDP port 3838 is not blocked.

### Camera not powered and screen is dark

This is a known bug in old CI0 units running software 21.10.

1. [Upgrade](/docs/reference/product-update) your RCP/GWY to version 21.11.1 or later.
2. Force a firmware update on your CI0 using the [guide above](#force-a-firmware-update).
