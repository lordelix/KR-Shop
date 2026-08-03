<script>
	import stammdaten from '$stammdaten'
</script>

<svelte:head>
	<title>Vertrag widerrufen | {stammdaten.title}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<Wrapper size="small" class="$px-0">
	<h1>Widerrufsformular</h1>
	<h2>Möchten Sie Ihre Bestellung widerrufen?</h2>
	<p>
		Bitte füllen Sie das folgende Formular aus und klicken Sie zum Abschluss auf den Button
		"Widerruf bestätigen".
	</p>
	<Form moduleId="0">
		<Input class="$mb" name="name" label="Vor- & Nachname" required />
		<Input class="$mb" name="email" label="E-Mail" type="email" required />
		<Textarea
			class="$mb"
			name="beschreibung"
			label="Beschreibung, z.B. Bestellnummer"
			placeholder="Bestellnummer oder -datum, Produkt oder Beschreibung"
			required />
		<p class="$font-small">
			Wie wir mit Ihren Daten umgehen, lesen Sie in unserer <a href="/datenschutz/"
				>Datenschutzerklärung</a
			>.
		</p>
		<Button>Widerruf bestätigen</Button>
		{#snippet done()}
			<div class="vielen-dank">
				<h3>Hiermit bestätigen wir den Eingang Ihrer Widerrufserklärung</h3>
				<p>Sie erhalten gleichzeitig eine Benachrichtigung per E-Mail.</p>
				<p>Wir werden den Sachverhalt prüfen und uns kurzfristig melden.</p>
				<p>Ihr Team vom</p>
				<h3>{stammdaten.name}</h3>
			</div>
		{/snippet}
	</Form>
	<Link to="/widerrufsrecht/" fontello="right" class="$my $row-reverse">Widerrufsrecht</Link>
</Wrapper>

<style lang="scss">
	@use '$styles/colors';

	.vielen-dank {
		border: 0.5rem solid colors.$gray;
		color: colors.$dark;
		padding: 2rem;
	}
</style>
