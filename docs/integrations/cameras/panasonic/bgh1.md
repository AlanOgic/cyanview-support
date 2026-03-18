---
id: bgh1
title: "Panasonic BGH1 integration"
sidebar_label: "Panasonic BGH1"
description: "Control the Panasonic BGH1 box camera with Cyanview. Full paint control over IP for multi-camera production."
keywords: [Panasonic BGH1, box camera, IP, multi-camera]
slug: /integrations/cameras/panasonic/bgh1
---

<img src="/img/Integrations/Panasonic/BGH1.png" width="400"/>

|Control|BS1H|BGH1
:-----|:-----|:-----|
**Exposure** (Iris, Gain, Shutter)|✔|✔
**Auto exposure / Manual**|✔|✔
**White balance** (R/B and Color temp)|✔|✔
**ATW (Auto tracking white) / AWB / Manual**|✔|✔
**Master Black** |✔|
**Camera Menu Navigation**|✔|
**Record / Stop**|✔|✔
**Autofocus / Manual** (see [Known Limitations](#known-limitations))|✔|✔

## Connection

<img src="/img/Integrations/Panasonic/BGH1-wiring.png" />

The camera is controlled over IP, its LAN port at the back can simply be connected to a PoE+ switch or a regular switch when powered through its AC adapter.


## Configuration

### Camera Configuration

The camera can only be paired with one controller, either the _LUMIXTether_ software or the RCP. It can unfortunately not be controlled by both devices without having to reset the camera settings in between. Once paired with an RCP, you can use any other RCP as they share the same identity. The _LUMIXTether_ software won't work anymore (even when using the correct password), another camera reset is necessary to change pairing to the software.

To configure the camera:
* Reset the camera network settings to remove the current password
  <img src="/img/Integrations/Panasonic/BGH1-network-reset.png" />
* Configure the camera IP address (either *DHCP client* or *Static IP*, follow the [Panasonic manual](https://eww.pavc.panasonic.co.jp/dscoi/DC-BGH1/PP/DC-BGH1_DVQP2276ZB_eng/chapter13_06.htm) for more details)

### Network configuration

If the RCP doesn't have an IP address in the same range as the camera IP, you should add one in the LAN section by following this [guide](/docs/Configuration/ConfIP).

### Adding the camera

* Click on the `+` in the camera block, a new panel will appear on the right
* In `General` Configure a Number and a Name
* Select `Panasonic` for the brand and `DC-BGH1` as the model, both BGH1 and BS1H use the same protocol and model
* You don't need to set any login/password, leave these fields empty and the RCP will assign **abcDE12345** for password. This password can't be used with any other application anyway.


<img src="/img/Integrations/Panasonic/Panasonic-BGH1-setup.png" width="200"/>
<br/>
<img src="/img/Integrations/Panasonic/Panasonic-BGH1-block.png" width="200"/>

## Known limitations

* **Manual focus** shows no values but can be controlled by turning the focus encoder. Focus is controlled by sending steps in one or the other direction. There's no absolute value information available from the protocol so the RCP can't display anything. As such this can only be used for static positions. This can't be used to control focus on dynamic shots on a drone or Polecam. Using an external motor such as Tilta can be used for dynamic focus and zoom control of photo lenses.
