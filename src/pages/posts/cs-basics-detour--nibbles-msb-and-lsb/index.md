---
title: 'CS Basics: Detour - Nibbles, MSB, and LSB'
date: 2021-10-05 05:09:49
tags: ["CS Basics", "Binary", "Hexadecimal", "MSB", "LSB", "Nibbles"]
description: We're taking a quick detour to talk about an important concept when dealing with binary numbers — the Most Significant Bit, and the Least Significant Bit.
permalink: https://trainingmontage.dev/posts/cs-basics--nibbles-msb-and-lsb/
layout: ../../../layouts/BlogLayout.astro
id: 78be3d29-6a46-400c-a6be-972a99e4083a
---

<div class="toc">
  <div class="flow">
    <p>
      This post is the 3rd in a series about basic concepts in programming and Computer Science. You can find all the posts in the series below.
    </p>
    <ol>
      <li>
        <a href="/posts/cs-basics-binary-conversion">CS Basics: Binary Conversion</a>
      </li>
      <li>
        <a href="/posts/cs-basics-hex-and-32-bit-conversion">CS Basics: Hex and 32 Bit Conversion</a>
      </li>
      <li>
        <a href="/posts/cs-basics-detour--nibbles-msb-and-lsb">CS Basics: Detour - Nibbles, MSB, and LSB</a>
      </li>
      <li>
        <a href="/posts/cs-basics-converting-between-different-bases">CS Basics: Converting Between Different Bases</a>
      </li>
    </ol>
  </div>
</div>

Up until now, I've been representing binary, quaternary, octal, and hexadecimal numbers a little incorrectly. I did this so we wouldn't be dealing with too many concepts at once. So, let's take a detour and look at the way binary numbers are traditionally represented.

Binary numbers are, at least in computer science, represented in groups of what's called a __nibble__. A nibble is half of a __byte__. Because a byte is 8 __bits__, a nibble is 4 bits.

Each digit of a binary number represents a bit, but we don't really represent binary numbers with a single digit. Instead, we represent all digits of a binary number in groups of 4 bits.

Since each bit can hold a maxinum of two values, a nibble can represent a range of 16 values from 0 - 15.

### A Table of Nibbles

<table>
  <thead>
    <tr>
      <td style="border-color: transparent"></td>
      <th colspan="4" scope="col">N<sub>2</sub> Nibble</th>
    </tr>
  </thead>
  <tr>
    <th scope="row">0</th>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <th scope="row">1</th>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
  </tr>
  <tr>
    <th scope="row">2</th>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <th scope="row">3</th>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <th scope="row">4</th>
    <td>0</td>
    <td>1</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <th scope="row">5</th>
    <td>0</td>
    <td>1</td>
    <td>0</td>
    <td>1</td>
  </tr>
  <tr>
    <th scope="row">6</th>
    <td>0</td>
    <td>1</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <th scope="row">7</th>
    <td>0</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <th scope="row">8</th>
    <td>1</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <th scope="row">9</th>
    <td>1</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
  </tr>
  <tr>
    <th scope="row">10</th>
    <td>1</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <th scope="row">11</th>
    <td>1</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <th scope="row">12</th>
    <td>1</td>
    <td>1</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <th scope="row">13</th>
    <td>1</td>
    <td>1</td>
    <td>0</td>
    <td>1</td>
  </tr>
  <tr>
    <th scope="row">14</th>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <th scope="row">15</th>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
  </tr>
</table>

So, now that we know binary numbers are represented in nibbles, we can talk about the Least Significant Bit, or __LSB__, and the Most Significant Bit, or __MSB__.

For binary integers, the LSB is the __bit position__ that gives the __units value__. If this were decimal, that would be the _ones_.

The MSB is the bit position that gives the __highest value__ for that binary integer.

| N<sub>10</sub> | MSB |   |   | LSB |
| -------------- | --- | - | - | --- |
|       10       |  1  | 0 | 1 |  0  |
|       11       |  1  | 0 | 1 |  1  |

The integers in the table above are, of course, only showing 4 bit numbers. The principle still stands for larger 1 byte numbers, though.

| N<sub>10</sub> | MSB |   |   |   |   |   |   | LSB |
| -------------- | --- | - | - | - | - | - | - | --- |
|       150      |  1  | 0 | 0 | 1 | 0 | 1 | 1 |  0  |

Usually the LSB is shown at the first position, in our case that's all the way to the right. The MSB is shown in the last position, or all the way on the left. There are some differences in the way some processors have handled this but we don't need to get into that for this post.

That's it for nibbles, LSB, and MSB! We can get into converting between different bases on the next post. 

After that, I'll write about using bitwise operators with our different numbering systems so we can take full advantage of our newfound knowledge.