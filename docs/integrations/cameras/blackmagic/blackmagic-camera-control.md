---
id: blackmagic-camera-control
title: "Blackmagic camera control"
sidebar_label: "Blackmagic overview"
description: "Control Blackmagic cameras with Cyanview over IP, SDI, or ATEM. Full paint, exposure, gamma, and saturation control across URSA, Studio, Pocket, and PYXIS models."
keywords: [Blackmagic, SDI control, RSBM, CI0BM, IP, ATEM, paint, URSA, Studio Camera, Cyanview]
slug: /integrations/cameras/blackmagic/blackmagic-camera-control
---

Cyanview gives you full remote paint control of Blackmagic cameras — iris, gain, shutter, white balance, black balance, gamma, saturation, and more. You can connect over IP (REST API), SDI (using the [RSBM](/docs/products/rsbm) or [CI0BM](/docs/products/ci0)), or through an ATEM switcher.

![Blackmagic Ursa](/img/Integrations/Blackmagic/ursa-2.png)
![Blackmagic Microstudio](/img/Integrations/Blackmagic/BM-microstudio-G2-2.png)

## Control methods

Blackmagic cameras support three control paths:

| Method | Description | Feedback |
|:-------|:------------|:---------|
| **IP (REST API)** | Direct Ethernet connection to the camera | Bidirectional |
| **SDI** | Control metadata embedded in the SDI program feed via RSBM or CI0BM | Unidirectional |
| **ATEM** | Control routed through an ATEM switcher to cameras via SDI return | Bidirectional to ATEM, unidirectional to cameras |

## Supported models

#### IP only
- Blackmagic PYXIS 6K

#### IP and SDI
- URSA Cine 17K 65, URSA Cine 12K LF, URSA Cine Immersive
- Cinema Camera 6K
- URSA G2 Broadcast
- Micro Studio Camera 4K G2
- Studio Camera 4K Plus, 4K Pro, 6K Pro
- Studio Camera 4K Plus G2, 4K Pro G2

#### SDI only
- Micro Studio 4K
- URSA Mini 12K, URSA Mini Pro 12K

#### HDMI via Microconverter
Pocket Cinema cameras use HDMI, not SDI. To control them, use a Blackmagic Microconverter to convert HDMI to SDI. The converter also passes the return SDI signal back to the camera over the HDMI data link.

:::info Firmware requirements
Update both the camera and Cyanview equipment to the latest firmware. Blackmagic introduced IP control via REST API in 2024 — older firmware does not support it. New gain commands were also added for URSA cameras in 2024. If gain control does not work correctly, update your firmware.
:::

:::danger Tally over IP — partial support
Tally over IP is now available for the **URSA G2 Broadcast** and **PYXIS** (requires RCP/RIO release 25.12.1-rc2 or later). Tally over SDI or ATEM remains available on all models except URSA Cine. Other models may receive IP tally in future Blackmagic firmware updates.
:::

## Supported controls

| Control | Notes |
|:--------|:------|
| **Iris** | Manual and AUTO |
| **Gain** | dB or ISO |
| **Shutter** | Manual, AUTO, ECS |
| **White balance** | R/G/B gains, color temperature, tint |
| **Black balance** | R/G/B, master black level |
| **Gamma** | R/G/B, master gamma |
| **Saturation / Hue** | Saturation and hue |
| **Record** | ON/OFF, status, timecode |
| **Tally** | Red/green — SDI/ATEM on all models (except URSA Cine); IP on URSA G2 Broadcast and PYXIS only |
| **Lens** | Zoom and focus |

:::note SDI control is unidirectional
SDI control (whether direct or through an ATEM) is unidirectional — the camera does not send feedback to the RCP. Values displayed on the RCP may drift from the camera's actual state, causing jumps when you make adjustments.
:::

## Workflows

### IP workflow

Connect the camera directly to the RCP over Ethernet. Some cameras lack an RJ45 port and require a USB-C to Ethernet adapter. Blackmagic recommends the Belkin USB-C to Gigabit Ethernet Adapter for best reliability.

![Blackmagic IP workflow](/img/Integrations/Blackmagic/Blackmagic-IP-connect.png)

### SDI workflow

Control cameras over SDI using an RSBM board or CI0BM. There are two hardware options:

#### RSBM with CI0 or RIO

The [RSBM](/docs/products/rsbm) combines the SDI control board with power and signal converters. Connect it to any CI0 or RIO via one of the two serial ports.

![RSBM with RIO workflow](/img/Integrations/Blackmagic/Blackmagic_SDI_Workflow_SDI_RIO.png)

#### CI0BM (all-in-one)

The [CI0BM](/docs/products/ci0) integrates the SDI control board directly into the CI0. SDI control runs through an internal port, leaving both serial ports free for camera or lens control.

<img class="diagram" alt="CI0BM SDI workflow" src="/img/Integrations/Blackmagic/Blackmagic_SDI_Workflow_CI0_SDI.png" width="500" />

### ATEM workflow

