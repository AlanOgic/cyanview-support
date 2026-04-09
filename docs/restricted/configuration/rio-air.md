---
id: rio-air
title: RIO Air
description: "Pinout, connectivity, power, and serial port specifications for the RIO Air."
keywords: [rio air, pinout, serial, uart, rs422, rs485, usb, power]
slug: /restricted/configuration/rio-air
---

# RIO Air

<img src="/img/restricted/configuration/RIOAir/RIO-Air-pinout.png" width="800"/>

- **ttyS0** (internal use — do not use): J4
- **ttyS1** (serial port 1): J5 and J6 (different connectors, same port)
- **ttyS2** (serial port 2): J3

## Connectivity

Two versions are available. The version with physical USB/Ethernet ports includes:

- 1 x Ethernet 10/100 (not PoE)
- 1 x USB port (max 500 mA)

:::info
Both versions have RS-422/RS-485 ports on the green board. Both also have 2 x USB pads available on the blue board, so you can solder USB-to-Ethernet dongles, 4G dongles, or FX3 modules.
:::

## Weight and size

- **28 g** with Ethernet and USB connectors
- **22 g** without Ethernet and USB connectors

In both cases, USB and Ethernet pins are available on the PCB.

The board measures **40 x 40 mm** with mounting holes at **35 x 35 mm**.

## Power

- **IN** is protected against reverse polarity.
- **IN** is not regulated except for the board itself (supports 6–26 V).
- **IN/OUT** are linked via diode and fuse.
- You can charge a battery from the OUT pin since IN and OUT are linked.

:::warning
IN/OUT is a passthrough and is not regulated. The input voltage equals the output voltage. If you input 26 V, you get 26 V out. If your camera only supports 20 V, it can be damaged.
:::

## UART

- 2 x UART

Wiring:

- **Rn** is the Rx of UARTn
- **Tn** is the Tx of UARTn

## RS-422 / RS-485

- 2 x RS-422/RS-485
- 2 different connectors

Wiring:

| Type | P1 | P2 | P3 | P4 | P5 | P6 |
|:---|:--|:--|:--|:--|:--|:--|
| RS-422 | Tx+ | Tx- | Rx+ | Rx- | GND | VBAT OUT |
| RS-485 | D+/A | D-/B | | | GND | VBAT OUT |

## USB

<img src="/img/restricted/configuration/RIOAir/nanopi-pinout.png" width="800"/>

- 1 x USB port (if you selected the USB and Ethernet version)
- 2 x USB pads to solder (on both versions)
