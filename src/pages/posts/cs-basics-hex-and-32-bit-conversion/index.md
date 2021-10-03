---
title: 'CS Basics: Hex and 32 bit Conversion'
date: 2021-10-02 20:29:01
tags: ["CS Basics", "Hexadecimal", "32 Bit Numbers", "Number Base Conversion"]
description: Once you have a handle on basic numeral systems like binary, it's time to move on to more complicated systems. We'll cover hexadecimal and 32 bit numbers in the second CS Basics post.
layout: ../../../layouts/BlogLayout.astro
id: 96bd0a47-d6b1-4311-b8c0-c51706489ed7
---

In the [last post](/posts/cs-basics-binary-conversion) in this series, we covered converting binary, quaternary, and octal numbers. Now we'll go through hexadecimal and 32 bit numbers. If you haven't read the first post, go ahead and read it now then come back.

Converting hex and 32 bit numbers is pretty close to the same as converting smaller bases, but there's one important difference — we have to be able to account for numbers larger than 9.

We already know that the decimal system, or regular integers, can go from 0 - 9 in each digit. The trouble with something like hexadecimal, or base-16, numbers (and higher) is that there's no way to represent something larger than 9 with a single-digit integer.

So what do we do?

Well, we use letter characters.

For hex and 32-bit numbers 0 - 9 are the same as decimal. When the digit gets larger than 9 we use letters.

__Hex__: 1 - 9, A - F

__32 Bit__: 1 - 9, A - V

That's it!

### Hexadecimal (Base-16)

|   | 65536 | 4096 | 256 | 16 | 1 |
| - | - | - | - | - | - |
| 0 |   |   |   |   | 0 |
| 1 |   |   |   |   | 1 |
| 10 |   |   |   |  | A |
| 11 |   |   |   |  | B |
| 12 |   |   |   |  | C |
| 13 |   |   |   |  | D |
| 14 |   |   |   |  | E |
| 15 |   |   |   |  | F |
| 16 |   |   |   | 1 | 0 |
| 17 |   |   |   | 1 | 1 |
| 26 |   |   |   | 1 | A |

As you can see, each digit in hexadecimal can represent 16 unique numbers.

Two digits can represent 256 unique numbers.

Honestly, this table could go on forever, so I'm going to whip up a hex multiplication table with client-side JavaScript and you can use that for reference if you need to.

<table id="hex-table">

</table>

<script>
  const table = document.getElementById('hex-table');
  let head = table.createTHead();
  for(let i = 0; i < 16; i++) {

  }
</script>