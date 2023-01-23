import { writable, type Writable } from "svelte/store";
import type { Product } from "../interfaces/product";
import { browser } from "$app/environment";

const setBasketToLocalStorage = (basket: Product[]) => {
  if(browser) localStorage.setItem("basket", JSON.stringify(basket));
};
export const basket: Writable<Product[]> = writable(
  browser ? JSON.parse(localStorage.getItem("basket") || "[]") : []
);

export const addToBasket = (product: Product) => {
  debugger
  basket.update((value: Product[]) => {
    const basket = [...value, product];
    setBasketToLocalStorage(basket);
    return basket;
  });
};

export const removeFromBasket = (product: Product) => {
  basket.update((value: Product[]) => {
    const index = value.indexOf(product);
    if (index > -1) {
      value.splice(index, 1); 
    }
   
    setBasketToLocalStorage(value);
    return [...value];
  });
};
