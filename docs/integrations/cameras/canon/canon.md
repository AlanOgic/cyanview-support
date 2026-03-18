---
id: canon
title: "Canon camera integration overview"
sidebar_label: "Canon overview"
description: "Connect and control Canon broadcast and cinema cameras with Cyanview. Overview of supported models and connection methods."
keywords: [Canon, cinema camera, broadcast, C300, C500]
slug: /integrations/cameras/canon/canon
---

# Canon

The Cyanview RCP allows you to control all types of Canon cameras.

## Overview

The Cyanview RCP can **control Canon camera** over
* **IP** — using the XC protocol
* **Remote-A 2.5mm TRS** — most older cameras support the Remote A protocol
* **USB** — Canon R5 only

:::note
Remote B is not supported as these cameras also have the Remote-A connector and the functions are identical.
:::

## IP control : PTZ

All Canon PTZ cameras except the CR-X500 are controlled over IP using the XC protocol. The Canon PTZ controller can be used at the same time as Cyanview-s RCPs

<img alt="Canon CR-N500 remote control with Cyanview RCP" src="/img/Integrations/Canon/CRN500/CRN500-wiring.png" width="600"/>


## IP control : cine cameras

<img alt="Canon XC remote control with Cyanview RCP" src="/img/Integrations/Canon/XC/XC-wiring.png" width="600"/>

The Cyanview RCP controls all the Canon cameras which support the XC protocol

* C400
* C80
* C300 Mk3
* C500 Mk2
* <a href="/docs/integrations/cameras/canon/canon-xf605">XF605</a>
* C70 (needs a firmware update)



## Remote-A 2.5mm TRS jack

<img alt="Canon Remote A control with Cyanview RCP" src="/img/Integrations/Canon/canon-LANC-wiring.png" width="600"/>

**The Cyanview RCP controls all the Canon cameras that support the Remote A protocol**

* C100
* C200
* C300 Mk2
* C500 Mk1
* etc.

This list is not exhaustive

To check if your camera is compatible:
* Navigate to Canon website
* Click on `Specifications`
* Scroll to `IP Streaming & Control`
* Search for `Canon XC Protocol supported` in this block

If your camera is compatible with a RCV-100, it is compatible with the Cyanview RCP.
Except that Cyanview RCP controls the cameras over IP and can control multiple cameras at the same time.

Example for the C200, on this <a href="">link</a>, you find this block:

<img alt="Canon camera remote A control with Cyanview RCP" style={{border: "5px solid #555"}} src="/img/Integrations/Canon/Canon-Remote-A.png" width="600"/>


## USB : Mirrorless

<img alt="Canon R5 remote control with Cyanview RCP" src="/img/Integrations/Canon/canon-DSLR-RCP.png"/>

This applies to the Canon R5 model only
