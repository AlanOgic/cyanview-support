---
id: marshall-minicam
title: "Marshall mini cameras"
sidebar_label: "Marshall"
description: "Control Marshall mini cameras with Cyanview for compact, remote-controlled broadcast camera setups."
keywords: [Marshall, mini camera, compact, VISCA, broadcast]
slug: /integrations/cameras/other/marshall-minicam
---

## Overview

Marshall miniature camera range enable remote control of OSD menus and multiple direct access functions over RS485 (VISCA). A typical setup consists of a CI0 IP to serial interface to control the camera over IP from an RCP.

## Main Adjustments

| Function            | Notes                                                            |
| :------------------ | :--------------------------------------------------------------- |
| OSD menus           | All functions available                                          |
| Exposure            | Iris<sup>1,2</sup>, Shutter, Gain, Auto Exposure                 |
| White balance       | Auto (ATW), One Push, Manual                                     |
| Primary corrections | Master Black<sup>1</sup> , Master Gamma, Color Gains, Saturation |
| Lens<sup>2</sup>    | Iris, Focus, Auto focus, Zoom                                    |
| Other               | Detail Enhancement, Digital Zoom<sup>1</sup>, White Clip         |

1. not supported on all models
2. on zoom block cameras

## Wiring IP

<img src="/img/Integrations/Marshall/marshall-wiring-IP.png"/>

If your camera is IP, then the control is through Ethernet.

You need:

- 1 x RCP

Nothing else, and one RCP can control multiple cameras.

## Wiring Serial cameras

<img src="/img/Integrations/Marshall/marshall-wiring-serial.png"/>

If your camera is not IP, you can control it through serial port.

You need:

- 1 x RCP
- 1 x CI0

And the correct cable, you have 2 different connectors:

If your camera has this kind of connector on the back, then you need the cable <a href="/docs/resources/cable-catalog#cy-cbl-6p-pfan">cy-cbl-6p-pfan</a>.

<img src="/img/Integrations/Marshall/marshall-connector1.jpg" width="300"/>

If your camera has this kind of connector on the back, then you need the cable <a href="/docs/resources/cable-catalog#cy-cbl-6p-mars-01-new">cy-cbl-6p-mars-01</a>.

<img src="/img/Integrations/Marshall/marshall-connector2.png" width="300"/>

More info <a href="/docs/Integrations/Marshall/MarshallMinicam#cables">below</a>

## Supported cameras

Although all cameras are using the VISCA protocol, they all have a different set of functionalities and the supported functions from the protocol are specific to each model. The following cameras have been tested and documented. Other cameras will likely work with the 'generic' model or one of the similar models.

Here is a non exhaustive list of supported model:

- CV225
- CV226
- CV345
- CV350
- CV355-10X
- CV355-30X
- CV370
- CV374
- CV420-30X
- CV500
- CV502
- CV503
- CV566
- CV568
- CV570
- CV574
- CV605
- CV630
- CV730

If your model is not in the list, but you have a model that is "close" in the list above. It should work.

Example:

- CV506 is not listed
- But you can select the model CV503 as the protocol and features are the same

Same with CV226, you can use the CV225 model.

## Camera models informations

### CV503 - CV506

<img alt="cyanview-support-integration-marshall-mini-camera-cv503-cv506" src="/img/Integrations/camera/marshall/cyanview-support-integration-marshall-mini-camera-cv503-cv506.png" width="160" />

- Color gains have no filtering unlike the CV502, this provides more reactive controls. Use moderate changes to prevent stepping.
- Digital zoom is directly available.

### CV226

<img alt="cyanview-support-integration-marshall-mini-camera-cv226" src="/img/Integrations/camera/marshall/cyanview-support-integration-marshall-mini-camera-cv226.png" width="200" />

- Digital zoom is available through the OSD menus only.

### CV350

<img alt="cyanview-support-integration-marshall-mini-camera-cv350" src="/img/Integrations/camera/marshall/cyanview-support-integration-marshall-mini-camera-cv350.png" width="160" />

- Full lens control enabled: zoom, focus, iris

### CV502

<img alt="cyanview-support-integration-marshall-mini-camera-cv502" src="/img/Integrations/camera/marshall/cyanview-support-integration-marshall-mini-camera-cv502.png" width="140" />

- The OSD menu automatically hides when direct commands are sent from the RCP
- There is filtering on some settings such as color gains which creates smoother controls but a longer reaction time
- Camera might not be detected with an early firmware, check the troubleshooting section below

### CV225

<img alt="cyanview-support-integration-marshall-mini-camera-cv225" src="/img/Integrations/camera/marshall/cyanview-support-integration-marshall-mini-camera-cv225.png" width="160" />

