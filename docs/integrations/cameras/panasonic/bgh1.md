---
id: bgh1
title: "Panasonic BGH1 integration"
sidebar_label: "Panasonic BGH1"
description: "Control the Panasonic BGH1 box camera with Cyanview. Full paint control over IP for multi-camera production."
keywords: [Panasonic BGH1, box camera, IP, multi-camera]
slug: /integrations/cameras/panasonic/bgh1
---

![Panasonic BGH1](/img/Integrations/Panasonic/BGH1.png)

Control the Panasonic DC-BGH1 or BS1H box camera over IP from your RCP. Both models use the same protocol.

| Control | BS1H | BGH1 |
| :------ | :---: | :---: |
| Exposure (Iris, Gain, Shutter) | ✔ | ✔ |
| Auto exposure / Manual | ✔ | ✔ |
| White balance (R/B and color temp) | ✔ | ✔ |
| ATW / AWB / Manual | ✔ | ✔ |
| Master Black | ✔ | |
| Camera menu navigation | ✔ | |
| Record / Stop | ✔ | ✔ |
| Autofocus / Manual (see [Known limitations](#known-limitations)) | ✔ | ✔ |

## Connection

![BGH1 wiring diagram](/img/Integrations/Panasonic/BGH1-wiring.png)

The camera is controlled over IP. Connect its LAN port to a PoE+ switch, or to a regular switch when powered through its AC adapter.

## Configuration

### Camera configuration

The camera pairs with only one controller at a time — either the _LUMIXTether_ software or an RCP. You cannot use both without resetting the camera settings in between. Once paired with an RCP, any other RCP works without re-pairing. To switch back to _LUMIXTether_, you must reset the camera again.

To configure the camera:

1. Reset the camera network settings to remove the current password.

   ![BGH1 network reset](/img/Integrations/Panasonic/BGH1-network-reset.png)

2. Configure the camera IP address (DHCP client or static IP). See the [Panasonic manual](https://eww.pavc.panasonic.co.jp/dscoi/DC-BGH1/PP/DC-BGH1_DVQP2276ZB_eng/chapter13_06.htm) for details.

### Network configuration

If the RCP does not have an IP address in the same range as the camera, add one in the LAN section by following the [IP configuration guide](/docs/guides/networking/ip-configuration).

### Adding the camera

1. Click `+` in the camera block — a new panel appears on the right.
2. Under `General`, set a number and a name.
3. Select `Panasonic` for the brand and `DC-BGH1` as the model (both BGH1 and BS1H use the same protocol and model).
4. Leave the login and password fields empty. The RCP automatically assigns the password **abcDE12345**, which cannot be used with any other application.

![BGH1 setup configuration](/img/Integrations/Panasonic/Panasonic-BGH1-setup.png)

![BGH1 camera block](/img/Integrations/Panasonic/Panasonic-BGH1-block.png)

## Known limitations

**Manual focus** shows no values but responds to the focus encoder. Focus is controlled by sending incremental steps — there is no absolute position available from the protocol, so the RCP cannot display a value. This makes manual focus suitable only for static positions. For dynamic shots (drone, Polecam), use an external motor such as Tilta for focus and zoom control of photo lenses.
