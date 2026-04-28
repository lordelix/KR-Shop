<script lang="ts">
	import { AddressbookEntry, Client } from '$lib/boilerplate/components'

	let { data } = $props()
	const categories = $derived(data.categories || [])
</script>

<h1>Ortsvereine</h1>

<Client browser>
	{#each categories as { title, entries }, i (i)}
		<h2>{title}</h2>

		<ul class="$flex $flex-column $gap">
			{#each entries || [] as entry, j (j)}
				<li>
					<AddressbookEntry {entry} />
				</li>
			{/each}
		</ul>
	{/each}
</Client>
