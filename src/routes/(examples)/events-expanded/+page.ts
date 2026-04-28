import { getEvents } from '$lib/boilerplate/xioni/cms/Events'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export async function load() {
	const { events } = await xioniLoader(getEvents(1289, { endsAfter: new Date() }))

	return { events }
}
