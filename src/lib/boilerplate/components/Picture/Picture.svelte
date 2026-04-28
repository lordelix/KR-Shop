<script lang="ts">
	import './Picture.css'
	import makeBEM from '$lib/boilerplate/utils/makeBem'
	import type { PictureProps } from './Picture'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		baseName = 'Picture',
		class: classProp,
		id,
		src,
		tablet,
		desktop,
		widescreen,
		align,
		placeholder,
		loading = 'eager',
		...restProps
	}: PictureProps = $props()

	// svelte-ignore state_referenced_locally
	const bem = makeBEM(baseName)

	// -----------------------------------------------------------------------------------------------

	// svelte-ignore state_referenced_locally
	const style = placeholder ? `background-image:url(${placeholder})` : undefined

	function extractProps(src: PictureProps['src']) {
		if (typeof src === 'string') {
			return {
				srcset: src
			}
		}

		return {
			srcset: src[0],
			width: src[1],
			height: src[2] || 'auto'
		}
	}

	const className = $derived([baseName, classProp, !align || bem.modifier(align)])
</script>

<picture>
	{#if widescreen}
		<source {...extractProps(widescreen)} media="(min-width: 1441px)" />
	{/if}
	{#if desktop}
		<source {...extractProps(desktop)} media="(min-width: 1025px)" />
	{/if}
	{#if tablet}
		<source {...extractProps(tablet)} media="(min-width: 621px)" />
	{/if}
	<img {...extractProps(src)} {style} {...restProps} class={className} {loading} />
</picture>
