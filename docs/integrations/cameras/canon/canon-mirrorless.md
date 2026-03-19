---
id: canon-mirrorless
title: "Canon mirrorless cameras"
sidebar_label: "Canon mirrorless"
description: "Control Canon mirrorless cameras like the R5 with Cyanview via USB through a RIO gateway."
keywords: [Canon mirrorless, R5, USB, RIO, remote control]
slug: /integrations/cameras/canon/canon-mirrorless
---

Cyanview controls the Canon R5 over USB, connected either directly to an RCP or remotely through a RIO/NIO for full IP-based control.

![Canon R5 mirrorless camera](/img/Integrations/Canon/canon-R5.png)

**Supported model:** R5

:::note
The R5-C is not suitable for video applications. It has a different video processing pipeline that cannot be controlled via USB. Only picture mode is accessible, making it impractical for live video use.
:::

## Controls

| Control | R5 |
| :--- | :--- |
| **Exposure** (iris, gain, shutter) | ✔ |
| **White balance** (R/B and color temp) | ✔ |
| **Scene file** ([save/recall](/docs/reference/manuals/rcp/ui/scene)) | ✔ |

## Wiring

You need a USB-A (RCP/RIO/NIO) to USB-C (camera) cable.

Connect the camera:
- **To the RCP** — for testing or when camera and RCP are in the same location. Use any USB-A port on the back of the RCP (not the top port — use the one next to the RJ45).
- **To a RIO/NIO** — for all other cases, giving you remote control over IP from anywhere. Use any USB-A port on the RIO/NIO.

### RCP wiring

![Canon R5 connected to RCP](/img/Integrations/Canon/canon-DSLR-RCP.png)

### RIO/NIO wiring

![Canon R5 connected to RIO/NIO](/img/Integrations/Canon/canon-DSLR-RIO.png)

## Configuration

1. Click `+` in the camera block — a new panel appears on the right.
2. Under `General`, set a **Number** and a **Name**.
3. Select brand `Canon` and model `DSLR`.

Your settings should look like this:

![Canon DSLR setup view](/img/Integrations/Canon/Canon-DSLR-setup.png)

Your camera block:

![Canon DSLR connected block](/img/Integrations/Canon/Canon-DSLR-block.png)

:::note
The interface shows `SN:*`, meaning it automatically connects to the first camera plugged in.
:::