- There is no direct Master Black control available from the protocol but master black can be changed from the OSD menus.
- There is filtering on some settings such as color gains which creates smoother controls but a longer reaction time

### CV500

<img alt="cyanview-support-integration-marshall-mini-camera-cv500" src="/img/Integrations/camera/marshall/cyanview-support-integration-marshall-mini-camera-cv500.png" width="150" />

- The CV500 is an old model which is controlled over Pelco RS485. This only supports OSD menu navigation. Paint controls are not possible.
- Use the `CV500` camera model in the configuration, not the `Marshall Generic`


## Configuration

### Communication settings

The control of Marshall cameras uses RS485 for communication at 9600 bauds. One camera can be connected on each port of the CI0 and the camera address should be the same on each port.

The camera configuration should be adjusted from the OSD menus with the following values:

<img alt="cyanview-support-integration-marshall-mini-camera-configuration-screen-address" src="/img/Integrations/camera/marshall/cyanview-support-integration-marshall-mini-camera-configuration-screen-address.png" width="500" />

[1] The camera address should be set to `01`. This is the address used by the system in all modes except in a bus configuration.

[2] Default baud rate: `9600` bauds.

### Camera models

<img alt="cyanview-support-integration-marshall-mini-camera-configuration-RCP-model" src="/img/Integrations/camera/marshall/cyanview-support-integration-marshall-mini-camera-configuration-RCP-model.png" width="500" />

- `Marshall - Generic`: this is the model to choose by default for any Marshall camera. The model will be automatically detected and available features automatically adjusted based on the camera capabilities. The communication with the camera should be bidirectional which is the case when using a CI0 or RIO directly connected to the camera.

- `Marshall - CVxxx` models: to be used when the camera model cannot be automatically detected. This is usually the case with unidirectional wireless or RS485 over fiber systems.

### Interface port

- Both ports from CI0 or RIO can be chosen as they both support RS485.

- It is possible to directly plug a USB RS485 dongle to the RCP.

### Configuration in unidirectional mode

When the link between the RCP and camera is unidirectional, no data come back from the camera and the camera can't be detected and will stay with a red status. To disable the bidirectional data and allow sending data without receiving any response, uncheck the "Bidirectional" option in the camera configuration. This is done by clicking in the 3-dot menu at the top right section of the camera properties, and then unticking the "Bidirectional" option.

![Bidirectional configuration](/img/Configuration/WebGUI_bidirectional.png)

## Cables

Cyanview provides cables to connect the camera in 2 different ways:

- Directly to the 12-pin Hirose connector at the back of the camera
- Through the breakout cable supplied by Marshall with the camera

| Cable Reference       | Description                                                                                    |
| :-------------------- | :--------------------------------------------------------------------------------------------- |
| CY-CBL-6P-MARSHALL-01 | Power and RS485 adapter cable for Marshall 12-pin Hirose cameras                               |
| CY-CBL-6P-PFAN        | 5.5x2.1mm DC Power plug and RS485/RS522/RS232 fanout adapter cable for Marshall Breakout Cable |
| CY-CBL-6P-FAN         | Power and RS485/RS522/RS232 fanout adapter cable for Marshall Breakout Cable                   |

Note: Use generic extension cables for longer length: CY-CBL-6P-EXT.

### Connection to the 12pin Hirose camera connector

<img alt="cyanview-support-integration-marshall-mini-camera-cv505-CI0" src="/img/Integrations/camera/marshall/cyanview-support-integration-marshall-mini-camera-cv505-CI0.jpg" width="300" />

Newer Marshall cameras are equipped with a 12-pin Hirose connector for power and control.

<img alt="cyanview-support-integration-marshall-mini-camera-cv503-back" src="/img/Integrations/camera/marshall/cyanview-support-integration-marshall-mini-camera-cv503-back.png" width="160" />

**Cable P/N: CY-CBL-6P-MARSHALL-01**

<img alt="cyanview-support-integration-marshall-mini-camera-serial-cable-CY-CBL-6P-MARSHALL-01" src="/img/Integrations/camera/marshall/cyanview-support-integration-marshall-mini-camera-serial-cable-CY-CBL-6P-MARSHALL-01.png" width="500" />

<a href="/img/productGfx/cables/CY-CBL-MARSHALL-01.svg" target="_blank">
<img class="w-full" alt="cyanview-support-integration-marshall-mini-camera-serial-cable-CY-CBL-6P-MARSHALL-01" src="/img/productGfx/cables/CY-CBL-MARSHALL-01.svg" />
</a>

### Connection using the Marshall Breakout Cable

