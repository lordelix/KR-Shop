import type { Snippet } from 'svelte'
import type { HTMLAttributes } from 'svelte/elements'

export type LightboxProps = Prettify<
	ComponentBaseProps & {
		images?: {
			src: string
			alt: string
		}[]
		children?: Snippet
	}
> &
	HTMLAttributes<HTMLDivElement>
