---
id: ci0
title: "CI0 — Camera Interface"
sidebar_label: CI0
description: "The Cyanview CI0 is a compact serial-to-IP converter for direct camera connection. A budget-friendly entry point for local broadcast production."
keywords: [CI0, camera interface, serial to IP, compact, broadcast, Blackmagic, SDI]
slug: /products/ci0
---

# CI0 — Camera Interface

The CI0 is a compact serial-to-IP converter that connects cameras directly to your RCP. It is the most affordable way to add serial cameras to your Cyanview system.

![CI0 — Camera Interface](/img/productGfx/ci0.png)

## Key features

- **Compact form factor** — Small enough to mount directly on a camera rig
- **2 serial ports** — Connect camera and accessories simultaneously
- **Low latency** — Direct serial-to-IP conversion with minimal delay
- **Budget-friendly** — Lower cost entry point compared to the RIO

## Variants

| Model | Description |
|---|---|
| **CI0** | Standard serial-to-IP converter |
| **CI0BM** | With integrated Blackmagic SDI control board |

## Limitations

The CI0 is a **stateless** device. If the network connection between the CI0 and the RCP drops, the CI0 loses camera control until the connection is restored. For mission-critical applications or lens motor control, use a [RIO](/docs/products/rio) instead.

The CI0 does **not** have a USB port. For USB-controlled cameras (Sony Alpha, Canon R5), you need a [RIO](/docs/products/rio).

## When to use the CI0

| Scenario | CI0 | RIO |
|---|---|---|
| Local production, stable network | Best choice | Works too |
| Budget-conscious setup | Best choice | Higher cost |
| Lossy or unreliable network | Not recommended | Best choice |
| USB camera control | Not supported | Best choice |
| Lens motor control | Loses connection on network drop | Maintains control |
| Blackmagic SDI cameras | CI0BM or CI0 + RSBM | RIO + RSBM |

## Getting started

- [CI0 manual](/docs/reference/manuals/ci0/ci0-manual)
- [Serial camera guide](/docs/integrations/generic/serial-camera)
- [Quick start guide](/docs/getting-started/quickstart)
