---
id: preview
title: "Preview configuration guide"
sidebar_label: "Preview"
description: "Set up video preview feeds with Cyanview. Configure return video for camera operators and remote monitoring."
keywords: [preview, return video, monitoring, camera operator]
slug: /guides/preview/preview
---

RCP touchdown (preview) lets a joystick push or button press on the RCP call the correct CCU output on the preview video monitor. Use it to keep the camera operator's return video in sync with whichever camera is active — whether you switch from the RCP or from an external router panel.

## How camera selection works

When one RCP controls one camera, a button press drives a contact closure directly. When one RCP controls multiple cameras, touchdown uses multiple GPIOs or a router protocol integration.

Switching works in both directions simultaneously:

- **RCP to router** — changing cameras on the RCP switches the router or drives a GPO pulse.
- **Router to RCP** — selecting a camera on a router panel (VSM, Cerebrum, Quartz, etc.) automatically updates the RCP camera selection.

This makes it straightforward to manage a large camera count from a single RCP, or to use the RCP as a master panel.

## Configuration options

Choose the approach that matches your setup:

- One camera on the RCP, using the preview button as a GPIO contact closure (RCP GPIO dongle)
- Multiple cameras on one RCP using the RCP GPIO dongle or the NIO (IP box with 16 GPIO)
- Multiple cameras using a router or switcher control protocol
- Ember+ camera selection *(unofficial and undocumented — contact us if your project requires this)*

## GPIO interfaces: RCP dongle or NIO

Two hardware options provide GPIO connectivity.

**CY-CBL-JACK-GPIO8 GPIO dongle**

The [CY-CBL-JACK-GPIO8 GPIO dongle](/docs/reference/manuals/rcp/gpio-dongle) plugs into the back of the RCP and provides 8 bidirectional GPIO pins. Combine two units for 16 GPIO. When controlling a single camera, the pinout matches a Sony RCP on the DB9 connector, so you can plug it directly into pre-wired desk installations.

[![CY-CBL-JACK-GPIO8 GPIO dongle](/img/productGfx/cables/CY-CBL-JACK-GPIO8.png)](/img/productGfx/cables/CY-CBL-JACK-GPIO8.png)

**CY-NIO**

The CY-NIO is a multi-purpose IP box that provides 16 GPIO over the network. It is detected automatically by the RCP and works the same way as the GPIO dongle.

[![CY-NIO IP GPIO box](/img/productGfx/NIO/NIO.png)](/img/productGfx/NIO/NIO.png)

## Configure preview with one camera

This setup mirrors a standard RCP: pressing the preview button generates a contact closure. Use it when the RCP controls only one camera, or when the preview button should be independent of camera selection.

Open the **GPIO** tab and select **GPIO** in the upper-left corner. Link the preview button on the left to the GPIO output at the top. When you press the preview button, the GPO is driven low — equivalent to a contact closure.

![GPIO preview configuration for one camera](/img/Configuration/preview/web-ui-GPIO-preview-01.png)

## Configure preview with multiple cameras

When one RCP controls several cameras, you need one GPIO per camera. Triggering can flow in any direction:

- The RCP generates contact closures to change the router input.
- A router panel or external push button generates a GPI that the RCP receives to select a different camera.
- Both simultaneously — external buttons update both the router and the RCP, while the RCP also drives the router when you change cameras locally.

By default, the RCP generates pulses, so you can switch the router from the RCP buttons, a Streamdeck, or the web GUI switcher tab.

### Configure the GPIO mapping

Select **Preview** mode in the upper-left corner, then choose the RCP from the drop-down. The view shows the mapping for that RCP and all its available cameras.

- **Orange lines (GPI → camera)** — trigger an RCP camera switch when a GPI is activated.
- **Right-side nodes (camera → GPO)** — generate a pulse or level when the camera changes on the RCP or when you press the preview button.

![GPIO preview configuration for multiple cameras](/img/Configuration/preview/web-ui-GPIO-preview-02.png)

### Joystick override mode

Joystick override switches the router input to the selected camera while you hold the preview button, then restores the previous router input when you release it.

You have two options for joystick override:

**Using a router integration**

See the [router integration section](/docs/integrations/generic/routers#joystick-override-configuration) for this setup.

**Using GPIO**

If you control a single camera from the RCP, route the PREVIEW button state directly from the GPIO page to any GPIO output. It behaves like a classic contact closure on a traditional RCP.

For multiple cameras with joystick override over GPIO, configure the RCP to generate one GPIO signal per camera using **levels** instead of pulses. In level mode, holding the preview button keeps that camera's GPIO "closed" for as long as the button is pressed. The RCP itself does not perform the override — external systems (VSM, Cerebrum, dedicated joystick-override boxes) manage the router.

To switch from pulse to level mode, open the controller set properties (main tab, controller section) and set the preview GPIO behavior to **Level**. All preview-related GPIO actions for that controller will then use levels.

![GPIO preview mode set to level or pulse](/img/Configuration/preview/web-ui-GPIO-preview-03.png)

:::tip
Use level mode when an external system (such as VSM or Cerebrum) is responsible for the override logic. Use pulse mode when the RCP drives router selection directly.
:::

## Sync with a router or switcher protocol

Instead of GPIO, you can use a router control protocol to keep camera selection in sync between the RCP and the preview monitor. Configure this on the main configuration tab in the components section. Refer to the integration guide for your equipment or protocol.

The integration module assigns a router output to the RCP controller set, and assigns a router input to each known camera. When the router switches the input on the preview monitor, the RCP automatically changes to the matching camera. When you change the camera on the RCP, it switches the router to the corresponding video input.

![Router protocol sync configuration](/img/Configuration/preview/web-ui-GPIO-preview-04.png)

## RCP options for preview and auto-selection

The RCP exposes several preview-related options under `MENU > Settings` on the LCD interface.

| Option | Description |
|---|---|
| **Follow router selection** | The RCP changes camera automatically when a GPI or router switches the input. Disable this to temporarily lock the RCP to one camera. |
| **Auto preview on camera change** | When you use the arrow keys to change camera, a preview pulse is generated (or the router switches) automatically. Disable to require a manual preview button press after each camera change. |
| **Disable Prev/Next keys** | Disables the arrow keys so all three keys act as the preview button. Useful when one RCP is dedicated to one camera, or when an external panel or Streamdeck handles camera selection. |
| **Access all cameras** | Lets an RCP restricted to a camera subset temporarily access all cameras. *This feature is not yet integrated in the GUI and will be available in a future release.* |
