---
id: sony-burano
title: "Sony Burano integration"
sidebar_label: "Sony Burano"
description: "Connect and control the Sony Burano cinema camera with Cyanview. Full paint and lens control for high-end production."
keywords: [Sony Burano, cinema camera, paint control]
slug: /integrations/cameras/sony/sony-burano
---

The Sony Burano connects to Cyanview over IP/Ethernet. Two protocols are available depending on your workflow.

![Sony Burano cinema camera](/img/Integrations/Sony/Sony-Burano/Burano.avif)

## Camera control

Two protocols are supported, both over IP:

- **Burano (Sony SDK)** — The protocol used by Sony's Monitor & Control app. Provides most controls for exposure, white balance, and recording. Referred to as `Burano` in the RCP.
- **CNS-Bridge** — The protocol used by Sony RCPs. More limited controls but includes broadcast paint: black, R/B gains, detail, and multi-matrix. Available as `CNS-Bridge` in the RCP.

:::warning Only one protocol at a time
The Burano allows only one control protocol at a time. Enabling CNS-Bridge disables SDK functions on the camera. If CNS-Bridge is enabled on the camera body, select `CNS-Bridge` in the RCP — the camera icon will remain red if you select `Burano` instead.
:::

| Control | Description | Burano (SDK) | CNS-Bridge |
|:--------|:------------|:------------:|:----------:|
| **White balance** | Color temperature and tint, no R/B gains | ✔ | ✔ |
| **AWB / ATW** | Single shot and auto tracking white | ✔ | ✔ |
| **Iris** | Manual and AUTO iris | ✔ | ✔ |
| **Variable ND** | Clear, variable, and AUTO | ✔ | ✔ (3 steps only) |
| **Gain / EI** | Gain in dB or ISO, or EI in Cine EI mode | ✔ (1 dB steps) | ✔ (3 dB steps) |
| **Shutter** | Manual, AUTO, ECS, OFF | ✔ | |
| **Record** | ON/OFF + status | ✔ | |
| **Color gains** | R/B gains | | ✔ |
| **Black** | Master, R, B | | ✔ |
| **Detail** | Master, H/V, Limit, Crispening | | ✔ |
| **Multi matrix** | Standard 16-vector multi-matrix | | ✔ |
| **Tally** | | | ✔ |

:::tip
Assign **variable ND** to the **iris joystick** for smooth, precise control. Iris remains accessible from the exposure knob.
:::

## Wiring

![Sony Burano LAN wiring diagram](/img/Integrations/Sony/Sony-Burano/Burano-wiring.png)

![Sony Burano Wi-Fi wiring diagram](/img/Integrations/Sony/Sony-Burano/Burano-wiring-wifi.png)

:::info
For non-Sony lenses, add a RIO with a cable:
- [Canon/Fuji motorized lenses](/docs/integrations/lenses/cine-lens)
- [Tilta motors](/docs/integrations/lenses/tilta)
- ARRI C-Force
:::

## Camera configuration

For CNS-Bridge mode (used by Sony RCPs), refer to the [Burano Remote Control Guide](https://sonycine.com/articles/burano-remote-control-guide-white-paper).

In short, from the camera menus:
- Set a username and password under `Network > Network Setup`.
- Set `Network > Wired LAN > Camera Remote Control` to Enable.
- Set `Technical > RCP > CNS mode` to Bridge.

## RCP configuration

Add the camera via the [RCP Configuration UI](/docs/reference/manuals/rcp/web-ui):
- Enter a camera number, name, etc.
- Select **Sony** for brand.
- Select **Burano** for model.
- Enter the camera IP address.
- Enter the login and password.

![Sony Burano RCP setup form](/img/Integrations/Sony/Sony-Burano/Burano-setup.png)

Once correctly configured, the camera icon turns green:

![Sony Burano camera block showing green connected status](/img/Integrations/Sony/Sony-Burano/Burano-block.png)

## From the field

### Sony Burano with Canon 17-120mm over 4G

*Chanel, Marseille 2024, Planipresse.*

- RIO controlling the camera via IP/Ethernet (shading).
- Camera controlled via LANC (menu navigation).
- Lens controlled (and powered) via serial cable (B4).
- Primary link: 4G, backup: UHF.

![Sony Burano with Canon 17-120mm lens on 4G setup in the field](/img/Integrations/Sony/Sony-Burano/Sony-Burano-4G.jpg)

LANC is optional — useful only if you need menu navigation from the RCP. Menu access through the SDK is expected in a future update.

When wired with Sony E-mount lenses, the RCP controls the camera directly over Ethernet. A RIO is only needed for non-Sony lens control, motor control, or — for now — menu navigation and tally.
