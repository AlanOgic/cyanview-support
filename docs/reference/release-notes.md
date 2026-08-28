---
id: release-notes
title: "Release notes"
sidebar_label: "Release notes"
description: "Cyanview release notes and changelog. New features, camera support, bug fixes, and firmware updates for all products."
keywords: [release notes, changelog, updates, firmware, features]
slug: /reference/release-notes
---

## Release 26.4.1 (stable release)

OS, camera control and dashboard improvements

Compatible devices: cy-rcp, cy-rio-rev2, cy-nio-rev2, cy-rio-air, cy-vp4

### Summary

- Canon CR-X300: model added with support of outdoor features like wiper/washer
- ARRI Live: improvements on iris control and black level
- IOI: fix iris not fully opening
- Iris joystick: improvements in iris control, increased precision on black control
- Iris joystick: added a first release of an absolute control mode
- SBUS: fix parity bug
- Antelope: Various fixes and improvements
- Shared mixer: Fixed bug when the mixer reconnects
- Wireless: Added drivers for D-Link AC13U
- Operating System: Fixed an issue that could cause unexpected reboots (system update required)
- Sony 700: improved support for extender
- Panasonic P2: support newer SHA2 auth method
- Canon CRN-700: added iris close command
- Canon C-50: added support
- Arri: improved camera support
- Joystick: fixed a bug that sometime cause a display shift
- Joystick: fixed a bug with the camera lock function
- RCP: various improvements
- VP4: fixed issue with the DHCP configuration
- VP4: fixed issue with the color corrector width
- ARRI Multicam Live on Alexa35: initial support added
- Dashboard update, general improvements and added custom views for ARRI
- Sony PXW-Z300 added, other improvements for PXW-Z200
- Small improvements on the iris joystick, shutter direction now similar to Sony
- Bradley Bus to control multiple MicroL heads
- Canon max iris value adjusted for CR-N700
- Bolin R9-420N finalised
- Bolin R9-420N added
- Joystick override mode now covers shared routers
- Tally support added for Blackmagic IP for Ursa Broadcast G2 and Pyxis
- Arri Alexa35 added, with support of Multicam
- Atem: fixed gain on old cameras
- Panasonic PTZ: add shutter for psf formats
- Joystick override mode (fallback input) for router integrations (ProBel SW-P-08, ATEM, etc.)
- ZCAM P2-R1: updated integration to match latest camera firmware
- Minor improvements to RED and Sony 700 integrations
- Added support for Lawo V__Link4 and V__Remote4 color correctors
- Improved Ember+ provider in the RCP; behavior now documented on the Support website
- Virtual GPIO now available over Ember+; configuration documented on Support
- KOKUSAI DK-H700 model added
- Panasonic AW-UB10: shutter and gain behavior corrected (2 dB steps), AWB removed, multimatrix/gain stability improved
- Fix ordering or the USB devices (Tilta, serial ports)
- Canon XC: color gain status now reports correctly
- Sony Alpha (A7S, FX3) USB cameras: crash fixed
- MojoPro: option to connect with insecure SSL if needed
- RCP GUI: tabs labeled with device serials for easier identification
- Canon XC: color gain status mapping fixed
- Vision Research: black clip behavior adjusted
- cGate: fixed timeouts when using slower connections like wireless
- Proton: fixed zoom speed and added timecode enable in the custom/custom1 page
- Operating System: Upgrade Linux kernel and core libraries
- Operating System: Improved performances for Cyanview applications
- Operating System: Added missing Wireless drivers
- Iris Joystick: Isolate the joystick from the network for more stability
- Sony: Initial beta support for FX3A and FX2
- Sony: Improved support for PXW-Z200
- cMotion: Beta support for cGate

## Release 25.9.5 (stable release)

Features and bugfixes

Compatible devices: All Cyanview devices

### Summary

