<script lang="ts">
	import stammdaten from '$stammdaten'
	import { AddressbookEntry, Client, Message } from '$lib/boilerplate/components'
	import { goto } from '$app/navigation'

	let { data } = $props()
	const entries = $derived(data.entries || [])
</script>

<svelte:head>
	<meta name="description" content="[...]" />
	<title>{stammdaten.title}</title>
</svelte:head>

<h4>Essen gut - alles gut</h4>
<h1>Gastronomiebetriebe in Hattenheim</h1>
<hr />

<Client browser>
	{#if !entries.length}
		<Message type="info">Keine Einträge gefunden</Message>
	{:else}
		<ul class="$flex $flex-column $gap">
			{#each entries as entry (entry.id)}
				<AddressbookEntry {entry} tag="li" onclick={() => goto('./' + entry.id)} />
			{/each}
		</ul>
	{/if}
</Client>
