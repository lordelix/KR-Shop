import { getArticle } from '$lib/boilerplate/xioni/cms/Articles'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const prerender = false

export async function load({ params }) {
	const { article } = await xioniLoader(getArticle(1383, +params.id))

	return { article }
}
