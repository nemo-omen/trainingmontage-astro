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
  permalinks = ['https://trainingmontage.dev/posts/sorts-bubble-sort/']
  titles = ['Sorts: Bubble Sort']
---

<TOC description="This is the first in a series about sorting algorithms. You can find all the posts in the series below." permalinks={permalinks} titles={titles} />

One of the things developers have to do is sort things. Programming languages have made sorting trivial, for the most part. When something needs sorting, we just call the appropriate sorting method supplied by the language and don't need to think twice about it.

But all those sorting methods come from somewhere. Really good programmers have engineered your sorting method so it performs optimally no matter how many elements are being sorted.