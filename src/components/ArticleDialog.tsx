import type { IBlog } from "@/constants/blog.constants";
import Link from "next/link";
import Article from "./Article";
import MobileArticle from "./MobileArticle";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

interface Props {
	blog: IBlog;
}
const ArticleDialog = ({ blog }: Props) => {
	// console.log("🚀 ~ ArticleDialog ~ blog:", blog);

	return (
		<Dialog>
			<DialogTrigger>
				<Link href={`/${blog.slug.current}`} shallow={true}>
					<Article blog={blog} />
				</Link>
			</DialogTrigger>
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
