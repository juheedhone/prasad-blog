import { EyeOpenIcon } from "@radix-ui/react-icons";

interface Props {
  heading: string;
  time: number;
}
const ArticleCard = ({ heading, time }: Props) => {
  return (
    <article className="w-80 border-2 border-black h-40 rounded-xl relative p-4 overflow-hidden">
      <div className="bg-[url(/MaskGroup.png)] absolute inset-0 brightness-50 -z-10 h-full" />
      <div className="flex flex-col justify-between h-full">
        <h1 className=" text-white text-sm font-bold">{heading}</h1>
        <div className="text-white flex items-center text-xs">
          <EyeOpenIcon className="mr-1 " />
          <p>{time} Mins</p>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
