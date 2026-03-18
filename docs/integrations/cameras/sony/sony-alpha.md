---
id: sony-alpha
title: "Sony Alpha mirrorless cameras"
sidebar_label: "Sony Alpha"
description: "Control Sony Alpha mirrorless cameras with Cyanview via USB through a RIO gateway. Supports A7 series and similar models."
keywords: [Sony Alpha, mirrorless, USB, A7, RIO]
slug: /integrations/cameras/sony/sony-alpha
---

<img alt="cyanview-support-Sony-DSLR" src="/img/Integrations/camera/Sony/Sony-DSLR/Sony-A7S-III-ILCE-7SM3.png" width="600" />

## Supported Camera

- **ILX-LR1**
- **ILCE-1** : Alpha 1
- **ILCE-1M2** : Alpha 1 II
- **ILCE-9M2** : Alpha 9 II
- **ILCE-9M3** : Alpha 9 III
- **ILCE-7RM5** : Alpha 7R V
- **ILCE-7RM4** : Alpha 7R IV
- **ILCE-7CR** : Alpha 7CR
- **ILCE-7SM3** : Alpha 7S III
- **ILCE-7M4** : Alpha 7 IV
- **ILCE-7C** : Alpha 7C
- **ILCE-7CM2** : Alpha 7C II
- **ILCE-6700** : Alpha 6700
- **ILME-FX2** : FX2  **\*\* Needs RIO version 25.10.1beta2 or up**
- **ILME-FX3** : FX3 **\*\* FX3A needs RIO version 25.10.1beta2 or up**
- **ILME-FX30** : FX30
- **ZV-E1** : ZV E1
- **ZV-E10M2** : ZV E10 II
- **DSC-RX0M2** : RX0 Mark 2

:::warning[Latest SDK only in 25.10.1beta2 and up]
Integrating latest Sony SDK required some deeper changes and dependencies in the RIO OS, so it is only available in RIO version `25.10.1beta2` and up.
This is required for the newer models like the FX2, FX3A and the newer camcorders like Sony PXW-Z200, PXW-Z300 and HXR-NX800.
:::

These cameras can be controlled directly from the **RCP** or via a **RIO** (local or remote).

<img alt="cyanview-support-Sony-DSLR-RCP" src="/img/Integrations/camera/Sony/Sony-DSLR/Sony-DSLR-RCP@2x-8.png" width="450" />

<img alt="cyanview-support-Sony-DSLR-RIO-RCP-Local" src="/img/Integrations/camera/Sony/Sony-DSLR/SONY-DSLR-RIO-RCP-Local@2x-8.png" width="700" />

<img alt="cyanview-support-Sony-DSLR-RIO-RCP-4G" src="/img/Integrations/camera/Sony/Sony-DSLR/SONY-DSLR-RIO-4G@2x-8.png" width="700" />

## Controls

:::warning Firmware Update
Most of the paint settings are managed through the camera's Picture Profile. Ensure your camera firmware is up to date, as both these settings and the remote control capabilities were implemented in later firmware releases for most cameras.
:::

|Control|Notes| ILCE-9M2, ILCE-7RM4A, ILCE-7RM4, ILCE-7C|Others|
|:-----|:-----|:-----:|:-----:|
**Iris** | Manual and Auto | ✔ | ✔
**ISO**  | Manual and Auto (+ offset).<br/>Only native ISO, not extended ISO | ✔ | ✔
**Shutter** | Manual, AUTO | ✔ | ✔
**White Balance** | R/B mapped to AB-GM and Color temp | ✔ | ✔
**Black Balance** | Master Black only |   | ✔
**Black Gamma** | Range (1-3, Narrow-Wide) and Master Gamma |   | ✔
**Detail** | Level, Crisp, Level Dep, H/Ratio and Mix |   | ✔
**Knee** | Point and Slope, ON/OFF |   | ✔
**Sat and Hue** |  |   | ✔
**Color space** | Movie, Still, SCinetone, Cinema, Pro, ITU709, BlackWhite, SGamut3Cine, SGamut3   |   | ✔
**OETF** | Movie, Still, SCinetone, Cine1, Cine2, Cine3, Cine4, ITU709, SLog3, HLG, HLG1, HLG2, HLG3  |   | ✔
**Multi Matrix** | Hue and Saturation on 6 vectors : MAGENTA, BLUE, CYAN, GREEN, YELLOW, RED |   | ✔
**REC** | REC on/off and status | ✔ | ✔


