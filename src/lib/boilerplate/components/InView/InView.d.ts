import type { Snippet } from 'svelte'

export type InViewProps = {
	class?: string
	children: Snippet

	baseName?: string
	transition?: 'fade' | 'scale' | 'fade-ltr' | 'fade-rtl'
	threshold?: number
}
