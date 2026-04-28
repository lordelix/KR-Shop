<script lang="ts">
	import './Textarea.css'

	import type { TextareaProps } from './Textarea'
	import { uniqueId } from 'lodash-es'
	import makeBEM from '$lib/boilerplate/utils/makeBem'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		id = uniqueId('textarea-'),
		class: classProp,
		baseName = 'Textarea',
		label,
		name,
		rows = 4,
		value = $bindable(),
		placeholder,
		required = false,
		...restProps
	}: TextareaProps = $props()

	// svelte-ignore state_referenced_locally
	const bem = makeBEM(baseName)
</script>

<div class={[baseName, required ? bem.modifier('required') : undefined, classProp]} {...restProps}>
	{#if label}
		<label class={bem.element('label')} for={id}> {label} </label>
	{/if}
	<textarea
		class={baseName + '__input'}
		{required}
		{id}
		{name}
		rows={Number(rows)}
		{placeholder}
		bind:value></textarea>
</div>