**Tally** is not present on the camera, but it can be added by via a RIO port as Tally output using a <a src="/docs/Accessories/CableCatalog#cy-cbl-6p-pwr">cy-cbl-6p-pwr</a>. See <a href="/docs/Configuration/Tally">Tally</a> configuration page.


<img src="/img/Integrations/Sony/Alpha/A7CR/A7CR.gif"/>

## Setup

Ensure your Sony Alpha is updated in the latest version.

Also ensure your RCP/RIO are also updated to the latest version (should be `24.2.1` minimum)


**Connect** camera to RIO or RCP using the USB cable.


**Add the Camera** to the RCP configuration via the <a src="/docs/Manuals/RCP/ConfWebUI">RCP Configuration UI</a>.
- Select **Sony** brand.
- Select **Alpha** model.

The setup should look like this:

<img src="/img/Integrations/Sony/Alpha/A7CR/sony-alpha-setup.png"/>

And if everything is OK, the block should be green:

<img src="/img/Integrations/Sony/Alpha/A7CR/sony-alpha-block.png"/>

On your camera:
* Once plugged in : `-PC-` appears in white
* Once controlled : `-PC-` changed to orange

## Troubleshooting

### Camera is RED

Check your cables, ensure to use a USB DATA capable cable (some USB cable are just for power).

Ensure to update your RIO and/or RCP to the latest version (even beta/rc version) using a SWU file as the Sony protocol for alpha is at OS level (not app). Try the latest beta/rc version.

:::note
The Sony mirrorless protocol changes with Sony updates and requires a RIO/RCP sync with the Sony protocol to be compatible.
:::

### FX3 is not controllable

Ensure to update your FX3 to the latest version (`3.00`) and your RCP/RIO to the latest version (`23.8.1`). The protocol evolve with the camera firmware and the RCP/RIO needs to be updated to be compatible (and vice-versa).

### White Balance not controllable

Ensure to change ATW to `Off` in your RCP `Camera > WB > ATW`.

Your camera white balance needs to be in manual/color temp.

### Some parameters are displayed but don't change

Depending on the mode, some information will either be fixed or auto, but in both cases, read-only.
Change mode (to M, S&Q, etc.) or check next point.

### Unstable link

* Check your wiring, some USB cables only provide power and no data
* Check your mirrorless settings (disable power over USB)
* Only one device is able to control a Sony Alpha:
    - check that you don't use the micro USB with a DJI gimbals or similar
    - Ensure to disable Wi-Fi control
* Ensure to upgrade your RIO/RCP to the latest version <a href="/docs/Manuals/RCP/ProductUpdate#system-update">using a SWU</a> (not only an app upgrade from admin page) as the Sony protocol for alpha is at OS level.

## From the field

This sections contains some example of setup from the field.
This is not an exhaustive list, but it can help you to setup your own configuration.

You can find a full breakdown of this kind of setup <a href="/docs/Workflows/SonyMirrorlessGimbal">here</a>.

### FX30 with Fujinon 18-55 mm

Andy from 4ACrew using its Rocky gear with Cyanview:
* FX30 camera
* Fujinon 18-55 mm lens
* RIO with ZTE 4G USB stick
* VP4
* RCP

<img alt="Cyanview FX30 with Fujinon 18-55 RIO 4G control" src="/img/Workflows/FX30-fujinon-18-55.png" width="600" />

### FX3 with Sony FE 16-35 mm F2.8 GM

Fabry (freelance) using its Cyanview kit:
* FX3 camera
* Sony FE 16-35 mm F2.8 GM lens
* RIO with Huawei 4G USB stick
* VP4
* RCP

<img alt="Cyanview FX3 with Sony FE 16-35mm F2.8 GM RIO 4G control" src="/img/Workflows/FX3-Sony-Emount.jpeg" width="600" />

### FX3 with RIO 4G using RUT240

* FX3 camera
* Sony FE PZ 16-35 mm F4 G lens
* RIO with Teltonika RUT240 4G router[^1]
* Cyanview tally light[^2]
* DJI RS3 pro gimbal
* CV-HD Pro800 for video transmission
* VP4
* RCP

<img alt="Cyanview FX3 RIO 4G RUT240" src="/img/Workflows/FX3-DJIRS3-RIO-RUT240.png" width="600" />

[^1]: with external antenna, it makes the connection more stable

[^2]: tally input from ATEM using RCP, tally output using tally module on RIO port 1
