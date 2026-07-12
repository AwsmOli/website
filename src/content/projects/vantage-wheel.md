---
title: Vantage Wheel
description: >-
  A DIY rotary encoder control module for sim racing — an ESP32-S3 reads a
  bank of encoders and emulates a Bluetooth LE gamepad, used alongside a
  Fanatec wheel base. Done, built, and in daily use.
featured: false
status: released
date: 2025-05-11
updated: 2025-05-11
hero: ../../assets/projects/vantage-wheel.svg
tags:
  - diy
  - sim-racing
  - hardware
technologies:
  - ESP32-S3
  - C++ (Arduino)
  - PlatformIO
  - ESP32-BLE-Gamepad
difficulty: intermediate
github: https://github.com/AwsmOli/vantage-wheel
license: MIT
---

Working name "Vantage Wheel" — a DIY rotary encoder control module for sim racing, used as a wireless accessory alongside a Fanatec wheel base rather than as a wheel base itself. A standalone project, separate from the [Button Box](/projects/button-box).

## What's built

An ESP32-S3 reads 5 rotary encoders (with debounced push-buttons) and emulates a 32-button Bluetooth LE HID gamepad via [ESP32-BLE-Gamepad](https://github.com/lemmingDev/ESP32-BLE-Gamepad) — it shows up to the PC as a plain Bluetooth gamepad, no companion software or drivers needed.

An earlier prototype explored using the ESP32-S3's USB host mode to read a physical keyboard directly, but the Arduino framework doesn't expose the USB host APIs needed for that — it would require porting to ESP-IDF. The current firmware sticks with Arduino + BLE gamepad emulation instead, and USB host input isn't implemented.

## Building & Flashing

Firmware lives at [`src/main.cpp`](https://github.com/AwsmOli/vantage-wheel/blob/main/src/main.cpp) in the [source repo](https://github.com/AwsmOli/vantage-wheel). Requires [PlatformIO](https://platformio.org/); the [ESP32-BLE-Gamepad](https://github.com/lemmingDev/ESP32-BLE-Gamepad) library is pulled automatically via `lib_deps`.

```bash
pio run                      # build
pio run --target upload      # flash over USB
pio device monitor -b 115200 # serial monitor
```

Board target: `esp32S3` (ESP32-S3-DevKitC-1, 16MB flash). After flashing, the device advertises as a Bluetooth LE gamepad named "VantageWheel" — pair it like any other Bluetooth device.

### Pin Configuration

| Encoder | VCC | GND | CLK | DT | SW (button) |
|---|---|---|---|---|---|
| 1 | 18 | 4 | 7 | 6 | 5 |
| 2 | 18 | 17 | 10 | 9 | 8 |
| 3 | 18 | 4 | 2 | 1 | 44 |
| 4 | 37 | 38 | 48 | 35 | 36 |
| 5 | 14 | 4 | 11 | 12 | 13 |

Each encoder's VCC/GND pins are driven as digital outputs rather than wired to a fixed rail, so an encoder can be powered from whichever nearby GPIOs are convenient.

## Design Files

- [Source code (GitHub)](https://github.com/AwsmOli/vantage-wheel)
- [CAD model (Onshape)](https://cad.onshape.com/documents/08082415ff2de2ac8e2b91c2/w/0c94ee610cfca7954d29ceab/e/e80c9b103543ff9733494459) — enclosure/mounting

## Future Ideas

Done and in daily use — wish list items are rev lights or a small display.
