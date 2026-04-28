import type { XioniShop } from '$lib/boilerplate/xioni/types';

export type XioniShopMiniCartProps = {
  cart: XioniShop.Cart;
} & HTMLAttributes<HTMLElement>;
