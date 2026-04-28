<script lang="ts">
	import './XioniShopCartTable.scss'
	import { Link } from '..'
	import { range } from 'lodash-es'
	import Select from '../Select/Select.svelte'
	import type { XioniShopCartTableProps } from './XioniShopCartTable.d'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		class: className,
		products = [],
		supplementalCost,
		shipping,
		total,
		quantitySelector = false,
		readOnly = false,
		onProductQuantityUpdate,
		...restProps
	}: XioniShopCartTableProps = $props()

	const baseName = 'XioniShopCartTable'

	// -----------------------------------------------------------------------------------------------

	function update(productId: number, { target }: any) {
		if (onProductQuantityUpdate) {
			onProductQuantityUpdate(productId, +target.value)
		}
	}
</script>

<table class={[baseName, className]} {...restProps}>
	<thead>
		<tr>
			<th>Produkt</th>
			<th>Stück</th>
			<th>Preis</th>
		</tr>
	</thead>
	<tbody>
		{#each products as { product, total, quantity }}
			<tr>
				<td width="98%">
					<Link to="/{product.slug}-p-{product.id}/">
						{product.name}
					</Link>
					{#if product.code}<br />
						<small>Art.-Nr.: {product.code}</small>{/if}
				</td>
				<td class="$text-center" width="1%">
					{#if quantitySelector}
						<Select
							options={range(0, 37)}
							values={range(0, 37)}
							value={quantity}
							disabled={readOnly}
							onChange={(event: any) => update(product.id, event)} />
					{:else}
						{quantity}
					{/if}
				</td>
				<td class="$text-right" width="1%">
					{total.formatted}
				</td>
			</tr>
		{/each}
	</tbody>
	<tfoot>
		<tr aria-hidden="true">
			<td colspan="3"><hr class="$m-0" /></td>
		</tr>
		{#if supplementalCost}
			<tr>
				<td colspan="2" class="$text-right $font-bold">{supplementalCost.description}:</td>
				<td class="$text-right">{supplementalCost.formatted}</td>
			</tr>
		{/if}
		{#if shipping}
			<tr>
				<td colspan="2" class="$text-right $font-bold">Versand:</td>
				<td class="$text-right">{shipping.price.formatted}</td>
			</tr>
		{/if}
		<tr>
			<td colspan="2" class="$text-right $font-bold"
				>Gesamt:
				<span class="$font-small $font-italic">(inkl. MwSt.)</span></td>
			<td class="$text-right $font-bold $decoration-double-underline">{total.formatted}</td>
		</tr>
	</tfoot>
</table>

<style lang="scss">
	.XioniShopCartTable {
		:global(.Select) {
			max-width: 4rem;
		}

		:global(.Select__input) {
			text-align: center;
		}
	}
</style>
