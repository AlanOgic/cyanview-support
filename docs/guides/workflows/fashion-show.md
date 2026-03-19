---
id: fashion-show
title: "Fashion show workflow"
sidebar_label: "Fashion show"
description: "Cyanview camera control setup for fashion show production. Multi-camera coordination with moving subjects and dynamic lighting."
keywords: [fashion show, workflow, multi-camera, live event]
slug: /guides/workflows/fashion-show
---

This guide covers the technical details from the [PlaniPresse Paris Fashion Week use case](https://www.cyanview.com/how-planipresse-uses-large-sensor-cameras-with-lens-control-for-fashion-shows/) — 12 Sony FX9 cameras, mixed wired and 4G links, PL lenses, and full tally integration.

Paris Fashion Week, summer 2022:
- 9 fixed FX9 cameras with 9 wired RIOs for PL lens control
- 3 mobile FX9 cameras with 3 RIOs over 4G for camera and lens control
- 12 RCPs, one per camera
- Tally integration
- Switcher integration

![Cyanview FX9 Vislink setup at Paris Fashion Week](https://www.cyanview.com/wp-content/uploads/2022/07/CyanView-FX9-Vislink.jpg)

PlaniPresse covered multiple shows during the week: Balenciaga, LV, Gucci, AMI, Rains, Loewe, and others. Fashion shows have shifted from post-production workflows to live multi-camera streaming on social platforms, driving the need for real-time shading of large-sensor cameras.

The two main camera choices at Fashion Week are the Sony Venice and Sony FX9. The Venice supports any B4 lens, but at a higher price. The FX9 offers similar control but is limited to E-mount lenses.

This guide covers:
- Controlling your FX9s
- Integrating any lens (Fuji, Canon, motorized or prime)
- Using any link type: IP/SDI, fiber, RF/4G

## Set up the cameras

PlaniPresse used FX9 cameras and some GoPros. See the full [FX9 integration guide](/docs/integrations/cameras/sony/sony-fx9).

Key points:
- The FX9 can be controlled over Ethernet (with an XDCA accessory) or Wi-Fi (RIO acts as an access point).
- Enable control over Ethernet or Wi-Fi in the camera menu.

![FX9 network LAN menu](/img/Integrations/camera/Sony/Sony-FX9/FX9-menu-network-LAN.jpg)

- Set a fixed IP on the camera.

![FX9 static IP menu](/img/Integrations/camera/Sony/Sony-FX9/FX9-menu-network-staticIP.jpg)

:::note
Each camera IP was in the range `192.168.10.X/16`, where X matches the camera ID. See the [RIO Wi-Fi guide](/docs/guides/networking/wifi-usb) for Wi-Fi dongle options.
:::

## Set up the lenses

See the full integration guides for [B4 lenses](/docs/integrations/lenses/b4-lens) and [Tilta motors](/docs/integrations/lenses/tilta) for motorized setups.

![FX9 on AGITO robotic dolly with Cyanview](https://www.cyanview.com/wp-content/uploads/2022/08/CyanView-FX9-Agito-1.jpg)

The show used a wide variety of lenses:
- Canon Cine-Servo 17-120 mm (PL)
- Canon Cine-Servo 25-250 mm T2.95 (PL)
- Fujinon Cabrio 14-35 mm T2.9 (PL)
- Canon CN-E18-80 mm T4.4 (EF)
- Canon Prime 14 mm f/2.8L II USM (EF)
- Canon 11-24 mm f/4L USM (EF)

Canon lenses use cable [CY-CBL-B4-6P](/docs/resources/cable-catalog#cy-cbl-6p-b4-01-default) and Fujinon lenses use [CY-CBL-6P-FUJI](/docs/resources/cable-catalog#fujinon-cables). PlaniPresse chose to standardize on a Fujinon B4 (12-pin) accessory across all lenses, using a single cable ([CY-CBL-B4-6P](/docs/resources/cable-catalog#cy-cbl-6p-b4-01-default)). Both approaches work — standardizing simplifies wiring on large deployments.

## Set up the RIOs

The steps below describe configuration for camera 1. Repeat the same setup for each camera.

### Configure the group control (REMI)

On each RIO, set up the REMI tag. This lets any RCP in the same group discover and control the camera configured in that RIO.

In the RIO, open the REMI tab:

![RIO REMI tab](/img/Configuration/REMI-tab.png)

Set up a private group name, here `planipresse`:

![PlaniPresse REMI tag configuration](/img/blog/planipresse-remi.png)

### Configure the camera

Create a new camera:
- Enter a number (here, matching the IP address: `192.168.10.X/16`)
- Enter a camera name (here `FX9` — the number alone distinguishes cameras)
- Select brand and model: `Sony` and `FX9`
- Enter the camera IP: `192.168.10.1`

![RIO FX9 camera configuration](/img/blog/planipresse-rio-FX9.png)

### Configure the lens

When the lens is controllable by the camera protocol, iris goes through that channel. For all other cases, control the lens directly through a separate RIO port.

#### B4 lenses (Fuji and Canon)

Select the camera you created:
- Go to the lens section
- Choose model `B4 generic`
- Select the RIO port where the lens is connected (here port `1`)

![RIO B4 lens configuration](/img/blog/planipresse-rio-lens.png)

#### Robotic application lens control

In robotic applications (AGITO, cable cam, crane), the 12-pin port is typically already used by the robot for zoom and focus. Iris is not managed by the robotic operator — it's handled by the vision engineer. But since the B4 port is occupied, you can't use it for iris.

The solution: set lens iris to manual and attach a Tilta motor to the iris ring, connected to the RIO. This gives:
- Robotic operator: zoom and focus through B4
- Vision engineer: iris through Tilta

![RIO robotic lens configuration](/img/blog/planipresse-rio-lens-robotic.png)

#### Other lenses

For lenses with no motorized iris or no B4 connector, use a Tilta motor the same way.

The Canon CN-E18-80 mm T4.4 (EF), for example, has only a zoom handle connector — analog only, no iris control.

![FX9 with Tilta motor on iris at Rains show](https://www.cyanview.com/wp-content/uploads/2022/08/CyanView-FX9-Rains-PFS.jpg)

This lens setup has:
- Zoom handle
- Manual focus ring
- Tilta motor on iris
- RIO providing camera and iris control to the CCU room

### Configure 4G control

Three cameras ran remotely:
- Steadicam — video over RF with Vislink
- AGITO — video over RF with Vislink
- Beauty shot — video over 4G with TVU

Each remote camera's RIO used a 4G USB dongle for control.

![4G dongle connected to RIO](/img/blog/planipresse-4G.jpg)

The RIO configuration is identical whether you're using local Ethernet or 4G. You only need to configure the dongle once:
1. Plug the dongle into your computer
2. Unlock the SIM with your PIN
3. Enter the APN, login, and password
4. Run a speed test to confirm connectivity

Then unplug from your computer, plug into the RIO, and you're ready.

![FX9 on Steadicam with 4G RIO](https://www.cyanview.com/wp-content/uploads/2022/08/CyanView-FX9-SteadyCam-1.jpg)

:::note
Latency was around 60 ms and connection was rock solid, even with peak-hour crowds in busy Paris locations. Camera shading uses far less data than a standard webpage reload.
:::

### Configure FX9 web interface access

The RIO connects to the FX9 over Wi-Fi or Ethernet (via XDCA). It also needs an Ethernet link to the CCU room — PlaniPresse used Ereca CAM RACER fiber (power, video, and Ethernet over SMPTE fiber).

To add a second Ethernet interface to the RIO, plug in a USB-Ethernet dongle. Then enable bridge mode so both interfaces act as a single switch.

In `IP Connections`, check `Auto Bridge USB Interfaces`. Any USB dongle plugs in automatically after that.

![RIO Ethernet bridge configuration](/img/blog/planipresse-ethernet-bridge.png)

This gives you full camera control and access to the FX9 web interface from the CCU room — no extra switch needed.

## Shading a GoPro with the VP4

![VP4 RCP color corrector workflow diagram](/img/diagrams/cyanview-VP4-RCP-color-corrector-CCU-workflow-Overview@2x-8.png)

GoPros don't support camera control, but you can shade them using the VP4 color corrector. Convert the HDMI output to SDI with a Decimator:

![Decimator HDMI to SDI converter](/img/blog/decimator.jpg)

See the full [VP4 manual](/docs/reference/manuals/vp4-manual). The only required VP4 settings are format and genlock:

![VP4 settings page](/img/Manual/VP4/VP4-settings.png)

The VP4 works standalone (via its web interface) or controlled from an RCP. PlaniPresse dedicated one RCP to shading the GoPros.

## Set up the RCPs

The steps below describe configuration for RCP 1. Repeat the same setup for each RCP.

### Configure the group control (REMI)

On each RCP, open the REMI tab and set the same group name as the RIOs (`planipresse`):

![RIO REMI tab](/img/Configuration/REMI-tab.png)

![PlaniPresse REMI tag configuration](/img/blog/planipresse-remi.png)

### Import the camera

In the REMI tab, you'll see the list of devices in the `planipresse` group. Check the box next to the camera you want to import.

![RCP REMI device list](/img/blog/planipresse-rcp-rio.png)

The camera appears in your RCP configuration:

![RCP imported camera](/img/blog/planipresse-rcp-imported.png)

### Tally

Tally input came from the ATEM. See the [router/switcher integration guide](/docs/integrations/generic/routers) for setup details.

The ATEM supports a limited number of simultaneous connections (12), so instead of connecting each RCP to the ATEM, PlaniPresse imported all 12 cameras onto a single RCP and linked each one to the ATEM configuration:

![RCP ATEM configuration](/img/blog/planipresse-ATEM.png)

Tally then routes correctly to each camera:
- Visible on the camera side
- Visible on each RCP preview button (red light)
- Visible on each RCP display (camera name in red or green)

### Preview button

PlaniPresse used an AJA KUMO router — one of the few options supporting this many inputs and outputs with a clean switch. See the [router/switcher integration guide](/docs/integrations/generic/routers).

The RCP preview button lets you call a camera to your monitoring display. With 12 RCPs and 2 vision engineers:
- V1 used RCPs 1–6, with a screen on KUMO output 1
- V2 used RCPs 7–12, with a screen on KUMO output 2

Each RCP had an AJA KUMO block configured:
- Camera linked to its router input (camera 1 → input 1)
- RCP linked to the vision engineer's screen (V1 → output 1)

![RCP KUMO configuration](/img/blog/planipresse-kumo.png)

Once all 12 RCPs were configured, pressing preview on any RCP sent that camera to the operator's display.

## Triggering REC remotely

This production was both streamed (YouTube, Instagram) and recorded simultaneously. Manually starting recording on 12 cameras — opening each web page and clicking REC — is tedious.

Because one RCP already had all 12 cameras imported for tally, and the RCP controls the REC trigger through the camera protocol, you can use [group control](/docs/guides/advanced/camera-groups) to start or stop recording on all cameras at once.

Put the RCP into group control mode, navigate to `Camera > OSD`, and click `REC`. All 12 cameras switch to record in one step. Stop recording the same way.

:::tip
With fiber, you can have clean signal and OSD simultaneously. With RF links, only the clean signal is available — making remote REC control especially useful for HF cameras.
:::
