---
id: red-komodo
title: "RED Komodo integration"
sidebar_label: "RED Komodo"
description: "Control the RED Komodo cinema camera with Cyanview for remote paint and exposure control."
keywords: [RED, Komodo, cinema camera, remote control]
slug: /integrations/cameras/other/red-komodo
---

![RED Komodo cinema camera](/img/Integrations/RED/komodo.jpg)

The RED Komodo integrates with Cyanview over IP, giving you full remote paint and exposure control from the RCP.

## Wiring

![RED Komodo wiring diagram](/img/Integrations/RED/komodo-wiring.png)

## Controls

| Function | Notes |
| :- | :- |
| Lens | Iris, Focus, Zoom |
| Exposure | Iris, Shutter, Gain/ISO, Auto Exposure |
| White balance | Auto (ATW), One Push, Manual |
| Primary corrections | Master Black, Master Gamma, Color Gains, Pedestal, Saturation |
| Other | Tally (red) |

## RCP overview

### Main view

![RCP main view](/img/Integrations/RED/RCP/F1.BMP)

### White balance

Path: `MENU > PAINT > WHITE`

![RCP white balance screen](/img/Integrations/RED/RCP/F3.BMP)

:::note
Click the first row to control R/G/B using encoders. Click the second row to switch to color temp and tint.
:::

![RCP color temperature screen](/img/Integrations/RED/RCP/F4.BMP)

:::note
You can control:
- **Presets** — navigate through color temp presets (2800K, 3200K, 3800K, 4500K, 5600K, 7000K, 9000K)
- **Color Temp** — variable color temp based on camera steps
- **Tint**
- **Action (menu)** — set A and B boundaries (min/max) for color temp
- **A/B** — direct access to A and B boundaries
- **Slider** — move variable color temp between A and B boundaries
- **A-B encoder** — move variable color temp between A and B boundaries
:::

### Black balance

Path: `MENU > PAINT > BLACK`

![RCP black balance screen](/img/Integrations/RED/RCP/F38.BMP)

### ISO/dB

Path: `MENU > PAINT > Gain`

![RCP gain screen](/img/Integrations/RED/RCP/F11.BMP)

![RCP gain screen detail](/img/Integrations/RED/RCP/F12.BMP)

### Matrix

Path: `MENU > PAINT > Matrix`

Change the presets using the encoder:

![RCP color space selection](/img/Integrations/RED/RCP/color_space.gif)
![RCP encoder control](/img/Manual/RCP/RCP-encoders-1-right.png)

Toggle the matrix on or off with the ON/OFF button.

### Gamma

Path: `MENU > PAINT > Gamma`

In Gamma, you can change the R/B/M gamma:

![RCP gamma screen](/img/Integrations/RED/RCP/F14.BMP)

In Tables, you can change the OETF:

![RCP gamma tables selection](/img/Integrations/RED/RCP/gamma_tables.gif)
![RCP encoder control](/img/Manual/RCP/RCP-encoders-1-right.png)

And the tone curve:

![RCP tone curve selection](/img/Integrations/RED/RCP/gamma_tables2.gif)
![RCP encoder control](/img/Manual/RCP/RCP-encoders-3-right.png)

:::note
This list updates based on the color space selected in the camera. Check on the RCP: `MENU > PAINT > Matrix > Preset`.
:::

### Shutter

Path: `MENU > PAINT > SHUTTER`

You can change:
- Shutter on/off
- Shutter in speed or angle
- ECS

![RCP shutter control](/img/Integrations/RED/RCP/shutter.gif)

### White clip

Path: `MENU > PAINT > KNEE`

![RCP white clip control](/img/Integrations/RED/RCP/white_clip.gif)
![RCP encoder control](/img/Manual/RCP/RCP-encoders-1-right.png)

### Saturation

Path: `MENU > PAINT > COLOR`

![RCP saturation screen](/img/Integrations/RED/RCP/F44.BMP)

### LUT

Path: `MENU > PAINT > LOOK`

![RCP LUT selection](/img/Integrations/RED/RCP/lut.gif)
![RCP encoder control](/img/Manual/RCP/RCP-encoders-1-right.png)

:::note
You can upload LUTs on the RCP — see [3D LUT import/export in RCP](/docs/integrations/generic/3d-lut-processor#importexport-a-3d-lut). Navigate through the LUT list, use **Clear** to set the LUT to `None`, **Set** to upload the selected LUT to the camera, and **ON/OFF** to toggle it.
:::

### REC / TC

Path: `MENU > RECORD`

View the TC from the camera and trigger REC from the RCP.

![RCP record screen](/img/Integrations/RED/RCP/F40.BMP)

:::note
Select a group and toggle it using the Group button to trigger REC on all cameras within that group. This applies only to cameras configured on the RCP — typically people use a RCP with all cameras (unlimited/broadcast version) as an MSU for this REC control.
:::

The next tab shows a list of all cameras with their TC and REC status:

![RCP camera TC list](/img/Integrations/RED/RCP/F41.BMP)

## Setup RCP/RIO

- **Connect** the camera and your RCP/RIO to the same network.
- Enter a custom number, name, etc.
- **Add the camera** to the RCP configuration via the [RCP Configuration UI](/docs/reference/manuals/rcp/web-ui):
  - Select **Red** brand.
  - Select **Komodo** or **V-Raptor** model.
  - Enter the IP address of your camera.

:::note
If your camera is in a different range than your RIO/RCP, follow the [IP configuration guide](/docs/guides/networking/ip-configuration).
:::

![RCP camera configuration form](/img/Integrations/RED/komodo-config-setup.png)

Once connected correctly, the status turns green:

![RCP camera connected green status](/img/Integrations/RED/komodo-config-block.png)
