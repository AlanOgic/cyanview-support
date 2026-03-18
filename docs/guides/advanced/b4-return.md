---
id: b4-return
title: "B4 lens return configuration"
sidebar_label: "B4 return"
description: "Configure B4 lens return signals with Cyanview for accurate lens position feedback on broadcast lenses."
keywords: [B4, lens return, feedback, broadcast lens, configuration]
slug: /guides/advanced/b4-return
---

# B4 Video Return

## Overview

The goal is to use RET, VTR buttons on B4 lenses to be able to act on the video return from the switcher.

## Camera set up

The first step is to configure the camera and the lens.

Here, I created a Dreamchip AtomOne with a Canon B4 lens:
* On the web UI `Configuration`, in `Camera`, click on `+`
* Create your camera as usual, here I used a Dreamchip AtomOne
* Add your lens as usual, here I used `B4 Generic` on my CI0-12-137, port 2

You can find more information:
* on Dreamchip camera setup <a href="/docs/Integrations/Dreamchip">here</a>.
* on B4 lens set up <a href="/docs/Integrations/Lens/B4Lens">here</a>.

<img src="/img/Configuration/advanced/B4Ret/B4-ret-block.png" width="300"/>

## Switcher set up

The second step is to configure the switcher and link my camera (configured above) to the correct input.

Here, I created an ATEM switcher and linked my camera `DC` to the `input 1`.

You can find more information on various switcher/router integration <a href="/docs/Integrations/Lens/B4Lens">here</a>.

<img src="/img/Configuration/advanced/B4Ret/B4-ret-ATEM-setup.png" width="300"/>

Ensure the link is working, the block should be green:

<img src="/img/Configuration/advanced/B4Ret/B4-ret-ATEM-block.png" width="300"/>

## Lens buttons link

Now, navigate to `/dev/app.html`. If my RCP is `RCP-18-4` and I use the URL: `http://10.192.18.4`, then it is `http://10.192.18.4/dev/app.html`

Search for ATEM switcher (`CTRL+F`)


<img src="/img/Configuration/advanced/B4Ret/B4-ret-ATEM-devapp-block.png" width="300"/>


Click on the title, and you should see a panel on the right:


<img src="/img/Configuration/advanced/B4Ret/B4-ret-ATEM-devapp-setup.png" width="300"/>

Set up the B4 video return by changing the field `video_return` (empty by default):
* It is a list, separated by `,`
* Each item in this list follows the syntax : `output:live_input,program_input,ret1_input,ret2_input`
* In this example: `Aux5:1,2,3,4` means:
    - `Aux5` : my monitor output on my ATEM
    - `1` : my camera is on input 1, input 1 is displayed when no button is pressed
    - `2` : input 2 is displayed when program button is pressed
    - `3` : input 3 is displayed when RET1 button is pressed
    - `4` : input 3 is displayed when RET2 button is pressed

:::note

Router input/output names

Refer to the configuration page of the RCP to ensure names match. Input/Output names are displayed in light grey.

ATEM:
* input names : 1, 2, ...
* output names : Aux1, Aux2, ...

VideoHub:
* input names : 1, 2, ...
* output names : 1, 2, ...
:::

## Troubleshooting

* Ensure your lens is properly configured. You can check by changing iris from RCP, you should read/write value.
* Ensure your camera is properly linked to the valid input in your switcher (this is how we link video_return numbers and cameras)
* Ensure your video_return is properly configured:
    - input is in the input range of the router. If not, will be ignored. You can have input `21` if your router input range is `1-12`
    - output is in the output range of the router. If not, will be ignored. You can have output `Aux5` if your router output range is `1-4`
    - syntax is correct. You need all field, input/output separated by `:`, 4 inputs separated by `,` and blocks separated by `;`
* check on MQTT, you should see button press actions by subscribing to topic `+/+/camhead/action/set/video_return` (you will see values like `ret1`, `live`, etc.)