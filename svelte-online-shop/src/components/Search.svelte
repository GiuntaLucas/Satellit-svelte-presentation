<script lang="ts">
  import { search } from "../stores/search.store";

  const searchProduct = (e) => {
    search.set(e.target.value);
  };
</script>

<input
  type="text"
  on:input={searchProduct}
  placeholder="Search"
  class="input input-bordered"
/>
