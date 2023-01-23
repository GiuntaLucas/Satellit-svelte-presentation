
<script lang="ts">
  import Card from "../components/Card.svelte";
  import { search } from "../stores/search.store";
  import type { Product } from "../interfaces/product";
  const promise: Promise<Product[]> = fetch(
    "https://fakestoreapi.com/products"
  ).then((res) => res.json());

  function productFilter(el: Product, value: string) {
    return el.title.toLocaleLowerCase().includes(value.toLocaleLowerCase());
  }
</script>

{#await promise}
  <p>loading...</p>
{:then products}
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each products.filter((x) => productFilter(x, $search)) as product}
      <Card {product} />
    {/each}
  </div>
{/await}
