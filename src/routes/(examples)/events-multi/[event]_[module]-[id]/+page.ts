import { getEvent } from '$lib/boilerplate/xioni/cms/Events'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const prerender = false

export async function load({ params }) {
	const { event } = await xioniLoader(getEvent(+params.module, +params.id))

	return { event }
}
