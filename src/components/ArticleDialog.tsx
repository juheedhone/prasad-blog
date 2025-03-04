import type { IBlog } from '@/constants/blog.constants';
import Link from 'next/link';
import Article from './Article';

interface Props {
	blog: IBlog;
}
const ArticleDialog = ({ blog }: Props) => {
	return (
		<Link href={`/${blog.slug.current}`}>
			<Article blog={blog} />
		</Link>
		// <Dialog>
		// 	<DialogTrigger>

		// 	</DialogTrigger>
		// 	<DialogContent
		// 		className="border-none md:max-w-[60%] p-0 pb-4 md:max-h-[80%]  overflow-scroll w-full h-full max-w-none max-h-none  "
		// 		closeButtonClassName="text-white"
		// 	>
		// 		<MobileArticle blog={blog} />
		// 	</DialogContent>
		// </Dialog>
	);
};

export default ArticleDialog;
