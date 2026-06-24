import type { HTMLAttributes } from 'svelte/elements'

declare global {
	type ComponentBaseProps = { baseName?: string } & HTMLAttributes<HTMLElement>

	type Prettify<T> = {
		[K in keyof T]: T[K]
	} & {}
}

export {}
