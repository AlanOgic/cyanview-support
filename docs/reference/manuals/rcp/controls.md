---
id: controls
title: "RCP controls reference"
sidebar_label: "Controls"
description: "Reference guide for all Cyanview RCP controls. Joystick mapping, button functions, and assignable parameters."
keywords: [RCP, controls, joystick, buttons, assignable]
slug: /reference/manuals/rcp/controls
---

<img alt="cyanview-support-RCP-manual-command-panel" src="/img/productGfx/RCP/cyanview-support-RCP-manual-command-panel@2x-8.png" width="700"/>

## LOCK Button

- **lock/unlock**

A 1 second press *locks/unlocks* the RCP panel. 

When the RCP is locked, the screen is dimmed, but is still refreshed with information. 

In this mode, the buttons and encoders have no effects.

- **Power ON/OFF**

5 seconds press then release switches **OFF** the RCP controls. 

Switched **ON** by pressing the *Power/Lock button* again.

## MENU Button

The RCP **MENU** shows information on IP addresses, software versions, GPIO status and other diagnostic information.

### Network

<img alt="cyanview-support-RCP-manual-touchscreen-menu-network-info" src="/img/productGfx/RCP/cyanview-support-RCP-manual-touchscreen-menu-network-info.png" width="400" />

- IP Address, your RCP's fixed ip, can be *ping* to verify the network access.
- MAC Address, allows to setup your network component like firewall or switches.
- DHCP Address, IP address received from the network DHCP server if available.
- Remote support status: available or not.

### System Screen

<img alt="cyanview-support-RCP-manual-touchscreen-menu-system-info" src="/img/productGfx/RCP/cyanview-support-RCP-manual-touchscreen-menu-system-info.png" width="400" />

 Shows version of the different software components of the RCP.

- OS version
- Application version
- Firmware version
- Bootloader version

### Settings

<img alt="cyanview-support-RCP-manual-touchscreen-menu-system-info" src="/img/productGfx/RCP/cyanview-support-RCP-manual-touchscreen-menu-settings.png" width="400" />

This menu allows to set the preview behavior :
- Follow router selection : When set to "Yes", the RCP will automatically display the camera selected by the router.
- AUTO preview on camera change : When set to "Yes", a preview commands, able to control a router, is sent when the camera is changed on the RCP.
- Disable Prev / Next keys : When set to "Yes", the Next / Prev buttons will acts like the Preview button. In this mode, it is not possible to change the camera with the Next / Prev buttons anymore. Usefull for single camera configuration.
- Access all camera : When set to "No", only camera in a restricted list are accessible from the RCP. For future use. 


### Display

<img alt="cyanview-support-RCP-manual-touchscreen-menu-system-info" src="/img/productGfx/RCP/cyanview-support-RCP-manual-touchscreen-menu-display.png" width="400" />

This menu allows to set the brightness settings of the RCP.


### GPIO

The GPIO presents a status of the 8 port of each GPIO is represented by 1 or 0. 

<img alt="cyanview-support-RCP-manual-touchscreen-menu-io-gpio-info-status" src="/img/productGfx/RCP/cyanview-support-RCP-manual-touchscreen-menu-io-gpio-info-status.png" width="400"/>

See [GPIO](/docs/Manuals/RCP/GPIODongle) page for more information about GPIO possibilities.

## Exposure Control

*Rotate* the encoder to set the **Iris**, **Gain**, or **Shutter** exposure.

*Press* the **MODE** button to *switch* between Iris, Gain, and Shutter exposure modes.

When no active mode (no highlighted mode on display), *defaults* exposure mode will be **Iris** if available on the camera, otherwise it will be **Gain** mode.

*Press* the **AUTO** button to *Toggle* the Iris, Gain, or Shutter **auto exposure**.

<img alt="cyanview-support-RCP-manual-command-panel-exposure-iris-gain-shutter" src="/img/productGfx/RCP/cyanview-support-RCP-manual-command-panel-exposure-iris-gain-shutter@2x-8.png" width="300"/>

## RCP Screen

### Screens Overview

<table>
<tr>
    <td>
        <img alt="cyanview-support-RCP-manual-command-panel-touchscreen-menu" src="/img/productGfx/RCP/cyanview-support-RCP-manual-command-panel-touchscreen-menu.png" />
        Main
    </td>
    <td>
        <img alt="cyanview-support-RCP-manual-command-panel-touchscreen-menu-scene" src="/img/productGfx/RCP/cyanview-support-RCP-manual-command-panel-touchscreen-menu-scene.png" />
        Scene
    </td>
    <td>
    </td>
</tr>
<tr>
    <td>
    </td>
    <td>
        <img alt="cyanview-support-RCP-manual-command-panel-touchscreen-menu-auto" src="/img/productGfx/RCP/cyanview-support-RCP-manual-command-panel-touchscreen-menu-auto.png" />
        Auto
    </td>
    <td>
    </td>
</tr>
<tr>
    <td>
    </td>
    <td>
        <img alt="cyanview-support-RCP-manual-command-panel-touchscreen-menu-paint1" src="/img/productGfx/RCP/cyanview-support-RCP-manual-command-panel-touchscreen-menu-paint1.png"/>
        Paint1
    </td>
    <td>
        <img alt="cyanview-support-RCP-manual-command-panel-touchscreen-menu-paint2" src="/img/productGfx/RCP/cyanview-support-RCP-manual-command-panel-touchscreen-menu-paint2.png"/>
        Paint2
    </td>
</tr>
<tr>
    <td>
    </td>
    <td>
        <img alt="cyanview-support-RCP-manual-command-panel-touchscreen-menu-camera" src="/img/productGfx/RCP/cyanview-support-RCP-manual-command-panel-touchscreen-menu-camera.png"/>
        Camera
    </td>
    <td>
    </td>
</tr>
<tr>
    <td>
    </td>
    <td>
        <img alt="cyanview-support-RCP-manual-command-panel-touchscreen-menu-Lens" src="/img/productGfx/RCP/cyanview-support-RCP-manual-command-panel-touchscreen-menu-Lens.png"/>
        Lens
    </td>
    <td>
        <img alt="cyanview-support-RCP-manual-command-panel-touchscreen-menu-Lens" src="/img/productGfx/RCP/cyanview-support-RCP-manual-command-panel-touchscreen-menu-Lens2.png"/>
        Lens2
    </td>
</tr>
</table>

### Screen Navigation

Demonstration on how to access the different **RCP screens**.

<!-- <MP4Gif alt="cyanview-support-RCP-manual-command-panel-touchscreen-navigation" src="/img/productGfx/RCP/cyanview-support-RCP-manual-command-panel-touchscreen-navigation.mp4" poster="/img/productGfx/RCP/cyanview-support-RCP-manual-command-panel-touchscreen-navigation.png" width="400" />
 -->
:::note
Values represented by '--' are functions not supported by that camera model.
:::


## Preview

Change the active camera by pressing the left or right buttons.

If a [router integration](/docs/Integrations/Generic/routers) has been configured, switching camera on the RCP will also switch the router to the same camera.

<img alt="cyanview-support-RCP-manual-command-panel-preview-switcher" src="/img/productGfx/RCP/cyanview-support-RCP-manual-command-panel-preview-switcher@2x-8.png" width="300" />

### GPIO

The PREVIEW button can a preview/touch-down signal via the RCP [GPIO](/docs/Manuals/RCP/GPIODongle) or recalls the selected camera on the router.
