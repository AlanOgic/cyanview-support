---
id: sony-venice
title: "Sony Venice integration"
sidebar_label: "Sony Venice"
description: "Integrate the Sony Venice and Venice 2 cinema cameras with Cyanview for full remote paint and lens control."
keywords: [Sony Venice, Venice 2, cinema, remote control]
slug: /integrations/cameras/sony/sony-venice
---

The Sony Venice connects to Cyanview over IP or serial for full remote control and paint. Both Venice 1 and Venice 2 are supported.

![Sony Venice cinema camera](/img/Integrations/Sony/Sony-Venice/Sony-Venice.png)

## Compatible models

- Sony Venice 1
- Sony Venice 2

## Overview

<video poster="/img/Integrations/Sony/Sony-Venice/Venice-handson.png" muted controls>
    <source src="/img/Integrations/Sony/Sony-Venice/Venice-handson.mp4"/>
</video>

## Controls

Two protocols are available:
- **Sony Venice IP** — Recommended for S-Log workflows where you do not need RCP paint mode.
- **Sony Venice Serial** — Full broadcast paint control via the 8-pin remote port.

| Control | Venice IP | Venice serial |
|:--------|:---------:|:-------------:|
| **Exposure** (Iris, Gain, Shutter[^2], ND filter[^3]) | ✔[^1] | ✔[^1.1] |
| **White balance** (color temp and tint) | ✔[^4] | ✔[^4.1] |
| **Black balance** (R/B and Master) | | ✔ |
| **Advanced shading** (Flare, Detail, Matrix, Multi Matrix) | | ✔[^5] |
| **REC** (start/stop) | ✔ | ✔ |
| **Other controls** (ISO base[^6], APR, pattern, flip, replay[^7], User Keys[^8], TC) | ✔ | |
| **Tally** | | ✔[^9] |
| **Lens** [zoom, focus](/docs/reference/manuals/rcp/ui/scene)[^10] | ✔ | |
| **Scene file** — [save/recall](/docs/reference/manuals/rcp/ui/scene) | ✔ | ✔ |

[^1]: Venice IP: gain is expressed in ISO. Affects SDI output only. Base ISO (800 or 3200) determines the ISO range and the fixed REC ISO.
[^1.1]: Venice Serial: gain in dB, 3 dB steps.
[^2]: Shutter can be displayed and controlled in angle or speed. ECS is also available.
[^3]: ND filters are presets only.
[^4]: Color temperature, tint, and AWB.
[^4.1]: R/B and color temperature available in Venice Serial, but not tint.
[^5]: Detail can be changed and toggled on/off. Matrix and Multi Matrix can be changed and toggled.
[^6]: Base ISO available in Venice IP only.
[^7]: To replay: in `Camera > User Keys > Custom`, switch to `Clips`. Then in `Record > Replay`, replay your last clip.
[^8]: User keys are accessible via `Camera > User Keys` — you can call them but must assign them on the camera body in `Project > Assignable Button`.
[^9]: Venice Serial: RED tally only, and only when not recording (the REC status uses the same indicator).
[^10]: Venice IP: zoom/focus can be displayed and controlled in speed; position is display-only.

## Wiring

Control modes:
- **Sony Venice IP** — Control over IP. Works best for S-Log workflows. RCP paint mode is disabled.
- **Sony Venice Serial** — Control over the 8-pin remote port. Required for RCP paint mode.

You can use the RCP alone for local (LAN) IP control, or add a CI0 for serial. For wireless (4G, RF, Wi-Fi), use a RIO for both IP and serial.

### Sony Venice IP (LAN)

![Sony Venice IP LAN wiring diagram](/img/Integrations/Sony/Sony-Venice/Sony-Venice-IP-wiring.png)

- RCP powered by PoE or 12V PSU.
- RCP communicates directly with camera over IP.

:::note
Works through a simple Ethernet switch or fiber such as Ereca CAM Racer.
:::

### Sony Venice Serial (LAN)

![Sony Venice Serial LAN wiring diagram](/img/Integrations/Sony/Sony-Venice/Sony-Venice-8P-LAN-wiring.png)

- RCP powered by PoE or 12V PSU.
- CI0 or RIO/RIO +LAN powered by the camera through the cable (no D-TAP required).
- Cable: CY-CBL-6P-SONY-8P-03 (controls camera and powers CI0/RIO).

:::note
Works through a simple Ethernet switch or fiber such as Ereca CAM Racer.

Some prefer to keep the CI0/RIO +LAN on the camera side, with Ethernet running between the RCP and CI0/RIO +LAN. Others prefer the CI0/RIO +LAN on the RCP side with serial running through Ereca (cleaner camera side, but you lose the flexibility of the RIO +LAN for external motor/lens control).
:::

### Sony Venice IP (wireless)

![Sony Venice IP wireless wiring diagram](/img/Integrations/Sony/Sony-Venice/Sony-Venice-IP-wireless.png)

