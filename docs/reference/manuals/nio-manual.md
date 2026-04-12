---
id: nio-manual
title: "NIO manual"
sidebar_label: "NIO manual"
description: "Complete manual for the Cyanview NIO network I/O device. GPIO setup, tally configuration, and network connections."
keywords: [NIO, manual, GPIO, tally, network I/O]
slug: /reference/manuals/nio-manual
---

The NIO provides 16 GPIO over ethernet. Add multiple NIO units to your setup if you need more GPIO capacity.

![NIO device](/img/Manual/NIO/nio-fac-wh.jpg)

## Wiring

Connect your NIO and RCP to the same switch. GPIO discovery is automatic — no additional configuration required.

![NIO wiring diagram](/img/Manual/NIO/NIO-wiring.png)

## Setup

1. Power your RCP.
2. Power your NIO.
3. Connect both to the same network switch.

Your NIO appears in the RCP in light grey once detected.

### GPI

![NIO GPI setup screen](/img/Manual/NIO/NIO-setup2.png)

Configure GPI as [described in the tally guide](/docs/guides/tally/tally#gpi).

:::note
For GPI, if not using a short contact, keep the input voltage below 5V.
:::

### GPO

![NIO GPO setup screen](/img/Manual/NIO/NIO-setup.png)

Configure GPO as [described in the tally guide](/docs/guides/tally/tally#gpo).

:::note
GPO LOW = 0V output. GPO HIGH = 5V output. Output current: 500μA.
:::
