---
id: mrmc
title: MRMC panel
description: "Integrate the MRMC panel with a NIO and Stream Deck for robotics camera control."
keywords: [mrmc, nio, stream deck, panel, robotics, preset]
slug: /restricted/configuration/mrmc
---

# MRMC panel

This section describes the MRMC panel integration using a NIO and Stream Deck.

## NIO upgrade

The NIO is upgraded by first uploading the factory firmware and then applying a patch to convert the main function into the MRMC joystick application.

### Step 1 — Upload the factory firmware

Download the correct file based on your device. If your NIO has **no** Wi-Fi antenna, it is a cy-nio-rev2.

| Device type | Stable release | Development release |
|---|---|---|
| cy-nio | [25.9.5](https://s3.eu-west-3.amazonaws.com/cy-binaries.cyanview.com/25.9.5/cy-nio-cyanos-25.9.5.swu) (serials cy-nio-22-1 to cy-nio-22-50) | [25.9.5](https://s3.eu-west-3.amazonaws.com/cy-binaries.cyanview.com/25.9.5/cy-nio-cyanos-25.9.5.swu) (serials cy-nio-22-1 to cy-nio-22-50) |
| cy-nio-rev2 | [25.9.5](https://s3.eu-west-3.amazonaws.com/cy-binaries.cyanview.com/25.9.5/cy-nio-rev2-cyanos-25.9.5.swu) | [25.9.5](https://s3.eu-west-3.amazonaws.com/cy-binaries.cyanview.com/25.9.5/cy-nio-rev2-cyanos-25.9.5.swu) |

Refer to the [product update](/docs/reference/product-update) page for device update guidance.

### Step 2 — Install the MRMC packages

| Device type | Stable release | Development release |
|---|---|---|
| cy-nio | [25.9.5](https://s3.eu-west-3.amazonaws.com/cy-binaries.cyanview.com/25.9.5/cy-nio-transform-mrmc-25.9.5.swu) (serials cy-nio-22-1 to cy-nio-22-50) | [25.9.5](https://s3.eu-west-3.amazonaws.com/cy-binaries.cyanview.com/25.9.5/cy-nio-transform-mrmc-25.9.5.swu) (serials cy-nio-22-1 to cy-nio-22-50) |
| cy-nio-rev2 | [25.9.5](https://s3.eu-west-3.amazonaws.com/cy-binaries.cyanview.com/25.9.5/cy-nio-rev2-transform-mrmc-25.9.5.swu) | [25.9.5](https://s3.eu-west-3.amazonaws.com/cy-binaries.cyanview.com/25.9.5/cy-nio-rev2-transform-mrmc-25.9.5.swu) |

Follow the same process as the previous step.

## Configuration

On the RCP or gateway, assign the MRMC panel and the Stream Deck to your controller configuration. The naming follows this pattern: `cy-nio-22-81.mrmc` and `cy-nio-22-81.streamdeck`.

## Operation

### Stream Deck

First select the MRMC application in the list. Some buttons like **Pan Dir** are toggle buttons. Buttons with values are adjusted using the MRMC panel: press the button to select the function, then adjust the value using the iris knob.

### Panel

- Press a number key to recall a preset position.
- Hold **SAVE** and press a number key to save the current position.
- Hold a number key for 5 seconds to clear the preset position.

<img src="/img/restricted/configuration/MRMC/Presets@2x.png" />

### Settings mode

You can use settings mode with or without the Stream Deck:

- Hold **SETTINGS** for 5 seconds to enter settings mode.
- **CAM** functions are settings of the selected camera itself — inverting direction is reflected on all panels.
- **PANEL** functions are settings of the panel itself and do not affect other operators.
- By default, the **IRIS** knob changes pan and tilt speed of the current camera.
- Hold **CAM** or **PANEL** while rotating the **IRIS** knob to change values for each function.
- Hold **PRESET** for 5 seconds to return to preset mode.
- Hold **RESET** for 5 seconds to revert all **PANEL** functions to default.
- **TRIGGER** sends the signal to the trigger port.

<img src="/img/restricted/configuration/MRMC/Settings@2x.png" />
