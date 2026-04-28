<script lang="ts">
	import makeBEM from '$lib/boilerplate/utils/makeBem'
	import './XioniShopNav.css'
	import type { XioniShopNavProps } from './XioniShopNav.d'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		activeGroup,
		groups,
		basePath = '/',
		class: className,
		...restProps
	}: XioniShopNavProps = $props()

	const { block, element } = makeBEM('XioniShopNav')

	// -----------------------------------------------------------------------------------------------

	function makeLink(slug: string, id: number | string) {
		return basePath + `${slug}-c-${id}/`
	}
</script>

<nav class={[block, className]} {...restProps}>
	<ul class={[element('ul'), '$_flex $_flex-wrap $_gap-1/2 $_flex-column@desktop']}>
		{#each groups as { id, slug, name, subgroups }}
			<li class={element('li')}>
				<a
					href={makeLink(slug, id)}
					class={[element('a'), id !== activeGroup?.id || element('a--active')]}>
					{name}
				</a>
				{#if subgroups.length}
					<ul class="{[element('ul-ul'), '$ml-1/2 $font-small']} ">
						{#each subgroups as { id, slug, name }}
							<li class={element('li-li')}>
								<a
									href={makeLink(slug, id)}
									class={[element('a-a'), id !== activeGroup?.id || element('a-a--active')]}>
									{name}
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	</ul>
</nav>
