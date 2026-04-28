import { getEntry } from '$lib/boilerplate/xioni/cms/Addressbook'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const prerender = false

export async function load({ params }) {
	const { entry } = await xioniLoader(getEntry(1466, +params.id))

	return { entry }
}
