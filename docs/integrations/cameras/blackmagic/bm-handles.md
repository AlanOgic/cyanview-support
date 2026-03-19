---
id: bm-handles
title: "Blackmagic camera handles"
sidebar_label: "BM Handles"
description: "Use Blackmagic camera handles with Cyanview-controlled cameras for on-camera operator control."
keywords: [Blackmagic, handles, operator, camera control]
slug: /integrations/cameras/blackmagic/bm-handles
---

The Blackmagic zoom and focus demands connect to your RIO, NIO, or RCP to provide zoom and focus input. Buttons on the handles map to video return switching, letting the camera operator cycle between their own feed, a live feed, or a wide shot on a single monitor.

![Blackmagic focus demand handle](/img/Integrations/Blackmagic/Handles/BMF.jpeg)

![Blackmagic zoom demand handle](/img/Integrations/Blackmagic/Handles/BMZ.jpeg)

## Control

The handles let you control any lens that Cyanview supports:
- Lenses driven directly through the camera protocol.
- External lenses (B4, PL, etc.).
- Motors (Tilta, etc.).

Thanks to the IP architecture, the handles can be placed:
- On the camera with a RIO or RIO +LAN — for camera operators, polecam operators, etc.
- In a remote location with a NIO — for cable cams, etc.

This gives you more lens flexibility (including prime lenses and E-mount, which don't support physical handles) and workflow flexibility, while keeping the same familiar control feel as handles plugged directly into a Fujinon or Canon lens.

## Wiring

Example setup using a Sony FX9 with a cine lens controlled by Tilta motors:

![BM handles wiring diagram with FX9 and Tilta motors](/img/Integrations/Blackmagic/Handles/BMHandles-wiring.png)

- `lens` — RIO drives 3 Tilta motors (zoom, focus, iris) over serial.
- `camera` — RIO drives the FX9 over Ethernet via a USB dongle acting as an Ethernet switch.
- `handles` — Blackmagic handles connect to the RIO over USB.

:::note
This also works with motorized lenses through the camera (E-mount on FX9, B4 on a broadcast camera) or through the lens (Canon Cine Servo, Fujinon Cabrio, B4 broadcast).
:::

## Setup

Connect the handles:
- USB-C to USB-C from Focus `cam` port to Zoom `loop` port, then USB-C to USB-A from Zoom `cam` port to the RIO/NIO/RCP.
- Or use two separate USB-C to USB-A cables — one per handle.

Configure your camera and lens as usual. In the camera configuration in the **right panel**, find the **User controllers** section and select both `BMFocus` and `BMZoom`.

![BM handles setup screen showing BMFocus and BMZoom in User controllers section](/img/Integrations/Blackmagic/Handles/BMHandles-setup.png)

When paired correctly, the LED on each handle turns steady white.

## Video return configuration

Set up your handles and switcher/router first, then follow the [B4 return guide](/docs/guides/advanced/b4-return) to link the handle buttons to your switcher/router inputs and outputs.

## Button mapping

![BM handles button layout — top view](/img/Integrations/Blackmagic/Handles/BMHandles-buttons2.png)

![BM handles button layout — side view](/img/Integrations/Blackmagic/Handles/BMHandles-buttons1.png)

1. VTR
2. RET1
3. Long press: switch zoom speed encoder to iris control. Triple short press: switch zoom rocker to focus speed.
4. Long press: switch zoom speed encoder to focus control. Triple short press: switch zoom rocker to iris.
5. Long press: calibrate zoom rocker (zero position).

:::note
Hold a button for at least 5 seconds to confirm a long-press action.

If the zoom drifts, calibrate it by long-pressing button 5.
:::

## From the field

### BM handles on a Canon Cine Servo and RED Komodo

Equipment:
- RCP
- RIO[^1]
- 1× [CY-CBL-6P-B4-01](/docs/resources/cable-catalog#cy-cbl-6p-b4-01-default)[^2]
- BM zoom and focus handles

![BM handles with Canon Cine Servo and RED Komodo wiring diagram](/img/Workflows/BM-handles-Komodo-Canon.png)

[^1]: RIO is powered by D-TAP, connected to the camera via a USB Ethernet dongle, and to the RCP via onboard Ethernet — no additional switch needed, both networks can be bridged.

[^2]: [CY-CBL-6P-B4-01](/docs/resources/cable-catalog#cy-cbl-6p-b4-01-default) connects the RIO to the Canon Cine Servo lens via the 12-pin port (data + power). The RIO controls zoom, focus, and iris. BM handles control zoom and focus while the RCP paints and controls iris.
