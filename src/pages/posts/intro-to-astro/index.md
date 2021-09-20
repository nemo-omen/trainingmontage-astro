---
title: Intro to Astro
date: 2021-09-19 08:34:48
tags: ["Astro"]
description: Astro is a new static site builder that's so powerful and easy to use you're going to want to use it for every site you make. Let's take a look at what makes it so great.
layout: ../../../layouts/BlogLayout.astro
id: ff9b0d5e-3b7a-4484-8b64-eac12710fea5
---

Astro is a component-based static site builder that not only promises to ship no JavaScript to the browser by default, but also allows you to use components from [React, Svelte, Vue, and Preact](https://docs.astro.build/reference/renderer-reference) out of the box.

By default, Astro will render these components to HTML at build time, but you can also [partially hydrate](https://docs.astro.build/core-concepts/component-hydration) those components if you need some client-side JavaScript. The good Astro contributors even made it incredibly easy to control when the JavaScript is loaded with [directives](https://docs.astro.build/core-concepts/component-hydration#hydrate-interactive-components). You can even choose to hydrate your component with media queries.

Let's build a simple blog and check out what makes Astro so powerful.

<div class="note">

The full code for this tutorial is at [this repository](https://github.com/nemo-omen/astro-example-blog).

</div>

<div class="note">

This tutorial makes use of Linux/Mac terminal commands. Don't know how to use that? [Check this out.](https://www.learnenough.com/command-line-tutorial)

</div>

<div class="warn">

If you're not familiar with the basics of using [Node](https://nodejs.org/) and [NPM](https://npmjs.org), you might want to start with something less involved than this tutorial. You can learn to install Node and NPM [here](https://www.youtube.com/watch?v=2V1UUhBJ62Y), but I do recommend making sure you have the fundamentals in place before taking on frameworks or static site generators. [FreeCodeCamp is a good place to start](https://freecodecamp.org).

</div>


---

### Installation

First things first, create an empty directory for your project. You can name it whatever you want. I named the folder `astro-example-blog`.

```bash
mkdir astro-example-blog
```

Then, navigate into the directory.

```bash
cd astro-example-blog
```

Now, all we need to do is run the handy CLI command provided by the Astro team.

```bash
pnpm init astro
```

<div class="note">

I use [pnpm](https://pnpm.io/) because I value my disk space. Regular NPM will work just fine for any of the commands in this tutorial. I've never used Yarn. It's probably fine.

</div>

The CLI will present you with a few choices about what kind of template you want to use for your Astro site. Just go with `Starter Kit (Generic)`.

```bash
# output of running pnpm init astro
dev/projects/astro-example-blog 
➜ pnpm init astro
Need to install the following packages:
  create-astro
Ok to proceed? (y) y

Welcome to Astro! (create-astro v0.3.5)
If you encounter a problem, visit https://github.com/snowpackjs/astro/issues to search or file a new issue.

> Prepare for liftoff.
> Gathering mission details...
✔ Which app template would you like to use? › Starter Kit (Generic)
> Copying project files...
✔ Done!

Next steps:
  1: npm install (or pnpm install, yarn, etc)
  2: git init && git add -A && git commit -m "Initial commit" (optional step)
  3: npm start (or pnpm, yarn, etc)

To close the dev server, hit Ctrl-C

Stuck? Visit us at https://astro.build/chat

npm notice 
npm notice New minor version of npm available! 7.15.1 -> 7.24.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v7.24.0
npm notice Run npm install -g npm@7.24.0 to update!
npm notice 

dev/projects/astro-example-blog via  v16.3.0 took 14s 
➜ 
```

Once the CLI is finished copying files, you need to install them.

```bash
pnpm install
```

And that's it for installation! Let's take a look at the project files. Open your project directory in your favorite editor. I use VS Code.

```bash
code .
```

Your file structure should look like this:

```bash
├── src/
│   ├── components/
│   └── pages/
│       └── index.astro
├── public/
│     └── style/
│        ├── home.css
│        └── global.css
└── package.json
```

Now you can start up the development server with:

```bash
pnpm run dev
```

Open your browser and point it to <a href="http://localhost:3000">http://localhost:3000</a> to see your brand new Astro app!

<figure>

![A freshly installed Astro app running in the browser](/post-assets/ff9b0d5e-3b7a-4484-8b64-eac12710fea5/NewAstroInstall.png)

<figcaption>Your newly installed Astro site in all its glory.</figcaption>
</figure>

### Meet your first Astro component

Let's look at the files one more time before we start adding things.

The `src` directory is where all of your project's source files will be. Right now, `src` has two directories inside — `components`, and `pages`. 

The `components` directory is where, (this will blow your mind,) your components go. Things like sidebars, headers, cards, etc. Go ahead and open up `src/components/Tour.astro` and take a look.

```astro
---
// excerpt of Tour.astro
import { Markdown } from 'astro/components';
---
<article>
    <div class="banner">
        <p><strong>🧑‍🚀 Seasoned astronaut?</strong> Delete this file. Have fun!</p>
    </div>

    <section>
        <Markdown>
          <!-- blah blah blah -->
        <Markdown>
    </section>
</article>

<style>
  // Look! A bunch of css!
</style>
```
You'll notice this file has three sections. The first section is surrounded by `---`, just like YAML frontmatter blocks. This is called the __Frontmatter Script__. It's where you can execute any JavaScript that will be run during build time. This is also the place where you import other components. You can see in `Tour.astro` that the `Markdown` component is imported. This is a built-in Astro component, a subject we'll cover later. 

<div class="note">

It's important to remember that any JS run in the Frontmatter Script will run at build time only.

</div>

Next, we have the markup section. This is where any markup for your component goes, including any imported components. In `Tour.astro` the `Markdown` component is included as a tag that surrounds any markdown the author wants rendered as HTML when the component is built. Any properties declared in the frontmatter can be accessed here by using JSX-style syntax. For example: a variable or property named `cupsOfCoffee` can be accessed in the markup by placing it in `{}` curly braces.

```astro
---
let cupsOfCoffee = 3;
---
<p class={cupsOfCoffee  < 2 ? 'normal' : 'bold'}>I've had {cupsOfCoffee} cups of coffee!!</p>

<style>
  .normal {
    font-weight: 500;
  }
  .bold {
    font-weight: 700;
  }
</style>
```


Finally, we have the style section. This is the css that you want to be applied to the markup in your component. Astro, like Svelte, scopes any styles written inside a component by default. Astro suports Sass by default as well, all you have to do to use it in a component is write `<style lang="scss">` or `<style lang="sass">` and you're good to go.

There's a lot more that you can do in an Astro component. If you want the full rundown, head over to the [Astro docs](https://docs.astro.build/core-concepts/astro-components) and study up!

__We're almost done with looking at the files. We'll get to building soon, I promise__

Now, open up `src/pages/index.astro`. You'll see that this component is a little different than `Tour.astro`. Sure, it has the Frontmatter Script and the markup, so you know it's a regular component, but it also has the entire html markup you would expect to see in a vanilla `html` file. The `<style>` element is even included in the `<head>`, plus, the page pulls in some `css` files which you'll find in `public/styles`.

The `public` directory is where all of the files and assets you don't want the compiler to mess with go. When your site's being served, this directory will be resolved as the top-level directory — `/`. You can see `public/assets/logo.svg` being accessed as `/assets/logo.svg` on line 40 of `src/pages/index.astro`.

Don't get too hung up on this page for now, though, we're about to make our own.

### Let's finally build something!

Actually, first we need to destroy. 

Delete `components/Tour.astro`.

```bash
rm src/components/Tour.astro
```

Then, open up `pages/index.astro` and replace everything inside with:

```astro
// src/pages/index.astro
---

---

<style>

</style>
```

Yep! We're starting fresh and clean. We're not going to have the whole `html` document in one file. We want to be able to modularize as much as possible so we can customize the data we send to the browser.

Now, create a directory `src/layouts` and in that directory we're going to create our first layout file, `MainLayout.astro`.

```bash
mkdir src/layouts && touch src/layouts/MainLayout.astro
```

[Layouts](https://docs.astro.build/core-concepts/layouts) are just regular Astro components. There's absolutely no difference between a layout and a regular component. Conceptually, though, the folks at Astro encourage us to separate layouts from components because they have a slightly different function. Layouts in Astro are conceptually similar to [layouts in 11ty](https://www.11ty.dev/docs/layouts/) — they wrap other content.

Open up `src/layouts/MainLayout.astro` and put the following inside:

```astro
---
let title = 'AstroBlog';
const thisYear = new Date().toLocaleDateString("en-US", {year: 'numeric'});
---

<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="/style/global.css">
    <title>{title}</title>
  </head>
  <body>
    <header>
      <h1>
        <a href="/">{title}</a>
      </h1>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <p>&copy {thisYear} Some Dev Somewhere</p>
    </footer>
  </body>
</html>
```

