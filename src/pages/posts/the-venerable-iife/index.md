---
title: 'The Venerable IIFE'
date: 2022-02-04 22:28:59
tags: ["JavaScript", "Functional Basics", "Functions"]
description: JavaScript functions are really powerful. Let's take a look at a well-loved pattern that shows off what they can do.
slug: the-venerable-iife
permalink: https://trainingmontage.dev/posts/the-venerable-iife/
layout: ../../../layouts/BlogLayout.astro
id: d05a99fc-ea8d-4ac8-acd1-3a12e478d70f
draft: true
setup:  |
  import TOC from '../../../components/TOC.astro';
  import SortList from '../../../components/client/SortList.svelte';
  permalinks = ['https://trainingmontage.dev/posts/the-venerable-iife/']
  titles = ['The Venerable IIFE']
  description = "This is the first post in a series about JavaScript functions. Check out all the posts below."
---
JavaScript functions are really special. For a language that was created as quickly as it was, the way JavaScript handles functions is incredibly powerful.

One of the patterns that takes advantage of this power is the __Immediately Invoked Function Expression__, or __IIFE__. You may have seen one in the wild. 

Here's what they look like:

```js
(function() {
  console.log("I'm a little iffy!");
})();
```

Pretty weird, right? Why in all of grim creation do they look like that? 

We'll get to that in a second. First, we need to go over the different ways you can create a function.

### The Function Statement

Otherwise known as the __function definition__, the __function statement__ is probably the most common way to create a function in JavaScript. It consists of the `function` keyword, the function's name, its parameters, and the function body.

A function statement looks like this:

```js
function plainOldFunction(name) {
  console.log(`Hello, ${name}`);
}
```

Pretty simple, and if you're coming to JS from a language like C++ or Java you'll immediately see similarities between this and what you already know.

### The Function Declaration

The second common pattern for function creation in JavaScript is the __function declaration__. This is essentially the same thing as __declaring__ a variable, and assigning a function to that variable.

Like so:

```js
const declaredFunction = function (name) {
  console.log(`Hello again, ${name}!`);
}
```

Function statements and function declarations can (sort of) be used interchangeably, though there may be some differences in the way JavaScript handles their visibility to other parts of your code (look up JavaScript hoisting to learn more... or bug me to look it up for you and provide links, lazybones).

### The Function Literal

See the second part of the function declaration above? the part that's all `function (name) {...`? That part is a function literal. It's really the heart and soul of a function and it means we can create functions on the fly, even as parameters of other functions — or even return values of other functions.

Here, look:

```js
const literalParameterFunction = function(name, function() {
  function(name);
});

literalParameterFunction('Jeff')