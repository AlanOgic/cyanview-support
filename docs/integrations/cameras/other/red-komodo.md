---
id: red-komodo
title: "RED Komodo integration"
sidebar_label: "RED Komodo"
description: "Control the RED Komodo cinema camera with Cyanview for remote paint and exposure control."
keywords: [RED, Komodo, cinema camera, remote control]
slug: /integrations/cameras/other/red-komodo
---

<img src="/img/Integrations/RED/komodo.jpg" width="600" />

## Wiring

<img src="/img/Integrations/RED/komodo-wiring.png" width="600" />

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

<img src="/img/Integrations/RED/RCP/F1.BMP"/>

### White balance

Path : `MENU > PAINT > WHITE`

<img src="/img/Integrations/RED/RCP/F3.BMP"/>

:::note
You can click on the first row to control R/G/B using encoders.
And clicking on the second row will switch to color temp and tint.
:::

<img src="/img/Integrations/RED/RCP/F4.BMP"/>

:::note
You can control:
* Presets : navigate through a list of presets color temp (2800K, 3200K, 3800K, 4500K, 5600K, 7000K, 9000K)
* Color Temp : variable color temp to select any value based on the camera steps
* Tint
* Action (menu) : set A and B boundaries (minimum/maximum) for the color temp
* A/B : direct access to A and B boundaries
* Slider : Move variable color temp between A and B boundaries
* A-B encoder : Move variable color temp between A and B boundaries
:::

### Black balance

Path : `MENU > PAINT > BLACK`

<img src="/img/Integrations/RED/RCP/F38.BMP"/>

### ISO/dB

Path : `MENU > PAINT > Gain`

<img src="/img/Integrations/RED/RCP/F11.BMP"/>

<br/>

<img src="/img/Integrations/RED/RCP/F12.BMP"/>


### Matrix

Path : `MENU > PAINT > Matrix`

You can change the presets:

<img src="/img/Integrations/RED/RCP/color_space.gif"/>
<img width="480px" src="/img/Manual/RCP/RCP-encoders-1-right.png"/>

And You can enable/disable it with ON/OFF button

### Gamma

Path : `MENU > PAINT > Gamma`


In Gamma, you can change the R/B/M gamma:

<img src="/img/Integrations/RED/RCP/F14.BMP"/>

In Tables, you can change OETF:

<img src="/img/Integrations/RED/RCP/gamma_tables.gif"/>
<img width="480px" src="/img/Manual/RCP/RCP-encoders-1-right.png"/>

And the Tone Curve:

<img src="/img/Integrations/RED/RCP/gamma_tables2.gif"/>
<img width="480px" src="/img/Manual/RCP/RCP-encoders-3-right.png"/>

:::note
This list will be updated based on the Color Space selected in the camera.

Check on the RCP : `MENU > PAINT > Matrix > Preset` (Here I was in `Rec709`)
:::

### Shutter

Path : `MENU > PAINT > SHUTTER`

You can change:
* Shutter on/off
* Shutter in speed or angle
* ECS

<img src="/img/Integrations/RED/RCP/shutter.gif"/>

### White clip

Path : `MENU > PAINT > KNEE`


<img src="/img/Integrations/RED/RCP/white_clip.gif"/>
<img width="480px" src="/img/Manual/RCP/RCP-encoders-1-right.png"/>


### Saturation

Path : `MENU > PAINT > COLOR`

<img src="/img/Integrations/RED/RCP/F44.BMP"/>

### LUT

Path : `MENU > PAINT > LOOK`

<img src="/img/Integrations/RED/RCP/lut.gif"/>
<img width="480px" src="/img/Manual/RCP/RCP-encoders-1-right.png"/>

:::note
You can upload LUTs on the RCP, see <a href="/docs/Integrations/Generic/3DLUTProcessor#3d-lut-importexport-in-rcp">here</a>.
And you can then navigate through the LUT list.

Clear will set the LUT to `None` in the camera.

Set will upload the selected LUT to the camera.

ON/OFF will toggle it.
:::

### REC / TC

Path : `MENU > RECORD`

You can see the TC from the camera and trig the REC from the RCP.

<img src="/img/Integrations/RED/RCP/F40.BMP"/>

:::note
You can select a group and toggle the group using the Group button.

This will allow you to trig the REC on all the camera within the selected group.

This only applies to camera configured/imported on the RCP. So usuallly people put a RCP with all the cams (unlimited/broadcast version) and use it as a MSU and for this REC control.
:::

You can then see in the next tab a list of all:
* the cameras
* their TC
* their REC status

<img src="/img/Integrations/RED/RCP/F41.BMP"/>


## Setup RCP/RIO

- **Connect** camera and your RCP/RIO on the same network
- Enter a custom number, name, etc.
- **Add the Camera** to the RCP configuration via the [RCP Configuration UI](/docs/Manuals/RCP/ConfWebUI).
   - Select **Red** brand.
   - Select **Komodo** or **V-Raptor** model.
   - Enter the IP of your camera

:::note
If your camera is in a different range than your RIO/RCP. Follow [this guide](/docs/Configuration/ConfIP)
:::

This should looks like this:

<img src="/img/Integrations/RED/komodo-config-setup.png" width="300" />

And once correctly connected, it should be green:

<img src="/img/Integrations/RED/komodo-config-block.png" width="300" />

