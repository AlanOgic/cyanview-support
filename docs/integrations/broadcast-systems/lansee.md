---
id: lansee
title: "LanSee integration"
sidebar_label: "LanSee"
description: "Integrate LanSee camera systems with Cyanview for remote paint and control in broadcast environments."
keywords: [LanSee, camera control, broadcast, integration]
slug: /integrations/cameras/other/lansee
---

LanSee offers a range of devices that transport video and IP over fiber. This guide shows you how to integrate the LanSee SMPTE module with a B4 Canon lens, a Dreamchip SSM500, and Cyanview to shade the camera and control the lens remotely. It also demonstrates how to use LanSee as a router/switcher within the Cyanview ecosystem, letting the cameraman switch video signals using the lens buttons.

## Wiring

![LanSee full system wiring diagram](/img/Integrations/LanSee/LanSee-wiring.png)

### Camera side

- The CI0 is powered by PoE directly from LanSee, powering and controlling the lens and camera.
- The Dreamchip SSM500 outputs video depending on the mode:
  - **Trigger mode** (internal SSD replay) — 2 x SDI: one live, one replay
  - **SSM mode** (EVS) — 4 x SDI: four phases for replay
- LanSee ingests all SDI signals and provides one SDI output for the monitor.

### CCU side

- LanSee accepts:
  - 1 x SDI input from switcher/router (program, preview, etc.)
  - 2 x SDI (trigger mode: live and replay) or 4 x SDI (SSM mode with EVS: four replay phases)
  - 1 x Ethernet for the RCP link
- The RCP connects to the CI0 and LanSee via Ethernet.

## Setup

This guide assumes you have already set up the [Dreamchip SSM500](/docs/integrations/cameras/other/dreamchip-ssm500) and the [B4 Lens](/docs/integrations/lenses/b4-lens). This setup works with any camera/lens combination.

In addition to your existing camera/lens configuration, create three additional "not controlled" cameras to act as virtual inputs for the LanSee router.

In the `Components` section of the RCP [web UI](/docs/reference/manuals/rcp/web-ui):
1. Click `+` and select `Router/Switcher`.

![LanSee router/switcher selection](/img/Integrations/LanSee/LanSee-setup1.png)

2. Select `AVMatrix`.

![LanSee AVMatrix selection](/img/Integrations/LanSee/LanSee-setup2.png)

3. Complete the details (name, IP, linked cameras, etc.).

![LanSee router configuration form](/img/Integrations/LanSee/LanSee-setup3.png)

The completed setup should look like this:

![LanSee setup overview](/img/Integrations/LanSee/LanSee-setup-overview.png)

Follow the [B4 lens button mapping guide](/docs/guides/advanced/b4-return) to configure the lens buttons. You will then be able to press the lens buttons to toggle video signals on LanSee.
