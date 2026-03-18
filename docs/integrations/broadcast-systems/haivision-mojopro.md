---
id: haivision-mojopro
title: "Haivision MojoPro integration"
sidebar_label: "Haivision MojoPro"
description: "Integrate Haivision MojoPro cellular bonding with Cyanview for mobile remote camera control over 4G/5G."
keywords: [Haivision, MojoPro, cellular, bonding, mobile, 4G]
slug: /integrations/broadcast-systems/haivision-mojopro
---

## Overview

The **[Haivision MoJoPro](https://www.haivision.com/products/mojopro-mobile-journalism/)** mobile application for Apple and Android enables live video transmission from smartphones.

The Cyanview RCP can control a range of parameters over the Streamhub connection. This functionality is ideal for news gathering or unattended PoV camera workflows, allowing operators to adjust settings remotely.

<img class="diagram" alt="Haivision MoJoPro" src="/img/Integrations/Haivision/Haivision-MoJoPro.png" width="80%" />

## Supported Control

| Function            | Notes                                                            |
| :------------------ | :--------------------------------------------------------------- |
| Gain                | Manual (ISO) and AUTO                                            |
| Exposure            | Manual or AUTO shutter                                           |
| White balance       | Variable color temperature in K                                  |
| Focus               | Manual and AUTO focus                                            |
| Zoom                |                                                                  |


## Configuration

<img alt="Haivision MoJoPro Camera" src="/img/Integrations/Haivision/Haivision-Mojopro-camera.png" width="30%" />

- When adding a camera, select the model **Haivision - MoJoPro**.
- Enter the IP address of the StreamHub (not the phone) in the IP Address field. Make sure the RCP is assigned an IP address within the same network range as the StreamHub.
- In the Port field, enter `8896`. This is the REST API port used by the StreamHub.
- Set the input number of the StreamHub to which the MoJoPro is connected (1 to 16) inthe MoJoPro app the Login field
- Enter the `api_key` from StreamHub into the Password field in MoJoPro. You can find the API key in the StreamHub web interface by navigating to **Admin > Rest API doc** (look in the top right corner). For detailed instructions, see the [StreamHub User Guide](https://doc.haivision.com/StreamHub/latest/user-menu).
