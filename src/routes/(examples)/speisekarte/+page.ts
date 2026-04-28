import { getMenuCard } from '$lib/boilerplate/xioni/cms/MenuCards'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export async function load() {
	const { menuCard } = await xioniLoader(getMenuCard(1540))

	return { menuCard }
}
