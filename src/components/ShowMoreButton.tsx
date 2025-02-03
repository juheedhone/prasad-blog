import { Button } from "./ui/button";

const ShowMoreButton = () => {
  return (
    <div className="flex items-center">
      <img src="/add.svg" alt="add" />
      <Button variant="ghost" className="text-[#0288D1] p-0">
        Show more
      </Button>
    </div>
  );
};

export default ShowMoreButton;