- VP4: New GUI
- VP4: Added support for HDR
- VP4: Added support for Input/Output VPID
- VP4: Improved the Genlock detection
- VP4: Fixed issue that was reverting the genlock to the default value
- Sony700: Added new features: Optical Level; ALAC; 5600K; etc
- Sony FR7: Fixed the checklink and stability improvements
- Sony DSLR: Fixed issues with Iris commands on some lenses
- Sony DSLR: Improved the check link. Recover on network errors
- Sony DSLR: Added support for zoom and focus
- Sony DSLR: Added support for ASPC
- Sony Z200: Fixed a critical bug. Now works with a limited control. Use FX6 model
- Canon CRN700: Various improvements
- Canon C300: Fixed the OSD commands
- Canon XC: Fixed OSD output and added ISO
- Canon XC: Use continuous auto focus
- Canon XC: Fixed the Iris range
- Panasonic PTZ: Added authentification
- Panasonic: Added support for PX5100
- RED: Various improvements for Iris / Zoom / Focus
- RED: Add a command to control the camera power
- RED: Fixed variable ND
- Proton: Adapted ZOOM speed
- Proton: Improved control
- BlackMagic ATEM Camera Control: Fixed issue with bi-directionnal status and adjust Iris range
- BlackMagic Pyxis: Improved control
- BlackMagic IP: Fixed issue with checklink, introduced in 25.5.1rc3
- BlackMagic IP: Fixed some bugs with the lens control
- BlackMagic IP: Added ND filters
- IO Industries: Handle firmware variant for V8KSDI
- Dreamchip: Implemented the load_factory function
- Dreamchip: Various bug fixes for SSM501
- Probel: Added support for extended commands
- Marshall: Various fixes
- Marshall: Added multimatrix on CV503 and CV504
- Birdog: Initial support for X1 / X4 / X5
- Antelope: Improved control
- ZCam: Initial support for ZCam P2
- Aja ColorBox: Added dynamic 1DLUT support
- Imagine SNP: Fixed the control sensitivity
- TSL 5.0: Fixed RED and GREEN at same time
- B4 Lens: Added tally for Sony and Fuji lenses
- Tilta: Support for Nucleus-M II
- RCP: Added new assignable functions
- RCP: Reviewed the way the assignables buttons are displayed
- RCP: Display the active group name when a group is activated
- RCP: Settings are now saved to a network share (full system update required)
- RCP: Refactor AUTO button behavior. AUTO function can now be selected
- RCP: Added an option to display the GREEN values on the main screen
- RCP: New screen on the camera tree: AUDIO and STATUS
- Elgato Streamdeck: Fixed bug in the Switcher for the XL model (requires a full system update)
- IrisJoystick: Improved the smoothness of the iris control
- IrisJoystick: Fixed issue with the forced state
- Camera Companion: Lot of improvements and new features

## Release 25.4.1 (stable release)

Features and bugfixes

Compatible devices: All Cyanview devices

### Summary

- Panasonic AWUB10 / AWUB50: Initial support
- FOR.A 1616: Added support
- Lumix GH7/GH5S: Fixed some bugs and improvements (require a full system update)
- RED: support of the new Nikon mount, support of external ND module
- Mojopro: In line with the 2025 March release from Haivision
- Varicam: Record status and minor improvements
- Dreamchip: Fixed issues with R/B and Color temp
- BlackMagic Videohub: added monitoring outputs

## Complete changelog

This page lists only the available releases.

A complete changelog, including the deprecated versions, is available in text format from Cyanview support.

## Versioning scheme

The version numbers use the following format: `YY.M.N[rcX]`

- **YY** is the release year, on two digits
- **M** is the release month number
- **N** is an incremental number. The initial version is always 1. Numbers greater than 1 are hotfixes versions.
- **rcX** (optional) indicates a release candidate version, where X is an incremental build number. Release candidate versions are usually stable but may include new features that could introduce instabilities.
