<script lang="ts">
	import { browser as isBrowser, building as isBuilding } from '$app/environment'
	import type { ClientProps } from './Client.d'

	let { browser, server, children }: ClientProps = $props()
</script>

{#if browser && isBrowser && !isBuilding}
	{@render children()}
{:else if server && !isBrowser}
	{@render children()}
{:else if (browser && isBrowser) || (server && !isBrowser)}
	{@render children()}
{/if}
