import BlogGrid from "@/components/BlogGrid";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "../../studio/live";

const BLOGS_QUERY = defineQuery(`
  *[_type == "blog"]{
    title,
    slug,
    bgImage,
    publishedAt,
    content,
    timeToRead,
    tag->{
	title, 
	backgroundColor
	} // Expanding the reference
  } | order(publishedAt desc)
`);

const Page = async () => {
	const { data: blogs } = await sanityFetch({ query: BLOGS_QUERY });
	console.log(blogs);

	return <BlogGrid />;
};

export default Page;
