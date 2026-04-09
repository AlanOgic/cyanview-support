---
id: rcp-network
title: RCP stuck on startup screen
description: "Fix for RCPs stuck on the startup screen (serial numbers CY-RCP-25-1 to CY-RCP-25-250)."
keywords: [rcp, startup screen, stuck, resistor, r33, network]
slug: /restricted/troubleshooting/rcp-network
---

# RCP stuck on startup screen

## Abstract

Some RCPs with serial numbers from CY-RCP-25-1 to CY-RCP-25-250 can get stuck on the startup screen.

Symptoms:

- The startup screen ("Configuration accessible at...") is always displayed.
- The configuration page is accessible.

This page explains how to recover an affected RCP. The fix requires removing a resistor. You need a soldering iron, screwdrivers, and pliers.

## How to open an RCP

Remove the 10 screws on the side and the nut on the 12 V power connector.

![Power connector](/img/restricted/troubleshooting/RCP_open_power_conn.jpg)

Carefully pull the case from the bottom side and slide it to remove it.

![Opening the RCP — step 1](/img/restricted/troubleshooting/RCP_open1.jpg)

![Opening the RCP — step 2](/img/restricted/troubleshooting/RCP_open2.jpg)

## RCP modification

On the top PCB, locate **R33** and carefully remove it.

![R33 location](/img/restricted/troubleshooting/RCP_R33.jpg)

Once R33 is removed, connect the RCP to a PoE switch or a 12 V power supply to test it.

Wait at least two minutes for the normal screen to appear.

If removing R33 does not fix the RCP, it must be sent for repair. Follow the [RMA procedure](/docs/reference/rma-procedure). Before sending it, ensure the RCP is correctly closed with all 10 screws and the power plug nut.
