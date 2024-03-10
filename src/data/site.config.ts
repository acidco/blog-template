interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Dera Irés Cortez', // Site author
	title: 'Innovacion 360', // Site title.
	description: 'Descubre las últimas novedades en gadgets y tecnología. Mantente al día con las innovaciones en electrónica, video juegos, móviles, tablets e informática en nuestra plataforma.', // Description to display in the meta tags
	lang: 'en-GB', 'es-ES',
	ogLocale: 'en_GB', 'es_ES',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
