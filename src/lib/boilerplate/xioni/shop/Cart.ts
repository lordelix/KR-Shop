import { fetchWithErrorHandling } from '../utils/fetchWithErrorResponse'
import { ApiPaths } from '../api/api.d'
import createClient from '../api/client'
import appConfig from '../../../app.config.js'

const moduleId = Number(appConfig.shopModuleId)

export function useCart() {
	const client = createClient()

	/**
	 * Get the cart contents
	 *
	 * @returns Cart
	 */

	function getCart() {
		return fetchWithErrorHandling(() =>
			client.GET(ApiPaths.getCart, {
				params: {
					path: { moduleId }
				}
			})
		)
	}

	/**
	 * Set the amount of a given product in cart
	 * setting "0" removes it from the cart
	 *
	 * @param id Product ID
	 * @param quantity amount
	 * @returns Cart
	 */

	async function updateItemQuantity(id: number, quantity: number) {
		return fetchWithErrorHandling(() =>
			client.PUT(ApiPaths.updateCart, {
				params: {
					path: { moduleId }
				},
				body: [
					{
						productId: id,
						quantity
					}
				]
			})
		)
	}

	/**
	 * Add given product to the cart.
	 * Will incement the current amount by 1
	 *
	 * @param id Product ID
	 * @returns Cart
	 */

	async function addItem(id: number) {
		return fetchWithErrorHandling(() =>
			client.PUT(ApiPaths.updateCart, {
				params: {
					path: { moduleId }
				},
				body: [
					{
						productId: id,
						quantity: 1
					}
				]
			})
		)
	}

	return {
		getCart,
		updateItemQuantity,
		addItem
	}
}
