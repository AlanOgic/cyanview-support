---
id: ci0-manual
title: "CI0 manual"
sidebar_label: "CI0 manual"
description: "Complete manual for the Cyanview CI0 camera interface. Installation, wiring, configuration, and troubleshooting."
keywords: [CI0, manual, installation, wiring, configuration]
slug: /reference/manuals/ci0/ci0-manual
---

This page covers the **generic** CI0 characteristics and configurations. **Specific** guidance for supported cameras and devices configuration can be found in the *Integration* section.

## CI0 Ports

### Serial Ports

<img alt="cyanview-support-CI0-manual-serial-port" src="/img/productGfx/CI0/cyanview-support-CI0-manual-serial-port@2x-8.png" width="600" />

#### Connectors

Serial ports connector refererence: Hirose HR10A-7R-6S(73)

Mating plug for cables: HR10A-7P-6P(73)

Cyanview provides a range of cables to interface most cameras. Please refer to our [cable page](/docs/resources/cable-catalog).

The *Integration* manuals also provide information on what cable to use for what camera.

#### Port Pinout

<table>
<tr>
<th rowspan='9'><img alt="cyanview-support-CI0-manual-serial-port-pinout" src="/img/productGfx/CI0/cyanview-support-CI0-manual-serial-port-pinout@2x-8.png" width="200px"/><br/>Female receptacle.</th>
<th>PIN Number</th>
<th colspan='3'>Protocol Pinouts</th>
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

#### CI0 Models

Different CI0 models differentiates on **number** and **type** of ports:

- **CY-CI0**: Standard two ports.
- **CY-CI03P**: A third ports available for cam head management.
- **CY-CI0BM**: CI0 two ports with BlackMagic SDI control extension (see: BM serial cam integration manual).

#### Supported protocols

Different CI0 Ports will support different protocols:

| Port/Protocol | RS485 | RS232 | RS422 | LANC | SBUS | VISCA | B4 Lens |
| ------------- | ----- | ----- | ----- | ---- | ---- | ----- | --------- |
| P1            | V     | V     | V     |      |      | V     | V         |
| P2            | V     | V     | V     | V    | V    | V     | V         |
| P3            |       |       |       |      | V    |       |           |


### Ethernet Port

10/100Mb Ethernet, PoE+ (Power over Internet) 802.3af/at

## Supported Serial topology

### A serial camera connected to CI0

<img alt="cyanview-support-CI0-manual-serial-one-camera-configuration" src="/img/productGfx/CI0/cyanview-support-CI0-manual-serial-one-camera-configuration@2x-8.png" width="800" />

- Basic configuration where CI0 turns a camera into managed camera.

### A camera on each port

<img alt="cyanview-support-CI0-manual-serial-two-camera-configuration" src="/img/productGfx/CI0/cyanview-support-CI0-manual-serial-two-camera-configuration@2x-8.png" width="800" />

- Several Serial camera connected to CI0.
- One serial camera by port.
- Two ports available on base **CY-CI0** model, three ports available on **CY-CI03P**.

### A BUS of cameras

<img alt="cyanview-support-CI0-manual-serial-bus-camera" src="/img/productGfx/CI0/cyanview-support-CI0-manual-serial-bus-camera@2x-8.png" width="800" />

- When camera supports **Serial BUS**, several camera can be connected on a single port (see: CI0 Serial BUS).


## Connection and Setup

### Network setup

<img alt="cyanview-support-CI0-manual-serial-IP-network" src="/img/diagrams/cyanview-support-CI0-manual-serial-IP-network@2x-8.png" width="700" />

The CI0 has been designed to be plug and play and avoid conflicts. As such, IP addresses are fixed based on the serial number, and a discovery process makes the CI0 appear automatically on the RCP interface.

**Required ports**

CI0 relies on TCP/IP network with no port limitation in order to communicate with other devices.

Mandatory ports:

- 3838 UDP port for discovery.
- 1883 TCP port.
- Random port for serial communication.

### WiFi

<img src="/img/Configuration/CI0WiFi.png" />


By using a TPLink nano router, you can control your camera over WiFi.
You can follow this [guide](/docs/guides/networking/wifi) to guide you through the setup.


### Power Connection

The CI0 can be powered through **PoE+** or an external **12V 2A DC** power supply.

When powered with PoE, the output voltage on ports connectors will be 12V DC, regulated. When powered with the DC IN plug, the voltage is not regulated. Thus, the input voltage will be present on the 2 camera ports. Make sure that the cameras connected support the voltage you supply on DC IN.

<img alt="cyanview-support-CI0-manual-serial-power-supply-specification" src="/img/productGfx/CI0/cyanview-support-CI0-manual-serial-power-supply-specification@2x-8.png" width="500" />

- **DC IN** voltage is between 10V and 24V. The input voltage will be directly applied to the camera so if you power from batteries, make sure the camera does support the higher battery voltage as well.
For thermal reasons, camera consumption should not exceed **12W** by port.
- When using **PoE+**, the power provided to the camera is **12V 1A**, depending on the network switch. For most mini-cameras, regular **PoE** is enough and PoE+ isn't necessary.

