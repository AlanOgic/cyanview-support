---
id: sony-venice
title: "Sony Venice integration"
sidebar_label: "Sony Venice"
description: "Integrate the Sony Venice and Venice 2 cinema cameras with Cyanview for full remote paint and lens control."
keywords: [Sony Venice, Venice 2, cinema, remote control]
slug: /integrations/cameras/sony/sony-venice
---

# Sony Venice

<img src="/img/Integrations/Sony/Sony-Venice/Sony-Venice.png" width="500" />


## Compatible models

* Sony Venice 1
* Sony Venice 2

## Overview

This video show the RCP controlling the Sony Venice in IP mode:

<video poster="/img/Integrations/Sony/Sony-Venice/Venice-handson.png" muted controls>
    <source src="/img/Integrations/Sony/Sony-Venice/Venice-handson.mp4"/>
</video>


## Controls

We have 2 protocols:
* Sony Venice Serial : typical Sony Venice multicam workflow.
* Sony Venice IP : if you're working in SLog and don't want/need the camera control using the `RCP` paint mode.

|Control|Sony Venice IP|Sony Venice serial
:-----|:-----:|:-----:|
**Exposure** (Iris, Gain, Shutter[^2], ND filter[^3])|✔[^1]|✔[^1.1]
**White balance** (Color temp and tint)|✔[^4]|✔[^4.1]|
**Black balance** (R/B and Master)||✔|
**Avanced shading (Flare, Detail, Matrix, Multi Matrix)**||✔[^5]|
**REC** (start/stop)|✔|✔|
**Other controls** (ISO base[^6], APR, pattern, flip horizontal/vertical, replay[^7], User Keys[^8], TC)|✔|
**Tally**||✔[^9]
**Lens** <a href="/docs/Manuals/RCP/RCPUI/RCPUIScene">(zoom, focus)</a>[^10]|✔|
**Scene file** : <a href="/docs/Manuals/RCP/RCPUI/RCPUIScene">save/recall</a>|✔|✔

[^1]: Venice IP : gain is expressed in ISO, only affects SDI output. Base ISO (800 or 3200) affects the ISO range and the (fixed) REC ISO.

[^1.1]: Venice Serial : gain is expressed in dB, steps: 3dB

[^2]: shutter can be displayed/controlled in angle/speed. ECS is also available.

[^3]: ND are presets only.

[^4]: color temps and tint and AWB.

[^4.1]: R/B and color temp are available in Venice serial, but not the tint (only affects the color temp).

[^5]: Detail can be changed and toggled on/off. Matrix and Multi Matrix can be changed and toggled.

[^6]: base ISO only in Venice IP

[^7]: to replay, in `Camera > User Keys > Custom`, switch to `Clips`. Then in `Record > Replay`, you can replay your last clip.

[^8]: user keys are accessible on RCP `Camera > User Keys`, in `User Keys` and `Custom`. But you can only call them, you need to assign them in the camera body in `Project > Assignable Button`

[^9]: Venice Serial : only RED tally, only if not recording (as the REC status is used to display the tally)

[^10]: Venice IP : zoom/focus can be displayed/controlled in speed (position is only displayed).


## Wiring

We can control the camera in two modes:
* Sony Venice IP : we control the camera over IP (works best for SLog based workflow, RCP/paint mode is disabled)
* Sony Venice Serial : we control the camera over remote (8 pins) port, when using the RCP Paint mode in the camera.

We can control the camera locally (LAN) using just the RCP for IP, adding a CI0 for serial.

And we can control the camera wirelessly (4G, RF, Wi-Fi) using a RIO for IP and serial (Steadycam, robotics, etc.).

### Sony Venice IP (LAN)

<img src="/img/Integrations/Sony/Sony-Venice/Sony-Venice-IP-wiring.png" width="900" />

* RCP powered by PoE or 12V PSU
* RCP talks directly to camera over IP

:::note
Can work through simple Ethernet switch or fiber like Ereca CAM Racer, etc.
:::

### Sony Venice Serial (LAN)

<img src="/img/Integrations/Sony/Sony-Venice/Sony-Venice-8P-LAN-wiring.png" width="900" />

* RCP powered by PoE or 12V PSU
* CI0 or RIO/RIO-live powered by camera using the cable (no D-TAP required)
* cable : CY-CBL-6P-SONY-8P-03 (controls the camera and power the CI0/RIO)

:::note
Can work through simple Ethernet switch or fiber like Ereca CAM Racer, etc.

Some people prefer to keep the CI0/RIO-live on camera side and then it's simply ethernet between the RCP and CI0/RIO-live.


Some people will prefer to keep the CI0/RIO-live on the RCP side and connect the serial through Ereca (pro: clean setup on camera side, cons: you lose the flexibility of the RIO-live with external motors/lens control, etc.)
:::

