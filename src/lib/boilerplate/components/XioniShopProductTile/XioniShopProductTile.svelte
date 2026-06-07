<script lang="ts">
	import './XioniShopProductTile.css'
	import type { ProductTileProps } from './XioniShopProductTile'
	import makeBEM from '$lib/boilerplate/utils/makeBem'

	let { class: classProp, product, ...restProps }: ProductTileProps = $props()

	const { name, teaser, price, vat, image } = $derived(product)

	const bem = makeBEM('XioniShopProductTile')
</script>

{#if product.id}
	<div {...restProps} class={[bem.block, classProp]}>
		<img
			class={bem.element('image')}
			src={image?.src || 'https://cdn.klickrhein.de/shop/product-placeholder.png'}
			alt={name || 'Kein Produktbild'}
			title={name || 'Kein Produktbild'}
			loading="lazy" />

		<div class={bem.element('data')}>
			<h4 class="$m-0 $p-0">
				{name}
			</h4>
			{#if teaser}
				<p class={bem.element('teaser')}>
					{@html teaser}
				</p>
			{/if}
			{#if price}
				<div class={[bem.element('price'), '$font-larger']}>
					{price.formatted}
				</div>
				<div class={bem.element('tax')}>
					inkl. {vat.formatted} MwSt.
				</div>
			{/if}
		</div>
	</div>
{/if}
