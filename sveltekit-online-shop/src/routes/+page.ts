import type { Product } from 'src/interfaces/product';
import type { PageLoad } from './$types';

export const load = (async () => {
  return {
    products: (await fetch("http://127.0.0.1:5173/product")).json() as unknown as Product[], 
  };
}) satisfies PageLoad;
