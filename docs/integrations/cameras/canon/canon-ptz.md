---
id: canon-ptz
title: "Canon PTZ cameras"
sidebar_label: "Canon PTZ"
description: "Control Canon PTZ cameras with Cyanview over IP. Pan, tilt, zoom, and paint control for Canon CR-N series."
keywords: [Canon PTZ, CR-N, IP control, pan tilt zoom]
slug: /integrations/cameras/canon/canon-ptz
---

Cyanview controls Canon CR-N and CR-X PTZ cameras over IP using the XC protocol. You get full paint, lens, and pan/tilt control from your RCP.

## Supported models

- CR-N100 — uses the CR-N300 protocol
- CR-N300
- CR-N500
- CR-N700
- CR-X300 — uses the CR-N300 protocol

:::note
The CR-X500 is not an IP camera and cannot be controlled using the XC protocol. It has partial RS-422 support, but demand is very low and no cable is provided for this model.
:::

## Wiring

![Canon CR-N500 wiring diagram](/img/Integrations/Canon/CRN500/CRN500-wiring.png)

## Controls

The RCP controls nearly every camera setting. The XC protocol covers all parameters visible in the camera web interface.

| Control | CR-N300 | CR-N500 | CR-N700 |
| :--- | :--- | :--- | :--- |
| **Exposure** (iris, gain, shutter, ND filter) — manual and auto | ✔ | ✔ | ✔ |
| **White balance** (R/B and color temp) | ✔ | ✔ | ✔ |
| **Black balance** (R/B, master black, black gamma) | ✔ | ✔ | ✔ |
| **Other color settings** (detail, knee, saturation, gamma, color space, denoise) | ✔ | ✔ | ✔ |
| **OETF and color space selection** | ✔ | ✔ | ✔ |
| **Red and green tally** | ✔ | ✔ | ✔ |
| **OSD/Menu** | ✔ | ✔ | ✔ |
| **Pan/tilt** ([from RCP touchscreen](/docs/reference/manuals/rcp/ui/scene) or [USB joystick](/docs/integrations/accessories/anxinshi-ptz-usb-joystick)) | ✔ | ✔ | ✔ |
| **Lens** ([zoom, focus](/docs/reference/manuals/rcp/ui/scene)) | ✔ | ✔ | ✔ |
| **Scene files** ([save/recall](/docs/reference/manuals/rcp/ui/scene)) | ✔ | ✔ | ✔ |

## Camera configuration

The camera ships with DHCP enabled. You can use the DHCP address (which may change) or assign a static IP.

To set a static IP:

1. Connect to your camera's DHCP address — find it by scanning your network or checking your router.
2. On first setup, you are prompted to create a user login:

   ![Canon CR-N500 first-time setup screen](/img/Integrations/Canon/CRN500/Canon-CRN500-setup1.png)

3. Go to **Network** settings and change:
   - `IPv4 Address Settings Method` → `Manual`
   - `IPv4 address` → your desired camera IP, e.g. `10.192.100.100`
   - `Subnet Mask` → your desired mask, e.g. `255.255.0.0`

   ![Canon CR-N500 network setup screen](/img/Integrations/Canon/CRN500/Canon-CRN500-setup2.png)

4. The camera reboots and is ready for control.

5. Set `Shooting Mode` to `M` and disable all `Auto` modes:

   ![Canon CR-N500 exposure settings screen](/img/Integrations/Canon/CRN500/Canon-CRN500-exposure.png)

If your camera IP is outside the `10.192.0.0/16` range, follow the [LAN configuration guide](/docs/guides/networking/ip-configuration#lan-configuration) to adjust your RCP network settings.

:::warning
If any parameter in the camera web interface is set to `Auto` (AWB, auto iris, etc.), the RCP cannot control it. Set each parameter you want to control to Manual.
:::

## Setup

CR-N300 and CR-N500 both use the XC protocol, but they have different lenses and control ranges — select the correct model in the RCP.

Follow the [generic PTZ setup guide](/docs/integrations/generic/ptz) for the full walk-through.

### Canon CR-N300

Select brand `Canon` and model `CR-N300`. A correctly configured camera block looks like this:

![Canon CR-N300 camera block](/img/Integrations/Canon/Canon-CRN300-block.png)

### Canon CR-N500

Select brand `Canon` and model `CR-N500`. A correctly configured camera block looks like this:

![Canon CR-N500 camera block](/img/Integrations/Canon/Canon-CRN500-block.png)

## Troubleshooting

- Set the camera to `Manual` shooting mode.
- Assign a static IP in the range your RCP can reach — see the [LAN configuration guide](/docs/guides/networking/ip-configuration#lan-configuration).
- Check wiring and cables.
- Verify you can reach both the PTZ web UI and the RCP web UI from your computer.
