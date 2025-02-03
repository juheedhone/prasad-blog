import Article from "./Article";
import Badge from "./Badge";
import NavBar from "./NavBar";
import SearchInput from "./SearchInput";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const DialogBadge = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Badge color="#C7E4FF" name="SEO" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <NavBar />
          </DialogTitle>
          <DialogDescription>..</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Article heading="Trending marketing hack for fashion" time={2} />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit, quod temporibus error magnam odit doloribus qui
              omnis saepe deserunt nobis!
            </p>
          </div>
        </div>
        <DialogFooter>
          <SearchInput />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBadge;
