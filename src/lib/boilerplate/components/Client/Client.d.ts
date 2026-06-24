import type { Snippet } from 'svelte'

export type ClientProps = {
	browser?: boolean
	server?: boolean
	children: Snippet
}
