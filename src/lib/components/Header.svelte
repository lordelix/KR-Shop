<script lang="ts">
	import { Wrapper } from '$lib/boilerplate/components'
	import type { Snippet } from 'svelte'
	import './Header.scss'

	type HeaderProps = { left?: Snippet; center?: Snippet; right?: Snippet }
	let { left, center, right }: HeaderProps = $props()
</script>

<header class="Header">
	<Wrapper size="large" class="Header__inner">
		<div class="Header__slot Header__slot--left">
			{#if left}
				{@render left()}
			{/if}
		</div>

		<div class="Header__slot Header__slot--center">
			{#if center}
				{@render center()}
			{/if}
		</div>

		<div class="Header__slot Header__slot--right">
			{#if right}
				{@render right()}
			{/if}
		</div>
	</Wrapper>
</header>
