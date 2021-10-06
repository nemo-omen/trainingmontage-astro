---
title: 'CS Basics: Converting Between Different Bases'
date: 2021-10-06 07:16:00
tags: ["CS Basics", "Binary", "Hexadecimal", "Nibbles"]
description: Now that we've covered the basic numeral systems, it's time to learn how to convert from one to another.
permalink: https://trainingmontage.dev/posts/cs-basics-converting-between-binary-and-hexadecimal/
layout: ../../../layouts/BlogLayout.astro
id: d41f2b79-3cbe-41a0-9fed-1b8dc6e78c3f
---

<div class="toc">
  <div class="flow">
    <p>
      This post is the 4th in a series about basic concepts in programming and Computer Science. You can find all the posts in the series below.
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

The previous three posts in this series covered the basic numeral systems you'll come across as a programmer. Two of the most common are binary and hexadecimal, so it's a good idea to be able to convert between the two.

We'll start by converting from binary to hex, then do it the other way around, and then we'll take a minute to talk about converting from some of the other systems we went over in earlier posts.

### Binary to Hex

Remember the last post when we talked about nibbles? Those come in really handy when converting from binary to hex. That's because one nibble can convert to a single hexadecimal digit.


<table>
<thead>
  <tr>
    <th colspan="5" scope="col">
      15<sub>10</sub>
    </th>
  </tr>
</thead>
  <tr>
    <td>15<sub>2</sub></td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>15<sub>16</sub></td>
    <td colspan="4">F</td>
  </tr>
</table>

Let's break this down.

What we have in the binary number `1 1 1 1` is one digit in the `1s` place, one digit in the `2s` place, one digit in the `4s` place, and one digit in the `8s` place.

When we move on to hex, we already know that each digit can represent 16 values from 0 - 15, so that's a pretty easy one. `F` in hex is 15.

Let's do a larger one.

<table>
  <colgroup>
    <col>
    <col span="4">
    <col span="4">
  </colgroup>
  <thead>
    <tr>
      <th colspan="9" scope="col">30<sub>10</sub></th>
    </tr>
  </thead>
  <tr>
    <td>30<sub>2</sub></td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>0</td>
  </tr>
  <tr>
    <td>30<sub>16</sub></td>
    <td colspan="4">1</td>
    <td colspan="4">E</td>
  </tr>
</table>

Okay, this one's only a little different.

First, we already know to approach these conversions by starting from the largest possible digit in whatever numeral system we're converting to and moving downward from there, but we can do it just by looking at the values present in each nibble.

<table>
  <tr>
    <td>30<sub>2</sub></td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td class="table-highlight">1</td>
      <td class="table-highlight">1</td>
      <td class="table-highlight">1</td>
      <td class="table-highlight">0</td>
  </tr>
  <tr>
    <td>30<sub>16</sub></td>
    <td colspan="4">1</td>
    <td colspan="4">E</td>
  </tr>
</table>

We know that `1 1 1 0` is equal to 14. What's 14 in hex? `E`.

<table>
  <tr>
    <td>30<sub>2</sub></td>
      <td class="table-highlight">0</td>
      <td class="table-highlight">0</td>
      <td class="table-highlight">0</td>
      <td class="table-highlight">1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>0</td>
  </tr>
  <tr>
    <td>30<sub>16</sub></td>
    <td colspan="4">1</td>
    <td colspan="4">E</td>
  </tr>
</table>

Now, when we look at the second nibble, we know that `0 0 0 1` is equal to 1. What's 1 in hex? Well, it's `1`.

So, we have `1E`.

Converting from binary to hex is as simple as breaking your binary number into nibbles of four digits each and substituting the hex value for each of those groups.

We don't have to do anything special to convert in the other direction. Just look at the hex digit and convert it into a four-digit binary representation of that number.

Let's break down a hex number into binary. Take the hex number `2 4`. I know that one doesn't have any letter representations, so it shouldn't be too difficult.

Starting with the LSB (the digit on the right), we have 4<sub>16</sub>. What's `4` in binary? It's `0 1 0 0`. That's our smallest nibble.

Now, when we move up it gets just a little more complicated because each successively larger digit in hex is a power of 16. But, we know that we have 2<sub>16</sub> in that spot. So what we're dealing with is two 16s — otherwise known as 32. 

Because we're working on the second nibble in the binary number, we know that the first digit in that nibble represents 16, the second one represents 32. So our binary value for the second digit is `0 0 1 0`.

Our full binary number is `0 0 1 0 0 1 0 0`.

### Simple Base Conversion

The above conversion method works for other bases as well. All we have to do is think about how many bits make up a digit of the number we're converting to or from binary.

__Binary__: 1 digit = 1 bit

__Quaternary__: 1 digit = 2 bits

__Octal__: 1 digit = 3 bits

__Hexdecimal__: 1 digit = 4 bits

__32-bit__: 1 digit = 5 bits

Let's practice with a number.

The number `237` in binary form is `11101101`.

__Quaternary____

Group binary into sets of two digits

Bin: `11`, `10`, `11`, `01`

Decimal: `3`, `2`, `3`, `1`

Quad: `3`, `2`, `3`, `1`

__Octal__

Bin: `011`, `101`, `101`

Decimal: `3`, `5`, `5`

Octal: `3`, `5`, `5`

__Hexadecimal__

Bin: `1110`, `1101`

Decimal: `14`, `13`

Hex: `E`, `D`

__32-bit__

Bin: `00111`, `01101`

Decimal: `7`, `13`

Hex: `7`, `D`

That's it for binary/hex conversions! Tune in soon for bitwise operators and bit shifting!