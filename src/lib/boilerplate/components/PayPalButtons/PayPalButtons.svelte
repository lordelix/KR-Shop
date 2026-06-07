<script lang="ts">
	import type { PayPalButtonsProps } from './PayPalButtons.d'
	import {
		loadScript,
		type OnClickActions,
		type PayPalButtonsComponentOptions
	} from '@paypal/paypal-js'
	import { uniqueId } from 'lodash-es'
	import { onMount } from 'svelte'

	let {
		clientId,
		options = null,
		createOrderHandler,
		onApproveHandler,
		onclick,
		onerror,
		class: className,
		...restProps
	}: PayPalButtonsProps = $props()

	const buttonId = uniqueId('paypal-buttons-')
	const style = $derived({
		layout: 'horizontal',
		color: 'white',
		disableMaxWidth: false,
		tagline: false,
		height: 42,
		...(options ?? {})
	} as PayPalButtonsComponentOptions['style'])

	async function onClickHandler(data: unknown, actions: OnClickActions) {
		onclick?.({ data, actions })

		return
	}

	async function onErrorHandler(error: unknown) {
		onerror?.(error)

		return
	}

	onMount(function () {
		if (!clientId) return

		loadScript({ clientId, currency: 'EUR' }).then(paypal => {
			if (!paypal) return

			setTimeout(() => {
				// @ts-ignore no, this can NOT possibly be undefined ^^
				paypal
					.Buttons({
						style: style,
						createOrder: createOrderHandler,
						onApprove: onApproveHandler,
						onClick: onClickHandler,
						onError: onErrorHandler
					})
					.render('#' + buttonId)
			}, 250)
		})
	})
</script>

<div {...restProps} id={buttonId} class={className} style="display:inline-flex"></div>
