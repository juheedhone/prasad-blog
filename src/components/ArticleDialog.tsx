import type { IBlog } from "@/constants/blog.constants";
import Article from "./Article";
import Footer from "./Footer";
import MobileArticle from "./MobileArticle";
import NavBar from "./NavBar";
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
				
				<MobileArticle blog={blog} />
				
			</DialogContent>
		</Dialog>
	);
};

export default ArticleDialog;
