import BlogGrid from "@/components/BlogGrid";
import { BLOGS_QUERY, TAGS_QUERY } from "@/constants/sanityQueries.constants";
import { useEffect } from "react";
import { sanityFetch } from "../../../studio/live";



const Page = async ({
	params,
}: {
	params: Promise<{ slug: string[] }>;
}) => {
	const slug = (await params).slug?.[0];
	console.log("🚀 ~ slug:", slug);

	const { data: blogs } = await sanityFetch({ query: BLOGS_QUERY });
	const { data: tags } = await sanityFetch({ query: TAGS_QUERY });

	return <BlogGrid blogs={blogs} tags={tags} slug={slug} />;
};
export default Page;
