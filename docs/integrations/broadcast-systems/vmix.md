---
id: vmix
title: "vMix integration"
sidebar_label: "vMix"
description: "Connect vMix software production with Cyanview for tally feedback and camera switching coordination."
keywords: [vMix, software production, tally, switching]
slug: /integrations/broadcast-systems/vmix
---

![vMix logo](/img/Integrations/VMIX/vmix-logo.png)

Integrate your RCP with vMix to get tally input, aux switching output for RCP sync, and color correction control — all from a single connection.

## Wiring

![vMix wiring diagram showing RCP and vMix computer on the same network](/img/Integrations/VMIX/vmix-wiring.png)

Connect the RCP and the vMix computer to the same network.

## Setup

Before configuring vMix, ensure your RCP's IP address is reachable from the vMix computer. See the [IP configuration guide](/docs/guides/networking/ip-configuration#lan-configuration) if you need to change it.

### Router

![vMix router setup panel](/img/Integrations/VMIX/vmix-router-setup.png)

1. Enter a name for the router (optional).
2. Enter the IP address of your vMix computer. Confirm the RCP can reach it — see the [IP guide](/docs/guides/networking/ip-configuration#lan-configuration) if needed.
3. Link each camera to its matching vMix input.
4. Link your RCP to an auxiliary output.

Your RCP is now configured to follow vMix routing.

![vMix router block diagram](/img/Integrations/VMIX/vmix-router-block.png)

When you switch the active camera on the RCP, the selected aux output updates to match.

### Tally input

First complete the router setup above, then configure tally as follows.

In the `Tally` section of the `vMix router`, set:

- **AUTO** in `Red Tally Sources`
- **AUTO** in `Green Tally Sources`

![vMix tally setup panel](/img/Integrations/VMIX/vmix-tally-setup.png)

This gives you a **green tally** for `preview` and a **red tally** for `live`.

For custom tally routing, replace `AUTO` with any vMix output name: `Output`, `Preview`, `1`, `2`, etc.

:::tip
Need more tally outputs? See the [tally configuration page](/docs/guides/tally/tally).
:::

### Color correction

![vMix CCU setup panel](/img/Integrations/VMIX/vmix-ccu-setup.png)

Enter a name (optional) and the IP address of your vMix computer. Your RCP now has control over vMix color correction.

![vMix CCU block in the RCP interface](/img/Integrations/VMIX/vmix-ccu-block.png)

Click an existing camera to assign a vMix channel to it:

![Camera CCU before assignment — no video processor selected](/img/Integrations/VMIX/vmix-cam-ccu-before.png)

When no video processor is selected, the RCP does not control any camera through vMix — it only has color correction access. You can combine camera head control with vMix color correction on the same camera slot.

In the right menu, scroll to `Video Processor` and select a vMix channel:

![Camera CCU setup — selecting a vMix channel](/img/Integrations/VMIX/vmix-cam-ccu-setup.png)

RCP `cam 1` now controls vMix channel 1.

![Camera CCU after assignment — vMix channel 1 active](/img/Integrations/VMIX/vmix-cam-ccu-after.png)
