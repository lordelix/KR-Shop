<script lang="ts">
	import './Link.css'

	import isExternalURL from '$lib/boilerplate/utils/isExternalURL'
	import Fontello from '../Fontello/Fontello.svelte'
	import makeBEM from '$lib/boilerplate/utils/makeBem'
	import type { LinkProps } from './Link.d'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		baseName = 'Link',
		children,
		class: className,
		to,
		target,
		fontello,
		rel,
		label
	}: LinkProps = $props()

	// -----------------------------------------------------------------------------------------------

	// svelte-ignore state_referenced_locally
	const BEM = makeBEM(baseName)
	const tag = $derived(to ? 'a' : 'span')
	const classNames = $derived([BEM.block, className, !fontello || BEM.modifier('has-icon')])

	$effect(() => {
		if (to && !target && isExternalURL(to)) {
			rel = 'nofollow noopener'
			target = '_blank'
		}
	})

	function trimScheme(link: typeof to) {
		if (!link) return ''

		if (!isExternalURL(link)) return link

		const { hostname, pathname } = new URL(link)

		return pathname.length > 1 ? hostname + pathname : hostname
	}
</script>

<span class={classNames}>
	{#if fontello}
		<Fontello class={BEM.element('icon')} name={fontello} />&nbsp;
	{/if}
	<svelte:element this={tag} href={to} {target} {rel} aria-label={label}>
		{#if children}
			{@render children()}
		{:else}
			{trimScheme(to)}
		{/if}
	</svelte:element>
</span>
