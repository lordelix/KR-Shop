<script>
	let { data } = $props()
	const events = $derived(data.events || [])
	const eventCount = $derived(data.eventCount || 0)
</script>

<Wrapper>
	<h1>Events</h1>
	<Client browser>
		<p>
			<small>Insgesamt {eventCount} Veranstaltungen</small>
		</p>
		{#if events.length}
			<ol class="$flex $flex-column $gap">
				{#each events as event (event.id)}
					<XioniEventTile tag="li" {event} link="./{event.slug}_{event.module}-{event.id}" />
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
