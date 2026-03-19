---
id: tilta
title: "Tilta lens motor integration"
sidebar_label: "Tilta"
description: "Control Tilta Nucleus lens motors with Cyanview through a RIO for wireless focus, iris, and zoom control."
keywords: [Tilta, Nucleus, lens motor, wireless, focus]
slug: /integrations/lenses/tilta
---

![Tilta Nucleus-M](/img/Integrations/Tilta/tilta-nucleus.png)

A Tilta Nucleus-M Wireless Lens Control System can be controlled directly by a Cyanview RIO.

## Wiring

![Tilta Nucleus-M wiring diagram](/img/Integrations/Tilta/tilta-wiring.png)

Connect the Nucleus-M to a RIO port using cable `CY-CBL-TILTA-SERIAL`. Assign different IDs to each motor, then daisy-chain them as needed.

For a single motor on a small lens, RIO port power is usually sufficient. For larger setups, use an external power supply (D-TAP or similar) connected directly to the `CY-CBL-TILTA-SERIAL` cable — this keeps power external and uses the RIO for control only.

If both RIO serial ports are occupied (for example, a serial camera and a serial robotic head), use the alternative cable `CY-CBL-TILTA-01`, which connects via the RIO USB port. External power is mandatory with this cable.

## Motor configuration

You must create a camera before configuring motors. See the [RCP camera configuration guide](/docs/integrations/generic/serial-camera#rcp-configuration).

Once the camera exists, add a **Tilta Lens** control:

![Tilta lens configuration — step 1](/img/Configuration/lens/tilta_lens_config1.png)

Select the USB converter or CI0/RIO port in the `Interface: Port` field.

Enable **Advanced view**:

![Advanced view toggle](/img/Configuration/lens/tilta_advanced_act.png)

The advanced fields appear in the lens block:

![Tilta lens advanced configuration block](/img/Configuration/lens/tilta_advanced_block.png)

Use this syntax to assign motors to lens functions:

```
MotorID:Function,MotorID:Function,...
```

For iris on motor 3, zoom on motor 5, and focus on motor 2:

```
3:I,5:Z,2:F
```

Iris accepts optional f-stop range parameters. The default range is f/1.6 to f/32. To set a custom range:

```
MotorID:I:f-stop-open:f-stop-close
```

For a lens with iris range f/2.8 to f/16 on motor 3:

```
3:I:2.8:16
```

## Calibrate

Run calibration from the RCP instead of doing it manually on the motor:

1. Navigate to `MENU > LENS > PTZF > Settings`.
2. Press `ACTION` (top left).
3. Press `Calibrate`.

![Calibration via RCP](/img/Integrations/Tilta/RCP/calibrate.gif)

:::info
Calibration is also accessible from `MENU > LENS > LENS > Control > ACTION`.
:::

## Troubleshooting

If the Tilta motors are not responding:

* Use a proper external power supply.
* Check all wiring: serial cable, power supply, and motor daisy chain.
* Confirm all motors have unique IDs.
* Confirm motor IDs match the RCP configuration (Z, I, F with correct motor numbers).
* Calibrate any uncalibrated motor: hold the down arrow for 3 seconds to trigger self-calibration.
* Verify the iris range is correctly set in the RCP configuration.

:::warning
If you use a Tilta motor on a motorized lens that is also natively controllable (such as the Canon 18-80 mm), disengage the Tilta motors before powering up the system.

If you do not:
1. The camera starts.
2. The RIO starts.
3. The Tilta motors start and lock the lens mechanically.
4. The lens attempts to self-calibrate but fails because the motor is holding it — leaving the handles stuck.

To disengage the motors, unplug the `CY-CBL-TILTA-SERIAL` cable (or the external power supply) before startup. This is only required during the startup sequence and not with all lenses.
:::
