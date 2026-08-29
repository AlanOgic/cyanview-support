# Map officielle ↔ fork — racine `/docs/`

- **Officielle** : support.cyanview.com — `~/ddev/instructions/docs/` (read-only), état `origin/master` (e775e47 2026-08-25)
- **Fork** : support.cyanview.cloud — `~/ddev/cyanview-support/docs/`
- Baseline de synchro : `0c35b23` (2026-03-17, date du fork 2026-03-18)
- Dernière synchro portée : `e775e47` (2026-08-25) — voir « Journal de synchro » en fin de fichier
- ⚠ = page modifiée en amont depuis la baseline (à porter)
- ✔ = contenu amont fusionné dans une page fork existante (pas de page 1:1)
- ✂ = page volontairement divergente : le fork en est propriétaire, ne pas resynchroniser depuis l'amont

Pages officielle : 146 · pages fork : 153 · couvertes par le fork : 145 · sans équivalent fork : 1 · pages propres au fork : 16

Pages amont **sans équivalent fork** (à créer ou décider de ne pas porter) :
- `how-to-guides/remi-multiple-rcp-workflow.md` — ébauche de 12 lignes en amont (aucun contenu réel), non reprise

Fichiers amont **non publiés** (à ignorer) :
- `how-to-guides/remi-remi-tag` — 268 lignes de contenu réel mais **sans extension `.md`** : Docusaurus ne le rend pas, il est absent du sitemap amont. C'est le monolithe d'origine, scindé depuis en `remi-lan-workflow.md` + `remi-wan-workflow.md`. Bug d'édition en amont, rien à porter.

## Officielle → Fork

