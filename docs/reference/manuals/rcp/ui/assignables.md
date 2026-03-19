---
id: assignables
title: "RCP UI — Assignable controls"
sidebar_label: "Assignables"
description: "Configure assignable controls on the Cyanview RCP. Map camera parameters to physical buttons and knobs."
keywords: [RCP, UI, assignable, buttons, knobs, custom]
slug: /reference/manuals/rcp/ui/assignables
---

The RCP has 10 + 1 assignable buttons and 4 assignable encoders. You can customize the LOCK/PWR button, the 10 buttons above the main screen, and the 4 encoders below it.

![RCP top buttons layout](/img/Manual/RCP/RCP-buttons.png)
![Assignable buttons overview screen](/img/Integrations/RED/RCP/F1.BMP)
![RCP encoder layout](/img/Manual/RCP/RCP-encoders.png)

Path: `MENU > SYSTEM > ASSIGN.`

The first tab (**Buttons**) gives you an overview of the current button assignments.

![Buttons overview tab showing current assignments](/img/Manual/RCP/Assignables/F3.BMP)

In this example:
- The LOCK button is assigned to `POWER`.
- The first row has no assignments (`NA`).
- The second row is assigned to SCENE, PAINT, CAMERA, LENS, SYSTEM.

To reset to defaults, press `ACTION` (top left button on the screen) and select **Reset to default**.

![ACTION menu showing Reset to default option](/img/Manual/RCP/Assignables/F5.BMP)

## LOCK button

Path: `MENU > SYSTEM > ASSIGN.`

Go to **Set Buttons** and turn the first encoder (`Button`) to select `LOCK`.

![LOCK button assignment screen](/img/Manual/RCP/Assignables/F31.BMP)

You can assign two shortcuts to the LOCK button:

- `Power (view)` — typical use in broadcast.
- `Record (view)` — typical use in cinematic.

`view` means the assignment navigates to a view rather than triggering a function.

When `Record` is selected:
- The LOCK button LED reflects the `REC` status of the camera shown on the RCP.
- Pressing it takes you to the record page (REC on/off, status, TC, etc.).

## Assignable buttons

Path: `MENU > SYSTEM > ASSIGN.`

Go to **Set Buttons** and turn the first encoder (`Button`) to select one of the 10 buttons.

![RCP top buttons layout](/img/Manual/RCP/RCP-buttons.png)
![Button assignment configuration screen](/img/Manual/RCP/Assignables/F4.BMP)

After selecting a button and a shortcut:
- Click `Assign` to link the button to the shortcut.
- Click `Clear` to remove the shortcut.

Each button (1–10) can be set to any `view`, `menu`, or `function`:
- `view` — navigates to a view (e.g., `REC` opens the record page).
- `menu` — opens a submenu (e.g., `Paint Menu` opens the paint submenu).
- `function` — executes an action.

Available assignments:

| Assignment | Type |
|---|---|
| `Not assigned` | `NA` |
| `Scene Menu` | menu |
| `Scene Files` | view |
| `Scene Config` | view |
| `Paint Menu` | menu |
| `Filters` | view |
| `White` | view |
| `Black` | view |
| `Detail` | view |
| `Skin Detail` | view |
| `Matrix` | view |
| `Gain` | view |
| `Gamma` | view |
| `Knee` | view |
| `Shutter` | view |
| `Color` | view |
| `Look` | view |
| `Denoise` | view |
| `Camera Menu` | menu |
| `Auto` | view |
| `Menu` | view |
| `User Keys` | view |
| `Power` | view |
| `Sensor` | view |
| `Tally` | view |
| `Test` | view |
| `Lens Menu` | menu |
| `Lens` | view |
| `PTZF` | view |
| `Preview` | view |
| `Record` | view |
| `System Menu` | menu |
| `Assignable` | view |
| `Display` | view |
| `GPIO` | view |
| `Info` | view |
| `Units` | view |
| `Priority` | view |
| `Settings` | view |
| `Toggle Cam / Post Priority` | func — toggles priority between `cam > post` or `post > cam` when combining camera and post processor |
| `Toggle Camera usage` | func — toggles the camera when combining camera and post processor (keeps only the post) |
| `Toggle Post processor usage` | func — toggles the post when combining camera and post processor (keeps only the camera) |
| `Toggle Enable post processor` | func — toggles the post into passthrough mode when combining camera and post processor |

## Assignable encoders

You can customize the 4 encoders below the RCP main screen.

![Assignable encoders overview screen](/img/Integrations/RED/RCP/F1.BMP)
![RCP encoder layout](/img/Manual/RCP/RCP-encoders.png)

Path: `MENU > SYSTEM > ASSIGN.`

Go to **Set Encoders** and turn each encoder to the desired function.

![Encoder assignment configuration screen](/img/Manual/RCP/Assignables/F8.BMP)
![RCP encoder layout](/img/Manual/RCP/RCP-encoders.png)

Each encoder can be assigned to:
- `--` (none)
- `M. GAMMA`
- `GAMMA`
- `ND` (presets and variable)
- `SATURATION`
- `COLOR TEMP`
- `DETAIL`
- `TINT`

Moving an encoder changes its assignment and saves it automatically.

To reset to defaults, press the top-left button (`ACTION`) and select **Reset to default**.

![Encoder reset ACTION menu](/img/Manual/RCP/Assignables/F6.BMP)

## Example — RED Raptor

Path: `MENU > SYSTEM > ASSIGN.`

Button 1 set to toggle cam/post priority (useful when combining a RED Raptor with an AJA ColorBox, VP4, etc.):

![RED Raptor — button 1 assigned to Toggle Cam/Post Priority](/img/Manual/RCP/Assignables/RED/F2.BMP)

LOCK button set to Record menu (useful for cinematic cameras):

![RED Raptor — LOCK button assigned to Record](/img/Manual/RCP/Assignables/RED/F3.BMP)

Encoders set to saturation, color temp, and tint:

![RED Raptor — encoders assigned to saturation, color temp, tint](/img/Manual/RCP/Assignables/RED/F3.BMP)

The main view showing the **white** (second row) assignable buttons at the top:

![Main view with white button row visible](/img/Manual/RCP/Assignables/RED/F5.BMP)

Tap the top of the screen to switch to the **blue** (first row) assignable buttons:

![Main view with blue button row visible](/img/Manual/RCP/Assignables/RED/F6.BMP)
