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
			<DialogTrigger>
				<Link href={`/${blog.slug.current}`} shallow={true}>
					<Article blog={blog} />
				</Link>
			</DialogTrigger>
			<DialogContent
				className="border-none md:max-w-[60%] p-0 pb-4 md:max-h-[80%]  overflow-scroll w-full h-full max-w-none max-h-none  "
				closeButtonClassName="text-white"
			>
				<MobileArticle blog={blog} />
				{/* <LaptopArticle blog={blog.bgImage.alt} /> */}
				{/* <MobileArticle blog={blog} /> */}
			</DialogContent>
		</Dialog>
	);
};

export default ArticleDialog;
