import { getAlbum } from '$lib/boilerplate/xioni/cms/Galleries'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const prerender = false

export async function load({ params }) {
	const { album } = await xioniLoader(getAlbum(1453, +params.id))

	return { album }
}
