---
id: tally
title: "Tally configuration guide"
sidebar_label: "Tally"
description: "Configure tally lights and signals with Cyanview. Set up GPIO, IP, and network-based tally for your camera system."
keywords: [tally, GPIO, NIO, tally lights, broadcast]
slug: /guides/tally/tally
---

Tally information is distributed to cameras via the RCP and other Cyanview devices, based on data received from the video switcher. You typically ingest tally using the TSL protocol or through direct integration with a supported switcher. The RCP then relays tally to cameras through the control protocol or to an external tally light.

Tally data follows the same routing as camera control signals — whether transmitted locally between RCPs or distributed remotely via the REMI cloud through a RIO. Any device in the system can ingest tally data, and that information is automatically shared across all connected devices, locally and remotely.

**Tally input methods:**
- [TSL](#tsl)
- [GPI](#gpi) (RCP/NIO)
- [ATEM, VMix, Tricaster](#atem)
- [Pro-Bel SW-P-08 (VSM, etc.)](#pro-bel-sw-p-08)

**Tally output methods:**
- [Camera protocol](#camera-protocol) if supported (Panasonic UE150, Sony PMW-500, etc.)
- [GPO](#gpo) (RCP/NIO)
- [Embedded LED](#ci0rio-embedded-led) (CI0/RIO)
- [External LED](#ci0rio-external-led) (CI0/RIO)


## Tally input

### TSL

The RCP and other Cyanview devices (RIO, NIO) include a built-in TSL server that acts as a multiviewer. Each camera in your RCP configuration is assigned a TSL display ID matching its camera number. This lets the TSL protocol receive tally information for all configured cameras simultaneously through a single connection.

The RCP supports TSL versions 3.1 and 5.0 over UDP and TCP. Because the RCP acts as a TSL server, you must configure your TSL client (switcher or other device) to use the RCP's IP address as the screen/display IP address.

TSL is active by default. To configure it, select the TSL block in the Components section.

![TSL block in the Components section](/img/Integrations/TSL/TSL-block.png)

Click the TSL block to change the default configuration:

![TSL setup options](/img/Integrations/TSL/TSL-setup.png)

![TSL version selector](/img/Integrations/TSL/TSL-versions.png)

- **Active:** enable or disable the TSL server on the RCP.
- **Version:**
  - **TSL 3.1:** the "Tally 1" bit maps to green tally and the "Tally 2" bit maps to red tally. Tally 3 and 4 bits are ignored.
  - **TSL 5.0:** checks Left and Right hand bits for tally color. Red bit (0) or red bit (4) maps to red tally; green bit (1) or green bit (5) maps to green tally. Text tally state bits (2–3) are ignored.
  - **TSL 5.0-LR:** any left-hand tally bit (red or green) maps to red tally, and any right-hand tally bit maps to green tally, regardless of the color defined by the protocol. This matches the TSL 3.1 convention (no color definition) and is used by Ross and FOR-A.
  - **TSL 5.0-TXT:** only text tally bits 2–3 are used for color matching; left and right bits are ignored.
- **Transport:** UDP or TCP.
- **Port:** the port on which the RCP TSL server listens.
- **Synchronise labels:** renames cameras using the TSL UMD labels. When enabled, names are continuously synchronized with TSL labels. **Once now** updates names a single time using labels received so far.

Regardless of TSL version, assign the camera number to the display index on your TSL client. TSL 3.1 uses a single index (the address). TSL 5.0 has both a primary screen index and a display index — the screen index is ignored; the display index matches the camera number. In a multiviewer, this corresponds to the index of the video picture inside the multiview layout.

:::tip
If TSL 5.0 is not working, verify that tally data is sent to the Left Hand or Right Hand Lamp states, not the Text Tally state. TSL implementations vary — some use green left/red right, others use both lamps to indicate red or green, while text may always appear red regardless of actual tally color. The text tally bits are therefore not a reliable source for tally color.
:::

### GPI

Two common setups:
- If your GPIs are close to the RCP, connect a [CY-CBL-JACK-GPIO8](/docs/reference/manuals/rcp/gpio-dongle) to your RCP.
- If you need GPIO over Ethernet, Wi-Fi, or 4G, use a NIO.

To set up GPI tally:

1. Open the [GPIO](/docs/reference/manuals/rcp/web-ui) page of the RCP.
2. Associate the GPIO inputs with your cameras. Select **Red Tally** and click the cell at the intersection of the **GPI** row and **Camera** column.

![GPIO tally mapping showing GPI to camera assignment](/img/productGfx/RCP/RCP-GPIO-Tally-Mapping@2x-8.png)

In this example:
- `GPI 1` triggers **red tally** on camera `1`
- `GPI 2` triggers **red tally** on camera `2`
- `GPI 3` triggers **red tally** on camera `3`
- `GPI 4` triggers **red tally** on camera `7`

You can also control input polarity:
- Set the input level (**H** or **L**) to match your wiring.
- Click **L** to toggle between **H** and **L**.

![Tally input polarity toggle](/img/productGfx/RCP/RCP-Tally-Polarity-GPIO@2x-8.png)

:::note
The [CY-CBL-JACK-GPIO8](/docs/reference/manuals/rcp/gpio-dongle) pins are high by default. Select **L** to activate tally at low polarity, or **H** for high polarity.
:::

Green tally is configured the same way:

![GPIO tally mapping showing both red and green tally assignment](/img/productGfx/RCP/RCP-Tally-GPIO-Green@2x-8.png)

In this example:
- `GPI 2` triggers **red tally** on camera `2`
- `GPI 5` triggers **green tally** on camera `2`


### ATEM

First, configure your ATEM following [this guide](/docs/integrations/cameras/blackmagic/atem).

The setup concept is the same as the [Pro-Bel/VSM setup](#pro-bel-sw-p-08) described below.

### Pro-Bel SW-P-08

If you are using VSM, first configure it following [this guide](/docs/integrations/broadcast-systems/lawo-vsm).

- Link each camera to the corresponding `inputs`.
- Optional: link your RCP to an auxiliary `output`.
- Configure which `output` is **live** (generates red tally).
- Optional: configure which `output` is **preview** (generates green tally).

Example setup:
- 3 cameras: `cam A` (number 1), `cam B` (number 2), `cam C` (number 3)
- `cam A` is connected to `input 1`
- `cam B` is connected to `input 2`
- `cam C` is connected to `input 5`
- `RCP` is on `output 8`
- Red tally is based on `output 6`
- Green tally is based on `output 7`

With this configuration:
- The input of the selected camera links to `output 8` whenever you change camera on the RCP.
- A red tally output goes to the active camera when any of the three cameras goes live.
- A green tally output goes to the active camera when any of the three cameras enters preview.

![Pro-Bel/VSM setup configuration](/img/Integrations/VSM/Probel-setup.png)

### Tally status

In the RCP web UI, tally status is visible on the Configuration page.

![Camera configuration page with tally highlight](/img/productGfx/RCP/RCP-Tally-Camera-Highlight@2x-8.png)

On the RCP screen, the camera name background displays the tally color.

![RCP screen showing tally color on camera name](/img/productGfx/RCP/RCP-Screen-Tally-Highlight@2x-8.png)


## Tally output

### Camera protocol

For cameras that support tally through their control protocol, the RCP automatically sends tally information directly to the camera — no additional hardware or configuration required. This is the most seamless method because it uses the existing camera control connection.

How it works:
- Tally data is embedded in the camera control protocol commands.
- The camera's built-in tally system (viewfinder, recording indicator, etc.) responds automatically.
- No additional wiring or external tally devices are needed.
- Tally follows the same connection path as camera control.

Supported cameras include:
- Panasonic UE-150, UE-70, UE-100
- Sony PMW-500, PMW-300, PXW-Z450
- Blackmagic MicroStudio cameras
- JVC cameras with compatible protocols

Tally behavior depends on the camera's implementation — some cameras display tally in the viewfinder, others activate recording indicators, or both. Refer to your camera's documentation for specific tally display capabilities.

### GPO

Two common setups:
- If your GPOs are close to the RCP, connect a [CY-CBL-JACK-GPIO8](/docs/reference/manuals/rcp/gpio-dongle) to your RCP.
- If you need GPO over Ethernet, Wi-Fi, or 4G, use a NIO.

Each pin can be configured as either GPI or GPO.

### CI0/RIO embedded LED

By default, the CI0 and RIO display the tally signal on the LED of their casing.

There is one LED per port: **1:LED** for port 1, **2:LED** for port 2.

![CI0/RIO LED port mapping](/img/productGfx/RCP/RCP-CI0-RIO-LED-Port@2x-8.png)

### CI0/RIO external LED

If you have one camera on port 1, you can use the second port as an external tally output (12 V).

Use the [CY-CBL-6P-PWR](/docs/resources/cable-catalog#cy-cbl-6p-pwr) cable to drive a tally signal.

![CI0 with CY-CBL-6P-PWR cable connected to external LED](/img/productGfx/CI0/CI0-CY_CBL_6P_PWR_LED@2x-8.png)

![CI0 PWR cable tally configuration in GPIO map](/img/productGfx/RCP/CI0-PWR-CBL-ally-configuration-GPIO-map-highlight@2x-8.png)

In this example, when camera 3 receives a **red tally** input, it toggles the 12 V output on port 1 of `CI0-20-57`.

## Tally on monitor

### Overview

This section explains how to output a tally signal to a monitor, reflecting the tally status of the currently selected camera. Tally updates dynamically as you change cameras on the monitor in real time.

:::note
This setup assumes your RCP is configured on a router or switcher, linked to an auxiliary output, so that switching cameras on the RCP (or pressing the **Preview** button) also changes the switcher's auxiliary output.
:::

### Goal

After completing this setup, you will have:
- Tally input from your ATEM (red/green tally displayed on the RCP and web UI).
- RCP syncing the active camera with `AUX1` of your ATEM (visible on your monitor).
- Monitor tally behavior:
  - Active camera is **live** → monitor lights **red**.
  - Active camera is in **preview** → monitor lights **green**.

### Wiring

Connect your RCP and NIO on the same LAN.

![Tally monitor wiring diagram](/img/Configuration/Tally/tally-monitor-wiring.png)

:::note
You can use [GPIO dongles](/docs/reference/manuals/rcp/gpio-dongle) plugged directly into the RCP instead of a NIO.
:::

### Setup

#### Overview

The goal is to configure a proper tally input and sync your RCP with your monitor. This example uses an ATEM, but the same concept applies to any switcher or router.

In this example:
- 3 cameras: `cam 1`, `cam 2`, `cam 3`
- 1 RCP in a virtual monitor (`D1`)
- 1 ATEM

![Tally monitor configuration overview](/img/Configuration/Tally/tally-monitor-config.png)

#### Virtual monitor

Create or rename your virtual monitor `D1` in the **Controllers** section. In this example, `RCP` was renamed to `D1` and the RCP unit `RCP-25-116` is already linked to it.

![Virtual monitor D1 configuration](/img/Configuration/Tally/tally-monitor-virtual.png)

:::note
You can have multiple virtual monitors.
:::

#### ATEM

Configure the ATEM as follows:
- Link cameras to the corresponding `inputs` for proper tally and switching.
- Link the virtual monitor (`D1`) to an auxiliary `output` to sync it with the active camera on the RCP.
- Set red/green tally to **AUTO** for proper tally input.

![ATEM tally configuration](/img/Configuration/Tally/tally-monitor-atem.png)


#### Monitor GPO

Link your virtual monitor `D1` tally outputs to GPO pins:
- `red tally` → `GPO 1`
- `green tally` → `GPO 2`

In the **GPIO** section of the web UI:
1. Select **GPIO** in the top-left selector.
2. Find the `D1` virtual monitor row for `red_tally`.
3. Click the `GPO 1` column for your NIO (for example, `NIO-22-163`).
4. Find the `D1` virtual monitor row for `green_tally`.
5. Click the `GPO 2` column for your NIO.

![GPIO mapping for monitor tally output](/img/Configuration/Tally/tally-monitor-GPIO.png)

:::note
White dots appear at the intersection of your virtual monitor tally rows and the corresponding GPO columns when the mapping is set correctly.
:::
