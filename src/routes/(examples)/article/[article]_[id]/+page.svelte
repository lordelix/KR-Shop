<script lang="ts">
	import stammdaten from '$stammdaten'
	import { Link, Wrapper, XioniArticle } from '$lib/boilerplate/components'

	let { data } = $props()
	const { article } = $derived(data)
</script>

<svelte:head>
	<title>{article.title} | {stammdaten.title}</title>
	<meta name="description" content={article.teaser} />
</svelte:head>

<Wrapper size="small" responsive>
	<XioniArticle {article} />
	<hr />
	<div class="$text-center $my-3">
		<Link fontello="angle-left" to="../">Zurück zur Übersicht</Link>
	</div>
</Wrapper>
