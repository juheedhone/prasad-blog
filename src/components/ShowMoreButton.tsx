import { Button } from "./ui/button";

const ShowMoreButton = () => {
  return (
    <Button
      variant="ghost"
      className="text-[#0288D1] hover:text-[#0288d1] rounded-xl"
    >
      <img src="/add.svg" alt="" />
      Show more
    </Button>
  );
};

export default ShowMoreButton;
