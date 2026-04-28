<script lang="ts">
	import './XioniShopCartButton.scss'

	import { CART } from '$lib/stores'
	import makeBEM from '$lib/boilerplate/utils/makeBem'
	import type { XioniShopCartButtonProps } from './XioniShopCartButton'
	import { Button } from '..'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		class: classProp,
		hideEmpty = false,
		text = 'Warenkorb',
		...restProps
	}: XioniShopCartButtonProps = $props()

	// --- [ Setup ] ---------------------------------------------------------------------------------

	const { block, modifier } = makeBEM('XioniShopCartButton')
	const itemsCount = $derived($CART.products.length)
	const classNames = $derived([
		block,
		itemsCount > 0 ? modifier('item-count-' + itemsCount) : undefined,
		classProp
	])
</script>

{#if !(hideEmpty && !itemsCount)}
	<Button
		to="/checkout"
		baseName={block}
		fontello="basket"
		class={classNames.join(' ')}
		{...restProps}>
		{text}
	</Button>
{/if}
