export type NavProps = {
	baseName?: string
	class?: string
	routes: NavRoute[]
	sticky?: boolean
}

type NavRoute = {
	path?: string
	name?: string
	class?: string
	routes?: NavRoute[]
	target?: '_blank'
	title?: string
}
