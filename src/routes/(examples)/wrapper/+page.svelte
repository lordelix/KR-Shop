<h1>Wrapper</h1>

<div>
	<Wrapper>
		<p>Der Wrapper mit einer maximalen Breite von 1024px</p>
	</Wrapper>

	<Wrapper size="small">
		<p>Der kleine Wrapper mit einer maximalen Breite von 768px</p>
	</Wrapper>

	<Wrapper size="large">
		<p>Der große Wrapper mit einer maximalen Breite von 1280px</p>
	</Wrapper>

	<Wrapper tag="section">
		<p>Der Wrapper wird zur Section. Hier ist jeder HTML Tag möglich.</p>
	</Wrapper>
</div>

<style>
	div :global(.Wrapper:first-child) {
		background: lime;
	}

	div :global(.Wrapper:nth-child(2)) {
		background: yellow;
	}

	div :global(.Wrapper:nth-child(3)) {
		background: pink;
	}

	div :global(.Wrapper:last-child) {
		background: lightblue;
	}
</style>
