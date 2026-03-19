---
id: routers
title: "Router and switcher integration"
sidebar_label: "Routers"
description: "Integrate Cyanview with video routers and switchers for tally feedback and auxiliary output control in your broadcast workflow."
keywords: [router, switcher, tally, auxiliary, integration]
slug: /integrations/generic/routers
---

Integrating the RCP with a video router provides:
- Bi-directional synchronization between the camera selected on the RCP and the source shown on the operator's monitor. When the operator changes camera on the RCP, the router output follows. If the source changes on the router panel, the RCP selection updates accordingly.
- Joystick override mode — the operator sees the camera while holding preview, then returns to the fallback signal on release.
- Router configuration sharing across multiple RCPs using a single router connection.
- Tally status derived from the source camera feeding a given router output.

## Supported devices

- Pro-Bel/Snell SW-P-08 (VSM, Cerebrum, Hi, Ross switchers, etc.)
- Evertz Quartz
- AJA Kumo
- Blackmagic Videohub and ATEM
- Newtek Tricaster
- VMix
- AVMatrix Multiviewer

## Configuration

:::warning
Configure only one router per device. The UI allows adding more than one, but the behavior will be unpredictable.
:::

All router and switcher integrations work over IP. The RCP must be on the same network as the router.

1. Open the `Configuration` tab and go to the `Components` section.
2. Click `+`, then select `Router / Switcher`.
3. Choose the router or switcher type that matches your device.

A new block appears. Click it to display settings on the right:

![Router configuration panel showing IP, input/output range, and camera mapping fields](/img/Integrations/Generic/routers/router-config.jpg)

- [1] Rename the router (optional).
- [2] Enter the router IP address.
- [3] Select the range of inputs assigned to cameras (e.g., `1,2,3`, `1-3`, or `1,2,5-9`).
- [4] Map each camera to the corresponding router input.
- [5] Select the range of outputs to monitor.
- [6] Associate the RCP with one or more auxiliary outputs used as operator monitors.

When everything is correctly configured, the router block turns green:

![Router block showing green connected status](/img/Integrations/Generic/routers/router-block.png)

:::note
Input/output fields accept lists to filter relevant ports on large grids.

Valid formats:
- `1,2,4` — ports 1, 2, and 4
- `1-4,9-10` — ports 1, 2, 3, 4 and 9, 10
- `1-3,5` — ports 1, 2, 3 and 5
- `1` — a single port
:::

## Joystick override configuration

:::note
This configuration uses the development interface at `/dev/app.html`. The main UI will be updated in a future release.
:::

Joystick override switches the router input to the selected camera while preview is held, and restores the previous input on release. When no preview button is pressed, the router returns to a dedicated fallback signal.

1. **Set preview GPIO mode to Level** — Select the `RCP` block in the Configuration tab. Change `Preview GPIO mode` to `Level` in the right-side properties.

   ![ATEM fallback level — Preview GPIO mode set to Level](/img/Integrations/Generic/routers/blackmagic-atem-fallback-level.jpg)

2. **Configure a fallback signal** — Open the development interface at `http://10.192.xx.yy/dev/app.html`. Find the router block in the third column.
   - [2] Click the outside shape (green area) to select the router block.
   - [3] In the top-right properties panel, enter the fallback router input number (e.g., `10`) and click **OK**.

   ![ATEM fallback in development interface — router block with fallback input field](/img/Integrations/Generic/routers/blackmagic-atem-fallback-devapp.jpg)

   The router now switches to the fallback input whenever the RCP preview button is released.

3. **Configure RCP panel behavior** as needed:

   ![RCP settings panel showing Follow router, Auto preview, and Show menu options](/img/Integrations/Generic/routers/blackmagic-atem-fallback-rcpsettings.jpg)

   - [1] **Follow router selection** — Disable to make the RCP ignore the router input and stay on the current camera. Useful when multiple RCPs are in use, or when you prefer independent camera selection.
   - [2] **Auto preview on camera change** — Disable to prevent preview actions when switching cameras on the RCP. This avoids briefly switching to the new camera before falling back to the dedicated signal.
   - [3] **Show menu when Preview is pressed** — Disable. In this workflow the goal is to hold preview for parameter adjustment, not to open a menu.

## Sharing a router configuration with other RCPs

:::note
This configuration uses the development interface at `/dev/app.html`. The main UI will be updated in a future release.
:::

To avoid too many connections to the router, configure the router integration on one RCP and share it with others. Shared RCPs see the router automatically and can be configured as if they have their own connection.

Enable sharing on the main RCP only. Open the development interface at `http://10.192.xx.yy/dev/app.html`. Find the router block in the third column:
- Click the outside shape (green area) to select the router block.
- In the top-right properties, set `Shared` from `0` to `1`, then click **OK**.

![Router sharing setting in development interface — Shared property set to 1](/img/Integrations/Generic/routers/blackmagic-atem-share.jpg)

:::warning
The RCP acting as proxy must remain connected. If it disconnects, all other RCPs lose communication with the router.
:::

Other RCPs now show the same router block in their `Components` section. Configure each with the cameras it controls as inputs and the output used for monitoring.

## Tally

To derive tally directly from router outputs, monitor one or more outputs and use them as the tally source. You can combine several outputs into a single tally signal so a camera is considered on-air whenever any of those outputs carry it.

This is common with large ATEM switchers using multiple M/Es. ATEM only exposes native tally for the first M/E; router-based tally lets you base tally on another M/E or merge tally from several M/Es.

![Router tally configuration showing red and green output fields](/img/Integrations/Generic/routers/router-tally.png)

In the red and green tally fields, enter the router outputs used for program (red) and preview (green).

Each field accepts:
- `1` — a single output.
- `1,2,3` — multiple outputs. Tally states from all listed outputs are combined.

For ATEM, M/E program outputs use names such as `Prg2`, `Prg3`, etc. Refer to the [ATEM integration](/docs/integrations/cameras/blackmagic/atem) for the exact labels.
