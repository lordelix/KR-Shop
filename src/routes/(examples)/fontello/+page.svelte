<script>
	import fontello from '$lib/boilerplate/actions/fontello'

	const icons = [
		'angle-circled-left',
		'angle-circled-right',
		'angle-down',
		'angle-left',
		'angle-right',
		'angle-up',
		'attention-circled',
		'attention',
		'basket',
		'bed',
		'calendar-empty',
		'calendar-x',
		'cancel-circled',
		'cancel',
		'desktop',
		'down',
		'eye',
		'facebook',
		'fax',
		'file-pdf',
		'globe',
		'graduation-cap',
		'instagram',
		'left-open',
		'link',
		'mail',
		'minus',
		'ok',
		'phone',
		'plus',
		'print',
		'right-open',
		'smile',
		'ticket',
		'up-open',
		'user',
		'wine',
		'youtube-play'
	]
</script>

<h1>Fontello Icon</h1>

<ul class="$mt-2" use:fontello={'wine'}>
	<li>Lorem ipsum</li>
	<li>Consectetur adipisicing</li>
	<li>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, omnis quae minima est et error
		deserunt impedit molestiae. Provident voluptates rerum saepe quasi repellendus mollitia
		accusamus deserunt, a incidunt consectetur.
	</li>
	<li>Dolor sit amet</li>
</ul>

<h2>Verfügbare Icons</h2>

<ul>
	{#each icons as name (name)}
		<li>
			<Fontello {name} />
			{name}
		</li>
	{/each}
</ul>
