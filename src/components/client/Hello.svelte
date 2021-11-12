<script>
  export let name = "Jeff";

  $: changedName = name;

  setTimeout(function () {
    changedName = "Bomanicious";
  }, 1000);
</script>

<h2 class="hello-title">Hello, {changedName}!</h2>

<style>
  .hello-title {
    color: tomato;
  }
</style>