<img alt="cyanview-support-integration-marshall-mini-camera-cv225-ci0" src="/img/Integrations/camera/marshall/cyanview-support-integration-marshall-mini-camera-cv225-ci0.png" width="300" />

Bullet cameras CV225/CV226 and the Marshall Breakout cable are terminated by a DC 5.5x2.1 power jack and a phoenix block connector for RS485 control. The CY-CBL-6P-PFAN cable fits these 2 connectors.

<img alt="cyanview-support-integration-marshall-mini-camera-serial-breakout" src="/img/Integrations/camera/marshall/CV225-breakout.png" width="500" />

**Cable P/N: CY-CBL-6P-PFAN**

<img alt="cyanview-support-integration-marshall-mini-camera-serial-CY-CBL-6P-PFAN" src="/img/Integrations/camera/marshall/cyanview-support-integration-marshall-mini-camera-serial-CY-CBL-6P-PFAN.png" width="400" />

<a href="/img/productGfx/cables/CY-CBL-6P-PFAN-MARSHALL.svg" target="_blank">
<img alt="cyanview-support-integration-marshall-mini-camera-serial-CY-CBL-6P-PFAN" src="/img/productGfx/cables/CY-CBL-6P-PFAN-MARSHALL.svg" width="400"/>
</a>

CY-CBL-6P-PFAN is a generic fanout cable with a separate DC jack for power. The cable doesn't come with the Phoenix block connector but Marshall does provide it with the cameras. Follow the diagram to connect it.

### Connection using the push-lock connectors

For CV502/CV530 or similar cameras.

<img alt="cyanview-support-integration-marshall-mini-camera-serial-breakout" src="/img/Integrations/camera/marshall/Marshall-CV502-MB-M_rear-01.jpg" width="300" />

**Cable P/N: CY-CBL-6P-FAN**

<a href="/img/productGfx/cables/CY-CBL-6P-PFAN-MARSHALL.svg" target="_blank">
<img alt="cyanview-support-integration-marshall-mini-camera-serial-CY-CBL-6P-FAN" src="/img/productGfx/cables/CY-CBL-6P-FAN.svg" width="800"/>
</a>

CY-CBL-6P-FAN is a generic fanout cable that can be used for generic purposes. Cut the yellow and blue wires not needed for this Marshall camera.

## Advanced Setup

### RS485 Bus

VISCA allows up to 8 cameras to be connected to an RS485 bus. When a VISCA bus is added and assigned to a CI0 serial port in the configuration, up to 8 interfaces become available. Set each camera with a different Address (see [Communication Settings](#communication-settings)) and select in the configuration GUI the corresponding port that matches the address.


## Troubleshooting

### 1. The Camera Is Not Detected

- **Verify camera communication settings**: Ensure the baud rate is set to _9600_ and the camera ID is _1_, unless you are using a VISCA control bus with multiple cameras.
- **Check the cable and pinout**: If you made your own cable, refer to our [cable diagram](/docs/resources/cable-catalog#marshall-cables) to confirm the wiring is correct.
- **Test for hardware issues**: It’s not uncommon for some cameras to have a defective RS485 interface. To confirm, compare behavior with another unit of the same model or test the camera using Marshall’s control software with a USB-to-RS485 adapter. You should be able ton control the camera using the Marsdhall software.
- **Old firmware limitations**: Some older camera models or firmware versions do not acknowledge commands or send return data. In such cases, the camera may not be "detected" but can still respond to control commands.

To test command reception without relying on feedback:
1. Select the **Marshall Generic** model from the dropdown list.
2. Disable [bidirectional communication](#configuration-in-unidirectional-mode).
3. Use the `Camera > Menu` button on the RCP — all Marshall cameras share the same command for opening the on-screen menu, which can help confirm control is working.

### 2. The camera is in black and white

The camera is probably in auto DAY/NIGHT mode and should be set to DAY to prevent switching to black and white as soon as the light decreases. It is also necessary to save the modified settings as reset defaults.

<img alt="cyanview-support-integration-marshall-mini-camera-serial-configuration-reset-user" src="/img/Integrations/camera/marshall/cyanview-support-integration-marshall-mini-camera-serial-configuration-reset-user.png" width="100%" />

[1] In the `IMAGE CONTROL` menu, select `DAY/NIGHT` mode

[2] Change value from AUTO to DAY

[3] From the `MAIN MENU`, change `RESET` from ON to MODE then press select

[4] Change `MODE` from FACTORY to USER, this will change the camera startup settings from FACTORY to USER settings

[5] In `SAVE`, select ON and press select, this will save the current settings as user startup settings

[6] Exit the menus and save at the same time
