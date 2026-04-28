import { getGallery } from '$lib/boilerplate/xioni/cms/Galleries'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export async function load() {
	const { albums } = await xioniLoader(getGallery(1453))

	return { gallery: albums }
}
