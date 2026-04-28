<script lang="ts">
	import './ButtonRow.scss'

	import type { ButtonRowProps } from './ButtonRow'

	let {
		class: classProp,
		baseName = 'ButtonRow',
		children,
		...restProps
	}: ButtonRowProps = $props()

	// --- [ Props ] ---------------------------------------------------------------------------------
</script>

<div class={[baseName, classProp]} {...restProps}>
	{@render children?.()}
</div>
