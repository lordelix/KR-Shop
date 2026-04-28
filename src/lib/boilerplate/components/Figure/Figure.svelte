<script lang="ts">
	import './Figure.css'
	import type { FigureProps } from './Figure.d'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		baseName = 'Figure',
		class: classProp,
		src,
		alt,
		width,
		height,
		caption,
		loading,
		placeholder,
		...restProps
	}: FigureProps = $props()

	// -----------------------------------------------------------------------------------------------

	// svelte-ignore state_referenced_locally
	const style = placeholder ? `background-image:url(${placeholder})` : undefined
</script>

<figure class={[baseName, classProp]} {...restProps}>
	<img
		class="{baseName}__image"
		{src}
		{alt}
		{width}
		{height}
		{style}
		loading={placeholder ? 'lazy' : loading} />
	{#if caption}
		<figcaption class="{baseName}__caption">
			{caption}
		</figcaption>
	{/if}
</figure>
