---
id: iris-joystick-update
title: Iris joystick kit assembly
description: "Step-by-step assembly instructions for updating an RCP with the iris joystick kit."
keywords: [iris joystick, assembly, rcp, usb, soldering, kit]
slug: /restricted/troubleshooting/iris-joystick-update
---

# Iris joystick kit — assembly instructions

## Abstract

This page provides the assembly instructions to update a CY-RCP with an iris joystick kit.

### Required tools and material

**Tools:**

- Phillips screwdriver (PH1)
- Hex bit — size 10
- Soldering iron
- Cutting pliers

**Material (provided in the joystick iris kit):**

- RCP long shell
- Internal USB cable
- M2x6 screws (4)
- Iris joystick assembly
- Serial number label

## Update procedure

### Open the RCP

1. Remove the 10 screws and the nut around the DC connector.
2. Remove the back shell. This shell will be replaced by the new long shell provided with the kit.

### Place the internal USB cable

1. Strip and tin the four wires (red, green, white, black).
2. Solder the four wires to the RCP PCB as shown below:

![USB wiring diagram](/img/restricted/troubleshooting/usb_ij_wiring.jpg)

:::warning
Ensure the wires are correctly connected at the right locations. Incorrect wiring can damage the RCP or the iris joystick.
:::

3. Connect the cable (5-way connector) to the iris joystick on J202:

![Iris joystick connection](/img/restricted/troubleshooting/usb_ij_connect.jpg)

### Tests

Once everything is connected, power the RCP to verify the iris joystick starts. Connect PoE or 12 V DC to the RCP and confirm that the joystick display shows content and the buttons light up.

If the joystick does not start, check the wiring and connection.

### Close the RCP

1. Disconnect the internal USB cable from J202.
2. Place the RCP in the long shell. Be careful not to damage the DC connector during insertion.
3. Reconnect the internal USB cable to J202 and place the iris joystick assembly into the shell.
4. Close the RCP with the 10 original screws plus the 4 screws from the kit.
5. Reinstall the nut on the DC connector.
6. Power the RCP to verify everything works. Both the RCP and the iris joystick must be on and displaying content on the LCD.
7. Place the serial number label on the back shell.

## Setup

Refer to the [iris joystick manual](/docs/reference/manuals/iris-joystick) for the configuration process.

## Troubleshooting

### Iris joystick not working

- Ensure the RCP is running the latest firmware version (>= 23.8.1rc15).
- Run the calibration procedure if not already done.
- Ensure the iris joystick is associated with a valid RCP (sometimes the joystick is associated with an incorrect RCP serial number).
- Check whether the iris joystick is locked to a specific camera. The joystick can either follow the RCP's selected camera or be locked to a specific one. This can cause confusion if you move the joystick but see no change on screen because it is acting on a different camera.

### Shaft/T-bar friction

Two screws adjust the friction of the shaft/T-bar:

- One on the side controls the friction.
- One on the bottom locks the friction setting.

No screws need to be removed. Do not apply excessive force when tightening.

First, loosen the lock screw:

<img src="/img/restricted/troubleshooting/IJ/IJ-shaft-friction-lock.png"/>

Then adjust the friction with this screw until the desired friction is reached:

<img src="/img/restricted/troubleshooting/IJ/IJ-shaft-friction-setup.png"/>

Finally, tighten the lock screw to secure the setting:

<img src="/img/restricted/troubleshooting/IJ/IJ-shaft-friction-lock.png"/>
