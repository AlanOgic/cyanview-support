---
id: rcp-hardware-issues
title: RCP known hardware issues
description: "Two known hardware issues on early RCPs (CY-RCP-25-1 to CY-RCP-25-250) and how to fix them."
keywords: [rcp, hardware, power supply, startup screen, resistor, r73, r33]
slug: /restricted/troubleshooting/rcp-hardware-issues
---

# RCP known hardware issues

## Abstract

Two known hardware issues affect RCPs with serial numbers from CY-RCP-25-1 to CY-RCP-25-250.

This page explains how to recover an affected RCP. Both fixes require removing a resistor. You need a soldering iron, screwdrivers, and pliers.

### Problem 1 — Power supply issues (RCP does not boot)

Symptoms:

- LCD stays off.
- No button LEDs lit.
- No LED activity on the LAN connector when a cable is connected.

### Problem 2 — RCP stuck on the startup screen

Symptoms:

- The startup screen ("Configuration accessible at...") is always displayed, even after several minutes.
- The configuration page is accessible.

## How to open an RCP

Remove the 10 screws on the side and the nut on the 12 V power connector.

![Power connector](/img/restricted/troubleshooting/RCP_open_power_conn.jpg)

Carefully pull the case from the bottom side and slide it to remove it.

![Opening the RCP — step 1](/img/restricted/troubleshooting/RCP_open1.jpg)

![Opening the RCP — step 2](/img/restricted/troubleshooting/RCP_open2.jpg)

## Problem 1 — Power supply fix

On the top PCB, locate **R73** and carefully remove it.

![R73 location](/img/restricted/troubleshooting/RCP_R73.jpg)

Once R73 is removed, connect the RCP to a PoE switch or a 12 V power supply to test it.

If the LCD turns on and the button LEDs light up, the RCP is fixed. Close the RCP carefully.

If removing R73 does not fix the RCP, it must be sent for repair. Follow the [RMA procedure](/docs/reference/rma-procedure). Before sending it, ensure the RCP is correctly closed with all 10 screws and the power plug nut.

## Problem 2 — Startup screen fix

On the top PCB, locate **R33** and carefully remove it.

![R33 location](/img/restricted/troubleshooting/RCP_R33.jpg)

Once R33 is removed, connect the RCP to a PoE switch or a 12 V power supply to test it.

Wait at least two minutes for the normal screen to appear.

If removing R33 does not fix the RCP, it must be sent for repair. Follow the [RMA procedure](/docs/reference/rma-procedure). Before sending it, ensure the RCP is correctly closed with all 10 screws and the power plug nut.
