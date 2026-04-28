import type { XioniShop } from '$lib/boilerplate/xioni/types'
import type { HTMLAttributes } from 'svelte/elements'

export type ProductTileProps = {
	product: XioniShop.Product
} & HTMLAttributes<HTMLElement>
