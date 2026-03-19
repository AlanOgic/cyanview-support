---
id: emberplus
title: "RCP Ember+ integration"
sidebar_label: "Ember+"
description: "Integrate Cyanview RCP with Ember+ protocol for broadcast automation and control system interoperability."
keywords: [RCP, Ember+, automation, broadcast control, protocol]
slug: /reference/manuals/rcp/emberplus
---

The RCP exposes an Ember+ interface that lets external devices switch cameras, follow the active camera selection, and read button states. You can also create virtual GPIOs on Ember+ and use them like standard GPIOs inside the RCP configuration.

:::warning
Several issues affecting the Ember+ interface were fixed in RCP firmware 25.12.1rc1. Use that version or later when working with Ember+. On older firmware, the last node in the Ember tree is not reported correctly when no virtual GPIOs are present. As a workaround, add at least one virtual GPIO to expose the full Ember tree.
:::

## Ember+ interface

The Ember+ server runs on port `9000` and is accessible via any of the RCP's IP addresses.

### Tree structure

```
- 0: identity (node)
  - 0.0: product [STRING] = "IP Gateway"
  - 0.1: company [STRING] = "CyanView"
  - 0.2: version [STRING] = "6da3ca915"
- 1: Devices (node)
  - 1.0: monitors (node)
    - 1.0.0: _15hrxy0 (node)
      - 1.0.0.0: requested_camera [STRING] = ""
      - 1.0.0.1: requested_camera_number [INTEGER] = 0
      - 1.0.0.2: requested_camera_name [STRING] = ""
      - 1.0.0.3: active_camera [STRING] = "1rfwo78"
      - 1.0.0.4: active_camera_number [INTEGER] = 1
      - 1.0.0.5: active_camera_name [STRING] = "Proton"
      - 1.0.0.6: tally_red [INTEGER] = 0
      - 1.0.0.7: tally_green [INTEGER] = 0
  - 1.1: rcps (node)
    - 1.1.0: _RCP-18-34 (node)
      - 1.1.0.0: camera_list [STRING] = ""
      - 1.1.0.1: active_camera_number [INTEGER] = 0
      - 1.1.0.2: preview [INTEGER] = 0
      - 1.1.0.3: next [INTEGER] = 0
      - 1.1.0.4: prev [INTEGER] = 0
  - 1.2: ios (node)
    - 1.2.0: _bure7u (node)
      - 1.2.0.0: io_number [INTEGER] = 8
      - 1.2.0.1: IO_1 [INTEGER] = 0
      - 1.2.0.2: IO_2 [INTEGER] = 0
      - 1.2.0.3: IO_3 [INTEGER] = 0
      - 1.2.0.4: IO_4 [INTEGER] = 0
      - 1.2.0.5: IO_5 [INTEGER] = 0
      - 1.2.0.6: IO_6 [INTEGER] = 0
      - 1.2.0.7: IO_7 [INTEGER] = 0
      - 1.2.0.8: IO_8 [INTEGER] = 0
```

### Node descriptions

**monitors** — synchronize the selected camera on the RCP with a monitor signal:
- `requested_camera` — set to a camera unique ID to switch the RCP to that camera
- `requested_camera_number` — set to a camera number to switch the RCP to that camera
- `requested_camera_name` — set to a camera name to switch the RCP to that camera
- `active_camera` — read only; returns the unique ID of the active camera
- `active_camera_number` — read only; returns the number of the active camera
- `active_camera_name` — read only; returns the name of the active camera
- `tally_red` — read only; current red tally status of the active camera
- `tally_green` — read only; current green tally status of the active camera

**rcps** — commands for the RCP panel itself, independent of router synchronization:
- `camera_list` — set a comma-separated list of camera numbers to restrict RCP navigation to those cameras
- `active_camera_number` — read or set the camera number displayed on the RCP panel, bypassing routing synchronization
- `preview` — reports the status of the Preview key; use this to map the key to external functions
- `next` — reports the status of the left arrow key
- `prev` — reports the status of the right arrow key

**ios** — virtual GPIO commands:
- `io_number` — reports the number of virtual GPIOs configured
- `IO_1` through `IO_8` — read or set the state of each virtual GPIO

## Switching cameras

The `monitors` section triggers the RCP's internal routing mechanism. When you set a `requested_camera` value, the RCP panel, dashboard, and any configured external router (such as an Atem, or a router using Probel SW-P-08) all switch to that camera. The `active_camera` parameters reflect the currently active camera once the switch completes.

If you set `active_camera_number` in the `rcps` section directly, only the RCP panel switches to that camera. The routing mechanism is bypassed, so other system components remain on their current camera.

## Adding virtual GPIOs

![RCP Ember+ virtual GPIO configuration screen](/img/Manual/RCP/RCP_emberplus.png)

1. Open the RCP configuration in your browser and append `/dev/app.html` to the URL to access the developer view.
2. Click **New Virtual IOs**. A new block appears at the bottom of the page.
3. Click the new block (the outer area, not an individual IO). Its properties appear in the top-right panel.
4. Set the number of GPIOs you need, then save.

The virtual GPIOs are now visible in the RCP GPIO tab on the main configuration page and behave like regular GPIOs.
