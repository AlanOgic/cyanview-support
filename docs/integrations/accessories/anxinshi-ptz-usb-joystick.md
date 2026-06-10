---
id: anxinshi-ptz-usb-joystick
title: "PTZ USB joystick integration"
sidebar_label: "PTZ USB joystick"
description: "Use the Anxinshi USB joystick for PTZ camera control with the Cyanview RCP, including saving and recalling PTZ positions."
keywords: [PTZ, USB joystick, Anxinshi, positions, control]
slug: /integrations/accessories/anxinshi-ptz-usb-joystick
---

![Anxinshi PTZ USB joystick connected to an RCP](/img/Integrations/Accessories/PTZUSBJoystick/Anxinshi-PTZ-Joystick-RCP.png)

The Anxinshi USB joystick lets you control any PTZ camera supported by the Cyanview RCP. A single joystick controls all PTZ cameras configured on the RCP. You can find the joystick on AliExpress: [option 1](https://www.aliexpress.com/item/32825990133.html) or [option 2](https://www.aliexpress.com/item/1005006023355662.html).

## Configuration

1. If you haven't already, configure your PTZ cameras in the RCP.

2. Connect the PTZ USB joystick to the RCP.

   ![PTZ USB joystick connected to the RCP USB port](/img/Integrations/Accessories/PTZUSBJoystick/RCP-USB-Anxinshi-Joystick.png)

3. Configure the joystick in the [RCP Configuration Web UI](/docs/guides/networking/ip-configuration#lan-web-ui-access) on the [Configuration page](/docs/reference/manuals/rcp/web-ui#configuration).

   <video poster="/img/Integrations/Accessories/PTZUSBJoystick/Add-PTZ-USB-Joystick-to-RCP.png" muted controls>
     <source src="/img/Integrations/Accessories/PTZUSBJoystick/Add-PTZ-USB-Joystick-to-RCP.mp4"/>
   </video>

4. The joystick now controls your PTZ cameras through the RCP.

## Operation

### Save and load positions

- **Long press** a button to **save** the current PTZ position.
- **Short press** a button to **move** to the previously saved position.

You can save and load positions from the Anxinshi joystick, the RCP LENS menu, or the [Elgato Stream Deck](/docs/integrations/accessories/elgato-stream-deck).
