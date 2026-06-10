---
id: which-product
title: "Which product do I need?"
sidebar_label: "Which product do I need?"
description: "Find the right Cyanview product for your production. Answer a few questions about your cameras, network, and workflow to get a tailored recommendation."
keywords: [buying guide, product selection, RCP, RIO, CI0, VP4, comparison, pre-sales, which product]
slug: /products/which-product
---

<!--
OSP codes applied:
LEDE: Benefit-focused opening — start with the user's problem
FRONT: Decision framework upfront
WHOM: System integrators, rental houses, broadcast engineers evaluating Cyanview
WIIFM: Clear "you get X" for each recommendation
ACTIV: Active voice throughout
SPFIC: Specific scenarios, not vague claims
EXMPL: Concrete production examples per path
LIST: Scannable tables and decision trees
HEAD: Action-oriented headings in sentence case
CTA: Clear next steps per recommendation
TERM: Technical terms defined on first use
AMBIG: CI0 vs RIO differences made explicit
TRUST: Honest limitations stated alongside strengths
-->

# Which product do I need?

Every Cyanview system starts with an **RCP** (Remote Control Panel) — it is the brain that controls your cameras. From there, you add hardware gateways based on how your cameras connect and where your production happens.

Answer the questions below to find your setup.

## Start here: how do your cameras connect?

### IP cameras (Ethernet, NDI, SRT)

Your cameras connect directly to the network. The RCP controls them over IP — no gateway hardware needed.

**You need:**
- 1 x RCP (choose [license tier](/docs/guides/licensing) based on camera count)

**Examples:** Panasonic PTZ (AW-UE series), Sony FR7, Canon CR-N series, Canon C*XX* cine cameras (C70, C80, C90 — over Ethernet), any VISCA-over-IP camera.

[Set up your IP cameras &rarr;](/docs/integrations/generic/ip-camera)

---

### Serial cameras (Sony 8-pin, LANC, RS-422)

Your cameras use serial protocols. You need a gateway to convert serial commands to IP.

**Choose between CI0 and RIO:**

| Question | CI0 | RIO |
|:---------|:---:|:---:|
| Budget is the priority? | **Yes** | Higher cost |
| Network is stable and local? | **Yes** | Works too |
| Need lens motor control? | Yes (serial ports) | **Yes** (keeps control if network drops) |
| Need USB camera support? | No | **Yes** |
| Network may drop during production? | Loses control | **Keeps controlling** |
| Need REMI (remote production)? | No | **Yes** (with +WAN) |

**Stable local network, budget matters:**
- 1 x RCP + 1 x [CI0](/docs/products/ci0) per camera

**Mission-critical or lens control:**
- 1 x RCP + 1 x [RIO](/docs/products/rio) per camera

