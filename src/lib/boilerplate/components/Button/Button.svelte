<script lang="ts">
	import './Button.scss'

	import isExternalURL from '$lib/boilerplate/utils/isExternalURL'
	import makeBEM from '$lib/boilerplate/utils/makeBem'
	import type { ButtonProps } from './Button'

	// --- [ Components ] ----------------------------------------------------------------------------

	import Fontello from '../Fontello/Fontello.svelte'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		class: classProp,
		baseName = 'Button',

		disabled = false,
		fontello,
		isLoading = false,
		target,
		to,
		variant,
		onClick,

		children,
		...restProps
	}: ButtonProps = $props()

	// -----------------------------------------------------------------------------------------------

	// svelte-ignore state_referenced_locally
	const { block, element, modifier } = makeBEM(baseName)

	// svelte-ignore state_referenced_locally
	if (to && !target && isExternalURL(to)) {
		target = '_blank'
	}

	const classNames = $derived([
		block,
		classProp,
		variant ? modifier(variant) : null,
		disabled ? modifier('disabled') : null,
		!to || modifier('anchor'),
		!isLoading || modifier('loading')
	])

	function handleClick() {
		if (disabled || !onClick) return

		onClick()
	}
</script>

{#if !to}
	<button onclick={handleClick} {disabled} class={classNames} {...restProps}>
		{#if fontello}
			<Fontello baseName={element('icon')} name={fontello} />&nbsp;
		{/if}
		<span class={element('text')}>
			{@render children?.()}
		</span>
	</button>
{:else}
	<a href={to} onclick={handleClick} {target} class={classNames} {...restProps}>
		{#if fontello}
			<Fontello baseName={element('icon')} name={fontello} />&nbsp;
		{/if}
		<span class={element('text')}>
			{@render children?.()}
		</span>
	</a>
{/if}
