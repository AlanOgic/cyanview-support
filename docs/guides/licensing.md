---
id: licensing
title: "Licensing guide"
sidebar_label: "Licensing"
description: "Understand Cyanview product licensing. RCP license tiers, RIO +WAN and +LAN differences, and how to manage licenses."
keywords: [licensing, RCP, RIO, DUO, QUATTRO, OCTO, MSU]
slug: /guides/licensing
---

<!--
OSP REVIEW - Applied codes:
LEDE: Benefit-focused opening
FRONT: User problem/solution structure
WHOM: Target audience (system integrators, rental houses, broadcast engineers)
WIIFM: Clear value proposition for each license tier
ACTIV: Active voice throughout
AMBIG: Clarified LAN/WAN terminology
TERM: Defined technical concepts on first use
ACRO: Acronyms defined on first use
HEAD: Action-oriented headings
LIST: Scannable tables and lists
CTA: Clear next steps
-->

# Licensing guide

Choose the right license for your workflow—start with what you need today and upgrade as your production grows. All licenses are one-time purchases with no subscriptions.

## Overview

Cyanview licensing covers three device types:

- **RCP** (Remote Control Panel): Choose hardware variant (RCP or RCP-J), then license tier (DUO, QUATTRO, OCTO, MSU)
- **RIO** (Remote I/O): License tiers based on connectivity (+LAN or +WAN)
- **CI0** (Camera Interface): No license required

---

## Step 1: Choose RCP or RCP-J

Both variants are available with all license tiers. The difference is hardware:

| Feature | RCP | RCP-J |
|:--------|:---:|:-----:|
| Touchscreen + rotary knobs | ✔ | ✔ |
| Scene file menu access | ✔ | ✔ |
| **Quick scene buttons (1–5)** | — | ✔ |
| **Integrated iris joystick** | — | ✔ |

### RCP

The standard RCP provides full camera control via touchscreen and rotary knobs. Access scene files through the menu system.

**Choose RCP when:** Scene files are configured once and rarely changed during production.

### RCP-J

The RCP-J adds **five quick-access scene buttons** and an **integrated iris joystick**:

- **Buttons 1–5** instantly load scene files without menu navigation
- Buttons are **camera-locked**—each button loads the scene for the currently selected camera
- **Joystick** provides tactile iris control

**Choose RCP-J when:** You need instant access to pre-configured looks during live production.

---

## Step 2: Choose RCP license tier

License tiers determine how many cameras you can control simultaneously from a single RCP.

| License | Cameras |
|:--------|:-------:|
| **DUO** | 2 |
| **QUATTRO** | 4 |
| **OCTO** | 8 |
| **MSU** | Unlimited |

**DUO note:** Choose DUO for workflows where each camera has its own dedicated RCP.

All tiers include:
- Full LAN and WAN connectivity
- Cloud access for remote production (free, no subscription)
- All shading and control features
- Scene file management

### Upgrading your RCP license

You can upgrade to a higher tier at any time. Upgrades are applied via license file—no hardware changes required.

Contact [Cyanview support](mailto:support@cyanview.com) for upgrade options.

---

## RIO licenses

The RIO (Remote I/O) brings camera control to remote locations. RIO licensing determines connectivity—all tiers support **unlimited cameras**.

| License | Cameras | LAN | WAN/Cloud |
|:--------|:-------:|:---:|:---------:|
| **+LAN** | Unlimited | ✔ | — |
| **+WAN** | Unlimited | ✔ | ✔ |

### RIO +LAN

Control cameras on **local networks only**.

**Includes:**
- Unlimited camera control
- Full protocol support for all connected cameras
- Standalone operation—continues controlling cameras even if RCP connection drops
- Local web UI access for configuration

**Limitations:**
- No cloud connectivity
- Cannot participate in REMI (remote production) workflows
- RCP must be on the same local network

### RIO +WAN

Control cameras **locally and remotely** via cloud.

**Includes everything in +LAN, plus:**
- Cloud connectivity for remote production
- REMI support—connect RCP and RIO over the internet
- Remote web UI access from anywhere
- Works over cellular (4G/5G), bonded connections, and public internet

**Cloud access is:**
- **Included** with the +WAN license
- **Unlimited** usage (no data caps or time limits)
- **Free** of ongoing charges (no subscription)

:::info How cloud connectivity works
The Cyanview cloud acts as a rendezvous server—both RCP and RIO make outgoing connections, so no firewall configuration is required. Devices find each other using shared REMI tags.

See the [REMI configuration guide](/docs/guides/networking/remi) for setup instructions.
:::

### Upgrading from +LAN to +WAN

You can upgrade a RIO +LAN license to +WAN at any time:
1. Purchase the +WAN upgrade license
2. Apply the license through the RIO web interface
3. Configure REMI tags to enable cloud connectivity

The upgrade is a one-time purchase—no hardware changes required.

---

## CI0 (no license required)

The CI0 (Camera Interface) is a serial-to-IP converter that connects cameras to the network. It operates as a **slave device** controlled by an RCP or RIO.

**Key points:**
- **No separate license**—included with hardware purchase
- **LAN only**—requires network connection to RCP or RIO
- **No standalone operation**—stops controlling cameras if connection to RCP/RIO drops

:::note CI0 vs RIO for remote deployments
If you need reliable camera control in locations with unstable network connections, use a RIO instead of CI0. The RIO maintains local control even when the network link fails; the CI0 cannot.
:::

---

## License management

### Viewing current license

Check your device's current license in the web interface:
1. Open the device's web UI
2. Navigate to **System** or **About**
3. View the license tier and camera limit

### Applying a new license

To apply a purchased license:
1. Obtain the license file from Cyanview
2. Open the device's web UI
3. Navigate to **System > License**
4. Upload the license file
5. Restart the device if prompted

Contact [Cyanview support](mailto:support@cyanview.com) for license purchases or upgrade questions.

---

## Summary

| Question | Answer |
|:---------|:-------|
| **Do I need a subscription?** | No. All licenses are one-time purchases. |
| **Is cloud access included?** | Yes, with RCP and RIO +WAN licenses. Free and unlimited. |
| **Can I upgrade later?** | Yes. RCP can upgrade to higher camera tiers. RIO +LAN can upgrade to +WAN. |
| **What about CI0?** | No license needed—included with the hardware. |
| **Can multiple RCPs share cameras?** | Yes. Multiple RCPs can operate on the same system. |
