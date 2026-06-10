---
id: power-management
title: "RCP UI — Power management"
sidebar_label: "Power Management"
description: "Lock, power off, reboot, or restart the Cyanview RCP from the touchscreen menu using the POWER and SYS CTL pages."
keywords: [RCP, UI, power management, lock, power off, reboot, restart]
slug: /reference/manuals/rcp/ui/power-management
---

The RCP's power management controls are split across two menu pages:

- `MENU > SYSTEM > POWER` — lock the panel or switch off the controls.
- `MENU > SYSTEM > SYS CTL` — reboot the system or restart the RCP application.

## Power

Go to `MENU > SYSTEM > POWER`.

![RCP system menu — POWER page](/img/Manual/RCP/RCP-menu-system-5_1_7.BMP)

| Command | Description |
|---|---|
| **LOCK** | Locks the RCP panel controls. |
| **POWER OFF** | Switches off the RCP controls. Press the **Power/Lock** button again to switch them back on. |

## System control

Go to `MENU > SYSTEM > SYS CTL`.

![RCP system menu — SYS CTL page](/img/Manual/RCP/RCP-menu-system-6_1_7.BMP)

The **SYS CTL** page provides maintenance commands that temporarily interrupt RCP control.

| Command | Description |
|---|---|
| **Reboot System** | Reboots the complete RCP system. |
| **Restart Application** | Restarts only the RCP application, without rebooting the system. |

:::warning
Both commands interrupt camera control for several tens of seconds while the RCP comes back up. Avoid running them during live production.
:::
