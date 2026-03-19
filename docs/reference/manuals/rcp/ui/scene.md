---
id: scene
title: "RCP UI — Scene files"
sidebar_label: "Scene"
description: "Manage scene files on the Cyanview RCP. Save, recall, copy, and organize camera paint settings across sessions."
keywords: [RCP, UI, scene files, paint settings, recall]
slug: /reference/manuals/rcp/ui/scene
---

Scene files let you save and recall complete camera paint settings. Access them from the main view by pressing the `SCENE` button or via `MENU > SCENE`.

![RCP main view showing SCENE button](/img/Manual/RCP/Scenes/RCP-main-view.BMP)

Two submenus are available:
- `S. FILES` — save and load scene files.
- `S. CONFIG` — configure folders and filters.

Once inside a submenu, you can:
- Press `BACK` to return to the previous view.
- Press `<` or `>` to move between submenu pages.
- Press `MENU` to return to the main view.

:::tip
The `SCENE` button always returns you to the last submenu page you visited within the scene section. The `MENU` button position is tracked independently — pressing `MENU` returns to the main view, and pressing it again takes you to wherever your last `MENU` navigation left off (which may be `PAINT` or another section, not necessarily `SCENE`).
:::

![Scene menu overview](/img/Manual/RCP/Scenes/RCP-menu-scene.BMP)

## Quick scene files

This page gives you a fast way to save and load scene files using numbered slots.

:::note
If you have an RCP-J, the 5 scene file buttons map to quick-loading slots 1–5 (load only, no save). Since you can lock the joystick module to a specific camera, the quick-load buttons on the RCP and the joystick may operate on different cameras.
:::

### Save and load

| ![Quick scene files main view](/img/Manual/RCP/Scenes/RCP-menu-scene-quick.BMP) | ![Quick scene files actions](/img/Manual/RCP/Scenes/RCP-menu-scene-quick-actions.BMP) |
|---|---|

To **save**:
1. Click `Store` to enter save mode.
2. Select the slot you want to save to.
3. The last used slot is highlighted; you can overwrite it by clicking it again.
4. After clicking a slot, `Store` disengages and you return to load mode.

To **load**: click a slot directly.

### Actions

- `Remote` — modifier that makes save/load act on the remote device (e.g., saves to RIO when using REMI from RIO).
- `Sync Camera` — forces a refresh of values from the camera; useful for RF/wireless.

![Quick scene actions menu](/img/Manual/RCP/Scenes/RCP-menu-scene-quick-actions.BMP)

### Groups

For group setup, see [camera groups](/docs/guides/advanced/camera-groups).

In this example, the BirdDog P200 belongs to the groups `All`, `PTZ`, and `Birddog`.

:::note
The `All` group exists by default and includes every camera in the RCP configuration.
:::

| ![P200 block config](/img/Manual/RCP/Scenes/RCP-config-P200-block.png) | ![P200 group setup](/img/Manual/RCP/Scenes/RCP-config-P200-setup.png) |
|---|---|

![Group mode scene load animation](/img/Manual/RCP/Scenes/RCP-menu-scene-quick-group.gif)
![RCP encoder layout — right side](/img/Manual/RCP/RCP-encoders-3-right.png)

:::note
When group mode is active, all actions apply to the selected group rather than the individual camera. A yellow border appears on the RCP display to indicate group mode.
:::

## Files

The Files page gives you more control over scene file operations: view file names, rename them, and change the source or destination camera.

Go to `Menu > S Files > Files`.

![Scene files management page](/img/Manual/RCP/Scenes/RCP-menu-scene-files.BMP)

Buttons on this page:
- `Current` — the scene file currently loaded on this camera.
- `Selected` — the scene file slot you want to store to or load from.
- `Store` — saves the camera configuration to the selected slot.
- `Load` — loads the selected scene file onto the camera.
- `Source` — the camera to load from, used when transferring a scene file between cameras.

:::info
The label format is `[slot number] [name]`. For example, `1 N/A` means slot 1 with no scene file stored.
:::

Encoders on this page:
- `Select` — changes the selected scene file (highlighted in red).
- `Group` — changes the selected camera group (highlighted in green).
- `Camera` — changes the source camera number (highlighted in blue).

![Scene file encoder layout](/img/Manual/RCP/Scenes/RCP_Scene_File_Encoders.png)

### Store/save

With the camera at its current settings:

