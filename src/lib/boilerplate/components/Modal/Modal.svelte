<script lang="ts">
	import './Modal.scss'

	import { onMount } from 'svelte'

	import type { ModalProps } from './Modal'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		baseName = 'Modal',
		title,
		isOpen = false,
		class: className,

		children,
		footer,

		onClose,
		onOpen
	}: ModalProps = $props()

	// -----------------------------------------------------------------------------------------------

	let modal: HTMLDialogElement

	export function close() {
		modal.close()

		if (onClose) onClose()
	}

	export function open() {
		modal.showModal()

		if (onOpen) onOpen()
	}

	function onKeyDown({ key }: KeyboardEvent) {
		if (key === 'Escape') close()
	}

	onMount(() => {
		if (isOpen) open()
	})
</script>

<dialog bind:this={modal} class={[baseName, className]}>
	<button class="{baseName}__close-button" onclick={close}>Schließen</button>
	{#if title}
		<header class="{baseName}__header">{title}</header>
	{/if}
	<main class="{baseName}__body">
		{@render children?.()}
	</main>
	{#if footer}
		<footer class="{baseName}__footer">
			{@render footer?.()}
		</footer>
	{/if}
</dialog>

<svelte:window on:keydown={onKeyDown} />
