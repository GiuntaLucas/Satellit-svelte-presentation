import type { Product } from "src/interfaces/product";
import type { PageServerLoad } from "./$types";

export const load = (async ({params}: any) => {
  return {
    product: await fetch(`https://fakestoreapi.com/products/${params.id}`).then((res) => res.json()) as unknown as Product, 
  };
}) satisfies PageServerLoad;