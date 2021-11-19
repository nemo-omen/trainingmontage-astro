<script>
  import { onMount } from "svelte";
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";
  import { slide, fade } from "svelte/transition";

  let visible = false;

  export let list = [5, 7, 2, 0, 3, 8, 1, 9, 6, 4];
  $: elements = list;

  let currentIndex = 0;
  $: selected = currentIndex;

  let compareList = [];
  $: compare = compareList;

  let loop = 0;
  $: loopCount = loop;

  let innerLoop = 0;
  $: innerLoopCount = innerLoop;

  let sortStarted = false;

  function select(index) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 500);
    }).then(() => {
      currentIndex = index;
    });
  }

  async function iterate(ilist) {
    return new Promise(async (resolve, reject) => {
      for (let i = 0; i < ilist.length; i++) {
        await select(i);
      }
      return resolve();
    });
  }

  function pause(time) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, time);
    });
  }

  async function bubbleSort() {
    list = [5, 7, 2, 0, 3, 8, 1, 9, 6, 4];
    loop = 0;
    innerLoop = 0;
    return new Promise(async (resolve, reject) => {
      for (let i = 0; i < list.length; ++i) {
        await pause(500);
        loop = i + 1;
        for (let j = 0; j < list.length - 1; j++) {
          await pause(250);
          innerLoop = j + 1;
          compare[0] = j;
          compare[1] = j + 1;

          if (list[j] > list[j + 1]) {
            await swap(j, j + 1);
          }
        }
      }
      compare = [0, 1];
      resolve(false);
    });
  }

  async function swap(j, k) {
    let temp = list[j];
    list[j] = list[k];
    list[k] = temp;
    await pause(500);
  }

  async function resetList() {
    await pause(1500);
    const replacementList = [5, 7, 2, 0, 3, 8, 1, 9, 6, 4];
    list = [...replacementList];
  }

  async function toggleSort() {
    if (currentIndex > 0) currentIndex = 0;
    sortStarted = true;
    sortStarted = await bubbleSort(list);
    resetList();
  }

  onMount(() => {
    visible = true;
  });
</script>

<div class="example">
  {#if visible}
    <div class="list" transition:fade>
      {#if sortStarted === false}
        {#each elements as element (element)}
          <div
            class="element"
            animate:flip={{ duration: 500, delay: 250, easing: quintOut }}
          >
            {element}
          </div>
        {/each}
      {:else}
        {#each elements as element, index (element)}
          <div
            animate:flip={{ duration: 500, delay: 250, easing: quintOut }}
            class={compare[0] === index
              ? "selected element"
              : compare[1] === index
              ? "selected element"
              : "element"}
          >
            {element}
          </div>
        {/each}
      {/if}
    </div>
    <div class="sort-control">
      <h2>Outer Loop Iterations: {loopCount}</h2>
      <h2>Inner Loop Iterations: {innerLoopCount}</h2>
      <button on:click={toggleSort}>&#9654;</button>
    </div>
  {/if}
</div>

<style>
  .list {
    margin: 2rem;
    display: flex;
    justify-content: space-between;
  }

  .list > * + * {
    border-left: 1px solid tomato;
  }

  .element {
    transition: all 0.3s ease-out;
    padding: 1rem;
    border: 1px solid tomato;
    line-height: 1;
  }

  .selected {
    background-color: var(--color-hover);
    color: var(--color-bg);
  }
  .sort-control {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--size-700);
  }

  h2 {
    text-align: center;
  }
  button {
    color: var(--color-link);
    /* background-color: var(--color-link); */
    background-color: transparent;
    font-size: var(--size-700);
    line-height: 1;
    padding: 0.5rem;
    border: none;
    transition: all 0.3s ease-out;
    cursor: pointer;
  }

  button:hover {
    color: var(--color-hover);
    /* background-color: var(--color-hover); */
  }
</style>
