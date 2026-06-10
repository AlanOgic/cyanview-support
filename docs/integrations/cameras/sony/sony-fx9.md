---
id: sony-fx9
title: "Sony FX9 integration"
sidebar_label: "Sony FX9"
description: "Control the Sony FX9 with Cyanview over IP or serial. Optional XDCA-FX9 extension unit enables direct Ethernet connection."
keywords: [Sony FX9, XDCA, cinema camera, IP, serial, paint control, Cyanview]
slug: /integrations/cameras/sony/sony-fx9
---

The Sony FX9 gives you full remote paint control from your Cyanview RCP — iris, gain, shutter, white balance, black balance, detail, multi matrix, and more. You can connect over Ethernet (with the XDCA extension) or Wi-Fi, and choose between the `FX9` protocol (maximum control) or `CBM` protocol (unrestricted ND and gain) depending on your production needs.

<img src="/img/Integrations/camera/Sony/Sony-FX9/FX9.png" width="600" alt="Sony FX9 camera" />

## Connection options

### Ethernet connection

<img src="/img/Integrations/camera/Sony/Sony-FX9/FX9-ethernet.png" width="900" alt="FX9 Ethernet wiring diagram" />

:::note
To control your FX9 over Ethernet directly (without a RIO), you need the **Sony XDCA-FX9** extension unit.
:::

### Wi-Fi connection

<img src="/img/Integrations/camera/Sony/Sony-FX9/FX9-wifi.png" width="900" alt="FX9 Wi-Fi wiring with RIO" />

Or connect Wi-Fi directly to the RCP:

<img src="/img/Integrations/camera/Sony/Sony-FX9/FX9-RCP-wifi.png" width="900" alt="FX9 Wi-Fi wiring with RCP" />

See the [Wi-Fi networking guide](/docs/guides/networking/wifi) to configure Wi-Fi on your RCP or RIO.

## Supported controls

| Control | FX9 mode | CBM mode |
|:--------|:--------:|:--------:|
| **Exposure** (Iris, Gain[^1], Shutter, ND filter[^2]) | ✔ | ✔ |
| **White balance** (R/B and Color temp) | ✔ | ✔ |
| **Black balance** (R/B and master black) | ✔ | |
| **Other controls** (Detail, Multi Matrix, ISO base) | ✔ | |
| **Menu navigation** | ✔ | ✔ |
| **Tally** | ✔ | |
| **Camera menu control (OSD)** | ✔ | ✔ |
| **Lens** ([iris, zoom, focus](/docs/reference/manuals/rcp/ui/scene))[^3] | ✔ | ✔ |
| **Scene files** ([save/recall](/docs/reference/manuals/rcp/ui/scene)) | ✔ | ✔ |

[^1]: Gain steps are 3 dB in `FX9` mode, 1 dB in `CBM` mode.

[^2]: The ND filter is preset-only in `FX9` mode, but variable in `CBM` mode.

[^3]: Lens control works through the camera if the lens is compatible. For incompatible lenses (PL mount, etc.), see the [cine lens integration guide](/docs/integrations/lenses/cine-lens).

### Choosing between FX9 and CBM modes

The `FX9` protocol combines Sony's `S700` and `CBM` protocols for maximum control, but puts the camera in RCP mode — which disables variable ND filter and fine gain control.

The `CBM` protocol gives you fewer paint parameters (no blacks, multi matrix, etc.) but keeps the camera unrestricted, with 1 dB gain steps and variable ND.

**Rule of thumb:** When shooting in S-Log, use `CBM` mode for more flexible exposure control. For standard broadcast workflows where you need full paint access, use `FX9` mode.

See the [CBM integration guide](/docs/integrations/cameras/sony/sony-cbm) for details.

## Camera configuration

### Set up color temperature and master black access

Set the **WB button** on the left side of the camera to `Preset`. Without this, color temperature and master black controls are unavailable.

:::info
This is a known Sony firmware behavior — the WB physical switch state affects master black accessibility even though the two features are unrelated.
:::

### Enable remote control

Navigate to **Menu > Technical > RCP** and set:
- `CNS mode` to `Bridge`

<img src="/img/Integrations/camera/Sony/Sony-FX9/FX9-menu-technical-RCP.jpg" width="900" alt="FX9 Technical RCP menu" />

### Configure tally

Navigate to **Menu > Technical > Tally** and set:
- `Tally Control` to `RCP`

<img src="/img/Integrations/camera/Sony/Sony-FX9/FX9-menu-technical-tally.jpg" width="900" alt="FX9 Tally menu" />

### Configure Ethernet

Navigate to **Menu > Network > Wired LAN** and set:
- `Setting` to `On`
- `Camera Remote Control` to `Enable`
- `Detail Settings` according to your network (DHCP or static IP)

<img src="/img/Integrations/camera/Sony/Sony-FX9/FX9-menu-network-LAN.jpg" width="900" alt="FX9 Wired LAN menu" />

Example static IP configuration in **Menu > Network > Wired LAN > Detail Settings**:

<img src="/img/Integrations/camera/Sony/Sony-FX9/FX9-menu-network-staticIP.jpg" width="900" alt="FX9 static IP configuration" />

### Configure Wi-Fi

To connect your camera to an existing Wi-Fi network, navigate to **Menu > Network > Wireless LAN** and set:
- `Setting` to `Station`

<img src="/img/Integrations/camera/Sony/Sony-FX9/FX9-menu-network-Wireless.jpg" width="900" alt="FX9 Wireless LAN menu" />

Then navigate to **Menu > Network > ST Mode Settings** and set:
- `Camera Remote Control` to `Enable`
- `Connected Network` — enter your Wi-Fi SSID, password, and IP settings

<img src="/img/Integrations/camera/Sony/Sony-FX9/FX9-menu-network-STmode.jpg" width="900" alt="FX9 ST Mode settings" />

:::note
If you use **Access Point** mode instead of Station mode, you must also enable `Camera Remote Control`.
:::

## RCP and RIO configuration

Add the FX9 in the [RCP web UI](/docs/reference/manuals/rcp/web-ui):

1. Click **+** to add a new camera
2. Enter a camera number and name
3. Select **Sony** as the brand
4. Select **Sony FX9** as the protocol
5. Enter the IP address of your camera

:::note
If your camera is on a different subnet than your RCP, add a matching IP address to the RCP first. See the [IP configuration guide](/docs/guides/networking/ip-configuration).
:::

The camera block should look like this:

<img src="/img/Integrations/camera/Sony/Sony-FX9/FX9-config-block.png" width="300" alt="FX9 configuration block" />

Once connected, the status indicator turns green:

<img src="/img/Integrations/camera/Sony/Sony-FX9/FX9-config-setup.png" width="300" alt="FX9 connected status" />

:::tip
The `FX9` protocol combines two Sony protocols, which puts the camera in RCP mode and disables variable ND and fine gain. If you need 1 dB gain steps or variable ND, select `CBM` as the model instead of `FX9` (you may need to reboot the camera after switching). See the [CBM integration guide](/docs/integrations/cameras/sony/sony-cbm) for details.
:::

## B4 lens support

To control a Canon CINE-SERVO, Fujinon Cabrio, or any B4 lens on your FX9, see the [B4 lens integration guide](/docs/integrations/lenses/b4-lens).
