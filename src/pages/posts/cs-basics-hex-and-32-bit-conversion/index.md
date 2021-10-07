---
title: 'CS Basics: Hex and 32 bit Conversion'
date: 2021-10-04 15:06:01
tags: ["CS Basics", "Hexadecimal", "32 Bit Numbers", "Number Base Conversion"]
description: Once you have a handle on basic numeral systems like binary, it's time to move on to more complicated systems. We'll cover hexadecimal and 32 bit numbers in the second CS Basics post.
slug: cs-basics-converting-between-binary-and-hexadecimal
permalink: https://trainingmontage.dev/posts/cs-basics-hex-and-32-bit-conversion/
layout: ../../../layouts/BlogLayout.astro
id: 96bd0a47-d6b1-4311-b8c0-c51706489ed7
---

<div class="toc">
  <div class="flow">
    <p>
      This post is the 2nd in a series about basic concepts in programming and Computer Science. You can find all the posts in the series below.
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

In the [last post](/posts/cs-basics-binary-conversion) in this series, we covered converting binary, quaternary, and octal numbers. Now we'll go through hexadecimal and 32 bit numbers. If you haven't read the first post, go ahead and read it now then come back.

Converting hex and 32 bit numbers is pretty close to the same as converting smaller bases, but there's one important difference — we have to be able to account for numbers larger than 9.

We already know that the decimal system, or regular integers, can go from 0 - 9 in each digit. The trouble with something like hexadecimal, or Base16, numbers (and higher) is that there's no way to represent something larger than 9 with a single-digit integer.

So what do we do?

Well, we use letter characters.

For hex and 32-bit numbers 0 - 9 are the same as decimal. When the digit gets larger than 9 we use letters.

__Hex__: 1 - 9, A - F

__32 Bit__: 1 - 9, A - V

That's it!

### Hexadecimal (Base16)

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

Two digits can represent 256 unique numbers. If you've used hex colors, you're using hexadecimal numbers with six digits. That's <span class="highlight">256<sup>3</sup></span>, or 16,777,216, color values.

Honestly, this table could go on forever, so I'm going to whip up a hex multiplication table with client-side JavaScript and you can use that for reference if you need to.

JavaScript provides some nice convenience methods for converting a binary number to a different base representation. To get the values for the table below, all I had to do was multiply two values and then write `cellValue = product.toString(16)`, which will convert an integer to a string that represents the given base's value.

<table id="hex-table">

</table>

<script>
  const vals = [' ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  const nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

  const table = document.getElementById('hex-table');
  let head = table.createTHead();
  let row = head.insertRow();
  for(let key of vals) {
    let th = document.createElement('th');
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }

  for(let i = 0; i < vals.length - 1; i++) {
    let row = table.insertRow();
    let cell = row.insertCell();
    cell.className = 'table-head-cell';
    let text = document.createTextNode(vals[i + 1]);
    cell.appendChild(text);
    for(let j = 0; j < nums.length - 1; j++) {
      let tcell = row.insertCell();
      const numValue = nums[i] * nums[j];
      const conVal = numValue.toString(16).toUpperCase();
      let ttext = document.createTextNode(conVal);
      tcell.appendChild(ttext);
      // console.log(nums[i] * nums[j]);
    }
  }
</script>

So, that leaves 32-bit conversions. Those behave exactly the same as hexadecimal conversions, but since we're dealing with numbers larger than 15, we need to include additional substitution characters.

Two 32-bit digits can account for 1,024 decimal numbers.

Here's a 32-bit table (hopefully the table works for smaller screens, because it's going to be pretty big).

<table id="table-thirtytwo">

</table>


<script>
  const vals32 = [' ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V'];
  const nums32 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];

  const table32 = document.getElementById('table-thirtytwo');
  let head32 = table32.createTHead();
  let row32 = head32.insertRow();
  for(let key of vals32) {
    let th32 = document.createElement('th');
    let text32 = document.createTextNode(key);
    th32.appendChild(text32);
    row32.appendChild(th32);
  }

  for(let i = 0; i < vals32.length - 1; i++) {
    let row32 = table32.insertRow();
    let cell32 = row32.insertCell();
    cell32.className = 'table-head-cell';
    let text32 = document.createTextNode(vals32[i + 1]);
    cell32.appendChild(text32);
    for(let j = 0; j < nums32.length - 1; j++) {
      let tcell32 = row32.insertCell();
      const numValue32 = nums32[i] * nums32[j];
      const conVal32 = numValue32.toString(32).toUpperCase();
      let ttext32 = document.createTextNode(conVal32);
      tcell32.appendChild(ttext32);
      // console.log(nums[i] * nums[j]);
    }
  }
</script>

Next time we'll go over converting from one non-decimal base, like binary, to another base, like hex.