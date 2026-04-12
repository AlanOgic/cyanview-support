---
id: system-examples
title: "System examples"
sidebar_label: "System examples"
description: "Real-world Cyanview system configurations for broadcast, cinema, and remote production. See what equipment you need for common multi-camera scenarios."
keywords: [system examples, use cases, broadcast, cinema, REMI, multi-camera, pre-sales, configuration]
slug: /products/system-examples
---

import EmbedPlayer from '@site/src/components/EmbedPlayer';

<!--
OSP codes applied:
LEDE: Start with what the reader gains - concrete setups they can quote or replicate
FRONT: Each scenario states the production type and challenge before the solution
WHOM: System integrators, rental houses, broadcast engineers evaluating Cyanview
WIIFM: "What you need" box per scenario - directly quotable for proposals
SPFIC: Real deployments with specific camera counts, lens models, transport types
EXMPL: Each scenario grounded in a documented production
ACTIV: Active voice throughout
HEAD: Scenario names describe the production, not the product
LIST: Equipment lists and comparison tables for scanning
CTA: Links to detailed workflow guides per scenario
TRUST: Based on documented deployments, not hypothetical setups
FACT: Camera counts, latency numbers, and transport details from real productions
-->

# System examples

Each example below is based on a documented deployment. Use them as starting points for your own system design - adjust camera counts, transport, and accessories to match your production.

:::tip Not sure where to start?
Use the [product selector](/docs/products/which-product) to find the right hardware for your cameras, then come back here to see how it fits into a complete system.
:::

---

## Olympic figure skating - wireless on-ice camera

**Scenario:** A camera operator skates backwards on the ice during Olympic figure skating, following the athletes with a custom camera rig. A RIO +WAN with a 4G USB dongle rides on the rig. Blackmagic zoom and focus demands (BM handles) connect to the RIO via USB, giving the operator direct lens control at hand while the vision engineer in the control room shades the picture remotely - all over 4G, fully wireless.

<EmbedPlayer
  src="https://nbcnewyork.com/portableplayer/?CID=1:2:6465497&videoID=2488229443819&origin=nbcnewyork.com&fullWidth=y"
  credit="Video courtesy of NBC New York - &quot;The skating camera guy at the Olympics gets emotional too&quot;"
  creditUrl="https://www.nbcnewyork.com/video/news/sports/olympic-figure-skating-cameraman-2/6465497/"
/>

**Challenges:**
- Operator is skating on the ice - zero cabling possible, fully wireless mandatory
- High-contrast lighting shifts between spotlights and arena floods during performances
- Vision engineer must shade in real time from the control room while the operator focuses on framing and skating
- Operator needs instant local adjustments (iris, gain) without waiting for the control room

### Equipment list

| Component | Quantity | Role |
|:----------|:--------:|:-----|
| RIO +WAN | 1 | Camera control on the rig, 4G gateway |
| [BM handles](/docs/integrations/cameras/blackmagic/bm-handles) | 1 set | Zoom and focus demands - operator lens control via USB on the RIO |
| 4G USB dongle | 1 | Wireless link from RIO to Cyanview cloud |
| RCP | 1 | Remote shading panel in the control room |

### How it connects

```
On the ice (camera rig):
  Camera → RIO +WAN (serial) → 4G dongle → Cyanview cloud
  BM handles (USB) → RIO → zoom + focus control

Control room:
  Cyanview cloud → RCP (shading + paint)

Dual control:
  Operator on ice: zoom & focus via BM handles on the RIO
  Vision engineer: iris, gain, white balance via RCP in control room
```

**Key detail:** The [BM handles](/docs/integrations/cameras/blackmagic/bm-handles) plug into the RIO via USB, giving the skating operator zoom and focus control right at hand. The vision engineer handles iris, gain, and white balance remotely via the RCP over 4G. Both work simultaneously without conflict. If the 4G link drops, the operator keeps full local lens control on the ice.

---

## Multi-camera live event

**Scenario:** 12 Sony FX9 cameras at Paris Fashion Week. Mixed wired and wireless links. PL cinema lenses on every camera. Two vision engineers shading simultaneously.

