import type { IBlog } from "@/constants/blog.constants";
import useIsMobile from "@/hooks/useIsMobile";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";
import { useState } from "react";
import Article from "./Article";
import LaptopArticle from "./LaptopArticle";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

interface Props {
	blog: IBlog;
}
const ArticleDialog = ({ blog }: Props) => {
	console.log("🚀 ~ ArticleDialog ~ blog:", blog);
	const [articleId, setArticleId] = useQueryState("article");
	const [open, setOpen] = useState(false);
	const router = useRouter();

	const isMobile = useIsMobile();

	const handleOpen = (open: boolean) => {
		if (open === true) {
			router.push(`/${blog.slug.current}`);
			!isMobile && setOpen(true);
		} else {
			setArticleId(null);
			setOpen(false);
		}
	};

	return (
		<Dialog open={open} onOpenChange={handleOpen}>
			<DialogTrigger>
				<Article blog={blog} />
			</DialogTrigger>
			<DialogContent
				className="border-none max-w-[60%] p-0 pb-4 max-h-[80%] rounded-md overflow-scroll"
				closeButtonClassName="text-white"
			>
				<div className="flex flex-col items-center justify-center">
					<LaptopArticle tag={"photography"} />
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default ArticleDialog;