| Officielle (`/docs/`) | Fork (`/docs/`) | |
|---|---|---|
| Accessories/BuildTallyLED.md | resources/build-tally-led.md (slug:/resources/build-tally-led) |  |
| Accessories/CableCatalog.md | resources/cable-catalog.md (slug:/resources/cable-catalog) | ⚠ |
| Configuration/Cellular.md | guides/networking/cellular.md (slug:/guides/networking/cellular) | ⚠ |
| Configuration/ConfIP.md | guides/networking/ip-configuration.md (slug:/guides/networking/ip-configuration) |  |
| Configuration/Halow.md | guides/networking/halow.md (slug:/guides/networking/halow) | ⚠ |
| Configuration/Preview.md | guides/preview/preview.md (slug:/guides/preview/preview) |  |
| Configuration/REMI.md | guides/networking/remi.md (slug:/guides/networking/remi) | ⚠ |
| Configuration/RelDownload.md | reference/firmware-download.md (slug:/reference/firmware-download) | ⚠ |
| Configuration/RemoteSupport.md | guides/remote-support.md (slug:/guides/remote-support) |  |
| Configuration/Tally.md | guides/tally/tally.md (slug:/guides/tally/tally) | ⚠ |
| Configuration/Tethering.md | guides/networking/tethering.md (slug:/guides/networking/tethering) |  |
| Configuration/WiFi.md | guides/networking/wifi.md (slug:/guides/networking/wifi) | ⚠ |
| Configuration/WiFiNanoAP.md | guides/networking/wifi-nano-ap.md (slug:/guides/networking/wifi-nano-ap) | ⚠ |
| Configuration/WiFiUSB.md | guides/networking/wifi-usb.md (slug:/guides/networking/wifi-usb) | ⚠ |
| Configuration/Wireless.md | guides/networking/wireless.md (slug:/guides/networking/wireless) | ⚠ |
| Configuration/advanced/B4Ret.md | guides/advanced/b4-return.md (slug:/guides/advanced/b4-return) | ⚠ |
| Configuration/advanced/CameraGroups.md | guides/advanced/camera-groups.md (slug:/guides/advanced/camera-groups) | ⚠ |
| Configuration/advanced/SBUS.md | guides/advanced/sbus.md (slug:/guides/advanced/sbus) | ⚠ |
| Configuration/advanced/SerialCam.md | guides/advanced/serial-camera.md (slug:/guides/advanced/serial-camera) |  |
| DrawIOSymbols.md | resources/draw-io-symbols.md (slug:/resources/draw-io-symbols) | ⚠ |
| Integrations/AJA/RovoCam.md | integrations/cameras/other/aja-rovocam.md (slug:/integrations/cameras/other/aja-rovocam) | ⚠ |
| Integrations/Accessories/AnxinshiPTZUSBJoystick.md | integrations/accessories/anxinshi-ptz-usb-joystick.md (slug:/integrations/accessories/anxinshi-ptz-usb-joystick) |  |
| Integrations/Accessories/ElgatoStreamDeck.md | integrations/accessories/elgato-stream-deck.md (slug:/integrations/accessories/elgato-stream-deck) |  |
| Integrations/BRRemote/MicroLHead.md | integrations/accessories/br-remote-micro-l-head.md (slug:/integrations/accessories/br-remote-micro-l-head) |  |
| Integrations/Birddog/BirddogPTZ.md | integrations/cameras/other/birddog-ptz.md (slug:/integrations/cameras/other/birddog-ptz) | ⚠ |
| Integrations/Blackmagic/BMHandles.md | integrations/cameras/blackmagic/bm-handles.md (slug:/integrations/cameras/blackmagic/bm-handles) | ⚠ |
| Integrations/Blackmagic/atem.md | integrations/cameras/blackmagic/atem.md (slug:/integrations/cameras/blackmagic/atem) |  |
| Integrations/Blackmagic/blackmagiccameracontrol.md | integrations/cameras/blackmagic/blackmagic-camera-control.md (slug:/integrations/cameras/blackmagic/blackmagic-camera-control) |  |
| Integrations/Bolin/R9.md | integrations/cameras/other/bolin-r9.md (slug:/integrations/cameras/other/bolin-r9) | ⚠ |
| Integrations/Canon/Canon.md | integrations/cameras/canon/canon.md (slug:/integrations/cameras/canon/canon) | ⚠ |
| Integrations/Canon/CanonMirrorless.md | integrations/cameras/canon/canon-mirrorless.md (slug:/integrations/cameras/canon/canon-mirrorless) | ⚠ |
| Integrations/Canon/CanonPTZ.md | integrations/cameras/canon/canon-ptz.md (slug:/integrations/cameras/canon/canon-ptz) | ⚠ |
| Integrations/Canon/CanonRemoteA.md | integrations/cameras/canon/canon-remote-a.md (slug:/integrations/cameras/canon/canon-remote-a) | ⚠ |
| Integrations/Canon/CanonXC.md | integrations/cameras/canon/canon-xc.md (slug:/integrations/cameras/canon/canon-xc) | ⚠ |
| Integrations/Canon/CanonXF605.md | integrations/cameras/canon/canon-xf605.md (slug:/integrations/cameras/canon/canon-xf605) | ⚠ |
| Integrations/Dreamchip/Dreamchip.md | integrations/cameras/other/dreamchip.md (slug:/integrations/cameras/other/dreamchip) | ⚠ |
| Integrations/Dreamchip/ssm500.md | integrations/cameras/other/dreamchip-ssm500.md (slug:/integrations/cameras/other/dreamchip-ssm500) | ⚠ |
| Integrations/EVS/EVSHM.md | integrations/broadcast-systems/evs-hm.md (slug:/integrations/broadcast-systems/evs-hm) |  |
| Integrations/Generic/3DLUTProcessor.md | integrations/generic/3d-lut-processor.md (slug:/integrations/generic/3d-lut-processor) | ⚠ |
| Integrations/Generic/ColorCorrector.md | integrations/generic/color-corrector.md (slug:/integrations/generic/color-corrector) |  |
| Integrations/Generic/IPCamera.md | integrations/generic/ip-camera.md (slug:/integrations/generic/ip-camera) |  |
| Integrations/Generic/Lens.md | integrations/generic/lens.md (slug:/integrations/generic/lens) | ⚠ |
| Integrations/Generic/PTZ.md | integrations/generic/ptz.md (slug:/integrations/generic/ptz) | ⚠ |
| Integrations/Generic/SerialCamera.md | integrations/generic/serial-camera.md (slug:/integrations/generic/serial-camera) |  |
| Integrations/Generic/routers.md | integrations/generic/routers.md (slug:/integrations/generic/routers) |  |
| Integrations/GrassValley/GVAMPP.md | integrations/broadcast-systems/grass-valley-ampp.md (slug:/integrations/broadcast-systems/grass-valley-ampp) | ⚠ |
| Integrations/Haivision/DataBridge.md | integrations/broadcast-systems/haivision-data-bridge.md (slug:/integrations/broadcast-systems/haivision-data-bridge) |  |
| Integrations/Haivision/Mojopro.md | integrations/broadcast-systems/haivision-mojopro.md (slug:/integrations/broadcast-systems/haivision-mojopro) |  |
| Integrations/Ikegami/ICPP.md | integrations/cameras/other/ikegami-icpp.md (slug:/integrations/cameras/other/ikegami-icpp) | ⚠ |
| Integrations/JVC/JVCCamcorder.md | integrations/cameras/other/jvc-camcorder.md (slug:/integrations/cameras/other/jvc-camcorder) |  |
| Integrations/LanSee/LanSee.md | integrations/broadcast-systems/lansee.md (slug:/integrations/broadcast-systems/lansee) | ⚠ |
| Integrations/Lawo/VPro8.md | integrations/broadcast-systems/lawo-vpro8.md (slug:/integrations/broadcast-systems/lawo-vpro8) |  |
| Integrations/Lawo/VSM.md | integrations/broadcast-systems/lawo-vsm.md (slug:/integrations/broadcast-systems/lawo-vsm) |  |
| Integrations/Lens/B4Lens.md | integrations/lenses/b4-lens.md (slug:/integrations/lenses/b4-lens) | ⚠ |
| Integrations/Lens/CineLens.md | integrations/lenses/cine-lens.md (slug:/integrations/lenses/cine-lens) | ⚠ |
| Integrations/Lens/Tilta.md | integrations/lenses/tilta.md (slug:/integrations/lenses/tilta) |  |
| Integrations/Marshall/MarshallMinicam.md | integrations/cameras/other/marshall-minicam.md (slug:/integrations/cameras/other/marshall-minicam) | ⚠ |
| Integrations/Panasonic/AW-UB.md | integrations/cameras/panasonic/aw-ub.md (slug:/integrations/cameras/panasonic/aw-ub) |  |
| Integrations/Panasonic/BGH1.md | integrations/cameras/panasonic/bgh1.md (slug:/integrations/cameras/panasonic/bgh1) | ⚠ |
| Integrations/Panasonic/CX350.md | integrations/cameras/panasonic/cx350.md (slug:/integrations/cameras/panasonic/cx350) |  |
| Integrations/Panasonic/EVA1.md | integrations/cameras/panasonic/eva1.md (slug:/integrations/cameras/panasonic/eva1) |  |
| Integrations/Panasonic/GH5S.md | integrations/cameras/panasonic/gh5s.md (slug:/integrations/cameras/panasonic/gh5s) |  |
| Integrations/Panasonic/P2-serial.md | integrations/cameras/panasonic/p2-serial.md (slug:/integrations/cameras/panasonic/p2-serial) |  |
| Integrations/Panasonic/P2HD.md | integrations/cameras/panasonic/p2hd.md (slug:/integrations/cameras/panasonic/p2hd) |  |
| Integrations/Panasonic/PTZ.md | integrations/cameras/panasonic/panasonic-ptz.md (slug:/integrations/cameras/panasonic/panasonic-ptz) | ⚠ |
| Integrations/Panasonic/Studio.md | integrations/cameras/panasonic/panasonic-studio.md (slug:/integrations/cameras/panasonic/panasonic-studio) |  |
| Integrations/Panasonic/Varicam.md | integrations/cameras/panasonic/varicam.md (slug:/integrations/cameras/panasonic/varicam) |  |
| Integrations/Proton/ProtonCam.md | integrations/cameras/other/proton-cam.md (slug:/integrations/cameras/other/proton-cam) | ⚠ |
| Integrations/RED/Komodo.md | integrations/cameras/other/red-komodo.md (slug:/integrations/cameras/other/red-komodo) | ⚠ |
| Integrations/Sony/Sony.md | integrations/cameras/sony/sony.md (slug:/integrations/cameras/sony/sony) | ⚠ |
| Integrations/Sony/Sony8Pin.md | integrations/cameras/sony/sony-8pin.md (slug:/integrations/cameras/sony/sony-8pin) | ⚠ |
| Integrations/Sony/SonyAlpha.md | integrations/cameras/sony/sony-alpha.md (slug:/integrations/cameras/sony/sony-alpha) | ⚠ |
| Integrations/Sony/SonyBurano.md | integrations/cameras/sony/sony-burano.md (slug:/integrations/cameras/sony/sony-burano) | ⚠ |
| Integrations/Sony/SonyCBM.md | integrations/cameras/sony/sony-cbm.md (slug:/integrations/cameras/sony/sony-cbm) |  |
| Integrations/Sony/SonyFCB.md | integrations/cameras/sony/sony-fcb.md (slug:/integrations/cameras/sony/sony-fcb) | ⚠ |
| Integrations/Sony/SonyFR7.md | integrations/cameras/sony/sony-fr7.md (slug:/integrations/cameras/sony/sony-fr7) | ⚠ |
| Integrations/Sony/SonyFX6.md | integrations/cameras/sony/sony-fx6.md (slug:/integrations/cameras/sony/sony-fx6) |  |
| Integrations/Sony/SonyFX9.md | integrations/cameras/sony/sony-fx9.md (slug:/integrations/cameras/sony/sony-fx9) | ⚠ |
| Integrations/Sony/SonyLanc.md | integrations/cameras/sony/sony-lanc.md (slug:/integrations/cameras/sony/sony-lanc) | ⚠ |
| Integrations/Sony/SonyPTZ.md | integrations/cameras/sony/sony-ptz.md (slug:/integrations/cameras/sony/sony-ptz) | ⚠ |
| Integrations/Sony/SonyVenice.md | integrations/cameras/sony/sony-venice.md (slug:/integrations/cameras/sony/sony-venice) | ⚠ |
| Integrations/Sony/Sony_PXW.md | integrations/cameras/sony/sony-pxw.md (slug:/integrations/cameras/sony/sony-pxw) |  |
| Integrations/VMix/VMix.md | integrations/broadcast-systems/vmix.md (slug:/integrations/broadcast-systems/vmix) |  |
| Integrations/Zcam/P2R1.md | integrations/cameras/other/zcam-p2r1.md (slug:/integrations/cameras/other/zcam-p2r1) | ⚠ |
| Integrations/arri/arri-cap.md | integrations/cameras/arri/arri-cap.md (slug:/integrations/cameras/arri/arri-cap) | ⚠ |
| Integrations/arri/arri-cforce.md | integrations/cameras/arri/arri-cforce.md (slug:/integrations/cameras/arri/arri-cforce) |  |
| Integrations/arri/arri-sscp.md | integrations/cameras/arri/arri-sscp.md (slug:/integrations/cameras/arri/arri-sscp) |  |
| Integrations/cmotion/cmotionCgate.md | integrations/lenses/cmotion-cgate.md (slug:/integrations/lenses/cmotion-cgate) | ⚠ |
| Maintenance/ReleaseNotes.md | reference/release-notes.md (slug:/reference/release-notes) | ✂ |
| Manuals/CI0/CI0Manual.md | reference/manuals/ci0/ci0-manual.md (slug:/reference/manuals/ci0/ci0-manual) | ⚠ |
| Manuals/IJ/IrisJoystick.md | reference/manuals/iris-joystick.md (slug:/reference/manuals/iris-joystick) | ⚠ |
| Manuals/NIOManual.md | reference/manuals/nio-manual.md (slug:/reference/manuals/nio-manual) |  |
| Manuals/RCP/ConfWebUI.md | reference/manuals/rcp/web-ui.md (slug:/reference/manuals/rcp/web-ui) | ⚠ |
| Manuals/RCP/GPIODongle.md | reference/manuals/rcp/gpio-dongle.md (slug:/reference/manuals/rcp/gpio-dongle) |  |
| Manuals/RCP/ProductUpdate.md | reference/product-update.md (slug:/reference/product-update) | ⚠ |
| Manuals/RCP/RCPControls.md | reference/manuals/rcp/controls.md (slug:/reference/manuals/rcp/controls) | ⚠ |
| Manuals/RCP/RCPInstallation.md | reference/manuals/rcp/installation.md (slug:/reference/manuals/rcp/installation) |  |
| Manuals/RCP/RCPUI.md | reference/manuals/rcp/ui.md (slug:/reference/manuals/rcp/ui) | ⚠ |
| Manuals/RCP/RCPUI/RCPGeneral.md | reference/manuals/rcp/ui/general.md (slug:/reference/manuals/rcp/ui/general) |  |
| Manuals/RCP/RCPUI/RCPUIAssignables.md | reference/manuals/rcp/ui/assignables.md (slug:/reference/manuals/rcp/ui/assignables) | ⚠ |
| Manuals/RCP/RCPUI/RCPUILens.md | reference/manuals/rcp/ui/lens.md (slug:/reference/manuals/rcp/ui/lens) | ⚠ |
| Manuals/RCP/RCPUI/RCPUIPowerManagement.md | reference/manuals/rcp/ui/power-management.md (slug:/reference/manuals/rcp/ui/power-management) |  |
| Manuals/RCP/RCPUI/RCPUIScene.md | reference/manuals/rcp/ui/scene.md (slug:/reference/manuals/rcp/ui/scene) | ⚠ |
| Manuals/RCP/RCPUI/RCPUISettings.md | reference/manuals/rcp/ui/settings.md (slug:/reference/manuals/rcp/ui/settings) |  |
| Manuals/RCP/rcp-emberplus.md | reference/manuals/rcp/emberplus.md (slug:/reference/manuals/rcp/emberplus) | ⚠ |
| Manuals/RIOManual.md | reference/manuals/rio-manual.md (slug:/reference/manuals/rio-manual) | ⚠ |
| Manuals/TallyLightManual.md | reference/manuals/tally-light-manual.md (slug:/reference/manuals/tally-light-manual) | ⚠ |
| Manuals/VP4Manual.md | reference/manuals/vp4-manual.md (slug:/reference/manuals/vp4-manual) |  |
| Manuals/cyan-camera.md | reference/manuals/cyan-camera.md (slug:/reference/manuals/cyan-camera) | ⚠ |
| Manuals/multi-cam-dashboard.md | reference/manuals/rcp/multi-cam-dashboard.md (slug:/reference/manuals/rcp/multi-cam-dashboard) |  |
| RMAProcedure.md | reference/rma-procedure.md (slug:/reference/rma-procedure) |  |
| Workflows/BlackmagicHaivision.md | guides/workflows/blackmagic-haivision.md | ⚠ |
| Workflows/FashionShow.md | guides/workflows/fashion-show.md (slug:/guides/workflows/fashion-show) | ⚠ |
| Workflows/HaivisionBeautyShot.md | guides/workflows/haivision-beauty-shot.md (slug:/guides/workflows/haivision-beauty-shot) | ⚠ |
| Workflows/LensVideoReturn.md | guides/workflows/lens-video-return.md (slug:/guides/workflows/lens-video-return) | ⚠ |
| Workflows/SonyMirrorlessGimbal.md | guides/workflows/sony-mirrorless-gimbal.md (slug:/guides/workflows/sony-mirrorless-gimbal) | ⚠ |
| how-to-guides/ip-cameras.md | integrations/generic/ip-camera.md (slug:/integrations/generic/ip-camera) |  |
| how-to-guides/remi-lan-workflow.md | guides/networking/remi.md (slug:/guides/networking/remi) | ✔ |
| how-to-guides/remi-multiple-rcp-workflow.md | **— absent —** |  |
| how-to-guides/remi-wan-workflow.md | guides/networking/remi.md (slug:/guides/networking/remi) | ✔ |
| how-to-guides/serial-cameras.md | guides/advanced/serial-camera.md (slug:/guides/advanced/serial-camera) |  |
| how-to-guides/setup-streamdeck.md | integrations/accessories/elgato-stream-deck.md (slug:/integrations/accessories/elgato-stream-deck) |  |
| how-to-guides/tally-cy-light.md | guides/tally/tally.md (slug:/guides/tally/tally) |  |
| how-to-guides/tally-gpio-dongle.md | reference/manuals/rcp/gpio-dongle.md (slug:/reference/manuals/rcp/gpio-dongle) |  |
| how-to-guides/tally-nio.md | guides/tally/tally.md (slug:/guides/tally/tally) |  |
| my-first-cyanview.md | getting-started/my-first-cyanview.md (slug:/getting-started/my-first-cyanview) | ⚠ réécrite ; la page fork-only getting-started/quickstart.md y a été fusionnée le 2026-08-29 |
| overview.md (slug:/) | getting-started/index.md (slug:/getting-started) |  |
| restricted/configuration/CCFollow.md | restricted/configuration/cc-follow.md (slug:/restricted/configuration/cc-follow) | ⚠ |
| restricted/configuration/CI0Advanced.md | restricted/configuration/ci0-advanced.md (slug:/restricted/configuration/ci0-advanced) | ⚠ |
| restricted/configuration/Deltec.md | restricted/configuration/deltec.md (slug:/restricted/configuration/deltec) | ⚠ |
| restricted/configuration/JLCooperJOG.md | restricted/configuration/jl-cooper-jog.md (slug:/restricted/configuration/jl-cooper-jog) | ⚠ |
| restricted/configuration/MRMC.md | restricted/configuration/mrmc.md (slug:/restricted/configuration/mrmc) | ⚠ |
| restricted/configuration/RFBridge.md | restricted/configuration/rf-bridge.md (slug:/restricted/configuration/rf-bridge) |  |
| restricted/configuration/RIOAir.md | restricted/configuration/rio-air.md (slug:/restricted/configuration/rio-air) |  |
| restricted/configuration/WIC.md | restricted/configuration/wic.md (slug:/restricted/configuration/wic) |  |
| restricted/troubleshooting/GatewayBIOS.md | restricted/troubleshooting/gateway-bios.md (slug:/restricted/troubleshooting/gateway-bios) | ⚠ |
| restricted/troubleshooting/IrisJoystickUpdate.md | restricted/troubleshooting/iris-joystick-update.md (slug:/restricted/troubleshooting/iris-joystick-update) | ⚠ |
| restricted/troubleshooting/RCPHardwareIssues.md | restricted/troubleshooting/rcp-hardware-issues.md (slug:/restricted/troubleshooting/rcp-hardware-issues) |  |
| restricted/troubleshooting/RCPNetwork.md | restricted/troubleshooting/rcp-network.md (slug:/restricted/troubleshooting/rcp-network) |  |
| restricted/troubleshooting/RCPPowerSupply.md | restricted/troubleshooting/rcp-power-supply.md (slug:/restricted/troubleshooting/rcp-power-supply) |  |
| restricted/troubleshooting/TallyBoxPCBReplacement.md | restricted/troubleshooting/tally-box-pcb-replacement.md (slug:/restricted/troubleshooting/tally-box-pcb-replacement) | ⚠ |
| restricted/troubleshooting/download_licences.mdx | restricted/troubleshooting/download-licences.mdx (slug:/restricted/troubleshooting/download-licences) |  |
| troubleshooting/cmd.md | reference/troubleshooting/commands.md (slug:/reference/troubleshooting/commands) | ⚠ |
| troubleshooting/faq.md | reference/faq.md (slug:/reference/faq) |  |
| troubleshooting/ip-primer.md | reference/troubleshooting/ip-primer.md (slug:/reference/troubleshooting/ip-primer) |  |
| troubleshooting/troubleshooting.md | reference/troubleshooting/troubleshooting.md (slug:/reference/troubleshooting/troubleshooting) | ⚠ |

