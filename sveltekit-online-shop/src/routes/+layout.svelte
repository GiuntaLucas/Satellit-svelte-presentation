<script>  
  import "../app.css";
  import svelteLogo from "../assets/svelte.svg";
  import Search from "../components/Search.svelte";
  import Basket from "../components/Basket.svelte";
</script>

<div class="navbar bg-orange-400 shadow-xl fixed top-0 z-10">
  <a href="/" class="btn btn-ghost normal-case text-xl ">
    <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
  </a>
  <div class="flex-grow justify-end">
    <Search />
    <Basket />
  </div>
</div>

<main class="p-2 pt-24">
  <slot />
</main>
