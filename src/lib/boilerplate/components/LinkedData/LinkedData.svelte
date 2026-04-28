<script lang="ts">
	import type { LinkedDataProps } from './LinkedData.d'

	let { data }: LinkedDataProps = $props()

	const stringifiedData = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			...data
		})
	)
</script>

<svelte:element this={'script'} type="application/ld+json">{stringifiedData}</svelte:element>
