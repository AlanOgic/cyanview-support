---
id: sony-fx6
title: "Sony FX6 integration"
sidebar_label: "Sony FX6"
description: "Connect and control the Sony FX6 with Cyanview. Requires a USB-C to Ethernet adapter for IP-based camera control."
keywords: [Sony FX6, USB-C adapter, cinema, paint control]
slug: /integrations/cameras/sony/sony-fx6
---

<img src="/img/Integrations/Sony/Sony-FX6/FX6.png" width="400" />

## Camera control

|Control| Notes|IP|LANC
:-----|:-----|:-----|:-----|
**White balance** | Color temperature and tint, no R/B gains |✔|
**Iris** | Manual and AUTO iris |✔|✔
**Variable ND** | Clear, variable and AUTO |✔|
**Gain/EI** | Gain in dB or ISO, or exposure index (EI) in Cine EI mode |✔|
**Shutter** | Manual, AUTO, ECS, OFF |✔|
**Record** | ON/OFF + status) |✔|
**Tally** | Red/Green tally, only available through LANC | |✔
**Menu navigation** | Only available from LANC | |✔

:::tip
**Variable ND** can be assigned to the **iris joystick** and provides a very smooth control, while iris can still be accessed from the exposure knob
:::

:::info Limited control
Sony has announced that there will be no further firmware releases for the FX6, except for a planned update in 2026. However, this update will **not** add any new paint controls. As a result, functions such as master black, black balance, gamma or saturation will likely never be available for remote control on the FX6.
:::

## Camera wiring

The FX6 is controlled over IP or LANC.
* IP control works over LAN or Wi-Fi. LAN requires a compatible USB to ethernet dongle. Most USB-C dongles will not work so make sure to check the [USB-Ethernet compatibility](#usb-ethernet-compatibility)
* LANC can be useful to add tally and menu navigation to IP control. See [Sony LANC](/docs/Integrations/Sony/SonyLanc) for this.


<img src="/img/Integrations/Sony/Sony-FX6/FX6-wiring.png" width="600" />


## FX6 hands-on

<iframe width="800" height="400" src="https://www.youtube.com/embed/5VeY0ZTr-gg?si=qsNNIWV6OpgB3gwd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


*Watch on [YouTube](https://www.youtube.com/watch?v=5VeY0ZTr-gg) to get chapters*
<br/>
<br/>

## Camera configuration

### Firmware Versions:
 * The camera needs to be at firmware v4 or higher
 * The RCP/RIO require release 24.1 or above

### LAN

Authentication has to be enabled for IP control, you will need the login and password for the configuration in the RCP.

When using **LAN**:

In `menu > Network > Wired LAN`

- Enable `Camera Remote Control`
- Check your IP address in `Detail Settings`

<img src="/img/Integrations/Sony/Sony-FX6/FX6-setup-lan1.png" width="400"/>

### Wi-Fi

**Wi-Fi** requires a different option. When Wi-Fi is set to Station Mode:

In `menu > Network > ST Mode Settings`
- Enable `Camera Remote Control`
- Once connected, your IP address is displayed in `Connected Network`

<img src="/img/Integrations/Sony/Sony-FX6/FX6-setup-wifi2.png" width="400"/>


## RCP configuration

Set up a new camera via the [RCP Configuration UI](/docs/Manuals/RCP/ConfWebUI):
- Enter a custom number, name, etc.
- Select **Sony** for the brand
- Select **Sony FX6** for the model
- Enter the IP of the camera
- Enter the login/password

:::important

Make sure the RCP has an IP address in the same range as the camera, follow [this guide](/docs/Configuration/ConfIP) to add a new IP to the RCP.
:::

<img src="/img/Integrations/Sony/Sony-FX6/FX6-setup.png" width="300" />

Once correctly connected, the camera icon should turn green:

<img src="/img/Integrations/Sony/Sony-FX6/FX6-block.png" width="300" />


## Troubleshooting

### Camera doesn't turn green

Check the following:
* **Ping the camera from a computer**
  * Set the computer in the same IP range as the camera
  * Checks the ethernet dongle and camera IP configuration if that part doesn't work
  * If you have the caemra configured as DHCP but don't know if you have a DHCP server, consider configuring static IPs instead
* **Ping the RCP from the computer**
  * Ping the IP address of the RCP which is in the same range as the camera
  * This will validate that the RCP and the camera are in the same network/mask.
  * Make sure you [assigned an IP address on the RCP](/docs/Configuration/ConfIP) if this step doesn't work
* **Disable and re-enable remote control** from the network settings
  * The camera is sometimes stuck in uncontrolled mode and doing this change properly re-enables control
* **Power cycle the camera**, if necessary remove the battery or PSU

### Iris or other lens controls don't work
* Multiple issues can happen when using Metabones Canon EF Lens to Sony E Mount adapters or the Chrosziel Mount Adapter E-to-PL. If control of other parameters are working fine, it's not likely that the RCP or RIO could be the problem here. The best way to check the camera is to use the CBM or Monitor Sony Mobile apps and test iris, zoom and focus from the app. The RCP uses the same API so should work in a similar way.
* Using a RIO, it is possible to directly control Servo lenses (B4 or PL) or even motors like Arri CForce (coming) or Tilta. Beside being a proper solution on its own, it can also be a good backup solution when lens control fails from the camera itself

### USB-Ethernet compatibility

The FX6 only supports USB-Ethernet dongles with older chipsets, and finding compatible ones these days is becoming increasingly difficult. Here’s what we know so far:

- Dongles with the **ASIX AX88179** chipset work. However, the newer AX88179A and AX88179B versions do not.

- Some dongles using the **Realtek RTL8153** chipset are compatible, but not all — it’s hit or miss.

If you plug in an incompatible dongle, the FX6 can crash and might not even power down when you turn it off. So between each test, make sure to **remove the USB-Ethernet adapter and fully power cycle the camera before trying a new one**. Otherwise, you could end up testing a compatible dongle while the camera is still in a bad state, and it won’t work anyway.

Most USB-C Ethernet dongles won’t work, since they tend to use newer chipsets. You’ll have better luck testing older USB-A dongles (if you have any), even if that means using a USB-A to USB-C adapter — not ideal for the connection, but more likely to be compatible.
