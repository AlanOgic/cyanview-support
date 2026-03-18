---
id: sony-fr7
title: "Sony FR7 integration"
sidebar_label: "Sony FR7"
description: "Control the Sony FR7 PTZ cinema camera with Cyanview. Full paint, PTZ, and lens control over IP for remote production."
keywords: [Sony FR7, PTZ, cinema, IP control, REMI]
slug: /integrations/cameras/sony/sony-fr7
---

<img src="/img/Integrations/Sony/Sony-FR7/FR7.png" width="400" />

## Camera control

The FR7 control integration combines settings available from the [Web app GUI](https://helpguide.sony.net/ilc/2240/v1/en/contents/TP1000669507.html) together with the RCP functions available from the [s700 IP protocol](https://helpguide.sony.net/ilc/2240/v1/en/contents/TP1000954839.html)

|Control|FR7
:-----|:-----|
**White balance** (R/B and Color temp)|✔
**Exposure** (Iris, Gain, Base ISO, EI, Shutter, Variable ND filter)|✔
**Master Black and black balance** |✔
**Detail level and crispening** |✔
**User Matrix** |✔
**Multi Matrix** |✔
**Knee** |✔
**Green and Red Tally**|✔
**Camera Menu Navigation**|✔
**Lens** <a href="/docs/Manuals/RCP/RCPUI/RCPUIScene">(zoom, focus)</a>|✔
**Pan/Tilt** (<a href="/docs/Manuals/RCP/RCPUI/RCPUIScene">from RCP touchscreen</a> or <a href="/docs/Integrations/Accessories/AnxinshiPTZUSBJoystick">USB joystick</a>)|✔
**Presets/Positions** : <a href="/docs/Manuals/RCP/RCPUI/RCPUIScene#saveload">save/recall</a>|✔

Note that when the camera is set to SLOG-3 or CineEI, most paint controls are disabled by the camera.

## Camera wiring

### With Sony PTZ panel

The Sony PTZ panel is a wired remote control panel that can be used to control the pan, tilt and zoom of the camera.

The Cyanview RCP can control the shading in parallel with the PTZ panel.

The Tablet can control the auto focus in parallel with the PTZ panel.

<img src="/img/Integrations/Sony/Sony-FR7/FR7-wiring.png" width="600" />

:::note
* RCP : for shading, tally, camera menu control
* PTZ panel : for pan, tilt and zoom
* Tablet (optional) : for auto focus
:::

### With USB Joystick

The USB joystick is a wired remote control panel that can be used to control the pan, tilt and zoom of the camera.

The Cyanview RCP can control the shading and the PTZ using the USB joystick. If you have multiple cameras, the joystick/RCP are sync, you can navigate through all the camera and shade/PTZ them all.

The Tablet can control the auto focus in parallel with the PTZ panel.

<img src="/img/Integrations/Sony/Sony-FR7/FR7-wiring-USB.png" width="600" />

:::note
* RCP : for shading, tally, camera menu control
* <a href="/docs/Integrations/Accessories/AnxinshiPTZUSBJoystick">USB joystick</a> : for pan, tilt and zoom
* Tablet (optional ): for auto focus
:::


## Camera configuration

:::warning
This is based on the latest release of the RCP 23.8.1.

You now need your Sony FR7 to be in firmware minimum 1.10 to be able to control it with the RCP.
:::

Ensure your Sony FR7 is connected to your network and powered on.
Ensure your camera has a static IP address and that your computer can navigate to the camera's web interface, and that you know the login/password.

In `Settings > Technical > Tally`:
* `Tally Lamp Brightness`: whatever you want
* `G Tally Lamp` : `Enable`
* `Tally Control` : `External`

<img src="/img/Integrations/Sony/Sony-FR7/FR7-setup-tally.png" width="600" />


In `Settings > Technical > RCP/MSU`:
* `CNS Mode` : `Bridge`

<img src="/img/Integrations/Sony/Sony-FR7/FR7-setup-RCP.png" width="600" />

In `Settings > Network > Brute Force Attack Protection`:
* `Setting` : disable it

<img src="/img/Integrations/Sony/Sony-FR7/FR7-bruteforce.jpeg" width="600" />

:::info
If the `Brute Force Attack Protection` was active and you just disabled it. Ensure to:
1. Disable it
2. Power cycle your camera to ensure this parameter is properly set.
:::
## RCP configuration

Set up a new camera via the <a href="/docs/Manuals/RCP/ConfWebUI">RCP Configuration UI</a>:
- Enter a custom number, name, etc.
- Select **Sony** brand
- Select **Sony FR7** for the model
- Enter the IP of your camera
- Enter your login/password

:::note
If your camera is in a different range than your RCP (i.e. not 10.192.0.0/16), follow <a href="/docs/Configuration/ConfIP">this guide</a> to add a new IP to the RCP.
:::

This should look like this:

<img src="/img/Integrations/Sony/Sony-FR7/FR7-setup.png" width="300" />

And once correctly connected, it should be green:

<img src="/img/Integrations/Sony/Sony-FR7/FR7-block.png" width="300" />
