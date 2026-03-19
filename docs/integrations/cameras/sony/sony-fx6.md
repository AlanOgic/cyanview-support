---
id: sony-fx6
title: "Sony FX6 integration"
sidebar_label: "Sony FX6"
description: "Control the Sony FX6 with Cyanview over IP or LANC. White balance, iris, variable ND, gain, shutter, and recording — with smooth ND joystick control."
keywords: [Sony FX6, USB-C adapter, cinema, paint control, LANC, tally, Cyanview]
slug: /integrations/cameras/sony/sony-fx6
---

The Sony FX6 connects to your Cyanview RCP over IP or LANC, giving you remote control of white balance, iris, variable ND, gain, shutter, and recording. You can assign the variable ND to the iris joystick for smooth, precise control while keeping iris on the exposure knob.

![Sony FX6 camera](/img/Integrations/Sony/Sony-FX6/FX6.png)

## Supported controls

| Control | Notes | IP | LANC |
|:--------|:------|:--:|:----:|
| **White balance** | Color temperature and tint (no R/B gains) | ✔ | |
| **Iris** | Manual and AUTO iris | ✔ | ✔ |
| **Variable ND** | Clear, variable, and AUTO | ✔ | |
| **Gain / EI** | Gain in dB or ISO, or exposure index (EI) in Cine EI mode | ✔ | |
| **Shutter** | Manual, AUTO, ECS, OFF | ✔ | |
| **Record** | ON/OFF + status | ✔ | |
| **Tally** | Red/green tally — LANC only | | ✔ |
| **Menu navigation** | LANC only | | ✔ |

:::tip
Assign **variable ND** to the **iris joystick** for smooth, precise control. Iris remains accessible from the exposure knob.
:::

:::info Limited paint control
Sony has announced no further firmware releases for the FX6 beyond a planned 2026 update, which will **not** add new paint controls. Master black, black balance, gamma, and saturation will likely never be available for remote control on the FX6.
:::

## Connection options

The FX6 supports two control methods:
- **IP control** — Over LAN (requires a [compatible USB-Ethernet dongle](#usb-ethernet-compatibility)) or Wi-Fi.
- **LANC** — Adds tally and menu navigation to IP control. See the [Sony LANC integration guide](/docs/integrations/cameras/sony/sony-lanc).

![Sony FX6 wiring diagram showing IP and LANC connections](/img/Integrations/Sony/Sony-FX6/FX6-wiring.png)

## Video walkthrough

<iframe width="800" height="400" src="https://www.youtube.com/embed/5VeY0ZTr-gg?si=qsNNIWV6OpgB3gwd" title="Cyanview FX6 hands-on" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

*Watch on [YouTube](https://www.youtube.com/watch?v=5VeY0ZTr-gg) for chapter navigation.*

## Camera configuration

### Firmware requirements

- Camera firmware **v4 or higher**
- RCP/RIO release **24.1 or above**

### LAN setup

IP control requires authentication. You need the camera's login and password for the RCP configuration.

In **Menu > Network > Wired LAN**:
1. Enable `Camera Remote Control`.
2. Check your IP address in `Detail Settings`.

![FX6 Wired LAN menu showing Camera Remote Control option](/img/Integrations/Sony/Sony-FX6/FX6-setup-lan1.png)

### Wi-Fi setup

In **Menu > Network > ST Mode Settings**:
1. Enable `Camera Remote Control`.
2. Your IP address appears under `Connected Network` once connected.

![FX6 Wi-Fi Station Mode settings showing Camera Remote Control option](/img/Integrations/Sony/Sony-FX6/FX6-setup-wifi2.png)

## RCP configuration

Add the FX6 in the [RCP web UI](/docs/reference/manuals/rcp/web-ui):

1. Click **+** to add a new camera.
2. Enter a camera number and name.
3. Select **Sony** as the brand.
4. Select **Sony FX6** as the model.
5. Enter the camera's IP address.
6. Enter the login and password.

:::important
Ensure the RCP has an IP address on the same subnet as the camera. See the [IP configuration guide](/docs/guides/networking/ip-configuration) to add a new IP to the RCP.
:::

![FX6 RCP configuration form](/img/Integrations/Sony/Sony-FX6/FX6-setup.png)

Once connected, the camera icon turns green:

![FX6 camera block showing green connected status](/img/Integrations/Sony/Sony-FX6/FX6-block.png)

## Troubleshooting

### Camera status does not turn green

1. **Ping the camera from a computer** — Set the computer to the same IP range as the camera. If the ping fails, check the Ethernet dongle and camera IP configuration. If the camera is set to DHCP and you have no DHCP server, switch to static IP.

2. **Ping the RCP from the computer** — Use the RCP IP on the same subnet as the camera. This verifies both devices are on the same network. If the ping fails, [add an IP address to the RCP](/docs/guides/networking/ip-configuration).

3. **Disable and re-enable remote control** in the camera's network settings. The camera can get stuck in an uncontrolled state — toggling this setting resets it.

4. **Power cycle the camera** — Remove the battery or PSU if a soft restart does not help.

### Iris or lens controls do not work

- **Lens adapter issues** — Metabones Canon EF-to-Sony E adapters and the Chrosziel E-to-PL adapter can cause lens control problems. If other parameters (gain, shutter, etc.) work, the issue is likely the adapter, not the RCP. Test iris, zoom, and focus using the Sony CBM or Monitor mobile app — the RCP uses the same API.

- **Direct lens control via RIO** — As an alternative, control servo lenses (B4 or PL) or motors (Tilta, ARRI cforce) directly through a [RIO](/docs/products/rio). This works as a standalone solution or a backup when camera-based lens control fails.

### USB-Ethernet compatibility {#usb-ethernet-compatibility}

The FX6 only works with USB-Ethernet dongles using specific older chipsets. Compatible dongles are increasingly hard to find.

**Compatible chipsets:**
- **ASIX AX88179** — Works. The newer AX88179A and AX88179B do **not** work.
- **Realtek RTL8153** — Some work, some do not. Results vary by manufacturer.

:::warning
An incompatible dongle can crash the FX6 and prevent it from powering off. Between each test, **remove the USB-Ethernet adapter and fully power cycle the camera** before trying another dongle. A compatible dongle may fail if the camera is still in a bad state.
:::

Most USB-C Ethernet dongles use newer chipsets and will not work. Try older USB-A dongles (with a USB-A to USB-C adapter if needed) for better compatibility.
