import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const SubscribeModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-[10px] lg:text-sm">Yes, Please!</Button>
      </DialogTrigger>
      <DialogContent className="p-0">
        <div className="bg-black text-white text-[22px] h-20 flex items-center rounded-sm justify-center">
          Subscribe to NewSletter
        </div>
        <div className="m-8 text-lg">
          <h1>Hey, I'm Prasad. Every Monday I share:</h1>
          <ul className="list-inside list-disc">
            <li>3 short examples</li>
            <li>2 copywriting tips</li>
            <li>1 favourite tweet</li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubscribeModal;
