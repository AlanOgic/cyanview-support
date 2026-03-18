---
id: elgato-stream-deck
title: "Elgato Stream Deck integration"
sidebar_label: "Stream Deck"
description: "Control Cyanview functions with an Elgato Stream Deck. Map camera selection, scene recall, and custom actions."
keywords: [Elgato, Stream Deck, macros, camera selection]
slug: /integrations/accessories/elgato-stream-deck
---

<img alt="cyanview-support-RCP-Elgato-Stream-Deck" src="/img/Integrations/Accessories/ElgatoStreamDeck/device.png" width="400" />

## Overview

<img alt="cyanview-support-RCP-Elgato-Stream-Deck-Overview" src="/img/Integrations/Accessories/ElgatoStreamDeck/Elgato-Stream-Deck-RCP-Overview.png" width="600" />

Elgato Stream Deck functionalities:


- Displays camera statuses
- Display camera tally statuses
- Camera selection
- Load/Save scenes 
- Load/Save positions


Supported streamdecks:
- Mini (6 keys)
- Medium (15 keys)
- XL (32 keys)

:::note
When the Streamdeck XL is plugged in, it has an inrush current above the USB2 specifications. The RCP/RIO internal protections will not allow such a high current and limit it to avoid any damage.

In that case, either the Streamdeck XL will boot loop or the RCP/RIO will restart.

To avoid this, you can use a self-powered USB hub between the RCP/RIO and the Streamdeck XL.
:::

<!-- To add Slow motion functionality, with a SSM 500 integration for example. -->

## Configuration

[1] Connect the Stream Deck to the RCP USB port.

<img alt="cyanview-support-RCP-Port-USB-PTZ-Joystick-Controller" src="/img/Integrations/Accessories/PTZUSBJoystick/RCP-USB-Anxinshi-Joystick.png" width="200" />

[2] In the [Configuration page](/docs/reference/manuals/rcp/web-ui#configuration) of the RCP Click on the monitor (`RCP` by default) in the `Controllers` section

<img src="/img/Integrations/Accessories/ElgatoStreamDeck/RCP-Monitor.png" width="300" />

[3] In the right panel, in the `Controller` section, in the list, you should see "cy-rcp-XX-YY.streamdeck", click on it

<img src="/img/Integrations/Accessories/ElgatoStreamDeck/Add-Elgato-Stream-Deck-To-RCP.png" width="300" />

[4] Stream Deck is now associated with the RCP control.

<img src="/img/Integrations/Accessories/ElgatoStreamDeck/Elgato-Stream-Deck-Associated-To-RCP.png" width="300" />

## Operation

<img alt="cyanview-support-RCP-Elgato-Stream-Deck-Camera-Selection-Status" src="/img/Integrations/Accessories/ElgatoStreamDeck/RCP-Elgato-Stream-Deck-Camera-Selection-Status.png" width="400" />

- [1] **Active** camera (blue highlight).
- [2] Camera **Name**.
- [3] Camera **Number**.
- [4] Camera **Status**.
- [5] Camera **Tally**.


## Troubleshooting

### Server error: unexpected

Probably because your Streamdeck is already associated with another item.

How to fix:
* Check if you have another monitor, and eventually, delete it from the other monitor
* Click on every cameras, scroll to `User Controllers` section and check if streamdeck is present, delete it.

After that, the error should be gone.

You can also check in `/dev/app.html`, search for streamdeck and see the link and delete it (`x`)