## Pages propres au fork (sans équivalent officielle)

- getting-started/ip-configuration.md
- guides/licensing.md
- integrations/cameras/other/index.md
- integrations/index.md
- products/ci0.md
- products/index.mdx
- products/nio.md
- products/rcp.md
- products/rio.mdx
- products/rsbm.md
- products/system-examples.md
- products/vp4.md
- products/which-product.md
- resources/glossary.md
- restricted/index.md

## Journal de synchro

### `799b76b` → `e775e47` (2026-08-28)

Seul changement de contenu en amont : la branche `Egans` fusionnée, qui ajoute une section « how-to guides » consacrée au tag REMI. Le reste du diff amont ne touche que la CI, `yarn.lock`, `sidebars.js` et `src/css/custom.css`.

| Amont | Action fork |
|---|---|
| `how-to-guides/remi-lan-workflow.md` (nouveau, 96 l) | Fusionné dans `guides/networking/remi.md` |
| `how-to-guides/remi-wan-workflow.md` (nouveau, 137 l) | Fusionné dans `guides/networking/remi.md` |
| `how-to-guides/remi-remi-tag` (nouveau, 268 l, sans extension) | Ignoré — non publié en amont, superseded par les deux pages ci-dessus |
| `how-to-guides/remi-remi-workflow.md` (supprimé) | Rien à faire — jamais porté |

