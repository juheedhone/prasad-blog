import { defineQuery } from "next-sanity";

export const BLOGS_QUERY = defineQuery(`
  *[_type == "blog"]{
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

export const TAGS_QUERY = defineQuery(`*[_type == "tag"]{
  title,
  backgroundColor
}`);
