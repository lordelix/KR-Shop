<script lang="ts">
	import './Toplink.scss'
	import { onMount, tick } from 'svelte'
	import type { ToplinkProps } from './Toplink'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let { class: classProp, baseName = 'Toplink', ...restProps }: ToplinkProps = $props()

	// -----------------------------------------------------------------------------------------------

	let isVisible = $state(false)
	const className = $derived([baseName, classProp, !isVisible || baseName + '--visible'])

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	function handleOffset() {
		isVisible = window.scrollY > 200
	}

	onMount(async () => {
		await tick()

		if (document.querySelectorAll('.' + baseName).length > 1) {
			throw new Error(
				'The <Toplink /> component should only be used once per page. Found multiple instances.'
			)
		}
	})
</script>

<svelte:window on:scroll|passive={handleOffset} />

<button onclick={scrollToTop} aria-label="Scroll to top" class={className} {...restProps}>
	<svg class="{baseName}__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
		<!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
		<path
			d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
	</svg>
</button>