Sections ajoutées à `guides/networking/remi.md` (le fork avait déjà consolidé le reste : cloud, DNS/port 7887, schémas de câblage, configuration en 4 étapes) :
- Exemple RIO +WAN concret (FX3 en USB + dongle 4G)
- Topologie « Multi-site RCP over WAN »
- Topologie « RIO fronting IP cameras over WAN » (le RIO isole les caméras IP de la latence WAN)
- « Manual IP mode » — le tag REMI est un paquet broadcast, bloqué par certains réseaux (mesh IP), d'où l'ajout manuel par IP
- « Troubleshooting » — icône cloud rouge (contrôle de connectivité page Admin) et sélection du serveur EU/US

7 images copiées depuis l'amont :
- `static/img/Configuration/Quick_Start/` : `RIO_Advanced_REMI.png`, `RIO_REMI_Manual_IP.png`, `RIO_REMI_Manual_IP2.png`
- `static/img/Configuration/REMI/` : `RCP_WAN.png`, `RCP_WAN_LAN.png`, `Remote_Connectivity_check.png`, `US_Server_REMI.png`

Le système de tags amont (`tags/*`, 38 pages générées dans le sitemap, 27 fichiers avec frontmatter `tags:`, commit `22cab4b` « experiment with tags ») n'est pas repris : le fork utilise `keywords`.

