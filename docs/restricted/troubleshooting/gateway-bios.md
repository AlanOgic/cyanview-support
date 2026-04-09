---
id: gateway-bios
title: Recover gateway BIOS
description: "Recover the BIOS settings on gateways that no longer boot."
keywords: [gateway, bios, recovery, boot, vga]
slug: /restricted/troubleshooting/gateway-bios
---

# Recover gateway BIOS

## First verification

This procedure recovers the BIOS settings on gateways that no longer boot.

1. Remove the front panel to access the VGA connector.
2. Connect a VGA display and a USB keyboard.
3. Try to boot the gateway. If the gateway starts, apply the following steps. If it does not start, the gateway probably needs hardware repair.

## BIOS recovery

:::info
There are two different BIOS versions. Refer to the screenshots below to identify the correct version and choose the appropriate settings.
:::

1. Power up the gateway and enter the BIOS. Press **F11** multiple times right after plugging the power connector or pressing the power button. The following menu appears:

![BIOS entry menu](/img/restricted/troubleshooting/BIOS_enter.jpg)

2. Select **Enter setup** and press Enter.

3. Go to the **Boot** menu and apply the following settings:

| New BIOS | Old BIOS |
|---|---|
| ![New BIOS boot settings](/img/restricted/troubleshooting/BIOS_new_boot1.png) | ![Old BIOS boot settings](/img/restricted/troubleshooting/BIOS_old_boot1.png) ![Old BIOS boot settings continued](/img/restricted/troubleshooting/BIOS_old_boot2.png) |
| OS Selection: **Windows 8.x.** | Boot OS Selection: **UEFI Win7** |
| Boot Option #1: **P1 Hoodisk SSD** | Boot Option #1: **Hard Disk** |

4. Go to the **Advanced** menu and apply the following settings:

| Advanced |
|---|
| ![BIOS advanced settings](/img/restricted/troubleshooting/BIOS_new_advanced.png) |
| Restore AC Power Loss: **LAST STATE** |

5. Save and exit by pressing **F10**.
6. Disconnect the VGA display and keyboard. Unplug the 12 V power, wait 5 seconds, and plug it back in. The gateway should boot, and its configuration page should be accessible after approximately one minute.
7. Replace the front panel.