### Sony Venice IP (Wireless)

<img src="/img/Integrations/Sony/Sony-Venice/Sony-Venice-IP-wireless.png" width="900" />

* RCP powered by PoE or 12V PSU, connected to internet
* RIO powered by D-TAP
* RIO connected to camera using ethernet
* RCP talks to RIO over internet (using 4G, Rf, Wi-Fi, etc.)

:::note
Video needs to be HF, we just do the telemetry.
:::

### Sony Venice Serial (Wireless)

<img src="/img/Integrations/Sony/Sony-Venice/Sony-Venice-8P-wireless.png" width="900" />


* RCP powered by PoE or 12V PSU, connected to internet
* RIO powered by D-TAP
* RIO connected to camera using the cable CY-CBL-6P-SONY-8P-03
* RCP talks to RIO over internet (using 4G, Rf, Wi-Fi, etc.)

:::note
Video needs to be HF, we just do the telemetry.
:::

## Camera setup

### Venice IP

* Setup IP/mask, in `Technical > Network > Setting`:
    - set `Setting` to `LAN`
    - in `LAN` submenu:
        - set `DHCP` to `Off`
        - set `IP Address` to desired cam IP (here `10.192.10.100`)
        - set `Subnet Mask` to desired cam subnet (here `255.255.0.0`)
* Setup login/password in `Technical > Authentication` (`Usernam` and `Password`)
* In `Technical > Special Configuration`: set `RM / RCP Paint Con` to `Off`

### Venice Serial

In `Technical > Special Configuration`: set `RM / RCP Paint Con` to `On`

## RCP setup

Set up a new camera via the <a href="/docs/Manuals/RCP/ConfWebUI">RCP Configuration UI</a>:

### Venice IP

- Enter a custom number, name, etc.
- Select **Sony** brand
- Select **Sony Venice(IP)** for the protocol
- Enter the IP of your camera
- Enter the login/password of your camera

<img src="/img/Integrations/Sony/Sony-Venice/Venice-IP-block.png" width="300" />
<br/>
<img src="/img/Integrations/Sony/Sony-Venice/Venice-IP-setup.png" width="300" />


### Venice Serial

- Enter a custom number, name, etc.
- Select **Sony** brand
- Select **Sony Venice(Serial)** for the protocol
- Select the CI0/RIO port on which your camera is plugged

<img src="/img/Integrations/Sony/Sony-Venice/Venice-Serial-block.png" width="300" />
<br/>
<img src="/img/Integrations/Sony/Sony-Venice/Venice-Serial-setup.png" width="300" />


## RCP operation

### Overview

<img src="/img/Integrations/Sony/Sony-Venice/RCP/F29.BMP"/>

On the exposure and joystick, you have access to iris, ISO, shutter.

### Assignables

#### Keys

You can customize the 10 buttons on top of the RCP main screen.

This is accessible through : `MENU > SYSTEM > ASSIGN. > Set Buttons`.

By default, keys 1-5 are not assigned to anything : `NA`.

You can assign them to something more meaningful like this:

<img src="/img/Integrations/Sony/Sony-Venice/RCP/F40.BMP"/>

So you have a quick access to:

* Lock button is now a shortcut to REC menus (and replay, etc.) and the LED reflects the REC status.

<img src="/img/Integrations/Sony/Sony-Venice/RCP/F25.BMP"/>

* cam assignables buttons (1-4 and A-C, Home and Clips)

<img src="/img/Integrations/Sony/Sony-Venice/RCP/F35.BMP"/>

<img src="/img/Integrations/Sony/Sony-Venice/RCP/F36.BMP"/>


Base ISO from the gain view:

<img src="/img/Integrations/Sony/Sony-Venice/RCP/F37.BMP"/>


Shutter Angle/speed from the shutter view:

<img src="/img/Integrations/Sony/Sony-Venice/RCP/F38.BMP"/>

Test patterns from the test view:

<img src="/img/Integrations/Sony/Sony-Venice/RCP/F39.BMP"/>




#### Encoders

You can customize the 4 encoders below the RCP main screen.


This is accessible through : `MENU > SYSTEM > ASSIGN. > Encoders`.

By default, the encoders are assigned to gamma, saturation, detail, ND.

<img src="/img/Integrations/Sony/Sony-Venice/RCP/F26.BMP"/>

So it looks like this on the main screen:

<img src="/img/Integrations/Sony/Sony-Venice/RCP/F27.BMP"/>

For cine-style cams like Venice, it's better to assign them to color temp, tint, ND.

<img src="/img/Integrations/Sony/Sony-Venice/RCP/F28.BMP"/>

So it looks like this on the main screen:

<img src="/img/Integrations/Sony/Sony-Venice/RCP/F29.BMP"/>


