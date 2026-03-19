---
id: controls
title: "RCP controls reference"
sidebar_label: "Controls"
description: "Reference guide for all Cyanview RCP controls. Joystick mapping, button functions, and assignable parameters."
keywords: [RCP, controls, joystick, buttons, assignable]
slug: /reference/manuals/rcp/controls
---

![RCP command panel overview](/img/productGfx/RCP/cyanview-support-RCP-manual-command-panel@2x-8.png)

Use this reference to understand every physical control on the RCP: what each button does, how the encoders behave, and how the touchscreen screens are organized.

## LOCK button

**Lock/unlock:** Press and hold for 1 second to lock or unlock the RCP panel. When locked, the screen dims but continues updating with live information. Buttons and encoders have no effect.

**Power off:** Press and hold for 5 seconds then release to switch off RCP controls. Press the Power/Lock button again to switch back on.

## MENU button

Press **MENU** to display diagnostic information: IP addresses, software versions, GPIO status, and more.

### Network

![RCP touchscreen network info screen](/img/productGfx/RCP/cyanview-support-RCP-manual-touchscreen-menu-network-info.png)

- **IP Address** — your RCP's fixed IP; ping it to verify network access.
- **MAC Address** — use this to configure firewalls or managed switches.
- **DHCP Address** — IP address assigned by the network DHCP server, if available.
- **Remote support status** — shows whether remote support is available.

### System screen

![RCP touchscreen system info screen](/img/productGfx/RCP/cyanview-support-RCP-manual-touchscreen-menu-system-info.png)

Shows the version of each RCP software component:

- OS version
- Application version
- Firmware version
- Bootloader version

### Settings

![RCP touchscreen settings screen](/img/productGfx/RCP/cyanview-support-RCP-manual-touchscreen-menu-settings.png)

Controls preview behavior:

- **Follow router selection** — when set to Yes, the RCP automatically displays the camera selected by the router.
- **AUTO preview on camera change** — when set to Yes, a preview command is sent to the router when you change the camera on the RCP.
- **Disable Prev/Next keys** — when set to Yes, the Next/Prev buttons act as the Preview button. Use this for single-camera configurations where camera switching via Next/Prev is not needed.
- **Access all cameras** — when set to No, only cameras in a restricted list are accessible from the RCP (reserved for future use).

### Display

![RCP touchscreen display settings screen](/img/productGfx/RCP/cyanview-support-RCP-manual-touchscreen-menu-display.png)

Adjust the brightness settings for the RCP display.

### GPIO

The GPIO screen shows the status of each of the 8 ports, represented as 1 (active) or 0 (inactive).

![RCP touchscreen GPIO status screen](/img/productGfx/RCP/cyanview-support-RCP-manual-touchscreen-menu-io-gpio-info-status.png)

See the [GPIO](/docs/reference/manuals/rcp/gpio-dongle) page for full details on GPIO capabilities.

## Exposure control

Rotate the encoder to set **Iris**, **Gain**, or **Shutter** exposure. Press **MODE** to switch between the three exposure modes.

When no mode is highlighted on the display, the default exposure mode is **Iris** if the camera supports it, otherwise **Gain**.

Press **AUTO** to toggle auto exposure for the active mode.

![RCP exposure controls — iris, gain, shutter](/img/productGfx/RCP/cyanview-support-RCP-manual-command-panel-exposure-iris-gain-shutter@2x-8.png)

## RCP screen

### Screens overview

<table>
<tr>
    <td>
        ![RCP main touchscreen](/img/productGfx/RCP/cyanview-support-RCP-manual-command-panel-touchscreen-menu.png)
        Main
    </td>
    <td>
        ![RCP scene touchscreen](/img/productGfx/RCP/cyanview-support-RCP-manual-command-panel-touchscreen-menu-scene.png)
        Scene
    </td>
    <td>
    </td>
</tr>
<tr>
    <td>
    </td>
    <td>
        ![RCP auto touchscreen](/img/productGfx/RCP/cyanview-support-RCP-manual-command-panel-touchscreen-menu-auto.png)
        Auto
    </td>
    <td>
    </td>
</tr>
<tr>
    <td>
    </td>
    <td>
        ![RCP paint 1 touchscreen](/img/productGfx/RCP/cyanview-support-RCP-manual-command-panel-touchscreen-menu-paint1.png)
        Paint1
    </td>
    <td>
        ![RCP paint 2 touchscreen](/img/productGfx/RCP/cyanview-support-RCP-manual-command-panel-touchscreen-menu-paint2.png)
        Paint2
    </td>
</tr>
<tr>
    <td>
    </td>
    <td>
        ![RCP camera touchscreen](/img/productGfx/RCP/cyanview-support-RCP-manual-command-panel-touchscreen-menu-camera.png)
        Camera
    </td>
    <td>
    </td>
</tr>
<tr>
    <td>
    </td>
    <td>
        ![RCP lens touchscreen](/img/productGfx/RCP/cyanview-support-RCP-manual-command-panel-touchscreen-menu-Lens.png)
        Lens
    </td>
    <td>
        ![RCP lens 2 touchscreen](/img/productGfx/RCP/cyanview-support-RCP-manual-command-panel-touchscreen-menu-Lens2.png)
        Lens2
    </td>
</tr>
</table>

### Screen navigation

Swipe left or right on the touchscreen to move between RCP screens.

:::note
Values shown as `--` indicate functions not supported by the current camera model.
:::

## Preview

Press the left or right buttons to change the active camera.

If a [router integration](/docs/integrations/generic/routers) is configured, switching cameras on the RCP also switches the router to the same camera.

![RCP preview and camera switcher buttons](/img/productGfx/RCP/cyanview-support-RCP-manual-command-panel-preview-switcher@2x-8.png)

### GPIO

The PREVIEW button can send a preview/touch-down signal via the RCP [GPIO](/docs/reference/manuals/rcp/gpio-dongle), or recall the selected camera on the router.
