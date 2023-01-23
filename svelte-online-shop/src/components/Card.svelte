<script lang="ts">
  import { Link } from "svelte-navigator";
  import type { Product } from "../interfaces/product";
  import { addToBasket } from "../stores/basket.store";

  export let product: Product | null;
</script>

<div class="card bg-base-100 shadow-xl max-w-[500px] min-w-[350px]">
  <figure>
    <img class="h-28 w-28 mt-5" src={product.image} alt={product.title} />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{product.title}</h2>
    <p>{product.description}</p>
    <div class="card-actions justify-end">
      <Link to={`/product/${product.id}`}>
        <button class="btn">Detail</button></Link
      >
      <button
        on:click={() => addToBasket(product)}
        class="btn bg-orange-500 hover:bg-orange-400 border-none">Add</button
      >
    </div>
  </div>
</div>
