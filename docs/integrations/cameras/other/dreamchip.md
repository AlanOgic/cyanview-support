---
id: dreamchip
title: "Dreamchip cameras"
sidebar_label: "Dreamchip"
description: "Control Dreamchip micro cameras with Cyanview for remote paint and camera control in compact setups."
keywords: [Dreamchip, AtomOne, AtomTwo, ProVideo GUI, micro camera, RS-485, remote paint]
slug: /integrations/cameras/other/dreamchip
---

<img alt="cyanview-support-Dreamchip-ATOM-One" src="/img/Integrations/Dreamchip/Dreamchip-ATOM-One@2x-8.png" width="900" />

## Supported models

Cyanview supports every AtomOne camera from Dreamchip. They share the same protocol and essentially the same features.

- AtomOne
- AtomOne Mini
- AtomOne Mini Zoom
- AtomOne 4K
- AtomTwo

:::warning
Update both the camera and your Cyanview equipment to the latest software version before anything else. This matters most with recent camera releases such as the AtomTwo.

Dreamchip and Cyanview both made significant changes in 2023 and 2024, and mismatched firmware versions are a known source of incompatibility.
:::


## Supported control

The RCP reaches every paint control the Dreamchip cameras expose. Dreamchip's official [ProVideo GUI](https://gitlab.com/dreamchip/provideo-downloads/-/wikis/provideo-gui) is a good way to explore what a camera can do and to confirm it runs the latest firmware. Controlling the camera from a computer needs Dreamchip's connection cable, and the software is Windows only.

|Control|Notes|
|:-----|:-----|
|**Exposure** - Gain, Shutter, CLS (Clearscan)|
| **Exposure** - Iris |Available on the mini zoom or when using the Dreamchip motors|
|**White balance** - R/G/B Gain, AWB (Single shot auto-white), ATW (continuous) |
|**White balance** - Color Temperature|Changing the color temperature will set the R/G/B gains similarly to a Sony system camera|
|**Primary Corrections** - R/G/B/Master Black level, R/G/B/master gamma (In BT.709), (R/B, master black and black gamma), Saturation, Detail, Denoise|
|**R/G/B/Master Flare**|
|**Knee slope and point**|
|**User matrix**|
|**Multi-matrix**|Selection 12, 16, 24 or 32 vectors
|**Color space: BT.709 or BT.2020**|
|**OETF**|Selection of BT.709 or HDR formats HLG, PQ and Slog3 <br/> Some of the HDR settings disable parts of the video pipeline but the camera doesn't prevent them from being changed. So gamma can still be adjusted although it will have no effect on the picture.|
|**Lens**- Iris, Focus, Zoom|When using a C-mount lens with dreamchip motors, the lens is controlled through the camera, ie the AUX Port and will be detected automatically by the RCP. However, the motors need to be calibrated and configured through the Dreamchip provideo software <br/> Zoom is only on the AtomOne Zoom|
|**Other controls** - Flip: upside-down or mirror, |Video format, Genlock |It is necessary to save the current settings as power-up defaults after changing these, see below for more information. Also the camera needs to do an internal reboot after changing them so adjusting these settings can appear sluggish|


## Workflow
### AtomOne with serial communication

<img alt="CY_support_dreamchip_workflow" src="/img/Integrations/Dreamchip/Dreamchip_workflow.png" width="900" />

### Cables required

