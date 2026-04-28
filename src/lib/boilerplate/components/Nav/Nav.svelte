<script lang="ts">
	import './Nav.scss'

	import { page } from '$app/state'
	import { throttle } from 'lodash-es'
	import type { NavProps } from './Nav.d.ts'

	// --- [ Components ] ----------------------------------------------------------------------------

	import Burger from '../NavBurger/NavBurger.svelte'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let { routes, baseName = 'Nav', sticky, class: className }: NavProps = $props()

	// -----------------------------------------------------------------------------------------------

	let nav: HTMLElement
	let active = $state(false)
	let hoverState: number = $state(-1)

	let classNames = $derived([
		baseName,
		className,
		!active || baseName + '--active',
		!sticky || baseName + '--sticky'
	])

	function handleOffset() {
		const className = baseName + '--offset'
		const isOffset = nav.getBoundingClientRect().top === 0

		if (isOffset && !nav.classList.contains(className)) {
			nav.classList.add(className)
		} else if ((!isOffset && nav.classList.contains(className)) || window.pageYOffset === 0) {
			nav.classList.remove(className)
		}
	}

	const throttledHandleOffset = throttle(handleOffset, 250)

	let isCurrentPath = $derived((target: URL['pathname'] | undefined) => {
		if (!target || target === '/') return false

		return page.url.pathname.includes(target)
	})

	let isActivePath = $derived((target: URL['pathname'] | undefined) => {
		if (!target) return false

		return page.url.pathname === target
	})
</script>

<svelte:window on:scroll|passive={throttledHandleOffset} />

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<nav bind:this={nav} class={classNames} onclick={() => (active = false)}>
	<ul class={baseName + '__ul'} aria-label="navigation path">
		{#each routes as route, i (i)}
			<li
				class={[baseName + '__li', route.class]}
				onmouseenter={() => (hoverState = i)}
				onmouseleave={() => (hoverState = -1)}>
				{#if route.name}
					<svelte:element
						this={route.path ? 'a' : 'span'}
						id="route-{i}"
						class={[
							baseName + '__a',
							isActivePath(route.path) ? baseName + '__a--active' : null,
							isCurrentPath(route.path) ? baseName + '__a--current' : null
						]}
						href={route.path}
						target={route.target}
						title={route.title}
						aria-current={isActivePath(route.path) ? 'page' : undefined}>
						{route.name}
					</svelte:element>
				{/if}

				{#if !!route.routes?.length}
					<ul class={[baseName + '__ul-ul', hoverState !== i || baseName + '__ul-ul--visible']}>
						{#each route.routes as subRoute, o (o)}
							<li class={baseName + '__li-li'}>
								<a
									id="route-{i}-{o}"
									class={[
										baseName + '__a-a',
										isActivePath(subRoute.path) ? baseName + '__a-a--active' : undefined,
										subRoute.class
									]}
									aria-current={isActivePath(subRoute.path) ? 'page' : undefined}
									href={subRoute.path}
									target={subRoute.target}
									title={subRoute.title}>
									{subRoute.name}
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	</ul>
</nav>

<Burger {active} onclick={() => (active = !active)} />
