---
title: Button Box
description: >-
  A DIY sim racing button box — a NeoTrellis key matrix and rotary encoders
  wired up as a plain USB gamepad. Done, built, and in daily use.
featured: false
status: released
date: 2025-05-22
updated: 2025-05-22
hero: ../../assets/projects/button-box.svg
tags:
  - diy
  - sim-racing
  - hardware
technologies:
  - SparkFun Pro Micro (ATmega32U4)
  - C++ (Arduino)
  - PlatformIO
  - Arduino Joystick Library
  - 3D Printing
difficulty: intermediate
github: https://github.com/AwsmOli/button-box
license: MIT
---

A DIY sim racing button box — a standalone project, separate from the [Vantage Wheel](/projects/vantage-wheel).

## What's built

Firmware drives a 4×8 [Adafruit NeoTrellis](https://www.adafruit.com/product/3954) key matrix (32 illuminated buttons) plus 4 rotary encoders with debounced push-switches, and exposes everything as HID gamepad buttons via the [Arduino Joystick Library](https://github.com/MHeironimus/ArduinoJoystickLibrary) — it shows up to the PC as a plain USB gamepad, no special drivers required. Buttons are grouped and color-coded by function (in-car, pit stop, chat, seat, chief, box control), with a proper encoder state machine for full-detent rotation detection.

The enclosure is designed in CAD (STEP files for the back plate, face plate, mount face, and a Neotalis-specific backplate), ready for 3D printing.

## Building & Flashing

Firmware lives at [`src/buttonbox.ino`](https://github.com/AwsmOli/button-box/blob/main/src/buttonbox.ino) in the [source repo](https://github.com/AwsmOli/button-box). Requires [PlatformIO](https://platformio.org/) and the [Arduino Joystick Library](https://github.com/MHeironimus/ArduinoJoystickLibrary) installed under `~/Documents/Arduino/libraries`.

```bash
pio run                    # build
pio run --target upload    # flash over USB
pio device monitor -b 9600 # serial monitor
```

Board target: `sparkfun_promicro16` (SparkFun Pro Micro, ATmega32U4).

### Pin Configuration

| Signal | Pins |
|---|---|
| NeoTrellis (I2C) | SDA/SCL, board default — left board `0x2E`, right board `0x2F` |
| Panel buttons (SW 1–4) | 18, 19, 20, 21 |
| Encoder 1 — CLK / DT / SW | 15 / 1 / 0 |
| Encoder 2 — CLK / DT / SW | 4 / 5 / 6 |
| Encoder 3 — CLK / DT / SW | 7 / 8 / 9 |
| Encoder 4 — CLK / DT / SW | 14 / 16 / 10 |

## Design Files

- [Source code (GitHub)](https://github.com/AwsmOli/button-box)
- [CAD model (Onshape)](https://cad.onshape.com/documents/05c8dea166e61a5bd338e681/w/9b249b2661dc7c3190149073/e/6085fb5984376436df2593fb) — the enclosure

## Future Ideas

Done and in daily use — the only thing left on the wish list is an on/off switch.
