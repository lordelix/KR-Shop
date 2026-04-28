<script lang="ts">
	import { Client, Wrapper, XioniArticleTile } from '$lib/boilerplate/components'

	let { data } = $props()
	let { articles, articlesMeta } = $derived(data)
</script>

<Wrapper size="small">
	<Client browser>
		<h1>Artikel ({articlesMeta?.totalCount})</h1>
		<ol class="$flex $flex-column $gap">
			{#each articles || [] as article, i (i)}
				<XioniArticleTile tag="li" {article} />
			{/each}
		</ol>
	</Client>
</Wrapper>
