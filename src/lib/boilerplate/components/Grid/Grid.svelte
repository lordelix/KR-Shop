<script lang="ts">
	import './Grid.scss'
	import type { GridProps } from './Grid.d'
	import makeBEM from '$lib/boilerplate/utils/makeBem'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		class: className,
		baseName = 'Grid',
		tag = 'div',
		gap = 0,
		size = false,
		index,
		children,
		...restProps
	}: GridProps = $props()

	// --- [ BEM ] -----------------------------------------------------------------------------------

	const bem = $derived(makeBEM(baseName))

	// --- [ Logic ] ---------------------------------------------------------------------------------

	const computedClassName = $derived(!size ? createParentClassName() : createChildClassName())

	function createChildClassName() {
		return [
			bem.element('item'),
			!size ||
				('' + size)
					.split(' ')
					.map(i => bem.element('item--' + i))
					.join(' ')
		]
	}

	function createParentClassName() {
		const classNames = [bem.block]

		if (gap && typeof gap === 'number') {
			classNames.push(bem.modifier(`gap-${gap}`))
		} else if (gap) {
			classNames.push(bem.modifier('gap'))
		}

		return [...classNames]
	}
</script>

<svelte:element this={tag} class={[computedClassName, className]} data-index={index} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</svelte:element>
