---
id: rio-live-manual
title: "RIO +LAN manual"
sidebar_label: "RIO +LAN manual"
description: "Manual for the Cyanview RIO +LAN (formerly RIO +LAN). Local production companion for up to 2 cameras."
keywords: [RIO +LAN, RIO +LAN, manual, local, LAN only]
slug: /reference/manuals/rio-live-manual
---

# RIO Live

<img src="/img/Manual/RIO/rio-live.jpeg" width="600"/>

## Introduction

Pronounce \[rɪəʊ lɪv\].

The RIO +LAN is a mix between:
* A CI0 : it has the serial ports, display and buttons
* A RCP : it has all the protocols inside, same web UI

It is a standalone device, for:
* Lens control
* USB cameras ( mirrorless, etc. )
* WiFi LAN control
* Polecam, etc.

That you can link with a RCP for the remote shading.

Compared to a CI0, which is a slave device:
* the RIO Live is a standalone device, if you unplug RCP, the camera/lens is still controlled
* the link between a RCP and a RIO Live is more robust on unreliable networks ( WiFi, etc. )
* configuration is totally different, you configure on RIO web UI and import on RCP

## Power supply

Compared to CI0, the RIO Live was designed for bigger cameras.
Where you don't have PoE.
And we wanted it as small as possible and PoE is taking a lot of space.

So RIO Live is not PoE, you can power it using 12V DC from:
* D-Tap (from camera, battery, etc.)
* PSU

DC IN voltage is between 10V and 24V.

The input voltage will be directly applied to the camera so if you power from batteries, make sure the camera does support the higher battery voltage as well. For thermal reasons, camera consumption should not exceed 12W by port.

## Wiring

<img src="/img/Manual/RIO/rio-live-wiring.png" width="600"/>

The RIO and RCP will communicate together over IP.

## Setup

The RIO Live camera configuration is exactly the same as RCP.

You can access your RIO Live configuration page following [this guide](/docs/guides/networking/ip-configuration#find-devices-ip).

Once there, the setup is similar to the [RCP web UI](/docs/reference/manuals/rcp/web-ui)

And you can follow any integration guide from this website, it applies to RCP as well as RIO.

## RCP link

To setup RIO with a RCP:
* Setup the camera on your RIO web UI
* Setup a tag/group in your RIO
* Setup the same tag/group in your RCP
* Import the camera from your RIO in your RCP

From there, you will have control of the camera from your RCP.

You can find more information about this pairing on [this page](/docs/guides/networking/remi).

The REMI is the way RCP/RIO Live are paired and work together.

## Dimensions

Download [PDF](/img/Manual/RIO/CY-RIO-assembly.pdf) and [STEP](/img/Manual/RIO/CY-RIO-assembly.step) files.

[<img alt="CY-RIO-assembly.png" src="/img/Manual/RIO/CY-RIO-assembly.png"  width="500"/>](/img/Manual/RIO/CY-RIO-assembly.pdf)
