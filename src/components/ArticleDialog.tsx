import useIsMobile from "@/app/hooks/useIsMobile";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import MobileArticle from "./MobileArticle";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

interface Props {
	children: ReactNode;
}
const ArticleDialog = ({ children }: Props) => {
	const [articleId, setArticleId] = useQueryState("article");
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);

	const isMobile = useIsMobile();
	const router = useRouter();

	useEffect(() => {
		if (open) {
			setLoading(true);
			const timer = setTimeout(() => setLoading(false), 500);
			return () => clearTimeout(timer);
		}
	}, [open]);

	const handleOpen = (open: boolean) => {
		if (open === true) {
			setArticleId("article123");
			!isMobile && setOpen(true);
		} else {
			setArticleId(null);
			setOpen(false);
		}
	};

	return (
		<Dialog open={open} onOpenChange={handleOpen}>
			<DialogTrigger>{children}</DialogTrigger>
			<DialogContent className="sm:max-w-[320px] rounded-md">
				<div className="flex flex-col items-center justify-center">
					{loading ? (
						<ReloadIcon className="animate-spin" />
					) : (
						<MobileArticle />
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default ArticleDialog;
