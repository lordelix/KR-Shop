import { getEvent } from '$lib/boilerplate/xioni/cms/Events'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const prerender = false

export async function load({ params }) {
	const { event } = await xioniLoader(getEvent(1289, +params.id))

	return { event }
}
