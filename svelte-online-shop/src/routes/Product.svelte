<script lang="ts">
  import { useParams } from "svelte-navigator";
  import Card from "../components/Card.svelte";
  import type { Product } from "../interfaces/product";

  const params = useParams();

  const promise: Promise<Product> = fetch(`https://fakestoreapi.com/products/${$params.id}`).then((res) => res.json());
</script>

{#await promise}
    <p>loading...</p>
{:then product} 
    <Card {product}/>
{/await}

zz