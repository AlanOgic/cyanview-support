---
id: settings
title: "RCP UI — Settings"
sidebar_label: "Settings"
description: "System settings for the Cyanview RCP. Network, display, firmware, and advanced configuration options."
keywords: [RCP, UI, settings, network, firmware, system]
slug: /reference/manuals/rcp/ui/settings
---

Access this menu at `MENU > SYSTEM > SETTINGS`.

## Settings

| ![Settings page 1](/img/Manual/RCP/Settings/F1.BMP) | ![Settings page 2](/img/Manual/RCP/Settings/F2.BMP) |
| :---: | :---: |
| Settings 1 | Settings 2 |

| Setting | Values | Description |
| :------ | :----: | :---------- |
| Follow router selection | ON/OFF | The active camera on the RCP follows the output of the switcher associated with this RCP monitor. |
| AUTO preview on camera change | ON/OFF | Triggers a preview automatically when you change camera (prev/next). When disabled, you must press the preview button manually. |
| Disable Prev / Next keys | ON/OFF | Disables the prev/next keys so the RCP cannot change its active camera using those buttons. |
| Access all cameras | ON/OFF | When OFF, the camera list follows the `camera_list` setting defined in `/dev/app.html` in the RCP block of the web UI. |
| Show menus when Preview pressed | ON/OFF | When ON, displays the preview menu (camera list, keypad, list, groups). |
| Display all assignable buttons | ON/OFF | When ON, the functions assigned to the blue buttons are also shown in the main view. See [RCP UI — Assignables](/docs/reference/manuals/rcp/ui/assignables). |
| Display GREEN values on main view | ON/OFF | When ON, green gain and green pedestal values are displayed in the main view. |

## Units

![Units settings page](/img/Manual/RCP/Settings/F3.BMP)

| Setting | Values | Description |
| :------ | :----: | :---------- |
| ND: Transmission / Optical density | Transmission / Optical density | Controls how ND filter values are displayed — either in transmission (1/4, 1/16, etc.) or optical density (0.2, 1.8, etc.). |

## Sensitivity

![Sensitivity animation showing encoder steps](/img/Manual/RCP/Settings/Sensitivity/sensitivity.gif)
![RCP encoder layout — right side](/img/Manual/RCP/RCP-encoders-1-right.png)

| Setting | Values | Description |
| :------ | :----: | :---------- |
| White sensitivity | x1 / x2 / x4 | Changes the number of steps per turn on the white encoders. |
| Black sensitivity | x1 / x2 / x4 | Changes the number of steps per turn on the black encoders. |

:::info
Higher sensitivity values produce smaller steps and more precision. For example, one full turn of the red/white encoder on a Dreamchip camera produces:
- `x1` → 80 steps
- `x2` → 40 steps
- `x4` → 20 steps
:::
