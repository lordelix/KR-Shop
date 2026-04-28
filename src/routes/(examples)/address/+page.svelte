<script>
	const address = {
		name: 'Musterfirma GmbH',
		title: 'Mustergültige Muster und Formen',
		street: 'Musterstraße 33',
		town: '336655 Musterstadt',
		phone: '+49 555 232541',
		fax: '+49 555 232542',
		email: 'mail@musterfirma.com'
	}
</script>

<h1>Address Component</h1>

<p>
	Die Address-Komponente stellt Kontaktdaten strukturiert und benutzerfreundlich dar. Sie
	unterstützt verschiedene Darstellungsformen je nach Art der übergebenen URL.
</p>

<h2>Mit vollständiger URL (https://)</h2>
<p>
	Wenn eine vollständige URL mit Protokoll übergeben wird, wird sie als anklickbarer Link
	dargestellt:
</p>

<Address {...address} web="https://musterfirma.com/de" />

<h2>Mit relativer URL (ohne Protokoll)</h2>
<p>
	Bei URLs ohne Protokoll wird nur der Text angezeigt, ohne dass ein anklickbarer Link erstellt
	wird:
</p>

<Address {...address} web="musterfirma.com/de" />
