import type { IBlog } from "@/constants/blog.constants";
import Link from "next/link";
import Article from "./Article";
import MobileArticle from "./MobileArticle";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

interface Props {
	blog: IBlog;
	slug?: string;
}
const ArticleDialog = ({ blog, slug }: Props) => {
	console.log(slug, blog.slug.current, slug === blog.slug.current);
	return (
		<Dialog open={slug === blog.slug.current}>
			<Link href={`/${blog.slug.current}`} shallow={true}>
				<DialogTrigger>
					<Article blog={blog} />
				</DialogTrigger>
			</Link>
			<DialogContent
				className="border-none max-w-[60%] p-0 pb-4 max-h-[80%] rounded-md overflow-scroll"
				closeButtonClassName="text-white"
			>
				<MobileArticle blog={blog} />
			</DialogContent>
		</Dialog>
	);
};

export default ArticleDialog;
