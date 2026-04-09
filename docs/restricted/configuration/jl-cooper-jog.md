---
id: jl-cooper-jog
title: JL Cooper JOG
description: "Configure the JL Cooper JOG remote for use with Cyanview devices."
keywords: [jl cooper, jog, xport, lantronix, remote, tcp]
slug: /restricted/configuration/jl-cooper-jog
---

# JL Cooper JOG

Reference documents:

- [Avcom GUI Application Note — Lantronix Web Browser Compatibility (PDF)](/img/restricted/configuration/JLCooperJOG/Avcom-GUI-Application-Note-AN0005-Lantronix-Web-Browser-Compatibility.pdf)
- [XPort User Guide (PDF)](/img/restricted/configuration/JLCooperJOG/XPort_UG.pdf)

## Assign an IP

Assign a unique IP to the JL Cooper JOG in the range of your RCP or gateway (default: `10.192.0.0` with `255.255.0.0` mask, or another IP you have assigned).

<img src="/img/restricted/configuration/JLCooperJOG/step1.png" />

Click **OK** to validate the changes.

## TCP configuration

Configure the remote with the following settings:

- Protocol: **TCP**
- Port: **10001**
- Remote Host: your Cyanview device IP

<img src="/img/restricted/configuration/JLCooperJOG/step2.png" />

Click **OK** to validate the changes.

Apply the settings:

<img src="/img/restricted/configuration/JLCooperJOG/step3.png" />

## Other setup verification

Verify the following sections:

<img src="/img/restricted/configuration/JLCooperJOG/step4.png" />
<img src="/img/restricted/configuration/JLCooperJOG/step5.png" />

:::warning
The XPort used by JL Cooper might need a firmware update to work with modern web browsers.
:::

Find the firmware updates and procedures in the XPort User Guide linked in the reference section above.

Latest firmware versions:

- [Latest firmware for XPort 5](https://ltrxdev.atlassian.net/wiki/spaces/LTRXTS/pages/100565267/Latest+firmware+for+the+XPort-05)
- [Latest firmware for XPort 4](https://ltrxdev.atlassian.net/wiki/spaces/LTRXTS/pages/106070411/Latest+firmware+for+the+XPort-04)

The update is a two-part process (firmware and web manager). It is not trivial and Cyanview does not provide support for it. This is why JL Cooper remotes are not officially supported.
