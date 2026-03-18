---
id: lens
title: "Lens control integration"
sidebar_label: "Lens control"
description: "Control motorized lenses with Cyanview. Set up B4 broadcast lenses, cine servo lenses, and third-party motor systems through RIO."
keywords: [lens control, B4, cine servo, motorized, RIO]
slug: /integrations/generic/lens
---

## Introduction

<img src="/img/Integrations/Lens/B4-canon.png" width="300" />
<img src="/img/Integrations/Lens/canon-cine-servo.png" width="300"/>
<img src="/img/Integrations/Lens/fujinon-cabrio.png" width="300"/>

The goal is to setup a lens control in parallel of the camera control.

Use case:
* when the camera cannot control the lens
* the lens is not compatible (FX9 + cabrio lens) with the camera

When changing:
* iris/zoom/focus, we will send it to the lens
* shading, we will send it to the camera
and it is transparent for the vision engineer on the RCP.

## Lens compatibility

### Specialty : B4 ENG

<img src="/img/Integrations/Lens/B4-ENG.png"/>

For specialty and robotic application, you can have a look at this <a href="/docs/Integrations/Lens/B4Lens">guide</a>

### Cine/Photo lens

<img src="/img/Integrations/Lens/B4-cabrio.png"/>

If you have a motorised cinema lens, you can follow this <a href="/docs/Integrations/Lens/CineLens">guide</a>

Compatible with:
* Canon : using 12P port (digital)
* Fujinon : using 20P or 12P (digital)
* cmotion : using 12P port (ditial)

If you have a Canon photo lens (18-80 mm), it is motorised, but has only the 20P analog port that only allows control of zoom/focus. If you want remote iris control, you need to use external motor (cmotion, Tilta, ARRI, etc.)

### Prime lens/Non motorised lens or robotics

The same way we control the lens, we can control external motors:
* cmotion : follow this <a href="/docs/Integrations/Lens/CineLens">guide</a>
* Tilta : follow this <a href="/docs/Integrations/Lens/Tilta">guide</a>

<img src="/img/Integrations/Lens/agito-tilta.png" width="500"/>

:::note
On this picture, you see a Canon 17-120 mm, that is normally controllable using 12P digital connector. But this port was already used by the ARRI AGITO operator (for zoom/focus). So here, they used a tilta motor to get iris control from the RCP in the CCU room.
:::

## Cables

* Lens controlled by camera : nothing to do, we control the lens using the camera protocol
* 2/3" B4 : <a href="/docs/Accessories/CableCatalog#cy-cbl-6p-b4-01-default">CY-CBL-6P-B4-01</a>
* Canon Cine Servo (12P digital): <a href="/docs/Accessories/CableCatalog#cy-cbl-6p-b4-01-default">CY-CBL-6P-B4-01</a>
* Fujinon Cabrio (20P digital) : <a href="/docs/Accessories/CableCatalog#cy-cbl-6p-fuji-02-default">CY-CBLL-6P-FUJI-02</a> + <a href="/docs/Accessories/CableCatalog#cy-cbl-6p-b4-01-default">CY-CBL-6P-B4-01</a>
* Other (non motorised, prime lens, etc.) : Tilta motors with  <a href="/docs/Accessories/CableCatalog#cy-cbl-tilta-02-serial">CY-CBL-TILTA-SERIAL</a>


:::note
As lenses are critical, we recommend to use RIO-live instead of CI0.

CI0 is a slave device and if you remove the ethernet cable, the lens is not controlled anymore and will then "close" (iris).

While a RIO-live has all the protocols builtin and can control the lens on its own without any ethernet/RCP. It also allows to plug handles, USB accessories, etc.
:::