- [**CY-CBL-DREAMCHIP-03**](/docs/resources/cable-catalog#cy-cbl-dreamchip-03-default) - CI0 / RIO adapter cable
-  [**CY-CBL-6P-EXT-***](/docs/resources/cable-catalog#cy-cbl-6p-ext50-cy-cbl-6p-ext100-cy-cbl-6p-ext300-cy-cbl-6p-ext500) - CI0 / RIO extension cable (Where * = length) 

## Configuration
### Setup

- Follow the [serial camera setup guide](/docs/integrations/generic/serial-camera) to perform the installation.

### Power-up defaults
The camera doesn't save the current settings automatically. Dreamchip offers a feature called "auto_save," but it significantly reduces the camera's responsiveness, so avoid it. As a result, the camera powers up with pre-defined settings, including video format, frame rate, genlock settings, and all paint settings. When the RCP detects the camera, all paint settings are restored based on the RCP's values. Therefore, if you power cycle the camera, all the last values will be restored automatically.

It’s important to note that if you use the Provideo GUI to adjust camera settings and save them as power-up defaults, the RCP will overwrite most of these settings when it connects to the camera. The only settings not restored by the RCP are the video format, genlock settings, and some special features unavailable from the RCP, such as lens calibration.

The RCP has two special commands that are important to know:

- ```SAVE```
  This command saves all current settings as power-up defaults. It's crucial to use this in the following situations:
    - When you change the video format or genlock settings, as these are not restored by the RCP. After making such changes, you must save them as power-up defaults; otherwise, the camera will restart with the previous settings.
    - When the camera is used with a weak control link (e.g., wireless or remote). If the link is lost and the camera restarts, it will retain incorrect settings until the connection is restored. In this case, it’s recommended to adjust the camera and save the current settings as power-up defaults. This ensures the camera restarts with roughly correct settings until the RCP reconnects.
    - When you plan to use the RCP for adjustments but need to use the camera as a PoV without a control link. Saving the current adjustments ensures they persist.

- ```FACT-D``` or Factory Default:
  This command resets the camera to its factory default settings. It’s useful when the camera is not behaving as expected, as some special settings may have been adjusted using the Provideo GUI. Resetting the camera ensures you can test the RCP with the camera under standard conditions.

  This function can now also be accessed from the Scene > Reference page: click on `SCENE > S FILES > Reference` and use the button `Load Factory`

### Baudrate

:::info
You can run the AtomOne at a different baudrate. Always check which baudrate the camera is set to.
:::

If the camera isn't set to default Baudrate (115200) then the CI0/RIO will need to be changed. To do this, go to the advanced mode in the camera configuration. 

To activate advanced mode, on the camera's configuration, click the 3 dots in the top right hand corner. select the box to activate advanced mode

<img alt="cyanview-support-Dreamchip-Advanced-Mode" src="/img/Integrations/Dreamchip/Dreamchip_Advanced_Mode.png"/>

Scroll down to the 'Speed' menu just below the 'Interface: Port' menu. Enter the Baudrate of the camera. 

<img alt="cyanview-support-Dreamchip-ATOM-One" src="/img/Integrations/Dreamchip/Dreamchip_Advanced_Mode_Baudrate.png"/>

### External lens

:::info
When using a C-mount lens with dreamchip motors, the lens is controlled through the camera itself (AUX port) and detected automatically. But the motors need to be calibrated and configured through the Dreamchip provideo software.
:::

:::warning
Only configure the lens menu when using an external lens control

If the lens is being controlled through the camera and the external lens has been configured on the CI0/RIO it will cause compatibility issues
:::

To configure the **external lens control**, go to the camera configuration menu. Scroll down to 'Lens' 

Enter in the 'Model' number 

Enter in the RIO Interface port

<img alt="cyanview-support-Dreamchip-ATOM-One" src="/img/Integrations/Dreamchip/Dreamchip_LENS_B4.png"/>


## Troubleshooting

### General recommendations

Important adjustments in the code have been done from both Cyanview and Dreamchip, up to at least 2025 (25.9.3) so it is recommended to update both the camera and RCP to the latest available release before further troubleshooting.

Also test the camera with the Dreamchip software and compare the results. Reporting an issue that way lets Cyanview reproduce the same situation and compare against it.

### Updating and testing the camera

  - Check that your camera firmware is up to date. Refer to the [Dreamchip wiki](https://gitlab.com/dreamchip/provideo-downloads/-/wikis/home#available-downloads) for the latest versions.
  - Verify that the camera can be controlled using the official Dreamchip [ProVideoGUI software](https://gitlab.com/dreamchip/provideo-downloads/-/wikis/provideo-gui). This software can also be used to update the camera firmware and check for the latest firmware available.

### Camera stays **red** in the config

- Even if the camera icon is red, the RCP will continue to send commands to the camera.
  - If you see adjustments on the video output after sending commands, this confirms that communication to the camera is working. In this case, the red icon indicates that no data is being received back from the camera. Several reasons can explain this:
    - If there is any equipment between the CI0/RIO and the camera, such as RF modems or fiber converters, the returned data from the camera may not reach the CI0/RIO properly. This can happen with unidirectional links or devices that do not switch direction quickly enough.
    - The Dreamchip software lets you set camera groups where only one camera responds to commands and others only listen. Check the Dreamchip software to ensure this feature is not enabled if you expect all cameras to respond.
  - If you don't see adjustments on the video output, this means the camera isn't receiving any commands.
    - Use the Dreamchip software to check the camera itself, and perform a full reset of the camera in case baud rates, camera ID, groups, etc. have been changed.
    - If you have any custom equipment between the CI0/RIO and the camera, try bypassing it to ensure it is not causing any issues. Custom cables, fiber and wireless links can all introduce problems of their own. Checking with a direct connection is a good way to isolate where the fault is.
    - If the CI0/RIO is directly connected to the camera, try another cable and switch to another port on the CI0 or RIO.
    - You can also connect a USB-serial dongle to the back of the RCP USB ports and use the same wiring and camera as with the Dreamchip software. This is a good way to validate the software and configuration separately.

### Lens control issue

  - Dreamchip motors are connected directly to the camera and are fully controlled by the camera itself. Therefore, testing and calibrating the lens motors, or the built-in lens of a MiniZoom camera, should be performed using the [Dreamchip software](#updating-and-testing-the-camera).
  When connecting to the camera, the RCP receives lens information, including which functions are available and the usable range. The RCP uses this data to control the lens. If any lens functions are missing or not working as expected, they should be corrected using the Dreamchip software.
  - If the iris moves in the wrong direction, or if the RCP displays incorrect f-stop values (for example, showing f2 when the lens is closed or f32 when the lens is open), the lens needs to be calibrated and the motor direction inverted using the Dreamchip software. The RCP sends f-stop values to the camera, which uses its calibration data to position the lens correctly. The RCP cannot invert the motor direction itself; attempting to do so would result in sending incorrect f-stop values to the camera.
  - Ensure that nothing is selected in the "Lens - External control override" section below the camera configuration settings in the web interface. This section is intended for adding a lens that is not controlled by the camera, which will route lens commands to another interface instead of the camera, effectively disabling lens control from the camera itself. Selecting the empty line will remove any selection and restore lens control to the camera.
  - When using a camera that requires more power, such as the AtomOne 4K Mini while using external motors, the CI0 may not supply sufficient power via PoE alone. In this case, connect a 12V (or up to 24V) DC power supply to the CI0 to ensure the camera operates reliably.

### Some controls are not working

  - Make sure the [Camera](#updating-and-testing-the-camera) and RCP are both up to date
  - Some settings like if the OETF is in log or HLG will disable or limit the range of other functions.
  - Reset your camera to factory default:
    - This can be done using the Dreamchip software
    - From the RCP itself, click on `SCENE > S FILES > Reference` and use the button `Load Factory`
