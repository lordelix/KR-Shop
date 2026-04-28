<script lang="ts">
	import './Accordion.css'

	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'

	import { type AccordionProps } from './Accordion.d'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		class: classProp,
		baseName = 'Accordion',

		children,
		...restProps
	}: AccordionProps = $props()

	// -----------------------------------------------------------------------------------------------

	let activeItem = writable(null)

	setContext('Accordion:active-item', activeItem)
</script>

<ul class={[baseName, classProp]} {...restProps}>
	{@render children?.()}
</ul>
