---
id: assignables
title: "RCP UI — Assignable controls"
sidebar_label: "Assignables"
description: "Configure assignable controls on the Cyanview RCP. Map camera parameters to physical buttons and knobs."
keywords: [RCP, UI, assignable, buttons, knobs, custom]
slug: /reference/manuals/rcp/ui/assignables
---

## Overview

The RCP has 10 + 1 assignable buttons and 4 assignable encoders.

You can customize:
* the LOCK/PWR button
* the 10 buttons on top of the RCP main screen
* the 4 encoders below the RCP main screen

<img width="480px" src="/img/Manual/RCP/RCP-buttons.png"/>
<img src="/img/Integrations/RED/RCP/F1.BMP"/>
<img width="480px" src="/img/Manual/RCP/RCP-encoders.png"/>

Path : `MENU > SYSTEM > ASSIGN.`

The first tab (`Buttons` gives you an overview of the current buttons assignments)

<img src="/img/Manual/RCP/Assignables/F3.BMP"/>

You can see here that:
* the LOCK button is assigned to `POWER`
* the first line is assigned to anything (`NA`)
* the second line is assigned to SCENE, PAINT, CAMERA, LENS, SYSTEM

If you changed it and wants to get back to the default, you can click on `ACTION` (button on the top left of the screen):

<img src="/img/Manual/RCP/Assignables/F5.BMP"/>

And click on `Reset to default`

## LOCK button

Path : `MENU > SYSTEM > ASSIGN.`

Go in `Set Buttons` and turn the first encoder (`Button`) to select `LOCK`:

<img src="/img/Manual/RCP/Assignables/F31.BMP"/>

You can then chose 2 shortcuts for the LOCK button:
* `Power (view)` : typical use case in broadcast
* `Record (view)` : typical use case in cinematic

`view` means it's not a function and just a shortcut to a view, the list vary based on the selected button.

If `Record` is selected:
* The `LOCK` button LED will reflect the `REC` status of the camera displayed on RCP
* Once clicked, it will redirect you to the record page (REC on/off, status, TC, etc.)

## Assignables buttons

Path : `MENU > SYSTEM > ASSIGN.`

Go in `Set Buttons` and turn the first encoder (`Button`) to select one of the 10 buttons:


<img width="480px" src="/img/Manual/RCP/RCP-buttons.png"/>


<img src="/img/Manual/RCP/Assignables/F4.BMP"/>

Once you have a button and a shortcut, you can click on:
* `Assign` : to link button + shortcut
* `Clear` : to remove the shortcut

For every button (1-10), you can set any `view`, `menu` or `function`:
* `view` : it will redirect you to a view (i.e. `REC` will redirect you to the record page)
* `menu` : it will redirect you to a submenu (i.e. `Paint Menu` will redirect you to the paint submenu)
* `function` : it will execute/trig a function/action

The list:
* `Not assigned` : `NA`
* `Scene Menu (menu)`
* `Scene Files (view)`
* `Scene Config (view)`
* `Paint Menu (menu)`
* `Filters (view)`
* `White (view)`
* `Black (view)`
* `Detail (view)`
* `Skin Detail (view)`
* `Matrix (view)`
* `Gain (view)`
* `Gamma (view)`
* `Knee (view)`
* `Shutter (view)`
* `Color (view)`
* `Look (view)`
* `Denoise (view)`
* `Camera Menu (menu)`
* `Auto (view)`
* `Menu (view)`
* `User Keys (view)`
* `Power (view)`
* `Sensor (view)`
* `Tally (view)`
* `Test (view)`
* `Lens Menu (menu)`
* `Lens (view)`
* `PTZF (view)`
* `Preview (view)`
* `Record (view)`
* `System Menu (menu)`
* `Assignable (view)`
* `Display (view)`
* `GPIO (view)`
* `Info (view)`
* `Units (view)`
* `Power (view)`
* `Priority (view)`
* `Settings (view)`
* `Toggle Cam / Post Priority (func)` : toggle priority between `cam > post` or `post > cam` when combining the camera and post processor
* `Toggle Camera usage (func)` : toggle the camera when combining the camera and post processor (keep only the post)
* `Toggle Post processor usage (func)` : toggle the post when combining the camera and post processor (keep only the camera)
* `Toggle Enable post processor (func)` : toggle the post when combining the camera and post processor (the post is in passthrough mode)

## Assignables encoders

You can customize the 4 encoders below the RCP main screen.

<img src="/img/Integrations/RED/RCP/F1.BMP"/>
<img width="480px" src="/img/Manual/RCP/RCP-encoders.png"/>


Path : `MENU > SYSTEM > ASSIGN.`

Go in `Set Encoders` and turn each encoder to the desired function.


<img src="/img/Manual/RCP/Assignables/F8.BMP"/>
<img width="480px" src="/img/Manual/RCP/RCP-encoders.png"/>

Each encoder can be assigned to:
* `--` : nothing / NA
* `M. GAMMA`
* `GAMMA`
* `ND` (presets and variable)
* `SATURATION`
* `COLOR TEMP`
* `DETAIL`
* `TINT`

Just moving the encoder change the assignation, saved automatically.

If you want to reset it, you can click on the top left button of the RCP screen (`ACTION`) and click on `Reset to default`:

<img src="/img/Manual/RCP/Assignables/F6.BMP"/>

## Example

### RED Raptor

Path : `MENU > SYSTEM > ASSIGN.`

I setup the button 1 to toggle cam/post priority (useful if using a combo of RED Raptor + AJA colorbox, VP4, etc.):

<img src="/img/Manual/RCP/Assignables/RED/F2.BMP"/>

I setup the LOCK button to Record menu (useful for every cinematic camera):

<img src="/img/Manual/RCP/Assignables/RED/F3.BMP"/>

So it looks like this:

<img src="/img/Manual/RCP/Assignables/RED/F3.BMP"/>


I also setup the encoders to saturation, color temp and tint:

<img src="/img/Manual/RCP/Assignables/RED/F3.BMP"/>

So the main view looks like:

<img src="/img/Manual/RCP/Assignables/RED/F5.BMP"/>

You see on the top of the screen the `white` (second line) of assignables buttons.

If you click on it (top of the screen), you now see the `blue` (first line) of assignables buttons.

<img src="/img/Manual/RCP/Assignables/RED/F6.BMP"/>

