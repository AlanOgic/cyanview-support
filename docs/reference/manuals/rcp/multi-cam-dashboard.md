---
id: multi-cam-dashboard
title: "Multi-cam dashboard"
sidebar_label: "Multi-cam dashboard"
description: "Monitor and control all your cameras from a single web interface. Set up scenes, customize layouts, and manage camera groups with the Multi-cam dashboard."
keywords: [RCP, dashboard, multi-cam, monitoring, camera control, scenes, templates]
slug: /reference/manuals/rcp/multi-cam-dashboard
---

The **Multi-cam dashboard** is a companion web app for monitoring and controlling all your cameras from one place. It provides two main views:

- **Monitoring view** — a grid of all cameras showing the most important parameters. You can choose which parameters appear.
- **Control panel view** — a detailed control panel for a single camera with access to every available parameter. You can customize this view as well.

## First-time setup

Starting with release `26.2.1rc1`, the Multi-cam dashboard is disabled by default. To enable it:

1. Open the configuration GUI at `http://[device-ip]`.
2. Go to **Admin**.
3. Click **Enable**.

![Enable the dashboard in Admin](/img/Manual/CC/enable.png)

The status changes to **Running**.

![Dashboard enabled status](/img/Manual/CC/enabled.png)

### Access the dashboard

Open `http://[device-ip]:4000` in your browser, or click the **Multi-cam dashboard** link in the RCP navigation bar.

![Multi-cam dashboard menu link](/img/Manual/CC/menulink.png)

Example URLs:

- `http://cy-rcp-40-249.local:4000`
- `http://10.192.40.249:4000`

:::note
A standalone desktop app is planned for a future release.
:::

## Add cameras

1. Open **Settings → Scene settings**.

![Dashboard settings](/img/Manual/CC/settings.png)

2. Find your camera in the **Discovered cameras** list.
3. Click the **+** button next to the camera name.
4. The camera appears on your dashboard.

![Add a camera to the dashboard](/img/Manual/CC/camera_add.png)

## Organize cameras

Reorder cameras to match your physical setup:

1. Click **Enable sorting** on the dashboard toolbar.
2. Drag cameras to their new positions.

### Work with scenes

**Scenes** organize your cameras into groups — for example, "Studio A" or "Field shoot."

- Switch scenes using the tabs at the top of the dashboard.
- Create a new scene by clicking the **+** tab.
- Delete a scene by clicking **−** on its tab.
- Change the layout in **Settings → Scene settings → Scene design**.

![Scene tabs and camera grid](/img/Manual/CC/scenes.png)

## Control cameras

### Quick controls

Click any camera card to open a quick control panel for fast adjustments.

- Switch between list and grid view.
- Resize the panel by dragging its left edge.
- Close the panel by clicking outside it or pressing **X**.

![Quick control panel](/img/Manual/CC/quick_control.png)

### Full camera control

Click a camera name to access all available controls:

| Category | Parameters |
|----------|-----------|
| **Recording** | Start and stop recording |
| **Lens** | Iris, ND filter, focus, zoom |
| **Exposure** | Gain, shutter, auto exposure |
| **Color** | White balance, RGB, saturation, hue, LUTs |
| **Output** | SDI settings, test patterns |
| **Format** | Resolution, frame rate, codec |

![Full camera control panel](/img/Manual/CC/full_control.png)

## Camera groups

Group cameras for batch organization:

1. Click the **edit** toggle on the dashboard.
2. Select the cameras you want to group.
3. Enter a group name (alphanumeric characters only).
4. Click **Submit**.

To delete a group:

1. Click the **edit** toggle.
2. Click **Delete** on the group tag.

![Camera groups](/img/Manual/CC/groups.png)

## Custom templates

Create your own dashboard and control layouts to match different workflows.

1. Go to **Settings → Dashboard templates**.
2. Click **Create new template**.
3. Drag controls to reorder them.
4. Remove any controls you do not need.
5. Apply the template to your cameras.

:::tip
Control templates come in two versions: **quick** and **full**. Quick templates apply to the quick control panel; full templates apply to the detailed camera view.
:::

### Apply a template

| Dashboard template | Apply to all |
|---|---|
| ![Dashboard template editor](/img/Manual/CC/dashboard_template.png) | ![Apply dashboard template](/img/Manual/CC/dashboard_template_apply.png) |

| Control template | Apply to camera |
|---|---|
| ![Control template editor](/img/Manual/CC/control_template.png) | ![Apply control template](/img/Manual/CC/control_template_apply.png) |

- **Single camera** — open the camera, then select **Apply template**.
- **All cameras** — go to **Dashboard templates** and click **Apply to all**.

### Share templates

- **Export** — go to **Settings → Dashboard templates → Export** to download a JSON file.
- **Import** — go to **Settings → Dashboard templates → Import** and drag-and-drop the JSON file.

## Save and restore

Export and import your complete dashboard configuration — including cameras, templates, and settings.

- **Export a scene** — go to **Settings → Export scene**.
- **Import a scene** — go to **Settings → Import scene**, then drag-and-drop the JSON file.

## Related pages

- [RCP web UI configuration](/docs/reference/manuals/rcp/web-ui) — main RCP configuration interface
- [RCP UI overview](/docs/reference/manuals/rcp/ui) — physical panel controls and display
