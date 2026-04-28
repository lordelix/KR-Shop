import type { HTMLAttributes } from 'svelte/elements';
import type { XioniShop } from '$lib/boilerplate/xioni/types';

export type XioniShopNavProps = {
  activeGroup?: XioniShop.Group;
  groups: XioniShop.Group[];
  basePath?: string;
} & HTMLAttributes<HTMLElement>;
