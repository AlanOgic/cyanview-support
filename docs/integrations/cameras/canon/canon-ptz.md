---
id: canon-ptz
title: "Canon PTZ cameras"
sidebar_label: "Canon PTZ"
description: "Control Canon PTZ cameras with Cyanview over IP. Pan, tilt, zoom, and paint control for Canon CR-N series."
keywords: [Canon PTZ, CR-N, IP control, pan tilt zoom]
slug: /integrations/cameras/canon/canon-ptz
---

# Canon CR-N/X PTZ cameras

## Supported models

This guide covers the setup for:
* CR-N100 — currently using the CR-N300 protocol
* CR-N300
* CR-N500
* CR-N700
* CR-X300 — currently using the CR-N300 protocol

:::note
The CR-X500 is not an IP camera and can't be controlled using the XC protocol. It is partially supported using RS422 but the demand being very low, we don't provide any cable for this camera.
:::

## Wiring

<img src="/img/Integrations/Canon/CRN500/CRN500-wiring.png" width="900"/>

## Controls

The RCP can be used to control nearly every settings of the cameras as the XC protocol covers all the parameters that are visible on the webpage.

|Control|CR-N300|CR-N500|CR-N700
:-----|:-----|:-----|:-----|
**Exposure** (Iris, Gain, Shutter, ND filter) manual and auto|✔|✔|✔
**White balance** (R/B and Color temp)|✔|✔|✔
**Black balance** (R/B, master black and black gamma)|✔|✔|✔
**Other color settings** (detail, knee, saturation, gamma, color space, denoise)|✔|✔|✔
**OETF and color space selection**|✔|✔|✔
**Red and green tally**|✔|✔|✔
**OSD/Menu**|✔|✔|✔
**Pan/Tilt** (<a href="/docs/reference/manuals/rcp/ui/scene">from RCP touchscreen</a> or <a href="/docs/integrations/accessories/anxinshi-ptz-usb-joystick">USB joystick</a>)|✔|✔|✔
**Lens** <a href="/docs/reference/manuals/rcp/ui/scene">(zoom, focus)</a>|✔|✔|✔
**Scene files** : <a href="/docs/reference/manuals/rcp/ui/scene">save/recall</a>|✔|✔|✔

## Camera Configuration

The camera by default is on DHCP.
You can either use that IP (which is potentially changing).
Or you can set up a static IP:

* Connect to your camera DHCP address (can be found by scanning network or in your internet router)
* If this is the first setup, you will be asked to set up a user/login:

<img src="/img/Integrations/Canon/CRN500/Canon-CRN500-setup1.png" width="600"/>

* And then set up the Network, change:
   - `IPv4 Address Settings Method` to `Manual`
   - `IPv4 address` to the desired camera IP: `10.192.100.100` for example
   - `Subnet Mask` to the desired camera mask: `255.255.0.0` for example

<img src="/img/Integrations/Canon/CRN500/Canon-CRN500-setup2.png" width="600"/>

* After that, the camera will reboot and be controllable

* Ensure to set up `Shooting Mode` to `M` and that all `Auto` modes are disabled (optional):

<img src="/img/Integrations/Canon/CRN500/Canon-CRN500-exposure.png" width="900"/>

If your camera IP is not in the range `10.192.0.0/16`, you can follow this <a href="/docs/guides/networking/ip-configuration#lan-configuration">guide</a> to set up the RCP to be able to reach the camera.

:::note
If you have anything in the camera web interface set up in `Auto` (AWB, Auto Iris, etc.), the RCP will be unable to control it. Ensure to set up the desired parameters to Manual to be controlled by the RCP.
:::


## Setup

While Canon CR-N300 and CR-N500 are both using XC protocol, but they have different lenses, etc. So ensure to select the correct model in the RCP to have the adequate control range.

You can follow the generic guide <a href="/docs/integrations/generic/ptz">here</a>

### Canon CR-N300

Select brand `Canon` and model `CR-N300`.

If everything is set up correctly, you should see the following:

<img src="/img/Integrations/Canon//Canon-CRN300-block.png" width="400"/>

### Canon CR-N500

Select brand `Canon` and model `CR-N500`.

If everything is set up correctly, you should see the following:


<img src="/img/Integrations/Canon//Canon-CRN500-block.png" width="400"/>


## Troubleshooting

Check the following:
* Ensure to set up the camera to `Manual` mode
* Ensure the camera IP is static and in the range of the RCP (see <a href="/docs/guides/networking/ip-configuration#lan-configuration">guide</a>)
* Check wiring, cables, etc.
* Check from your computer if you can reach the PTZ web UI and the RCP web UI.
