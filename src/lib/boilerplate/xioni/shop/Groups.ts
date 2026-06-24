import { fetchWithErrorHandling } from '../utils/fetchWithErrorResponse'
import { ApiPaths } from '../api/api.d'
import createClient from '../api/client'
import appConfig from '../../../app.config.js'

const moduleId = Number(appConfig.shopModuleId)

export function useGroups() {
	const client = createClient()

	function getGroups() {
		return fetchWithErrorHandling(() =>
			client.GET(ApiPaths.getGroups, {
				params: {
					path: { moduleId }
				}
			})
		)
	}

	function getGroup(id: number) {
		return fetchWithErrorHandling(() =>
			client.GET(ApiPaths.getGroup, {
				params: {
					path: { moduleId, groupId: id }
				}
			})
		)
	}

	function getGroupByProductId(id: number) {
		return fetchWithErrorHandling(() =>
			client.GET(ApiPaths.getProductGroup, {
				params: {
					path: { moduleId, productId: id }
				}
			})
		)
	}

	return {
		getGroupByProductId,
		getGroups,
		getGroup
	}
}
