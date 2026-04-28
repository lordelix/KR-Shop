import { getCategories } from '$lib/boilerplate/xioni/cms/Addressbook'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const load = async () => {
	const { categories } = await xioniLoader(getCategories(1320, { parts: ['entries'] }))

	return { categories }
}