![Main view showing current camera settings](/img/Manual/RCP/Scenes/RCP-menu-scene-files-scne1-main-view.BMP)

To store to slot 1:
1. Turn the first encoder to set `Selected` to 1 (shown as `NA` if empty).
2. Click `Store`.

![Save to slot 1 animation](/img/Manual/RCP/Scenes/RCP-menu-scene-file-save.gif)
![RCP encoder — first encoder highlighted](/img/Manual/RCP/RCP-encoders-1-right.png)

Change a setting (e.g., gain) and repeat to store to slot 2:

![Main view with changed gain value](/img/Manual/RCP/Scenes/RCP-menu-scene-files-scene2-values.BMP)

![Save to slot 2 animation](/img/Manual/RCP/Scenes/RCP-menu-scene-file-save2.gif)
![RCP encoder — first encoder highlighted](/img/Manual/RCP/RCP-encoders-1-right.png)

### Load a scene file

1. Turn the first encoder to set `Selected` to the desired slot.
2. Click `Load`.

![Scene files page with slot 2 selected](/img/Manual/RCP/Scenes/RCP_Scene_File_click_load_slot2.BMP)

`Current` updates to reflect the newly loaded slot.

![Scene files page showing slot 2 loaded](/img/Manual/RCP/Scenes/RCP_Scene_File_slot2_loaded.bmp)

### Copying scene files

To copy a scene file from one camera to another, use the `Source` button and the `Camera` encoder.

1. Identify which camera holds the scene file — in this example, Camera 1.

:::info
Two camera numbers are visible: the camera the RCP is connected to (top left) and the scene file source camera (bottom right).
:::

![Scene files page with Camera 1 as source](/img/Manual/RCP/Scenes/RCP_Scene_File_Source_Cam1.BMP)

2. Navigate to the destination camera (Camera 2) using the left/right arrows or switcher.

![Scene files page showing Camera 2 selected, source still Camera 1](/img/Manual/RCP/Scenes/RCP_Scene_File_Source_Cam2.BMP)

3. Click `Source` — it remains highlighted to confirm it is active.

![Source button highlighted for Camera 2](/img/Manual/RCP/Scenes/RCP_Scene_File_Enable_Source_Cam2.BMP)

4. Click `Load`.

![Load button clicked to copy scene file](/img/Manual/RCP/Scenes/RCP_Scene_File_click_load.BMP)

Camera 2 now has the scene file from Camera 1 Slot 1.

![Camera 2 with scene file loaded from Camera 1](/img/Manual/RCP/Scenes/RCP_Scene_File_Enable_loaded.BMP)

### Actions

- `Remote` — saves/loads on the remote device (e.g., RIO when using REMI).
- `Sync Camera` — forces a refresh of values from the camera; useful for RF/wireless.
- `Clear` — deletes the selected slot file.
- `Rename` — renames the selected slot file.

To rename slot 1 to "default":

1. Navigate back to the slot 1 view.

![Scene files page showing slot 1](/img/Manual/RCP/Scenes/RCP-menu-scene-files-save-scene1-2.BMP)

2. Click `ACTIONS`, then `Rename`, and confirm with `✔`.

![Rename animation for slot 1](/img/Manual/RCP/Scenes/RCP-menu-scene-files-rename.gif)

### Files on disk

Scene files are stored on the RCP and accessible as regular files from your computer.

On a Mac, open Finder, go to **Network**, and you'll see all your Cyanview devices:

![Finder network view showing Cyanview devices](/img/Manual/RCP/Scenes/RCP-scene-files-browser.png)

Each device exposes three directories:
- `3DLUT` — 3D LUT files (for compatible cameras and LUT boxes).
- `scenes` — scene files.
- `snapshots` — configuration snapshots.

![Scene files directory listing on the RCP](/img/Manual/RCP/Scenes/RCP-scene-files-list.png)

Files follow the naming convention: `CAM-{CAM_NUMBER}.{SCENE_SLOT}.{SCENE_NAME}.scene`

Opening a `.scene` file in a text editor shows:

