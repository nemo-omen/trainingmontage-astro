<script>
  import { onMount } from "svelte";
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";

  export let list = [5, 7, 2, 0, 3, 8, 1, 9, 6, 4];
  $: elements = list;

  let currentIndex = 0;
  $: selected = currentIndex;

  let compareList = [];
  $: compare = compareList;

  let loop = 0;
  $: loopCount = loop;

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
    return new Promise(async (resolve, reject) => {
      for (let i = 0; i < list.length - 1; i++) {
        await pause(500);
        loop++;
        for (let j = 0; j < list.length - (i - 1); j++) {
          await pause(250);
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

  async function toggleSort() {
    if (currentIndex > 0) currentIndex = 0;
    sortStarted = true;
    console.log("sort started: ", sortStarted);
    // iterate(list).then(() => {
    //   setTimeout(() => {
    //     sortStarted = false;
    //     currentIndex = 0;
    //   }, 1000);
    // });
    sortStarted = await bubbleSort(list);
    // pause().then(() => (sortStarted = false));
    // sortStarted = false;
    console.log("sortStarted: ", sortStarted);
  }

  // onMount(() => {});
</script>

<h2>Loop: {loopCount}</h2>
<div class="list">
  {#if sortStarted === false}
    {#each elements as element}
      <div class="element">
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
  <button on:click={toggleSort}>&#9654;</button>
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
    justify-content: center;
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
