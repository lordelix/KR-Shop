import { getEntries } from '$lib/boilerplate/xioni/cms/Addressbook'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const load = async () => {
	const { entries } = await xioniLoader(getEntries(1466))

	return { entries }
}
