---
id: settings
title: "RCP UI — Settings"
sidebar_label: "Settings"
description: "System settings for the Cyanview RCP. Network, display, firmware, and advanced configuration options."
keywords: [RCP, UI, settings, network, firmware, system]
slug: /reference/manuals/rcp/ui/settings
---

You can access this menu with : `MENU > SYSTEM > SETTINGS`

## Settings



|                          Settings1                          |                          Settings2                          |
| :---------------------------------------------------------: | :---------------------------------------------------------: |
| <img src="/img/Manual/RCP/Settings/F1.BMP" width="480px" /> | <img src="/img/Manual/RCP/Settings/F2.BMP" width="480px" /> |

| Setting | Values | Description |
| :------ | :----: | :---------: |
| Follow router selection         | ON/OFF | The active camera on RCP follows the output of the switcher associated with this RCP monitor.|
| AUTO preview on camera change   | ON/OFF | Trig a preview automatically when changing a camera (prev/next). When disable, you can change camera and you need to actively press preview button.|
| Disable Prev / Next keys        | ON/OFF | Disbale the prev/next keys, so the RCP can't change its active camera using the buttons.|
| Access all cameras              | ON/OFF | When OFF, the camera list of this RCP follows the setting `camera_list` (defined in `/dev/app.html` in RCP block of the web UI)|
| Show menus when Preview pressed | ON/OFF | When ON, display the preview menu (Camera list, keypad, List, groups).|
| Display all assignable buttons | ON/OFF | When ON, the functions / views assigned to the blue buttons are also displayed in the main view.<br />*See [RCP UI - Assignables](/docs/reference/manuals/rcp/ui/assignables) view for more info* |
| Display GREEN values on main view | ON/OFF | When ON, the green gain and green pedestal values are displayed in the main view |

## Units

<img src="/img/Manual/RCP/Settings/F3.BMP" width="480px" />

| Setting | Values | Description |
| :----- | :----: | :---------: |
| ND : Transmission / Optical density | Transmission/Optical density | To determine how to display ND filter values. Either in transmission (1/4, 1/16, etc.) or optical density (0.2, 1.8, etc.) |

## Sensitivity



<img src="/img/Manual/RCP/Settings/Sensitivity/sensitivity.gif"/>
<img width="480px" src="/img/Manual/RCP/RCP-encoders-1-right.png"/>


| Setting | Values | Description |
| :----- | :----: | :---------: |
| White sensitivity| x1/x2/x4 | will change the number of steps when turning the white encoders |
| Black sensitivity| x1/x2/x4 | will change the number of steps when turning the black encoders |

:::info
If I do 1 turn of my red/white encoder, on a Dreamchip camera, while my `White sensitivity` is:
* `x1` : 80
* `x2` : 40
* `x4` : 20

So increasing the ratio will give me more precision and smaller steps.
:::
