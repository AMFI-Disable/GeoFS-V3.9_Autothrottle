# Changelog

All notable changes, PID controller updates, and version releases for GeoFS-V3.9 Autothrottle are documented in this file.

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
