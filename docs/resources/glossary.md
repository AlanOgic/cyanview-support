---
id: glossary
title: Broadcast terminology glossary
sidebar_label: Glossary
description: "Definitions of broadcast and camera control terminology used in Cyanview documentation. From REMI to VISCA, CCU to tally."
keywords: [glossary, broadcast, terminology, REMI, CCU, tally, PTZ, SDI, NDI]
slug: /resources/glossary
---

# Broadcast terminology glossary

Quick reference for broadcast and camera control terms used throughout the Cyanview documentation.

## Camera control

| Term | Definition |
|---|---|
| **CCU** | Camera Control Unit. Hardware or software that adjusts camera paint parameters (iris, gain, color) remotely. The Cyanview RCP functions as a CCU. |
| **Paint** | The process of adjusting a camera's image parameters — iris, gain, shutter, black level, color matrix, knee, gamma, and detail — to match cameras or achieve a desired look. |
| **Shading** | Adjusting camera parameters in real-time during production. The person performing this is called a shader or video engineer. |
| **Scene file** | A saved set of camera paint parameters that can be recalled to quickly configure a camera. |
| **Iris** | The camera lens aperture control that regulates the amount of light reaching the sensor. |
| **Gain** | Electronic amplification of the camera sensor signal. Higher gain brightens the image but increases noise. |

## Protocols

| Term | Definition |
|---|---|
| **VISCA** | Video System Control Architecture. A serial protocol developed by Sony for controlling PTZ cameras. Available in RS-232, RS-422, and IP variants. |
| **LANC** | Local Application Control Bus. A Sony protocol for basic camera control over a 2.5mm jack, commonly found on consumer and prosumer cameras. |
| **SDI** | Serial Digital Interface. A family of video interfaces for carrying uncompressed digital video. Used for both video transport and embedded camera control (Blackmagic). |
| **NDI** | Network Device Interface. A royalty-free video-over-IP protocol developed by Vizrt (NewTek) for high-quality, low-latency video transport over standard networks. |
| **SRT** | Secure Reliable Transport. An open-source protocol for low-latency video transport over unpredictable networks like the public internet. |
| **Ember+** | A control protocol used in broadcast automation systems (Lawo, others) for device interoperability. |
| **SBUS** | A serial protocol originally from RC hobby, used for servo control of lens motors and other mechanical actuators. |

## Production

| Term | Definition |
|---|---|
| **REMI** | Remote Integration Model (or Remote production). A production model where cameras are on-site but control, switching, and graphics happen at a remote facility over IP networks. |
| **OB Van** | Outside Broadcast Vehicle. A mobile production truck equipped with cameras, switchers, and control systems for live event coverage. |
| **Tally** | A visual indicator (usually a red light) on a camera showing which camera is currently live or on-air. Green tally indicates preview. |
| **PTZ** | Pan-Tilt-Zoom. A remotely operated camera that can pan horizontally, tilt vertically, and zoom optically without a human operator at the camera. |
| **Genlock** | Generator Lock. Synchronizing video sources to a common reference signal so they can be mixed without glitches. |
| **Black burst** | An analog reference signal used for genlocking video equipment. Being replaced by PTP (Precision Time Protocol) in modern IP setups. |
| **Timecode** | A sequence of numeric codes used to synchronize and identify frames in video production. Common formats include LTC and VITC. |

## Cyanview products

| Term | Definition |
|---|---|
| **RCP** | Remote Control Panel. Cyanview's software-based camera paint controller. Runs on tablets, computers, or touchscreens. |
| **RIO** | Remote I/O. Cyanview's hardware gateway for camera and lens connections. Maintains autonomous control even when network drops. |
| **RIO +WAN** | RIO with full license. Supports LAN and WAN connectivity, Cyanview cloud, and REMI remote production. |
| **RIO +LAN** | RIO with LAN-only license (formerly RIO Live). Local production companion for 1-2 cameras, no cloud or REMI. |
| **CI0** | Camera Interface Zero. Cyanview's compact serial-to-IP converter. Stateless — loses control if network drops. |
| **CI0BM** | CI0 with integrated Blackmagic SDI control board (RSBM). |
| **VP4** | Video Processor 4. Cyanview's 4-channel video processor for color correction and CCU control. |
| **NIO** | Network I/O. Cyanview's network-based GPIO device for tally and control signals over Ethernet, WiFi, or 4G. |
| **RSBM** | SDI control injection board for Blackmagic cameras. Used with CI0 or RIO. |
| **PoE** | Power over Ethernet. All Cyanview devices support IEEE 802.3af PoE, allowing power delivery over the same Ethernet cable used for data. |

## Networking

| Term | Definition |
|---|---|
| **mDNS** | Multicast DNS. A protocol that resolves device names to IP addresses on local networks without a central DNS server. Cyanview devices are accessible via `cy-[device]-[batch]-[id].local`. |
| **DHCP** | Dynamic Host Configuration Protocol. Automatically assigns IP addresses to devices on a network. |
| **Subnet** | A logical subdivision of an IP network. Devices on the same subnet can communicate directly without routing. |
| **PoE** | Power over Ethernet (IEEE 802.3af). Delivers electrical power along with data over standard Ethernet cables. |
