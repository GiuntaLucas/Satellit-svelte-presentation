<script lang="ts">
  import { Router, Link, Route } from "svelte-navigator";
  import svelteLogo from "./assets/svelte.svg";
  import Basket from "./components/Basket.svelte";
  import Search from "./components/Search.svelte";
  import Home from "./routes/Home.svelte";
  import Product from "./routes/Product.svelte";


</script>

<Router>
  <div class="navbar bg-orange-400 shadow-xl fixed top-0 z-10">
    <Link to="/" class="btn btn-ghost normal-case text-xl ">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </Link>
    <div class="flex-grow justify-end">
      <Search/>
      <Basket/>
    </div>
  </div>
  <main class="p-2 pt-24">
    <Route path="/" component={Home} />
    <Route path="/product/:id" component={Product} />
  </main>
</Router>

<style>
  .logo {
    will-change: filter;
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
