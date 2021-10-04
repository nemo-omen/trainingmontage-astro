---
title: 'CS Basics: Binary Conversion'
date: 2021-10-02 11:25:05
tags: ["CS Basics", "Binary", "Number Base Conversion"]
description: Understanding how to convert numbers to and from binary, or any numeric base, is a fundamental concept in programming and computer science. Let's get a grip on those fundamentals!
permalink: https://trainingmontage.dev/posts/cs-basics-binary-conversion/
layout: ../../../layouts/BlogLayout.astro
id: 1f133fcc-5a34-4cef-bd05-736a7bf34295
---

<div class="toc">
  <div class="flow">
    <p>
      This post is the 1st in a series about basic concepts in programming and Computer Science. You can find all the posts in the series below.
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
        <a href="/posts/cs-basics-converting-between-binary-and-hexadecimal">CS Basics: Converting Between Binary and Hexadecimal</a>
      </li>
    </ol>
  </div>
</div>

Binary conversion was one of those things I glossed over when I first started learning to program.

Actually, that's not true, it's something I glossed over until it got me into trouble. I know I shouldn't have but the subject, like a lot of math-based subjects, just made my eyes glaze over as soon as someone started talking about it or teaching it. I just figured I would learn it properly when I really needed to. 

It turns out "when I really needed to" passed some time before my second exam in Data Structures and Algorithms class yesterday.

The test itself was supposed to cover recursion and function templates in C++. Imagine my surprise and horror when 10 of the 40 questions asked us to convert numbers from decimal to different bases.

I was completely unprepared to even tackle the most basic of the questions and failed the exam miserably.

So, I'm going to go through these base conversions and learn them properly. 

You, dear coder, are invited to come along and learn from my mistakes.

## How we write numbers

To understand how to convert from our regular, decimal-based number system to binary, we first need to look at how our number system works.

Take the number `555` as an example. We think of that as a three-digit number, each digit being a 5. That's actually not the best way to think about `555`.

Remember grade school? Remember how our teachers walked us through those digit places back in the day? Ones, Tens, Hundreds, etc? Turns out that's all pretty important when you try to understand number systems.

What you have with the number `555` is <span class="highlight">555 = 500 + 50 + 5</span>.

We could also say <span class="highlight">555 = (5 * 100) + (5 * 10) + (5 * 1)</span>.

Or, if we want to get really explicit, we could say <span class="highlight">555 = (5 * 10<sup>2</sup>) + (5 * 10<sup>1</sup>) + (5 * 10<sup>0</sup>)</span>.

We're used to not even thinking about this, but each digit in our number system represents a slot that's multiplied by an exponent of 10.

Here, have a table that illustrates the point:

### 555

| 500 | 50 | 5 |
| ---- | ---- | ---- |
| 5 * 100 | 5 * 10 | 5 * 1 |
| 5 * 10<sup>2</sup> | 5 * 10<sup>1</sup> | 5 * 10<sup>0</sup> |

Let's try another.

### 679
| 600 | 70 | 9 |
| --- | --- | --- |
| 6 * 100 | 7 * 10 | 9 * 1 |
| 6 * 10<sup>2</sup> | 7 * 10<sup>1</sup> | 9 * 10<sup>0</sup> |

Do you see what's happening here? Each of the slots (digits) in our number systems is a power of 10, with the lowest power all the way to the right. The power of 10 we multiply by increases by one with each slot we move to from there.

Another way to think about breaking down these numbers into their constituent parts is by subtracting the largest number that fits into the largest slot, then moving on to the next largest, and so on, until you're at a <span class="highlight">10<sup>0</sup></span> number.

<span class="highlight">679 - 600 = 79</span>

<span class="highlight">79 - 70 = 9</span>

<span class="highlight">9</span>

That's essentially the logic every other numeral system we'll be covering works. With binary, each slot is a power of 2. Quaternary? That's a power of 4.

Let's start with binary and work our way up.

## Binary (Base-2)

We know each slot in binary represents a power of 2. Just like with base-10, each of those slots begins with `0`. Because our base is 2, the only other available number for a slot is `1`. In each slot, a `1` means that number is present. A `0` means the number is not present.

Let's look at what that means in a table with no specific number to write.

| 2<sup>4</sup> | 2<sup>3</sup> | 2<sup>2</sup> | 2<sup>1</sup> | 2<sup>0</sup> |
| ------------- | ------------- | ------------- | ------------- | ------------- |
|      16       |        8      |       4       |       2       |       1       |

Okay, now let's break down a couple of simple numbers with tables to see what binary is all about.

### 0<sub>2</sub>

| 16 | 8 | 4 | 2 | 1 |
| - | - | - | - | - |
|  |  |  |  | 0 |

Surprise! `0` is `0`.

