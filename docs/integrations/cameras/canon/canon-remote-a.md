---
id: canon-remote-a
title: "Canon Remote A protocol"
sidebar_label: "Canon Remote A"
description: "Integrate Canon cameras using the Remote A protocol with Cyanview for serial-based camera control."
keywords: [Canon, Remote A, serial, camera control, protocol]
slug: /integrations/cameras/canon/canon-remote-a
---

Cyanview controls Canon cinema cameras using the Remote A protocol over a 2.5 mm TRS jack serial connection. This covers older CXX models that do not support XC over IP.

![Canon C200 cinema camera](/img/Integrations/Canon/canon-C200.png)

## Supported models

- C100
- C200
- C300 Mk I and Mk II
- C500 Mk I
- C700
- XF200
- XF205
- XF300
- XF305
- XF705

:::tip
If you have a C70, C300 Mk III, or C500 Mk II, Remote A is supported but the [Canon XC](/docs/integrations/cameras/canon/canon-xc) protocol is preferred — it is IP-based, faster, and bidirectional.
:::

## Wiring

![Canon Remote A wiring diagram](/img/Integrations/Canon/canon-LANC-wiring.png)

- Plug cable [CY-CBL-6P-LANC-03](/docs/resources/cable-catalog#cy-cbl-6p-lanc-03) into your camera.
- Plug the other end into CI0 **port 2** — port 1 is not compatible with Remote A.

## Controls

| Control | Remote A |
| :--- | :--- |
| **Exposure** (iris, gain, shutter, ND filter) | ✔ |
| **White balance** (R/B) | ✔ |
| **Black balance** (R/B, master black, black gamma) | ✔ |
| **Other settings** (knee, detail) | ✔ |
| **OSD/Menu** | ✔ |
| **Lens** ([zoom, focus](/docs/reference/manuals/rcp/ui/scene)) | ✔ |
| **Scene file** ([save/recall](/docs/reference/manuals/rcp/ui/scene)) | ✔ |

:::warning
Remote A is unidirectional — there is no feedback from the camera. The RCP displays estimated values only. Follow the camera setup steps below carefully to keep RCP values and camera values in sync.
:::

## Camera configuration

Refer to the Canon camera [manual](https://www.usa.canon.com/internet/portal/us/home/support/details/cameras/cinema-eos/eos-c200?tab=manuals) and the RCV-100 [manual](https://www.usa.canon.com/internet/portal/us/home/support/details/supplies-accessories/controllers-remotes-wireless-microphones/remote-controller-rc-v100?tab=manuals) for additional context.

Set the following in the camera menu (leaving these at defaults will likely work, but RCP values and camera values will not match):

**Iris:**
- `Iris Increment` → `1/3 stop`
- `Fine Increment` → `On`

![Canon iris menu settings](/img/Integrations/Canon/canon-LANC-menu-iris.png)

**Shutter and gain:**
- `Shutter Mode` → `Speed`
- `Shutter Increment` → `1/4 stop`
- `ISO/Gain` → `Gain`
- `ISO/Gain Extended Range` → `Off`
- `Gain Increment` → `Fine`

![Canon shutter menu settings](/img/Integrations/Canon/canon-LANC-menu-shutter.png)

**Remote mode:**
- `REMOTE Term.` → `RC-V100`

![Canon remote menu settings](/img/Integrations/Canon/canon-LANC-menu-remote.png)

**Color controls** (R/B gain, R/B pedestal, master black):
- `Custom Picture` → any value except `Off`

## Setup

1. Click `+` in the camera block — a new panel appears on the right.
2. Under `General`, set a **Number** and a **Name**.
3. Select brand `Canon` and model `Remote A`.
4. In the interface drop-down, select your CI0 serial port — only port 2 is available for Remote A.

Your settings should look like this (example: CI0-15-13, port 2):

![Canon Remote A setup view](/img/Integrations/Canon/canon-LANC-setup.png)

Your camera block:

![Canon Remote A connected block](/img/Integrations/Canon/canon-LANC-block.png)
