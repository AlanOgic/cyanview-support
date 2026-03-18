---
id: sony-lanc
title: "Sony LANC cameras"
sidebar_label: "Sony LANC"
description: "Connect Sony LANC cameras to Cyanview through a CI0 or RIO. Basic camera control over the LANC protocol."
keywords: [Sony, LANC, serial, CI0, RIO, camera control]
slug: /integrations/cameras/sony/sony-lanc
---

<img alt="cyanview-support-Sony-Lanc" src="/img/Integrations/camera/Sony/Sony-Lanc/Sony-Lanc-FS7m2@2x-8.png" width="900" />

## Supported Cameras

Any new Sony camera still has the LANC connector and is sometimes the only way to get access to menu navigation and tally like for the Sony ILME-FX6. So LANC is still in use today for these settings only, while other controls are handled using other protocols. A second camera is created on the RCP for the LANC controls only.

* All Sony camcorders with LANC connector: PXW-FS5, PXW-FS7, PXW-Z90, etc.
* Sony FX6 (this camera can also be controlled via <a href="/docs/Integrations/Sony/SonyFX6">IP</a>)

A list of compatible older **Sony** cameras is available on Sony's website: [RM30BP compatibility](https://pro.sony/s3/2017/11/20131630/RM30BP_compatibility_Rev10_web.pdf).


## Controls

|Control|Sony LANC
:-----|:-----:|
**Exposure** : Iris, Gain, Shutter and ND Filter|✔
**White balance** : AWB/ATW|✔
**Lens** : Zoom, Focus|✔
**Record** : REC key press|✔
**Menu Navigation** : menu and fn button key presses|✔

:::important
The control is unidirectional, just sending key presses, and rather slow. So the RCP won't display any camera status.
:::


## Wiring

**Lanc camera** can be controlled directly via **port 2** of the **CI0/RIO-live** (local) or **RIO** (remote).

<img alt="cyanview-support-Sony-Lanc-CI0-RCP" src="/img/Integrations/camera/Sony/Sony-Lanc/Sony-Lanc-CI0@2x-8.png" width="900" />

<img alt="cyanview-support-Sony-Lanc-RIO-RCP" src="/img/Integrations/camera/Sony/Sony-Lanc/Sony-Lanc-Rio-Internet@2x-8.png" width="900" />

**Connection** is done with a **[CY-CBL-6P-LANC-03](/docs/Accessories/CableCatalog#cy-cbl-6p-lanc-03)** LANC cable.


## Camera Setup

Map the `dial` to `gain` to allow **gain** control from the RCP.

<img alt="cyanview-support-Sony-Lanc-Assign-Buttons" src="/img/Integrations/camera/Sony/Sony-Lanc/image.png" width="500" />

:::note
Both the Sony RM30BP and the Cyanview gain control acts on the dial mapped function.

So if you mapped the dial to gain, the Cyanview gain control will act on the gain.
If you mapped the dial to variable ND, the Cyanview gain control will act on the variable ND.
:::


## RCP/RIO setup

**Connect** the camera to the **port 2** of the **CI0** / **RIO** with a **<a href="/docs/Accessories/CableCatalog#cy-cbl-6p-lanc-03">CY-CBL-6P-LANC-03</a>** cable.
- **Add the Camera** to the RCP configuration via the <a href="/docs/Manuals/RCP/ConfWebUI">RCP Configuration UI</a>.
   - Select **Sony** brand.
   - Select **LANC** model.
   - Select the **CI0** / **RIO** the camera is connected to (only **port 2** showing).


## Going further

### Advance shading

You can combine camera control with a <a href="/docs/Integrations/Generic/3DLUTProcessor">LUT box / color corrector</a>.

Coupling your setup with a <a href="/docs/Manuals/VP4Manual">VP4</a> would allow **multi-matrix** and **extended shading** capabilities compared to typical LUT box or color corrector (detail, coring, etc.).

### Tally

**Tally** is not present on all camera, some models supports tally (in the viewfinder), some don't.

Check <a href="https://pro.sony/s3/2017/11/20131630/RM30BP_compatibility_Rev10_web.pdf">RM30BP</a> for compatible models (Search for tally).

For the camera that does not support **Tally**, **CI0** / **RIO** unused port can act as a **Tally** output using a <a href="/docs/Accessories/CableCatalog#cy-cbl-6p-pwr">cy-cbl-6p-pwr</a> driving a **LED**. See <a href="/docs/Configuration/Tally/">Tally</a> configuration page.

### External Lens Control (RIO)

But you can control the iris with the `Lens` block:
* You have a Fuji or Canon motorised lens, follow this <a href="/docs/Integrations/Lens/CineLens">guide</a>
* You have a non motorised lens, you can integrate <a href="/docs/Integrations/Lens/Tilta">Tilta motors</a>
