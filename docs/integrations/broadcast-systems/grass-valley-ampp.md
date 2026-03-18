---
id: grass-valley-ampp
title: "Grass Valley AMPP integration"
sidebar_label: "GV AMPP"
description: "Integrate Grass Valley AMPP cloud production platform with Cyanview for remote camera control in cloud workflows."
keywords: [Grass Valley, AMPP, cloud production, remote]
slug: /integrations/broadcast-systems/grass-valley-ampp
---

# GV AMPP

The goal is to describe how to integrate GV AMPP as a tally input

## Wiring

You will need:
* A Cyanview compatible device (RCP, NIO or RIO)
* A computer or VM running the `GV AMPP Tally Service` app

The app will connects to:
* the GV using an API key
* RCP/NIO/RIO using TSL

### RCP wiring

You simply need to put the RCP and the GV AMPP app on the same LAN network.

This will allow you to feed tally input from GV cloud in your RCP directly and route it to all supported cams.

<img src="/img/Integrations/GrassValley/GVAMPP-wiring1.png" width="600"/>

### NIO wiring

You simply need to put the NIO and the GV AMPP app on the same LAN network.

This allows you to output GPIO from GV AMPP using the NIO 16 built-in GPIO's.

<img src="/img/Integrations/GrassValley/GVAMPP-wiring2.png" width="600"/>

## Setup

### RCP/NIO setup

Navigate to your <a src="/docs/reference/manuals/rcp/web-ui">RCP/NIO Configuration UI</a>.

If your GV AMPP app is not in the range `10.192.0.0/16`, check <a href="/docs/guides/networking/ip-configuration">this guide</a> to ensure your RCP/NIO can communicate with your computer.

<img src="/img/Integrations/TSL/TSL-block.png" width="450" />

Change the TSL parameters to:

<img src="/img/Integrations/GrassValley/GVAMPP-setup-TSL.png" width="300"/>

More info <a href="/docs/guides/tally/tally#tsl">here</a>

### GV AMPP app setup

#### Configuration tab

Setup platform:
* Enter the URL of your GV AMPP server
* Enter your API key (pixelated here)
* Click on `CONNECT`, `Status` should go to `**ONLINE**`


Setup TSL client (the RCP/NIO will act as a TSL server):
* Enter the IP address of your RCP/NIO (here `10.1.10.173` is the IP of my NIO)
* Enter the port of the NIO TSL (`8901` by default, adapt if you changed it)
* Click on `CONNECT`


<img src="/img/Integrations/GrassValley/GVAMPP-app1.png" width="600"/>

#### Status tab

The goal here is to link your GV AMPP virtual cams with matching TSL IDs

In this setup:
* I have 4 cams configured (no limitation)
* GV AMPP cloud ID : `5-TEE`, `5-GREEN`, `17-TEE` and `17-GREEN` (can be anything)
* TSL ID : `1`, `2`, `3`, `4` (important, should match your RCP/NIO camera number)

<img src="/img/Integrations/GrassValley/GVAMPP-app2.png" width="600"/>

And because my TSL IDs in GV AMPP are 1, 2, 3 and 4, I have to ensure my RCP/NIO cams IDs are matching:

<img src="/img/Integrations/GrassValley/GVAMPP-RCP-setup.png" width="600"/>

What's important is `GV AMPP TSL ID` and `RCP/NIO camera number`. On your RCP/NIO, you can change names, camera model, etc.

:::note
Here on my NIO configuration I used `not controlled` cams, but if I change the model to Sony FX9 or Panasonic UE150, the tally input (from GV AMPP) would be forwarded to any camera we can control.
:::

### NIO : TSL input, GPO output

Navigate to your <a src="/docs/reference/manuals/rcp/web-ui">RCP/NIO Configuration UI</a>.

In the GPIO tab, you find the 4 cams we created above (with matching IDs).

To configure GPO:
* Select on top/left `Red Tally` (or `Green Tally`)
* On each camera (line), click on the GPO (column) where you want to output the tally
* You can also toggle `L/H` on each GPO depending on if you want it low or high when in tally

<img src="/img/Integrations/GrassValley/GVAMPP-GPO.png" width="600"/>

And in the configuration, it should look like this:

<img src="/img/Integrations/GrassValley/GVAMPP-NIO-status.png" width="600"/>


### Going further

Check:
* Various Tally setup : <a src="/docs/guides/tally/tally">Tally configuration</a>
* Remote prod : <a src="/docs/guides/networking/remi">REMI</a>
* Use case on remote prod golf : <a src="/blog-draft/2022/10/24/GVAMPP-REMI">blog</a>