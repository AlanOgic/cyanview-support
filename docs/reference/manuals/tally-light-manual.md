---
id: tally-light-manual
title: "Tally light manual"
sidebar_label: "Tally light"
description: "Manual for Cyanview tally lights. Wiring, mounting, and configuration for on-camera tally indication."
keywords: [tally light, manual, wiring, mounting, LED]
slug: /reference/manuals/tally-light-manual
---

The RCP routes tally from [various inputs](/docs/guides/tally/tally) to your camera. For cameras with built-in tally (Panasonic PTZ, Sony ENG, etc.), the RCP triggers it alongside shading control. For cameras without tally (mini cameras, camcorders, etc.), the CI0/RIO has embedded LEDs configured for tally by default — [one per port](/docs/reference/manuals/ci0/ci0-manual#one-camera-per-port). When you need something more visible, the Cyanview tally light is a ready-to-use solution.

![Cyanview tally light off](/img/blog/tally-light-off.JPG)

<!--truncate-->

## Solutions and use cases

If you need a tally in the viewfinder or want to build your own tally box, use the [DIY kit](/docs/guides/tally/tally#ci0rio-external-led) and follow the [assembly guide](/docs/resources/build-tally-led).

For a plug-and-play solution with a camcorder or mirrorless camera, use the Cyanview tally light box:

![Cyanview tally light on](/img/blog/tally-light-on.JPG)

## Features

- 12V DC power
- Front and rear separate on/off buttons
- Front and rear separate dimming
- Shoe lock mounting (camcorder, [mirrorless](/docs/integrations/cameras/sony/sony-alpha), etc.)
- Screw mounting

## Wiring

Plug the tally light into any unused port on your CI0 or RIO:

![Tally light connected to CI0/RIO port](/img/blog/tally-light-wiring.JPG)

## Mounting

Mount on a magic arm or similar using the screw mount:

![Tally light screw-mounted on magic arm](/img/blog/tally-light-screw.JPG)

Or slide into the camera hot shoe using the shoe lock:

![Tally light mounted in shoe lock](/img/blog/tally-light-shoe-lock.JPG)

## Setup

Plug the tally light into port 1 or 2 of your CI0/RIO. In the RCP web UI:

1. Go to the **GPIO** page.
2. Select the mode `Red Tally` (default).
3. Click the intersection of `camera` (row, left column) and `GPO` (column, top row).
4. Select `1:PWR` or `2:PWR` depending on which port you used.

For more detail on tally output configuration, see the [tally output guide](/docs/guides/tally/tally#tally-output).
