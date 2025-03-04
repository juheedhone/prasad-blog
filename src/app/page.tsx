import BlogGrid from '@/components/BlogGrid';
import { BLOGS_QUERY, TAGS_QUERY } from '@/constants/sanityQueries.constants';
import { sanityFetch } from '../../studio/live';

const Page = async () => {
	const { data: blogs } = await sanityFetch({ query: BLOGS_QUERY });
	const { data: tags } = await sanityFetch({ query: TAGS_QUERY });

	return <BlogGrid blogs={blogs} tags={tags} />;
};
export default Page;
