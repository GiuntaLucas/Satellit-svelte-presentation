<script lang="ts">
  import Card from "../components/Card.svelte";
  import { search } from "../stores/search.store";
  import type { Product } from "src/interfaces/product";
  import type { PageData } from "./$types";

  export let data: PageData;

  function productFilter(el: Product, value: string): boolean {
    return el.title.toLocaleLowerCase().includes(value.toLocaleLowerCase());
  }
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {#each data.products.filter(x => productFilter(x, $search)) as product}
    <Card {product} />
  {/each}
</div>
