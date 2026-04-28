<script lang="ts">
	import './XioniShopOrderTable.scss'
	import type { XioniShopOrderTableProps } from './XioniShopOrderTable.d'
	import makeBEM from '$lib/boilerplate/utils/makeBem'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		cart,
		total,
		shippingCost,
		baseName = 'XioniShopOrderTable',
		class: className,
		...restProps
	}: XioniShopOrderTableProps = $props()

	// --- [ BEM ] -----------------------------------------------------------------------------------

	const { block } = makeBEM(baseName)
</script>

<table {...restProps} class={[block, className]}>
	<thead>
		<tr>
			<th>Produkt</th>
			<th>Menge</th>
			<th>Preis</th>
			<th>Gesamt</th>
		</tr>
	</thead>
	<tbody>
		{#each cart || [] as { name, quantity, price, total }}
			<tr>
				<td>{name}</td>
				<td>{quantity}</td>
				<td>{price.formatted}</td>
				<td>{total.formatted}</td>
			</tr>
		{/each}
		{#if shippingCost}
			<tr>
				<td>Versandkosten</td>
				<td colspan="3" class="$text-right">{shippingCost.formatted}</td>
			</tr>
		{/if}
	</tbody>
	<tfoot>
		<tr>
			<td colspan="4">{total.formatted}</td>
		</tr>
	</tfoot>
</table>
