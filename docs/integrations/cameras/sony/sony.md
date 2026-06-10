---
id: sony
title: "Sony camera integration overview"
sidebar_label: "Sony overview"
description: "Connect and control Sony broadcast cameras with Cyanview. Overview of supported models, protocols, and connection methods."
keywords: [Sony, broadcast camera, 8-pin, CGI, SDK]
slug: /integrations/cameras/sony/sony
---

Cyanview supports a wide range of Sony cameras — from broadcast CCUs to cinema cameras and PTZ units. Choose the connection method that matches your camera type below.

## CCU and camcorders

If your camera has an RJ45 port, you can control it over IP. Cyanview supports bridge mode only — MSU mode is not supported.

![Sony CCU IP wiring diagram](/img/Integrations/Sony/Sony-CCU-IP-wiring.png)

You can also use the 8-pin port, which provides the same controls but requires a CI0/RIO.

![Sony PMW camera connected to RCP via CI0 using 8-pin](/img/Integrations/camera/Sony/Sony-PMW/SONY-PMW-XXX-RCP-CI0@2x-8.png)

:::info
Typical use cases: shading all your Sony CCUs with a simple, compact solution, or remote production workflows.
:::

## PTZ cameras

![Sony FR7 simple wiring diagram](/img/Integrations/Sony/SonyFR7-wiring-simple.png)

- [FR7 PTZ](/docs/integrations/cameras/sony/sony-fr7)
- [BRC PTZ — X1000, X400, H900, H800 over IP](/docs/integrations/cameras/sony/sony-ptz)

## Cinema cameras

![Sony Burano wiring diagram](/img/Integrations/Sony/Sony-Burano/Burano-wiring.png)

- [Sony FX3/FX30 (and other mirrorless such as A7S, A1)](/docs/integrations/cameras/sony/sony-alpha) — controlled over USB
- [Sony FX6](/docs/integrations/cameras/sony/sony-fx6) — controlled over IP
- [Sony FX9](/docs/integrations/cameras/sony/sony-fx9) — controlled over IP
- [Sony Burano](/docs/integrations/cameras/sony/sony-burano) — controlled over IP
- [Sony Venice](/docs/integrations/cameras/sony/sony-8pin) — controlled over 8-pin remote connector (requires a CI0/RIO)
- [Sony FR7](/docs/integrations/cameras/sony/sony-fr7) — controlled over IP

If you use Sony E-mount lenses, no additional configuration is needed.

If you use Fujinon or Canon motorized lenses, Cyanview can control both the camera and the lens in parallel. See the [cine lens guide](/docs/integrations/lenses/cine-lens) for more information.

If your lens is not motorized, you can add:

- [Tilta motors](/docs/integrations/lenses/tilta)

## Sony Alpha series

![Sony Alpha connected to RIO and RCP locally](/img/Integrations/camera/Sony/Sony-DSLR/SONY-DSLR-RIO-RCP-Local@2x-8.png)
![Sony Alpha connected to RIO over 4G](/img/Integrations/camera/Sony/Sony-DSLR/SONY-DSLR-RIO-4G@2x-8.png)

- [Sony Alpha](/docs/integrations/cameras/sony/sony-alpha) — controlled over USB, or over IP using RIO

:::tip
Alpha series cameras work well on gimbals as a lightweight steadicam replacement.
:::

## Camera block

![Sony FCB camera block wiring diagram](/img/Integrations/Sony/Sony-FCB/Sony-FCB-wiring.png)

- [PXX](/docs/integrations/cameras/sony/sony-8pin) — controlled over 8-pin remote connector (requires a CI0/RIO)
- FCBXX — controlled over serial connector (requires a CI0/RIO)
