---
id: b4-lens
title: "B4 broadcast lens control"
sidebar_label: "B4 lenses"
description: "Control B4 broadcast lenses with Cyanview through a RIO gateway. Servo zoom, focus, and iris control."
keywords: [B4 lens, broadcast, servo, zoom, focus, iris, RIO]
slug: /integrations/lenses/b4-lens
---

Cyanview supports B4 lens control in parallel with camera control — useful for specialty and robotic applications, or when the camera cannot drive the lens directly (for example, a Dreamchip Atom One with a B4 ENG lens).

When you adjust iris, zoom, or focus on the RCP, the command goes to the lens. When you shade, it goes to the camera. The split is transparent to the vision engineer.

Works with ENG lenses and box lenses from Canon and Fujinon.

## Wiring

Required cable: [CY-CBL-6P-B4-01](/docs/resources/cable-catalog#cy-cbl-6p-b4-01-default).

![B4 ENG lens wiring diagram](/img/Integrations/Lens/B4-ENG.png)

## Compatible Cyanview devices

| Device | Use case |
|--------|----------|
| CI0 | Local (LAN) |
| RIO Live | Local (LAN) with resilient lens control |
| RIO | Remote control (internet), multi-camera |

:::note
* **CI0** acts as a serial/IP converter. If the link between RCP and CI0 is broken or unstable, the lens loses control and the iris closes or resets.
* **RIO Live** runs all protocols onboard. If the link to the RCP drops, the lens remains controlled by the RIO Live.
* **RIO** offers the same resilience as RIO Live, with added multi-camera support and cloud connectivity.
:::

## Controls

* Iris
* Zoom
* Focus

## Setup

In this example:
* CI0 unit: `CI0-12-137`
* Dreamchip AtomOne connected to port 1
* B4 lens connected to port 2

Steps:

1. Open the [`Configuration`](/docs/reference/manuals/rcp/web-ui) tab and create a new camera or edit an existing one.
2. Set up your camera following the [serial camera guide](/docs/integrations/generic/serial-camera) or [IP camera guide](/docs/integrations/generic/ip-camera).
3. Set `Number` and `Name`:

![Camera basic setup — number and name](/img/Integrations/Lens/B4-setup-basic.png)

4. Set `Brand` and `Model`:

![Camera setup — brand and model](/img/Integrations/Lens/B4-setup-camhead.png)

5. In the `Lens` block, select **B4 Generic**, then select your CI0/RIO and the port the lens is connected to:

![B4 lens configuration block](/img/Integrations/Lens/B4-setup-lens.png)

When connected successfully, the block turns green:

![B4 lens block — green](/img/Integrations/Lens/B4-block.png)

:::tip
If you only need iris control and want zoom/focus handled by the cameraman:
1. On the RCP, press `Lens` to open the lens menu.
2. Press `Lens` again to reach the second page (`Lens2`).
3. Press `Z/F En` to disable zoom/focus control — only `Iris En` should be highlighted.
:::
