import type { ComponentBaseProps } from '../../boilerplate.d'
import type { OnClickActions, PayPalButtonsComponentOptions } from '@paypal/paypal-js'

export type PayPalButtonsProps = {
	clientId: string
	options?: PayPalButtonsComponentOptions['style'] | null
	createOrderHandler: PayPalButtonsComponentOptions['createOrder']
	onApproveHandler: PayPalButtonsComponentOptions['onApprove']
	onclick?: (data: { data: unknown; actions: OnClickActions }) => void
	onerror?: (error: unknown) => void
} & ComponentBaseProps
