---
id: sony
title: "Sony camera integration overview"
sidebar_label: "Sony overview"
description: "Connect and control Sony broadcast cameras with Cyanview. Overview of supported models, protocols, and connection methods."
keywords: [Sony, broadcast camera, 8-pin, CGI, SDK]
slug: /integrations/cameras/sony/sony
---

## Types of cameras

### CCU and Camcorders

If your camera has a RJ45 port, we can control is over IP.
Pay attention that we only support bridge mode, not MSU.

<img src="/img/Integrations/Sony/Sony-CCU-IP-wiring.png"/>


The other option is using the 8P port which offer the same controls, but requires a CI0/RIO.

<img src="/img/Integrations/camera/Sony/Sony-PMW/SONY-PMW-XXX-RCP-CI0@2x-8.png"/>

:::info
Typical use case:

* You want a simple and compact solution to shade all your Sony CCU.
* Remote production
:::

### PTZ

<img src="/img/Integrations/Sony/SonyFR7-wiring-simple.png"/>

* <a href="/docs/integrations/cameras/sony/sony-fr7">FR7 PTZ</a>
* <a href="/docs/integrations/cameras/sony/sony-ptz">BRC PTZ : X1000, X400, H900, H800 over IP</a>

:::info
Typical use case: you already have a PTZ panel and are looking for a RCP for shading your all your PTZ's.
:::

### Cinema cameras

<img src="/img/Integrations/Sony/Sony-Burano/Burano-wiring.png"/>

* [Sony FX3/FX30 (and other mirrorless like A7S, A1, etc.)](/docs/integrations/cameras/sony/sony-alpha) : controlled over USB
* [Sony FX6](/docs/integrations/cameras/sony/sony-fx6) : controlled over IP
* [Sony FX9](/docs/integrations/cameras/sony/sony-fx9) : controlled over IP
* [Sony Burano](/docs/integrations/cameras/sony/sony-burano) : controlled over IP
* [Sony Venice](/docs/integrations/cameras/sony/sony-8pin) : controlled over 8 Pin remote connector (requires a CI0/RIO)
* [Sony FR7](/docs/integrations/cameras/sony/sony-fr7) : controlled over IP

If you're using Sony E-mount lenses, nothing else to add.

If you're looking for Fujinon or Canon motorized lenses, we can control:
* The camera
* The lens in parallel

See <a href="/docs/integrations/lenses/cine-lens">this guide for more infos</a>

If your lens is not motorized, you can add:
* <a href="/docs/integrations/lenses/tilta">Tilta motors</a>
* <a href="#">ARRI C-Force</a>

### Sony Alpha's


<img src="/img/Integrations/camera/Sony/Sony-DSLR/SONY-DSLR-RIO-RCP-Local@2x-8.png"/>
<img src="/img/Integrations/camera/Sony/Sony-DSLR/SONY-DSLR-RIO-4G@2x-8.png"/>

* [Sony Alpha](/docs/integrations/cameras/sony/sony-alpha) : controlled over USB, or IP using RIO/RIO +LAN

:::info
Typical use case: gimbal as light steadicam
:::

### Camera block

<img src="/img/Integrations/Sony/Sony-FCB/Sony-FCB-wiring.png"/>

* [PXX](/docs/integrations/cameras/sony/sony-8pin) : controlled over 8 Pin remote connector (requires a CI0/RIO)
* FCBXX : controlled over serial connector (requires a CI0/RIO)
