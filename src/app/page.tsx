import BlogGrid from "@/components/BlogGrid";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
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
	const urlFor = (source: SanityImageSource) =>
		imageUrlBuilder({ dataset: "production", projectId: "4elu8cpw" }).image(
			source,
		);

	const eventImageUrl = blogs ? urlFor(blogs[0].bgImage).url() : null;
	console.log(eventImageUrl);

	return <BlogGrid />;
};

export default Page;
