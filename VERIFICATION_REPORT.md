# Rapport de vérification factuelle du fork — 2026-06-10

Vérification complète des **158 pages** du fork (`support.cyanview.cloud`) contre la documentation officielle (`support.cyanview.com`, baseline git `799b76b`).

**Méthode** : 1 agent fact-checker en lecture seule par page (142 pages comparées à leur source officielle, 16 pages fork-only recoupées contre tout le corpus officiel), puis chaque finding critique/majeur soumis à un agent sceptique adversarial chargé de le réfuter. Seuls les findings confirmés avec citation de la source officielle ont été retenus. 189 agents, 0 échec.

## Bilan

| | |
|---|---|
| Pages vérifiées | 158/158 |
| Pages propres (aucun finding) | 119 |
| Erreurs **critiques** | 0 |
| Erreurs **majeures** confirmées | 27 (toutes corrigées) |
| Findings **mineurs** | 47 (~34 corrigés, 8 ignorés faute de preuve) |
| Findings réfutés par les sceptiques | 4 (faux positifs écartés) |

Corrections commitées : `3f8590b` (33 fichiers, +80/−75). **Aucun push.** Les corrections touchant tes 4 fichiers WIP (`products/index.mdx`, `products/rcp.md`, `integrations/index.md`, `integrations/cameras/other/index.md`) sont dans le working tree, non commitées.

## Erreurs majeures confirmées et corrigées

### `docs/guides/networking/halow.md`

