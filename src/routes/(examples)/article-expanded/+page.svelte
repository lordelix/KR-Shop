<script lang="ts">
	import {
		Figure,
		Wrapper,
		XioniArticleButtons,
		XioniArticleContent,
		XioniArticleMeta
	} from '$lib/boilerplate/components'

	let { data } = $props()
	let { articles } = $derived(data)
</script>

<h1>Artikel</h1>

<Wrapper tag="ol" size="small" class="$flex $flex-column $gap-3">
	{#each articles as { author, date, content, image, pdf, teaser, title, website }, i (i)}
		<li>
			{#if image}
				<Figure src={image.src} caption={image.description} />
			{/if}

			<h2>
				{title}
			</h2>

			{#if author || date}
				<XioniArticleMeta {author} {date} />
			{/if}

			<p>
				{@html teaser}
			</p>

			{#each content || [] as { text, title, image }, j (j)}
				<XioniArticleContent {text} {title} {image} />
			{/each}

			{#if pdf || website}
				<XioniArticleButtons {pdf} {website} />
			{/if}
		</li>
	{/each}
</Wrapper>
