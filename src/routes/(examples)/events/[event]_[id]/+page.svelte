<script lang="ts">
	import {
		Button,
		Checkbox,
		Form,
		Input,
		Link,
		Textarea,
		Wrapper,
		XioniEvent
	} from '$lib/boilerplate/components/index.js'

	const { data } = $props()
	const event = $derived(data.event)
</script>

<Wrapper class="$py-4">
	<XioniEvent class="$my-2" {event} />

	{#if event.flags?.includes('anmeldung')}
		<h3>Jetzt anmelden</h3>
		<Form moduleId="4">
			<input type="hidden" name="event-id" value={event.id} />
			<input type="hidden" name="event-title" value={event.title} />

			<div class="$flex $flex-column $gap">
				<Input name="Teilnehmer" label="Teilnehmer" placeholder="Vor- und Nachname" required />
				<Textarea name="Anschrift" label="Anschrift" required />
				<Input name="Telefon" label="Telefonnummer" />
				<Input name="Email" type="email" label="E-Mail-Adresse" required />
				<Textarea name="Nachricht" label="Nachricht" rows="2" />
				<Checkbox
					name="datenschutz"
					label="Ich habe die <a href='/datenschutz'>Datenschutzerklärung</a> zur Kenntnis genommen und stimme zu, dass meine Angaben und Daten zur Beantwortung meiner Anfrage elektronisch erhoben und gespeichert werden."
					value="akzeptiert"
					required />
				<Button class="$w-fit-content">Abschicken</Button>
			</div>

			{#snippet done()}
				<hr />
				<p>Vielen Dank für Ihre Anmeldung.</p>
			{/snippet}
		</Form>
	{/if}

	<div class="$text-center $mt-2">
		<Link fontello="angle-left" to="../">Zurück zur Übersicht</Link>
	</div>
</Wrapper>
