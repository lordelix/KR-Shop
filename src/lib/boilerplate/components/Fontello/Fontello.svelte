<script lang="ts">
	import type { FontelloProps } from './Fontello.d'

	let { baseName = 'Fontello', class: classProp, name, ...restProps }: FontelloProps = $props()
</script>

<i class={[baseName, classProp, 'fontello-' + name]} aria-hidden="true" {...restProps}></i>
