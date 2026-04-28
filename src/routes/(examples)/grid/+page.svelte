<h1>Grid</h1>
{#each [0, 2, 4, 6, 8] as gap (gap)}
	<hr />

	<p>
		<strong class="h3">Gap {gap}</strong>
	</p>
	<Grid {gap}>
		<Grid size="tablet-1-2 desktop-1-3">
			<div style="background-color:brown">Frank</div>
		</Grid>
		<Grid size="tablet-1-2 desktop-2-3">
			<div style="background-color:blueviolet">Felix</div>
		</Grid>
		<Grid size="tablet-1-3">
			<div style="background-color:darkblue">Peter</div>
		</Grid>
		<Grid size="tablet-1-3">
			<div style="background-color:tomato">Susi</div>
		</Grid>
		<Grid size="tablet-1-3">
			<div style="background-color:black">Uwe</div>
		</Grid>
	</Grid>
{/each}

<style lang="scss">
	div {
		font-size: 1.25rem;
		font-weight: bold;
		padding: 1rem;
		text-align: center;
		color: white;
	}
</style>
