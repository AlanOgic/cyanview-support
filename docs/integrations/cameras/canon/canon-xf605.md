---
id: canon-xf605
title: "Canon XF605 integration"
sidebar_label: "Canon XF605"
description: "Control the Canon XF605 professional camcorder with Cyanview over IP for remote broadcast production."
keywords: [Canon XF605, camcorder, IP, broadcast, remote]
slug: /integrations/cameras/canon/canon-xf605
---

Cyanview controls the Canon XF605 over Ethernet using the XC protocol. This page has all settings and control ranges correctly adapted for the XF605.

![Canon XF605 camcorder](/img/Integrations/Canon/XF605/XF605.png)

:::tip
Use this page instead of the [generic XC guide](/docs/integrations/cameras/canon/canon-xc) — lens ranges and other parameters are pre-configured for the XF605.
:::

## Wiring

![Canon XF605 wiring diagram](/img/Integrations/Canon/XF605/XF605-wiring.png)

Control runs over Ethernet.

## Camera control

| Control | XF605 |
| :--- | :--- |
| **Exposure** (iris, gain, shutter, ND filter) | ✔ |
| **White balance** (R/B, color temp) | ✔ |
| **Black balance** (R/B, master black, black gamma) | ✔ |
| **Other settings** (saturation, knee, detail, denoise) | ✔ |
| **Tally** | ✔ |
| **OSD/Menu** | ✔ |
| **Lens** ([zoom, focus](/docs/reference/manuals/rcp/ui/scene)) | ✔ |
| **Scene file** ([save/recall](/docs/reference/manuals/rcp/ui/scene)) | ✔ |

## Camera configuration

You need to:
- Configure a static Ethernet IP
- Enable the XC protocol

### Camera setup

<table>
<tr>
<td>
<video width="500" poster="/img/Integrations/Canon/XF605/Canon-XF605-cam-setup.png" muted controls>
    <source src="/img/Integrations/Canon/XF605/Canon-XF605-cam-setup.mp4"/>
</video>
</td>
<td>

In `Network Settings`, set `Network` to `Enable`, then click `New Conn. Setting (Wizard)`:

- `Select function` → `XC Protocol`
- `Communication settings` → `Create New Comm. Setting`
- `Network type` → `Ethernet`
- `Setting Method` → `Setup with Network Connection`
- `IP Address Settings (IPV4)` → `Manual Setting`
- Fill in `IP Address` and `Subnet Mask`, then click `OK`
- `TCP/IPV6` → `Disable`
- `XC Protocol` → `Create New Func. Setting`
- `Authentication Method` → `No Auth. (general user)`
- `Conn. Setting Save Dest.` → select a free slot (e.g. `SET 1`)

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

In the RCP/RIO web UI:

1. Go to the **Configuration** tab.
2. Click `+` to create a new camera.
3. Enter a number and a name.
4. Select brand `Canon` and model `XF605`.
5. Enter the IP address of your camera.

</td>
</tr>
</table>

A camera block in setup state looks like this:

![Canon XF605 setup view](/img/Integrations/Canon/XF605/XF605-setup.png)

Once connected, the block turns green:

![Canon XF605 connected block](/img/Integrations/Canon/XF605/XF605-block.png)

On your RCP:

![Canon XF605 on RCP display](/img/Integrations/Canon/XF605/F1.BMP)

### Tally integration with ATEM (optional)

<table>
<tr>
<td>
<video width="500" poster="/img/Integrations/Canon/XF605/ATEM-setup.png" muted controls>
    <source src="/img/Integrations/Canon/XF605/ATEM-setup.mp4"/>
</video>
</td>
<td>

In the RCP/RIO web UI:

1. Go to the **Configuration** tab.
2. Click `+` to create a new component.
3. Select `Router/Switcher` → `Blackmagic : ATEM`.
4. Enter a name (optional) and an IP address.
5. In **Inputs**, link each camera to an SDI input.
6. In **Outputs**, link the RCP to an SDI output.
7. Set **Red tally** and **Green tally** to `AUTO`.

</td>
</tr>
</table>

## Troubleshooting

See the [generic XC protocol troubleshooting guide](/docs/integrations/cameras/canon/canon-xc#troubleshooting).
