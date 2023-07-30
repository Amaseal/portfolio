import type { Portfolio, Post } from '$lib/types'

export async function load({ fetch }) {
	const blogRes = await fetch("api/blog")
	const portRes = await fetch('api/portfolio')
	const posts: Post[] = await blogRes.json() 
	const portfolio: Portfolio[] = await portRes.json()
	return { portfolio, posts }
}