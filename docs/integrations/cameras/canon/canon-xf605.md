---
id: canon-xf605
title: "Canon XF605 integration"
sidebar_label: "Canon XF605"
description: "Control the Canon XF605 professional camcorder with Cyanview over IP for remote broadcast production."
keywords: [Canon XF605, camcorder, IP, broadcast, remote]
slug: /integrations/cameras/canon/canon-xf605
---

# Canon XF605

This guide covers the integration of Canon XF605 camera.

The camera is compatible with XC protocol.

<img src="/img/Integrations/Canon/XF605/XF605.png" width="400"/>

:::note
While you can follow this <a href="/docs/integrations/cameras/canon/canon-xc">generic guide</a>, prefer this one as all the ranges (lens, etc.) are correctly adapted.
:::

## Wiring

<img src="/img/Integrations/Canon/XF605/XF605-wiring.png" width="700"/>

The control is done over Ethernet.

## Camera control

|Control|XF605
:-----|:----
**Exposure** (Iris, Gain, Shutter, ND filter)|✔
**White balance** (R/B, Color temp)|✔
**Black balance** (R/B, master black and black gamma)|✔
**Other settings** (saturation, knee, detail, denoise)|✔
**Tally**|✔
**OSD/Menu**|✔
**Lens** <a href="/docs/reference/manuals/rcp/ui/scene">(zoom, focus)</a>|✔
**Scene file** : <a href="/docs/reference/manuals/rcp/ui/scene">save/recall</a>|✔

## Camera Configuration

You need to:
* Configure Ethernet static IP
* Enable XC protocol

You can follow this <a href="/docs/integrations/cameras/canon/canon-xc#camera-configuration">generic guide</a> to set up XC protocol on your XF605 camera.

### Camera setup

<table>
<tr>
<td>
<video width="500" poster="/img/Integrations/Canon/XF605/Canon-XF605-cam-setup.png" muted controls>
    <source src="/img/Integrations/Canon/XF605/Canon-XF605-cam-setup.mp4"/>
</video>
</td>
<td>
<ul>
    <li>In `Network Settings`, set `Network` to `Enable`</li>
    <li>
        Click on `New Conn. Setting (Wizard)`:
        <ul>
            <li>in `Select function`<br/>chose `XC Protocol`</li>
            <li>in `Communication settings`<br/>click on `Create New Comm. Setting`</li>
            <li>in `Network type`<br/>select `Ethernet`</li>
            <li>in `Setting Methode`<br/>select `Setup with Network Connection`</li>
            <li>in `IP Address Settings (IPV4)`<br/>select `Manual Setting`</li>
            <li>in `IP Address Settings (IPV4)`<br/>fill in `IP Address`<br/>fill in`Subnet Mask`<br/>click `OK`</li>
            <li>in `TCP/IPV6`<br/>select `Disable`</li>
            <li>in `XC Protocol`<br/>select `Create New Func. Setting`</li>
            <li>in `Authentication Method`<br/>select `No Auth. (general user)`</li>
            <li>in `Conn. Setting Save Dest.`<br/>select a free spot (here `SET 1`)</li>
        </ul>
    </li>
</ul>
</td>
</tr>
</table>

### RCP setup

<table>
<tr>
<td>
<video width="500" poster="/img/Integrations/Canon/XF605/Canon-XF605-RCP-setup.png" muted controls>
    <source src="/img/Integrations/Canon/XF605/Canon-XF605-RCP-setup.mp4"/>
</video>
</td>
<td>
<ul>
    <li>On your RCP/RIO web UI</li>
    <li>In Configuration tab</li>
    <li>Click on + to create a new camera</li>
    <li>Enter a number and a name</li>
    <li>Select the brand Canon and model XF605</li>
    <li>Enter the IP of your camera</li>
</ul>
</td>
</tr>
</table>


<img src="/img/Integrations/Canon/XF605/XF605-setup.png" width="300" />

And once correctly connected, it should be green:

<img src="/img/Integrations/Canon/XF605/XF605-block.png" width="300" />

And on your RCP:

<img src="/img/Integrations/Canon/XF605/F1.BMP"/>

### Tally integration with ATEM (optional)

<table>
<tr>
<td>
<video width="500" poster="/img/Integrations/Canon/XF605/ATEM-setup.png" muted controls>
    <source src="/img/Integrations/Canon/XF605/ATEM-setup.mp4"/>
</video>
</td>
<td>
<ul>
    <li>On your RCP/RIO web UI</li>
    <li>In Configuration tab</li>
    <li>Click on + to create a new $Components`</li>
    <li>Select `Router/Switcher`</li>
    <li>Select `Blackmagic : ATEM`</li>
    <li>Enter a name (optinal)</li>
    <li>Enter an IP</li>
    <li>In Inputs, link camera with a SDI input</li>
    <li>In Outputs, link the RCP with a SDI output</li>
    <li>In Red/Green tally, setup them as AUTO</li>
</ul>
</td>
</tr>
</table>

## Troubleshooting

See the generic XC protocol <a href="/docs/integrations/cameras/canon/canon-xc#troubleshooting">troubleshooting guide</a>
