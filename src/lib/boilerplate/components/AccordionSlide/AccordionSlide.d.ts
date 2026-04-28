import type { ComponentBaseProps } from '$lib/boilerplate/boilerplate'

export type AccordionSlideProps = ComponentBaseProps & {
	children?: Snippet
	title: string
}
