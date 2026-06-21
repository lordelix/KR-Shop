import { useOrder } from '$lib/boilerplate/xioni/shop/Order';
import { ORDER } from '$lib/stores';
import type { XioniShop } from '$lib/boilerplate/xioni/types';

export const prerender = false;

export async function load() {
  const order = await useOrder().getOrder();
  if (!order) {
    ORDER.set({ address: {}, total: {}, shippingCost: {} } as XioniShop.Order);
    return;
  }
  ORDER.set(order);
}
