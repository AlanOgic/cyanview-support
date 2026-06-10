---
id: canon-xc
title: "Canon cine cameras (CXX)"
sidebar_label: "Canon cine (XC)"
description: "Connect Canon cine cameras (C70, C80, C90, C300, C400, C500) to Cyanview for remote camera control over IP."
keywords: [Canon, cine camera, CXX, IP control, remote]
slug: /integrations/cameras/canon/canon-xc
---

Cyanview controls Canon cinema cameras over Ethernet using the XC protocol — a bidirectional IP connection that gives you full paint, lens, and scene file control.

## Supported models

Cyanview supports all Canon cine camera models whose name starts with **C** followed by two characters (C*XX* — e.g. C50, C70, C80, C90), including:

- C70
- C80
- C300 Mk III
- C400
- C500 Mk II
- [XF605](/docs/integrations/cameras/canon/canon-xf605)

:::note
For older models not listed here, use the Remote A protocol (2.5 mm TRS jack). See [Canon Remote A](/docs/integrations/cameras/canon/canon-remote-a).
:::

## Wiring

![Canon XC wiring diagram](/img/Integrations/Canon/XC/XC-wiring.png)

## Camera control

| Control | XC |
| :--- | :--- |
| **Exposure** (iris, gain, shutter, ND filter) | ✔ |
| **White balance** (R/B, color temp) | ✔ |
| **Black balance** (R/B, master black, black gamma) | ✔ |
| **Other settings** (saturation, knee, detail, denoise) | ✔ |
| **Tally** | ✔ |
| **OSD/Menu** | ✔ |
| **Lens** ([zoom, focus](/docs/reference/manuals/rcp/ui/scene)) | ✔ |
| **Scene file** ([save/recall](/docs/reference/manuals/rcp/ui/scene)) | ✔ |

## Camera configuration

You need to:
- Configure a static Ethernet IP
- Enable the XC protocol

Open the wizard at `Network Settings > New Conn. Settings (Wizard)`:

![XC wizard step 1](/img/Integrations/Canon/XC/XC-wizard-step1.jpg)

1. `Select Function` → `XC Protocol`

   ![XC wizard step 2](/img/Integrations/Canon/XC/XC-wizard-step2.jpg)

2. `Communication Settings` → `Create New Comm. Setting`
3. `Network Type` → `Ethernet`
4. `Setting Method` → `Setup with Network Connection`
5. `IP Address Settings (IPV4)` → `Manual Setting`
6. Enter a valid static IP address.

   ![XC wizard step 3](/img/Integrations/Canon/XC/XC-wizard-step3.jpg)

7. `XC Protocol` → `Create New Func. Setting`

   ![XC wizard step 4](/img/Integrations/Canon/XC/XC-wizard-step4.jpg)

8. `Authentication Method` → `No Auth.`

   ![XC wizard step 5](/img/Integrations/Canon/XC/XC-wizard-step5.jpg)

If your camera IP is outside the `10.192.0.0/16` range, follow the [LAN configuration guide](/docs/guides/networking/ip-configuration#lan-configuration) to adjust your RCP network settings.

For full paint control, go to `Custom Picture`, select a `UserXX` profile, edit it, and set `Color Space` to `BT.709 Standard`. This unlocks advanced shading controls such as detail.

![Canon custom picture profile](/img/Integrations/Canon/XC/canon-profile.jpg)

## RCP/RIO configuration

Add a new camera in the [RCP configuration UI](/docs/reference/manuals/rcp/web-ui):

- Enter a custom number, name, and so on.
- Select brand **Canon**.
- Select protocol **XC**.
- Enter the IP address of your camera.

A correctly configured camera block looks like this:

![Canon XC setup view](/img/Integrations/Canon/XC/Canon-XC-setup.png)

Once connected, the block turns green:

![Canon XC connected block](/img/Integrations/Canon/XC/Canon-XC-block.png)

## Troubleshooting

### No paint control

- Check that your camera is not in `ATW` (auto white balance).
- Verify that your `Custom Picture` profile is set to `Unprotect`:
  1. Open the menu (you can do this from the RCP).
  2. Navigate to `CP`.
  3. Click `Edit CP File`.
  4. Ensure `Protect` is set to `Unprotect`.