### Corrections d'entrées périmées

- `Manuals/RCP/RCPUI/RCPUIPowerManagement.md` n'était plus « absent » : `reference/manuals/rcp/ui/power-management.md` a été créé dans `74ad418`.
- `reference/manuals/rio-live-manual.md` n'est plus une page propre au fork : supprimée et fusionnée dans `rio-manual.md` dans `74ad418` (redirection en place dans `docusaurus.config.ts`).

## Page volontairement divergente : `reference/release-notes.md`

En amont, `Maintenance/ReleaseNotes.md` n'est **pas** une page rédigée : son contenu commité est le littéral `DO NOT EDIT...`, et les notes réelles sont injectées au build par `scripts/build_releases.sh` (voir `scripts/releases.conf`). Il n'y a donc pas de source rédactionnelle à suivre en amont.

**Décision (2026-08-28)** : la page release notes du fork suit les conventions du fork, pas la sortie brute du générateur amont. Le fork en est propriétaire.

Restructuration appliquée aux trois releases (26.4.1, 25.9.5, 25.4.1) :

- La liste plate sous `### Summary` est remplacée par des sections thématiques : *Cameras*, *Lenses, motors and heads*, *Control surfaces*, *Video and color processing*, *Routers, switchers and tally*, *Protocols, OS and networking*. La page génère maintenant une vraie table des matières.
- Entrées en doublon fusionnées (4 fusions, aucune information perdue) :
  - « Bolin R9-420N finalised » + « Bolin R9-420N added »
  - « Canon XC: color gain status now reports correctly » + « Canon XC: color gain status mapping fixed »
  - « ARRI Multicam Live on Alexa35: initial support added » + « Arri Alexa35 added, with support of Multicam »
  - « Sony PXW-Z300 added, other improvements for PXW-Z200 » + « Sony: Improved support for PXW-Z200 »
- Noms de produits alignés sur les conventions du fork : ARRI, Blackmagic, PYXIS, URSA, Z CAM, BirdDog, ProBel, AJA, MojoPro, Stream Deck, Canon CR-N700, Canon C50, Panasonic AW-UB10/AW-UB50, Fujinon, Micro L, Alexa 35, APS-C.
- Coquilles amont corrigées : « ordering or the USB devices » → « of », « sometime cause » → « sometimes caused », « authentification » → « authentication », « bi-directionnal » → « bidirectional », « at same time » → « at the same time ».
- Casse phrase appliquée aux puces, conformément au reste du fork.

**Conséquence** : à chaque nouvelle release, coller le texte brut du générateur puis le repasser dans cette structure. Ne pas écraser la page par un copier-coller brut.
