import { fetchWithErrorHandling } from '../utils/fetchWithErrorResponse'
import { ApiPaths } from '../api/api.d'
import createClient from '../api/client'
import appConfig from '../../../app.config.js'

const moduleId = Number(appConfig.shopModuleId)

// --- Factory -------------------------------------------------------------------------------------

export function usePayment() {
	const client = createClient()

	async function createPayPalTransaction(transactionId: string): Promise<string> {
		const { orderId } = await fetchWithErrorHandling(() =>
			client.POST(ApiPaths.createPayPalOrder, {
				params: {
					path: { moduleId }
				},
				body: { transactionId }
			})
		)

		return orderId
	}

	async function capturePayPalTransaction(orderId: string): Promise<boolean> {
		await fetchWithErrorHandling(
			() =>
				client.POST(ApiPaths.capturePayPalPaymentForOrder, {
					params: {
						path: { moduleId }
					}
				}),
			{ noContent: true }
		)

		return true
	}

	return {
		createPayPalTransaction,
		capturePayPalTransaction
	}
}
