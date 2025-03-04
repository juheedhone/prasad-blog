import type { IBlog } from '@/constants/blog.constants';
import Link from 'next/link';
import Article from './Article';

interface Props {
	blog: IBlog;
}
const ArticleDialog = ({ blog }: Props) => {
	return (
		<Link href={`/${blog.slug.current}`} passHref>
			<Article blog={blog} />
		</Link>
	);
};

export default ArticleDialog;
