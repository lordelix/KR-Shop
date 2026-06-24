import { fetchWithErrorHandling } from '../utils/fetchWithErrorResponse'
import { ApiPaths } from '../api/api.d'
import createClient from '../api/client'
import appConfig from '../../../app.config.js'

const moduleId = Number(appConfig.shopModuleId)

export function useInfo() {
	const client = createClient()

	/**
	 * Get shop infos
	 *
	 * @returns Info about owner and shipping costs
	 */

	function getInfos() {
		return fetchWithErrorHandling(() =>
			client.GET(ApiPaths.getInfo, {
				params: {
					path: { moduleId }
				}
			})
		)
	}

	return {
		getInfos
	}
}
