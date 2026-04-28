<script lang="ts">
	import './AccordionSlide.scss'

	import { getContext } from 'svelte'
	import { slide } from 'svelte/transition'
	import { uniqueId } from 'lodash-es'
	import makeBEM from '$lib/boilerplate/utils/makeBem'
	import type { AccordionSlideProps } from './AccordionSlide'
	import type { Writable } from 'svelte/store'

	// --- [ Setup ] ---------------------------------------------------------------------------------

	let {
		id = uniqueId('accordion-side-'),
		class: classProp,
		baseName = 'AccordionSlide',

		title,

		children,
		...restProps
	}: AccordionSlideProps = $props()

	const bem = $derived(makeBEM(baseName))

	// -----------------------------------------------------------------------------------------------

	const activeItem = getContext('Accordion:active-item') as Writable<null | string>

	let collapsed = $derived(id !== $activeItem)
	let className = $derived([
		baseName,
		classProp,
		!!collapsed || bem.modifier('expanded'),
		!collapsed || bem.modifier('collapsed')
	])

	function handleClick() {
		activeItem.set($activeItem === id ? null : id)
	}
</script>

<li {id} onclick={handleClick} class={className} {...restProps}>
	<h5 class="{baseName}__title">
		{title}
	</h5>
	{#if !collapsed}
		<div in:slide out:slide class="{baseName}__content">
			{@render children()}
		</div>
	{/if}
</li>
