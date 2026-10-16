# **GeoFS-V3.9**_Autothrottle

![Version](https://img.shields.io/badge/Version-V2.0.1-3b82f6?style=flat-square&logo=git&logoColor=white)
![Ecosystem](https://img.shields.io/badge/GeoFS--V3.9-Autothrottle-06b6d4?style=flat-square&logo=target&logoColor=white)
![Status](https://img.shields.io/badge/Status-Stable-10b981?style=flat-square&logo=lighthouse&logoColor=white)

Professional-grade **Autothrottle** for **GeoFS-V3.9**. This module provides precision speed hold capabilities by implementing a custom **Local PID Controller Class** that regulates thrust with zero oscillation.

---

## ⚖️ Educational & Fair-Play Disclaimer

> [!CAUTION]
> **IMPORTANT NOTICE & DISCLAIMER**:
> This codebase is provided strictly for educational, research, and testing purposes in authorized environments.
> Using automated assistance or unauthorized scripts in violation of platform terms of service or anti-cheat policies may lead to account penalties.
> The developers and contributors accept no responsibility or liability for misuse of this software.

---

## ✨ Features

- **🎯 Precision PID Control**: Calculus-based logic ensures smooth, realistic throttle transitions without "hunting" or overshooting.
- **📟 Dual Mode Logic**: Toggle seamlessly between **Knots (KTS)** and **Mach (M)** with automatic unit conversion and sensitivity scaling.
- **⚓ Landing Mode**: Renamed safety feature that automatically retards the throttle to idle upon touchdown.
- **🕹️ Joystick Suppression**: Automatically blocks physical joystick/throttle axis input when active to prevent hardware interference.
- **🎭 Modernized UI**: Features a compact, draggable glassmorphic panel and a legacy-style A/THR toggle on the Autopilot bar.

## 🛠️ Installation

### Standalone (Tampermonkey)

1. Install the [Tampermonkey](https://www.tampermonkey.net/) extension.
2. Install the script via [**Greasy Fork**](https://greasyfork.org/en/scripts/581512-geofs-v3-9-autothrottle).
3. Refresh GeoFS and the module will automatically initialize alongside the HUD.

*© 2026 AMFI-Disable. Part of the [**GeoFS-V3.9**_Ecosystem](https://sites.google.com/view/geofs-v39-ecosystem/home).*
