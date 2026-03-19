---
id: cine-lens
title: "Cine lens control"
sidebar_label: "Cine lenses"
description: "Control cine servo and motorized lenses with Cyanview. Canon Cine-Servo, Fujinon Cabrio, and compatible motors."
keywords: [cine lens, Cine-Servo, Cabrio, motorized, focus]
slug: /integrations/lenses/cine-lens
---

![Canon Cine Servo lens](/img/Integrations/Lens/canon-cine-servo.png)
![Fujinon Cabrio lens](/img/Integrations/Lens/fujinon-cabrio.png)

Cyanview lets you run cine lens control in parallel with camera control. You only need this when the lens is not directly controllable by the camera — for example, a Sony FX9 with an E-mount lens is controlled through the FX9 protocol, but an FX9 with a PL-mount lens requires this separate lens control path.

When you adjust iris, zoom, or focus on the RCP, the command goes to the lens. When you shade, it goes to the camera. The split is transparent to the vision engineer.

## Lens compatibility

Any motorized Canon (12P digital) or Fujinon (12P or 20P digital) lens is supported, as well as any lens using cmotion motorization.

For non-motorized or prime lenses, you can drive external motors instead:
* [Generic lens motor guide](/docs/integrations/generic/lens)
* [Tilta motors](/docs/integrations/lenses/tilta)

:::note
The Canon 18-80 mm photo lens has no 12P port — only a 20P analog port that supports zoom/focus handles. For remote iris control from the RCP, add external motors (cmotion, ARRI, Tilta, etc.).
:::

## Wiring

Required cables:
* Canon Cine-Servo or cmotion: [CY-CBL-6P-B4-01](/docs/resources/cable-catalog#cy-cbl-6p-b4-01-default)
* Fujinon Cabrio: [CY-CBL-6P-FUJI-02](/docs/resources/cable-catalog#cy-cbl-6p-fuji-02-default) combined with [CY-CBL-6P-B4-01](/docs/resources/cable-catalog#cy-cbl-6p-b4-01-default)

![Cine lens wiring diagram](/img/Integrations/Lens/B4-cabrio.png)

## Compatible Cyanview devices

| Device | Use case |
|--------|----------|
| CI0 | Local (LAN) |
| RIO Live | Local (LAN) with resilient lens control |
| RIO | Remote control (internet), multi-camera |

:::note
* **CI0** acts as a serial/IP converter. If the link between RCP and CI0 is broken or unstable, the lens loses control and the iris closes or resets.
* **RIO Live** runs all protocols onboard. If the link to the RCP drops, the lens remains controlled by the RIO Live.
* **RIO** offers the same resilience as RIO Live, with added multi-camera support and cloud connectivity.
:::

## Controls

* Iris
* Zoom
* Focus

By default, the RCP controls iris and leaves zoom and focus to the cameraman. For robotic applications, the RCP can also control zoom and focus.

:::tip
To restrict control to iris only:
1. On the RCP, press `Lens` to open the lens menu.
2. Press `Lens` again to reach the second page (`Lens2`).
3. Press `Z/F En` to disable zoom/focus — only `Iris En` should be highlighted.
:::

## Setup

1. Set up your camera as usual — this example uses the [Sony FX9](/docs/integrations/cameras/sony/sony-fx9).
2. In the [`Configuration`](/docs/reference/manuals/rcp/web-ui) tab, click your camera.
3. In the right panel, scroll to the `Lens` block.
4. Select **B4 Generic**.
5. Select your CI0/RIO and the port the lens is connected to (example: `RIO-15-215`, port 1).

Your configuration should look like this:

![Cine lens configuration in the RCP web UI](/img/Integrations/Lens/B4-config-setup.png)

When connected successfully, the block turns green:

![Cine lens block — green](/img/Integrations/Lens/B4-config-block.png)

## Troubleshooting

### Iris is not displayed on the RCP

* Verify your cables:
  * Canon: [CY-CBL-6P-B4-01](/docs/resources/cable-catalog#cy-cbl-6p-b4-01-default)
  * Fujinon: [CY-CBL-6P-B4-01](/docs/resources/cable-catalog#cy-cbl-6p-b4-01-default) + [CY-CBL-6P-FUJI-02](/docs/resources/cable-catalog#cy-cbl-6p-fuji-02-default)
  * Check that connectors on the lens and RIO are fully seated.
  * Confirm the RIO port matches your configuration (port 1 or 2).
* In the web UI, confirm the lens block is green (connection OK).
* On the RCP lens menu, check that the lens name/info is displayed (lens communication OK).

If the block is green but lens info is missing, the RCP is not receiving data from the lens — check the cable and connector on the lens side.

### Iris is not moving

* Check that the lens is not in manual mode — set the slider to `A` (auto).
* Check that the lens iris servo is activated (if applicable).
* Verify the lens is powered — some large lenses require external power. Try the zoom rocker to confirm power.
* Set iris priority to `Cable` if applicable.

In `Menu > Info > I/Fprior`, set to `Cable`:

![Lens iris priority setting](/img/Integrations/Lens/B4-iris-priority.png)

### Iris stopped moving after a while

* Check the power supply.
* Inspect all cables for loose or intermittent connections.

If the above checks pass, reset the lens (refer to your lens manual — typically a button combination on power-up).
