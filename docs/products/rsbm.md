---
id: rsbm
title: "RSBM — SDI Control Board"
sidebar_label: RSBM
description: "The Cyanview RSBM is an SDI control injection board for Blackmagic cameras. Pair it with a CI0 or RIO for full camera control over SDI."
keywords: [RSBM, SDI, Blackmagic, camera control, broadcast, injection board]
slug: /products/rsbm
---

# RSBM — SDI Control Board

The RSBM is an SDI control injection board designed for Blackmagic cameras. It enables full camera control over the SDI connection, giving you paint, iris, and shutter control on Blackmagic cameras that support SDI camera control protocol.

## Key features

- **SDI control injection** — Send camera control commands over the SDI feed
- **Blackmagic compatibility** — Designed for cameras supporting Blackmagic SDI camera control
- **Pairs with CI0 or RIO** — Not a standalone device; connects through your existing Cyanview gateway

## How it works

The RSBM board connects to a [CI0](/docs/products/ci0) or [RIO](/docs/products/rio), which translates RCP commands into SDI camera control signals. The CI0BM variant has the RSBM board built in, so you do not need a separate RSBM if you use a CI0BM.

| Setup | Description |
|---|---|
| **CI0BM** | CI0 with integrated RSBM — simplest option |
| **CI0 + RSBM** | Separate CI0 and RSBM board |
| **RIO + RSBM** | RIO with RSBM for autonomous SDI control |

## When to use the RSBM

Use the RSBM when you need to control Blackmagic cameras over SDI. If you are already using a CI0, consider the CI0BM variant which includes the RSBM board. If you need autonomous control on unreliable networks, pair the RSBM with a [RIO](/docs/products/rio).

## Getting started

- [Blackmagic camera control guide](/docs/integrations/cameras/blackmagic/blackmagic-camera-control)
- [CI0 manual](/docs/reference/manuals/ci0/ci0-manual)
