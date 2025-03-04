import { defineQuery } from 'next-sanity';

export const BLOGS_QUERY = defineQuery(`
  *[_type == "blog"]{
   "id": _id,
	title,
	"bgImage": bgImage.asset->url,
	slug,
	timeToRead,
	tag->{
	title,
	backgroundColor
	}
  } | order(publishedAt desc)
`);

export const BLOG_QUERY = defineQuery(`
    *[_type == "blog" && slug.current == $slug][0]{
   "id": _id,
	title,
	"bgImage": bgImage.asset->url,
	slug,
	content,
	timeToRead,
	tag->{
	title,
	backgroundColor
	}
  } | order(publishedAt desc)
`);

export const TAGS_QUERY = defineQuery(`*[_type == "tag"]{
  title,
  backgroundColor
}`);
