---
id: quickstart
title: Quick start guide
sidebar_label: Quick start
description: "Set up your Cyanview system in minutes. Wire your devices, discover them on the network, configure cameras, and start controlling — step by step."
keywords: [cyanview, quick start, setup, wiring, RCP, RIO, CI0, configuration]
slug: /getting-started/quickstart
---

# Quick start guide

Get your Cyanview system running in four steps: wire, discover, configure, and control.

## Step 1: Wire your devices

Connect your Cyanview devices to power and network. Every device connects via Ethernet and supports PoE (Power over Ethernet).

![Wiring overview](/img/quickstart.png)

## Step 2: Discover your devices

Each device has a serial number that identifies it on the network, for example:
- `cy-rcp-18-4` — an RCP (batch 18, device 4)
- `cy-rio-15-151` — a RIO
- `cy-vp4-14-35` — a VP4
- `cy-nio-22-63` — a NIO

Use the serial number to [find your device's IP address](/docs/getting-started/ip-configuration#find-devices-ip) and open its web interface. No software installation is required — all configuration happens in your browser.

## Step 3: Configure your cameras

Once you can access the web interface, follow the [web UI configuration guide](/docs/reference/manuals/rcp/web-ui) to add your cameras and accessories.

This applies to all versions of **RCP**, **RIO**, and **NIO**.

:::note
To connect a RIO or NIO to an RCP, you must use [REMI](/docs/guides/networking/remi). You cannot add a camera connected to a RIO directly into the RCP without REMI.
:::

## Step 4: Update your firmware

![Update your kit](/img/quickstart-setup.png)

Before you start, update all devices to the latest firmware for the best experience. Follow the [update guide](/docs/reference/product-update).

## Connect your first camera

### Serial cameras (Sony 8-pin, LANC, VISCA)

![Serial camera setup](/img/quickstart-serial.png)

You need:
- Your camera
- A [CI0](/docs/products/ci0) or [RIO](/docs/products/rio)
- The appropriate cable (see [cable catalog](/docs/resources/cable-catalog))
- An RCP

Follow the [serial camera guide](/docs/integrations/generic/serial-camera).

### IP cameras (PTZ, Sony FX9, Canon C300)

![IP camera setup](/img/quickstart-ethernet.png)

You need:
- Your camera
- An RCP

Follow the [IP camera guide](/docs/integrations/generic/ip-camera).

### RIO with lens control

For full camera and lens control with autonomous operation:

1. Configure the [RIO](/docs/products/rio)
2. Connect your camera — [serial](/docs/integrations/generic/serial-camera) or [IP](/docs/integrations/generic/ip-camera)
3. Connect your lens — [B4](/docs/integrations/lenses/b4-lens) or [Tilta](/docs/integrations/lenses/tilta)
4. [Import the camera into your RCP via REMI](/docs/guides/networking/remi)

:::tip
If your camera only has WiFi (such as the FX9 without XDCA), you can use a [WiFi dongle](/docs/guides/networking/wifi-usb) with the RIO.
:::

## Integrate with production equipment

### Switchers and routers

Sync the RCP with an auxiliary output and receive tally input. See the [router integration guide](/docs/integrations/generic/routers).

### Color correctors

Control a standalone color corrector or pair it with a camera head. See the [color corrector guide](/docs/integrations/generic/color-corrector).

### Tally

For a full overview of tally input and output options, see the [tally guide](/docs/guides/tally/tally).

## Further reading

- Browse [integrations by brand](/docs/integrations) for camera-specific guides
- Check the [cable catalog](/docs/resources/cable-catalog) for compatible cables
- Read the [FAQ](/docs/reference/faq) for common questions
- Email **support@cyanview.com** if you need help
