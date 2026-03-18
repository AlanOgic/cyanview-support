---
id: p2hd
title: "Panasonic P2HD cameras"
sidebar_label: "Panasonic P2HD"
description: "Integrate Panasonic P2HD broadcast cameras with Cyanview for full remote paint and camera control."
keywords: [Panasonic P2HD, broadcast, paint control]
slug: /integrations/cameras/panasonic/p2hd
---

<img src="/img/Integrations/Panasonic/AJ-PX380.png" width="600" />

## Supported Models

These are the newer P2HD models with **control over IP** (RJ45 connector at the back). For older models, see [P2 serial](/docs/integrations/cameras/panasonic/p2-serial).

* AJ-PX270
* AJ-PX380
* AJ-PX800
* AJ-PX5000
* AJ-PX5100


## Supported Control

The control protocol and available features are consistent across all models. However, only certain camcorder parameters can be adjusted. In some cases, parameters such as color temperature can be monitored but not modified.


|Control | Notes |
:-----|:-----|
**Exposure** — Iris, Gain, Shutter | |
**Auto Exposure** — Iris | |
**Syncro Scan** | |
**ND** | Display of the value only as ND is not motorized |
**White balance** — R/B gains | |
**AWB**| |
**Black level and balance** (R/B/Master) | Including ABB |
**Detail** | ON/OFF, level is displayed only|
**Knee**  | Only ON/OFF, other parameters cannot be controlled |
**Menu Navigation** | The OUT1 controls the CHAR display function of the camera but we're not sure what actually changes on the camera |
**Tally** | Red works, the camera acknowledges green but we didn't see it displayed |
**Bars** | |

### Limitations

:::warning
When the camera is connected to a controller, whether the Cyanview RCP or the Panasonic ROP, some functionalities are disabled and cannot be changed from the camera itself and sometimes not even from the camera menus.
:::

The following limitations have been observed:

* **Auto-Iris activated at camera startup**: The AJ-PX51000, and potentially other models, activate auto-iris upon powering on. The RCP will display this state, requiring you to manually switch iris back to manual mode.
* The RCP can control **menu navigation**, and most settings can be adjusted this way if CHAR is enabled on the SDI output. However, CHAR cannot be activated directly from the RCP, even though the camera appears to support this function. CHAR must be manually enabled through the camera menus before establishing a connection with the RCP.
* Detail level is displayed but cannot be changed while under control. To modify it, disconnect the Ethernet cable, reboot the camera, and adjust the value through the camera menus. Once reconnected, the detail can be toggled on/off from the RCP, but the level remains unchangeable, even via the camera menus.
* Color temperature cannot be adjusted directly. White balance control is limited to selecting between memories "A," "B," and "Preset." In "A" or "B," the AWB function can be triggered, allowing these memories to store a new color temperature. "Preset" represents a fixed value that can only be modified through the camera menus. One possible workflow involves assigning preset color temperatures to all memories beforehand and then switching between these from the RCP, or using the AWB function to automatically assign a color temperature. Additionally, the "Preset" mode incorrectly indicates ATW as active, even though the camera is not actually in ATW mode. This appears to be an erroneous status reported by the camera.



## Workflow

A simple Ethernet connection between the camera and the RCP is sufficient for IP control.

![P2HD control over IP](/img/Integrations/Panasonic/Panasonic-P2IP-connect.png)


## Configuration

This is the standard configuration for IP cameras: you only need to enter the camera's IP address—no username or password is required. Each model has its own entry in the list.

<img src="/img/Integrations/Panasonic/Panasonic-P2IP-config.png" width="250" />
