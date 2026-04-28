<script lang="ts">
	import './Message.scss'

	import type { MessageProps } from './Message.d'
	import Fontello from '../Fontello/Fontello.svelte'
	import makeBEM from '$lib/boilerplate/utils/makeBem'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		baseName = 'Message',
		class: classProp,
		type,
		title,
		inline,
		tag = 'div',
		closable,
		code,
		children,
		onClose,
		...restProps
	}: MessageProps = $props()

	// svelte-ignore state_referenced_locally
	const { block, element, modifier } = makeBEM(baseName)
</script>

<svelte:element
	this={tag}
	{...restProps}
	class={[
		block,
		classProp,
		{
			[modifier(type as string)]: !!type,
			[modifier('inline')]: inline,
			[modifier('closable')]: closable
		}
	]}>
	{#if closable}
		<Fontello name="cancel" class={element('close-button')} onclick={onClose} />
	{/if}
	{#if title}
		<h4 class={element('title')}>
			{title}
		</h4>
	{/if}
	{#if children}
		{@render children()}
	{/if}
	{#if code}
		<pre>{@render code()}</pre>
	{/if}
</svelte:element>
