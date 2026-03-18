---
id: lansee
title: "LanSee integration"
sidebar_label: "LanSee"
description: "Integrate LanSee camera systems with Cyanview for remote paint and control in broadcast environments."
keywords: [LanSee, camera control, broadcast, integration]
slug: /integrations/cameras/other/lansee
---

# Overview

LanSee propose a range of devices to transport video and IP over fiber.

In this documentation, we show the integration of the SMPTE module with:
* B4 Canon lens
* a camera (here a DC SSM500)
* Cyanview CI0 to control the camera and the lend
* RCP to shade the camera (+ lens control)

And this setup will show the integration with the router/switcher and Cyanview ecosystem:
* Lansee ingest multiple video signal inputs
* the cameraman push buttons on the lens
* Cyanview RCP will switch the video signals directly inside LanSee

## Wiring

<img src="/img/Integrations/LanSee/LanSee-wiring.png" width="600"/>


### Camera side

* CI0 is powered by PoE directly from LanSee, powering/controling the lens and camera
* Dreamchip SSM500 depending on the mode will outputs:
    * 2 x SDI : in trigger mode (replay is done internally on SSD), one live, one replay
    * 4 x SDI : in SSM mode (EVS), 4 x phases for replay
* LanSee will ingest all SDI and give one SDI out for the monitor

### CCU side

* LanSee:
    - 1 x SDI input from switcher/router (program, preview, etc.)
    - 2 x SDI (in trigger mode, live and replay) or 4 x SDI (in SSM mode with EVS, 4 phases for replay)
    - 1 x Ethernet for the RCP link
* RCP connects to CI0 and LanSee via Ethernet

## Setup

I'm not covering:
* Dreamchip SSM500 integration, check <a href="/docs/Integrations/Dreamchip/ssm500">here</a>
* B4 Lens integration, check <a href="/docs/integrations/lenses/b4-lens">here</a>

But this setup will work with any camera/lens combination.

In addition to your existing camera/lens configuration, create 3 additional "not controlled" cameras.
This will serve as a "virtual" camera to control the LanSee inputs.

In the `Components` section of the RCP <a href="/docs/reference/manuals/rcp/web-ui">web UI</a>:
* Click on `+`
* Select `Router/Switcher`


<img src="/img/Integrations/LanSee/LanSee-setup1.png" width="300"/>


* Select `AVMatrix`


<img src="/img/Integrations/LanSee/LanSee-setup2.png" width="300"/>


* And complete the informations (name, IP, link cameras, etc.)


<img src="/img/Integrations/LanSee/LanSee-setup3.png" width="300"/>

It should looks like this:

<img src="/img/Integrations/LanSee/LanSee-setup-overview.png" width="600"/>


You can now follow this <a href="/docs/guides/advanced/b4-return">guide</a> to configure the B4 lens buttons mapping.

You should now be able to press your lens buttons and toggle the video signal on the LanSee.