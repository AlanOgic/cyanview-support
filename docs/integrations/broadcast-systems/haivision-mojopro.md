---
id: haivision-mojopro
title: "Haivision MojoPro integration"
sidebar_label: "Haivision MojoPro"
description: "Integrate Haivision MojoPro cellular bonding with Cyanview for mobile remote camera control over 4G/5G."
keywords: [Haivision, MojoPro, cellular, bonding, mobile, 4G]
slug: /integrations/broadcast-systems/haivision-mojopro
---

The [Haivision MoJoPro](https://www.haivision.com/products/mojopro-mobile-journalism/) app for iOS and Android enables live video transmission from smartphones. The Cyanview RCP controls a range of camera parameters over the StreamHub connection, making it ideal for news gathering or unattended PoV camera workflows.

![Haivision MoJoPro workflow diagram](/img/Integrations/Haivision/Haivision-MoJoPro.png)

## Supported controls

| Function | Notes |
| :--- | :--- |
| Gain | Manual (ISO) and AUTO |
| Exposure | Manual or AUTO shutter |
| White balance | Variable color temperature in K |
| Focus | Manual and AUTO |
| Zoom | |

## Configuration

![Haivision MoJoPro camera settings](/img/Integrations/Haivision/Haivision-Mojopro-camera.png)

1. When adding a camera, select the model **Haivision - MoJoPro**.
2. In the **IP Address** field, enter the IP address of the StreamHub — not the phone. Ensure the RCP is on the same network subnet as the StreamHub.
3. In the **Port** field, enter `8896` — this is the StreamHub REST API port.
4. In the **Login** field, enter the StreamHub input number (1–16) to which the MoJoPro is connected.
5. In the **Password** field, enter the `api_key` from StreamHub. Find the API key in the StreamHub web interface under **Admin > Rest API doc** (top-right corner). See the [StreamHub User Guide](https://doc.haivision.com/StreamHub/latest/user-menu) for details.
