---
id: varicam
title: "Panasonic VariCam integration"
sidebar_label: "Panasonic VariCam"
description: "Integrate the Panasonic VariCam cinema camera with Cyanview for remote paint and exposure control."
keywords: [Panasonic VariCam, cinema, paint, exposure]
slug: /integrations/cameras/panasonic/varicam
---

![Panasonic VariCam](/img/Integrations/Panasonic/varicam.png)

Control the Panasonic VariCam cinema camera over IP from an RCP or RIO. Use the RCP for both local (LAN) and remote (internet) control, or the RIO for remote-only control.

## Supported controls

- [Tally (red, green, call)](/docs/guides/tally/tally/)
- OSD / Menu
- Lens
- Iris
- Gains (master, red, blue)
- Blacks (master, red, blue)
- White clip
- Shutter
- Knee
- Saturation
- Detail
- Multimatrix

## Setup

The connection between the RCP/RIO and the camera is over IP.

**On the camera:**
- Set a static IP address.
- Ensure the user/password credentials are set to: **guest / p2guest**

**On the RCP:**
- Confirm the RCP has an IP address on the same network as the camera — see [IP configuration](/docs/guides/networking/ip-configuration#lan-configuration) if needed.
- Add a new camera via the [RCP Configuration UI](/docs/reference/manuals/rcp/web-ui):
  - Select **Panasonic** as the brand.
  - Select **Varicam** as the model.
  - Enter the camera's IP address.

![VariCam setup configuration](/img/Integrations/Panasonic/varicam-setup.png)

Once the camera is connected, the camera block should look like this:

![VariCam camera block](/img/Integrations/Panasonic/varicam-block.png)
