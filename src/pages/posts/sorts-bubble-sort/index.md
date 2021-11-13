---
title: 'Sorts: Bubble Sort'
date: 2021-11-11 21:54:31
tags: ["CS Basics", "Sorts", "Algorithms", "Bubble Sort"]
description: In the first of a series about sorting algorithms, we explore the humble bubble sort.
slug: sorts-bubble-sort
permalink: https://trainingmontage.dev/posts/sorts-bubble-sort/
layout: ../../../layouts/BlogLayout.astro
id: 0896e28f-0010-473b-b679-ded5023da3a2
setup:  |
  import TOC from '../../../components/TOC.astro';
  import SortList from '../../../components/client/SortList.svelte';
  permalinks = ['https://trainingmontage.dev/posts/sorts-bubble-sort/']
  titles = ['Sorts: Bubble Sort']
---

<TOC description="This is the first in a series about sorting algorithms. You can find all the posts in the series below." permalinks={permalinks} titles={titles} />

One of the things developers have to do is sort things. Programming languages have made sorting trivial, for the most part. When something needs sorting, we just call the appropriate sorting method supplied by the language and don't need to think twice about it.

But all those sorting methods come from somewhere. Really good programmers have engineered your sorting method so it performs optimally no matter how many elements are thrown at it. Learning how to approach the problem of sorting is a foundational skill in programming and computer science, so we're going to tackle 7 basic algorithms and learn how they stack up against each other.

## Bubble Sort
Bubble sort is the probably the simplest sorting algorithm to implement. It works by looping through an array repeatedly and swapping adjacent elements if they're out of order.

Here's the code for a very basic Bubble Sort implementation:

```js
function bubbleSort(array) {
  for (let i = 0; i < list.length; ++i) {
    for (let j = 0; j < list.length - 1; j++) {
      if (list[j] < list[j + 1]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
}
```

Here's a simple visualization of what Bubble Sort looks like in action.

<SortList client:visible/>

There are a few things to note about the example above. First, you may have noticed that the loops continued once for each 