The power plug is a [switchcraft 762K](http://www.switchcraft.com/Product.aspx?ID=7007) or compatible (5.5x2.1mm) with a locking screw. D-TAP to DC locking screw cables are easily found in online shops. To build custom cables, another option is to use the [Digikey 10-00110](https://www.digikey.com/en/products/detail/tensility-international-corp/10-00110/2123065) cable cut in half.

<img alt="cyanview-support-manual-CI0-switchcraft-power-connector" src="/img/3Parties/cyanview-support-manual-switchcraft-power-connector.png" width="120" />

<img alt="cyanview-support-manual-CI0-switchcraft-762k-pinout" src="/img/3Parties/Switchraft-762K-pinout@2x-8.png" width="250" />

## CI0 status

CI0 **network connectivity status** is displayed on the lateral LCD screen.

<img alt="cyanview-support-manual-screen-lcd" src="/img/productGfx/CI0/cyanview-support-manual-screen-lcd@2x-8.png" width="300" />

Status:
- <img alt="cyanview-support-manual-screen-lcd-wait-ethernet-status" src="/img/productGfx/CI0/cyanview-support-manual-screen-lcd-wait-ethernet-status.png" width="78" /> CI0 is waiting for network connection.
- <img alt="cyanview-support-manual-screen-lcd-X-status" src="/img/productGfx/CI0/cyanview-support-manual-screen-lcd-X-status.png" width="78" /> CI0 is connected to the network but not RCP.
- <img alt="cyanview-support-manual-screen-lcd-discovery-status" src="/img/productGfx/CI0/cyanview-support-manual-screen-lcd-discovery-status.png" width="78" /> CI0 is discovered by an RCP.
- <img alt="cyanview-support-manual-screen-lcd-camera-configured-status" src="/img/productGfx/CI0/cyanview-support-manual-screen-lcd-camera-configured-status.png" width="78" /> Camera 01 is configured on port 1 but not connected to CI0.
- <img alt="cyanview-support-manual-screen-lcd-camera-connected-status" src="/img/productGfx/CI0/cyanview-support-manual-screen-lcd-camera-connected-status.png" width="78" /> Camera 01 connected to CI0.

In this example, status screen shows that camera 01 is configured on Port 1 (left), if camera is configured on port 2 (right), the camera number would be displayed on the right side 

- <img alt="cyanview-support-manual-screen-lcd-camera-connected-status-port-2" src="/img/productGfx/CI0/cyanview-support-manual-screen-lcd-camera-connected-status-port-2.png" width="78" />.

When using a CY-CI03P, the third port status is displayed in the middle: 

- <img alt="cyanview-support-manual-screen-lcd-camera-connected-status-port-3" src="/img/productGfx/CI0/cyanview-support-manual-screen-lcd-camera-connected-status-port-3.png" width="78" />

When pushing one of the button aside the screen, the screen will loop the following information: Camera name on PORT1, PORT2, CI0 IP address, CI0 MAC address. The screen will display the default information after a few seconds.

## Update

CI0 is updated automatically by the RCP or GWY when the software version changes. This ensures that the firmware is always synchronized with the corresponding software. If the CI0 firmware version doesn't match the version required by the RCP, the CI0 will be updated at startup.

## Troubleshooting

You can find typical issues and solution in this dedicated [section](/docs/reference/troubleshooting/troubleshooting)

### CI0 doesn't start

A working CI0 should have:
* RJ45 steady green LED (operating at 100-Mbps)
* RJ45 blinking orange LED (activity on the link)
* screen showing `>-<` or `<->` with numbers

1. Check your wiring. Eventually put your CI0 and RCP/GWY on the same switch.
2. Perform a config reset of your RCP/RIO/GWY. To check that the CI0 is detected properly.
3. If you're in PoE, try using a 12V DC power supply.
4. If you're already using a 12V DC power supply, try another one.

### Force a firmware update

It is possible to force a CI0 firmware update.

Ensure to have a RCP/GWY/RIO on the same network.

1. Hold the 2 buttons pressed while you power it
2. Release after 5 seconds
3. If the LEDs blink, then it's in bootloader.
4. After maximum 1 minute it should come back to life and display `>-<`


<video poster="/img/productGfx/CI0/cyanview-support-manual-force-firmware-update.jpg" muted controls>
    <source src="/img/productGfx/CI0/cyanview-support-manual-force-firmware-update.mp44"/>
</video>

### Power supply issues

If your camera control sometimes drops or if your camera reboots continuously.
Try to switch from PoE to a dedicated power supply.

On some camera (Dreamchip ATOM 4K with a motorised lens for example), the init power spike can be "too much". Use a dedicated power supply for your camera.

If you have multiple camera plugged on the same CI0, try to remove them all and plug them one by one.


### CI0 screen 'X'

CI0 can't communicate with RCP/RIO over the network.

- Check your wiring
- Verify network connections: activity on the green and yellow LED of ethernet port.
- Make sure 3838 UDP port is not blocked.

### Camera not powered and screen is dark

This is a bug on old CI0 with software 21.10

1. [Upgrade](/docs/reference/product-update) your RCP/GWY to 21.11.1 or later (to have the bug fix)
2. Force a firmware update on your CI0 by following this [guide](/docs/reference/manuals/ci0/ci0-manual#force-a-firmware-update)
