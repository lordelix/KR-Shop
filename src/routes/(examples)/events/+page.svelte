<script>
	const { data } = $props()
	const events = $derived(data.events || [])
</script>

<Wrapper>
	<h1>Events</h1>
	<Client browser>
		{#if events.length}
			<ol class="$flex $flex-column $gap">
				{#each events as event (event.id)}
					<XioniEventTile tag="li" {event} />
				{/each}
			</ol>
		{:else}
			<p>
				<Fontello name="attention" />
				Zur Zeit sind keine Veranstaltungen geplant.
			</p>
		{/if}
	</Client>
</Wrapper>
