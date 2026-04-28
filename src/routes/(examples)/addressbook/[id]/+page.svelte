<script lang="ts">
	import stammdaten from '$stammdaten'
	import type { XioniCMS } from '$lib/boilerplate/xioni/types.js'
	import { Address } from '$lib/boilerplate/components/index.js'
	import mapAddressbookEntryToAddress from '$lib/boilerplate/utils/mapAddressbookEntryToAddress.js'

	let { data } = $props()
	const entry = $derived(data.entry as XioniCMS.AddressbookEntry)
</script>

<svelte:head>
	<meta name="description" content="[...]" />
	<title>{stammdaten.title} | {entry.name}</title>
</svelte:head>

<h1>
	{entry.name}
</h1>

{#if entry.subtitle}
	<h4>
		{entry.subtitle}
	</h4>
{/if}

<p>{@html entry.description}</p>

<Address {...mapAddressbookEntryToAddress(entry)} />
