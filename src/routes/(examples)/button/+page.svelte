<script lang="ts">
	import { Button, ButtonRow } from '$lib/boilerplate/components'
</script>

<h1>Button</h1>

<ul>
	<li><Button>Hallo</Button></li>
	<li class="$mt"><Button fontello="attention-circled" class="$row-reverse">Hinweis</Button></li>
	<li class="$mt"><Button fontello="youtube-play">YouTube</Button></li>
</ul>

<hr />

<h2 class="$my-3">ButtonRow</h2>

<ButtonRow>
	<Button>Standard</Button>
	<Button variant="primary">Primär</Button>
	<Button variant="secondary">Sekundär</Button>
</ButtonRow>

<code class="$mt-4"
	><pre>{`<ButtonRow>
  <Button>Standard</Button>
  <Button variant="primary">Primär</Button>
  <Button variant="secondary">Sekundär</Button>
</ButtonRow>`}</pre></code>

<style>
	code {
		position: relative;
		display: block;
		padding: 1rem;
		background-color: aliceblue;
		border-bottom-left-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
		outline: 1px solid rgb(210, 234, 255);
		outline-offset: -1px;
	}

	code::before {
		position: absolute;
		top: 0;
		left: 0;
		transform: translateY(-100%);
		content: 'Code:';
		font-size: small;
		padding: 0.75rem;
		width: 100%;
		background-color: rgb(210, 234, 255);
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
	}

	code pre {
		margin: 0;
		line-height: 175%;
	}
</style>
