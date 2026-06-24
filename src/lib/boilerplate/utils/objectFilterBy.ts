export default function objectFilterBy(obj: object, filter: (value: unknown) => boolean): object {
	const result = {} as Record<string, unknown>

	Object.entries(obj).forEach(([key, value]) => {
		if (filter(value)) {
			result[key] = value
		}
	})

	return result
}
