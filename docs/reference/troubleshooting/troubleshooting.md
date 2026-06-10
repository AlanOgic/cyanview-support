---
id: troubleshooting
title: "Troubleshooting guide"
sidebar_label: "Troubleshooting"
description: "Troubleshoot common Cyanview issues. Diagnose connection problems, camera discovery failures, and control errors."
keywords: [troubleshooting, diagnosis, connection, camera, errors]
slug: /reference/troubleshooting/troubleshooting
---

Use this guide to diagnose and resolve common issues with Cyanview devices. Work through each section from top to bottom — most problems are resolved with power, network, or firmware checks.

## Device does not start

If the device screen stays blank, follow these steps in order:

1. **Check the network port LEDs** — verify you see green and yellow activity.

2. **If no LED activity, switch the power source:**
   - If powered via **PoE**, try connecting an external **power supply**.
   - If powered via **power supply**, try connecting a **PoE** network cable.

3. **If switching power does not help**, contact **support@cyanview.com** or return the device via the [RMA procedure](/docs/reference/rma-procedure).

4. **If the network port shows activity but the screen stays off**, check your network configuration and verify the device is reachable:
   - **RCP, GWY** — try accessing the configuration page (see [IP configuration](/docs/guides/networking/ip-configuration)).
   - **CI0, RIO, NIO** — check whether the device appears on the RCP discovery page.

5. **If the device is not accessible**, try a firmware recovery:

| Device | Recovery scope | Procedure |
|:-------|:---------------|:----------|
| CI0 | Whole device | [Force a firmware update](/docs/reference/manuals/ci0/ci0-manual#force-a-firmware-update) |
| RIO | Port management | Same procedure as CI0 — see [Force a firmware update](/docs/reference/manuals/ci0/ci0-manual#force-a-firmware-update) |
| GWY | N/A | N/A |
| NIO | N/A | N/A |

6. **If none of the above resolves the issue**, contact **support@cyanview.com** or return the device via the [RMA procedure](/docs/reference/rma-procedure).

## Network issues

If devices cannot reach each other or connect to controlled equipment, review the [IP configuration guide](/docs/guides/networking/ip-configuration).

For Cisco or Netgear networks, check the specific sections below.

### Cisco Portfast

:::warning
Cisco **Portfast** is mandatory for Cyanview devices. Without it, devices may fail to communicate after a switch port comes up.
:::

Enable Portfast on all switch ports connected to Cyanview devices. See the [Cisco Portfast configuration guide](https://www.grandmetric.com/knowledge-base/design_and_configure/how-to-configure-spanning-tree-portfast-cisco-ios/) for instructions.

### Netgear router ARP conflict

Netgear 4G modems (such as the Nighthawk MR1100) can respond to ARP requests intended for other devices on the network. This causes erratic behavior — devices connect and disconnect randomly, blocks stay red, or connections drop.

**Symptoms:**
- Communication works intermittently
- Devices alternate between connected and disconnected
- Camera blocks flash between green and red

**Diagnosis:**

1. Access the RCP Configuration Web UI several times using **private/incognito browsing** (to avoid cache).
2. On Unix systems, run an ARP ping to your device — if you see multiple MAC addresses responding to the same IP, one belongs to the Netgear modem.

**Solution:**

1. Use the Netgear modem only for internet access — remove it from the production network. This is the only solution: Proxy ARP cannot be disabled on Nighthawk routers that use a basic configuration interface.
2. After removing the router, reboot network devices to clear stale ARP tables.

## CI0 status 'X'

The CI0 cannot communicate with the RCP over the network. Work through these checks:

1. Verify network connectivity — check the green and yellow LEDs on the Ethernet port.
2. Check whether the CI0 appears on the RCP [discovery page](/docs/reference/faq#what-is-device-discovery).
3. Perform a firmware recovery — see [Force a firmware update](/docs/reference/manuals/ci0/ci0-manual#force-a-firmware-update).
4. On Unix systems, run an ARP ping to the device to verify it responds.
5. Rule out known issues with [Cisco](#cisco-portfast) and [Netgear](#netgear-router-arp-conflict) networks.
