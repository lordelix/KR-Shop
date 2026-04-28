import type { XioniShop } from '$lib/boilerplate/xioni/types'
import type { HTMLAttributes } from 'svelte/elements'

export type XioniShopCartTableProps = {
	products?: XioniShop.Cart['products']
	supplementalCost?: XioniShop.Cart['supplementalCost']
	shipping?: XioniShop.Cart['shipping']
	total: XioniShop.Cart['total']
	quantitySelector?: boolean
	readOnly?: boolean
	onProductQuantityUpdate?: (productId: number, quantity: number) => void
} & HTMLAttributes<HTMLTableElement>
