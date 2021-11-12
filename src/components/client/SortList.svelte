<script>
  import { onMount } from "svelte";
  export let list = [5, 7, 2, 0, 3, 8, 1, 9, 6, 4];
  $: elements = list;

  let currentIndex = 0;
  $: selected = currentIndex;

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

  async function toggleSort() {
    sortStarted = true;
    console.log("sort started: ", sortStarted);
    iterate(list);
  }

  // onMount(() => {});
</script>

<div class="list">
  {#if sortStarted === false}
    {#each list as element}
      <div class="element">
        {element}
      </div>
    {/each}
  {:else}
    {#each list as element, index}
      <div class={selected === index ? "selected element" : "element"}>
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
