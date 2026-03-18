---
id: web-ui
title: "RCP web UI configuration"
sidebar_label: "Web UI"
description: "Configure your Cyanview system through the RCP web interface. Add cameras, set up accessories, and manage network settings."
keywords: [RCP, web UI, configuration, cameras, accessories]
slug: /reference/manuals/rcp/web-ui
---

> The **Configuration Web UI** is where most of the RCP configuration and management is done.
> The Cyanview GWY also uses this **Configuration Web UI**.

To open the UI, see [Access RCP Configuration Web UI](/docs/guides/networking/ip-configuration#find-devices-ip) in the **IP configuration** manual.

The **Configuration Web UI** is divided into the following sections:

<img alt="cyanview-support-manual-configuration-web-ui-gui-tab-sections" src="/img/productGfx/config/WebUI/cyanview-support-manual-configuration-web-ui-gui-tab-sections@2x-8.png"  width="500"/>

- **[Configuration](/docs/reference/manuals/rcp/web-ui#configuration)** add and configure camera, devices, controls,...
- **[GPIO](/docs/reference/manuals/rcp/web-ui#gpio)** operate Tally, video router.
- **[Switcher](/docs/reference/manuals/rcp/web-ui#switcher)** virtual video switcher.
- **[Admin](/docs/reference/manuals/rcp/web-ui#admin)** device updates and statuses.
- **[File](/docs/reference/manuals/rcp/web-ui#file)** configuration Snapshot.

## Configuration

To add and configure the different supported devices, click the "+" button in the corresponding section.
Then complete configuration in the self explanatory *Settings* form on the right on the page.

<img alt="cyanview-support-manual-configuration-web-ui-gui-page" src="/img/productGfx/config/WebUI/cyanview-support-manual-configuration-web-ui-gui-page@2x-8.png"  width="600"/>

- Use **Global** to set default resolution and frequency. This format will be proposed when configuring devices.
IP parameters allows to set additional IP Connection if network setup requires it.

- **Camera** add and configure camera.

<video poster="/img/productGfx/config/cyanview-Serial-camera-configuration-web-gui-Add-CI0-RCP.pngg" muted controls>
    <source src="/img/productGfx/config/cyanview-Serial-camera-configuration-web-gui-Add-CI0-RCP.mp4"/>
</video>

- **Controllers** Cyanview solution allows to use multiple controllers for the different operators. Number of controllers is limited by licence.

- **Components** Configure and manage video processor, Router, Switchers, ...

- **Features** Setup different Bus for specific applications.

## GPIO

Cyanview offers lots of IO possibilities over the different devices.

The **GPIO** provides an overview and allows to set the values of the different IO available on the connected devices.

<video poster="/img/productGfx/config/WebUI/cyanview-support-manual-configuration-web-ui-gui-gpio-status-io@2x-8.png" muted controls>
    <source src="/img/productGfx/config/WebUI/cy-UI-GPIO.mp4"/>
</video>

For Tally configuration, please refer to the [Tally configuration](/docs/guides/tally/tally/) of the **RCP Manual**.

## Switcher

Select the active camera on the corresponding monitor.

<img alt="cyanview-support-manual-configuration-web-ui-gui-video-switcher" src="/img/productGfx/config/WebUI/cyanview-support-manual-configuration-web-ui-gui-video-switcher@2x-8.png"  width="500"/>

## Admin

**Admin** section allows to manage the releases and verify the connections status of the RCP.

<img alt="cyanview-support-manual-configuration-web-ui-gui-admin-update-log" src="/img/productGfx/config/WebUI/cyanview-support-manual-configuration-web-ui-gui-admin-update-log@2x-8.png" width="600"/>

The **Releases** section lists available application releases you can run on your device see [device update manual](/docs/reference/product-update).

The **Remote support** is OK when the RCP is reachable by Cyanview Support server.
Support server is used to deal with specific advanced setup.

**Connectivity check** provide IP connectivity statuses: Network, Internet, Support,...

RCP **Logs** can be downloaded for extended consultation.

<img alt="cyanview-support-manual-configuration-web-ui-gui-admin-log" src="/img/productGfx/RCP/cyanview-support-manual-configuration-web-ui-gui-admin-log.png" width="600" />

## File

**File** page allows to manage configuration *Snapshots*.

*Snapshots* contains complete device configuration as well as camera configuration including [scene](/docs/reference/manuals/rcp/ui/scene) and [lens](/docs/reference/manuals/rcp/ui/scene) settings.

*Snapshots* can be either **stored locally** on the RCP (use "Take snapshot" button) or **downloaded to a PC** (use "Download to computer" button).

Downloaded *Snapshots* can be uploaded to an other device with same application version. They can also be used to carry over configurations between different events occurrences.

*Upload from computer* button will **load** RCP configuration from you PC. New configuration will **overwrite** actual RCP configuration, then the RCP will **restart**.

<img alt="cyanview-support-manual-configuration-web-ui-gui-files-backup-snapshot" src="/img/productGfx/config/WebUI/cyanview-support-manual-configuration-web-ui-gui-files-backup-snapshot@2x-8.png" width="400" />

**Note:** A backup is taken when updating device. See [Product Update](/docs/reference/product-update).

## Other RCP UI

RCP has several other **Web UI** for specific use only.

| UI | URL | Desrciption |
| -- | --- | ----------- |
| **System Update** | *IP*:8080 | see [Product Update](/docs/reference/product-update) page. |
| **Discovery page** | *IP*/dev/discovery.html | Lists devices that can be seen on the network. |
| **Advanced UI** | *IP*/dev/app.html | Advanced Configuration UI. |
| **RCP Dashboard** | *IP*:5000 | Presents extended RCP statuses. |
| **Release** | *IP*/dev/release.html | Additional release status page. |
| **Connectivity diagnostic** | *IP*/dev/connectivity-support.html | Technical help for connectivity diagnostic |
