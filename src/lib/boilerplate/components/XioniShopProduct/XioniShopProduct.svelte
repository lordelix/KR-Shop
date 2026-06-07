<script lang="ts">
	import './XioniShopProduct.scss'

	import { IS_MOBILE } from '$lib/boilerplate/utils/breakpoints'
	import { page } from '$app/state'
	import type { XioniShopProductProps } from './XioniShopProduct'

	// --- [ Components ] ----------------------------------------------------------------------------

	import { Button, Grid, Link, Modal } from '$lib/boilerplate/components'
	import makeBEM from '$lib/boilerplate/utils/makeBem'

	// --- [ Props ] ---------------------------------------------------------------------------------

	const {
		product,
		basePath = page.url.pathname + '/../',
		class: className,
		onAddToCart
	}: XioniShopProductProps = $props()

	const {
		name,
		teaser,
		path,
		description,
		legal,
		pricePerUnit,
		quantity,
		price,
		vat,
		image,
		code,
		ean
	} = $derived(product)

	// svelte-ignore non_reactive_update
	let productImageModal: Modal

	const { block, element } = makeBEM('XioniShopProduct')

	function imageClickHandler() {
		if ($IS_MOBILE) return

		productImageModal.open()
	}

	function addToCartHandler() {
		if (!onAddToCart) return

		onAddToCart(product)
	}
</script>

{#if product.id}
	<div class={[block, className]} itemscope itemtype="https://schema.org/Product">
		<meta itemprop="productID" content={code} />
		<meta itemprop="price" content={price.value} />

		<ul class={element('breadcrubs')}>
			{#each path || [] as { id, name, slug }}
				<li class={element('breadcrubs-crub')}>
					<Link to="{basePath}{slug}-c-{id}">{name}</Link>
				</li>
			{/each}
		</ul>
		<h2 class={[element('name'), '$mb-2 $mt-1/2']} itemprop="name">
			{name}
		</h2>

		<ul class="$flex $gap">
			{#if code}
				<li class="$mb-2">Art.-Nr.: {code}</li>
			{/if}
			{#if ean}
				<li>EAN: {ean}</li>
			{/if}
		</ul>

		<Grid gap>
			<Grid size="tablet-2-5" class="$text-center">
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
				<img
					class={[element('image'), '$mb-2@mobile']}
					src={image?.src || 'https://cdn.klickrhein.de/shop/product-placeholder.png'}
					alt={name}
					onclick={imageClickHandler}
					itemprop="image" />
			</Grid>
			<Grid size="tablet-3-5">
				{#if teaser}
					<p class={element('teaser')}>{@html teaser}</p>
				{/if}
				{#if price}
					<div class={element('price-box')}>
						<span class={element('price')} data-price={price.value}>
							{price.formatted}
						</span>
						<span class={[element('tax'), '$pl-1/2']} data-vat={vat.value}>
							inkl. {vat.formatted} MwSt., zzgl. <Link to="/agb#versandkosten">Versand</Link>
						</span>
						<br />
						{#if quantity?.value !== 1 && pricePerUnit}
							<span class={element('quantity')}>
								{quantity.formatted} / {pricePerUnit.formatted}
							</span>
						{/if}
					</div>

					<Button
						variant="primary"
						onClick={addToCartHandler}
						class={element('add-to-cart-button')}
						fontello="basket">
						In den Warenkorb
					</Button>
				{/if}

				{#if description}
					<p class={element('description')} itemprop="description">{@html description}</p>
				{/if}

				{#if legal}
					<p class={element('legal-info')}>
						{@html legal}
					</p>
				{/if}
			</Grid>
		</Grid>
	</div>

	<Modal bind:this={productImageModal} title={name}>
		<img
			class={element('image-presentation')}
			src={image?.src || 'https://cdn.klickrhein.de/shop/product-placeholder.png'}
			alt={name} />
	</Modal>
{/if}
