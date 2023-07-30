import type { Post } from '$lib/types'

export async function load({ fetch }) {

	const postRes = await fetch('api/blog')

	const posts: Post[] = await postRes.json()
	return {posts}
}