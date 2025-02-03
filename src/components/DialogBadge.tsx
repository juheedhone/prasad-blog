import { EyeOpenIcon } from "@radix-ui/react-icons";
import { Badge } from "./ui/badge";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const DialogBadge = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Badge className="bg-[#C7E4FF] text-black text-xs">SEO</Badge>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <div className="flex justify-between">
              <img src="/navLogo.png" alt="navlogo" />
              <p>Prasad Marketing</p>
              <img src="/chamburger.png" alt="" />
            </div>
          </DialogTitle>
        </DialogHeader>
        <div>
          <div>
            <article className="w-80 border-2 h-40 rounded-xl relative p-4 overflow-hidden">
              <div className="bg-[url(/MaskGroup.png)] absolute inset-0 brightness-50 -z-10 h-full" />
              <div className="">
                <h1 className="text-white text-sm font-bold">Trending marketing hack for fashion</h1>
              </div>
              <div className="text-white flex items-center text-xs">
                <EyeOpenIcon className="mr-1 " />
                <p>2 Mins</p>
                
              </div>
            </article>
          </div>
          <div className="text-xl font-normal pr-4">
            <p>
              I got 97 cold emails last month. The only one I replied to didn't
              ask me to. Lizzy told me that's her secret. “I stopped asking for
              a quick call and clarified I wasn't asking for anything. Responses
              went from 5% to 25%.” Don't ask, don't get.
            </p>
          </div>
        </div>
        <DialogFooter>{/* <SearchInput /> */}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBadge;
