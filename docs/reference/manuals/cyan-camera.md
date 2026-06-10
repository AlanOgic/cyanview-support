---
id: cyan-camera
title: "CyanCamera mobile app"
sidebar_label: "CyanCamera"
description: "Control your smartphone camera from the RCP with the CyanCamera mobile app. Record, stream, adjust exposure, apply LUTs, and use RCP paint corrections."
keywords: [CyanCamera, mobile app, smartphone, streaming, SRT, RTP, WebRTC, LUT, color shading]
slug: /reference/manuals/cyan-camera
---

CyanCamera turns your smartphone into a controllable broadcast camera. The app connects to your RCP, giving you remote control over exposure, white balance, lens selection, color shading, and live streaming.

## First time setup

Grant all requested permissions when you launch the app for the first time. CyanCamera needs access to the camera, microphone, and local network to function.

![CyanCamera first time permission screen](/img/Manual/CyanCamera/first_time.png)

## Main controls

The right side of the screen provides direct camera controls:

- **Record** — start/stop video recording
- **Photo** — capture a still image
- **Flip lens** — switch between front and back cameras
- **Lens select** — choose wide, main, or telephoto lens
- **Zoom presets** — quick zoom level buttons
- **Flashlight / flash rim** — toggle the flash LED

Pinch-to-zoom is also supported.

The bottom of the screen provides additional app controls:

- **Main settings**
- **Stream settings**
- **Stream start/stop**
- **HDMI out start/stop**
- **3D LUT settings**
- **Format picker**

![CyanCamera main controls overlay](/img/Manual/CyanCamera/main_controls.png)

## RCP-supported controls

When you adjust a camera parameter from the RCP, that parameter switches to manual mode and the on-screen indicator turns orange. Tap the value on the phone app or toggle it from the RCP to return to auto mode.

| Parameter | Description |
|---|---|
| **ISO** | Sensor sensitivity |
| **EV** | Exposure compensation |
| **Shutter** | Shutter speed |
| **Iris** | Aperture (on supported lenses) |
| **White balance** | Color temperature and tint |
| **Lens** | Lens selection (wide/main/tele) |
| **Zoom** | Digital zoom level |
| **Focus** | Manual focus control |

:::tip
Use **RCP > Camera > Custom** to access lens switching and stream start/stop commands.
:::

## Color shading

Tap the bottom-left corner of the screen to open the LUT menu.

![CyanCamera color shading and LUT menu](/img/Manual/CyanCamera/rcp_shading.png)

- Select a `.cube` LUT file from your device
- Chain it with RCP corrections on top
- Toggle RCP corrections with the on-screen switch (synced with **RCP > Camera > Custom > CorrOff/CorrOn**)

### Supported RCP corrections

| Correction | Description |
|---|---|
| **White balance RGB** | Per-channel white balance |
| **Gamma RGBM** | Gamma curves per channel and master |
| **Black RGBM** | Black level per channel and master |
| **Master black** | Overall black level offset |
| **Hue/Saturation** | Global hue rotation and saturation |
| **Multimatrix** | Per-hue color adjustments |

## Streaming

CyanCamera supports three streaming protocols: **RTP**, **SRT**, and **WebRTC**.

![CyanCamera streaming settings](/img/Manual/CyanCamera/streaming.png)

To configure and start a stream:

1. Long-press the RTP or SRT indicator to open stream settings
2. Enter your server address and port
3. Tap the indicator once to start the stream

### Server examples

These examples require [FFmpeg](https://ffmpeg.org/) installed on the receiving machine, unless noted otherwise.

**SRT server with preview:**

```bash
srt-live-transmit "srt://0.0.0.0:9000?mode=listener" "udp://127.0.0.1:5000" & ffplay -i "udp://127.0.0.1:5000"
```

**SRT server with HDR preview** (requires [mpv](https://mpv.io/)):

```bash
mpv 'srt://0.0.0.0:9000?mode=listener' \
  --hwdec=videotoolbox \
  --vo=gpu-next \
  --target-colorspace-hint=yes \
  --loop-file=inf \
  --keep-open=always \
  --idle=yes \
  --demuxer-thread=yes \
  --network-timeout=0
```

**RTP server with preview:**

```bash
ffplay -fflags nobuffer -flags low_delay -framedrop \
  -probesize 32 -analyzeduration 0 -sync ext \
  -protocol_whitelist file,udp,rtp -f sdp -i <(echo -e \
  "v=0\nm=video 4444 RTP/AVP 96\nc=IN IP4 0.0.0.0\na=rtpmap:96 H264/90000")
```