- RCP powered by PoE or 12V PSU, connected to internet.
- RIO powered by D-TAP.
- RIO connected to camera via Ethernet.
- RCP communicates with RIO over internet (4G, RF, Wi-Fi, etc.).

:::note
This handles telemetry only — video transport requires a separate RF solution.
:::

### Sony Venice Serial (wireless)

![Sony Venice Serial wireless wiring diagram](/img/Integrations/Sony/Sony-Venice/Sony-Venice-8P-wireless.png)

- RCP powered by PoE or 12V PSU, connected to internet.
- RIO powered by D-TAP.
- RIO connected to camera via cable CY-CBL-6P-SONY-8P-03.
- RCP communicates with RIO over internet (4G, RF, Wi-Fi, etc.).

:::note
This handles telemetry only — video transport requires a separate RF solution.
:::

## Camera setup

### Venice IP

In `Technical > Network > Setting`:
- Set `Setting` to `LAN`.
- In the `LAN` submenu:
  - Set `DHCP` to `Off`.
  - Set `IP Address` to the desired camera IP (e.g., `10.192.10.100`).
  - Set `Subnet Mask` to the desired subnet (e.g., `255.255.0.0`).

In `Technical > Authentication`: set your `Username` and `Password`.

In `Technical > Special Configuration`: set `RM / RCP Paint Con` to `Off`.

### Venice Serial

In `Technical > Special Configuration`: set `RM / RCP Paint Con` to `On`.

## RCP setup

Add the camera via the [RCP Configuration UI](/docs/reference/manuals/rcp/web-ui).

### Venice IP

- Enter a camera number, name, etc.
- Select **Sony** for brand.
- Select **Sony Venice(IP)** for protocol.
- Enter the camera IP address.
- Enter the login and password.

![Venice IP RCP configuration block](/img/Integrations/Sony/Sony-Venice/Venice-IP-block.png)

![Venice IP RCP setup form](/img/Integrations/Sony/Sony-Venice/Venice-IP-setup.png)

### Venice Serial

- Enter a camera number, name, etc.
- Select **Sony** for brand.
- Select **Sony Venice(Serial)** for protocol.
- Select the CI0/RIO port the camera is connected to.

![Venice Serial RCP configuration block](/img/Integrations/Sony/Sony-Venice/Venice-Serial-block.png)

![Venice Serial RCP setup form](/img/Integrations/Sony/Sony-Venice/Venice-Serial-setup.png)

## RCP operation

![RCP main screen for Sony Venice](/img/Integrations/Sony/Sony-Venice/RCP/F29.BMP)

The exposure section and joystick give you access to iris, ISO, and shutter.

### Assignable keys

Customize the 10 buttons at the top of the RCP main screen via `MENU > SYSTEM > ASSIGN. > Set Buttons`. Keys 1–5 are unassigned (`NA`) by default.

![Venice assignable keys configuration](/img/Integrations/Sony/Sony-Venice/RCP/F40.BMP)

Useful assignments:
- **Lock button** as a shortcut to REC menus (replay, etc.) — the LED reflects REC status.

  ![Lock button as REC shortcut with LED indicator](/img/Integrations/Sony/Sony-Venice/RCP/F25.BMP)

- Camera assignable buttons (1–4 and A–C, Home, Clips).

  ![Camera assignable buttons 1-4](/img/Integrations/Sony/Sony-Venice/RCP/F35.BMP)

  ![Camera assignable buttons A-C Home Clips](/img/Integrations/Sony/Sony-Venice/RCP/F36.BMP)

Base ISO from the gain view:

![Base ISO selection in gain view](/img/Integrations/Sony/Sony-Venice/RCP/F37.BMP)

Shutter angle/speed from the shutter view:

![Shutter angle and speed controls in shutter view](/img/Integrations/Sony/Sony-Venice/RCP/F38.BMP)

Test patterns from the test view:

![Test pattern selection in test view](/img/Integrations/Sony/Sony-Venice/RCP/F39.BMP)

### Assignable encoders

Customize the 4 encoders below the RCP main screen via `MENU > SYSTEM > ASSIGN. > Encoders`. Default assignments are gamma, saturation, detail, ND.

![Default encoder assignments: gamma, saturation, detail, ND](/img/Integrations/Sony/Sony-Venice/RCP/F26.BMP)

Default encoder layout on the main screen:

![RCP main screen with default encoder assignments](/img/Integrations/Sony/Sony-Venice/RCP/F27.BMP)

For cine-style cameras like the Venice, reassign to color temperature, tint, ND:

![Encoder assignment changed to color temp, tint, ND](/img/Integrations/Sony/Sony-Venice/RCP/F28.BMP)

Updated encoder layout on the main screen:

![RCP main screen with color temp, tint, ND encoder assignments](/img/Integrations/Sony/Sony-Venice/RCP/F29.BMP)
