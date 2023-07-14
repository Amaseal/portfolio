export type Categories = 'sveltekit' | 'svelte'

export type Post = {
	layout: string
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	featured: string
}

export type Portfolio = {
	layout: string
	title: string
	client: string
	github: string
	link: string
	slug: string
	description: string
	date: string
	featured: string
	thumbnail: string
}