__Decimal: 0__

__Binary: 0__

### 1<sub>2</sub>

| 16 | 8 | 4 | 2 | 1 |
| - | - | - | - | - |
|  |  |  |  | 1 |

Also probably not much of a surprise.

__Decimal: 1__

__Binary: 1__

### 2<sub>2</sub>

| 16 | 8 | 4 | 2 | 1 |
| - | - | - | - | - |
|  |  |  | 1 | 0 |

Okay, now we start seeing how this really works. The decimal number `2` means there's one number present in the second slot, and zero numbers present in the first slot.

__Decimal: 2__

__Binary: 10__

### 3<sub>2</sub>
| 16 | 8 | 4 | 2 | 1 |
| - | - | - | - | - |
|  |  |  | 1 | 1 |

Three is `2 + 1`, so there's one number present in the first slot and one number present in the second slot.

__Decimal: 3__

__Binary: 11__

### 4<sub>2</sub>
| 16 | 8 | 4 | 2 | 1 |
| - | - | - | - | - |
|   |   | 1 | 0 | 0 |

__Decimal: 4__

__Binary: 100__

### 5<sub>2</sub>

| 16 | 8 | 4 | 2 | 1 |
| - | - | - | - | - |
|   |   | 1 | 0 | 1 |

__Decimal: 5__

__Binary: 101__

### 8<sub>2</sub>

| 16 | 8 | 4 | 2 | 1 |
| - | - | - | - | - |
|   | 1 | 0 | 0 | 0 |

__Decimal: 8__

__Binary: 1000__

Hopefully, you see how this is progressing. If not, go back to where I mentioned subtracting the largest power multiple you can from your base-10 number and moving downward from there. Let's try a slightly larger number and work through it so it's plain to see how it works.

### 100<sub>2</sub>

The largest number that's a power of 2 that can be subtracted from `100` is `64`, so we start there.

`100 - 64 = 36`

Now we move to `36`. The largest number that's a square of 2 that can be subtracted from `36` is `32`

`36 - 32 = 4`

And that lands us in a good spot because `4` is <span class="highlight">2<sup>2</sup></span>.

| 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| - | - | - | - | - | - | - |
| 1 | 1 | 0 | 0 | 1 | 0 | 0 |

__Decimal: 100__

__Binary: 1100100__

Pretty simple, right? Here's a basic binary multiplication table (I skip a lot of in-between values, but this should be enough to help you understand what's happening). 

After that, we'll move on to some other numeral systems and apply what we know.

|  | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| - | - | - | - | - | - | - | - |
| 0 |   |   |   |   |   |   | 0 |
| 1 |   |   |   |   |   |   | 1 |
| 2 |   |   |   |   |   | 1 | 0 |
| 3 |   |   |   |   |   | 1 | 1 |
| 4 |   |   |   |   | 1 | 0 | 0 |
| 8 |   |   |   | 1 | 0 | 0 | 0 |
| 16 |  |   | 1 | 0 | 0 | 0 | 0 |
| 32 |  | 1 | 0 | 0 | 0 | 0 | 0 |
| 64 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |


## Quaternary (Base 4)

We can have 4 values in each slot (0 - 3).

|  | 256 | 64 | 16 | 4 | 1 |
| - | - | - | - | - | - |
| 0 |  |  |  |  | 0 |
| 1 |  |  |  |  | 1 |
| 2 |  |  |  |  | 2 |
| 3 |  |  |  |  | 3 |
| 4 |  |  |  | 1 | 0 |
| 8 |  |  |  | 2 | 0 |
| 12 |  |  |  | 3 | 0 |
| 16 |  |  | 1 | 0 | 0 |
| 32 |  |  | 2 | 0 | 0 |
| 48 |  |  | 3 | 0 | 0 |
| 64 |  | 1 | 0 | 0 | 0 |
| 128 |  | 2 | 0 | 0 | 0 |
| 192 |  | 3 | 0 | 0 | 0 |
| 256 | 1 | 0 | 0 | 0 | 0 |
| 512 | 2 | 0 | 0 | 0 | 0 |
| 768 | 3 | 0 | 0 | 0 | 0 |

### Octal(Base 8)
Now each slot can have 8 values (0 - 7)

|  | 4096 | 512 | 64 | 8 | 1 |
| - | - | - | - | - | - |
| 0 |   |   |   |   | 0 |
| 1 |   |   |   |   | 1 |
| 8 |   |   |   | 1 | 0 |
| 64 |   |   |  1 | 0 | 0 |
| 512 |   | 1  |  0 | 0 | 0 |
| 4096 | 1  | 0  |  0 | 0 | 0 |

Okay, that's it for the basic number conversions. Next time we'll cover hexadecimal and 32 bit conversions.