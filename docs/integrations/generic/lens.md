---
id: lens
title: "Lens control integration"
sidebar_label: "Lens control"
description: "Control motorized lenses with Cyanview. Set up B4 broadcast lenses, cine servo lenses, and third-party motor systems through RIO."
keywords: [lens control, B4, cine servo, motorized, RIO]
slug: /integrations/generic/lens
---

![Canon B4 lens](/img/Integrations/Lens/B4-canon.png)
![Canon Cine Servo lens](/img/Integrations/Lens/canon-cine-servo.png)
![Fujinon Cabrio lens](/img/Integrations/Lens/fujinon-cabrio.png)

Cyanview lets you run lens control in parallel with camera control. This is useful when the camera cannot control the lens, or when the lens and camera are not directly compatible (for example, an FX9 with a Cabrio lens).

When you adjust iris, zoom, or focus on the RCP, the command goes to the lens. When you shade, it goes to the camera. The split is transparent to the vision engineer.

## Lens compatibility

### B4 ENG lenses

![B4 ENG lens](/img/Integrations/Lens/B4-ENG.png)

For specialty and robotic applications, follow the [B4 lens guide](/docs/integrations/lenses/b4-lens).

### Cine and photo lenses

![Fujinon Cabrio on B4 mount](/img/Integrations/Lens/B4-cabrio.png)

For motorized cinema lenses, follow the [cine lens guide](/docs/integrations/lenses/cine-lens).

Compatible connections:
* Canon: 12P port (digital)
* Fujinon: 20P or 12P (digital)
* cmotion: 12P port (digital)

:::note
Canon 18-80 mm photo lenses have only a 20P analog port, which supports zoom/focus handles only. For remote iris control from the RCP, you need external motors (cmotion, Tilta, ARRI, etc.).
:::

### Prime lenses, non-motorized lenses, and robotics

You can control external motors the same way as motorized lenses:
* cmotion — follow the [cine lens guide](/docs/integrations/lenses/cine-lens)
* Tilta — follow the [Tilta guide](/docs/integrations/lenses/tilta)

![ARRI AGITO with Tilta motor for iris](/img/Integrations/Lens/agito-tilta.png)

:::note
The image above shows a Canon 17-120 mm, which is normally controllable via the 12P digital connector. In this setup, the 12P port was already occupied by the ARRI AGITO operator for zoom/focus, so a Tilta motor was added to provide iris control from the RCP.
:::

## Cables

| Lens type | Required cable |
|-----------|---------------|
| Lens controlled by camera | None — lens is controlled via camera protocol |
| 2/3" B4 | [CY-CBL-6P-B4-01](/docs/resources/cable-catalog#cy-cbl-6p-b4-01-default) |
| Canon Cine Servo (12P digital) | [CY-CBL-6P-B4-01](/docs/resources/cable-catalog#cy-cbl-6p-b4-01-default) |
| Fujinon Cabrio (20P digital) | [CY-CBL-6P-FUJI-02](/docs/resources/cable-catalog#cy-cbl-6p-fuji-02-default) + [CY-CBL-6P-B4-01](/docs/resources/cable-catalog#cy-cbl-6p-b4-01-default) |
| Non-motorized / prime lens | Tilta motors with [CY-CBL-TILTA-SERIAL](/docs/resources/cable-catalog#cy-cbl-tilta-serial) |

:::warning
For lens control, use a RIO +LAN or RIO +WAN rather than a CI0.

A CI0 acts as a serial/IP converter — if the Ethernet link drops, the lens loses control and the iris closes. A RIO runs all protocols onboard and continues controlling the lens independently, even without an active RCP connection. It also supports handles and USB accessories.
:::
