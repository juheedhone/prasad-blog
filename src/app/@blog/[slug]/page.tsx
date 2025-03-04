import MobileArticle from '@/components/MobileArticle';
import { BLOG_QUERY } from '@/constants/sanityQueries.constants';
import { sanityFetch } from '../../../../studio/live';

const Page = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const { slug } = await params;
	const { data: blog } = await sanityFetch({
		query: BLOG_QUERY,
		params: { slug },
	});

	if (!slug || !blog) {
		return <div>Blog not found</div>;
	}
	return <MobileArticle blog={blog} />;
};

export default Page;
