<script>
	const { data } = $props()
	const event = $derived(data.event)
</script>

<Wrapper>
	<XioniEvent class="$my-2" {event} />
</Wrapper>

<div class="$text-center $mt-2">
	<Link fontello="angle-left" to="../">Zurück zur Übersicht</Link>
</div>
