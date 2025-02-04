import type { ReactNode } from "react";
import LaptopArticle from "./LaptopArticle";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

interface Props {
  children: ReactNode;
}
const ArticleDialog = ({ children }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <p>upcoming</p>
      </DialogContent>
    </Dialog>
  );
};

export default ArticleDialog;
