---
id: troubleshooting
title: "Troubleshooting guide"
sidebar_label: "Troubleshooting"
description: "Troubleshoot common Cyanview issues. Diagnose connection problems, camera discovery failures, and control errors."
keywords: [troubleshooting, diagnosis, connection, camera, errors]
slug: /reference/troubleshooting/troubleshooting
---

## Device does not start

> If device's screen does not display information, please follow procedure below:

- Verify activity on network port (green yellow led).

- If no activity on network port, verify power supply.

  - If device is powered via **PoE**, try to connect a **Power Supply**.
  - If device is powered via **Power Supply**, try to connect a **PoE** network cable.

- If no activity on network port after switching power source, please contact <a href="mailto:support@cyanview.com">support@cyanview.com</a> or send the device back to Cyanview via the [RMA procedure](/docs/reference/rma-procedure).

- If there is activity on network port and the device's screen does not turn on, check your network configuration <!--link to P manual when available-->, then verify the device is available on the network.

  - **RCP, GWY**: Try to access configuration page (see Network IP).
  - **CI0, RIO, NIO**: Verify if listed in RCP discovery page.

 If the device is not accessible/listed, try to recover firmware according the table below.

 | Device        | Recovery          | Procedure     |
 | ------------- | ----------------- | ------------- |
 | CI0           | Whole Device.     | See [Force a firmware update](/docs/reference/manuals/ci0/ci0-manual#force-a-firmware-update) procedure in CI0 manual.           |
 | RIO           | Port management.  | Same principle as CI0, See [Force a firmware update](/docs/reference/manuals/ci0/ci0-manual#force-a-firmware-update) procedure in CI0 manual. |
 | GWY           | na                | na |
 | NIO           | na                | na |

- If your issue is not fixed, contact <a href="mailto:support@cyanview.com">support@cyanview.com</a> or send the device back to Cyanview via the [RMA procedure](/docs/reference/rma-procedure).

## Network Issue

If devices are not accessible on the network or have issues connecting to each other or to other controlled devices, please refer to the IP Configuration guide. <!--add link whe guide available-->

For users of Cisco or Netgear devices, please check the sections below:

### Cisco Portfast

The **Cisco Portfast** feature is mandatory for Cyanview devices communication.

Configuration is available [Here](https://www.grandmetric.com/knowledge-base/design_and_configure/how-to-configure-spanning-tree-portfast-cisco-ios/#:~:text=Portfast%20feature%20causes%20a%20switch,the%20listening%20and%20learning%20states).

### Netgear Router

In configuration using netgear 4G modems like [this one](https://www.amazon.fr/MR1100-100EUS-Nighthawk-maximales-t%C3%A9l%C3%A9chargement-Chargement/dp/B079H2LX8X/ref=sr_1_3?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=netgear+nighthawk&qid=1615449073&sr=8-3), the modem tends to reply to ARP request intended to devices. 

The communication between Cyanview devices, Camera, and other is not working or working erratically. ie: not connecting, disconnecting, red status, ...

This is caused by Netgear modem answering in place of the devices.

Issue is "random" depending on the Netgear answering before the device or not.

**Diagnosis**

 - Try to access the *Configuration Web UI* of your RCP several times in *private navigation*"* to avoid cache.
 - For Unix users, perform an ARP ping of your device, you will see multiple devices answering to the same IP with multiple MAC, one of them is the your device, the other one is the Netgear router.

**Solution**

 - Use Netgear modem only to get access to internet.
    - Remove it from your network.
    - Reboot all network devices to ensure all ARP tables are "cleared".
 - Swap the router with one from another brand.

## CI0 status 'X'

CI0 can't communicate with RCP over the network.

- Verify network connectivity: check activity on the green and yellow LED of ethernet port.
- Check if CI0 is listed in discovery page of your RCP. See [What is discovery](/docs/reference/faq#what-is-discovery).
- Perform a Firmware recovery. See [Force a firmware Update](/docs/reference/manuals/ci0/ci0-manual#force-a-firmware-update)).
- For unix users, perform an ARP ping to your device.
- Check known limitation of [Cisco](#cisco-portfast) and [Netgear](#netgear-router) devices.
