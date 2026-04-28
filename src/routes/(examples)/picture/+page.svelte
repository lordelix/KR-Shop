<Wrapper>
	<h1>Picture</h1>

	<!-- Ohne Dimensionsangaben -->
	<Picture
		src="http://cdn.klickrhein.de/boilerplate/placeholder/sweden-small.webp"
		tablet="http://cdn.klickrhein.de/boilerplate/placeholder/sweden.webp"
		caption="Schweden ist sehr schön!" />

	<!-- Mit Dimensionsangaben -->
	<Picture
		src={['http://cdn.klickrhein.de/boilerplate/placeholder/sweden-small.webp', 620, 413]}
		tablet={['http://cdn.klickrhein.de/boilerplate/placeholder/sweden.webp', 1024, 576]}
		caption="Schweden ist sehr schön!" />
</Wrapper>
