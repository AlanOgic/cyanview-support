---
id: p2hd
title: "Panasonic P2HD cameras"
sidebar_label: "Panasonic P2HD"
description: "Integrate Panasonic P2HD broadcast cameras with Cyanview for full remote paint and camera control."
keywords: [Panasonic P2HD, broadcast, paint control]
slug: /integrations/cameras/panasonic/p2hd
---

![Panasonic AJ-PX380](/img/Integrations/Panasonic/AJ-PX380.png)

Control newer P2HD camcorders over IP using a direct Ethernet connection to the RCP. For older serial-only models, see [P2 serial](/docs/integrations/cameras/panasonic/p2-serial).

## Supported models

- AJ-PX270
- AJ-PX380
- AJ-PX800
- AJ-PX5000
- AJ-PX5100

## Supported control

The control protocol and available features are consistent across all models. Some parameters can be monitored but not modified.

| Control | Notes |
| :------ | :----- |
| Exposure — Iris, Gain, Shutter | |
| Auto exposure — Iris | |
| Syncro Scan | |
| ND | Display only — ND is not motorized |
| White balance — R/B gains | |
| AWB | |
| Black level and balance (R/B/Master) | Includes ABB |
| Detail | ON/OFF only — level is displayed but not adjustable |
| Knee | ON/OFF only — other parameters cannot be controlled |
| Menu navigation | CHAR display function; must be enabled from camera menus before connecting |
| Tally | Red works; green is acknowledged by the camera but not visibly displayed |
| Bars | |

### Limitations

:::warning
When the camera is connected to a controller (Cyanview RCP or Panasonic ROP), some camera functions are disabled and cannot be changed from the camera itself — not even through the camera menus.
:::

- **Auto-iris at startup**: The AJ-PX5100 (and potentially other models) activates auto-iris on power-on. The RCP reflects this state — you must manually switch iris back to manual mode.
- **CHAR must be pre-enabled**: Menu navigation works from the RCP only when CHAR is enabled on the SDI output. You cannot activate CHAR from the RCP — enable it through the camera menus before connecting.
- **Detail level is locked under control**: To change the detail level, disconnect the Ethernet cable, reboot the camera, and adjust the value through the camera menus. Once reconnected, you can toggle detail on/off from the RCP, but the level cannot be changed — even from the camera menus.
- **Color temperature cannot be adjusted directly**: White balance is limited to selecting memories A, B, or Preset. In A or B, you can trigger AWB to store a new color temperature. Preset is fixed and can only be changed through the camera menus. Note that Preset mode incorrectly reports ATW as active — this is a false status from the camera.

## Workflow

A single Ethernet cable between the camera and the RCP is sufficient.

![P2HD control over IP](/img/Integrations/Panasonic/Panasonic-P2IP-connect.png)

## Configuration

Enter the camera's IP address — no username or password is required. Each model has its own entry in the model list.

![P2HD RCP configuration](/img/Integrations/Panasonic/Panasonic-P2IP-config.png)
