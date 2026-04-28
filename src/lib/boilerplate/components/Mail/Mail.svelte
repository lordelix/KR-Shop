<script lang="ts">
	import './Mail.css'
	import type { MailProps } from './Mail.d.ts'

	// --- [ Components ] ----------------------------------------------------------------------------

	import Fontello from '../Fontello/Fontello.svelte'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		class: classProp,
		baseName = 'Mail',
		to,
		fontello = 'mail',
		subject,
		body,
		children,
		...restProps
	}: MailProps = $props()

	// --- [ Logic ] ---------------------------------------------------------------------------------

	const obfuscatedEmail = $derived(
		to.replaceAll('@', '&#64;').replaceAll('.de', '&#8228;&#100;&#101;')
	)

	function makeHref() {
		const link = new URL('mailto:' + to)

		if (subject) {
			link.searchParams.set('subject', subject)
		}

		if (body) {
			link.searchParams.set('body', body)
		}

		return link.toString()
	}
</script>

<!-- svelte-ignore event_directive_deprecated -->
<span
	on:click|preventDefault={() => (location.href = makeHref())}
	{...restProps}
	class={[baseName, classProp]}>
	{#if fontello}
		<Fontello baseName={baseName + '__icon'} name={fontello} />&nbsp;
	{/if}
	<span class={baseName + '__address'}>
		{#if children}
			{@render children()}
		{:else}
			{@html obfuscatedEmail}
		{/if}
	</span>
</span>
