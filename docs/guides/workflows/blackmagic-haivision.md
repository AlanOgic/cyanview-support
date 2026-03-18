---
id: blackmagic-haivision
title: "Blackmagic and Haivision workflow"
sidebar_label: "Blackmagic + Haivision"
description: "Combine Blackmagic cameras with Haivision transport for remote production using Cyanview camera control."
keywords: [Blackmagic, Haivision, REMI, remote production]
slug: /guides/workflows/blackmagic-haivision
---

# Blackmagic remote control

<img src="/img/Workflows/Blackmagic-backpack-track.jpeg" width="600"/>

This article will describe a typical use case `Remote control of a wireless camera`, here on a `Blackmagic URSA G2`.

This event was covered by <a href="https://aveo-groupe.fr/">AVEO</a>, <a href="https://www.apr.org/">APR</a> and <a href="https://www.leni.fr/">LENI</a> (France).

We will cover:
* Blackmagic URSA G2 camera control
* Haivision integration trough their <a href="https://www.haivision.com/glossary/databridge/">DataBridge</a>
* RIO with RSBM (Blackmagic SDI interface)
* RCP
* Tally input from an ATEM and routing to the remote camera through RCP and RIO


## Backpack setup:

<img src="/img/Workflows/Blackmagic-backpack.jpeg" width="600" />

You can see:
* The RIO and the RSBM (blue boxes), providing camera control and tally output
* The Haivision encoding video and providing the DataBridge to link RCP/RIO through Haivision tunnel.
* The camera wired to the backpack:
   - power supply to a hotswap battery system
   - SDI out, going to the Haivision encoder
   - SDI in, comming from RIO/RSBM providing control of the camera and tally

:::info
The Blackmagic URSA G2 could be controlled through IP with the latest camera update. But unfortunately, there is no tally in the IP protocol of the camera. So if you need tally, the only possibility is through SDI (input on the camera). And this requires a RSBM to provide a SDI to your RIO.
:::

## RIO setup


### Checking for update

It's always a good idea before a new season, if you have time to check for new updates.

You have all the new features and bugfixes. But it also helps find and fix the new ones. So you're helping the Cyanview community!

I updated my RIO:

<img src="/img/Workflows/RIO-24.7.1.png"/>

And my RCP:

<img src="/img/Workflows/RCP-24.7.1.png"/>

:::info
You can update through the admin page (online, through internet) or you can find update files for offline usage <a href="/docs/reference/firmware-download">here</a> to download on your computer
* online update consists of clicking on a new version, the RIO/RCP downloads and install it
* offlie update starts by downloading the file on a computer, and then you drag and drop the file on the webpage of your device
:::

### RIO : Camera configuration

You can find more info <a href="/docs/Integrations/Blackmagic/CameraSDI">here</a>

But basically, I started with creating a blackmagic bus:

<img src="/img/Workflows/blackmagic-bus.png" width="200"/>

:::info
If our camera ID was 1 (the default), this "blackmagic bus" could've been skipped. But this step allows us to select later on the correct camera ID.
:::

<img src="/img/Workflows/blackmagic-bus-config.png" width="200"/>

* In `Interface : Port`, i selected my RIO (`50-82`) and on which port it's plugged (here, port `1`, leaving my second port free)
* In `IDs`, I ensure to select a range big enough to contain my camera ID (my cam is ID `10`, so `1-12` fits perfectly)

Now I can create my camera:


<img src="/img/Workflows/blackmagic-cam-setup.png" width="200"/>
<img src="/img/Workflows/blackmagic-cam.png" width="200"/>

I have:
* a cam name (`CAM1`) and a cam number (`1`) to distinguish them properly
* a brand/model matching my camera (`Blackmagic` and `SDI`)
* and the interface here is the blackmagic bus i created earlier, and i selected my cam ID (`10`)

This is green, so it's properly configured.

:::warning
Note that in IP, the control is bidirectional. But here, we chosed SDI for the tally capability that is missing from IP. And in SDI, the control is unidirectional. So "green", it just means that the camera is properly configured, that RIO and RSBM are working. But not that we have camera control:
* if your SDI cable is broken
* if your camera ID is not ID 10 (like we configured)
* if your lens is not properly configured ("iris auto", for remote control, servo active, etc.)
So always check from RCP, change anything like tally or iris to see it works.
:::

:::tip
Note that you could go for Blackmagic IP and add an external tally light:
* <a href="/docs/reference/manuals/tally-light-manual">tally box</a>, to put on top of camera
* <a href="/docs/resources/build-tally-led">tally LED</a>, to add inside the viewfinder
:::

:::info
Note that we didn't setup anything about
* tally, as it's handled by the camera itself in this case (through SDI)
* external lens, as the iris/lens is controlled through the camera (SDI).
:::

# RIO/RCP REMI setup

The REMI is the protocol used between RCP and RIO.

It works:
* in LAN (Ethernet, Fiber, Wi-Fi)
* through Internet (Ethernet, 4G, etc.)
* RF

And in our case here: through the Haivision DataBridge.

The advantage of the databridge in our case is that:
* Video and telemetry are "linked" (you don't have situation where you have video, but no telemetry)
* No hassle with 4G modems and SIM as you're using the Haivision data plan

:::tip
RCP/RIO allows you to control serial/SDI cameras through an IP tunnel remotely. But it's also interesting for IP camera as our REMI is optimised for remote control: low bandwidth, reduce latency, etc. Camera protocols are rarely designed to work remotely with latency and packet drops. Adding a RIO on camera side helps in these situations (PTZ, etc.)
:::

We add a REMI tag (mix between a group and a password) in our RIO:

<img src="/img/Workflows/rio-remi.png" width="200"/>

I add the same tag in my rcp:

<img src="/img/Workflows/rcp-remi.png" width="200"/>

And now the RCP automatically discover and list RIO's, RCP's and shared cameras:

<img src="/img/Workflows/rcp-remi-list.png" width="200"/>

And once the cam selected, it's imported in my RCP and I can control it:

<img src="/img/Workflows/rcp-remi-cam.png" width="200"/>

:::note
You see that in RCP, it's an `Imported` camera. It's because the camera is really controlled by the RIO. The RCP is just sending/receiving infos through REMI, but the camera control with the camera protocol is done on RIO side. Reducing latency and improving stability.
:::

## Haivision DataBridge

This is not covered here as it's really too specific to your kit and setup.

But you can find more information on this integration <a href="/docs/Integrations/Haivision">guide</a>

But it more or less look like this in our setup:

<img src="/img/Integrations/Haivision/Haivision-wiring.png" width="200"/>

## Tally input from ATEM

You can find more infos on this  <a href="/docs/integrations/generic/routers">guide</a>

You can see:
* I added my ATEM in the component section
* I setup a name (`ATEM`, could be whatever you want)
* The IP (`192.168.88.1`) of my ATEM, ensure it match your RCP network
* I link my camera 1 to the input 1, this will allows us to properly route tally
* I setup tally red and green to "AUTO" to receive tally from ATEM

And that's all, RCP will now receive tally infos and route it to your camera.

:::note
I don't link my rcp to any output as I just have 1 cam.
But if you have more than one cam, you can preview your rcp cam selection on an aux output
:::

:::tip
I used "AUTO" here to use the tally from the ATEM. This supports picture in picture, etc.
In more complex tally setup (like a music festival), you could configure multiple outputs (output 1 for giant screen, output 2 for instagram live, etc.) as tally and then the rcp will deduce tally itself.
:::

<img src="/img/Workflows/rcp-atem-conf.png" width="200"/>
<img src="/img/Workflows/rcp-atem.png" width="200"/>
