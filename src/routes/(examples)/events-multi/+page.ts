import { flatten, sortBy } from 'lodash-es'
import { getEvents } from '$lib/boilerplate/xioni/cms/Events'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export async function load() {
	const endsAfter = new Date()
	const limit = 5
	const [eventsA, eventsB] = await Promise.all([
		xioniLoader(getEvents(1289, { endsAfter, limit })),
		xioniLoader(getEvents(1500, { endsAfter, limit }))
	])

	return {
		events: sortBy(flatten([...eventsA.events, ...eventsB.events]), 'starts'),
		eventCount: eventsA.meta.totalCount + eventsB.meta.totalCount
	}
}
