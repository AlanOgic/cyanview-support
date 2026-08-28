---
id: release-notes
title: "Release notes"
sidebar_label: "Release notes"
description: "Cyanview release notes and changelog. New features, camera support, bug fixes, and firmware updates for all products."
keywords: [release notes, changelog, updates, firmware, features]
slug: /reference/release-notes
---

## Release 26.4.1 (stable release)

OS, camera control and dashboard improvements.

**Compatible devices:** cy-rcp, cy-rio-rev2, cy-nio-rev2, cy-rio-air, cy-vp4

### Cameras

- ARRI: improved camera support
- ARRI Live: improvements on iris control and black level
- ARRI Alexa 35: added, with initial support for Multicam Live
- ATEM: fixed gain on old cameras
- Antelope: various fixes and improvements
- Bolin R9-420N: support added and finalised
- Canon C50: added support
- Canon CR-N700: added iris close command
- Canon CR-N700: maximum iris value adjusted
- Canon CR-X300: model added, with support for outdoor features like wiper/washer
- Canon XC: color gain status mapping fixed, so the status now reports correctly
- IOI: fixed iris not fully opening
- KOKUSAI DK-H700: model added
- Panasonic AW-UB10: shutter and gain behavior corrected (2 dB steps), AWB removed, multimatrix and gain stability improved
- Panasonic P2: support for the newer SHA2 auth method
- Panasonic PTZ: added shutter for psf formats
- Proton: fixed zoom speed, and added timecode enable on the custom/custom1 page
- RED and Sony 700: minor improvements to both integrations
- Sony: initial beta support for FX3A and FX2
- Sony 700: improved support for the extender
- Sony Alpha (A7S, FX3) USB cameras: crash fixed
- Sony PXW-Z300: added, with improved support for PXW-Z200
- Vision Research: black clip behavior adjusted
- Z CAM P2-R1: integration updated to match the latest camera firmware

### Lenses, motors and heads

- cMotion: beta support for cGate
- cGate: fixed timeouts on slower connections such as wireless
- Bradley Bus: control multiple Micro L heads

### Control surfaces

- RCP: various improvements
- RCP GUI: tabs labeled with device serials for easier identification
- Iris joystick: improvements in iris control, increased precision on black control
- Iris joystick: first release of an absolute control mode
- Iris joystick: small improvements, shutter direction now matches Sony
- Iris joystick: isolated from the network for more stability
- Joystick: fixed a bug that sometimes caused a display shift
- Joystick: fixed a bug with the camera lock function
- Dashboard: general improvements, plus custom views for ARRI

### Video and color processing

- VP4: fixed issue with the DHCP configuration
- VP4: fixed issue with the color corrector width
- Lawo: added support for V__Link4 and V__Remote4 color correctors

### Routers, switchers and tally

- Blackmagic IP: tally support added for URSA Broadcast G2 and PYXIS
- Shared mixer: fixed bug when the mixer reconnects
- Joystick override mode (fallback input) added for router integrations (ProBel SW-P-08, ATEM, and others)
- Joystick override mode now covers shared routers

### Protocols, OS and networking

- Ember+: improved provider in the RCP, with the behavior now documented on this site
- Ember+: virtual GPIO now available, with the configuration documented on this site
- SBUS: fixed parity bug
- MojoPro: option to connect with insecure SSL if needed
- USB: fixed the ordering of USB devices (Tilta, serial ports)
- Wireless: added drivers for D-Link AC13U
- Operating system: fixed an issue that could cause unexpected reboots (system update required)
- Operating system: upgraded the Linux kernel and core libraries
- Operating system: improved performance for Cyanview applications
- Operating system: added missing wireless drivers

## Release 25.9.5 (stable release)

Features and bugfixes.

**Compatible devices:** all Cyanview devices

### Cameras

- Antelope: improved control
- BirdDog: initial support for X1, X4 and X5
- Blackmagic ATEM camera control: fixed bidirectional status, and adjusted the iris range
- Blackmagic PYXIS: improved control
- Blackmagic IP: fixed issue with checklink introduced in 25.5.1rc3
- Blackmagic IP: fixed some bugs with the lens control
- Blackmagic IP: added ND filters
- Canon CR-N700: various improvements
- Canon C300: fixed the OSD commands
- Canon XC: fixed OSD output and added ISO
- Canon XC: use continuous auto focus
- Canon XC: fixed the iris range
- Dreamchip: implemented the load_factory function
- Dreamchip: various bug fixes for SSM501
- IO Industries: handle the firmware variant for V8KSDI
- Marshall: various fixes
- Marshall: added multimatrix on CV503 and CV504
- Panasonic: added support for PX5100
- Panasonic PTZ: added authentication
- Proton: adapted zoom speed
- Proton: improved control
- RED: various improvements for iris, zoom and focus
- RED: added a command to control camera power
- RED: fixed variable ND
- Sony 700: added new features — optical level, ALAC, 5600K and others
- Sony FR7: fixed the checklink, plus stability improvements
- Sony DSLR: fixed issues with iris commands on some lenses
- Sony DSLR: improved the check link, which now recovers on network errors
- Sony DSLR: added support for zoom and focus
- Sony DSLR: added support for APS-C
- Sony Z200: fixed a critical bug — now works with limited control, using the FX6 model
- Z CAM: initial support for Z CAM P2

### Lenses, motors and heads

- B4 lens: added tally for Sony and Fujinon lenses
- Tilta: support for Nucleus-M II

### Control surfaces

- RCP: added new assignable functions
- RCP: reviewed the way assignable buttons are displayed
- RCP: display the active group name when a group is activated
- RCP: settings are now saved to a network share (full system update required)
- RCP: refactored AUTO button behavior, so the AUTO function can now be selected
- RCP: added an option to display the GREEN values on the main screen
- RCP: new screens on the camera tree — AUDIO and STATUS
- Iris joystick: improved the smoothness of the iris control
- Iris joystick: fixed issue with the forced state
- Elgato Stream Deck: fixed bug in the switcher for the XL model (requires a full system update)
- Camera Companion: many improvements and new features

### Video and color processing

- VP4: new GUI
- VP4: added support for HDR
- VP4: added support for input and output VPID
- VP4: improved the genlock detection
- VP4: fixed issue that reverted the genlock to the default value
- AJA ColorBox: added dynamic 1D LUT support

### Routers, switchers and tally

- ProBel: added support for extended commands
- Imagine SNP: fixed the control sensitivity
- TSL 5.0: fixed RED and GREEN showing at the same time

## Release 25.4.1 (stable release)

Features and bugfixes.

**Compatible devices:** all Cyanview devices

### Cameras

- Dreamchip: fixed issues with R/B and color temperature
- Lumix GH7 and GH5S: bug fixes and improvements (requires a full system update)
- Panasonic AW-UB10 and AW-UB50: initial support
- RED: support for the new Nikon mount and the external ND module
- Varicam: record status and minor improvements

### Routers, switchers and tally

- FOR.A 1616: added support
- Blackmagic Videohub: added monitoring outputs

### Protocols, OS and networking

- MojoPro: in line with the March 2025 release from Haivision

## Complete changelog

This page lists only the available releases.

A complete changelog, including the deprecated versions, is available in text format from Cyanview support.

## Versioning scheme

The version numbers use the following format: `YY.M.N[rcX]`

- **YY** is the release year, on two digits
- **M** is the release month number
- **N** is an incremental number. The initial version is always 1. Numbers greater than 1 are hotfixes versions.
- **rcX** (optional) indicates a release candidate version, where X is an incremental build number. Release candidate versions are usually stable but may include new features that could introduce instabilities.
