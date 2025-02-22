import type { IBlog } from "@/constants/blog.constants";
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
				<Article blog={blog} />
			</DialogTrigger>
			<DialogContent
				className="border-none max-w-[60%] p-0 pb-4 max-h-[80%] rounded-md overflow-scroll"
				closeButtonClassName="text-white"
			>
				<div className="flex flex-col items-center justify-center">
					<MobileArticle blog={blog} />
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default ArticleDialog;
