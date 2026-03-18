---
id: nio-manual
title: "NIO manual"
sidebar_label: "NIO manual"
description: "Complete manual for the Cyanview NIO network I/O device. GPIO setup, tally configuration, and network connections."
keywords: [NIO, manual, GPIO, tally, network I/O]
slug: /reference/manuals/nio-manual
---

## Overview

<img src="/img/Manual/NIO/NIO.png" width="200"/>

The NIO provides 16 GPIO over ethernet.

You can have multiple NIO's if you need more GPIO's.

## Wiring

<img src="/img/Manual/NIO/NIO-wiring.png" width="600"/>

You just need to have your NIO's and RCP's on the same switch.

Then, the discovery of the GPIO is automatic.

## Setup

* Power your RCP
* Power your NIO
* Connects them on the same network (switch)

Then in your RCP, you should see your NIO appear in light grey

### GPI

<img src="/img/Manual/NIO/NIO-setup2.png" width="200"/>

You can then configure it as [usual](/docs/guides/tally/tally#gpi)

:::note
For GPI, if not using a short contact, ensure to use < 5V
:::

### GPO

<img src="/img/Manual/NIO/NIO-setup.png" width="500"/>

You can then configure it as [usual](/docs/guides/tally/tally#gpo)

:::note
When GPO is LOW, output voltage is 0V.

When GPO is HIGH, output voltage is 5V.

Output current 500μA.
:::
