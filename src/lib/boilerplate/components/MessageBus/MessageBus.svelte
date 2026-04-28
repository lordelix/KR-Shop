<script lang="ts">
	import './MessageBus.css'
	import { blur } from 'svelte/transition'
	import type { MessageBusProps } from './MessageBus.d'
	import type { MessageBus } from './MessageBus'

	import Message from '../Message/Message.svelte'

	// --- [ Props ] ---------------------------------------------------------------------------------

	let { messages, blurDuration = 250, class: className, ...restProps }: MessageBusProps = $props()
</script>

<ul {...restProps} class="MessageBus {className || ''}">
	{#each $messages as message}
		<li in:blur={{ duration: blurDuration }} out:blur={{ duration: blurDuration }}>
			<Message
				title={message[1].title}
				type={message[1].config?.type}
				class="MessageBus--message"
				closable
				onclose={() => messages.remove(message[0])}>
				{@html message[1].message}
			</Message>
		</li>
	{/each}
</ul>
