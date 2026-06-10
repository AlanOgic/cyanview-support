---
id: arri-cforce
title: "ARRI cforce motors"
sidebar_label: "ARRI cforce"
description: "Control ARRI cforce lens motors with Cyanview through a RIO for precision focus, iris, and zoom control over CAN bus."
keywords: [ARRI, cforce, lens motor, focus, iris, zoom, RIO, CAN bus, Cyanview]
slug: /integrations/cameras/arri/arri-cforce
---

Control ARRI cforce lens motors directly from a Cyanview RCP through a RIO. This integration provides precision iris, zoom, and focus control over a CAN bus connection with a USB dongle.

:::note
This direct CAN control integration is unofficial and available as-is, without official support. It uses a USB CAN dongle to send low-level data directly to the motors and does not support typical LBUS features, so it is not expected to be compatible with other devices on the LBUS. For an officially supported setup that works alongside other LBUS controllers, use the [cmotion cGate integration](/docs/integrations/lenses/cmotion-cgate).
:::

## Compatible models

- ARRI cforce mini
- ARRI cforce mini RF
- ARRI cforce plus

<img src="https://www.arri.com/resource/responsive-image/344442/text-media-halfsize/lg/5/cforce-motors-group-articles.jpg" width="400" alt="ARRI cforce motor family" />

## Wiring

Connect up to three cforce motors on a CAN bus chain to your RIO via a USB dongle:

<img src="/img/Integrations/ARRI/cforce/ARRI-cforce-wiring.png" width="1000" alt="ARRI cforce wiring diagram with RIO" />

**Required connections:**
- Chain up to 3 motors on the CAN bus
- Connect the last motor's power from the 2nd port
- Wire **CAN-L** and **CAN-H** from the first motor to the USB dongle
- Plug the USB dongle into any USB port on the RIO

**Optional additions:**
- Link the RCP to the RIO over Ethernet, WiFi, 4G, or other network connection
- Add Blackmagic handles for physical zoom/focus control while iris remains on the RCP

## Setup

On an existing camera in the RCP interface, scroll to the **Lens** section and configure:
- **Model**: select `ARRI - cforce`
- **Interface**: select your USB dongle (example: `USB:1` for USB on port 1)

### Default motor settings

With no additional configuration, the RCP controls iris, zoom, and focus with these defaults:
- **Iris**: range 1.6 to 32, torque 2, direction left
- **Zoom**: torque 2, direction left
- **Focus**: torque 2, direction left

### Customize motor parameters

To adjust the iris range, torque, or direction for each motor:

1. Click **...** in the top right of the lens panel
2. Activate **Advanced mode**
3. Return to your lens setup — a new **Advanced** field appears
4. Enter a comma-separated configuration string for the motors you want to customize

**Configuration format:**

| Motor | Format | Parameters |
|:------|:-------|:-----------|
| **Iris** | `MIN:MAX:iris:TORQUE:DIRECTION` | MIN/MAX = iris range, TORQUE = 1–4, DIRECTION = left or right |
| **Zoom** | `zoom:TORQUE:DIRECTION` | TORQUE = 1–4, DIRECTION = left or right |
| **Focus** | `focus:TORQUE:DIRECTION` | TORQUE = 1–4, DIRECTION = left or right |

If you configure only the iris, default zoom and default focus are still applied.

**Examples:**

| Configuration string | Result |
|:---------------------|:-------|
| `1.6:32:iris:2:left` | Iris from 1.6 to 32, torque 2, direction left |
| `2:32:iris:2:right` | Iris from 2 to 32, torque 2, direction right |
| `1.6:32:iris:2:left,zoom:4:right` | Iris (torque 2, left) + zoom (torque 4, right). Focus is not controlled. |
| `1.6:32:iris:2:left,zoom:4:right,focus:2:left` | All three motors configured |

<img src="/img/Integrations/ARRI/cforce/ARRI-cforce-setup.png" width="400" alt="ARRI cforce advanced configuration" />

When the motors are properly configured and wired, the **Lens** block turns green:

<img src="/img/Integrations/ARRI/cforce/ARRI-cforce-block.png" width="400" alt="ARRI cforce connected status" />

:::info
In this example, the camera head shows "Not controlled" — only iris, zoom, and focus are active through the motors. You can combine cforce motor control with any camera integration for full control.
:::

## Calibration

Run motor calibration directly from the RCP when you change lenses or reposition motors.

Navigate to **MENU > LENS > LENS > ACTION** and click **Calibrate**:

<img src="/img/Integrations/ARRI/cforce/RCP-UI/calibration.gif" width="400" alt="RCP lens calibration animation" />
