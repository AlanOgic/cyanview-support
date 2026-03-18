---
id: blackmagic-camera-control
title: "Blackmagic camera control"
sidebar_label: "Blackmagic overview"
description: "Control Blackmagic cameras with Cyanview over SDI using the RSBM board or CI0BM. Full paint and exposure control."
keywords: [Blackmagic, SDI control, RSBM, CI0BM, paint]
slug: /integrations/cameras/blackmagic/blackmagic-camera-control
---

# Blackmagic Cameras

![Blackmagic Ursa](/img/Integrations/Blackmagic/ursa-2.png)
![Blackmagic Microstudio](/img/Integrations/Blackmagic/BM-microstudio-G2-2.png)

Blackmagic allows camera control via 3 methods:
* IP to the camera using the REST API
* SDI metadata through the program input of the camera
* IP to an ATEM (the ATEM then controls the camera via the SDI return feed; in this setup, camera control is still considered SDI-based)


## Supported models

#### IP only

- Blackmagic PYXIS 6K

#### IP & SDI Camera Control

- Blackmagic URSA Cine 17K 65
- URSA Cine 12K LF
- Blackmagic URSA Cine Immersive
- Cinema Camera 6K
- URSA G2 Broadcast
- Micro Studio Camera 4K G2
- Studio Camera 4K Plus
- Studio Camera 4K Pro
- Studio Camera 6K Pro
- Studio Camera 4K Plus G2
- Studio Camera 4K Pro G2

#### SDI Only

- Micro Studio 4K
- Ursa Mini 12K
- Ursa Mini pro 12K

#### HDMI from SDI through Microconverter

Pocket Cinema cameras can be controlled via the SDI protocol, but require the Blackmagic Microconverter to convert the camera’s HDMI output to SDI. This converter also takes the return SDI signal, enabling camera control commands to be sent back to the camera over the HDMI return data link.

:::info[Firmware UPDATE!]

Please be aware it is highly recommended that the camera and cyanview equipment is updated to the latest software version.

In 2024, Blackmagic introduced IP control via the REST API. Older firmware versions will not support this feature.
While the SDI return video control remains unchanged, new gain commands were added to the Ursa cameras in 2024. We have adjusted our system to ensure compatibility with both newer and older cameras. If gain control does not function correctly, it is likely an indication that an update is required.
:::


:::danger[TALLY now partly available on IP Control]

As of December 2025, tally functionality was not available in the REST API, but it has now been added for the **Ursa G2 Broadcast** and **Pyxis** cameras. This feature is available starting from release 25.12.1-rc2 of the RCP or RIO. We hope other camera models will receive tally support in future firmware updates.
:::


## Supported Control

|Control|Notes|
:-----|:-----|
**Iris** Manual and AUTO iris | |
**Gain** Gain in dB or ISO ||
**Shutter** Manual, AUTO, ECS ||
**White balance**  R/G/B gains, Color Temperature and tint | |
**Black balance** R/G/B/Master black level| |
**Gamma** R/G/B and Master Gamma| |
**Saturation/Hue** Saturation & Hue| |
**Record** ON/OFF, status and TC | |
**Tally** Red/Green tally |Available over SDI or Atem on all models except the Ursa Cine.<br/>Available over IP only on Ursa G2 Broadcast and Pyxis.|
**Lens** Zoom and Focus | |

:::note
One important point to note is that control through SDI, whether it's directly sent from the RCP or through the Atem and program video path, results in unidirectional control. This means the camera will not send any feedback about its current state to the RCP or Atem. As a result, values on the camera may differ from those displayed by the RCP, leading to potential jumps when adjustments are made.
:::


## Workflows
### Camera control via IP

Some cameras don’t have an RJ45 port and require a USB-C to Ethernet adapter. While most adapters work with the cameras, Blackmagic recommends the Belkin USB-C to Gigabit Ethernet Adapter in their manuals, noting that although other adapters may function, the Belkin’s chipset has proven to be the most reliable for RTMP video streaming workflows.

