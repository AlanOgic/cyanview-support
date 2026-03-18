---
id: serial-camera
title: "Advanced serial camera configuration"
sidebar_label: "Serial camera config"
description: "Advanced serial camera configuration for Cyanview. Protocol settings, baud rates, and troubleshooting serial connections."
keywords: [serial, advanced, protocol, baud rate, configuration]
slug: /guides/advanced/serial-camera
---

## Introduction

The advanced mode allow you to setup advanced parameters for your serial cameras: Dreamchip, Marshall, etc.

## Toggle advanced mode

[Advanced mode toggle](/img/Configuration/advanced/advanced-toggle.png)

- [step 0] In the [RCP Configuration UI](/docs/Manuals/RCP/ConfWebUI), click on your camera
- [step 1] In the top right corner, click on the dots `...`
- [step 2] Then click on the popup message to toggle (the actual status is displayed, here : `OFF`)

## Advanced setup

In the `Camera Head` section:

<img src="/img/Configuration/advanced/advanced-parameters.png" width="400"/>

1. `Speed` : allows you to change the baudrate between the CI0/RIO and your camera.
2. `Bidirectional` : when unchecked, communication is unidirectionnal, RCP send data, but doesn't expects anything. Can be useful for HF with half-duplex modems.
3. `Delay` : only when `bidirectional is active`, allows to configure an additional timeout delay. Can be useful for HF with full-duplex modems that have induce some delays (in the Rx/Tx switch for example).