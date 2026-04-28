import { useProducts } from '$lib/boilerplate/xioni/shop/Products.js';
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader';

const { getProduct } = useProducts();

export async function load({ params }) {
  const id = +params.id;
  const product = await xioniLoader(getProduct(id));

  return {
    product
  };
}
