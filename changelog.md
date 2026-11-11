# Changelog

All notable changes, PID controller updates, and version releases for GeoFS-V3.9 Autothrottle are documented in this file.

---

## [3.9.0] - Unified Metadata

### Changed

- Standardize the userscript metadata and version across the V3.9 ecosystem.
- Match only the GeoFS main site and activate only when it reports V3.9.

---

## [Unreleased]

### Added

- **Keyboard Accessibility**: Added keyboard navigation and activation support (Enter and Space keys) for landing mode toggle switches (`role="button"`, `tabindex="0"`, `aria-pressed`).

### Changed

- **Landing Switch UI**: Expanded switch label to `LANDING`, clarified mode tooltip, and added `.landing-selected` visual active state.
- **Favicon Metadata**: Switched userscript icon reference to the official GeoFS favicon.

---

## [2.0.6] - GeoFS V3.9 Compatibility

### Changed

- Start only after GeoFS reports V3.9; remain inactive on other or unrecognized versions.
- Update compatibility documentation and version metadata.

---

## [2.0.5] - Unified Notifications

### Changed

- Routed autothrottle failure alerts through the shared status panel.

---

## [2.0.1] - Controller Refinements And Flare Dynamics

### Added

- **Auto-Retard Landing Logic**: Automatic throttle reduction during touchdown flare when crossing radio altimeter thresholds.
- **Mach Sensitivity Scaling**: Dynamically scales PID coefficients when flying in high-altitude Mach regimes.

### Fixed

- **Anti-Windup Integral Clamping**: Prevented throttle oscillation and thrust hunting during abrupt airspeed transitions.
- **Dual-Mode Unit Switching**: Smooth transitions when toggling between Knots (KTS) and Mach (M) target modes.

---

## [2.0.0] - Local PID Controller Implementation

### Added

- **Custom Local PID Engine**: Proportional-Integral-Derivative calculus controller delivering smooth, realistic engine spool responses.
- **Glassmorphic Autothrottle Panel**: Compact control panel with target speed rotary dials and arming toggles.

---

## [1.0.0] - Initial Production Release

Initial release of the closed-loop autothrottle speed management system for GeoFS.
