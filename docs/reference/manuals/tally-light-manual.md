---
id: tally-light-manual
title: "Tally light manual"
sidebar_label: "Tally light"
description: "Manual for Cyanview tally lights. Wiring, mounting, and configuration for on-camera tally indication."
keywords: [tally light, manual, wiring, mounting, LED]
slug: /reference/manuals/tally-light-manual
---

<img src="/img/blog/tally-light-off.JPG" width="600"/>

<!--truncate-->

# Introduction

Our RCP can route your tally from [various inputs](/docs/Configuration/Tally) to your camera.
If your camera has tally (Panasonic PTZ, Sony ENG, etc.), we will trigger it alongside the shading control.

If your camera doesn't have one (mini camera, camcorder, etc.), the CI0/RIO has embedded LEDs, that are configured for tally by default. [One for each port](/docs/Manuals/CI0/CI0Manual#a-camera-on-each-port).

But this is sometimes not enough and you need a more visible tally light.

# Solutions and use case

If you need a tally in the viewfinder or want to design/integrate your own tally box, we have a [DIY kit](/docs/Configuration/Tally#ci0rio-external-led) and an [assembly guide](/docs/Accessories/BuildTallyLED).

If you need a plug and play solution to integrate with your camcorder or mirrorless camera, we designed this box:

<img src="/img/blog/tally-light-on.JPG" width="300"/>

# Features:

Features:
* 12V DC
* Front and rear separate on/off buttons
* Front and rear separate dimming
* Shoe lock mounting (camcorder, [mirrorless](/docs/Integrations/Sony/SonyAlpha), etc.)
* Screw mounting

# Wiring:

You can simply plug it in your CI0 or RIO unused port:
<img src="/img/blog/tally-light-wiring.JPG" width="300"/>

And then secure it, either:

On a magic arm, or similar, using as screw:
<img src="/img/blog/tally-light-screw.JPG" width="300"/>

Or in the shoe lock:
<img src="/img/blog/tally-light-shoe-lock.JPG" width="300"/>


# Setup

You can plug that on port 1 or 2 of your CI0/RIO.

In the RCP web UI:
* Go to the GPIO page
* Select adequate mode: `Red Tally` (default)
* click on the intersection of:
    - `camera` (line, left column)
    - `GPO` (column, top line), select `1:PWR` or `2:PWR` depending on the port you plugged the tally light

You can have more information on the tally output <a href="/docs/Configuration/Tally#tally-output">here</a>
