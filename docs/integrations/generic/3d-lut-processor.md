---
id: 3d-lut-processor
title: "3D LUT processor integration"
sidebar_label: "3D LUT processors"
description: "Integrate 3D LUT processors with Cyanview for real-time LUT-based color management in your broadcast production pipeline."
keywords: [3D LUT, color management, LUT processor, broadcast]
slug: /integrations/generic/3d-lut-processor
---

The RCP integrates with 3D LUT processors and grading software such as DaVinci Resolve and Premiere. You can grade offline, push a LUT to the RCP for live shading, then export the final LUT back to your grading application at the end of the show.

Workflow overview:
1. Capture rushes from camera.
2. Grade in Resolve and export the LUT to the RCP.
3. Shade live from the RCP — camera controls and LUT apply simultaneously.
4. Export the resulting LUT from the RCP back to Resolve.

## Supported devices

* Cyanview VP4
* Flanders BoxIO
* AJA ColorBox
* Blackmagic Terranex Mini

## Wiring

![3D LUT processor wiring diagram](/img/Integrations/Generic/3DLUTP/3DLUTP-wiring.png)

:::note
The laptop is optional. You only need it for initial setup and LUT import/export.
:::

## Setup

The setup follows the same steps as any [color corrector integration](/docs/integrations/generic/color-corrector).

Open your [RCP Configuration UI](/docs/reference/manuals/rcp/web-ui). In the `Configuration` tab, under `Components`, click `+` and select `Video Processor`. Choose your device, then enter a name and IP address:

![3D LUT processor setup](/img/Integrations/Generic/3DLUTP/3DLUTP-setup.png)

* **Step 1** — enter a name for the processor (optional)
* **Step 2** — enter the device IP address

When connected successfully, the block turns green:

![3D LUT processor block — green](/img/Integrations/Generic/3DLUTP/3DLUTP-block.png)

:::note
The VP4 is auto-detected — no manual setup required.
:::

Create a camera and, in the `Video Processor` section, select the processor you just configured:

![Camera with video processor assigned](/img/Integrations/Generic/3DLUTP/3DLUTP-cam1.png)

:::note
`Not controlled` in the camera head means you are controlling the LUT processor only. You can combine this with a camera head (FX9, etc.) to control both simultaneously.
:::

## Usage

For general RCP operation with a color corrector or combined camera + CC setup, see the [color corrector RCP operation guide](/docs/integrations/generic/color-corrector#rcp-operation).

The steps below show the DaVinci Resolve workflow, but the process is the same with any grading software.

### Import/export a 3D LUT

In your grading software, export the LUT in **33-point Cube** format:

![Resolve LUT export dialog](/img/Integrations/Generic/3DLUTP/resolve-export.png)

:::note
On Windows:
1. Ensure your PC can reach the RCP web UI.
2. Open File Explorer → `This PC`.
3. Right-click → `Add a network location`.
4. Enter `\\<RCP IP>\3DLUT` (use backslashes), for example `\\10.192.18.4\3DLUT`.
:::

Make sure your computer is on the same network as the RCP:

![Mac fixed IP configuration](/img/Integrations/Generic/3DLUTP/mac-fixed-IP.png)

Open Finder. Under `Network`, Cyanview devices appear by serial number:

![Mac network browser showing Cyanview devices](/img/Integrations/Generic/3DLUTP/mac-network-browse.png)

Click the RCP, then double-click `3DLUT` to mount the shared directory:

![RCP shared folder in Finder](/img/Integrations/Generic/3DLUTP/mac-rcp-browse.png)

The mounted directory is empty by default:

![Empty 3DLUT directory](/img/Integrations/Generic/3DLUTP/mac-rcp-3DLUT-empty.png)

The `exports` subfolder holds LUTs exported from the RCP. Copy your graded LUT into the root `3DLUT` directory:

![3DLUT directory with LUT files](/img/Integrations/Generic/3DLUTP/mac-rcp-3DLUT.png)

In this example, two test LUTs are present: `unsaturated` and `saturated`.

:::note
LUT filename rules:
* Allowed characters: `-`, `_`, `.`
* Must end with `.cube`
* Names are case-sensitive: `saturated.cube` ≠ `SATURATED.cube`
* No spaces: `LUT Blackmagic_1.cube` is not valid
:::

### RCP operation

The RCP main screen looks like this when a LUT processor is configured:

![RCP scene overview](/img/Integrations/Generic/3DLUTP/rcp-scene0.png)

Navigate to `Paint 1 > Color`:

![RCP color page with no LUT loaded](/img/Integrations/Generic/3DLUTP/rcp-nolut.png)

Turn the third encoder to browse available LUTs:

![Browsing LUT 1 on RCP](/img/Integrations/Generic/3DLUTP/rcp-browse-lut1.png)
![Browsing LUT 2 on RCP](/img/Integrations/Generic/3DLUTP/rcp-browse-lut2.png)

Press the third encoder (`Set LUT > Apply`) to load the selected LUT onto the BoxIO channel configured in the RCP.

Once loaded, `Apply` disappears:

![RCP with LUT loaded and Save option visible](/img/Integrations/Generic/3DLUTP/rcp-save.png)

The LUT `unsaturated.cube` is now active. As you shade from the RCP, the RCP recalculates the LUT in real time.

At the end of the show, press the fourth encoder (`Save LUT > Save`) to export the final LUT (base LUT + live shading) to the `exports` directory:

![Exported LUT in the 3DLUT exports folder](/img/Integrations/Generic/3DLUTP/rcp-3DLUT-exported.png)

The exported file is named `X_Y.cube`, where:
* `X` = camera number
* `Y` = camera name

In this example, the exported file is `1_BoxIO-CH1.cube`, ready to import back into Resolve over the network.

## Downloads

Download these test LUTs (generated from DaVinci Resolve):
* [Zero saturation — black and white](/files/3DLUTP/unsaturated.cube)
* [Over-saturated](/files/3DLUTP/saturated.cube)
