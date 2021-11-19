---
title: 'Sorts: Bubble Sort'
date: 2021-11-13 09:40:44
tags: ["CS Basics", "Sorts", "Algorithms", "Bubble Sort"]
description: In the first of a series about sorting algorithms, we explore the humble bubble sort.
slug: sorts-bubble-sort
permalink: https://trainingmontage.dev/posts/sorts-bubble-sort/
layout: ../../../layouts/BlogLayout.astro
id: 0896e28f-0010-473b-b679-ded5023da3a2
setup:  |
  import TOC from '../../../components/TOC.astro';
  import BubbleSort from '../../../components/posts/sorts-bubble-sort/BubbleSort.svelte';
  import BubbleSort2 from '../../../components/posts/sorts-bubble-sort/BubbleSort2.svelte';
  import BubbleSort3 from '../../../components/posts/sorts-bubble-sort/BubbleSort3.svelte';
  permalinks = ['https://trainingmontage.dev/posts/sorts-bubble-sort/']
  titles = ['Sorts: Bubble Sort']
---

<TOC description="This is the first in a series about sorting algorithms. You can find all the posts in the series below." permalinks={permalinks} titles={titles} />

One of the things developers have to do is sort things. Programming languages have made sorting trivial, for the most part. When something needs sorting, we just call the appropriate sorting method supplied by the language and don't need to think twice about it.

But all those sorting methods come from somewhere. Really good programmers have engineered your sorting method so it performs optimally no matter how many elements are thrown at it. Learning how to approach the problem of sorting is a foundational skill in programming and computer science, so we're going to tackle 7 basic algorithms and learn how they stack up against each other.

## Bubble Sort
Bubble sort is the probably the simplest sorting algorithm to implement. It works by looping through an array repeatedly and swapping adjacent elements if they're out of order.

Here's the code for a very basic bubble sort implementation:

```js
function bubbleSort(list) {
  for (let i = 0; i < list.length; ++i) {
    for (let j = 0; j < list.length - 1; j++) {
      if (list[j] < list[j + 1]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  return list;
}
```

Here's a visualization of what bubble sort looks like in action (kind of).

<BubbleSort client:visible/>

There are a few things to note about the example above. First, you may have noticed that the loops continued once for each element in the array, even after the array was sorted. 

That's because this is a _really bad_ implementation of bubble sort.

There are some ways to lessen the number of inner loops. Let's look at them. 

### Making Bubble Sort (a little) Faster

The first thing we can do to make bubble sort a bit more efficient is to reduce the number of times the inner loop runs. If you watch the animation above again, you'll see a neat feature of bubble sort — the largest elements naturally move to the end of the array on each pass of the outer loop. One might even say those elements _bubble_ to the end.

This means we can make sure we're running the inner loop one less time with each pass of the outer loop.

```js
function bubbleSort(list) {
  let swapped = false;
  for (let i = 0; i < list.length - 1; ++i) {
    swapped = false;
    for (let j = 0; j < list.length - i; j++) {
      if (list[j] < list[j + 1]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
        swapped = true;
      }

      if(!swapped) {
        return list;
      }
    }
  }
  return list;
}
```

We've made two changes to the code. First, instead of iterating the outer loop while `i < list.length`, we're running it while `i < list.length - 1`. 

Then, in the inner loop, we switch from running while `j < list.length - 1` to running while `j < list.length - i`. This will allow us to run the loop one less time for each pass of the outer loop because `i` is increasing by one each time it iterates. By subtracting that value from the loop condition in the inner loop, we run once less.

Let's see how that changed things for our sort.

<BubbleSort2 client:visible />

Okay, that's a little better. But it's still running after all of the elements in the array have been sorted. We don't want that.

What we need is some way to check whether the inner loop has completed without swapping any numbers.


<BubbleSort3 client:visible />

That's because we're running nested loops, which are usually bad news for an algorithm's efficiency.


### ___O___ (_n_<sup>2</sup>)

