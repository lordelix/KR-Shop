import { dev } from '$app/environment'

type FetchFn<T> = () => Promise<{
	data?: T
	error?: { message: string }
	response: Response
}>

export async function fetchWithErrorHandling<T>(
	fetchFn: FetchFn<T>,
	options: { noContent: true }
): Promise<T | null>
export async function fetchWithErrorHandling<T>(
	fetchFn: FetchFn<T>,
	options?: { noContent?: false }
): Promise<T>
export async function fetchWithErrorHandling<T>(
	fetchFn: FetchFn<T>,
	options?: { noContent?: boolean }
): Promise<T | null> {
	const { data, error, response } = await fetchFn()

	if (response.status === 204) {
		return null
	}

	if (error || data === undefined) {
		if (dev) {
			console.error(error)
		}

		throw error
	}

	return data
}
