---
id: camera-groups
title: "Camera groups configuration"
sidebar_label: "Camera groups"
description: "Organize cameras into groups with Cyanview for efficient multi-camera management and batch control operations."
keywords: [camera groups, multi-camera, management, batch]
slug: /guides/advanced/camera-groups
---

## Concept

This feature allows to create camera groups, with the ability to control each camera of a group at the same time. Grouping cameras can be used when an adjustement must be done on multiple cameras at the same time. For example, to recall a position on PTZ cameras, or to perform a white balance.

## Group configuration

Groups are configured directly in the [Configuration Web UI](/docs/reference/manuals/rcp/web-ui). Once all the cameras are configured, groups can be added on the `Tags` field.

1. First, create your camera configuration. In this example, the configuration contains two cameras in a stadium on each goal, and two [VP4](/docs/reference/manuals/vp4-manual) channels

<img src="/img/Configuration/GROUP-camera-config.png" width="800" />

2. Click on the camera you want to add in a or multiple groups, and set your groups in the `Tags` field. Groups are defined with the keywork `group:`, followed by the group name. Each groups must be separated by a comma. For example : `group:Group1, group:Group2`.

<img src="/img/Configuration/GROUP-config-tags.png" width="800" />

3. Set the desired group name for each cameras that must be grouped. Each camera can have up to height groups. Group names are case sensitive, can contains only alpha-numeric characters plus "_" and "-".


## Using groups on RCP

Each RCP contains a default group named "All". Even when no groups are configured, the "All" group is accessible from the RCP, and allows to control every camera set in the configuration.

- The group menu can be accessed by pressing and holding the Preview button, and selecting the Groups tab.

<img src="/img/Configuration/GROUP-enter-menu.bmp"/>

- On the group menu, groups can be selected by pressing the on-screen button. Once a group is selected, it is highlighed in orange, and the an orange line is displayed around the screen.

<img src="/img/Configuration/GROUP-menu-selected.bmp"/>

- To close the group menu, release the preview buton.

- When a group is selected, the orange line around the screen remains.

<img src="/img/Configuration/GROUP-idle.bmp"/>

- Finally, to unselect a group, enter again in the group menu, and press on the selected group to unselect it. Changing camera also automatically unselect the group.

