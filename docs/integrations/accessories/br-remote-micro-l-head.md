---
id: br-remote-micro-l-head
title: "BR Remote Micro L-Head"
sidebar_label: "BR Remote"
description: "Integrate BR Remote Micro L-Head robotic mounts with Cyanview for combined PTZ and camera paint control."
keywords: [BR Remote, Micro L-Head, robotic mount, PTZ]
slug: /integrations/accessories/br-remote-micro-l-head
---

The Micro L Head from Bradley is available directly from Bradley BR Remote, but also under different branding from Marshall, Dreamchip, and Proton.

<img src="/img/Integrations/BRRemote/Bradley-MicroL.png" width="250" />

Our integration currently provides basic support for pan/tilt motion. At this time, there are no controls available for adjusting pan or tilt maximum speed, nor for configuring joystick directions. The head is primarily used for reframing, saving, and recalling positions from the RCP or with an optional USB joystick.

## Supported control

|Control|Notes|
|:-----|:-----|
|**Pan / Tilt**| Control in speed only
|**Positions**| Save and recall positions
|**Home**| Set the "Home" position reference

On the RCP, pan/tilt speed controls are located in the `Lens > PTZF > PTZF` section. Position controls are available in the next tab, and the `Home` function can be accessed via the `ACTION` button within that positions tab.


## Wiring

The head itself is controlled via serial RS485. It is designed for use with mini cameras that are also serial controlled. Either the CI0 or RIO can be used to control both the head and the camera over serial, and to forward control remotely over IP to an RCP or another control device.

<img src="/img/Integrations/BRRemote/brremote-wiring.png" width="600" />

:::warning Independent wiring of camera and head
Even though the Micro L Head includes a slip ring intended for camera control, we do not use it for several reasons. Firstly, the slip ring is not a transparent data link, it only communicates using the Bradley protocol, which prevents our RCP from properly controlling the cameras as we would be limited to the functions Bradley supports, in unidirectional mode. To ensure complete camera control, we must bypass the slip ring entirely. Secondly, the slip ring does not carry video signals, so video cabling must still be routed separately and cannot take advantage of the slip ring. So it is not possible to have a perfectly clean setup anyway.
:::

As explained in the warning above, the camera and head connections are independent, so you need to use two outputs from a CI0 or RIO: one for the head and one for the camera.

We have made the camera cables thinner and longer to provide greater freedom of movement when used with the head. For Marshall, this cable is now the standard cable we supply: `CY-CBL-6P-MARS-02`. For Dreamchip, the reference is `CY-CBL-DREAMCHIP-03`.


## Setup

Add a camera and configure it as usual. Do not assign camera control if you only want to control the head and not combine it with camera controls.

In the camera configuration right column, scroll down to the "Pan and Tilt" section.

* Select the model: `BR remote - Micro L Head`
* Select the interface: e.g., CI0-31-18:2 for port 2

<img src="/img/Integrations/BRRemote/brremote-setup.png" width="400" />

If everything is properly configured, you should see the pan/tilt block icon in the camera control turning green.

<img src="/img/Integrations/BRRemote/brremote-block.png" width="400" />
