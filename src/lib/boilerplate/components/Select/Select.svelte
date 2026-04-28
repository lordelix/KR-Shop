<script lang="ts">
	import './Select.css'
	import type { SelectProps } from './Select.d'
	import randomString from '$lib/boilerplate/utils/randomString'
	import makeBEM from '$lib/boilerplate/utils/makeBem'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		label = '',
		name = 'select',
		options = [],
		required = false,
		values = options,
		value = $bindable(values[0]),
		placeholder = '',
		disabled = false,
		id = 'select-' + randomString(),
		baseName = 'Select',
		onChange,
		class: className,
		...restProps
	}: SelectProps = $props()

	// --- [ BEM ] -----------------------------------------------------------------------------------

	// svelte-ignore state_referenced_locally
	const { block, element } = makeBEM(baseName)
</script>

<div {...restProps} class={[block, className]}>
	{#if label}
		<label class={element('label')} for={id}>{label}</label>
	{/if}
	<!-- svelte-ignore event_directive_deprecated -->
	<select
		{id}
		{name}
		{required}
		{disabled}
		class={element('input')}
		bind:value
		on:change={onChange}>
		{#if placeholder}
			<option value="" selected>{placeholder}</option>
		{/if}
		{#each options as option, i (i)}
			<option value={values[i]}>{option}</option>
		{/each}
	</select>
</div>
