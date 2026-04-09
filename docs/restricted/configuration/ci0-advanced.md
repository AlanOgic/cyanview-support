---
id: ci0-advanced
title: CI0 advanced manual
description: "Change the CI0 default IP address or reset it to factory settings."
keywords: [ci0, ip address, advanced, factory reset, firmware]
slug: /restricted/configuration/ci0-advanced
---

# CI0 advanced manual

## Changing the IP address

:::warning
This is an advanced procedure. Proceed at your own risk. The only two cases where you should change the IP address are:

- You have a conflict with another device on the network.
- Security reasons.

If you work with VLANs, you probably need the [RIO +LAN](/docs/reference/manuals/rio-live-manual) instead of the CI0 to handle networking properly. The CI0 is a "smart" serial-to-IP converter and cannot handle complex networking configurations.

For complex network architectures, see the [IP configuration guide](/docs/guides/networking/ip-configuration).
:::

If your use case matches one of the two cases above, you can continue.

The CI0 is designed to be plug-and-play and avoid conflicts. IP addresses are fixed based on the serial number, and a discovery process makes the CI0 appear automatically on the RCP interface.

To change the default IP and set up a custom IP:

1. Install your RCP and CI0 on the same network/switch.
2. Add a camera on your CI0 following the [serial camera guide](/docs/integrations/generic/serial-camera).
3. Add your RCP to the new network by following the [IP configuration guide](/docs/guides/networking/ip-configuration). Your RCP can reach multiple networks at the same time.
4. The CI0 is now ready to be configured.

The RCP has an advanced CI0 configuration page available at `http://10.192.xx.xx:5000/firmware/index.html`.

<img alt="Cyanview dashboard firmware action web page" src="/img/dashboard/firmwareAction/Firmware-actions.png"/>

- Click the select box under **Device list** and select your CI0 serial.
- If your CI0 is not present, wait a few seconds and retry. Discovery can take up to 30 seconds.
- A new **Change default IP** section appears.

<img alt="Cyanview dashboard firmware action IP setup page" src="/img/dashboard/firmwareAction/Firmware-IPSetup.png"/>

Enter the new IP, mask, and gateway (optional — click the checkbox to reveal, defaults to `0.0.0.0`). Click **Set IP** to apply.

A confirmation window appears at the top of the page. Double-check the values. Click **OK** to apply or **Cancel** to modify.

5. Verify that you still have control over the camera on the CI0.
6. Move the CI0 to its final location.

You can repeat this process as many times as needed.

## Reset IP to factory

You can reset the IP in two ways:

- **Via the web UI** — select your CI0 (see above) and click the **Default IP** button.
- **Via hardware buttons** — hold both buttons while powering the CI0. It enters bootloader mode with the default IP. The IP is restored to its default value after the bootloader completes.
