---
id: sony-fcb
title: "Sony FCB block cameras"
sidebar_label: "Sony FCB"
description: "Control Sony FCB block cameras with Cyanview over VISCA serial. Compact camera modules for robotic and specialty applications."
keywords: [Sony FCB, block camera, VISCA, robotic, compact]
slug: /integrations/cameras/sony/sony-fcb
---

![Sony FCB-ER8530 block camera](/img/Integrations/Sony/Sony-FCB/Sony-FCB-ER8530.jpeg)

Control Sony FCB block cameras from your Cyanview RCP over VISCA serial. The CI0 powers and controls the camera through a single cable, making this integration well-suited for robotic and specialty applications.

## Compatible models

- Sony FCB-7520
- Sony FCB-8230
- Sony FCB-8530
- Sony FCB-8550
- Sony FCB-H11

:::note
Most FCB models share a similar feature set — only the capabilities differ. If your exact model is not listed, select the closest one in the RCP configuration and test it.
:::

## Supported controls

| Control | FCB-XXX |
|:--------|:-------:|
| **Exposure** (iris, gain, shutter) | ✔ |
| **White balance** (R/B) | ✔ |
| **Advanced shading** (master gamma, detail value + on/off) | ✔ |
| **Lens** (zoom/focus in speed or position) | ✔ |
| **Menus** (I_lens, I_cam, ICRon, ICRoff, FlipOn, FlipOff) | ✔ |
| **Other** (AWB/ATW, auto focus, auto gain/shutter/iris and EV comp) | ✔ |
| **Scene file** — [save/recall](/docs/reference/manuals/rcp/ui/scene) | ✔ |

## Wiring

![Sony FCB block camera wiring diagram](/img/Integrations/Sony/Sony-FCB/Sony-FCB-wiring.png)

Connect the camera to the CI0 using a [CY-CBL-6P-FAN](/docs/resources/cable-catalog#cy-cbl-6p-fan) cable:
- **GND / PWR** — camera power input (the CI0 can be powered by PoE or 12V and will power the camera)
- **GND / Tx / Rx** — VISCA/RS232 port on the camera

The RCP connects to the CI0 over Ethernet.

:::note
For remote or RF applications, use a RIO with a [CY-CBL-6P-FAN](/docs/resources/cable-catalog#cy-cbl-6p-fan) cable in place of the CI0.
:::

## Setup

### VISCA bus

Add the VISCA bus in the [RCP Configuration UI](/docs/reference/manuals/rcp/web-ui):

1. In **Features**, click `+`.
2. Select `Sony: VISCA Bus`.
3. Click the new **Sony VISCA** block that appears.

Configure it to match your camera's settings (ID, baud rate, etc.):

![Sony FCB VISCA bus configuration form](/img/Integrations/Sony/Sony-FCB/Sony-FCB-VISCA-setup.png)

The configured bus should look like this:

![Sony FCB VISCA bus block in the configuration UI](/img/Integrations/Sony/Sony-FCB/Sony-FCB-VISCA-block.png)

:::note
The VISCA bus block shows no status indicator — status only applies once a camera is linked to the bus.
:::

### Camera

Add the camera in the [RCP Configuration UI](/docs/reference/manuals/rcp/web-ui) and link it to the VISCA bus:

1. In **Camera**, click `+`.
2. Click the new camera block that appears.
3. Enter a camera number and name.
4. Select **Sony** as brand.
5. Select the closest **FCBXXXX** model — for example, select `FCB8230` for an `FCB-ER8530`.
6. Select the CI0 port and VISCA bus ID — for example, `CI0-20-99:2:Visca:1` (VISCA bus on CI0 `20-99`, port `2`, camera ID `1` on this bus).

![Sony FCB camera configuration form](/img/Integrations/Sony/Sony-FCB/Sony-FCB-setup.png)

The configured camera block should look like this:

![Sony FCB camera block in the configuration UI](/img/Integrations/Sony/Sony-FCB/Sony-FCB-block.png)
