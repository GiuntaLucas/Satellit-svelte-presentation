<script>
  import { basket, removeFromBasket } from "../stores/basket.store";

  $: total = $basket
    .map((x) => x.price)
    .flat()
    .reduce((prev, a) => prev + a, 0)
    .toFixed(2);
</script>

<div class="dropdown dropdown-end">
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <div tabindex="0" class="btn btn-ghost btn-circle">
    <div class="indicator">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        stroke="currentColor"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        /></svg
      >
      <span class="badge badge-sm indicator-item">{$basket.length}</span>
    </div>
  </div>
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <div
    tabindex="0"
    class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
  >
    <div class="card-body">
      <span class="font-bold text-lg">{$basket.length} products</span>
      <span class="text-info">Subtotal: {total}$</span>
      <div class="card-actions">
        {#each $basket as product}
          <div class="flex justify-between">
            <div class="grow">{product.title}</div>
            <div class="w-6 h-6">
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <svg 
              on:click={() => removeFromBasket(product)}
              class="w-6 h-6 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              /></svg>
            </div>
          </div>
        {/each}
        <div />
      </div>
    </div>
  </div>
</div>