[Compare CI0 and RIO in detail &rarr;](/docs/products/ci0#when-to-use-the-ci0)

---

### Blackmagic cameras

Blackmagic cameras support two control paths — choose based on your model and setup:

**IP control (recommended for newer cameras)**

Newer models (URSA G2, Studio Camera G2, Cinema Camera 6K) support IP camera control over Ethernet. This is the simplest path — no gateway hardware needed (a RIO is optional for autonomous control and lens support).

- 1 x RCP + direct Ethernet connection, or
- 1 x RCP + 1 x RIO per camera (for autonomous control and lens support)

**SDI control via ATEM switcher**

If you already use a Blackmagic ATEM switcher, the ATEM injects camera control commands into the SDI return feed. This is the most common approach for SDI-connected Blackmagic cameras — no dedicated control hardware needed beyond what you already own.

- 1 x RCP + ATEM switcher (controls paint via SDI return)

**SDI control via RSBM board**

For SDI setups without an ATEM, the [RSBM](/docs/products/rsbm) board injects control signals directly into the SDI stream. This is a dedicated solution when no switcher is available.

- 1 x RCP + 1 x CI0BM per camera (CI0 with integrated RSBM), or
- 1 x RCP + 1 x RIO + 1 x RSBM per camera

:::tip Check your camera's IP support
Blackmagic regularly adds IP control to existing models through firmware updates. Before investing in SDI control hardware, check the [Blackmagic integration guide](/docs/integrations/cameras/blackmagic/blackmagic-camera-control) for your camera's current capabilities.
:::

[Blackmagic setup guide &rarr;](/docs/integrations/cameras/blackmagic/blackmagic-camera-control)

---

### USB cameras (Sony Alpha, Canon R5)

USB-controlled cameras plug directly into the RCP's USB ports when local. Add one RIO per camera when the camera is away from the RCP (gimbal, remote position, REMI). The CI0 has no USB port.

**You need:**
- 1 x RCP (camera connects directly via USB when next to the panel)
- 1 x [RIO](/docs/products/rio) per camera that is remote from the RCP

[Sony Alpha guide &rarr;](/docs/integrations/cameras/sony/sony-alpha) | [Canon mirrorless guide &rarr;](/docs/integrations/cameras/canon/canon-mirrorless)

---

### Camcorders needing video processing

Cameras without built-in paint control need external video processing for color correction.

**You need:**
- 1 x RCP + 1 x [VP4](/docs/products/vp4) (handles 4 cameras)

[VP4 setup guide &rarr;](/docs/reference/manuals/vp4-manual)

---

## Do I need tally?

If your production uses a video switcher and you want on-camera tally lights, add a [NIO](/docs/products/nio). The NIO provides 16 GPIO channels for tally signals over Ethernet, WiFi, or 4G.

**You need a NIO when:**
- You want wireless tally (no dedicated tally cables)
- Your switcher sends tally via GPIO, TSL, or a direct integration (ATEM, vMix, Tricaster) and you need GPIO outputs to the cameras
- You are running a REMI setup with remote tally

[Tally configuration guide &rarr;](/docs/guides/tally/tally)

---

## Local or remote production?

| Production type | What you need |
|:----------------|:--------------|
| **Local (same building)** | RCP + CI0 or RIO on the same LAN |
| **Local, 1-2 cameras** | RCP + RIO +LAN |
| **Remote (REMI)** | RCP + RIO +WAN at the camera site, connected via Cyanview cloud |
| **Multi-site remote** | RCP + one RIO +WAN per site |

:::info Cloud access is free
The Cyanview cloud acts as a rendezvous point between your RCP and remote RIO +WAN units. It is included with RIO +WAN and RCP licenses at no additional cost — no subscription, no data caps.
:::

[REMI configuration guide &rarr;](/docs/guides/networking/remi)

---

## Quick recommendation table

| Scenario | RCP | CI0 | RIO | RIO license | VP4 | NIO | Notes |
|:---------|:---:|:---:|:---:|:-----------:|:---:|:---:|:------|
| 2 PTZ cameras, local studio | DUO | — | — | — | — | Optional | Direct IP control |
| 4 Sony serial cameras, OB van | QUATTRO | 4 | — | — | — | Optional | CI0 for serial-to-IP |
| 8 cameras, REMI production | OCTO | — | 8 | +WAN | — | Recommended | Cloud-connected |
| 2 Blackmagic URSA G2, local | DUO | — | 2 | +LAN | — | Optional | IP control over Ethernet |
| 4 Blackmagic cameras + ATEM | QUATTRO | — | — | — | — | Optional | ATEM handles SDI control |
| 1 Sony Alpha on gimbal, remote | DUO | — | 1 | +WAN | — | — | USB via RIO |
| 4 camcorders, color correction | QUATTRO | — | — | — | 1 | Optional | VP4 for video processing |
| 128 cameras, large broadcast | MSU | Mix | Mix | +WAN | Optional | Recommended | Scale to any size |

---

## Next steps

- [Compare RCP license tiers &rarr;](/docs/guides/licensing#step-2-choose-rcp-license-tier)
- [Browse camera integrations &rarr;](/docs/integrations)
- [Get started with your first setup &rarr;](/docs/getting-started/quickstart)
- Contact **sales@cyanview.com** for a tailored quote
