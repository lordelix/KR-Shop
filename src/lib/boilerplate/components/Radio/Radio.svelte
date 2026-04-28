<script lang="ts">
	import { uniqueId } from 'lodash-es'
	import './Radio.css'

	import type { RadioProps } from './Radio.d'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		id = uniqueId('radio-'),
		baseName = 'Radio',
		class: classProp,
		checked,
		value,
		group = $bindable(checked ? value : ''),
		label,
		name,
		required,
		...restProps
	}: RadioProps = $props()
</script>

<label {...restProps} class={[baseName, classProp, { [baseName + '--active']: checked }]}>
	<input
		{checked}
		id={id as string}
		{name}
		{required}
		{value}
		class={baseName + '__input'}
		type="radio"
		bind:group />
	{#if label}
		<span class={baseName + '__label'}>{@html label}</span>
	{/if}
</label>