**Challenges:**
- Large-sensor cinema cameras need full paint and lens control
- Mixed transport: fiber for fixed cameras, 4G for mobile (Steadicam, robotic dolly)
- Real-time shading across 12 cameras with tally from an ATEM switcher

### Equipment list

| Component | Quantity | Role |
|:----------|:--------:|:-----|
| RCP (OCTO or MSU) | 12 | One per camera for dedicated shading |
| RIO +WAN | 12 | Camera and lens control, 4G for mobile cameras |
| Sony FX9 | 12 | Main cameras |
| B4/cine lenses | 12 | Canon Cine-Servo, Fujinon Cabrio, Canon CN-E |
| VP4 | 1 | Color correction for GoPro beauty shots |
| ATEM switcher | 1 | Tally source for all cameras |
| AJA KUMO router | 1 | Preview routing to vision engineer displays |

### How it connects

```
Fixed cameras (×9):
  FX9 → RIO (serial/lens) → Fiber (Ereca CAM RACER) → RCP

Mobile cameras (×3):
  FX9 → RIO (serial/lens) → 4G USB dongle → Cloud → RCP

Tally:
  ATEM → RCP (one master imports all 12) → RIO → camera tally

GoPro:
  GoPro → HDMI-to-SDI → VP4 → RCP
```

**Key detail:** The 4G link added about 60 ms latency - fast enough for real-time shading. Camera control uses minimal bandwidth, so even peak-hour cellular in central Paris was stable.

[Full fashion show workflow guide &rarr;](/docs/guides/workflows/fashion-show)

---

## Remote production (REMI)

**Scenario:** Cameras on location, production control at a remote facility. The RCP and RIO communicate over the internet through the Cyanview cloud - no VPN, no firewall configuration.

**Challenges:**
- Unpredictable internet quality between site and studio
- Camera control must survive network interruptions
- Zero-config networking - both sides make outbound connections only

### Equipment list

| Component | Location | Role |
|:----------|:---------|:-----|
| RIO +WAN | Camera site | Autonomous camera/lens control, cloud gateway |
| RCP | Remote studio | Shading and camera management |
| Video encoder | Camera site | Video transport (Haivision, TVU, LiveU, or SRT) |

### How it connects

```
Camera site:
  Camera → RIO +WAN → Internet → Cyanview cloud
                    → Encoder → Video transport

Remote studio:
  Cyanview cloud → RCP (imports camera from RIO)
  Video transport → Decoder → Monitoring
```

**Key detail:** The RIO +WAN maintains autonomous camera and lens control locally. If the internet link drops, the camera operator on-site keeps full control. When the link recovers, the remote RCP reconnects automatically - no manual intervention.

Both RCP and RIO make outgoing connections to the Cyanview cloud, so neither side needs open firewall ports.

[REMI configuration guide &rarr;](/docs/guides/networking/remi)

---

## Wireless Blackmagic camera

**Scenario:** Blackmagic URSA G2 controlled remotely over a Haivision DataBridge tunnel. SDI camera control with tally from an ATEM.

**Challenges:**
- Blackmagic cameras use SDI-embedded control - needs injection into the return feed
- Wireless video transport must also carry the camera control tunnel
- Tally must reach the camera at the remote end

### Equipment list

| Component | Quantity | Role |
|:----------|:--------:|:-----|
| RCP | 1 | Remote shading |
| RIO +WAN | 1 | Camera control gateway |
| RSBM | 1 | SDI control injection for Blackmagic |
| Haivision encoder/decoder | 1 pair | Video + DataBridge tunnel |
| ATEM switcher | 1 | Tally source |

### How it connects

```
Camera site (backpack):
  URSA G2 → RSBM → RIO +WAN → Haivision encoder
                                    ↓
                              DataBridge tunnel
                                    ↓
Control room:
  Haivision decoder → RCP
  ATEM → RCP → tunnel → RIO → RSBM → camera tally
```

**Key detail:** The Haivision DataBridge tunnels camera control alongside the video stream. The RIO and RCP communicate through this tunnel as if they were on the same LAN.

