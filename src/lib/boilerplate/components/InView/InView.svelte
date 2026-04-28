<script lang="ts">
	import './InView.scss'
	import { onMount, onDestroy } from 'svelte'
	import type { InViewProps } from './InView'

	import makeBEM from '$lib/boilerplate/utils/makeBem'

	let {
		baseName = 'InView',
		children,
		class: _class,
		threshold = 20,
		transition = 'fade'
	}: InViewProps = $props()

	const bem = $derived(makeBEM(baseName))

	let wrapper: HTMLElement
	let observer: IntersectionObserver

	let isInView = $state(false)
	let classNames = $derived([
		bem.block,
		_class,
		transition && bem.modifier(transition),
		isInView && bem.modifier('visible')
	])

	onMount(() => {
		observer = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting) {
					isInView = true
					observer.unobserve(wrapper)
				}
			},
			{ threshold: threshold / 100 }
		)

		observer.observe(wrapper)
	})

	onDestroy(() => {
		if (observer) {
			observer.disconnect()
		}
	})
</script>

<div bind:this={wrapper} class={classNames}>
	{@render children()}
</div>
