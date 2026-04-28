<script>
	const { data } = $props()
</script>

<h1>Speisekarte</h1>

<Client browser>
	<XioniMenuCard menuCard={data.menuCard} />
</Client>
