---
id: commands
title: "Diagnostic commands reference"
sidebar_label: "Commands"
description: "Reference for diagnostic commands on Cyanview devices. Network tests, status checks, and system information queries."
keywords: [commands, diagnostics, network test, status, CLI]
slug: /reference/troubleshooting/commands
---

# cmd.txt

## Introduction

You can perform advanced action using a USB key with a text file containing pre-defined commands.
This guide will describe the different features available.

## Setup

1. Format a USB key in FAT (instructions for [Windows](https://www.windowscentral.com/how-format-usb-flash-drive-windows-10) and [Mac OS X](https://www.techsolutions.support.com/how-to/how-to-format-a-usb-drive-on-a-mac-12899) )
2. Create a text file (at the root) name `cmd.txt`
3. Edit this file, one command per line, executed sequentially from top to bottom
4. See below for a detailed list of commands

## Commands available

### `network_reset`

This command will perform a reset of "persistent" network settings.
Pay attention that all `volatile` IPs present in your config will still be present.

### `config_reset`

This command will perform a reset of your device configuration.
Erasing your camera, routers integration, tally settings, volatile IPs, etc.
Pay attention that all `persistent` IPs present in your setup will be kept.

### `reset_all`

This command will reset both the network and your config (including `volatile` and `persistent` IPs).
This will get back your device to `factory settings`.

### `take_snapshot`

This will take a snapshot of your device configuration and store it on your USB key with the filename `snapshot.YOUR-DEVICE-SERIAL.txt`.

### `restore_snapshot`

You need a valid snapshot named `snapshot.txt` on your USB key, located at the root.
It will restore this snapshot on the device.

### `doc`

This command will print in a file named `cmd_logs.YOUR-DEVICE-SERIAL.txt` (on your USB key) the complete list of commands available.

## Logs

All the commands are processed from the file `cmd.txt` and executed sequentially from top to bottom.
For example, the file containing:
```
take_snapshot
reset_all
```

Will:
1. Take a snapshot of the running configuration.
2. Then reset all (persistent network and configuration)

A complete log of the commands will be stored on the USB key and named: `cmd_logs.YOUR-DEVICE-SERIAL.txt`

## Examples

Here is a list of pre-made cmd.txt files examples:

* factory settings : <a target="_blank" href="/files/reset_all/cmd.txt" download>cmd.txt</a>