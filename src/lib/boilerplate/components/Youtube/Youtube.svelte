<script lang="ts">
	import './YouTube.css'

	import type { YouTubeProps } from './YouTube'

	// --- [ Setup ] ---------------------------------------------------------------------------------

	let {
		class: classProp,
		baseName = 'YouTube',
		videoId = false,
		allow = ['encrypted-media'],
		...restProps
	}: YouTubeProps = $props()
</script>

<div class={[baseName, classProp]} {...restProps}>
	<iframe
		class={baseName + '__frame'}
		src={'https://www.youtube-nocookie.com/embed/' + videoId}
		title="Youtube video player"
		frameborder="0"
		allow={allow.join('; ')}
		allowfullscreen></iframe>
</div>
