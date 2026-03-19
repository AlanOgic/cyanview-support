---
id: canon
title: "Canon camera integration overview"
sidebar_label: "Canon overview"
description: "Connect and control Canon broadcast and cinema cameras with Cyanview. Overview of supported models and connection methods."
keywords: [Canon, cinema camera, broadcast, C300, C500]
slug: /integrations/cameras/canon/canon
---

Cyanview RCPs control Canon cameras over IP, Remote-A, or USB — depending on the model.

## Connection methods

| Method | Protocol | Use case |
|---|---|---|
| IP | XC Protocol | PTZ cameras and cine cameras |
| Remote-A 2.5mm TRS | Remote A | Older EOS Cinema cameras |
| USB | — | Canon R5 only |

:::note
Remote B is not supported. Cameras with a Remote B connector also have a Remote A connector, and the functions are identical.
:::

## IP control: PTZ cameras

All Canon PTZ cameras except the CR-X500 are controlled over IP using the XC protocol. You can use a Canon PTZ controller alongside a Cyanview RCP simultaneously.

![Canon CR-N500 wiring diagram for Cyanview RCP](/img/Integrations/Canon/CRN500/CRN500-wiring.png)

## IP control: cine cameras

The Cyanview RCP controls all Canon cameras that support the XC protocol.

![Canon XC protocol wiring diagram for Cyanview RCP](/img/Integrations/Canon/XC/XC-wiring.png)

Supported models:

- C400
- C80
- C300 Mk3
- C500 Mk2
- [XF605](/docs/integrations/cameras/canon/canon-xf605)
- C70 — requires a firmware update

## Remote-A 2.5mm TRS

The Cyanview RCP controls all Canon cameras that support the Remote A protocol.

![Canon Remote A wiring diagram for Cyanview RCP](/img/Integrations/Canon/canon-LANC-wiring.png)

Supported models include:

- C100
- C200
- C300 Mk2
- C500 Mk1

To check whether your camera supports Remote A, visit the Canon website, open the **Specifications** tab, and look for **Remote A** under the connectivity section.

:::tip
If your camera is compatible with the Canon RCV-100, it is compatible with the Cyanview RCP.
:::

The example below shows the Remote A compatibility block on the C200 specifications page.

![Canon Remote A compatibility block in C200 specifications](/img/Integrations/Canon/Canon-Remote-A.png)

## USB: mirrorless

USB control applies to the Canon R5 only.

![Canon R5 connected to Cyanview RCP via USB](/img/Integrations/Canon/canon-DSLR-RCP.png)
