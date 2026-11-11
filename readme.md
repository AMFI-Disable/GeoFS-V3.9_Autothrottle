# GeoFS-V3.9_Autothrottle

![Version](https://img.shields.io/badge/Version-v3.9.0-3b82f6?style=flat-square)

Holds a selected speed in GeoFS with an automatic throttle controller.

## Features

- Use **A/THR** on the GeoFS autopilot bar to open the controls and select knots or Mach.
- Arm Landing Mode to retard the throttle to idle at touchdown.
- The controller can coordinate with Overpowered Engines when that module is present.

## Installation

1. Install a userscript manager such as [Tampermonkey](https://www.tampermonkey.net/).
2. Install or update the script from [Greasy Fork](https://greasyfork.org/en/scripts/581512-geofs-v3-9-autothrottle).
3. Open or reload GeoFS V3.9. The script starts automatically.

The script activates only when GeoFS reports version V3.9 (including V3.9 patch releases). It waits for the version to become available and remains inactive on other versions. Most standalone scripts load the Core Library and Design System as dependencies; the userscript manager handles those dependencies.

The **GeoFS-V3.9_Ecosystem** panel shows startup status and notifications. Select × to dismiss it, or wait for it to disappear. A script listed as not detected is not necessarily uninstalled.

## License

[MIT](license) · © 2026 AMFI-Disable · [GeoFS-V3.9 Ecosystem](https://sites.google.com/view/geofs-v39-ecosystem/home)