:::warning
Use caution with ATEM in large-scale setups. ATEM switchers can be sensitive to the number of connected devices and command volume. Group commands across many cameras can overwhelm the ATEM and cause instability.
:::

![ATEM workflow](/img/Integrations/Blackmagic/Blackmagic_SDI_Workflow_ATEM.png)

Use this workflow when you already have an ATEM switcher with SDI program output connected to your cameras, and you want to use the Cyanview RCP alongside or instead of Blackmagic's own panels. Communication between the RCP and ATEM is bidirectional — adjustments on either side stay in sync. Control from the ATEM to cameras remains unidirectional (standard Blackmagic behavior).

## Configuration

### IP setup

#### Configure the camera

1. Launch **Blackmagic Camera Setup** and select your camera (connect via USB for initial setup if Ethernet is not yet enabled)
2. Set the camera's IP address (DHCP or static) for your network:

<img src="/img/Integrations/Blackmagic/BM-IP-software-IP.png" width="500" alt="Blackmagic Camera Setup IP configuration" style={{border: '1px solid #000000ff', borderRadius: '2px'}} />

3. Enable **Web media manager (HTTP)** — this activates the REST API for remote control:

<img src="/img/Integrations/Blackmagic/BM-IP-software-remote.png" width="500" alt="Blackmagic Camera Setup remote control" style={{border: '1px solid #000000ff', borderRadius: '2px'}} />

#### Configure the RCP

In the [RCP web UI](/docs/reference/manuals/rcp/web-ui):

1. Click **+** to add a new camera

![Add camera](/img/Configuration/Quick_Start/Quick_Start_Addcamera.png)

2. Enter a camera number and name

![Camera name](/img/Configuration/Quick_Start/Quick_Start_GeneralName.png)

3. Select **Blackmagic** as the brand, **IP** as the model
4. Enter the camera's IP address

![Blackmagic IP setup](/img/Integrations/Blackmagic/BM-IP-setup.png)

The status indicator turns green when connected:

![Connected status](/img/Integrations/Blackmagic/RSBM-block.png)

### SDI setup

In the [RCP web UI](/docs/reference/manuals/rcp/web-ui):

1. Click **+** to add a new camera

![Add camera](/img/Configuration/Quick_Start/Quick_Start_Addcamera.png)

2. Enter a camera number and name

![Camera name](/img/Configuration/Quick_Start/Quick_Start_GeneralName.png)

3. Select **Blackmagic** as the brand, **SDI** as the model
4. Select the serial port:
   - **CI0BM** — select `CI0 port 3`
   - **RSBM on a RIO** — select the port where the RSBM is connected

![Blackmagic SDI setup](/img/Integrations/Blackmagic/RSBM-setup.png)

A green status indicates the CI0 or RIO is communicating with the RSBM. Because SDI control is unidirectional, there is no way to verify the camera connection from this interface.

![SDI connected status](/img/Integrations/Blackmagic/RSBM-block.png)

:::note
The RCP uses camera ID `1` by default. To control multiple cameras or use a different ID, see [Multi-camera SDI control](#multi-camera-sdi-control) below.
:::

### Multi-camera SDI control

You can control multiple Blackmagic cameras over a single SDI signal using the RSBM or CI0BM — similar to how ATEM uses the program return feed.

#### 1. Assign camera numbers

Set a unique **Camera Number** on each camera (1–255). This number must match the camera number in the RCP configuration.

#### 2. Create an SDI control bus

In the RCP/RIO web UI:

1. Click **+** in the **Features** section
2. Select **Blackmagic : SDI Bus**
3. Select your CI0 port (port 3 for CI0BM, or port 1/2 for CI0/RIO + RSBM)
4. Set the ID range to cover your cameras (e.g., 1–8)
5. Leave other settings at their defaults

![SDI Bus setup](/img/Integrations/Blackmagic/BM-SDI-BUS-setup.png)

#### 3. Assign cameras to the bus

1. Click **+** in the camera section
2. Select **Blackmagic** as the brand and **Studio camera** as the model
3. In the interface dropdown, select your CI0 serial, RSBM port, and camera ID

![Camera bus assignment](/img/Integrations/Blackmagic/BM-camera-BUS-setup.png)

The camera should turn green:

![Camera bus connected](/img/Integrations/Blackmagic/BM-camera-BUS-block.png)

### ATEM setup

1. First, add your ATEM to the RCP configuration — see the [ATEM integration guide](/docs/integrations/cameras/blackmagic/atem#configuration)
2. Verify the ATEM block is green:

![ATEM connected](/img/Integrations/Blackmagic/ATEM-block.png)

3. Click **+** to add a camera
4. Enter a camera number and name
5. Select **Blackmagic** as the brand, **Atem** as the model
6. Select your ATEM and camera ID in the interface dropdown

![ATEM camera setup](/img/Integrations/Blackmagic/BM-camera-settings.png)

![ATEM camera connected](/img/Integrations/Blackmagic/BM-camera-block.png)
