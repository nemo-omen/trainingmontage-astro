---
title: 'Basics: Binary Conversion'
date: 2021-10-02 11:25:05
tags: ["CS Basics", "Binary", "Number Base Conversion"]
description: Understanding how to convert numbers to and from binary, or any numeric base, is a fundamental concept in programming and computer science. Let's get an understanding of those fundamentals!
layout: ../../../layouts/BlogLayout.astro
id: 1f133fcc-5a34-4cef-bd05-736a7bf34295
---

Binary conversion was one of those things I glossed over when I first started learning to program.

Actually, that's not true, it's something I glossed over until it got me into trouble. I know I shouldn't have but the subject, like a lot of math-based subjects, just made my eyes glaze over as soon as someone started talking about it or teaching it. I just figured I would learn it properly when I really needed to. 

It turns out "when I really needed to" passed some time before my second exam in Data Structures and Algorithms class yesterday.

The test itself was supposed to cover recursion and function templates in C++. Imagine my surprise and horror when 10 of the 40 questions asked us to convert numbers from decimal to different bases.

You can only imagine my horror and my frustration with myself. I was completely unprepared to even tackle the most basic of the questions and failed the exam miserably.

So, I'm going to go through these base conversions and learn them properly. 

You, dear coder, are invited to come along and learn from my mistakes.

## How we write numbers

To understand how to convert from our regular, decimal-based number system to binary, we first need to look at how our number system works.

Take the number `555` as an example. We think of that as a three-digit number, each digit being a 5. That's actually not the best way to think about `555`.

Remember grade school? Remember how our teachers walked us through those digit places back in the day? Ones, Tens, Hundreds, etc? Turns out that's all pretty important when you try to understand number systems.

What you have with the number 555 is actually `500 + 50 + 5` — actually, that's not true either, but I want to start by breaking the numbers we take for granted into their smaller components, so just stick with me for a second.

We're used to [Base 10]() numbers. That means each digit in `555` represents an exponent of `10`. We're used to not even thinking about this but each digit in our number system represents a slot that's multiplied by an exponent of 10.

Here, have a table:

| 500 | 5 | 5 | 5 |
| ---- | ---- | ---- | ---- |
| or | 500 | 50 | 5 |
| or | 5 * 100 | 5 * 10 | 5 * 1 |
| or | 5 * 10<sup>2</sup> | 5 * 10<sup>1</sup> | 5 * 10<sup>0</sup> |

Let's try `679`:

| 679 | 6 | 7 | 9 |
| --- | --- | --- | --- |
| or | 6 | 7 | 9 |