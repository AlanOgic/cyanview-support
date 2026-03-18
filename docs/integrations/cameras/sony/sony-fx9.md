---
id: sony-fx9
title: "Sony FX9 integration"
sidebar_label: "Sony FX9"
description: "Control the Sony FX9 with Cyanview over IP or serial. Optional XDCA-FX9 extension unit enables direct Ethernet connection."
keywords: [Sony FX9, XDCA, cinema camera, IP, serial]
slug: /integrations/cameras/sony/sony-fx9
---

<img src="/img/Integrations/camera/Sony/Sony-FX9/FX9.png" width="600" />

## Camera wiring

## Ethernet

<img src="/img/Integrations/camera/Sony/Sony-FX9/FX9-ethernet.png" width="900" />

:::note
Pay attention that if you want to control your FX9 over ethernet directly (without a RIO/RIO-live), you need the `Sony XDCA` extension.
:::

## Wi-Fi

<img src="/img/Integrations/camera/Sony/Sony-FX9/FX9-wifi.png" width="900" />


Or

<img src="/img/Integrations/camera/Sony/Sony-FX9/FX9-RCP-wifi.png" width="900" />

You can refer to <a href="/docs/Configuration/WiFi">this guide</a> to set up the RCP/RIO/RIO-live Wi-Fi.

## Camera control


|Control|FX9|CBM
:-----|:-----|:-----|
**Exposure** (Iris, Gain[^1], Shutter, ND filter[^2])|✔|✔
**White balance** (R/B and Color temp)|✔|✔
**Black balance** (R/B and master black)|✔|
**Other controls** (Detail, Multi Matrix, ISO base)|✔|
**Menu Navigation**|✔|✔
**Tally**|✔|
**Camera Menu Control (OSD)**|✔|✔
**Lens** <a href="/docs/Manuals/RCP/RCPUI/RCPUIScene">(iris, zoom, focus)</a>[^3]|✔|✔
**Scene file** : <a href="/docs/Manuals/RCP/RCPUI/RCPUIScene">save/recall</a>|✔|✔


:::note
[^1]: Gain steps is 3dB in `FX9`, 1dB in `CBM` only.


[^2]: The ND filter is only preset in `FX9` while variable in `CBM` only.


[^3]: Lens is controls through the camera if compatible. If not compatible (PL lens, etc.), follow <a href="/docs/Integrations/Lens/CineLens">this guide</a>

The difference in term of control between `FX9` and `CBM` is due to the fact that that the `FX9` combines `S700` and `CBM` protocols to control the camera. But due to that, the camera is in a `RCP mode` and you lose variable ND filter and fine gain control.

While when you use the `CBM` model in the RCP configuration, the camera control is limited because you lose the `S700` controls (blacks, multi matrix, etc.), but the camera stays `unrestricted` (gain steps and ND filter)
:::

As a rule of thumb, when your camera is in SLog, prefer `CBM` mode (instead of `FX9`) as it will give you more control over the camera.

## Camera configuration

### Color temp and Master black

Ensure to turn the WB button on the left side of the camera to `Preset`. Otherwise you will not have color temp or master black controls.

:::info
No idea why there is a link between this button and master black control.
:::

### Remote control

Navigate to `Menu > Technical > RCP` and ensure to set:
* `CNS mode` to `Bridge`

<img src="/img/Integrations/camera/Sony/Sony-FX9/FX9-menu-technical-RCP.jpg" width="900" />


### Tally

Navigate to `Menu > Technical > Tally` and ensure to set:
* `Tally Control` to `RCP`

<img src="/img/Integrations/camera/Sony/Sony-FX9/FX9-menu-technical-tally.jpg" width="900" />

### Ethernet

For Ethernet control:
Navigate to `Menu > Network > Wired LAN` and ensure to set:
* `Setting` to `On`
* `Camera Remote Control` to `Enable`
* `Detail Settings` according to your network setup (DHCP or static)

<img src="/img/Integrations/camera/Sony/Sony-FX9/FX9-menu-network-LAN.jpg" width="900" />

Here is an example of static IP setup (`Menu > Network > Wired LAN > Detail Settings`):

<img src="/img/Integrations/camera/Sony/Sony-FX9/FX9-menu-network-staticIP.jpg" width="900" />

### Wi-Fi

To connect your camera to an existing Wi-Fi:
Navigate to `Menu > Network > Wireless LAN` and ensure to set:
* `Setting` to `Station`

<img src="/img/Integrations/camera/Sony/Sony-FX9/FX9-menu-network-Wireless.jpg" width="900" />

Navigate to `Menu > Network > ST Mode Settings` and ensure to set:
* `Camera Remote Control` to `Enable`
* `Connected Network` to enter your Wi-Fi SSID/password and static/DHCP

<img src="/img/Integrations/camera/Sony/Sony-FX9/FX9-menu-network-STmode.jpg" width="900" />

:::note
Same with the `Access Point` mode. Don't forget to activate `Camera Remote Control`
:::

## RCP/RIO configuration

Set up a new camera via the <a href="/docs/Manuals/RCP/ConfWebUI">RCP Configuration UI</a>:
- Enter a custom number, name, etc.
- Select **Sony** brand
- Select **Sony FX9** for the protocol
- Enter the IP of your camera

:::note
If your camera is in a different range than your RCP. Follow <a href="/docs/Configuration/ConfIP">this guide</a>
:::

This should look like this:

<img src="/img/Integrations/camera/Sony/Sony-FX9/FX9-config-block.png" width="300" />

And once correctly connected, it should be green:

<img src="/img/Integrations/camera/Sony/Sony-FX9/FX9-config-setup.png" width="300" />

:::note
In this mode `FX9`, we combine 2 protocols to control the camera. But due to that, the camera is in a `RCP mode` and you lose variable ND filter and fine gain control.

If you want:
* gain step : 1dB
* ND filter : variable

Chose `CBM` model instead of `FX9` (may require a camera reboot to work properly)

You can have a look at the dedicated <a href="/docs/Integrations/Sony/SonyCBM">CBM integration guide</a>
:::

## B4 lens

If you want to add a Canon CINE-SERVO, Fujinon Cabrio or any B4 lens to your FX9, you can find more information <a href="/docs/Integrations/Lens/B4Lens">here</a>
