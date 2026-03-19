---
id: general
title: "RCP UI — General settings"
sidebar_label: "General"
description: "RCP general settings page. System preferences, display options, and global configuration for your Cyanview RCP."
keywords: [RCP, UI, general settings, preferences, display]
slug: /reference/manuals/rcp/ui/general
---

The RCP's interface is designed to be intuitive, but some mechanisms need a closer look. This page explains navigation, screen layout, encoder behavior, the AUTO button, and how the RCP handles color corrector priority.

## Navigation

### Entering the menus

Two ways to open the menu system:

- **MENU button** — located at the top right corner, opens the main menu.
- **Blue and white buttons** — positioned just above the screen, these act as shortcuts to specific menu sections. You can customize them to suit your workflow. See [RCP UI — Assignables](/docs/reference/manuals/rcp/ui/assignables).

![RCP buttons and assignable shortcuts](/img/Manual/RCP/RCP-buttons.png)

### Navigating within menus

Once a menu is open, navigate using the **touchscreen**: tap options, scroll through lists, and open submenus.

### Switching between views

In configuration screens, two methods let you switch views:

- Tap the **left or right edges** of the touchscreen.
- Press the **white navigation buttons** (left/right arrows) above the screen.

The touchable zones are highlighted in yellow below.

![Touchscreen navigation zones highlighted in yellow](/img/Manual/RCP/tactile_area.png)

## Main screen

### Assignable buttons

The white button functions are displayed at the top of the screen.

**Permanent configuration** — set the default display mode via **SETTINGS > RCP Settings**. See [RCP Settings](/docs/reference/manuals/rcp/ui/settings).

**Temporary toggle** — tap directly on the button label area on the touchscreen:

- By default, only the **white buttons'** assigned functions are shown.
- Tapping the white button area temporarily switches the display to show the **blue buttons'** functions.
- After **2 seconds**, the display returns to white buttons only.

**Simultaneous display mode** — if you tap the area again within those 2 seconds, the RCP shows **both white and blue buttons'** assigned functions at the same time.

### Green channel display and control

| ![RCP home screen — default view](/img/Manual/RCP/RCP-home-screen.BMP) | ![RCP home screen — green enabled](/img/Manual/RCP/RCP-home-screen1.BMP) |
| --- | --- |

By default, the RCP displays only **red** and **blue** channel controls for gain and black levels.

**Enable green channel display** — navigate to **SETTINGS > RCP Settings**. See [RCP Settings](/docs/reference/manuals/rcp/ui/settings). Once enabled, green gain and black levels appear alongside red and blue.

**Manual green access** — from the main view, press and hold either the red or blue encoder, then rotate it to adjust the green channel.

**Menu access** — for precise adjustments, use **Paint > White** or **Paint > Black**. These views show all three channels simultaneously.

## Encoder colors and dual functions

On some RCP pages, encoder labels appear in **blue** instead of white. Blue indicates the encoder has a **dual function**.

To access the secondary function, **press the encoder**. The label changes to reflect the secondary function.

**Example — Gain / Fine Gain:** the encoder label "Gain" appears in blue.

- Turning it adjusts the main **Gain** value.
- Pressing it switches to **Fine Gain** mode for more precise control.

| ![Encoder showing main Gain function](/img/Manual/RCP/ENCDUAL1.BMP) | ![Encoder showing Fine Gain function](/img/Manual/RCP/ENCDUAL2.BMP) |
| --- | --- |

## AUTO button

The **AUTO** button activates the camera's automatic functions. The main screen shows which are active:

- **AI** — Automatic Iris
- **AE** — Automatic Exposure
- **AGC** — Automatic Gain Control
- **AF** — Autofocus
- **ATW** — Automatic Tracking White balance
- **AWB** — Automatic White Balance

When an automatic function is enabled, its label appears in **yellow**. The AUTO button itself lights **red** when any automatic mode is active.

**Customize which functions AUTO toggles** — go to **Camera Menu > AUTO**, then open the **Mask** tab.

**Open the AUTO menu directly** — press and hold the AUTO button for a few seconds.

![AUTO mask configuration screen](/img/Manual/RCP/AUTOMASK.BMP)

## Actions

When a page includes specific triggerable actions, you'll see an **"ACTION"** label at the **top left corner** of the screen.

- Press the **leftmost white button** (below the "ACTION" label) to open the action menu.
- Tap an action on the touchscreen to execute it immediately.
- Press the **same white button** again to close the menu without executing anything.

![ACTION menu on the RCP screen](/img/Manual/RCP/ACTION.BMP)

## Camera and color corrector control display

When a **color corrector** is used alongside a camera, control values use two colors:

- **White** — parameter controlled by the **camera**.
- **Cyan** — parameter controlled by the **color corrector**.

**Example** — in the screenshot below, all parameters are camera-controlled (white) except **Green Black**, which is color corrector-controlled (cyan).

![RCP mixed control display showing camera and color corrector values](/img/Manual/RCP/MIXED.png)

### Managing control priority

When both camera and color corrector offer the same control, define which takes priority via **`MENU > PROC/VP4 > PRIO`**.

![Priority menu options](/img/Manual/RCP/PRIO.BMP)

| Setting | Description |
|---|---|
| **Use camera** | Enable camera controls. |
| **Use post processor** | Enable post processor controls. |
| **Camera has priority over post processor** | Uses camera controls when both are available; falls back to color corrector if not. |
| **Enable post processor** | Disables the color corrector entirely. On supported devices like VP4, the output copies the input signal with all processing disabled. |
