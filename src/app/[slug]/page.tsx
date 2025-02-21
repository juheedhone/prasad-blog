import MobileArticle from "@/components/MobileArticle";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "../../../studio/live";

const BLOG_QUERY = defineQuery(`*[_type == "blog"]{...}|order(date desc)`);

const Page = async () => {
	const { data: blog } = await sanityFetch({ query: BLOG_QUERY });
	console.log(blog);
	const urlFor = (source: SanityImageSource) =>
		imageUrlBuilder({ dataset: "production", projectId: "4elu8cpw" }).image(
			source,
		);
	const eventImageUrl = blog ? urlFor(blog[0].bgImage).url() : null;
	console.log(eventImageUrl);
	return <MobileArticle blog={blog} />;
};
export default Page;
