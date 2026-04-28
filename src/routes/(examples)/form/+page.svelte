<h1>Formular</h1>

<Form moduleId="1594">
	<div class="$gap $flex $flex-column">
		<Input name="fistname" label="Vorname" placeholder="Max" />
		<Input name="lastname" label="Nachname" placeholder="Mustermann" required />
		<Input name="street" label="Straße & Hausnummer" />
		<Input name="email" label="E-Mail" required />
		<Input name="town" label="PLZ & Ort" />

		<div class="$gap $flex">
			<Radio name="voice" value="rye-bun" label="Roggen Vollkorn Brötchen" />
			<Radio name="voice" value="weat-bun" label="Weizenbrötchen" />
		</div>

		<Select
			name="topping"
			label="Welcher Belag soll es sein?"
			options={['Schinken', 'Salami', 'Käse']} />
		<Textarea label="Ihre Nachricht an uns" name="message" />

		<p class="$mt-0 $font-small">
			Wie wir mit Ihren Daten umgehen, lesen Sie in unserer <a href="/datenschutz"
				>Datenschutzerklärung</a
			>.
		</p>
	</div>

	<Button>Abschicken</Button>

	{#snippet done()}
		<p class="$font-bold">Vielen dank für Ihre Anfrage.</p>
		<p>Wir werden uns schnellstmöglich bei Ihnen melden.</p>
	{/snippet}
</Form>