:::tip Newer Blackmagic cameras support IP control
If your URSA G2 or Studio Camera G2 has IP control enabled, you can skip the RSBM and control the camera directly over Ethernet. Check the [Blackmagic integration guide](/docs/integrations/cameras/blackmagic/blackmagic-camera-control) for your model's capabilities.
:::

[Full Blackmagic + Haivision workflow &rarr;](/docs/guides/workflows/blackmagic-haivision)

---

## Cinema gimbal setup

**Scenario:** Sony mirrorless camera on a gimbal, controlled over 4G. The camera operator handles framing, the vision engineer handles paint - from anywhere.

**Challenges:**
- USB camera control (mirrorless cameras)
- Gimbal restricts cabling - minimal connections to the camera rig
- 4G link for fully wireless operation

### Equipment list

| Component | Quantity | Role |
|:----------|:--------:|:-----|
| RCP | 1 | Remote shading |
| RIO +WAN | 1 | USB camera control, 4G connectivity |
| VP4 | 1 (optional) | Advanced color matching when needed |
| Sony Alpha / FX3 | 1 | Mirrorless camera on gimbal |
| RF video transmitter | 1 | Video to control room |
| 4G USB dongle | 1 | Camera control transport on RIO |

### How it connects

```
Gimbal rig:
  Camera (USB) → RIO +WAN → 4G dongle → Cloud → RCP
  Camera (HDMI) → RF transmitter → Control room monitor

Optional color matching:
  SDI from RF receiver → VP4 → RCP
```

**Key detail:** The RIO handles camera control over USB while the video takes a separate RF path. Splitting control and video keeps gimbal wiring minimal - one USB cable to the camera, one 4G dongle on the RIO.

[Full gimbal workflow guide &rarr;](/docs/guides/workflows/sony-mirrorless-gimbal)

---

## Beauty shot (fixed remote camera)

**Scenario:** Panasonic Varicam fixed camera at a remote location. Full paint control over a Haivision DataBridge tunnel.

**Challenges:**
- Remote camera with no local operator
- Reliable shading over a WAN link
- Panasonic cameras require USB-Ethernet adapter for RIO connectivity

### Equipment list

| Component | Quantity | Role |
|:----------|:--------:|:-----|
| RCP | 1 | Remote shading |
| RIO +WAN | 1 | Camera control gateway |
| Haivision encoder/decoder | 1 pair | Video + DataBridge tunnel |
| Panasonic Varicam | 1 | Fixed camera |
| USB-Ethernet dongle | 1 | Second Ethernet interface on RIO |

### How it connects

```
Remote site:
  Varicam → RIO +WAN (USB-Ethernet) → Haivision encoder
                                           ↓
                                     DataBridge tunnel
                                           ↓
Control room:
  Haivision decoder → RCP
```

**Key detail:** The RIO +WAN has a single Ethernet port, used here for the Haivision DataBridge. A USB-Ethernet dongle adds a second interface for the Varicam connection. Bridge mode on the RIO makes both ports act as a single switch.

[Full beauty shot workflow guide &rarr;](/docs/guides/workflows/haivision-beauty-shot)

---

## Compare scenarios at a glance

| Scenario | Cameras | Transport | Key products | Remote? |
|:---------|:-------:|:----------|:-------------|:-------:|
| Olympic on-ice camera | 1 | 4G (wireless) | RCP + RIO +WAN | Yes |
| Multi-camera live event | 2-128 | LAN, fiber, 4G | RCP + RIO | Optional |
| REMI remote production | 1-128 | Internet (cloud) | RCP + RIO +WAN | Yes |
| Wireless Blackmagic | 1+ | Haivision DataBridge | RCP + RIO + ATEM | Yes |
| Cinema gimbal | 1 | 4G + RF video | RCP + RIO +WAN | Yes |
| Beauty shot | 1 | Haivision DataBridge | RCP + RIO +WAN | Yes |

---

## Next steps

- [Choose your products &rarr;](/docs/products/which-product)
- [Compare RCP license tiers &rarr;](/docs/guides/licensing)
- [Browse camera integrations &rarr;](/docs/integrations)
- Contact **sales@cyanview.com** for a tailored system design
