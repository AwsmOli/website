---
title: Space Game
description: >-
  A "Space Survivors" style top-down shooter — a Vampire-Survivors-inspired
  prototype where the ship auto-attacks nearby enemies. Core loop is
  playable; upgrades and menus aren't built yet.
featured: false
status: implementation
date: 2026-07-12
updated: 2026-07-12
hero: ../../assets/projects/space-game.svg
tags:
  - game
  - gamedev
technologies:
  - Godot Engine
  - GDScript
difficulty: intermediate
github: https://github.com/AwsmOli/space-game
license: MIT
---

A "Space Survivors" style top-down shooter — the first planned stage of a broader space game concept, starting from a Vampire-Survivors-inspired core loop.

## What's built

- **Player** — thrust-and-rotate movement, auto-fires lasers at the nearest tracked enemy on a reload/attack timer (ammo, attack speed, and level are all tunable).
- **Enemies** — chase the player and fire back on a timer; take damage via a hurt box and die at 0 HP, spawning an explosion.
- **Enemy Spawner** — spawns waves of enemies just outside the viewport around the player, driven by configurable spawn windows (start/end time, delay, count).
- **Hit/Hurt Boxes** — shared damage-detection components used by lasers, players, and enemies.
- **Scoring** — tracks and displays score, restarts the run on a timer.
- Art/audio from Kenney's [Space Shooter (Redux)](https://kenney.nl/assets/space-shooter-redux) pack (CC0).

## What's not built yet

- A ship upgrade system — resources dropped by enemies, unlockable weapons (missiles, drones), and utility systems like shields
- Menus
- Player spawning through code (currently the player exists directly in the scene rather than being instantiated)

One idea being explored alongside this is an "Exploration" mode — not fleshed out yet either.

## Source Code

[GitHub](https://github.com/AwsmOli/space-game)
