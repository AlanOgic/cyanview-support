---
id: elgato-stream-deck
title: "Elgato Stream Deck integration"
sidebar_label: "Stream Deck"
description: "Control Cyanview functions with an Elgato Stream Deck. Map camera selection, scene recall, and custom actions."
keywords: [Elgato, Stream Deck, macros, camera selection]
slug: /integrations/accessories/elgato-stream-deck
---

![Elgato Stream Deck connected to an RCP](/img/Integrations/Accessories/ElgatoStreamDeck/device.png)

Use an Elgato Stream Deck as a physical control surface for your RCP. It displays live camera status, handles tally feedback, and lets you switch cameras or recall scenes with a single keypress.

## Supported models

- Mini (6 keys)
- Medium (15 keys)
- XL (32 keys)

:::warning
The Stream Deck XL draws an inrush current that exceeds USB 2.0 specifications. The RCP/RIO internal protections cap that current to prevent damage, which causes the Stream Deck XL to boot-loop or the RCP/RIO to restart.

Use a self-powered USB hub between the RCP/RIO and the Stream Deck XL to avoid this issue.
:::

## Available functions

![Stream Deck overview showing camera status, tally, and selection keys](/img/Integrations/Accessories/ElgatoStreamDeck/Elgato-Stream-Deck-RCP-Overview.png)

- Display camera statuses
- Display camera tally statuses
- Select cameras
- Load and save scenes
- Load and save positions

## Configuration

1. Connect the Stream Deck to the RCP USB port.

   ![RCP USB port for connecting a Stream Deck or joystick controller](/img/Integrations/Accessories/PTZUSBJoystick/RCP-USB-Anxinshi-Joystick.png)

2. Open the [Configuration page](/docs/reference/manuals/rcp/web-ui#configuration) of the RCP and click the monitor (`RCP` by default) in the `Controllers` section.

   ![RCP monitor entry in the Controllers section](/img/Integrations/Accessories/ElgatoStreamDeck/RCP-Monitor.png)

3. In the right panel under `Controller`, find and click the entry named `cy-rcp-XX-YY.streamdeck`.

   ![Adding the Stream Deck to the RCP controller list](/img/Integrations/Accessories/ElgatoStreamDeck/Add-Elgato-Stream-Deck-To-RCP.png)

4. The Stream Deck is now associated with your RCP.

   ![Stream Deck successfully associated with the RCP](/img/Integrations/Accessories/ElgatoStreamDeck/Elgato-Stream-Deck-Associated-To-RCP.png)

## Operation

![Stream Deck showing camera selection and status indicators](/img/Integrations/Accessories/ElgatoStreamDeck/RCP-Elgato-Stream-Deck-Camera-Selection-Status.png)

Each key displays the following information:

1. **Active** camera — highlighted in blue
2. Camera **name**
3. Camera **number**
4. Camera **status**
5. Camera **tally**

## Troubleshooting

### Server error: unexpected

This error usually means the Stream Deck is already associated with another item. To resolve it:

1. Check whether another monitor exists in the configuration and remove the Stream Deck association from it.
2. Click each camera, scroll to the `User Controllers` section, and delete any Stream Deck entry you find there.

If the error persists, open `/dev/app.html`, search for `streamdeck`, locate the association link, and delete it using the `x` control.
