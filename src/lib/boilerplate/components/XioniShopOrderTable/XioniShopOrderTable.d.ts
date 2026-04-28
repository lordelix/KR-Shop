import type { HTMLAttributes } from 'svelte/elements';
import type { XioniShop } from '$lib/boilerplate/xioni/types';

export type XioniShopOrderTableProps = {
  cart?: XioniShop.Order['cart'];
  total: XioniShop.Order['total'];
  shippingCost?: XioniShop.Order['shippingCost'];
} & ComponentBaseProps &
  HTMLAttributes<HTMLTableElement>;
