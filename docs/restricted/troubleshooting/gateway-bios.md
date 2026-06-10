---
id: gateway-bios
title: CY-GWY maintenance
description: "Maintain and repair the CY-GWY gateway: disassembly, BIOS recovery, VGA monitor-detection patch, and battery replacement."
keywords: [gateway, gwy, maintenance, bios, recovery, boot, vga, battery, repair]
slug: /restricted/troubleshooting/gateway-bios
---

# CY-GWY maintenance

## Before attempting a repair

:::danger Warranty
If your product is still under warranty, return it to Cyanview for service. We take responsibility for the repair when the issue falls under the warranty conditions. Even if the warranty has recently expired, we usually still accept the product as a warranty return when the issue is clearly related to a warranty-covered defect.
:::

We want to help you maintain and repair your equipment when you can do so safely and correctly. This page provides the procedures, replacement part references, and technical details to support that.

At the same time, repairing electronic equipment requires suitable tools, technical experience, patience, and careful handling. A repair that looks simple can become more difficult if you open or handle the product without proper care. If you repair the product yourself, make sure you understand the procedure and accept responsibility for the work.

Our products contain small mechanical parts, delicate connectors, and densely populated electronic boards. The screws are small and easy to overtighten, tools or rough handling can damage PCB components, and incorrect power connections can cause serious damage. Damage caused during a repair attempt can make a later repair by Cyanview more complex and expensive, and in some cases may make the product impossible to repair.

If you are not confident that you have the required skills or tools, send the product to Cyanview for repair instead of attempting it yourself.

## Disassembly

Remove the 7 screws holding the cover.

When reassembling the GWY, tighten the screws gently — overtightening easily damages the threads.

![GWY disassembly](/img/restricted/troubleshooting/gwy-maintenance-disassembly.jpg)

![GWY front panel and VGA connector](/img/restricted/troubleshooting/gwy-maintenance-vga.jpg)

When removing the front panel, take care not to lose the small power button. If needed, use a small piece of tape to keep it in place.

## BIOS recovery procedure

### Confirm the BIOS issue

Some older GWY units can stop booting correctly if the BIOS settings are lost or changed. In that case, the GWY may still power on, but it does not start the GWY system and the configuration webpage is not available.

This recovery procedure only applies to GWY units with the older BIOS version. Before changing any BIOS setting, first check whether the GWY still boots correctly:

1. Remove the front panel to access the VGA connector.
2. Connect a VGA display and a USB keyboard.
3. Boot the GWY by pressing the small switch on the front right. If it does not start and no LEDs turn on, the GWY probably needs hardware repair.
4. Watch the VGA display during startup. If you see the boot messages followed by the login prompt, the GWY system has started correctly.
5. When the login prompt is displayed, check that you can access the configuration webpage and that it runs normally.
6. If the GWY powers on but does not reach the login prompt, or you cannot access the configuration webpage, apply the BIOS recovery steps below.

### Restore the BIOS settings

:::info
There are two different BIOS versions. Refer to the screenshots below to identify the correct version and choose the appropriate settings.
:::

1. Power up the GWY and enter the BIOS. Press **F11** multiple times right after plugging the power connector or pressing the power button. The following menu appears:

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
6. Disconnect the VGA display and keyboard. Unplug the 12 V power, wait 5 seconds, and plug it back in. The GWY should boot, and its configuration page should be accessible after approximately one minute.
7. Replace the front panel.

### VGA monitor-detection patch

This patch adds a resistor to make the VGA monitor detection permanent, so the GWY boots even without a monitor attached. Without the patch, a GWY using the old BIOS fails to boot if the BIOS settings are reset again and no monitor is connected. The patch is not required with the new BIOS version.

If the BIOS has been reset, the automatic power-on setting may still be lost. In that case, you may need to press the power button each time to start the GWY, but the unit should still boot.

Add a 180 Ω 0603 SMD resistor to the solder pins of the VGA connector, as shown below:

![VGA monitor-detection resistor](/img/restricted/troubleshooting/gwy-maintenance-vga-res.jpg)

## Replacing the battery

The GWY uses a CR2032 battery to hold the BIOS settings, so replacing a dead battery is critical.

Measure the battery voltage with a multimeter. A new CR2032 battery usually measures approximately 3.1 to 3.3 V with no load. If the measured voltage is below 3.0 V, replace the battery.

![CR2032 battery location](/img/restricted/troubleshooting/gwy-maintenance-battery.jpg)
