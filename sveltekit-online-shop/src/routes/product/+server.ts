import { json, type Actions, type RequestHandler } from "@sveltejs/kit";

export const GET = (async ({ url }) => {
  const response = fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  const products = await response;
  return json(products);
}) satisfies RequestHandler;

export const POST = (async ({ request }) => {
    const data = await request.json();
    return new Response('product created');
  }) satisfies RequestHandler;

export const actions = {
  create: async (event) => {
    // TODO create product
  },
} satisfies Actions;