```
lens/iris=16.0
denoise=0 0.0
multimatrix/3=0.0 1.0
exp=20.0
multimatrix/4=0.0 1.0
lens/focus_speed=0.0
lens/focus=0.1428571428571429
multimatrix/cnt=6
wb_temp_b=5.6e3 5.6e3 0.0
lens/auto_focus=0
model=P200
multimatrix/1=0.0 1.0
multimatrix/0=0.0 1.0
multimatrix/2=0.0 1.0
color_gains=0.6484375 0.171875
multimatrix/5=0.0 1.0
lens/auto_iris=0
scene_filter=1F
auto/white=manual
multimatrix=0
detail=1 0.0
keyboard=menu    ←  ↑  ↓  → back
saturation=1.0
lens/iris_fstop=16
auto/exp/mode=0
wb_temp_a=3.2e3 3.2e3 0.0
master_gain=1 1.0 400.0
gamma=0.45 0.0 0.0
tally/green=0
number=1
```

You can manipulate scene files directly:
- Rename a file by changing the `SCENE_NAME` portion of the filename.
- Duplicate a file for a different slot by changing `SCENE_SLOT`.
- Duplicate a file for a different camera by changing `CAM_NUMBER`.
- Edit values manually (e.g., set `lens/iris_fstop=4`).

### Group

The group behavior here is identical to the quick scene files page — all actions apply to the selected group instead of the individual camera.

## Presets

A preset is a read-only scene file. You can load it from the RCP but cannot delete or rename it from the device (only from your computer).

To create a preset, copy a scene file into the `presets` directory on the RCP.

![Preset files page showing Factory default](/img/Manual/RCP/Scenes/RCP-menu-scene-presets.BMP)

By default, one preset is available: `Factory default`, which resets the camera to Cyanview default values.

To add your own preset:

1. Browse to the scene files on your computer.

![File browser showing the scene file to copy](/img/Manual/RCP/Scenes/RCP-scene-presets-browse.png)

2. Move or copy the file into the `presets` directory.

![File browser showing the file moved into the presets directory](/img/Manual/RCP/Scenes/RCP-scene-presets-add.png)

The preset is now available for the camera matching the `CAM_NUMBER` in the filename.

:::tip
Use the filename convention `CAM-{CAM_NUMBER}.{SCENE_SLOT}.{SCENE_NAME}.scene` to create presets for specific cameras and slots. You can edit the text file directly to set exact values (e.g., `lens/iris_fstop=4`).
:::

To load a preset, use the same steps as loading a scene file.

![Loading the default preset animation](/img/Manual/RCP/Scenes/RCP-menu-scene-presets.gif)
![RCP encoder — first encoder highlighted](/img/Manual/RCP/RCP-encoders-1-right.png)

## Folders

Folders let you organize scene files into subdirectories — useful for separating different events or productions.

### Create

![Folders configuration page — default view](/img/Manual/RCP/Scenes/RCP-menu-scene-folders-0.BMP)

By default, all scene files are stored in the root directory. In this example:
- Camera 1, slot 2
- Camera 2, slot 1
- Camera 1, slot 1 (preset named `default`)

![File browser showing original flat structure](/img/Manual/RCP/Scenes/RCP-scene-folder-orig.png)

You can create subfolders to organize files by event. In the example below, the root scene file is kept as-is, and two folders (`A` and `B`) each contain their own scene files:

![File browser showing organized A and B folders](/img/Manual/RCP/Scenes/RCP-scene-folder-org.png)

### Load a folder

On the RCP:
1. Turn the 4th encoder to change the base folder.
2. Select the desired folder (e.g., `B`).
3. Click `Apply` to confirm.

![Folder selection animation](/img/Manual/RCP/Scenes/RCP-menu-scene-folders.gif)
![RCP encoder — first encoder highlighted](/img/Manual/RCP/RCP-encoders-1-right.png)

In the file browser, `current` is a symbolic link pointing to the selected folder. Changes made in `B` or in `current` affect the same files.

![File browser showing folder B selected via the current symlink](/img/Manual/RCP/Scenes/RCP-scene-folder-B.png)

All save/load actions now operate within the selected subfolder.

:::tip
To return to the root folder, select **No selected folder**.
:::

## Filters

Filters let you control which parameters are applied when loading a scene file. Saving always captures everything — filters only affect loading.

![Scene filters configuration page](/img/Manual/RCP/Scenes/RCP-menu-scene-filters.BMP)

Available filter options:
- Paint — all paint parameters (white balance, black balance, etc.)
- Matrix — all matrix parameters (matrix, multi-matrix, etc.)
- LUTs
- Iris
- ND/Shutter
- Gain
- PTZF — pan, tilt, zoom, focus

To reset to defaults, click `ACTIONS > Reset Selection`.

![Filter reset animation](/img/Manual/RCP/Scenes/RCP-menu-scene-filters-reset.gif)
