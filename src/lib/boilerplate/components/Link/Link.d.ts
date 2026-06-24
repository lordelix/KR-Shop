import type { Snippet } from 'svelte'
import type { FontelloProps } from '../Fontello/Fontello'

export type LinkProps = ComponentBaseProps & {
	to?: string
	target?: '_blank' | '_self'
	fontello?: FontelloProps['name']
	rel?: 'follow' | 'nofollow noopener'
	label?: string
	onClick?: () => void
	children?: Snippet
}
