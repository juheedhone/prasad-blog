import MobileArticle from "@/components/MobileArticle";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "../../../studio/live";

const BLOG_QUERY = defineQuery(`
  *[_type == "blog" && slug.current == $slug][0]{
    title,
    timeToRead,
    slug,
    content,
    bgImage,
    tag->{
      title,
      backgroundColor
    }
  }
`);

const Page = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const slug = (await params).slug;
	const { data: blog } = await sanityFetch({
		query: BLOG_QUERY,
		params: { slug },
	});
	console.log(blog);

	return <MobileArticle blog={blog} />;
};
export default Page;
