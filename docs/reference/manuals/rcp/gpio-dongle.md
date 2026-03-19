---
id: gpio-dongle
title: "RCP GPIO dongle guide"
sidebar_label: "GPIO dongle"
description: "Use GPIO dongles with the Cyanview RCP for hardware tally, GPI triggers, and external control interfaces."
keywords: [RCP, GPIO, dongle, tally, GPI, hardware control]
slug: /reference/manuals/rcp/gpio-dongle
---

The **CY-CBL-JACK-GPIO8** is an extension dongle that plugs into the back of the RCP and provides 8 inputs/outputs on a DB9 connector. Connect up to 2 dongles for a total of 16 GPIO.

[![CY-CBL-JACK-GPIO8 dongle photo](/img/productGfx/cables/CY-CBL-JACK-GPIO8.png)](/img/productGfx/cables/CY-CBL-JACK-GPIO8.png)

- The 3.5 mm jack connects to the back of the RCP.
- GPIO signals are available on the DB9 connector.

Each GPIO is independent and configurable as input or output from the [GPIO page](/docs/reference/manuals/rcp/web-ui#gpio) of the configuration web interface. Use the dongle to acquire tally inputs or output preview/touchdown signals.

### Pinout

[![CY-CBL-JACK-GPIO8 full pinout diagram](/img/productGfx/cables/CY-CBL-JACK-GPIO8.svg)](/img/productGfx/cables/CY-CBL-JACK-GPIO8.svg)

**GPIO used as input:**
- Connect directly to a dry contact closure circuit. Internal 10 kΩ pull-up resistors to 5V are provided.
- Active contact connections are supported. Keep voltage below 5V and connect relative to ground. No internal protection against polarity reversal.

**GPIO used as output:**
- HIGH state: 5V, maximum output current 500 µA.
- LOW state: 0V, maximum input current 25 mA.

:::warning
Always connect the GND of multiple devices together when using a common GND for signaling. Without a shared GND, an input pin may appear permanently activated on the RCP or other equipment such as a router.
:::

### Simple 2 GPIO version

A simpler version providing only 2 GPIO is available. This version only supports port 1, and port 2 must be disabled — plug a single cable into port 1 only (the port closer to the edge of the RCP). This gives one pin for touchdown and one for tally on each RCP at low cost.

[![CY-CBL-JACK-GPIO2 simple 2-GPIO version pinout diagram](/img/productGfx/cables/CY-CBL-JACK-GPIO2.svg)](/img/productGfx/cables/CY-CBL-JACK-GPIO2.svg)

:::warning
The GPIO uses a non-isolated driver IC. The common GND of both pins is also the GND of the RCP power supply and chassis. If the connected equipment is not isolated, you must connect the GND of all equipment together. Without a shared GND, an input pin may appear permanently activated.
:::

**GPIO used as input:**
- Connect directly to a dry contact closure circuit. Internal 4.7 kΩ pull-up resistor to 5V.
- Active contact connections are supported. Keep voltage below 5V and connect relative to ground. No internal protection against polarity reversal.

**GPIO used as output:**
- HIGH level: pulled up to 5V through a 4.7 kΩ resistor. Maximum output current: 1 mA.
- LOW level: pulled to 0V through a transistor. Maximum input current: 25 mA.

### Status

Monitor the GPIO dongle from the RCP screen by pressing **Menu** and selecting the **GPIO Menu** tab.

![RCP touchscreen GPIO info and status display](/img/productGfx/RCP/cyanview-support-RCP-manual-touchscreen-menu-io-gpio-info-status.png)

### Configuration

Configure GPIOs via the [GPIO](/docs/reference/manuals/rcp/web-ui#gpio) page of the **RCP Configuration Web UI**. For tally setup, see the [Tally configuration](/docs/guides/tally/tally/) guide.

### Fanout cable for tally and touchdown

*This cable is not available for sale.*

The example below shows a fanout cable providing one tally on XLR and one touchdown on DB9 from a single dongle. Add more connectors to the other GPIO pins to extend to more channels. Ensure the common GND pin on all connectors matches the GND of the connected equipment — GPI circuits today are often not fully isolated.

[![CY-CBL-GPIO-FANOUT tally and touchdown fanout cable pinout](/img/productGfx/cables/CY-CBL-GPIO-FANOUT.svg)](/img/productGfx/cables/CY-CBL-GPIO-FANOUT.svg)
