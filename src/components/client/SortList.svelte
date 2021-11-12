<script>
  export let list = [5, 7, 2, 0, 3, 8, 1, 9, 6, 4];
  $: elements = list;

  let currentIndex = 0;
  $: selected = currentIndex;

  function select(index) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 500);
    }).then(() => {
      currentIndex = index;
    });
  }

  async function iterate(ilist) {
    for (let i = 0; i < ilist.length; i++) {
      await select(i);
    }
  }

  iterate(list);
</script>

<div class="list">
  {#each list as element, index}
    {#if selected === index}
      <div class="element selected">{element}</div>
    {:else}
      <div class="element">{element}</div>
    {/if}
  {/each}
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
</style>