![Blackmagic IP Connect](/img/Integrations/Blackmagic/Blackmagic-IP-connect.png)

### SDI Workflow

Camera control via SDI is enabled by integrating a Blackmagic SDI control injection board with a standard CI0 or RIO unit.

There are two main approaches for SDI camera control: using a dedicated single-box solution, or adding a converter to existing CI0 or RIO equipment.

#### RSBM

The RSBM combines the SDI control board with power and signal conditioning converters, creating an interface that can be connected to any standard CI0 or RIO via one of its two serial ports.

![Blackmagic RIO Connect](/img/Integrations/Blackmagic/Blackmagic_SDI_Workflow_SDI_RIO.png)

#### CI0BM

For a streamlined setup, the SDI control board is also available as an integrated layer within the CI0, resulting in an all-in-one device. This configuration offers the same functionality as the RSBM, but routes SDI control through an internal port, leaving both serial ports on the CI0 free for other camera or lens control tasks.

<!--![Blackmagic CI0 Connect](/img/Integrations/Blackmagic/Blackmagic_SDI_Workflow_CI0_SDI.png)-->
<img class="diagram" alt="Blackmagic CI0 connection" src="/img/Integrations/Blackmagic/Blackmagic_SDI_Workflow_CI0_SDI.png" width="500" />

### ATEM Workflow

:::warning
We advise caution when using this integration in large-scale setups. Blackmagic ATEM switchers can be sensitive to both the number of connected devices and the volume of control commands sent. Managing multiple cameras, especially when issuing group commands, may result in a high command throughput that can overwhelm the ATEM and potentially causing instability.
:::

![Blackmagic ATEM Connect](/img/Integrations/Blackmagic/Blackmagic_SDI_Workflow_ATEM.png)

This workflow is most commonly used when you already have an ATEM switcher with SDI program output connected to your cameras’ PGM inputs, and you want to use control panels other than Blackmagic’s own. In this setup, communication between the RCP and the ATEM is bidirectional, so adjustments made on either the RCP or within the ATEM software’s RCP tab will stay in sync and reflect each other in real time. However, it’s important to note that control from the ATEM to the cameras remains unidirectional just as with a standard Blackmagic workflow.


## Configuration

### Camera control via IP setup

#### Camera Setup

Launch Blackmagic Camera Setup and select your camera from the detected devices. For initial setup, connect the camera via a USB cable, unless control over Ethernet has already been enabled.

Within the software, configure the camera's `IP address`. Ensure it is a `valid IP` for your network, whether using `DHCP` or a `static` assignment.

<img
  src="/img/Integrations/Blackmagic/BM-IP-software-IP.png"
  width={500}
  style={{
    border: '1px solid #000000ff',
    borderRadius: '2px',
  }}
/>

Enable `Web media manager (HTTP)` which provides the remote control REST protocol.

<img src="/img/Integrations/Blackmagic/BM-IP-software-remote.png" width="500"style={{
    border: '1px solid #000000ff',
    borderRadius: '2px',
  }}/>

#### RCP/RIO Setup

Access the RCP's UI -> 'Quick Start Guide - RCP Start'

- In the Camera section click on `+` to add a new camera

![Quick Start Add Camera](/img/Configuration/Quick_Start/Quick_Start_Addcamera.png)

- In `General` add a camera `number` and `name`. This is anything related to your workflow.

![Quick Start General Add Name](/img/Configuration/Quick_Start/Quick_Start_GeneralName.png)

- Select brand: Blackmagic
- Select model: `IP`
- Enter the IP of the camera. This example used `10.192.88.228`

![BM Camera IP](/img/Integrations/Blackmagic/BM-IP-setup.png)

If configured correctly, the status will go green

![BM Camera RSBM](/img/Integrations/Blackmagic/RSBM-block.png)

### Camera control via SDI

Access the RCP's UI -> 'Quick Start Guide - RCP Start'

- In the Camera section click on `+` to add a new camera

![Quick Start Add Camera](/img/Configuration/Quick_Start/Quick_Start_Addcamera.png)

