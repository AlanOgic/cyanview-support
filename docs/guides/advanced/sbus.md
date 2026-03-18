---
id: sbus
title: "SBUS configuration guide"
sidebar_label: "SBUS"
description: "Configure SBUS protocol connections with Cyanview for RC-style servo control of camera and lens parameters."
keywords: [SBUS, servo, RC control, configuration]
slug: /guides/advanced/sbus
---

S.BUS is a protocol created by Futaba, to control servos motor. Some gimbal or pan/tilt heads can be controlled by S.BUS

## Configuration

### Bus creation

To use S.BUS, a `Futaba: S.BUS` bus must be created. In the *Features* section, add a *Futaba: S.BUS* :

<img src="/img/Configuration/sbus/SBUS_creation.png" width="800"/>

Once the bus is created, click on the newly *Futaba S.BUS* block to configure the bus. Then, choose your CI0 or RIO in the *Interface: Port* drop-down list:

<img src="/img/Configuration/sbus/SBUS_configuration.png" width="400"/>

The default settings should work with most S.BUS configurations. In the case of a special S.BUS device, the bus speed, duplexing or IDs can be changed from this configuration panel.

### S.BUS device configuration

To configure an S.BUS device, first create a camera. In this example, the camera is a *Not controlled* model, and will only be used to control the S.BUS device

In the *Pan & Tilt* section, select *S.BUS Gimbal* as a model, and select the *Futaba: S.BUS* bus created previously for the *Interface: Port*

<img src="/img/Configuration/sbus/SBUS_device_creation.png" width="800"/>

Then, the advanced settings must be activated to configure the S.BUS channels. Advanced settings can be activated by clicking the three dots at the top right part of the *Settings*

<img src="/img/Configuration/sbus/SBUS_advanced_enable.png" width="400"/>

Once the advanced settings are activated, a new field appears in the *Pan & Tilt* configuration block :

<img src="/img/Configuration/sbus/SBUS_advanced_settings.png" width="400"/>

The *Advanced* field configuration must respect the following format :

`pan channel`:`tilt channel`:`pan speed channel`:`tilt speed channel`:`roll channel`:`roll speed channel`,`channel X`=`channel_x config`;`channel Y`=`channel_y config`; ...

In the example above, the configuration is :
- pan: Not used (channel 0)
- tilt: Not used (channel 0)
- pan speed: Channel 1
- tilt speed: Channel 2
- roll: Channel 3
- roll speed: Not used.
- No extra channels are configured

Once this configuration is done, the S.BUS device can be controlled via the RCP, in the Lens menus.

#### Extra channels configuration

Extra channels can be added with fixed analog or digital values. For example, to add an analog value of 1024 (half range) on channel 15 and a digital state 1 on channel 16, the following configuration must be added :

`15=A1024;16=D1`.

- Analog values are prefixed by *A*
- Digital values are prefixed by *D*

The complete settings, with pan / tilt / roll channels would be :
`0:0:1:2:3:0,15=A1024;16=D1`

## Wiring

S-BUS is accessible on PORT2 of RIO and CI0. It is also available on PORT3 of CI0 3Ports versions.

The pinout is :
- HR10A pin 4: SBUS
- HR10A pin 5: Ground

Cable [CY-CBL-6P-FAN](/docs/Accessories/CableCatalog#cy-cbl-6p-fan) can be used to connect a S.BUS device to a CI0.

## Example with a DJI Ronin-S gimbal

The DJI Ronin-S gimbal can be controlled by S-BUS. The channels for this gimbal are :
- Channel 1: Pan speed
- Channel 2: Tilt speed
- Channel 4: Roll speed

Advanced configuration is then `0:0:1:2:0:4`.

S-BUS connector is available on the Focus wheel, with the following pin-out :
1. Not connected
2. Ground
3. Not connected
4. S-BUS

<img src="/img/Configuration/sbus/DJI_pinout.png"/>

Notes : 
- The CAN / S-BUS selector on the focus wheel must be set to *S-BUS*
- Control is not possible when USB is connected (even with a USB charger)