- **Erreur** : « - **Europe**: VARIA System — [Tube-AH](https://en.varia-store.com/product/alfa-network-tube-ah-eu-384957-access-point/) and [Halow-U](https://www.varia-store.com/en/produkt/8635… »
  - The fork's European purchase link for the Halow-U points to a different varia-store product URL (ID 863568, '802-11ah-halow-usb-adaptersupport-ap-amp-client-mode') than the one upstream gives in both its Europe and Australia entries (ID 375132, 'alfa-network-halow-u-eu-adapter'). The 863568 product ID has no support anywhere in the upstream dumps and looks fabricated/garbled during the rewrite — a buyer following it may land on a 404 or the wrong product.
  - **Correction** : Restore the upstream Halow-U URL for Europe: https://www.varia-store.com/product/alfa-network-halow-u-eu-375132-adapter/ (or verify the 863568 link actually resolves to the Halow-U before keeping it).

### `docs/integrations/cameras/canon/canon-remote-a.md`

- **Erreur** : « Cyanview controls Canon cinema cameras using the Remote A protocol over a 2.1 mm jack serial connection. »
  - The fork states the Remote A connection is a 2.1 mm jack, but the authoritative upstream Canon overview page specifies 2.5mm TRS (twice, including a section heading). Remote A uses the LANC-style 2.5mm TRS connector — the CY-CBL-6P-LANC-03 cable is a LANC cable. A user sourcing or building a 2.1 mm adapter would buy the wrong connector. The 2.1 mm figure looks like a propagated typo from the upstream CanonXC page.
  - **Correction** : Change "2.1 mm jack" to "2.5 mm TRS jack" in the fork's intro sentence.

### `docs/integrations/lenses/tilta.md`

- **Erreur** : « If you use a Tilta motor on a motorized lens that is also natively controllable (such as the Canon 18-80 mm), disengage the Tilta motors before powering up the system. »
  - The fork inverts the lens-class fact in the safety warning. Upstream says the warning applies when a Tilta motor is used on a motorized lens that is NOT natively controllable, and cites the Canon 18-80 as the example of such a lens (it is motorized — hence it self-calibrates at startup and conflicts with a locking Tilta motor — but has only an analog 20P port with no native iris control, which is precisely why one adds Tilta motors to it). The fork states the opposite ("also natively controllable"), changing which lenses the disengage-before-power-up warning applies to and mischaracterizing the Canon 18-80's capabilities, which two other upstream pages explicitly contradict.
  - **Correction** : Change to: "If you use a Tilta motor on a motorized lens that is not natively controllable (such as the Canon 18-80 mm), disengage the Tilta motors before powering up the system."

### `docs/integrations/cameras/panasonic/aw-ub.md`

- **Erreur** : « IP control does not require credentials by default. »
  - The fork inverts the upstream fact. Upstream states the AW-UB camera REQUIRES login credentials for IP control (credentials that must be set via EasyIP SetupTool Plus or Media Production Suite, distinct from the camera's own Lumix Tether login). The fork claims credentials are not required by default and frames the EasyIP/Media Production Suite credentials as applying only 'If you have configured authentication on the camera' — turning a mandatory configuration requirement into an optional one. A user following the fork would skip the credential setup and the integration would fail.
  - **Correction** : Replace the :::info box with a warning stating that the camera requires login credentials for IP control, and that these must be the credentials assigned via EasyIP SetupTool Plus or Media Production Suite — not the login/password configured directly on the camera, which are only for Lumix Tether.

### `docs/integrations/cameras/panasonic/gh5s.md`

- **Erreur** : « description: "Control the Panasonic GH5S mirrorless camera with Cyanview through serial or IP connection." »
  - The frontmatter description (and keywords line "keywords: [Panasonic GH5S, mirrorless, serial, IP control]") claims serial or IP control, but the GH5S/GH7 integration is USB-only per upstream. The fork's own body also says USB only ("Connect the camera to a RCP or RIO using a USB cable."), so the page contradicts itself. This fabricated connection-method claim could mislead users planning cabling, and pollutes search/RAG retrieval with a wrong capability.
  - **Correction** : Change the description to reflect USB connection, e.g. "Control the Panasonic GH5S and GH7 mirrorless cameras with Cyanview through a USB connection." and replace "serial, IP control" in keywords with "USB control".

### `docs/integrations/cameras/sony/sony-alpha.md`

- **Erreur** : « 2. Update your RCP and RIO to the latest version — minimum `24.2.1`. »
  - The fork invents a specific minimum RCP/RIO firmware version (24.2.1) that does not exist in any upstream page. It also contradicts both upstream and the fork's own troubleshooting section, which state RCP/RIO 23.8.1 is the relevant compatible version for FX3 — below the fabricated 'minimum'. A user on a working 23.x system could be misled into believing their setup is unsupported, or conversely trust a fabricated version gate instead of the real per-model requirements (23.8.1 for FX3, 25.10.1beta2 for FX2/FX3A).
  - **Correction** : Remove the fabricated 'minimum `24.2.1`' and say 'Update your RCP and RIO to the latest version' (optionally noting the real documented gates: 23.8.1+ for FX3 control, 25.10.1beta2+ for FX2/FX3A and newer camcorders).

### `docs/integrations/cameras/sony/sony-fx9.md`

- **Erreur** : « description: "Control the Sony FX9 with Cyanview over IP or serial. Optional XDCA-FX9 extension unit enables direct Ethernet connection." »
  - The fork's frontmatter description (and the keywords list, which also includes "serial") claims the FX9 can be controlled over serial. Upstream explicitly lists the FX9 as controlled over IP only — serial control is documented for other Sony cameras (e.g., Venice via 8-pin remote) but not the FX9. The body of the fork page itself only describes Ethernet and Wi-Fi, so the description contradicts both upstream and the page's own content. This is a fabricated capability claim that could mislead a user into buying/planning a serial-based control setup.
  - **Correction** : Change the description to "Control the Sony FX9 with Cyanview over IP (Ethernet or Wi-Fi). Optional XDCA-FX9 extension unit enables direct Ethernet connection." and remove "serial" from the keywords list.

### `docs/integrations/cameras/arri/arri-cap.md`

- **Erreur** : « For the ARRI Amira, use the [ARRI SSCP integration](/docs/integrations/cameras/arri/arri-sscp) instead. »
  - Upstream lists the ARRI Amira as a supported model for the CAP integration, with SSCP merely offering ADDITIONAL controls. The fork removed Amira from the compatible-models list and tells users to use SSCP "instead", inverting the capability claim — a reader with an Amira would wrongly conclude CAP control is not available for that camera.
  - **Correction** : Add ARRI Amira back to the compatible models list, noting that additional controls are available via the ARRI SSCP integration (rather than directing users to SSCP exclusively).

### `docs/reference/manuals/iris-joystick.md`

- **Erreur** : « - `I max open` — Joystick forced UP (spring compressed) - `I open` — Joystick UP (without forcing the spring) - `I close` — Joystick DOWN (without forcing the spring) - `I max c… »
  - The fork invents two extra calibration positions, `I max open` and `I max close` (joystick forced with the spring compressed). Upstream defines only 6 calibration points, and no upstream page mentions any 'I max' positions (grep across /tmp/verify/upstream/ returns nothing). These fabricated steps would confuse a user performing calibration — the calibration screen does not offer such positions, and a user might force the spring while setting `I open`/`I close`, corrupting the calibration.
  - **Correction** : Remove the `I max open` and `I max close` bullets; keep only the six upstream calibration positions (I open, I close, Black max, Black min, J pressed, J released).
- **Erreur** : « - **Black Joystick sensitivity** — Sets the sensitivity of the black ring: x1, x2, or x4. Higher values halve the range for finer precision. »
  - The fork lists 'Black Joystick sensitivity (x1/x2/x4)' as a setting available on the iris joystick's configuration screen. Upstream shows this setting exists only in the RCP Settings menu — the joystick config screen no longer has any black-sensitivity option (the old Black 1X/2X was removed/moved). The fork even contradicts itself: the bullet immediately above says the black sensitivity setting 'has moved to the RCP main screen'. Additionally, 'halve the range' misdescribes x4 (upstream: it changes the number of steps; x4 quarters the step size, not halves).
  - **Correction** : Delete the 'Black Joystick sensitivity' bullet from the iris joystick configuration-screen list; keep only the struck-through note pointing to RCP Settings: Sensitivity, where the x1/x2/x4 setting actually lives.

### `docs/reference/manuals/rcp/controls.md`

- **Erreur** : « Swipe left or right on the touchscreen to move between RCP screens. »
  - The fork invents a swipe gesture as the navigation method. Upstream explicitly documents the two supported methods: tapping the touch-sensitive left/right screen edges, or pressing the two white arrow buttons above the screen. A user following the fork would try a swipe gesture that is not the documented interaction, and the actual methods (edge taps / arrow buttons) are omitted.
  - **Correction** : Replace with: "Tap the touch-sensitive left or right edges of the touchscreen, or press the two white left/right arrow buttons above the screen, to move between RCP screens."

### `docs/getting-started/my-first-cyanview.md`

- **Erreur** : « The CI0 is a serial-only bridge — it converts Ethernet data from the RCP into serial signals for connected cameras. Unlike the RIO, it has no screen and no web interface. »
  - The fork states the CI0 has no screen, but upstream documents a lateral LCD status screen with buttons that shows network status, camera numbers, IP and MAC address. The fork even contradicts itself later on the same page ("On the CI0 front screen: **Bold** camera number..."). Only the 'no web interface' half of the claim is correct. A user reading this could dismiss the CI0's built-in status display as nonexistent and lose a key troubleshooting tool.
  - **Correction** : Change to: "Unlike the RIO, it has no web interface — only a small LCD status screen." (Optionally also align "front screen" later in the page with upstream's "lateral LCD screen".)

### `docs/getting-started/index.md`

- **Erreur** : « Control Panasonic PTZ, Sony FX9, Canon C300, or any IP-connected camera directly from your RCP — no additional hardware needed. »
  - Wrong capability claim. The fork presents the Sony FX9 and Canon C300 as examples of cameras controllable directly over IP from the RCP with no additional hardware. Upstream contradicts both: the FX9 requires the Sony XDCA extension unit (additional hardware) for direct ethernet control without a RIO, and an unqualified "C300" is wrong — only the C300 Mk3 supports IP (XC protocol); the C300 Mk2 is Remote-A serial only. A user with an FX9 or C300 Mk2 following this path would be misled into thinking RCP-only IP control works out of the box.
  - **Correction** : Reword to accurate examples, e.g. "Control Panasonic PTZ, Canon C300 Mk3, or any IP-connected camera directly from your RCP" and either drop the FX9 or add the caveat "Sony FX9 requires the Sony XDCA extension for direct ethernet control (or use a RIO)".

### `docs/getting-started/quickstart.md`

- **Erreur** : « Connect your Cyanview devices to power and network. Every device connects via Ethernet and supports PoE (Power over Ethernet). »
  - The fork claims every Cyanview device supports PoE. Upstream explicitly states the RIO is NOT PoE (12V DC only), and the VP4 is also not described as PoE-powered (it has its own power supply/button; the PoE switch in its prerequisites is for powering the RCP). A user planning a PoE-only power setup for a RIO would have a dead device on site. Devices confirmed PoE upstream: RCP (PoE 802.3af, Manuals__RCP__RCPInstallation.md) and CI0 (PoE+ 802.3af/at, Manuals__CI0__CI0Manual.md).
  - **Correction** : Change the blanket claim to be device-specific, e.g.: "Every device connects via Ethernet. The RCP (PoE 802.3af) and CI0 (PoE+) can be powered over Ethernet; the RIO and VP4 require an external 12V DC power supply."
- **Erreur** : « To connect a RIO or NIO to an RCP, you must use [REMI](/docs/guides/networking/remi). You cannot add a camera connected to a RIO directly into the RCP without REMI. »
  - The REMI requirement is correct for the RIO (supported by Configuration__REMI.md: "Same applies for a RCP importing a camera from a RIO."), but the fork extends it to the NIO. Upstream contradicts this: the NIO is a 16-GPIO tally/GPIO device that connects to the RCP by automatic discovery on the same switch — no REMI pairing exists or is needed, and no cameras connect to a NIO. A NIO user following the fork would search for a nonexistent REMI configuration.
  - **Correction** : Remove "or NIO" from the note: "To connect a RIO to an RCP, you must use REMI...". If NIO needs mentioning, state that NIOs are discovered automatically when on the same network/switch as the RCP.

### `docs/guides/licensing.md`

- **Erreur** : « Buttons are **camera-locked**—each button loads the scene for the currently selected camera »
  - Upstream says the RCP-J quick scene buttons are linked to the camera the joystick module is locked to, which can be DIFFERENT from the camera currently selected on the RCP — upstream explicitly warns the quick load on the RCP and on the joystick 'could load different scene files on different cameras'. The fork garbles this into 'loads the scene for the currently selected camera', which is the opposite of the upstream warning when the joystick is locked, and could cause an operator to load a scene on the wrong camera live.
  - **Correction** : Reword to: 'Buttons follow the joystick module's camera lock — when the joystick is locked to a specific camera, the scene buttons load scenes for that camera, which may differ from the camera currently selected on the RCP.' Also note per upstream: buttons load only (quick press), no save.

### `docs/products/index.mdx`

- **Erreur** : « <p>Software-based remote control panel for broadcast cameras. Control paint, iris, gain, and shutter on 2 to 128 cameras.</p> »
  - The RCP is a physical hardware control panel (it has mounting dimensions, rack frames, PoE/12V power, a touchscreen), not a software product. Calling it "Software-based" inverts the product's fundamental nature and directly contradicts both upstream (mounting/powering instructions for a physical device) and the fork's own RCP page, which calls it a "dedicated hardware panel". A buyer reading the products index would be completely misled about what the RCP is.
  - **Correction** : Change "Software-based remote control panel" to "Hardware remote control panel" (matching the fork's own rcp.md description: "a hardware remote control panel for broadcast cameras").
- **Erreur** : « <p>16 GPIO channels for tally control over Ethernet, WiFi, or 4G. Compatible with NDI and SRT for modern IP workflows.</p> »
  - The first sentence is supported (Configuration__Tally.md: "If you want GPIO over ethernet/WiFi/4G, you can use a NIO"), but the claim "Compatible with NDI and SRT for modern IP workflows" is a fabricated capability. The NIO is a GPIO-over-IP tally box; no upstream page attributes any NDI or SRT support to it. NDI/SRT are video transport protocols unrelated to the NIO's GPIO function. The same fabrication is repeated on the fork's nio.md page ("NDI compatible — Native NDI tally integration", "SRT compatible"), so this is systematic, not a typo.
  - **Correction** : Delete "Compatible with NDI and SRT for modern IP workflows." from the card (and remove the corresponding NDI/SRT bullets and keywords from docs/products/nio.md). A supported replacement: "Stack multiple NIO units when you need more GPIO."

### `docs/products/rcp.md`

- **Erreur** : « | **MSU** | 128 | Large broadcast operations | »
  - The RCP licensing table caps the MSU tier at 128 cameras, but upstream describes the top RCP license as "unlimited/broadcast version" and the fork's own licensing.md page lists MSU as "Unlimited". The 128 figure also propagates into this page's frontmatter description ("Control paint, iris, gain, and shutter on 2 to 128 cameras") and the intro sentence ("managing 128 across a global REMI production"), making the page internally inconsistent with the rest of the fork.
  - **Correction** : Change the MSU row to "Unlimited" (matching guides/licensing.md and upstream's "unlimited/broadcast version"), and reword the frontmatter description and intro to avoid the hard 128-camera ceiling (e.g., "from 2 cameras to unlimited broadcast operations").
- **Erreur** : « The RCP is the core of every Cyanview system. You always need at least one RCP. »
  - The fork asserts an RCP is mandatory in every Cyanview system, but upstream explicitly documents the RIO as a standalone camera control device (it embeds the RCP camera-protocol stack and its own configuration web UI) and the VP4 as operable standalone. A user with a RIO-only or VP4-only workflow does not need a hardware RCP panel, so this absolute requirement claim is a wrong capability/requirement statement that could mislead purchasing decisions.
  - **Correction** : Soften to something like: "The RCP is the heart of most Cyanview systems — it provides the tactile shading surface. Some devices (RIO, VP4) can also operate standalone via their own web UI, but for hands-on paint control you'll want at least one RCP."

### `docs/products/system-examples.md`

- **Erreur** : « | RIO +WAN | 12 | Camera and lens control, 4G for mobile cameras | »
  - The fork claims the documented Paris Fashion Week deployment used 12x RIO +WAN. Upstream documents 9x RIO LAN (= RIO +LAN in fork convention) for the fixed cameras plus 3 RIOs on 4G for the mobile cameras. Only the 3 mobile units needed WAN/cloud connectivity. The page explicitly states "Each example below is based on a documented deployment" and the OSP FACT note claims real-production accuracy, so listing 12 +WAN misrepresents the deployment and over-specs the license requirement for buyers quoting from this table.
  - **Correction** : Change the equipment row to reflect the documented split, e.g. "RIO +LAN | 9 | Lens/camera control for fixed cameras (fiber)" and "RIO +WAN | 3 | Camera and lens control over 4G for mobile cameras", and adjust the "How it connects" diagram labels accordingly.

### `docs/products/which-product.md`

- **Erreur** : « | Need lens motor control? | No | **Yes** | »
  - The CI0 vs RIO decision table claims the CI0 cannot do lens motor control. Upstream explicitly documents lens control (B4 lenses and cine lens motors) on the CI0 — B4 Lens protocol is supported on both CI0 serial ports, and the B4 lens setup example uses a CI0. The real upstream distinction is autonomy: if the RCP-CI0 link drops, lens control is lost (iris closes/resets), whereas the RIO keeps controlling. The fork already captures that in the 'Network may drop' row, so this row is a wrong capability claim that could push buyers to a RIO unnecessarily.
  - **Correction** : Change the row to reflect upstream: CI0 supports lens control (B4 and external lens motors) on its serial ports; the RIO adds autonomous lens control if the network drops, plus USB-cable lens motor options. E.g. 'Need lens motor control? CI0: Yes (serial) / RIO: Yes (keeps control if network drops)'.
- **Erreur** : « Mirrorless and cinema cameras with USB control need a RIO — the CI0 has no USB port. »
  - The blanket claim that USB-controlled cameras 'need a RIO' contradicts upstream: USB mirrorless cameras (Sony Alpha, Canon R5) can be plugged directly into the RCP's USB-A ports (and even a NIO for the R5) — a RIO is only needed when the camera is remote from the RCP or on a gimbal/4G link. The 'CI0 has no USB port' part is correct. As written, this could cause a buyer with a local USB camera next to the RCP to purchase an unnecessary RIO.
  - **Correction** : Reword: 'USB-controlled cameras plug directly into the RCP's USB ports when local. Add one RIO per camera when the camera is away from the RCP (gimbal, remote position, REMI). The CI0 has no USB port.'
- **Erreur** : « ### USB cameras (Sony Alpha, Canon R5, Canon C70) »
  - The Canon C70 is presented as a USB-controlled camera requiring a RIO. Upstream documents C70 control via the Canon XC protocol over Ethernet (IP), or via the Remote A 2.1 mm jack — neither is USB. Canon's USB integration covers only the R5. A user following this page would look for nonexistent USB control on the C70 and buy a RIO for the wrong reason (the C70 is an IP camera in Cyanview's model).
  - **Correction** : Remove Canon C70 from the USB cameras section heading and examples; mention it under IP cameras (Canon XC protocol over Ethernet) instead. Keep Sony Alpha and Canon R5 as USB examples.

### `docs/resources/glossary.md`

- **Erreur** : « | **PoE** | Power over Ethernet. All Cyanview devices support IEEE 802.3af PoE, allowing power delivery over the same Ethernet cable used for data. | »
  - The blanket claim that ALL Cyanview devices support PoE is false: upstream explicitly states the RIO is NOT PoE and requires 12V DC. The VP4 is also powered from its own supply (Manuals__VP4Manual.md mentions a PoE switch only to power the RCP). Additionally, the CI0 is specified upstream as PoE+ (802.3af/at), not plain 802.3af. A user planning to power a RIO from a PoE switch based on this glossary would have a dead device on site.
  - **Correction** : Replace with an accurate per-device statement, e.g.: "Power over Ethernet. The RCP (802.3af), CI0 (PoE+, 802.3af/at) and NIO can be powered over Ethernet. The RIO is NOT PoE — it requires 12V DC."
- **Erreur** : « | **RCP** | Remote Control Panel. Cyanview's software-based camera paint controller. Runs on tablets, computers, or touchscreens. | »
  - The fork describes the RCP as a software product that 'runs on tablets, computers, or touchscreens'. Upstream documentation makes clear the RCP is a physical hardware control panel: it is PoE/12V powered, has a 10/100 Ethernet port, physical encoders, buttons, an integrated touchscreen, a hardware test mode, and a hardware serial number (CY-RCP-xx-xx). This completely mischaracterizes the flagship product (the software dashboard is a separate thing, the multi-cam dashboard).
  - **Correction** : Rewrite as: "Remote Control Panel. Cyanview's hardware camera control panel with touchscreen and physical encoders. Powered via PoE (802.3af) or 12V DC; configured through its web UI."
- **Erreur** : « | **RIO +LAN** | RIO with LAN-only license (formerly RIO Live). Local production companion for 1-2 cameras, no cloud or REMI. | »
  - The fork claims RIO +LAN has 'no cloud or REMI'. Upstream states the LAN license does provide REMI access, restricted to the local network — only cloud/WAN REMI is excluded. Saying it has no REMI at all overstates the limitation and inverts a documented license capability (a user could wrongly conclude local REMI workflows require the +WAN license). The 'no cloud' and two-camera limit parts are correct.
  - **Correction** : Change to: "RIO with LAN-only license (formerly RIO Live). Local production companion limited to two cameras; REMI access only on the local network, no cloud/WAN access."

## Findings mineurs corrigés

- `docs/guides/networking/halow.md` — « Plug directly into a RIO. Some cameras also support a direct connection. » → Change to "Very few cameras also support a direct connection." to preserve the upstream restriction.
- `docs/reference/firmware-download.md` — « description: "Download the latest firmware for your Cyanview devices. RCP, RIO, CI0, VP4, and NIO update files." » → Remove CI0 from the description, e.g.: description: "Download the latest firmware for your Cyanview devices. RCP, RIO, NIO, and VP4 update files."
- `docs/guides/tally/tally.md` — « - A red tally output goes to the active camera when any of the three cameras goes live. » → Reword both bullets to match upstream meaning, e.g. "A red tally is sent to whichever camera goes live" and "A green tally is sent to whichever camera enters preview."
- `docs/guides/networking/wifi-nano-ap.md` — « Use a TP-Link Nano Router as a Wi-Fi access point to provide wireless connectivity to your Cyanview device. » → Rephrase the intro/description to say the TP-Link Nano Router is configured as a Wi-Fi client bridge that connects your Cyanview device's Ethernet port to an existing Wi-Fi access point, e.g. "Use a T
- `docs/resources/draw-io-symbols.md` — « description: "Download Cyanview device symbols for Draw.io and Excalidraw diagrams. Create professional system archit… » → Remove "and Excalidraw" from the description and drop "Excalidraw" from the keywords list, unless Excalidraw compatibility can be independently confirmed.
- `docs/integrations/accessories/anxinshi-ptz-usb-joystick.md` — « description: "Use a USB joystick for PTZ camera control with Cyanview. Configure speed curves and axis mapping for pr… » → Rewrite the description to match documented functionality, e.g.: "Use the Anxinshi USB joystick for PTZ camera control with the Cyanview RCP, including saving and recalling PTZ positions."
- `docs/integrations/cameras/other/birddog-ptz.md` — « description: "Control BirdDog PTZ cameras with Cyanview over NDI or IP for pan, tilt, zoom, and paint control." » → Change the description to "Control BirdDog PTZ cameras with Cyanview over IP for pan, tilt, zoom, and paint control." and remove "NDI" from the keywords list (or keep it only as a discoverability keyw
- `docs/integrations/cameras/canon/canon.md` — « To check whether your camera supports Remote A, visit the Canon website, open the **Specifications** tab, and look fo… » → Verify on the actual Canon spec pages which block lists Remote A support; if upstream's wording is authoritative, restore 'Scroll to IP Streaming & Control and search for Canon XC Protocol supported' 
- `docs/integrations/broadcast-systems/evs-hm.md` — « refer to the [EVS documentation](https://download-area.evs.com/en/download-area-version/3499) » → Either verify the URL actually resolves to the EVS Hypermotion documentation and keep it, or revert to the upstream wording with a generic link to the EVS documentation/download area landing page (e.g
- `docs/integrations/cameras/sony/sony-8pin.md` — « ![Sony PMW connected via CI0 to an RCP over internet](/img/Integrations/camera/Sony/Sony-PMW/Sony-PMW-XXX-RCP-RIO-Int… » → Swap the two captions: caption the ...RCP-CI0 image as 'Sony PMW connected via CI0 to an RCP' and the ...RCP-RIO-Internet image as 'Sony PMW connected via RIO to an RCP over internet'.
- `docs/integrations/cameras/sony/sony-alpha.md` — « - `-PC-` appears in white when the USB cable is connected. - `-PC-` turns orange when the camera is under active remo… » → Remove the '-PC-' white/orange indicator claims and the dependent tip, or verify the exact indicator behavior against Sony documentation before publishing. Upstream-supported guidance is simply: use a
- `docs/integrations/cameras/sony/sony-fx6.md` — « control servo lenses (B4 or PL) or motors (Tilta, ARRI cforce) directly through a [RIO](/docs/products/rio) » → Restore the qualifier, e.g. "motors (Tilta, or ARRI cforce — coming soon)" or verify CForce support is now shipping before claiming it unqualified.
- `docs/integrations/cameras/sony/sony-fx9.md` — « This is a known Sony firmware behavior — the WB physical switch state affects master black accessibility even though … » → Reword to something like: "The reason for this coupling between the WB switch and master black control is unknown — it appears to be a quirk of the camera's behavior."
- `docs/integrations/cameras/other/zcam-p2r1.md` — « description: "Integrate Z CAM cameras with Cyanview for remote paint and camera control in cinema production." » → Mention the P2-R1 model explicitly in the title or description (e.g. 'Z CAM P2-R1 PTZ integration') or clarify which Z CAM models the page covers.
- `docs/integrations/cameras/arri/arri-cap.md` — « Unlocking a look is optional but limits your control: » → Rephrase to: "Unlocking a look is optional, but keeping it locked limits your control:" (or "Skipping this step limits your control:").
- `docs/integrations/cameras/arri/arri-cap.md` — « If you are unsure, split the bus into two: iris controlled by the camera, and focus/zoom by the WCU. » → Either remove the bus-split recommendation or verify it with the support team before keeping it.
- `docs/integrations/cameras/arri/arri-cforce.md` — « | `1.6:32:iris:2:left,zoom:4:right` | Iris (torque 2, left) + zoom (torque 4, right). Focus uses defaults. | » → Align the example annotation with upstream: "Iris (torque 2, left) + zoom (torque 4, right). Focus is not controlled." — or verify actual RIO behavior before claiming defaults apply to unconfigured mo
- `docs/integrations/cameras/arri/arri-cforce.md` — « Control ARRI cforce lens motors directly from a Cyanview RCP through a RIO. This integration provides precision iris,… » → Add an admonition near the top stating this direct CAN control method is unofficial/as-is (no official support), is not compatible with other LBUS devices, and that the officially supported multi-cont
- `docs/reference/manuals/iris-joystick.md` — « - **Joystick limits** — Clear limits, toggle ON/OFF (when ON the joystick is constrained to the defined range; when O… » → Add a note/admonition to the Joystick limits bullet (and/or the 'Set the limits' section): this function is not fully implemented and may not be functional on every camera model; report issues to supp
- `docs/reference/manuals/rcp/gpio-dongle.md` — « A simpler version providing only 2 GPIO is available. » → Rephrase to match upstream intent, e.g. 'A simpler version providing only 2 GPIO can be built following this pinout.'
- `docs/getting-started/my-first-cyanview.md` — « Open the RCP **Configuration** menu — imported cameras display a "Cyan Imported" label » → Change "Cyan Imported" to "Imported".
- `docs/getting-started/index.md` — « Camera-specific setup guides for 30+ manufacturers » → Change to a defensible figure, e.g. "Camera-specific setup guides for 15+ manufacturers" or simply "setup guides for all supported camera brands".
- `docs/reference/troubleshooting/troubleshooting.md` — « Cisco **Portfast** is mandatory for Cyanview devices. Without it, devices may fail to communicate after a switch port… » → Either remove the Cisco Portfast section, soften 'mandatory' to a recommendation, or verify the claim with Cyanview engineering and add it to the source-of-truth docs before publishing.
- `docs/reference/troubleshooting/troubleshooting.md` — « 1. Access the RCP Configuration Web UI several times using **private/incognito browsing** (to avoid cache). » → Drop the incognito-browsing step or mark the diagnosis procedure as a general duplicate-IP check (cross-link the IP primer's arping section), rather than presenting it as an established Netgear-specif
- `docs/reference/troubleshooting/troubleshooting.md` — « 2. Reboot all network devices to clear ARP tables. » → Keep removal of the router as the definitive fix; if the reboot step is retained, frame it as cleanup after the router is removed, not as an independent remedy.
- `docs/getting-started/quickstart.md` — « ### IP cameras (PTZ, Sony FX9, Canon C300) » → Specify the model: "IP cameras (PTZ, Sony FX9, Canon C300 Mk3)".
- `docs/getting-started/quickstart.md` — « Before you start, update all devices to the latest firmware for the best experience. Follow the [update guide](/docs/… » → Add a warning admonition: "Updating the firmware wipes the device configuration. Save your configuration from the admin page before updating, and reload it afterwards."
- `docs/guides/licensing.md` — « | **MSU** | Unlimited | » → Verify the official commercial tier names against Cyanview pricing/sales material; based on upstream hints, the unlimited tier is called 'Broadcast' rather than 'MSU'. Rename or confirm before publish
- `docs/guides/licensing.md` — « 3. Navigate to **System > License** to verify 4. Restart the device if still not updated » → Verify the actual web-UI menu labels on a real RCP/RIO before publishing, and/or describe the documented license-file (.json/.sig) delivery mechanism instead of unverified menu paths.
- `docs/integrations/cameras/other/index.md` — « | Marshall | Mini cameras (CV503, CV504, etc.) | [Marshall mini cameras](/docs/integrations/cameras/other/marshall-mi… » → Change "(CV503, CV504, etc.)" to "(CV503, CV506, etc.)" or "(CV500, CV502, CV503, etc.)" to match models actually documented upstream.
- `docs/integrations/cameras/other/index.md` — « | Z CAM | P2, P2 R1 | [Z CAM integration](/docs/integrations/cameras/other/zcam-p2r1) | » → Change the model cell to "P2-R1" only (or "P2-R1 PTZ").
- `docs/integrations/cameras/other/index.md` — « | BirdDog | PTZ range (X1, X4, X5) | [BirdDog PTZ integration](/docs/integrations/cameras/other/birddog-ptz) | » → Broaden to "PTZ range (P200, P400, X1, X4, X5)" or "PTZ range (P and X series)".
- `docs/integrations/index.md` — « Connect and control over 100 camera models across 30+ manufacturers. » → Either soften to a non-numeric claim ('a wide range of cameras across dozens of manufacturers') or align the numbers with the actual documented integrations (~22-25 manufacturers).
- `docs/integrations/index.md` — « | [Blackmagic](/docs/integrations/cameras/blackmagic/blackmagic-camera-control) | URSA, Pocket Cinema, Micro — via SD… » → Change the blurb to reflect both paths, e.g. 'URSA, Studio, Pocket Cinema, Micro, PYXIS — via SDI control or IP (REST API)'.
- `docs/products/ci0.md` — « The CI0 does **not** have a USB port. For USB-controlled cameras (Sony Alpha, Canon R5), you need a [RIO](/docs/produ… » → Reword to: "For USB-controlled cameras (Sony Alpha, Canon R5), use a RIO, NIO, or connect the camera directly to a USB port on the RCP." Similarly, the comparison row "USB camera control | Not support
- `docs/products/nio.md` — « - **NDI compatible** — Native NDI tally integration » → Remove the "NDI compatible" bullet (and "NDI" from the frontmatter description/keywords), or verify against an authoritative product source and, if NDI tally is actually supported, cite/document it; o
- `docs/products/nio.md` — « - **SRT compatible** — Works with SRT-based video transport » → Remove the "SRT compatible" bullet (and "SRT" from the frontmatter description/keywords), or reword to clarify the NIO carries tally/GPIO signals over IP networks alongside any video transport (SRT, N
- `docs/products/rcp.md` — « **Protocol translation** — Communicates with cameras over Serial, IP, USB, and SDI through CI0 and RIO gateways » → Reword to: "Communicates with cameras over IP directly, over Serial via CI0 or RIO gateways, over USB via RIO, and over SDI via a CI0/RIO fitted with the Blackmagic SDI control board (RSBM)."
- `docs/products/rio.mdx` — « | **RIO +LAN** | LAN only | 1–2 | Local production companion, no cloud or REMI | » → Reword to "Local production companion — RCP pairing on the local LAN only, no cloud / remote REMI" so the local RIO↔RCP pairing capability is not denied.
- `docs/products/rio.mdx` — « - **USB port** — Support for Sony Alpha, Canon R5, and other USB-controlled cameras » → Change to "**2 USB ports** — Support for Sony Alpha, Canon R5, and other USB-controlled cameras, plus 4G/Wi-Fi/Ethernet dongles".
- `docs/products/system-examples.md` — « | RCP (OCTO or MSU) | 12 | One per camera for dedicated shading | » → Change to something like: "RCP (DUO) | 11 | One per camera for dedicated shading" and "RCP (MSU) | 1 | Master panel — imports all 12 cameras for ATEM tally routing and group REC".
- `docs/products/system-examples.md` — « - Panasonic cameras require USB-Ethernet adapter for RIO connectivity » → Reword the bullet to: "The RIO's single Ethernet port is taken by the DataBridge link — a USB-Ethernet adapter is needed for the camera connection".
- `docs/products/system-examples.md` — « Fixed cameras (×9):   FX9 → RIO (serial/lens) → Fiber (Ereca CAM RACER) → RCP » → Label the camera path correctly, e.g. "FX9 → RIO (Ethernet via XDCA or Wi-Fi; lens on RIO serial port) → Fiber (Ereca CAM RACER) → RCP".
- `docs/products/vp4.md` — « - **Real-time color correction** — Adjust color, contrast, and exposure on the fly » → Replace with the documented capability set, e.g. "Real-time color correction — multi-matrix secondary correction (hue/saturation vectors) plus CCU-style controls such as detail, coring and black".
- `docs/products/vp4.md` — « The VP4 is designed to work alongside an RCP. Configure your RCP before connecting the VP4. » → Soften to: "The VP4 is typically operated from an RCP (it can also run standalone via its own web UI). The RCP autodetects the VP4 on the network — no specific connection order is required."
- `docs/products/which-product.md` — « - Your switcher supports GPIO or NDI tally » → Replace 'GPIO or NDI tally' with the documented paths: 'Your switcher outputs GPIO tally, or sends tally via TSL/direct integration (ATEM, vMix, Tricaster) and you need GPIO outputs to the cameras.'
- `docs/products/which-product.md` — « This is the simplest path — no additional hardware beyond a gateway. » → Change to: 'This is the simplest path — no gateway hardware needed (a RIO is optional for autonomous control and lens support).'

## Findings réfutés (faux positifs écartés par les sceptiques)

- `docs/reference/troubleshooting/ip-primer.md` — « ## Default IP configuration of Cyanview devices (except CI0) » : The fork quote exists (line 113 of /Users/alanogic/ddev/cyanview-support/docs/reference/troubleshooting/ip-primer.md), but the claimed contradiction does not hold up. (1) The checker's key citation placing CI0 in the 10.192.0.0/16 product list comes from upstream's commented-out '<!-- TODO -->' S…
- `docs/guides/licensing.md` — « - Cannot participate in REMI (remote production) workflows » : The fork quote exists (licensing.md:116), but the finding fails conditions (2) and (3). The fork ecosystem deliberately and consistently redefines "REMI" as Remote Integration Model / remote production over IP-cloud (glossary.md:41), the standard industry meaning — distinct from upstream's looser…
- `docs/products/rio.mdx` — « | **RIO +WAN** | LAN and WAN | 1–128 | Full license: Cyanview cloud, REMI, internet access | » : Conditions 1 and 2 hold superficially: the fork quote exists verbatim at /Users/alanogic/ddev/cyanview-support/docs/products/rio.mdx:31, and the upstream legacy docs (/tmp/verify/upstream/Manuals__RIOManual.md:34, Configuration__REMI.md:85) say 'unlimited number of cameras' for RIO WAN. But condi…
- `docs/products/system-examples.md` — « If your URSA G2 or Studio Camera G2 has IP control enabled, you can skip the RSBM and control the camera di… » : The fork quote exists verbatim (system-examples.md line 197), but upstream does not contradict it. (1) Every literal claim is upstream-confirmed: both URSA G2 Broadcast and Studio Camera 4K Plus/Pro G2 are listed under "IP & SDI Camera Control" in Integrations__Blackmagic__blackmagiccameracontrol…

## Mineurs NON appliqués (à trancher)

- `guides/licensing.md` — nom du palier « MSU » et chemins de menu Système > Licence : à vérifier sur un vrai appareil / matériel commercial, rien dans la doc officielle.
- `reference/troubleshooting/troubleshooting.md` — « Cisco Portfast obligatoire » et l'étape de diagnostic en navigation privée : aucune trace dans la doc officielle (probablement inventés), mais pas de formulation de remplacement sourcée. À confirmer ou supprimer.
- `integrations/cameras/canon/canon.md` — procédure de vérification Remote A : la page officielle est elle-même auto-contradictoire (instructions XC sous le titre Remote-A). À clarifier avec Canon/l'équipe.
- `integrations/cameras/sony/sony-alpha.md` — indicateur blanc/orange du câble `-PC-` : aucune source officielle ne le confirme ni l'infirme.
- `integrations/cameras/arri/arri-cap.md` — conseil de séparation L-Bus : invérifiable, à valider avec le support.
- `integrations/cameras/sony/sony-fx6.md` — le « (coming) » officiel sur cforce est périmé : le fork est plus à jour que la doc officielle, rien changé.