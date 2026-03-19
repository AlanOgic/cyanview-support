---
id: commands
title: "Diagnostic commands reference"
sidebar_label: "Commands"
description: "Reference for diagnostic commands on Cyanview devices. Network tests, status checks, and system information queries."
keywords: [commands, diagnostics, network test, status, CLI]
slug: /reference/troubleshooting/commands
---

You can perform advanced actions on Cyanview devices using a USB key with a text file named `cmd.txt`. Commands run sequentially from top to bottom.

## Setup

1. Format a USB key as FAT — instructions for [Windows](https://www.windowscentral.com/how-format-usb-flash-drive-windows-10) and [Mac OS X](https://www.techsolutions.support.com/how-to/how-to-format-a-usb-drive-on-a-mac-12899).
2. Create a text file named `cmd.txt` at the root of the USB key.
3. Add commands to the file — one per line, in the order you want them to run.
4. Insert the USB key into the device.

## Available commands

### `network_reset`

Resets persistent network settings. Volatile IPs present in your config will remain.

### `config_reset`

Resets your device configuration — cameras, router integrations, tally settings, and volatile IPs. Persistent IPs are kept.

### `reset_all`

Resets both the network and your configuration, including all volatile and persistent IPs. This returns the device to factory settings.

### `take_snapshot`

Saves a snapshot of your device configuration to the USB key as `snapshot.YOUR-DEVICE-SERIAL.txt`.

### `restore_snapshot`

Restores a snapshot from a file named `snapshot.txt` at the root of the USB key.

### `doc`

Writes the complete list of available commands to `cmd_logs.YOUR-DEVICE-SERIAL.txt` on the USB key.

## Logs

After the commands run, a complete log is saved on the USB key as `cmd_logs.YOUR-DEVICE-SERIAL.txt`.

For example, a `cmd.txt` file containing:

```
take_snapshot
reset_all
```

Will:
1. Save a snapshot of the running configuration.
2. Reset all settings (persistent network and configuration).

## Examples

- Factory reset: [cmd.txt](/files/reset_all/cmd.txt)
