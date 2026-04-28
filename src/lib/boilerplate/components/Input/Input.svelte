<script lang="ts">
	import './Input.scss'
	import randomString from '$lib/boilerplate/utils/randomString'
	import type { InputProps } from './Input'
	import makeBEM from '$lib/boilerplate/utils/makeBem'

	let {
		id = 'input-' + randomString(),
		baseName = 'Input',
		class: classProp,
		label,
		name,
		placeholder,
		readonly,
		required,
		type = 'text',
		value = $bindable(),
		error,
		multiple = false,
		...restProps
	}: InputProps = $props()

	// svelte-ignore state_referenced_locally
	const BEM = makeBEM(baseName)
</script>

<div
	class={[
		baseName,
		classProp,
		{ [BEM.modifier('has-error')]: !!error, [BEM.modifier('read-only')]: !!readonly }
	]}>
	{#if label}
		<label class={baseName + '__label'} for={id}>
			{label}

			{#if required}*{/if}
		</label>
	{/if}
	<input
		{id}
		{name}
		{placeholder}
		{required}
		{readonly}
		{type}
		{multiple}
		{...restProps}
		class={baseName + '__input'}
		bind:value />
</div>
