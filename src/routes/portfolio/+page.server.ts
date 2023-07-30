import type { Portfolio} from '$lib/types'

export async function load({ fetch }) {

	const portRes = await fetch('api/portfolio')

	const portfolio: Portfolio[] = await portRes.json()
	return { portfolio}
}