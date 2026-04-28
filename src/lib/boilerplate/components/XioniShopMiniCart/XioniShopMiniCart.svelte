<script lang="ts">
	import makeBEM from '$lib/boilerplate/utils/makeBem'
	import type { XioniShopMiniCartProps } from './XioniShopMiniCart.d'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let { cart, class: className, ...restProps }: XioniShopMiniCartProps = $props()
	const bem = makeBEM('XioniShopMiniCart')

	// -----------------------------------------------------------------------------------------------
</script>

<section {...restProps} class={[bem.block, className]}>
	<div class={bem.element('title')}>Warenkorb:</div>
	<ul class="$mt $font-small">
		{#each cart.products as { product, quantity }}
			<li class="$overflow-ellipsis">
				{quantity}&times; {product.name}
			</li>
		{/each}
	</ul>
	<ul class="$mt-1/2 $font-small">
		<li class="$mb-1/4 $flex $space-between">
			<b>Zwischensumme:</b>&nbsp;
			<span>{cart.gross?.formatted}</span>
		</li>
		{#if cart.supplementalCost}
			<li class="$mb-1/4 $flex $space-between">
				<b>{cart.supplementalCost.description}:</b>
				<span>{cart.supplementalCost.formatted}</span>
			</li>
		{/if}
		{#if cart.shipping}
			<li class="$mb-1/4 $flex $space-between">
				<b>Versand:</b>
				<span>{cart.shipping.price.formatted}</span>
			</li>
		{/if}
		{#if cart.total}
			<li class="$flex $space-between">
				<b>Gesamt:</b>
				<span class="$font-bold $decoration-double-underline">{cart.total.formatted}</span>
			</li>
		{/if}
	</ul>
</section>
