import { writable, type Writable } from "svelte/store";
import type { Product } from "../interfaces/product";

const setBasketToLocalStorage = (basket: Product[]) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};
export const basket: Writable<Product[]> = writable(
  JSON.parse(localStorage.getItem("basket") || "[]")
);

export const addToBasket = (product: Product) => {
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
