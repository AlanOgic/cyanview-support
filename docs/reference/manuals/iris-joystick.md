---
id: iris-joystick
title: "Iris joystick manual"
sidebar_label: "Iris joystick"
description: "Manual for the Cyanview iris joystick accessory. Installation, calibration, and iris control configuration."
keywords: [iris joystick, manual, calibration, iris control]
slug: /reference/manuals/iris-joystick
---

The iris joystick is an add-on for the RCP variant with iris joystick. This page describes its configuration and use.

![RCP with iris joystick attached](/img/Manual/IJ/rcp-j.png)

## Configuration

### Assign to RCP

You must link the iris joystick to an RCP before use.

1. On the startup screen, press the button next to the gear icon (PREVIEW), then select **Assign**.

   ![Iris joystick startup screen with Assign option](/img/Manual/IJ/ij_startup_screen.jpg)

2. On the assign menu, select the RCP serial number (for example, `44-20` for `CY-RCP-44-20`). Use the ND UP / ND DOWN and CC UP / CC DOWN buttons to change the value.

   ![Iris joystick assign screen showing serial number selection](/img/Manual/IJ/ij_assign_screen.jpg)

3. Press **Save** (PREVIEW). The joystick reboots and displays the assigned serial number on the startup screen.

   ![Iris joystick startup screen after assignment showing serial number](/img/Manual/IJ/ij_startup_screen.jpg)

After assignment, the main screen appears after a short delay.

![Iris joystick main screen after successful assignment](/img/Manual/IJ/ij_default_blank_screen.jpg)

### Calibrate the joystick

Calibration stores sensor values for specific mechanical positions. You need to set these positions:

- `I max open` — Joystick forced UP (spring compressed)
- `I open` — Joystick UP (without forcing the spring)
- `I close` — Joystick DOWN (without forcing the spring)
- `I max close` — Joystick forced DOWN (spring compressed)
- `Black max` — Black ring turned clockwise to its mechanical stop
- `Black min` — Black ring turned counter-clockwise to its mechanical stop
- `J pressed` — Joystick shaft pressed
- `J released` — Joystick shaft not pressed

Perform calibration carefully to ensure correct joystick behavior.

<video poster="/img/Manual/IJ/RCP-J-calibration.png" muted controls>
    <source src="/img/Manual/IJ/RCP-J-calibration.mp4"/>
</video>

Access the calibration menu in one of two ways:
1. From the startup screen: press the button next to the gear icon (PREVIEW), then select **Calibrate**.
2. From the main screen: hold the iris joystick shaft, press PREVIEW to enter the configuration screen, press the gear icon (SHUTTER DOWN), then select **Calibrate**.

![Iris joystick calibration screen showing sensor values](/img/Manual/IJ/ij_calib_screen.jpg)

To calibrate:
- Place the joystick, black ring, or shaft in the required position, then press the button next to its label to save.
- A highlighted button confirms the value is saved.
- You can press any button again if you made an error — only the last value is saved.

The bottom of the screen shows live sensor values:
- `I : 4033` — Raw sensor value for the iris joystick.
- `B : 1862` — Raw sensor value for the black ring.
- `SW : 128` — Raw sensor value for the joystick shaft.

These values must change when you move the corresponding part. A static value regardless of position may indicate a hardware problem.

When done, press **Save** (PREVIEW). The joystick reboots and loads the new calibration. Calibration is stored internally — you do not need to repeat it every time the joystick boots. If behavior seems incorrect, you can recalibrate at any time.

### Set the limits

Limits let you restrict the iris range and increase shaft resolution.

<video poster="/img/Manual/IJ/RCP-J-limits.png" muted controls>
    <source src="/img/Manual/IJ/RCP-J-limits.mp4"/>
</video>

## Usage

### Main screen

The main screen shows and controls:
- Iris
- Black
- ND
- CC
- Shutter
- Gain

![Iris joystick main screen showing camera parameters](/img/Manual/IJ/ij_main_screen.jpg)

At the bottom of the screen:
- Camera number (e.g., camera 1).
- A tick (online) or cross (offline) showing camera status.
- A lock icon when the joystick is locked to a specific camera.

Pressing the joystick button acts as a preview — same behavior as the green PREVIEW button.

Holding PREVIEW disables the joystick and black ring. This lets you reposition them mechanically without changing camera values.

The five blue buttons at the top recall scene files 1 through 5. Scene files must be saved from the RCP menu.

### Configuration screen

Hold the iris joystick shaft and press the PREVIEW button together to open the configuration screen.

![Iris joystick configuration screen](/img/Manual/IJ/ij_config_screen.jpeg)

Available settings:

- **Joystick limits** — Clear limits, toggle ON/OFF (when ON the joystick is constrained to the defined range; when OFF it can go beyond with the spring), set MAX, set MIN.
- ~~**Black 1X / 2X**~~ — This setting has moved to the RCP main screen. See [RCP Settings: Sensitivity](/docs/reference/manuals/rcp/ui/settings#sensitivity).
- **Black Joystick sensitivity** — Sets the sensitivity of the black ring: x1, x2, or x4. Higher values halve the range for finer precision.
- **Iris / ND / Shutter / Variable Gain** — Function assigned to the joystick lever. Default is Iris. For cameras with continuous ND filters, assign ND to control exposure with the joystick. Gain or ISO can be assigned if continuously variable.
- **Joystick mode** — Relative or Absolute.
  - **Relative** (default): Joystick movements produce a change proportional to the movement. The camera setting value is not directly linked to the physical joystick position.
  - **Absolute**: The joystick position maps directly to the camera setting value. Better suited for single-camera workflows — switching between cameras and moving the joystick produces a jump.
- **Cam Lock** — Locks the joystick to a specific camera. Select the camera on the RCP, then press **Cam Lock**. The camera number and a lock icon appear on the main screen.
- **Gear icon** — Opens the technical menu.

Press PREVIEW to return to the main view.

### Technical menus

During loading, press the gear icon to access the technical menu. From the main screen, hold the shaft, press PREVIEW, then press the gear icon.

This menu provides calibration, RCP assignment, device information (IP address, MAC address, firmware version, error codes), and a reboot button.

To force the joystick into bootloader mode for a firmware update:
1. Press and hold Scene 1 and Scene 2 buttons.
2. Press **Reboot** in the technical menu.
3. After 3 seconds, release Scene 1 and Scene 2.

### Multi-camera operations

When one RCP controls multiple cameras, the joystick operates on a relative basis to avoid sudden jumps. At the end of its range it can be pushed further with a spring effect for continuous adjustment, or repositioned by holding PREVIEW for a "free" mode. The main exposure and master black encoders provide quick multi-camera adjustments without the joystick.

Using **Cam Lock** keeps the joystick locked to one camera while the upper RCP section switches between others. This "split-camera" mode is useful when one camera needs constant iris access while you shade other cameras.

## Troubleshooting

### Joystick does not power on

If the joystick shows no signs of life (screen off, buttons unlit), this may indicate a hardware failure or a firmware issue. In rare cases, an automatic firmware update may fail and prevent a correct restart.

To distinguish between hardware and firmware problems:

1. Open the RCP.
2. With the unit fully powered off, press the blue switch on the PCB.

![Iris joystick hardware bootloader switch on PCB](/img/Manual/IJ/ij_hw_bootloader.jpg)

3. While holding the switch, connect power and keep the switch pressed for 2 more seconds.
4. Within 1 minute the joystick should power up. If it does not, this most likely indicates a hardware failure. Submit an [RMA request](/docs/reference/rma-procedure) in that case.
