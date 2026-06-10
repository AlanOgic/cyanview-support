---
id: sony-alpha
title: "Sony Alpha mirrorless cameras"
sidebar_label: "Sony Alpha"
description: "Control Sony Alpha mirrorless cameras with Cyanview via USB through a RIO gateway. Supports A7 series and similar models."
keywords: [Sony Alpha, mirrorless, USB, A7, RIO]
slug: /integrations/cameras/sony/sony-alpha
---

![Sony Alpha 7S III ILCE-7SM3](/img/Integrations/camera/Sony/Sony-DSLR/Sony-A7S-III-ILCE-7SM3.png)

Connect your Sony Alpha mirrorless camera to a Cyanview RCP or RIO over USB for full remote control of paint, exposure, and recording parameters.

## Supported cameras

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
- **ILME-FX2** : FX2 — requires RIO version 25.10.1beta2 or later
- **ILME-FX3** : FX3 — FX3A requires RIO version 25.10.1beta2 or later
- **ILME-FX30** : FX30
- **ZV-E1** : ZV-E1
- **ZV-E10M2** : ZV-E10 II
- **DSC-RX0M2** : RX0 Mark II

:::warning[Latest Sony SDK requires RIO 25.10.1beta2 or later]
Integrating the latest Sony SDK required deeper changes at the RIO OS level. RIO version `25.10.1beta2` or later is required for newer models including the FX2, FX3A, and camcorders such as the Sony PXW-Z200, PXW-Z300, and HXR-NX800.
:::

You can control these cameras directly from the **RCP** or through a **RIO** (local or remote).

![Sony Alpha controlled from RCP](/img/Integrations/camera/Sony/Sony-DSLR/Sony-DSLR-RCP@2x-8.png)

![Sony Alpha controlled via RIO and RCP locally](/img/Integrations/camera/Sony/Sony-DSLR/SONY-DSLR-RIO-RCP-Local@2x-8.png)

![Sony Alpha controlled via RIO over 4G](/img/Integrations/camera/Sony/Sony-DSLR/SONY-DSLR-RIO-4G@2x-8.png)

## Controls

:::warning[Keep camera firmware up to date]
Most paint settings are managed through the camera's Picture Profile. Both these settings and remote control capabilities were introduced in later firmware releases for most models. Update your camera firmware before use.
:::

:::info
Keep your RCP firmware up to date as well. Sony refreshes their SDK regularly (typically around 4 times per year), and compatibility can depend on it.
:::

| Control | Notes | ILCE-9M2, ILCE-7RM4A, ILCE-7RM4, ILCE-7C | Others |
|:--------|:------|:-----------------------------------------:|:------:|
| **Iris** | Manual and Auto | ✔ | ✔ |
| **ISO** | Manual and Auto (+ offset). Native ISO only, not extended ISO | ✔ | ✔ |
| **Shutter** | Manual and Auto | ✔ | ✔ |
| **White balance** | R/B mapped to AB-GM and color temp | ✔ | ✔ |
| **Black balance** | Master black only | | ✔ |
| **Black gamma** | Range (1–3, Narrow–Wide) and master gamma | | ✔ |
| **Detail** | Level, Crisp, Level Dep, H/Ratio, and Mix | | ✔ |
| **Knee** | Point and Slope, On/Off | | ✔ |
| **Saturation and Hue** | | | ✔ |
| **Color space** | Movie, Still, S-Cinetone, Cinema, Pro, ITU709, Black & White, S-Gamut3.Cine, S-Gamut3 | | ✔ |
| **OETF** | Movie, Still, S-Cinetone, Cine1, Cine2, Cine3, Cine4, ITU709, S-Log3, HLG, HLG1, HLG2, HLG3 | | ✔ |
| **Multi matrix** | Hue and saturation on 6 vectors: Magenta, Blue, Cyan, Green, Yellow, Red | | ✔ |
| **REC** | Record on/off and status | ✔ | ✔ |

