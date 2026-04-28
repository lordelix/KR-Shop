import type { HTMLAttributes } from 'svelte/elements'

export type SelectProps = {
	label?: string
	name?: string
	options?: Array<string | number>
	required?: boolean
	values?: Array<string | number>
	value?: string | number
	placeholder?: string
	disabled?: boolean
	onChange?: (event: Event & { currentTarget: EventTarget & HTMLSelectElement }) => void
} & ComponentBaseProps &
	HTMLAttributes<HTMLDivElement>