- In `General` add a camera `number` and `name`. This is anything related to your workflow.

![Quick Start General Add Name](/img/Configuration/Quick_Start/Quick_Start_GeneralName.png)

* Select brand `Blackmagic`
* Select model `SDI`
* If you're using a `CI0BM`, select the `CI0 port 3`
* If you're using `RSBM` on a `RIO`, select the port on which the `RSBM is plugged`

![Blackmagic RSBM](/img/Integrations/Blackmagic/RSBM-setup.png)

If configured correctly, the status will turn green. This indicates that the CI0 or RIO is communicating with the RSBM, but it does not confirm that the camera itself is connected. Because camera control is unidirectional, there is no way to verify the camera connection from this interface.

![BM Camera](/img/Integrations/Blackmagic/RSBM-block.png)

:::note
The RCP uses camera ID `1` for control. If you need to use a different ID, or control multiple cameras, please refer to the 'Control of multiple cameras over a single SDI signal' section below. Otherwise, ensure all your cameras are configured with control ID `1` in their settings.
:::

### Control of multiple cameras over a single SDI signal

Controlling multiple cameras over a single SDI signal works similarly to using the ATEM program return to send control commands to all your cameras. With the RSBM or CI0BM interface, you can manage several cameras on what is referred to as a "bus."

#### Configure the cameras

To set this up, each camera must be assigned a unique `Camera Number` in its settings. This is the same approach used when controlling multiple cameras from an ATEM switcher, where each camera is given the number that matches its ATEM input. In this workflow, the camera number should correspond to the number assigned in the RCP (from 1 to 255).

#### Create a Blackmagic SDI control bus

Once the cameras are assigned a number, the rest of the configuration is done on the RCP (or RIO).

* In your RCP/RIO web UI
* Click on `+` in the Features section
* Select `Blackmagic : SDI Bus`
* On the new block that just appeared, select your CI0 (port 3 for a CI0BM, and 1 or 2 if you're using a CI0/RIO+RSBM)
* Adjust the IDs range based on the min and max numbers you have to control — here we handle the cameras from ID 1 to 8
* The other settings should be left unchanged

![BM Camera BUS](/img/Integrations/Blackmagic/BM-SDI-BUS-setup.png)

#### Assign a bus channel to the cameras on the RCP

* Click on the `+` in the camera block, a new panel will appear on the right
* In `General` Configure a Number and a Name
* Select `Blackmagic` for the brand and `Studio camera` as the model.
* Then select in the interface drop-down list your CI0 serial and camera ID.
* Here, my CI0 is `CI0-20-36`, I have an RSBM on the port `2` and on the bus, my cam has the ID `1`:

![BM Camera BUS](/img/Integrations/Blackmagic/BM-camera-BUS-setup.png)

Your camera should be green and working:

![BM Camera BUS](/img/Integrations/Blackmagic/BM-camera-BUS-block.png)

### Camera control via ATEM

Access the RCP's UI -> 'Quick Start Guide - RCP Start'

You first need to add your ATEM in your configuration, see this [guide](/docs/Integrations/Blackmagic/atem#configuration).

You should have this block configured and green:

![BM Camera ATEM](/img/Integrations/Blackmagic/ATEM-block.png)

- In the Camera section click on `+` to add a new camera

![Quick Start General Add Name](/img/Configuration/Quick_Start/Quick_Start_Addcamera.png)

- In `General` add a camera `number` and `name`. This is anything related to your workflow.

![Quick Start General Add Name](/img/Configuration/Quick_Start/Quick_Start_GeneralName.png)

* Select `Blackmagic` for the brand and `Atem` as the model.
* Then select in the interface drop-down list your ATEM and camera ID

If your ATEM has the IP `10.192.1.3` and your camera the ID `1`:
* The camera setup:

![BM Camera](/img/Integrations/Blackmagic/BM-camera-settings.png)

* The camera block:

![BM Camera](/img/Integrations/Blackmagic/BM-camera-block.png)

<!--## Troubleshooting-->
