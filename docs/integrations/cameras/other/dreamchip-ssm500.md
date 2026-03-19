---
id: dreamchip-ssm500
title: "Dreamchip SSM500"
sidebar_label: "Dreamchip SSM500"
description: "Integrate the Dreamchip SSM500 slow-motion camera with Cyanview for remote control in sports production."
keywords: [Dreamchip, SSM500, slow motion, sports]
slug: /integrations/cameras/other/dreamchip-ssm500
---

![Dreamchip SSM500 slow-motion camera](/img/Integrations/Dreamchip/Dreamchip_SSM500.png)

Cyanview controls all AtomOne cameras from Dreamchip over IP, giving you full remote paint control and slow-motion workflow integration from the RCP.

## Supported models

All AtomOne cameras use the same protocol and share the same feature set:

- AtomOne SSM500
- AtomOne SSM501
- AtomOne SSM502

:::info
The SSM501 and SSM502 were released in 2025. Most features are available, but the integration is not yet fully complete. Known gaps: Recording, Playback, and lens control via camera.
:::

:::warning
Keep your camera and Cyanview equipment on the latest software versions. Significant changes were made on both Dreamchip and Cyanview sides in 2023 and 2024, and known incompatibilities exist between mismatched firmware versions.
:::

## Supported controls

Use the official [ProVideoGUI software](https://gitlab.com/dreamchip/provideo-downloads/-/wikis/provideo-gui) from Dreamchip to explore camera capabilities and update firmware (Windows only, requires Dreamchip connection cable).

| Control | Notes |
|:--------|:------|
| **Exposure** — Gain, Shutter, CLS (Clearscan) | |
| **Exposure** — Iris | Available on the mini zoom or with Dreamchip motors |
| **White balance** — R/G/B Gain, AWB (single shot), ATW (continuous) | |
| **White balance** — Color temperature | Changing color temperature sets R/G/B gains similarly to a Sony system camera |
| **Primary corrections** — R/G/B/Master Black level, R/G/B/Master Gamma (BT.709), R/B/Master black and black gamma, Saturation, Detail, Denoise | |
| **R/G/B/Master Flare** | |
| **Knee** — slope and point | |
| **User matrix** | |
| **Multi-matrix** | Selection of 12, 16, 24, or 32 vectors |
| **Color space** — BT.709 or BT.2020 | |
| **OETF** | BT.709 or HDR formats: HLG, PQ, Slog3. Some HDR settings disable parts of the video pipeline, but the camera does not prevent those parameters from being changed. |
| **Lens** — Iris, Focus, Zoom | C-mount lens with Dreamchip motors is controlled through the camera AUX port and detected automatically. Motors must be calibrated in ProVideoGUI. Zoom only on AtomOne Zoom. |
| **Other controls** — Flip (upside-down or mirror), Video format, Genlock | Save as power-up defaults after changing these. The camera reboots internally after changing them, so adjustments may appear sluggish. |

## Workflow

Controlling the SSM500 requires only an IP connection. Below is the simplest workflow.

![Dreamchip SSM500 basic workflow diagram](/img/Integrations/Dreamchip/Dreamchip_SSM500_Workflow.png)

### Standalone mode

In standalone mode, replay and trigger are handled via a [Stream Deck](/docs/integrations/accessories/elgato-stream-deck) or [Shuttle Pro](https://www.contourdesign.com/product/shuttle/) connected to the RCP. Replays are stored in the camera's internal storage.

![Dreamchip SSM500 standalone workflow diagram](/img/Integrations/Dreamchip/Dreamchip_SSM500_Standalone_Workflow.png)

### EVS mode

In EVS mode, the RCP acts as gateway for the EVS system.

![Dreamchip SSM500 EVS workflow diagram](/img/Integrations/Dreamchip/Dreamchip_SSM500_EVS_Workflow.png)

## Configuration

### Power-up defaults

The camera does not save settings automatically. Dreamchip's "auto_save" feature is available but significantly reduces responsiveness — Cyanview does not recommend it. Instead, the camera boots with pre-defined settings, and when the RCP detects the camera, it restores all paint settings from the RCP's stored values. If you power-cycle the camera, the last values are restored automatically.

:::warning
If you adjust settings in ProVideoGUI and save them as power-up defaults, the RCP will overwrite most of them on reconnect. The only settings the RCP does not restore are video format, genlock settings, and special features like lens calibration.
:::

Two special RCP commands are important to know:

- **`SAVE`** — Saves all current settings as power-up defaults. Use this when:
  - You change video format or genlock settings (these are not restored by the RCP).
  - The camera is on a weak link (wireless or remote) — saving ensures correct settings persist after a reconnect.
  - You plan to use the camera as a PoV without a control link.

- **`FACT-D`** (Factory Default) — Resets the camera to factory defaults. Use this when the camera is misbehaving, especially if special settings were applied via ProVideoGUI.

### External lens

:::info
When using a C-mount lens with Dreamchip motors, the lens is controlled through the camera AUX port and detected automatically. Motors must be calibrated and configured in the Dreamchip ProVideo software.
:::

:::warning
Only configure the lens menu when using external lens control. If the lens is controlled through the camera and you also configure an external lens on the CI0/RIO, it will cause compatibility issues.
:::

To configure external lens control, open the camera configuration menu and scroll to **Lens**. Enter the model number and the RIO interface port.

![Dreamchip external B4 lens configuration](/img/Integrations/Dreamchip/Dreamchip_LENS_B4.png)

### Standalone mode setup

- Add your SSM500 to the RCP following the [IP Camera Configuration](/docs/integrations/generic/ip-camera) guide.
- Connect the Stream Deck and Shuttle Pro to the USB port on the back of the RCP.

![RCP back USB port](/img/productGfx/RCP/RCP-USB-back-port@2x-8.png)

- Associate the Stream Deck and Shuttle Pro to the RCP controller.

### EVS mode setup

Refer to the [EVS hypermotion](/docs/integrations/broadcast-systems/evs-hm) page for EVS configuration.

## Troubleshooting

### Camera is red in the config

- Check your wiring.
- Check if your camera firmware is current on the [Dreamchip wiki](https://gitlab.com/dreamchip/provideo-downloads/-/wikis/home#available-downloads).
- Verify the camera is controllable using the [Dreamchip ProVideoGUI](https://gitlab.com/dreamchip/provideo-downloads/-/wikis/provideo-gui).

### Some camera controls are not displayed

- Check if your camera firmware is current on the [Dreamchip wiki](https://gitlab.com/dreamchip/provideo-downloads/-/wikis/home#available-downloads).
- Reset your camera to factory default:
  1. On your RCP, go to `Camera > Custom`.
  2. Tap `FACTD` to reset to factory default.
  3. Tap `STORE` to save the factory default so it persists after reboot.
  4. Unplug and replug the camera.
