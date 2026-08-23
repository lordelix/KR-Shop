<script lang="ts">
	import '$lib/styles/styles.scss'
	import messages from '$lib/messages'
	import type { XioniShop } from '$lib/boilerplate/xioni/types.js'
	import linkedData from '$lib/linkedData'

	// --- [ Components ] ----------------------------------------------------------------------------

	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import {
		LinkedData,
		MessageBus,
		Nav,
		type NavProps,
		Toplink,
		Wrapper
	} from '$lib/boilerplate/components'

	// --- [ Setup ] ---------------------------------------------------------------------------------

	const { data, children } = $props()

	function mapGroupToRoutes(groups: XioniShop.Group[] | null | undefined): NavProps['routes'] {
		return (groups || []).map(group => ({
			name: group.name,
			path: [group.slug, 'c', group.id].join('-'),
			routes: mapGroupToRoutes(group.subgroups || [])
		}))
	}

	const routes = $derived([
		{
			name: 'Startseite Shop',
			path: '/'
		},
		...mapGroupToRoutes(data.groups),
		{
			routes: [
				{
					name: 'AGB',
					path: '/agb'
				},
				{
					name: 'Widerrufsrecht',
					path: '/widerrufsrecht'
				},
				{
					name: 'Versandkosten',
					path: '/agb#versandkosten'
				}
			]
		},
		{
			routes: [
				{
					name: 'Impressum',
					path: '/impressum'
				},
				{
					name: 'Datenschutz',
					path: '/datenschutz'
				}
			]
		},
		{
			routes: [
				{
					name: 'example.com',
					path: 'https://example.com'
				}
			]
		}
	])
</script>

<svelte:head>
	<meta name="theme-color" content="#6e767e" />
	<meta property="og:url" content="https://example.com" />
	<meta property="og:type" content="shop" />
	<meta property="og:title" content="" />
	<meta property="og:description" content="" />
	<meta property="og:image" content="/meta/og-image.jpg" />
	<meta name="thumbnail" content="/meta/og-thumb.png" />
	<LinkedData data={linkedData} />
</svelte:head>

<div data-layout="root">
	<Header>
		{#snippet left()}
			<img src="/meta/favicon-32.png" alt="Shop" class="$mr" /><b>Biene</b>
		{/snippet}
		{#snippet center()}
			<h1 class="h3 $m-0">Willkommen</h1>
		{/snippet}
		{#snippet right()}
			<Nav {routes} />
		{/snippet}
	</Header>
	<Wrapper tag="main" size="large">
		{@render children?.()}
	</Wrapper>
	<Footer />
</div>
<MessageBus {messages} />
<Toplink />
