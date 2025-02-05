import { cn } from "@/lib/utils";
import SubscribeModal from "./SubscribeModal";

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
			<input
				type="email"
				id="email"
				placeholder="Subscribe to tips over email"
				className="outline-none flex-1"
			/>
			<SubscribeModal />
		</div>
	);
};

export default SearchInput;
