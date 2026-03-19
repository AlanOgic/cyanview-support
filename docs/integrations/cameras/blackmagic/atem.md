---
id: atem
title: "Blackmagic ATEM integration"
sidebar_label: "ATEM"
description: "Integrate Blackmagic ATEM switchers with Cyanview for tally feedback and auxiliary routing control."
keywords: [Blackmagic, ATEM, switcher, tally, auxiliary]
slug: /integrations/cameras/blackmagic/atem
---

![Blackmagic ATEM integration workflow](/img/Integrations/Blackmagic/blackmagic-atem-workflow.jpg)

The Blackmagic ATEM integration provides three features:
- Synchronize RCP preview switching with the ATEM monitoring output.
- Receive tally states from the ATEM, including tally from a secondary M/E.
- Control cameras through the ATEM — see [Blackmagic camera control](/docs/integrations/cameras/blackmagic/blackmagic-camera-control).

## Configuration

Add an ATEM module to your RCP configuration.

![Adding an ATEM module to the RCP](/img/Integrations/Blackmagic/blackmagic-atem-add.jpg)

Then configure it:

![ATEM configuration panel](/img/Integrations/Blackmagic/blackmagic-atem-configure.jpg)

1. **IP address** — enter the IP address of the ATEM.
2. **Camera mapping** — map each RCP camera to an ATEM video input. Set the number of inputs for your ATEM model in the **Ports range** field.
3. **Monitoring outputs** — specify which outputs the RCP can access. The default `1-4,Prv1,Prg1` corresponds to AUX1–AUX4, plus the preview and program outputs. See the output label reference below.
4. **Synchronized output** — select which output follows the RCP camera selection.
5. **Tally source** — specify which output provides tally. Leave empty to disable tally. Set to `AUTO` to use the ATEM's built-in tally, which supports multiple cameras on air simultaneously. Set to a specific output such as `Prg2` to use the second M/E program as the tally source — this reports only one camera at a time.

## Output ports and labels

Use these labels in the **Ports range** and **Tally source** fields:

| Label | Description |
| :--- | :--- |
| `1-4` | AUX1 through AUX4 outputs |
| `Prv1` | Preview output of M/E 1 |
| `Prg1` | Program output of M/E 1 |
| `Prv2` | Preview output of M/E 2 |
| `Prg2` | Program output of M/E 2 |
| `Prv3` | Preview output of M/E 3 |
| `Prg3` | Program output of M/E 3 |
| `Prv4` | Preview output of M/E 4 |
| `Prg4` | Program output of M/E 4 |

You can combine values with commas and dashes to define ranges. For example, `1,4-6` selects inputs or AUX outputs 1 and 4 through 6.
