import { getRandomTags } from "@/lib/utils";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import DialogBadge from "./SmallBadge";

interface Props {
	heading: string;
	time: number;
}
const ArticleCard = ({ heading, time }: Props) => {
	return (
		<article className="w-full h-40 rounded-xl relative p-4 overflow-hidden md:max-w-72 hover:scale-105 transition-all">
			<div className="bg-[url(/card-bg.jpeg)] absolute inset-0 brightness-50 -z-10 h-full" />
			<div className="flex flex-col justify-between h-full">
				<h1 className=" text-white text-left text-sm font-bold">{heading}</h1>
				<div className="text-white flex items-center text-xs">
					<EyeOpenIcon className="mr-1 " />
					<p>{time} Mins</p>
				</div>
				<div className=" absolute bottom-4 text-white right-4">
					<DialogBadge {...getRandomTags()} />
				</div>
			</div>
		</article>
	);
};

export default ArticleCard;
