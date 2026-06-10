---
id: grass-valley-ampp
title: "Grass Valley AMPP integration"
sidebar_label: "GV AMPP"
description: "Integrate Grass Valley AMPP cloud production platform with Cyanview for remote camera control in cloud workflows."
keywords: [Grass Valley, AMPP, cloud production, remote]
slug: /integrations/broadcast-systems/grass-valley-ampp
---

This guide explains how to integrate GV AMPP as a tally input for Cyanview devices. The GV AMPP Tally Service app bridges your GV AMPP cloud environment to your RCP or NIO/RIO over TSL.

## Wiring

You need:
- A Cyanview compatible device (RCP, NIO, or RIO)
- A computer or VM running the `GV AMPP Tally Service` app

The app connects to:
- GV AMPP using an API key
- Your RCP/NIO/RIO using TSL

### RCP wiring

Place the RCP and the GV AMPP app on the same LAN. This feeds tally input from the GV cloud directly to your RCP and routes it to all supported cameras.

![GV AMPP to RCP wiring diagram](/img/Integrations/GrassValley/GVAMPP-wiring1.png)

### NIO wiring

Place the NIO and the GV AMPP app on the same LAN. This lets you output GPIO signals from GV AMPP using the NIO's 16 built-in GPIOs.

![GV AMPP to NIO wiring diagram](/img/Integrations/GrassValley/GVAMPP-wiring2.png)

## Setup

### RCP/NIO setup

Open your [RCP/NIO Configuration UI](/docs/reference/manuals/rcp/web-ui).

If your GV AMPP app is not in the `10.192.0.0/16` range, follow the [IP configuration guide](/docs/guides/networking/ip-configuration) to ensure your RCP/NIO can reach the app.

![TSL block in configuration UI](/img/Integrations/TSL/TSL-block.png)

Set the TSL parameters as shown:

![GV AMPP TSL settings](/img/Integrations/GrassValley/GVAMPP-setup-TSL.png)

See the [tally configuration guide](/docs/guides/tally/tally#tsl) for more details on TSL settings.

### GV AMPP app setup

#### Configuration tab

**Platform setup:**
1. Enter your GV AMPP server URL.
2. Enter your API key.
3. Click **CONNECT** — the status should change to **ONLINE**.

**TSL client setup** (the RCP/NIO acts as TSL server):
1. Enter the IP address of your RCP/NIO.
2. Enter the TSL port (`8901` by default).
3. Click **CONNECT**.

![GV AMPP app configuration tab](/img/Integrations/GrassValley/GVAMPP-app1.png)

#### Status tab

Link your GV AMPP virtual cameras to matching TSL IDs.

In this example:
- 4 cameras are configured
- GV AMPP cloud IDs: `5-TEE`, `5-GREEN`, `17-TEE`, `17-GREEN`
- TSL IDs: `1`, `2`, `3`, `4` — these must match your RCP/NIO camera numbers

![GV AMPP app status tab](/img/Integrations/GrassValley/GVAMPP-app2.png)

Because the TSL IDs are 1–4, your RCP/NIO camera numbers must match:

![GV AMPP RCP camera setup](/img/Integrations/GrassValley/GVAMPP-RCP-setup.png)

The critical mapping is between the **GV AMPP TSL ID** and the **RCP/NIO camera number**. Camera names and models are flexible.

:::note
The example above uses `not controlled` cameras. If you change the model to Sony FX9 or Panasonic UE150, the tally signal from GV AMPP will be forwarded to the connected camera.
:::

### NIO: TSL input, GPO output

Open your [RCP/NIO Configuration UI](/docs/reference/manuals/rcp/web-ui).

In the **GPIO** tab, you see the cameras you created (with matching IDs).

To configure GPO output:
1. Select **Red Tally** or **Green Tally** in the top-left.
2. On each camera row, click the GPO column where you want to output the tally.
3. Toggle `L/H` on each GPO to set whether it goes low or high when in tally.

![GV AMPP GPO configuration](/img/Integrations/GrassValley/GVAMPP-GPO.png)

The final configuration looks like this:

![GV AMPP NIO status](/img/Integrations/GrassValley/GVAMPP-NIO-status.png)

## Going further

- [Tally configuration](/docs/guides/tally/tally) — various tally setup options
- [REMI guide](/docs/guides/networking/remi) — remote production networking
