import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchInput = () => {
  return (
    <>
      <div className="flex text-sm font-normal border border-black rounded-xl ">
        <Input
          type="email"
          id="email"
          placeholder="Subscribe to tips over email"
        />
        <Button>Yes, Please!</Button>
      </div>
    </>
  );
};

export default SearchInput;
