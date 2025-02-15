import Article from "@/components/Article";
import ArticleDialog from "@/components/ArticleDialog";
import type { Blog } from "@/day-one-with-sanity-nextjs/src/sanity/types";
import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";

const EVENTS_QUERY = defineQuery(`*[_type == "blog"]{...}|order(date desc)`);

const Page = async () => {
	const { data }: { data: Blog[] } = await sanityFetch({ query: EVENTS_QUERY });

	return (
		<div className="grid mt-24 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:items-center">
			{data.map((blog) => (
				<ArticleDialog key={blog._id} blog={blog}>
					<Article blog={blog} />
				</ArticleDialog>
			))}
		</div>
	);
};

export default Page;
