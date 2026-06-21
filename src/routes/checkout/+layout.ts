import { useOrder } from '$lib/boilerplate/xioni/shop/Order';
import { ORDER } from '$lib/stores';

export const prerender = false;

export async function load() {
  const order = await useOrder().getOrder();
  if (!order) {
    ORDER.$reset();
    return;
  }
  ORDER.set(order);
}
