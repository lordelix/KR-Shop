<script lang="ts">
	import './Checkbox.scss'

	import type { CheckboxProps } from './Checkbox.d'

	let {
		class: classProp,
		baseName = 'Checkbox',
		checked = $bindable(),
		label,
		name,
		required,
		value = 'on',
		onChange,
		...restProps
	}: CheckboxProps = $props()

	// svelte-ignore state_referenced_locally
	if (label && required) {
		label += '*'
	}
</script>

<label {...restProps} class={[baseName, classProp, { [baseName + '--active']: checked }]}>
	<input
		{name}
		{required}
		class={baseName + '__input'}
		type="checkbox"
		{value}
		bind:checked
		onchange={() => onChange?.(!!checked)} />
	<span class={baseName + '__label'}>{@html label}</span>
</label>