Sony Alpha cameras have no built-in tally. You can add tally output through a RIO port using a [cy-cbl-6p-pwr](/docs/resources/cable-catalog#cy-cbl-6p-pwr) cable. See the [Tally](/docs/guides/tally/tally) configuration guide.

![Sony Alpha 7CR camera controls animation](/img/Integrations/Sony/Alpha/A7CR/A7CR.gif)

## Setup

1. Update your Sony Alpha camera to the latest firmware.
2. Update your RCP and RIO to the latest version (`23.8.1` or later for FX3 control; `25.10.1beta2` or later for the FX2, FX3A, and newer camcorders).
3. Connect the camera to the RIO or RCP using a USB data cable.
4. Open the [RCP Configuration UI](/docs/reference/manuals/rcp/web-ui) and add the camera:
   - Select **Sony** as the brand.
   - Select **Alpha** as the model.

The configuration block should look like this:

![Sony Alpha setup in RCP Configuration UI](/img/Integrations/Sony/Alpha/A7CR/sony-alpha-setup.png)

When the connection is established, the block turns green:

![Sony Alpha connection block showing green status](/img/Integrations/Sony/Alpha/A7CR/sony-alpha-block.png)

Some models (e.g. A7S III) display a menu option that must be accepted to allow USB control. Look for **PC Remote Function** or similar.

**Set the Picture Profile:** Most image settings (e.g. black level) are part of the camera's **Picture Profile** and must be configured manually on the camera. The menu path varies by model. A typical path is:

`MENU > (Exposure/Color) > [Color/Tone] > [Picture Profile]` — select the profile you want to edit.

On the camera display, `-PC-` appears when the USB connection is active.

:::tip
If `-PC-` never appears, the USB cable is likely power-only. Replace it with a USB data cable.
:::

## Troubleshooting

### Camera shows red in the RCP

Check your USB cable — use a data-capable cable, not a charge-only cable. Then update your RIO and RCP to the latest version (including beta or RC releases) using a SWU file. The Sony Alpha protocol operates at OS level, not the application layer, so an app-only upgrade is not sufficient.

:::note
The Sony mirrorless protocol evolves with Sony firmware updates. Your RIO and RCP must be on a compatible version.
:::

### FX3 is not controllable

Update the FX3 firmware to version `3.00` or later, and update the RCP and RIO to version `23.8.1` or later. The protocol evolves with camera firmware; both sides must be on compatible versions.

### White balance is not controllable

Set ATW to **Off** in the RCP under **Camera > WB > ATW**. The camera's white balance mode must also be set to manual or color temperature mode.

### Parameters display but do not change

Some parameters become read-only depending on the shooting mode. Switch to a mode such as M or S&Q, or check the unstable link steps below.

### Unstable link

- Use a USB cable that carries data, not power only.
- Disable **Power Supply via USB** in the camera settings.
- Only one device can control a Sony Alpha at a time:
  - Disconnect any DJI gimbal or similar device using the USB port.
  - Disable Wi-Fi remote control on the camera.
- Update your RIO and RCP to the latest version using a SWU file — a standard app upgrade from the admin page is not sufficient, as the Sony protocol is at OS level.

## Field examples

The following setups illustrate real-world configurations using Sony Alpha cameras with Cyanview.

### FX30 with Fujinon 18–55 mm

- FX30 camera
- Fujinon 18–55 mm lens
- RIO with ZTE 4G USB stick
- VP4
- RCP

![FX30 with Fujinon 18-55 mm lens, RIO 4G control](/img/Workflows/FX30-fujinon-18-55.png)

### FX3 with Sony FE 16–35 mm F2.8 GM

- FX3 camera
- Sony FE 16–35 mm F2.8 GM lens
- RIO with Huawei 4G USB stick
- VP4
- RCP

![FX3 with Sony FE 16-35mm F2.8 GM lens, RIO 4G control](/img/Workflows/FX3-Sony-Emount.jpeg)

### FX3 with RIO 4G and Teltonika RUT240

- FX3 camera
- Sony FE PZ 16–35 mm F4 G lens
- RIO with Teltonika RUT240 4G router (external antenna recommended for a more stable connection)
- Cyanview tally light (tally input from ATEM via RCP; tally output via tally module on RIO port 1)
- DJI RS3 Pro gimbal
- CV-HD Pro800 for video transmission
- VP4
- RCP

![FX3 with RIO 4G using Teltonika RUT240 router and DJI RS3 Pro gimbal](/img/Workflows/FX3-DJIRS3-RIO-RUT240.png)
