import { getArticles } from '$lib/boilerplate/xioni/cms/Articles'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export async function load() {
	const { articles } = await xioniLoader(getArticles(1383, { parts: ['content'] }))

	return { articles }
}
