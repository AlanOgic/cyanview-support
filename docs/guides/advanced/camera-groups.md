---
id: camera-groups
title: "Camera groups configuration"
sidebar_label: "Camera groups"
description: "Organize cameras into groups with Cyanview for efficient multi-camera management and batch control operations."
keywords: [camera groups, multi-camera, management, batch]
slug: /guides/advanced/camera-groups
---

Camera groups let you control multiple cameras simultaneously — useful for recalling a PTZ position or performing a white balance across a set of cameras at the same time.

## Group configuration

Configure groups in the [Configuration Web UI](/docs/reference/manuals/rcp/web-ui) after setting up your cameras.

1. Create your camera configuration. In this example, two cameras are placed in a stadium at each goal, along with two [VP4](/docs/reference/manuals/vp4-manual) channels.

![Camera configuration overview](/img/Configuration/GROUP-camera-config.png)

2. Click a camera you want to add to a group, then set your groups in the `Tags` field. Use the `group:` keyword followed by the group name. Separate multiple groups with a comma — for example: `group:Group1, group:Group2`.

![Tags field with group assignment](/img/Configuration/GROUP-config-tags.png)

3. Repeat for each camera you want grouped. Each camera supports up to eight groups. Group names are case-sensitive and may only contain alphanumeric characters, underscores (`_`), and hyphens (`-`).

## Using groups on RCP

Every RCP includes a default group called **All**, which is always available even if no custom groups are configured. It lets you control every camera in your configuration at once.

- Press and hold the **Preview** button, then select the **Groups** tab to open the group menu.

![Entering the group menu](/img/Configuration/GROUP-enter-menu.bmp)

- Select a group by pressing its on-screen button. The selected group highlights in orange, and an orange border appears around the screen.

![Group selected in menu](/img/Configuration/GROUP-menu-selected.bmp)

- Release the **Preview** button to close the group menu. The orange border stays visible while a group is active.

![Group active, idle state](/img/Configuration/GROUP-idle.bmp)

:::tip
To deselect a group, re-enter the group menu and press the active group again. Switching to a different camera also deselects the group automatically.
:::
