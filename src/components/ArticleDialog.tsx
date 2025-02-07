import useIsMobile from "@/app/hooks/useIsMobile";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";
import type { ReactNode } from "react";
import { useState } from "react";
import LaptopArticle from "./LaptopArticle";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

interface Props {
	children: ReactNode;
}
const ArticleDialog = ({ children }: Props) => {
	const [articleId, setArticleId] = useQueryState("article");
	const [open, setOpen] = useState(false);
	const router = useRouter();

	const isMobile = useIsMobile();

	const handleOpen = (open: boolean) => {
		if (open === true) {
			router.push("/?article=article123");
			!isMobile && setOpen(true);
		} else {
			setArticleId(null);
			setOpen(false);
		}
	};

	return (
		<Dialog open={open} onOpenChange={handleOpen}>
			<DialogTrigger>{children}</DialogTrigger>
			<DialogContent
				className="border-none max-w-[60%] p-0 pb-4 max-h-[80%] rounded-md overflow-scroll"
				closeButtonClassName="text-white"
			>
				<div className="flex flex-col items-center justify-center">
					<LaptopArticle  tag={'photography'} />
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default ArticleDialog;
