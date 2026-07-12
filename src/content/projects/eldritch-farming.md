---
title: Eldritch Farming
description: >-
  A Stardew Valley x Factorio-style farming game — gather resources in
  exponentially scaling tiers and hand them over to Tree Spirits for
  upgrades. Still in the design phase, nothing built yet.
featured: false
status: concept
date: 2026-07-12
updated: 2026-07-12
hero: ../../assets/projects/eldritch-farming.svg
tags:
  - game
  - gamedev
technologies:
  - Godot Engine
  - GDScript
difficulty: beginner
github: https://github.com/AwsmOli/eldritch-farming
license: MIT
---

## Concept

A day-by-day farming game: declutter and cultivate a plot, gather resources
in tiers of increasing complexity, and donate them to Tree Spirits to
research upgrades and unlock the next tier.

- **T0** — declutter (wood, rock, weeds, trash)
- **T1** — plant, water, and harvest crops
- **T2** — fishing
- **T3** — animals
- **T4** — trees
- **T5** — mushrooms
- later — fermenting, cooking, preserving

## Loop

- Begin the day with full energy
- Spend energy on actions: clearing clutter, watering, planting, harvesting,
  fishing/breeding (petting animals is always free)
- Donate crops to Tree Spirits to unlock upgrades
- Sell the rest to buy better equipment
- End the day when energy runs out

## Upgrades

Upgrades unlock automation (Tree Spirits harvesting for you), increased
yield/growing speed, and more efficient alternate ways to gather each
resource.

## Setting

Still deciding on tone — leaning toward a sacrifice-driven "Eldritch"
theme (upgrades cost something), with an alternate "Irish Farming" concept
(potatoes, fish and chips, Irish gods) also on the table.

## Technical plan

Early scene breakdown: Menu (continue/new game/settings/quit), Play (main
gameplay, action bar, inventory, links to upgrades/settings), New Game
(save slot selection), and an Upgrade screen showing the tech tree.

No gameplay code written yet — this is all still design. A Godot 4.5 project has been initialized (mobile renderer) but nothing beyond the default scaffold exists.

## Source Code

[GitHub](https://github.com/AwsmOli/eldritch-farming)
