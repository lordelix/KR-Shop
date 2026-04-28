<script>
	const { data } = $props()
	const events = $derived(data.events || [])

	let expandedElement = $state(null)
</script>

<Wrapper>
	<h1>Events <i>(Toggle)</i></h1>
	<Client browser>
		{#if events.length}
			<ol class="$flex $flex-column $gap">
				{#each events as event (event.id)}
					<li>
						{#if event.image}
							<img src={event.image.thumbSrc} alt={event.image.alt} loading="lazy" />
						{/if}
						<h2>
							{event.title}
						</h2>
						<h3>
							{event.duration}
						</h3>
						{#if event.teaser}
							<p>{@html event.teaser}</p>
						{/if}
						{#if expandedElement === event.id}
							{#if event.description}
								<p>{@html event.description}</p>
							{/if}
							<ul class="$flex $gap">
								{#if event.organizer}
									<li>
										<Fontello name="user" />
										{event.organizer}
									</li>
								{/if}
								{#if event.pdf}
									<li>
										<Link to={event.pdf.src} fontello="file-pdf">
											{event.pdf.title}
										</Link>
									</li>
								{/if}
							</ul>
							{#if event.images}
								<Grid gap class="$mt">
									{#each event.images as { src, alt } (src)}
										<Grid size="tablet-1-5">
											<img {src} {alt} loading="lazy" />
										</Grid>
									{/each}
								</Grid>
							{/if}
							<Link
								fontello="angle-up"
								class="$row-reverse $mt"
								on:click={() => (expandedElement = null)}>Weniger</Link>
						{:else}
							<Link
								fontello="angle-down"
								class="$row-reverse"
								on:click={() => (expandedElement = event.id)}>
								Mehr erfahren
							</Link>
						{/if}
					</li>
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
