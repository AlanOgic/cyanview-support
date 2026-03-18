---
id: dreamchip-ssm500
title: "Dreamchip SSM500"
sidebar_label: "Dreamchip SSM500"
description: "Integrate the Dreamchip SSM500 slow-motion camera with Cyanview for remote control in sports production."
keywords: [Dreamchip, SSM500, slow motion, sports]
slug: /integrations/cameras/other/dreamchip-ssm500
---

<img alt="CY_support_dreamchip_SSM500_workflow" src="/img/Integrations/Dreamchip/Dreamchip_SSM500.png" width="500" />

## Supported Models
All AtomOne cameras from Dreamchip are supported. They use the same protocol and have essentially the same features.

- AtomOne SSM500
- AtomOne SSM501
- AtomOne SSM502

:::info
As the SSM501 and SSM502 are new cameras released in 2025, the majority of features are available but the integration may not be fully complete. 

Known To Dos: Recording and Playback and Lens control via camera
:::

:::warning
Please be aware it is highly recommended that the camera and cyanview equipment is updated to the latest software version.

Important changes have been implemented on both Dreamchip and Cyanview's sides in 2023 and 2024. There have been known incompatibility issues when cameras have been used on different versions of firmware.
:::

## Supported control

All paint controls available in Dreamchip cameras are accessible from the RCP. Using the official [ProVideoGUI software](https://gitlab.com/dreamchip/provideo-downloads/-/wikis/provideo-gui) 
software from Dreamchip is a good way to discover the capabilities of these cameras, as well as making sure they have the latest firmware. You will need the connection cable from Dreamchip to control the camera from a computer (Windows only).

|Control|Notes|
|:-----|:-----|
|**Exposure** - Gain, Shutter, CLS (Clearscan)|
| **Exposure** - Iris |Available on the mini zoom or when using the Dreamchip motors|
|**White balance** - R/G/B Gain, AWB (Single shot auto-white), ATW (continious) |
|**White balance** - Color Temperature|Changing the color tempearture will set the R/G/B gains similarly to a Sony system camera|
|**Primary Corrections** - R/G/B/Master Black level, R/G/B/master gamma (In BT.709), (R/B, master black and black gamma), Saturation, Detail, Denoise|
|**R/G/B/Master Flare**|
|**Knee slope and point**|
|**User matrix**|
|**Multi-matrix**|Selection 12, 16, 24 or 32 vectors
|**Color space: BT.709 or BT.2020**|
|**OETF**|Selection of BT.709 or HDR formats HLG, PQ and Slog3 <br/> Some of the HDR settings disable parts of the video pipeline but the camera doesn't prevent them to be changed. So gamma can still be adjusted although it will have no effect on the picture.|
|**Lens**- Iris, Focus, Zoom|When using a C-mount lens with dreamchip motors, the lens is controlled through the camera, ie the AUX Port and will be detected automatically by the RCP. However, the motors need to be calibrated and configured through the Dreamchip provideo software <br/> Zoom is only on the AtomOne Zoom|
|**Other controls** - Flip: upside-down or mirror, |Video format, Genlock |It is necessary to save the current settings as power-up defaults after changing these, see below for more information. Also the camera needs to do an internal reboot after changing them so adjusting these settings can appear sluggish|


## Workflow

To control the SSM500 using a Cyanview RCP, all that is required is a IP connection. Below is an example of the most basic workflow version. 

<img alt="CY_support_dreamchip_SSM500_workflow" src="/img/Integrations/Dreamchip/Dreamchip_SSM500_Workflow.png" width="700" />

#### Standalone Mode

 - In **standalone** mode, *replay* and *trigger* is done via [Stream Deck](/docs/integrations/accessories/elgato-stream-deck) or [shuttle](https://www.contourdesign.com/product/shuttle/) connected to the RCP. Replays are then stored in the camera's internal storage.

This mode allows to operate slow motion and replays directly from the Cyanview RCP via a [Streamdeck](/docs/integrations/accessories/elgato-stream-deck) and a [Shuttle Pro](https://www.contourdesign.com/product/shuttle/).

<img alt="cyanview-support-SSM500-Dreamchip-CI0-RCP-Standalone" src="/img/Integrations/Dreamchip/Dreamchip_SSM500_Standalone_Workflow.png" width="700" />

 #### EVS Mode

In this mode, the RCP acts as gateway for the EVS

<img alt="cyanview-support-SSM500-Dreamchip-CI0-EVS" src="/img/Integrations/Dreamchip/Dreamchip_SSM500_EVS_Workflow.png" width="700" />

## Configuration

### Power-up defaults
The camera doesn't save the current settings automatically. Dreamchip offers a feature called "auto_save," but it significantly reduces the camera's responsiveness, so we don't recommend using it. As a result, the camera powers up with pre-defined settings, including video format, frame rate, genlock settings, and all paint settings. When the RCP detects the camera, all paint settings are restored based on the RCP's values. Therefore, if you power cycle the camera, all the last values will be restored automatically.

It’s important to note that if you use the Provideo GUI to adjust camera settings and save them as power-up defaults, the RCP will overwrite most of these settings when it connects to the camera. The only settings not restored by the RCP are the video format, genlock settings, and some special features unavailable from the RCP, such as lens calibration.

The RCP has two special commands that are important to know:

- ```SAVE```
This command saves all current settings as power-up defaults. It's crucial to use this in the following situations:
   - When you change the video format or genlock settings, as these are not restored by the RCP. After making such changes, you must save them as power-up defaults; otherwise, the camera will restart with the previous settings.
   - When the camera is used with a weak control link (e.g., wireless or remote). If the link is lost and the camera restarts, it will retain incorrect settings until the connection is restored. In this case, it’s recommended to adjust the camera and save the current settings as power-up defaults. This ensures the camera restarts with roughly correct settings until the RCP reconnects.
   - When you plan to use the RCP for adjustments but need to use the camera as a PoV without a control link. Saving the current adjustments ensures they persist.

- ```FACT-D``` or Factory Default:
This command resets the camera to its factory default settings. It’s useful when the camera is not behaving as expected, as some special settings may have been adjusted using the Provideo GUI. Resetting the camera ensures you can test the RCP with the camera under standard conditions.

### External Lens

:::info
When using a C-mount lens with dreamchip motors, the lens is controlled through the camera itself (AUX port) and detected automatically. But the motors needs to be calibrated and configured through the Dreamchip provideo software.
:::

:::warning
Only configure the lens menu when using an external lens control

If the lens is being controlled through the camera and the external lens has been configured on the CI0/RIO it will cause compatibility issues
:::

To configure the **external lens control**, go to the camera configuration menu. Scroll down to 'Lens' 

Enter in the 'Model' number 

Enter in the RIO Interface port

<img alt="cyanview-support-Dreamchip-ATOM-One" src="/img/Integrations/Dreamchip/Dreamchip_LENS_B4.png"/>

You will now be able to control the **External Lens**

### Standalone Mode Setup

- In **standalone** mode, *replay* and *trigger* is done via [Stream Deck](/docs/integrations/accessories/elgato-stream-deck) or [shuttle](https://www.contourdesign.com/product/shuttle/) connected to the RCP. Replays are then stored in the camera's internal storage.

- Add your SSM500 camera to the RCP like described in the [IP Camera Configuration](/docs/integrations/generic/ip-camera) guide.

- Connect the Streamdeck and Shuttle Pro to the USB connector of the RCP 

 <img alt="cyanview-support-RCP-USB-back-port" src="/img/productGfx/RCP/RCP-USB-back-port@2x-8.png" width="150" />

- Associate the Streamdeck and Shuttle Pro to the RCP controller.

### EVS Mode Setup

Please refer to the [EVS hypermotion](/docs/integrations/broadcast-systems/evs-hm) page for EVS configuration.

## Troubleshooting

### Camera is **red** in the config
   - Check your wiring
   - Check if your camera is up to date [on the Dreamchip wiki](https://gitlab.com/dreamchip/provideo-downloads/-/wikis/home#available-downloads)
   - Check if the camera is controllable using the Dreamchip [software](https://gitlab.com/dreamchip/provideo-downloads/-/wikis/provideo-gui)

### Some camera controls are not displayed
   - Check if your camera is up to date [on the Dreamchip wiki](https://gitlab.com/dreamchip/provideo-downloads/-/wikis/home#available-downloads)
   - Reset your camera to factory default:
       - On your RCP, click on `Camera > Custom`
       - Click on the touch screen on `FACTD`, this will put your camera to factory default
       - Click on the touch screen on `STORE`, this will save this factory default in the camera to ensure it is still OK on the next reboots
       - Unplug and Replug your camera in
