import { cn } from "@/lib/utils";
import SubscribeModal from "./SubscribeModal";
import { Button } from "./ui/button";

interface Props {
	className?: string;
}
const SearchInput = ({ className }: Props) => {
	return (
		<div
			className={cn(
				"flex border md:max-w-xl w-full md:w-[50%] rounded-lg shadow-sm p-2 text-[10px] lg:text-sm font-normal",
				className,
			)}
		>
			<SubscribeModal>
				<input
					type="email"
					id="email"
					placeholder="Subscribe to tips over email"
					className="outline-none w-full"
				/>
				<Button className="text-[10px] lg:text-sm">Yes, Please!</Button>
			</SubscribeModal>
		</div>
	);
};

export default SearchInput;
