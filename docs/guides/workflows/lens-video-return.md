---
id: lens-video-return
title: "Lens and video return workflow"
sidebar_label: "Lens + video return"
description: "Set up coordinated lens control and video return feeds with Cyanview for operator monitoring during production."
keywords: [lens control, video return, monitoring, workflow]
slug: /guides/workflows/lens-video-return
---

Fujinon and Canon lenses have buttons (RET1, etc.) that you can map to router or switcher commands on the RCP. This lets the camera operator switch their video return source from the lens handle — for example, toggling between a LOG signal, the program feed, or the main camera output — without touching anything at the CCU.

The result: one clean output signal from the camera, and one video return path from the switcher. The lens buttons control which source appears on the cameraman's display.

![Cyanview RCP RIO FX9 Canon Cine Servo 25-250 mm](/img/Workflows/LensVideoReturn-FX9-Canon-25-250.jpeg)

:::note
This works with any lens that has a RET1 button (Canon, Fujinon, etc.) that the RIO controls directly.

If your lens has no buttons, no digital control connector, or is not controlled by a CI0/RIO, this is not possible. If you have a Sony Venice with iris controlled through the camera protocol (8-pin), it's also not possible. To make it work in that case, you'd need a RIO controlling both the camera and the lens directly.
:::

## Wiring

The example below uses an FX9 and a Canon PL lens. The principle is the same for any supported lens and camera.

![Wiring diagram: Canon Cine Servo 25-250 mm, FX9, Ereca, Blackmagic VideoHub, Cyanview RCP](/img/Workflows/LensVideoReturn-wiring.png)

On the camera side, the RIO connects to:
- The FX9 XDCA RJ45 port (or via Wi-Fi using a [USB dongle](/docs/guides/networking/wifi-usb) on the RIO)
- The Canon lens using cable [CY-CBL-6P-B4-01](/docs/resources/cable-catalog#cy-cbl-6p-b4-01-default)
- The Ereca CAM RACER using a USB-Ethernet dongle (the RIO has only one onboard RJ45 port)

The CAM RACER receives SDI from the FX9 SDI output, and its SDI output goes to the external display.

:::note
The RIO has one onboard RJ45 port and two USB ports you can use for dongles (4G, Wi-Fi, RJ45, etc.), giving you up to two RJ45 interfaces. In bridge mode, both RJ45 interfaces merge into a single network — the RIO acts as a switch, letting you access the FX9 web interface from the CCU room without adding a separate switch.
:::

## Setup

### RIO and camera side

Configure the following:

**RIO bridge mode:**
1. Click `IP Connections`
2. Scroll to the `Bridge` section
3. Enable `Auto Bridge USB Interfaces`

**Camera:** configure your FX9 as usual.

**Lens:** configure your Canon PL lens (model `B4 generic`) as usual.

**REMI:** set your REMI tag as usual.

Your configuration should look like this:

![RIO FX9 Canon Cine Servo setup](/img/Workflows/LensVideoReturn-RIO-config.png)

Bridge configuration:

![RIO Ethernet bridge setup](/img/Workflows/LensVideoReturn-RIO-bridge.png)

REMI tag:

![RIO REMI tag setup](/img/Workflows/LensVideoReturn-RIO-remi.png)

For detailed steps, see:
- [FX9 integration guide](/docs/integrations/cameras/sony/sony-fx9)
- [Cine lens integration guide](/docs/integrations/lenses/cine-lens)
- [REMI guide](/docs/guides/networking/remi)

### RCP side

On the RCP:

**Import the camera from your RIO:**
1. Click `REMI`
2. Set the same tag you added in the RIO (RIO and RCP need at least one tag in common)
3. Check the box next to your RIO/camera

**Create your router/switcher** (here a Blackmagic Videohub):
1. Enter a name
2. Enter the IP address of your router/switcher
3. Configure the input range — include at least your camera and every source you want available as a video return
4. Link your camera to the router input (this maps the RET1 button to the correct input and camera)
5. Configure the output range — include at least the output feeding your video return into the Ereca

Your REMI setup should look like this:

![RCP REMI camera import](/img/Workflows/LensVideoReturn-RCP-remi.png)

Camera configuration:

![RCP camera configuration](/img/Workflows/LensVideoReturn-RCP-config.png)

:::note
When you check a camera in the REMI tab, the RCP automatically creates a matching camera entry with the same name and number as on the RIO. After that, you can rename or renumber independently on either side without relinking.
:::

Router/switcher setup:

![RCP router configuration](/img/Workflows/LensVideoReturn-RCP-router-config.png)

![RCP router block](/img/Workflows/LensVideoReturn-RCP-router.png)

:::note
In this example:
- Input 11 is the FX9 clean signal (coming from the Ereca, looped back into Videohub SDI input 11)
- Input 21 is the program feed (Videohub SDI input 21)

You can create a `not controlled` camera entry named `PGM` and link it to input 21 to label it — but it's optional.

Output 1 is the video return signal going to the Ereca, back to the cameraman's display. You can create a named monitor and link it to output 1 for labeling, but that's also optional.

Both inputs (11 and 21) must be in your configured range, or you won't be able to use them later.
:::

Now navigate to `/dev/app.html`, find your router/switcher, and click it:

![RCP dev app router view](/img/Workflows/LensVideoReturn-RCP-devapp-router.png)

In the advanced configuration panel on the right:

![RCP dev app router advanced config](/img/Workflows/LensVideoReturn-RCP-devapp-router-config.png)

Edit `video_return` to `1:11,21,21,21` and click `OK` to save.

:::note
With this configuration, pressing any lens button switches the video return to the program feed (input 21 → output 1). Releasing the button returns to the clean signal (input 11 → output 1).

You can map different buttons to different inputs:
- RET1 → LOG signal
- RET2 → main camera
- etc.
:::

For deeper reference, see:
- [REMI guide](/docs/guides/networking/remi)
- [Router/Switcher integration guide](/docs/integrations/generic/routers)
- [Video return guide](/docs/guides/advanced/b4-return)
