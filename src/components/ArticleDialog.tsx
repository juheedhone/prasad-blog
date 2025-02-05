import type { ReactNode } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

interface Props {
	children: ReactNode;
}
const ArticleDialog = ({ children }: Props) => {
	return (
		<Dialog>
			<DialogTrigger>{children}</DialogTrigger>
			<DialogContent className="sm:max-w-[320px]">
				<p>upcoming</p>
			</DialogContent>
		</Dialog>
	);
};

export default ArticleDialog;
