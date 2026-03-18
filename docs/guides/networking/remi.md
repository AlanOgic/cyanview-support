---
id: remi
title: "REMI remote production setup"
sidebar_label: "REMI"
description: "Set up REMI remote production with Cyanview. Control cameras from anywhere over the internet using RIO +WAN gateways."
keywords: [REMI, remote production, cloud, RIO +WAN, internet]
slug: /guides/networking/remi
---

# REMI

## Introduction

Cyanview remote control solution.

This applies for:
* RCP
* RIO
* RIO-live (LAN only)

This will allow you to control and share a camera from any location.

## Overview

Here I have a main RCP (cy-rcp-25-165, IP 10.192.25.165) with multiple cameras and I want to control my main camera (XF605) from my other RCP-J (cy-rcp-18-80, IP 10.192.18.80). So I will `export` my camera from my main RCP to my other RCP-J using the REMI (local):
* First I need my camera configured
* Then I need the same REMI tag on both devices
* And finally, I can import my camera from my main RCP to my other RCP-J

Same applies for a RCP importing a camera from a RIO.

Also note that you can have multiple devices importing the same camera from the same device (for example : multiple RCP importing the same camera from a RIO).

<video poster="/img/Configuration/REMI/RCP-REMI.png" muted controls>
    <source src="/img/Configuration/REMI/RCP-REMI.mp4"/>
</video>

## Cloud

The cloud only applies for WAN. So only with compatible devices: RCP and RIO.
If you have a RIO-live and wants to have WAN control of your camera, you can purchase a license to upgrade to a full RIO.

If you have an RCP or a RIO, the cloud control is included, unlimited and free of charge.

It provides : remote camera control over internet and allows you to remote access web UI from any location

:::note
The goal of the cloud is to avoid any firewall setup as all units will open OUTGOING connections. It will act as a rendezvous server.

If you still need to open ports:
* DNS (dynamic) : remi.cyanview.com
* DNS (Europe) : 1-eu-west-3.remi.cyanview.com
* DNS (US) : 1-us-west-2.remi.cyanview.com
* port : 7887
:::

## Wiring

### RIO-live workflow

<img src="/img/Configuration/REMI/remi-rio-live.png" width="600"/>

Typical use cases:
* Lens control
* Wi-Fi control
* USB control
* Polecam

:::note
This is like a CI0, but with all the protocols included (like an RCP).

Limited to 1 camera and no cloud access (only LAN control).
:::

### RIO workflow

<img src="/img/Configuration/REMI/remi-rio.png" width="600"/>

Typical use cases:
* Beauty shot
* Gimbals/Steadicam

:::note
This is like a CI0, but with all the protocols included (like an RCP).

Unlimited number of cam and unlimited access to cloud (free of charge).
:::

### RCP workflow

<img src="/img/Configuration/REMI/remi-rcp.png" width="600"/>

Typical use cases:
* Controlling the same camera from multiple location (LAN, from the truck and another desk)
* Controlling different cameras from different venues (WAN)

## Configuration

### Configure your groups

On each device (RCP, RIO, RIO-live), navigate to the `REMI` tab:

<img src="/img/Configuration/REMI-tab.png" width="300"/>

And in the right panel, inside the `Shared Camera Control`, enter your `tags`
* Enter a tag name in the text box
* Click on `+`

<img src="/img/Configuration/REMI/remi-cloud-status.png" width="300"/>

You see here:
* `Cloud` : icon is green, means I'm connected to internet and Cyanview cloud
* `Tags` : list of tags in which my device is
* `Remote GUI` : on by default, allows people to access the configuration of your device remotely

This tag acts like a password. Everybody that knows it can connect to your group.

:::note
One device can be associated to multiple groups.
:::

Once setup on all devices, you can now see status of all the devices in your "groups":

<img src="/img/Configuration/REMI/remi-webpage.png" width="600"/>

I see here two icons:
* Cloud : means this device can be reached by the cloud
* Ethernet : means this device can be reached using a local link

And a list of camera `exported` by this device

:::note

Pay attention that group names could be guessable and act as a password. So try to make them as secure as possible and not share with anybody that shouldn't access your cameras.
:::

### Navigate to the remote GUI

Once RIO's and RCP's are in the same group, you can access the webpage from anywhere.



If you click on the `cloud` or `10.192.15.4` link next to `cy-rio-15-4`, it will open a new page with your RIO configuration.

### Set up a camera

Here we describe a camera `exported` by a RIO to an RCP.

Create your camera on your RIO like you would do on an RCP.

<img src="/img/Configuration/REMI/remi-rio-cam.png" width="400"/>

On your RCP, cross the checkbox next to your camera you created on your RIO.

<img src="/img/Configuration/REMI/remi-remi-imported.png" width="600"/>

Now your camera is imported from your RIO on your RCP, visible in your RCP configuration:

<img src="/img/Configuration/REMI/remi-configuration-imported.png" width="400"/>

By default, the camera is imported on the RCP with the same `number` and `name` as your RIO.

You can change:
* on your RIO:
    - camera number
    - camera name
    - camera brand/model
* on your RCP:
    - camera number
    - camera name

The link will persist.

:::note
If the camera is `exported` by an RCP to another RCP, the setup is the same
:::

:::note
You can do the setup on LAN/Ethernet, then move to 4G or Wi-Fi, the config will be the same
:::

## Advanced

### REMI mode

This is mainly for RIO and RIO-live.

By default, RIO and RIO-live are meant to only "export" cameras to allow remote control.

But in some situation, you would like to import a camera on your RIO or RIO-live.

To do so:
* Check your RIO serial number (mine is `cy-rio-29-108`)
* Connect to your RIO web UI (mine is at http://10.192.29.108) to check that everything is working
* Add `/dev/app.html` to the URL (mine is http://10.192.29.108/dev/app.html)
* Search for `Cloud` block and click on it:

<img src="/img/Configuration/REMI/REMI-advanced-block.png" width="400"/>

* On the right panel, edit the `direction` field

<img src="/img/Configuration/REMI/REMI-advanced-setup.png" width="400"/>

* 3 possible values:
    - `exporter` : you can only export your cameras (default on RIO)
    - `importer` : you can only import cameras
    - `both` : you can both export and import cameras (default on RCP)