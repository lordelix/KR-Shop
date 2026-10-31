<script lang="ts">
	// --- [ Components ] ----------------------------------------------------------------------------

	import {
		Grid,
		Link,
		XioniShopProductTile,
		XioniShopCartButton
	} from '$lib/boilerplate/components'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let { data } = $props()

	const group = $derived(data.group)
	const products = $derived((data.products || []).filter(product => product.group === group.id))
</script>

<svelte:head>
	<meta name="description" content="Kaufen Sie {group.name} in unserem Online Shop." />
	<title>{group.name} | Online Shop</title>
</svelte:head>

<XioniShopCartButton class="$inline-block $mb $hidden@mobile" />

<h1 class="h3">
	{#each group.path || [] as { id, name, slug }}
		<Link to="/{slug}-c-{id}/">
			{name}
		</Link>
		/
	{/each}
	{group.name}
</h1>

{#if group.description}
	<p>{@html group.description}</p>
{/if}

{#if products.length}
	<ol class="product-grid">
		{#each products as product (product.id)}
			<li>
				<Link class="$decoration-none" to="/{product.slug}-p-{product.id}/">
					<XioniShopProductTile {product} />
				</Link>
			</li>
		{/each}
	</ol>
{/if}
{#if group.subgroups}
	<hr />
	<Grid gap tag="ol">
		{#each group.subgroups as subgroup, index (subgroup.id)}
			<Grid tag="li" size="1" {index}>
				<h3 class="h4">
					<Link to="/{subgroup.slug}-c-{subgroup.id}">
						{subgroup.name}
					</Link>
				</h3>
				{#if subgroup.description}
					{@html subgroup.description}
				{/if}
				<ol class="subgroup-product-list">
					{#each products.filter(product => product.group === subgroup.id) || [] as product, index (product.id)}
						<li>
							<Link to="/{product.slug}-p-{product.id}/" {index}>
								{product.name}
							</Link>
						</li>
					{/each}
				</ol>
			</Grid>
		{/each}
	</Grid>
{/if}

<style lang="scss">
	@use '$lib/boilerplate/styles/mixins' as mixins;

	.product-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 1rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.subgroup-product-list {
		@include mixins.breakpoint('tablet-up') {
			column-count: 2;
		}
	}
</style>
