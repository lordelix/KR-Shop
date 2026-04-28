<script lang="ts">
	import './Wrapper.scss'

	import makeBEM from '$lib/boilerplate/utils/makeBem'
	import type { WrapperProps } from './Wrapper.d'

	let {
		class: classProp,
		baseName = 'Wrapper',
		tag = 'div',
		responsive = false,
		size,
		children,
		...restProps
	}: WrapperProps = $props()

	// svelte-ignore state_referenced_locally
	const bem = makeBEM(baseName)

	// -----------------------------------------------------------------------------------------------

	const className = $derived([
		bem.block,
		size ? bem.modifier(size) : undefined,
		responsive ? bem.modifier('responsive') : undefined,
		classProp
	])
</script>

<svelte:element this={tag} class={className} {...restProps}>
	{@render children()}
</svelte:element>
