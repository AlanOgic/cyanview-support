---
id: web-ui
title: "RCP web UI configuration"
sidebar_label: "Web UI"
description: "Configure your Cyanview system through the RCP web interface. Add cameras, set up accessories, and manage network settings."
keywords: [RCP, web UI, configuration, cameras, accessories]
slug: /reference/manuals/rcp/web-ui
---

The **Configuration Web UI** is where you perform most RCP configuration and management. The Cyanview GWY also uses this interface.

To open the UI, see [Access RCP Configuration Web UI](/docs/guides/networking/ip-configuration#find-your-devices-ip) in the **IP configuration** manual.

The **Configuration Web UI** is divided into the following sections:

![RCP web UI tab sections](/img/productGfx/config/WebUI/cyanview-support-manual-configuration-web-ui-gui-tab-sections@2x-8.png)

- **[Configuration](/docs/reference/manuals/rcp/web-ui#configuration)** — add and configure cameras, devices, and controls.
- **[GPIO](/docs/reference/manuals/rcp/web-ui#gpio)** — operate Tally and video router.
- **[Switcher](/docs/reference/manuals/rcp/web-ui#switcher)** — virtual video switcher.
- **[Admin](/docs/reference/manuals/rcp/web-ui#admin)** — device updates and statuses.
- **[File](/docs/reference/manuals/rcp/web-ui#file)** — configuration snapshots.

## Configuration

To add and configure a supported device, click the **+** button in the corresponding section, then complete the *Settings* form on the right side of the page.

![RCP configuration page](/img/productGfx/config/WebUI/cyanview-support-manual-configuration-web-ui-gui-page@2x-8.png)

- **Global** — set the default resolution and frequency. This format is pre-selected when you configure devices. IP parameters let you define additional IP connections if your network setup requires them.

- **Camera** — add and configure cameras.

<video poster="/img/productGfx/config/cyanview-Serial-camera-configuration-web-gui-Add-CI0-RCP.png" muted controls>
  <source src="/img/productGfx/config/cyanview-Serial-camera-configuration-web-gui-Add-CI0-RCP.mp4"/>
</video>

- **Controllers** — add multiple controllers for different operators. The number of controllers is limited by your licence.

- **Components** — configure and manage video processors, routers, and switchers.

- **Features** — set up buses for specific applications.

## GPIO

The **GPIO** section gives you an overview of all I/O available on connected devices and lets you set their values directly.

<video poster="/img/productGfx/config/WebUI/cyanview-support-manual-configuration-web-ui-gui-gpio-status-io@2x-8.png" muted controls>
  <source src="/img/productGfx/config/WebUI/cy-UI-GPIO.mp4"/>
</video>

For Tally configuration, refer to [Tally configuration](/docs/guides/tally/tally/) in the **RCP manual**.

## Switcher

Use the **Switcher** to select the active camera on each monitor.

![RCP virtual video switcher](/img/productGfx/config/WebUI/cyanview-support-manual-configuration-web-ui-gui-video-switcher@2x-8.png)

## Admin

The **Admin** section lets you manage releases and verify the connection status of the RCP.

![RCP admin update log](/img/productGfx/config/WebUI/cyanview-support-manual-configuration-web-ui-gui-admin-update-log@2x-8.png)

**Releases** lists available application releases you can run on your device. See the [device update manual](/docs/reference/product-update).

**Remote support** shows a status of OK when the RCP is reachable by the Cyanview support server. The support server is used for specific advanced setup scenarios.

**Connectivity check** provides IP connectivity statuses for network, internet, support, and other endpoints.

You can download RCP **Logs** for detailed review.

![RCP admin log](/img/productGfx/RCP/cyanview-support-manual-configuration-web-ui-gui-admin-log.png)

## File

The **File** page lets you manage configuration *Snapshots*.

Snapshots contain the complete device configuration, including camera configuration with [scene](/docs/reference/manuals/rcp/ui/scene) and [lens](/docs/reference/manuals/rcp/ui/scene) settings.

You can either **store a snapshot locally** on the RCP using the **Take snapshot** button, or **download it to a computer** using the **Download to computer** button.

Downloaded snapshots can be uploaded to another device running the same application version. You can also use them to carry configurations across different event occurrences.

The **Upload from computer** button loads an RCP configuration from your computer. The new configuration **overwrites** the current RCP configuration, then the RCP **restarts**.

![RCP file backup and snapshot](/img/productGfx/config/WebUI/cyanview-support-manual-configuration-web-ui-gui-files-backup-snapshot@2x-8.png)

:::tip
A backup snapshot is taken automatically when you update the device. See [Product Update](/docs/reference/product-update).
:::

## Other RCP web UIs

The RCP provides additional web interfaces for specific use cases.

| UI | URL | Description |
| -- | --- | ----------- |
| **System Update** | *IP*:8080 | See [Product Update](/docs/reference/product-update). |
| **Discovery page** | *IP*/dev/discovery.html | Lists devices visible on the network. |
| **Advanced UI** | *IP*/dev/app.html | Advanced configuration interface. |
| **RCP Dashboard** | *IP*:5000 | Extended RCP status overview. |
| **Release** | *IP*/dev/release.html | Additional release status page. |
| **Connectivity diagnostic** | *IP*/dev/connectivity-support.html | Technical help for connectivity diagnostics. |
