---
id: deltec
title: Deltec joystick
description: "Integrate a Deltec serial joystick with Cyanview devices."
keywords: [deltec, joystick, serial, fletcher, usb]
slug: /restricted/configuration/deltec
---

# Deltec joystick

This guide explains how to integrate a Deltec serial joystick.

Compatible with RCP, RIO, NIO.

## Configuration

1. Navigate to `/dev/app.html`.
2. In the right panel, click **New Joystick**. A new `Joystick` block is created.
3. Search (`Ctrl+F`) for this `Joystick` and click on it.
4. In the right panel, set:
   - **name**: `Deltec` (or any name you prefer)
   - **protocol**: `fletcher` (mandatory, case-sensitive)
5. Press `Ctrl+R` to deselect any block.
6. Search for `UsbSerial` and click on it.
7. Search for your `Joystick` and click on it.
8. In the right panel, click **connect**. A new `joy_ctrl` appears inside the `Joystick` and `UsbSerial` blocks.
9. Return to the standard page (remove `/dev/app.html` from the URL).
10. In the controller dropdown list, select `Deltec` (based on the `name` parameter of the `Joystick` block).

### Joystick setup

Key parameters:

- **name** — visible in the dropdown list (any name you choose)
- **protocol** — must be `fletcher`

<img src="/img/restricted/configuration/deltec/deltec-joystick.png" width="300"/>

<img src="/img/restricted/configuration/deltec/deltect-joystick-setup.png" width="300"/>

### USB serial setup

You should not need to change anything here. If you followed the guide, everything is set up automatically.

<img src="/img/restricted/configuration/deltec/deltec-serial.png" width="300"/>

<img src="/img/restricted/configuration/deltec/deltec-serial-setup.png" width="300"/>

## Going further

See also the [Elgato Stream Deck integration](/docs/integrations/accessories/elgato-stream-deck).
