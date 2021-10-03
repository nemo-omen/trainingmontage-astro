---
title: 'CS Basics: Detour - MSB and LSB'
date: 2021-10-03 12:21:27
tags: ["CS Basics", "Binary", "Hexadecimal", "MSB", "LSB", "Bits"]
description: We're taking a quick detour to talk about an important concept when dealing with binary numbers — the Most Significant Bit, and the Least Significant Bit.
layout: ../../../layouts/BlogLayout.astro
id: 78be3d29-6a46-400c-a6be-972a99e4083a
---

Up until now, I've been representing binary, quaternary, octal, and hexadecimal numbers a little incorrectly. I did this so we wouldn't be dealing with too many concepts at once. So, let's take a detour and look at the way binary numbers are traditionally represented.

Binary numbers are, at least in computer science, represented in groups of what's called a __nibble__. A nibble is half of a __byte__. Because a byte is 8 __bits__, a nibble is 4 bits.

Each digit of a binary number represents a bit, but we don't really represent binary numbers with a single digit. Instead, we represent all digits of a binary number in groups of 4 bits.

### The Nibble Table

| N<sub>10</sub>  | N<sub>2</sub> Nibble |
| --------------- | -------------------- |
| 0 | 0 0 0 0 |
| 1 | 0 0 0 1 |