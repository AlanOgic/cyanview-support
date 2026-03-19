---
id: sbus
title: "SBUS configuration guide"
sidebar_label: "SBUS"
description: "Configure SBUS protocol connections with Cyanview for RC-style servo control of camera and lens parameters."
keywords: [SBUS, servo, RC control, configuration]
slug: /guides/advanced/sbus
---

S.BUS is a Futaba protocol for controlling servo motors. Many gimbals and pan/tilt heads support S.BUS, letting you drive them directly from a Cyanview RIO or CI0.

## Configuration

### Bus creation

In the *Features* section, add a *Futaba: S.BUS* bus.

![SBUS bus creation](/img/Configuration/sbus/SBUS_creation.png)

Click the new *Futaba S.BUS* block, then choose your CI0 or RIO in the *Interface: Port* drop-down.

![SBUS bus configuration](/img/Configuration/sbus/SBUS_configuration.png)

The default settings work with most S.BUS devices. If your device requires non-standard bus speed, duplexing, or IDs, adjust them in this panel.

### S.BUS device configuration

Create a camera — a *Not controlled* model is fine if you only need S.BUS control. In the *Pan & Tilt* section, set the model to *S.BUS Gimbal* and select the *Futaba: S.BUS* bus you just created as the *Interface: Port*.

![SBUS device creation](/img/Configuration/sbus/SBUS_device_creation.png)

Enable advanced settings by clicking the three-dot menu at the top right of the *Settings* panel.

![Enable advanced settings](/img/Configuration/sbus/SBUS_advanced_enable.png)

A new *Advanced* field appears in the *Pan & Tilt* block.

![SBUS advanced settings field](/img/Configuration/sbus/SBUS_advanced_settings.png)

Use this format for the *Advanced* field:

```
pan:tilt:pan_speed:tilt_speed:roll:roll_speed,channelX=config;channelY=config;...
```

The example above maps to:
- Pan: not used (channel 0)
- Tilt: not used (channel 0)
- Pan speed: channel 1
- Tilt speed: channel 2
- Roll: channel 3
- Roll speed: not used
- No extra channels configured

Once configured, you control the S.BUS device from the RCP Lens menus.

#### Extra channels

You can assign fixed analog or digital values to additional channels. To set an analog value of 1024 (half range) on channel 15 and a digital state of 1 on channel 16, append:

```
15=A1024;16=D1
```

- Prefix analog values with `A`
- Prefix digital values with `D`

A complete configuration including pan/tilt/roll channels looks like this:

```
0:0:1:2:3:0,15=A1024;16=D1
```

## Wiring

S.BUS is available on PORT2 of the RIO and CI0, and on PORT3 of CI0 3Ports versions.

Pinout (HR10A connector):
- Pin 4: SBUS
- Pin 5: Ground

Use cable [CY-CBL-6P-FAN](/docs/resources/cable-catalog#cy-cbl-6p-fan) to connect an S.BUS device to a CI0.

## Example: DJI Ronin-S gimbal

The DJI Ronin-S supports S.BUS on the following channels:
- Channel 1: Pan speed
- Channel 2: Tilt speed
- Channel 4: Roll speed

Set the advanced configuration to `0:0:1:2:0:4`.

The S.BUS connector is on the Focus wheel:
1. Not connected
2. Ground
3. Not connected
4. S-BUS

![DJI Ronin-S S.BUS pinout](/img/Configuration/sbus/DJI_pinout.png)

:::info DJI Ronin-S requirements
Set the CAN/S-BUS selector on the Focus wheel to *S-BUS*. Control is not available while USB is connected — this includes USB chargers.
:::
