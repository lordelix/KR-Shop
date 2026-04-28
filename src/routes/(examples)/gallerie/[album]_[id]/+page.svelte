<script>
	const { data } = $props()
	const { title, images } = $derived(data.album)
</script>

<h1>{title}</h1>

<XioniAlbum {images} />

<div class="$text-center">
	<Link fontello="angle-left" to="../">Zurück zur Übersicht</Link>
</div>
