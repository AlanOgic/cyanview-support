---
id: lens
title: "RCP UI — Lens control"
sidebar_label: "Lens"
description: "Lens control interface on the Cyanview RCP. Focus, zoom, iris settings, and lens motor configuration."
keywords: [RCP, UI, lens control, focus, zoom, iris]
slug: /reference/manuals/rcp/ui/lens
---

The Lens menu lets you control zoom, focus, and robotics (pan/tilt/roll). What you can control — and how — depends on your camera, lens, and robotic head.

The available controls and their type (speed or position) vary based on whether you have:
- A PTZ camera.
- A lens (iris, zoom, focus) controlled through the camera.
- An external lens (iris, zoom, focus) controlled directly through the lens or via motors (ARRI, Tilta).

:::info
As a general rule:
- PTZ cameras have speed/position control for everything (zoom, focus, pan, tilt).
- Cameras offer iris control in position, but no zoom/focus control.
- Lens + camera setups have iris in position and zoom/focus (optional) in speed and position.

This is determined by the camera protocol.

Speed vs. position matters:
- To use external zoom/focus control (BM handles, etc.), you need zoom in speed and focus in position.
- For remote control over unstable connections (4G, etc.), speed mode smooths network jitter better than position.
- You can only save and recall absolute positions.
:::

## Lens menu

Path: `MENU > LENS`

![Lens menu overview](/img/Manual/RCP/Lens/F1.BMP)

- **LENS** — setup and info.
- **PTZF** — PTZ control and operation.

![Lens control and enable settings](/img/Manual/RCP/Lens/F2.BMP)

This page applies only to external lenses (e.g., a Canon PL lens on an FX9 controlled via a RIO):
- Control is exclusive — if the RIO takes control, the cameraman loses it.
- **Iris** — usually enabled, as it is the primary RCP use case.
- **Zoom** — usually disabled to let the cameraman zoom. Enable for robotic or beauty shot applications.
- **Focus** — usually disabled to let the cameraman focus. Enable for robotic or beauty shot applications.

![Lens communication status showing connected lens model](/img/Manual/RCP/Lens/F3.BMP)

If using an external lens, this page shows the lens model when communication is established.

![Lens info page](/img/Manual/RCP/Lens/F4.BMP)

## PTZF menu

### Controlling PTZF

![PTZF control page](/img/Manual/RCP/Lens/F5.BMP)
![RCP encoder layout](/img/Manual/RCP/RCP-encoders.png)

Control zoom, focus, pan, and tilt using:
- **Encoders** — absolute/position control.
- **Touchscreen** — speed/relative control.

Some protocols display an absolute value without offering absolute control. This is a camera protocol limitation.

### Saving and loading positions

You can save and load up to 10 presets for zoom, focus, pan, and tilt — provided you have absolute control and values.

![Position presets save/load screen](/img/Manual/RCP/Lens/F6.BMP)
![RCP encoder layout](/img/Manual/RCP/RCP-encoders.png)

- Click **Save**, then select a position slot to store the current values.
- Click a slot to recall its saved values (zoom, focus, pan, tilt).
- Click **Clear**, then select a slot to delete it.

### Settings

![PTZF settings page](/img/Manual/RCP/Lens/F7.BMP)

Configure:
- Horizontal/vertical flip
- Digital zoom toggle
- Stabilisation toggle

Control:
- Roll
- Digital zoom

### Focus

![Focus control page](/img/Manual/RCP/Lens/F9.BMP)
![RCP encoder layout](/img/Manual/RCP/RCP-encoders.png)

From this page you can:
- Control focus relatively in speed using the touchscreen.
- Control focus in absolute position using the first encoder.
- Change AF mode (if available) using the second encoder.
- Trigger a one-shot focus using the touchscreen button.
- Toggle AF on/off using the touchscreen button.
