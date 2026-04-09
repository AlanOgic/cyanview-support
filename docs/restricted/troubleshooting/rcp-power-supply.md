---
id: rcp-power-supply
title: RCP power supply issues
description: "Fix for RCPs that do not boot due to a power supply issue (serial numbers CY-RCP-25-1 to CY-RCP-25-250)."
keywords: [rcp, power supply, boot, resistor, r73]
slug: /restricted/troubleshooting/rcp-power-supply
---

# RCP power supply issues

## Abstract

Some RCPs with serial numbers from CY-RCP-25-1 to CY-RCP-25-250 can have power supply issues.

Symptoms:

- LCD stays off.
- No button LEDs lit.
- No LED activity on the LAN connector when a cable is connected.

This page explains how to recover an affected RCP. The fix requires removing a resistor. You need a soldering iron, screwdrivers, and pliers.

## How to open an RCP

Remove the 10 screws on the side and the nut on the 12 V power connector.

![Power connector](/img/restricted/troubleshooting/RCP_open_power_conn.jpg)

Carefully pull the case from the bottom side and slide it to remove it.

![Opening the RCP — step 1](/img/restricted/troubleshooting/RCP_open1.jpg)

![Opening the RCP — step 2](/img/restricted/troubleshooting/RCP_open2.jpg)

## RCP modification

On the top PCB, locate **R73** and carefully remove it.

![R73 location](/img/restricted/troubleshooting/RCP_R73.jpg)

Once R73 is removed, connect the RCP to a PoE switch or a 12 V power supply to test it.

If the LCD turns on and the button LEDs light up, the RCP is fixed. Close the RCP carefully.

If removing R73 does not fix the RCP, it must be sent for repair. Follow the [RMA procedure](/docs/reference/rma-procedure). Before sending it, ensure the RCP is correctly closed with all 10 screws and the power plug nut.
