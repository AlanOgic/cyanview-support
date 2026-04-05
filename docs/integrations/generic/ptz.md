---
id: ptz
title: "PTZ camera integration"
sidebar_label: "PTZ cameras"
description: "Control pan-tilt-zoom cameras with Cyanview. Set up PTZ joystick control, presets, and speed curves over IP or serial connections."
keywords: [PTZ, pan tilt zoom, joystick, presets, VISCA]
slug: /integrations/generic/ptz
---

Connect and control PTZ cameras from your Cyanview RCP — exposure, white balance, black balance, advanced shading, and full pan/tilt/zoom/focus control.

![Panasonic AW-UE150](/img/Integrations/Panasonic/AW-UE150.png)

## Compatible PTZ cameras

If your model is not listed, try a `similar` or `close` model. If that doesn't work, [contact Cyanview support](mailto:support@cyanview.com).

### BirdDog

* BirdDog P100
* BirdDog P200
* BirdDog P400
* BirdDog P4K
* BirdDog X1
* BirdDog X4
* BirdDog X5

### Canon

* CR-N300
* CR-N500

### Panasonic

AW-HE series:
* AW-HE40
* AW-HE42
* AW-HE50
* AW-HE60
* AW-HE70
* AW-HE120
* AW-HE130

AW-UE series:
* AW-UE70
* AW-UE100
* AW-UE150

AW-HR series:
* AW-HR140 (use `AW-HE130` model)

### Sony

* ILME-FR7
* BRC-X1000
* BRC-X400
* BRC-H900
* BRC-H800

### Z Cam

* P2-R1

## Controls

You can control:
* Exposure
* White balance
* Black balance
* Advanced shading (multi matrix, etc.) — based on camera compatibility
* Pan/Tilt/Zoom/Focus

For a full list of parameters, check whether your model has a dedicated integration guide.

## Wiring

Compatible Cyanview devices: RCP, RIO +WAN, RIO +LAN.

If your RCP/RIO does not have an IP address in the same range as the camera, add one in the LAN section by following the [IP configuration guide](/docs/guides/networking/ip-configuration).

![PTZ wiring diagram](/img/Integrations/Generic/ptz-wiring.png)

## Setup

The example below uses a Panasonic AW-UE150, but the setup is the same for all PTZ cameras. You can run multiple PTZ from different brands on the same RCP without any issue.

![Panasonic PTZ setup](/img/Integrations/Panasonic/panasonic-ptz-setup.png)

1. Click `+` in the camera block — a new panel appears on the right.
2. Under `General`, set a number and a name.
3. Select the brand (`Panasonic`).
4. Select the model (`AW-UE150`).
5. Enter the IP address of your PTZ.

When connected successfully, the block turns green:

![Panasonic PTZ block — green](/img/Integrations/Panasonic/panasonic-ptz-block.png)

## Pan/Tilt control

Once the camera is configured, you have several control options:

* **Cyanview RCP** (shading) combined with a Sony joystick panel (`rm-ip500`)
* **Cyanview RCP** (shading + pan/tilt/zoom/focus) via touchscreen — see the [scene UI reference](/docs/reference/manuals/rcp/ui/scene)
* **Cyanview RCP** (shading + pan/tilt/zoom/focus) via USB joystick — see the [Anxinshi PTZ USB joystick guide](/docs/integrations/accessories/anxinshi-ptz-usb-joystick)

## Remote production

Even when PTZ control runs over IP, combining a PTZ with a [RIO](/docs/reference/manuals/rio-manual) (with AVIWEST, for example) is a useful option for remote productions.

You can also run local shading from an RCP alongside remote shading from anywhere in the world using a second RCP. See the [REMI guide](/docs/guides/networking/remi) for details.
