---
id: sony-burano
title: "Sony Burano integration"
sidebar_label: "Sony Burano"
description: "Connect and control the Sony Burano cinema camera with Cyanview. Full paint and lens control for high-end production."
keywords: [Sony Burano, cinema camera, paint control]
slug: /integrations/cameras/sony/sony-burano
---

<img alt="RCP Sony Burano" src="/img/Integrations/Sony/Sony-Burano/Burano.avif" width="400" />

## Camera control

The Sony Burano can be controlled in two different ways, both over an IP/Ethernet connection:
* The **Burano** model using the **Sony SDK**: This protocol is used by the Sony 'Monitor & Control' app and provides most controls for exposure, white balance, and recording. On the RCP, this protocol is referred to as `Burano`, as it was the only protocol available initially.
* The **CNS-Bridge** protocol: This is the protocol used by the Sony RCP. It offers a more limited set of controls but includes broadcast paint controls such as black, R/B gains, detail, and multi-matrix. Since this protocol is the same as for other Sony cameras, it is available under the `CNS-Bridge` name on the RCP.

:::warning[Only one protocol at a time!]
The Burano is restricted to allow only one control protocol at a time. If you enable CNS-Bridge, the SDK functions will be disabled by the camera. The FR7 allows both protocols at the same time and it is a great integration. So we initially considered combining the features of CNS-Bridge into the `Burano` model, but this is not possible. If CNS-Bridge is enabled on the camera, SDK functions are disabled and the camera icon will remain red if you select the `Burano` protocol; you must select `CNS-Bridge` in this case.
:::

| Control | Descritpion | Burano (Sony SDK) | CNS-Bridge |
|:-----|:-----|:-----:|:-----:|
**White balance** | Color temperature and tint, no R/B gains |✔|✔|
**AWB / ATW** | Single shot and Auto Tracking White |✔|✔|
**Iris** | Manual and AUTO iris |✔|✔|
**Variable ND** | Clear, variable and AUTO |✔| ✔ 3 steps only |
**Gain/EI** | Gain in dB or ISO, or exposure index (EI) in Cine EI mode |✔ 1dB steps |✔ 3dB steps|
**Shutter** | Manual, AUTO, ECS, OFF |✔|
**Record** | ON/OFF + status) |✔|
**Color gains** | R/B gains | |✔|
**Black** | Master, R, B | |✔|
**Detail** | Master, H/V, Limit, Crispening | |✔|
**Multi Matrix** | Standard 16 vectors multi-matrix | |✔|
**Tally** | |  |✔|


:::tip
**Variable ND** can be assigned to the **iris joystick** and provides a very smooth control, while iris can still be accessed from the exposure knob
:::


## Wiring

<img alt="Cyanview RCP Sony Burano" src="/img/Integrations/Sony/Sony-Burano/Burano-wiring.png" width="800" />

<img alt="Cyanview RCP Sony Burano" src="/img/Integrations/Sony/Sony-Burano/Burano-wiring-wifi.png" width="800" />

:::info
If you need to use non Sony lenses, you would need a RIO/RIO-live with a cable:
* <a href="/docs/Integrations/Lens/CineLens">Canon/Fuji motorised lenses</a>
* <a href="/docs/Integrations/Lens/Tilta">Tilta motors</a>
* ARRI C-Force
:::

## Camera configuration

To control the camera using CNS Bridge mode (which the Sony RCP uses), you can refer to the [BURANO Remote Control Guide](https://sonycine.com/articles/burano-remote-control-guide-white-paper)

In short, from the camera menus:
  * Set a username and password under `Network > Network Setup`
  * Set `Network > Wired LAN > Camera Remote Control` to Enable
  * Set `Technical > RCP > CNS mode` to Bridge

## RCP Configuration

Set up a new camera via the [RCP Configuration UI](/docs/Manuals/RCP/ConfWebUI):
- Enter a custom number, name, etc.
- Select **Sony** for the brand
- Select **Burano** for the model
- Enter the IP of the camera
- Enter the login/password

<img alt="Cyanview RCP Sony Burano setup" src="/img/Integrations/Sony/Sony-Burano/Burano-setup.png" width="400" />

Once correctly configured, the camera icon should turn green:

<img alt="Cyanview RCP Sony Burano block" src="/img/Integrations/Sony/Sony-Burano/Burano-block.png" width="400" />

## From the field

### Sony Burano Canon 17-120mm in 4G

For Chanel, Marseille 2024, Planipresse.

* RIO
* controlling the camera in IP/Ethernet (shading)
* controlling the camera in LANC (menu navigation)
* controlling (+ power) the lens using the serial cable (B4)
* in 4G + UHF in backup
<img src="/img/Integrations/Sony/Sony-Burano/Sony-Burano-4G.jpg"/>

The LANC is optional, useful only if you need the menu navigation from the RCP. We're expecing menu to be available through the SDK in the future.

When wired and using Sony E-mount lenses, the RCP can directly control the camera over ethernet. A RIO is only useful when adding control to other types of lenses or motors, or at the moment for menu navigation and tally.
