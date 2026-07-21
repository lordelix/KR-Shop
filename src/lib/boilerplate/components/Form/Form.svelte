<script lang="ts">
	import { useMailer } from '$lib/boilerplate/xioni/mailer/Message'
	import { writable } from 'svelte/store'
	import type { XioniApiErrorResponse } from '$lib/boilerplate/xioni/types'
	import type { SchemaMailerMessageRequestBody } from '$lib/boilerplate/xioni/api/api.d'
	import type { FormProps } from './Form.d'
	import makeBEM from '$lib/boilerplate/utils/makeBem'
	import { Message, Modal } from '..'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let {
		class: className,
		baseName = 'Form',
		moduleId,
		children,
		done,
		onSuccess,
		onError,
		onSuccessModalClose = () => undefined,
		onErrorModalClose = () => undefined
	}: FormProps = $props()

	// svelte-ignore state_referenced_locally
	const { block, element } = makeBEM(baseName)

	// -----------------------------------------------------------------------------------------------

	let formRef: HTMLFormElement
	let doneModalRef: Modal
	let errorModalRef: Modal

	const formMail = useMailer()
	const formError = writable<XioniApiErrorResponse | undefined>()
	const isFormDone = writable(false)
	const isLoading = writable(false)

	export function submit(e: Event) {
		e.preventDefault()

		const formData = new FormData(formRef)

		formData.set('module-id', moduleId.toString())
		isLoading.set(true)
		formError.set(undefined)

		formMail
			.send(formData as unknown as SchemaMailerMessageRequestBody)
			.then(() => {
				formRef.reset()
				isFormDone.set(true)
				doneModalRef.open()

				if (onSuccess) {
					onSuccess()
				}
			})
			.catch(error => {
				formError.set(error)
				errorModalRef.open()

				if (onError) {
					onError(error)
				}
			})
			.finally(() => isLoading.set(false))
	}
</script>

<form class={[block, className]} bind:this={formRef} onsubmit={submit}>
	{@render children?.()}
</form>

<Modal bind:this={doneModalRef} onClose={onSuccessModalClose}>
	{#if done}
		{@render done?.()}
	{:else}
		<p>Vielen Dank.</p>
	{/if}
</Modal>

<Modal bind:this={errorModalRef} onClose={onErrorModalClose}>
	<Message class={element('errors')} type="error">
		<ul>
			{#each Object.entries($formError?.details || {}) as [key, values] (key)}
				<li>
					<b>{key.toUpperCase()}:</b>
					{values.map(value => value.message).join('<br />')}
				</li>
			{/each}
		</ul>
	</Message>
</Modal>
