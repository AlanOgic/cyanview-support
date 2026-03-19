---
id: b4-return
title: "B4 lens return configuration"
sidebar_label: "B4 return"
description: "Configure B4 lens return signals with Cyanview for accurate lens position feedback on broadcast lenses."
keywords: [B4, lens return, feedback, broadcast lens, configuration]
slug: /guides/advanced/b4-return
---

Use the RET and VTR buttons on B4 lenses to switch the video return signal from your switcher directly from the lens.

## Camera setup

Start by configuring your camera and lens in the web UI `Configuration` section.

- In `Camera`, click `+` to add a new camera (for example, a Dreamchip AtomOne).
- Add your lens — for example, `B4 Generic` on CI0-12-137, port 2.

See [Dreamchip camera setup](/docs/integrations/cameras/other/dreamchip) and [B4 lens setup](/docs/integrations/lenses/b4-lens) for detailed steps.

![B4 return block configuration](/img/Configuration/advanced/B4Ret/B4-ret-block.png)

## Switcher setup

Next, configure your switcher and link your camera to the correct input.

Create an ATEM switcher entry and link your camera (for example, `DC`) to `input 1`.

See [switcher and router integrations](/docs/integrations/lenses/b4-lens) for all supported devices.

![ATEM switcher setup](/img/Configuration/advanced/B4Ret/B4-ret-ATEM-setup.png)

Confirm the link is working — the block should appear green.

![ATEM block green status](/img/Configuration/advanced/B4Ret/B4-ret-ATEM-block.png)

## Lens button link

Navigate to `/dev/app.html` on your RCP. For example, if your RCP is `RCP-18-4`, go to `http://10.192.18.4/dev/app.html`.

Search for your ATEM switcher using `CTRL+F`.

![ATEM switcher in dev app](/img/Configuration/advanced/B4Ret/B4-ret-ATEM-devapp-block.png)

Click the title to open the settings panel on the right.

![ATEM dev app settings panel](/img/Configuration/advanced/B4Ret/B4-ret-ATEM-devapp-setup.png)

Set up B4 video return by filling in the `video_return` field (empty by default). The field accepts a comma-separated list, where each item uses this syntax:

```
output:live_input,program_input,ret1_input,ret2_input
```

Example — `Aux5:1,2,3,4` means:
- `Aux5` — monitor output on your ATEM
- `1` — camera is on input 1; input 1 displays when no button is pressed
- `2` — input 2 displays when the program button is pressed
- `3` — input 3 displays when RET1 is pressed
- `4` — input 4 displays when RET2 is pressed

:::note
**Router input/output names**

Check the RCP configuration page to confirm names match. Input/output names appear in light grey.

- ATEM: inputs are `1, 2, ...` — outputs are `Aux1, Aux2, ...`
- VideoHub: inputs are `1, 2, ...` — outputs are `1, 2, ...`
:::

## Troubleshooting

- Verify your lens is properly configured — change iris from the RCP and confirm you can read and write values.
- Confirm your camera is linked to the correct switcher input — this is how `video_return` numbers map to cameras.
- Verify your `video_return` configuration:
  - Input must be within the router's input range. An input of `21` is ignored if the range is `1–12`.
  - Output must be within the router's output range. `Aux5` is ignored if the range is `1–4`.
  - Syntax must be complete: all fields present, input/output separated by `:`, four inputs separated by `,`, and blocks separated by `;`.
- Monitor MQTT by subscribing to `+/+/camhead/action/set/video_return` — you should see values like `ret1`, `live`, etc. on button press.
