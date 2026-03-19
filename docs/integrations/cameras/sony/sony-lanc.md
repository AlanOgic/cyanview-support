---
id: sony-lanc
title: "Sony LANC cameras"
sidebar_label: "Sony LANC"
description: "Connect Sony LANC cameras to Cyanview through a CI0 or RIO. Basic camera control over the LANC protocol."
keywords: [Sony, LANC, serial, CI0, RIO, camera control]
slug: /integrations/cameras/sony/sony-lanc
---

![Sony LANC camera — FS7 Mark II](/img/Integrations/camera/Sony/Sony-Lanc/Sony-Lanc-FS7m2@2x-8.png)

## Supported cameras

LANC remains in use on current Sony cameras for menu navigation and tally — for example, on the Sony ILME-FX6 where other controls are handled over IP. In those cases, a second camera entry is created on the RCP for the LANC controls only.

Supported cameras:
- All Sony camcorders with a LANC connector: PXW-FS5, PXW-FS7, PXW-Z90, etc.
- Sony FX6 (also controllable via [IP](/docs/integrations/cameras/sony/sony-fx6))

A compatibility list for older Sony models is available in the [RM30BP compatibility document](https://pro.sony/s3/2017/11/20131630/RM30BP_compatibility_Rev10_web.pdf).

## Controls

| Control | Sony LANC |
|:--------|:---------:|
| **Exposure** — Iris, Gain, Shutter, ND filter | ✔ |
| **White balance** — AWB/ATW | ✔ |
| **Lens** — Zoom, Focus | ✔ |
| **Record** — REC key press | ✔ |
| **Menu navigation** — menu and fn button presses | ✔ |

:::important
LANC control is unidirectional — it sends key presses only and is relatively slow. The RCP does not display any camera status over LANC.
:::

## Wiring

Connect a LANC camera to **port 2** of the **CI0/RIO +LAN** (local) or **RIO** (remote) using a **[CY-CBL-6P-LANC-03](/docs/resources/cable-catalog#cy-cbl-6p-lanc-03)** cable.

![Sony LANC wiring with CI0 and RCP](/img/Integrations/camera/Sony/Sony-Lanc/Sony-Lanc-CI0@2x-8.png)

![Sony LANC wiring with RIO over internet](/img/Integrations/camera/Sony/Sony-Lanc/Sony-Lanc-Rio-Internet@2x-8.png)

## Camera setup

Map the `dial` to `gain` to allow gain control from the RCP.

![Sony camera dial assignment menu showing gain mapping](/img/Integrations/camera/Sony/Sony-Lanc/image.png)

:::note
Both the Sony RM30BP and the Cyanview gain control act on the dial-mapped function. If the dial is mapped to gain, the Cyanview control adjusts gain. If mapped to variable ND, it adjusts variable ND.
:::

## RCP/RIO setup

1. Connect the camera to **port 2** of the CI0 or RIO using a **[CY-CBL-6P-LANC-03](/docs/resources/cable-catalog#cy-cbl-6p-lanc-03)** cable.
2. Add the camera in the [RCP Configuration UI](/docs/reference/manuals/rcp/web-ui):
   - Select **Sony** for brand.
   - Select **LANC** for model.
   - Select the CI0 or RIO the camera is connected to (only port 2 is shown).

## Going further

### Advanced shading

Combine LANC camera control with a [LUT box or color corrector](/docs/integrations/generic/3d-lut-processor). Pairing with a [VP4](/docs/reference/manuals/vp4-manual) adds multi-matrix and extended shading capabilities (detail, coring, etc.) beyond typical LUT boxes.

### Tally

Not all cameras support tally. Check the [RM30BP compatibility document](https://pro.sony/s3/2017/11/20131630/RM30BP_compatibility_Rev10_web.pdf) for models that support tally in the viewfinder.

For cameras without tally, an unused CI0 or RIO port can output a tally signal using a [CY-CBL-6P-PWR](/docs/resources/cable-catalog#cy-cbl-6p-pwr) cable driving a LED. See the [Tally configuration](/docs/guides/tally/tally/) page.

### External lens control (RIO)

Control iris through the `Lens` block:
- Fujinon or Canon motorized lens — see the [cine lens guide](/docs/integrations/lenses/cine-lens).
- Non-motorized lens — integrate [Tilta motors](/docs/integrations/lenses/tilta).
