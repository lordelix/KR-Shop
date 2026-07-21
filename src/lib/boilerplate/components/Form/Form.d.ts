import type { XioniApiErrorResponse } from '$lib/boilerplate/xioni/types'
import type { Snippet } from 'svelte'

export type FormProps = ComponentBaseProps & {
	moduleId: number | string
	children?: Snippet
	done?: Snippet
	onSuccess?: () => void
	onSuccessModalClose?: () => void
	onError?: (error: XioniApiErrorResponse) => void
	onErrorModalClose?: () => void
}
