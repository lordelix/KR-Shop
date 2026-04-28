<script lang="ts">
	import './Lightbox.scss'
	import type { LightboxProps } from './Lightbox.d'
	import { onMount } from 'svelte'
	import makeBEM from '$lib/boilerplate/utils/makeBem'
	import { Fontello, Modal } from '..'

	let {
		images = [],
		baseName = 'Lightbox',
		children,
		class: className,
		...restProps
	}: LightboxProps = $props()

	let lightbox: HTMLElement
	let modal: Modal
	// svelte-ignore state_referenced_locally
	let lightboxImages = $state([...images])
	let index = $state(-1)

	// svelte-ignore state_referenced_locally
	const bem = makeBEM(baseName)
	const activeImage = $derived(lightboxImages[index] || {})

	export function open(i: number = -1): void {
		if (i >= 0) index = i
		modal.open()
	}

	function getImages() {
		lightbox.querySelectorAll('img[data-lightbox]').forEach((image, i) => {
			lightboxImages.push({
				src: image.getAttribute('data-lightbox') || '',
				alt: image.getAttribute('alt') || ''
			})

			image.addEventListener('click', () => open(i))
		})
	}

	function slideForward() {
		index = index + 1 >= lightboxImages.length ? 0 : index + 1
	}

	function slideBack() {
		index = index === 0 ? lightboxImages.length - 1 : index - 1
	}

	// Init
	onMount(getImages)
</script>

<div class={[baseName, className]} bind:this={lightbox} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</div>
<Modal class={bem.element('modal')} bind:this={modal}>
	<!-- svelte-ignore event_directive_deprecated -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class={[
			bem.element('navigate'),
			bem.elementModifier('navigate')('prev'),
			{ $invisible: !(lightboxImages.length > 2) }
		]}
		on:keydown
		on:click={slideBack}>
		<Fontello name="left-open" />
	</div>

	<div
		class={[
			bem.element('navigate'),
			bem.elementModifier('navigate')('next'),
			{ $invisible: !(lightboxImages.length > 2) }
		]}
		on:keydown
		on:click={slideForward}>
		<Fontello name="right-open" />
	</div>

	{#if activeImage.alt}
		<div class={bem.element('textbox')}>
			<p class="$m-0">
				{activeImage.alt}
			</p>
		</div>
	{/if}
	<img class={bem.element('active-image')} src={activeImage.src} alt={activeImage.alt} />
</Modal>

{#each lightboxImages as { src, alt } (src)}
	<img {src} {alt} hidden aria-hidden="true" loading="lazy" />
{/each}
