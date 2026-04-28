<script lang="ts">
	// --- [ Components ] ----------------------------------------------------------------------------

	import { Grid, Link } from '$lib/boilerplate/components'
	import XioniShopProductTile from '$lib/boilerplate/components/XioniShopProductTile/XioniShopProductTile.svelte'

	// --- [ Setup ] ---------------------------------------------------------------------------------

	let { data } = $props()
</script>

<Grid gap tag="ol">
	{#each data.products as product, index (product.id)}
		<Grid tag="li" size="tablet-1-3 desktop-1-4" {index}>
			<Link class="$decoration-none" to="/{product.slug}-p-{product.id}/">
				<XioniShopProductTile {product} />
			</Link>
		</Grid>
	{/each}
</Grid>
