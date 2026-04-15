---
id: cmotion-cgate
title: "cmotion cGate integration"
sidebar_label: "cmotion Cgate"
description: "Connect cmotion Cgate wireless lens controllers with Cyanview for remote focus and iris control on cinema setups."
keywords: [cmotion, Cgate, wireless, lens control, cinema]
slug: /integrations/accessories/cmotion-cgate
---

The cmotion cGate connects to Cyanview for iris, zoom, and focus motor control. The cGate must run **firmware v2.0.0 or above** for Cyanview compatibility.

![cmotion cGate lens controller — left side view](/img/Integrations/cmotion/cgate_left.png)
![cmotion cGate lens controller — front view](/img/Integrations/cmotion/cgate_front.avif)
![cmotion cGate lens controller — right side view](/img/Integrations/cmotion/cgate_right.png)

## Wiring

![cmotion cGate wiring diagram showing Ethernet and LBUS motor connections](/img/Integrations/cmotion/cgate_wiring.png)

- Connect the cGate Ethernet port to the same network as the RCP/RIO.
- Wire motors on the LBUS side of the cGate as you would for a cForce.
- Connect up to 3 motors to the cGate.
- Power the cGate and motors through the LBUS.

Optional: add Blackmagic handles so iris is controlled from the RCP and zoom/focus from the handles.

## Setup

On an existing camera, scroll to the `Lens — External control override` section:
1. Set `Model` to `cmotion - cGate`.
2. [Toggle Advanced Mode](/docs/guides/advanced/serial-camera#toggle-advanced-mode).
3. In `Advanced`, enter the cGate IP address. The `Interface` field updates to show the IP when the address is accepted.

Make sure the cGate IP is reachable from the RCP — see the [IP configuration guide](/docs/guides/networking/ip-configuration?_highlight=ip#lan-configuration).

When correctly configured, the `lens` block turns green:

![Camera configuration block showing green lens status](/img/Integrations/cmotion/config_base_cam_400x307.png)

![Lens block configuration showing green connected status](/img/Integrations/cmotion/config_base_lens_390x307.png)

:::info
If the camera head is "Not controlled", you still have full read/write access to iris, zoom, and focus. You can combine cGate with any camera control.
:::

The default setup controls iris with these parameters:
- Iris range: `1.6` to `32`
- Torque: `2`
- Motor direction: `left`

All motors are automatically discovered. Follow the [advanced setup](#advanced-setup) section to change parameters or add axes.

## Advanced setup

Default parameters:
- Iris, zoom, and focus are controlled.
- Iris: 1.6 to 32, torque 2, direction left.
- Zoom: torque 2, direction left.
- Focus: torque 2, direction left.

To customize, return to the lens `Advanced` field and enter axis configurations separated by commas. Each block must be fully specified. Use `_` to leave a value unchanged.

**Formats:**

- **Iris:** `IRIS_MIN:IRIS_MAX:iris:IRIS_TORQUE:IRIS_DIRECTION`
  - `IRIS_MIN` — minimum iris value
  - `IRIS_MAX` — maximum iris value
  - `IRIS_TORQUE` — motor torque (1–4)
  - `IRIS_DIRECTION` — motor direction (`left` or `right`)

- **Zoom:** `zoom:ZOOM_TORQUE:ZOOM_DIRECTION`
  - `ZOOM_TORQUE` — motor torque (1–4)
  - `ZOOM_DIRECTION` — motor direction

- **Focus:** `focus:FOCUS_TORQUE:FOCUS_DIRECTION`
  - `FOCUS_TORQUE` — motor torque (1–4)
  - `FOCUS_DIRECTION` — motor direction (`left` or `right`)

**Examples:**
- `2:8:iris:2:left` — iris from 2 to 8, torque 2, direction left
- `2:32:iris:2:right` — iris from 2 to 32, torque 2, direction right
- `1.6:32:iris:_:left,zoom:4:_` — iris 1.6–32, direction left, torque unchanged; zoom torque 4, direction unchanged; no focus
- `1.6:32:iris:2:left,zoom:4:right,focus:2:left` — all axes configured explicitly

![cGate iris and zoom advanced configuration screen](/img/Integrations/cmotion/config_iris_zoom_392x307.png)

:::warning
Each axis configuration must be complete. If you only need to set direction, you must still specify torque. The exception is iris min/max, which can be set without torque and direction.
:::

:::note
Motor direction is set in the RCP controller, not on the motor itself. This lets you invert direction for 3D rigs where motors are mounted on opposing sides.
:::

## Calibration

Run motor calibration from the RCP via `MENU > LENS > LENS > ACTION`, then click `Calibrate`.

Use a powerful enough power supply — calibrating all motors simultaneously requires significant current.

![cGate motor calibration animation in RCP menu](/img/Integrations/ARRI/cforce/RCP-UI/calibration.gif)

## cGate with RCP and HandUnit

If both the RCP and a cmotion HandUnit try to control the cGate simultaneously, the RCP takes precedence by default. To hand control to the HandUnit for specific axes, go to `Lens > Lens > Control` on the RCP and toggle the switches for the axes you want to release.

![RCP lens control menu showing axis release toggles](/img/Manual/RCP/RCP-menu-lens-1_1_2.BMP)

## Troubleshooting

### Lens is green but nothing happens

Possible causes:
- **Motor not calibrated** — Check the motor LED button. If it is not green, calibrate by long-pressing the motor button or using the [RCP Lens action](#calibration).
- **Invalid advanced setup** — A syntax error in the parameter string can prevent control. Verify your configuration against the [advanced setup](#advanced-setup) syntax.

### Iris value on the RCP does not match the lens

The RCP does not know the iris range of your lens. Use the [advanced setup](#advanced-setup) to enter the correct iris min and max values.
