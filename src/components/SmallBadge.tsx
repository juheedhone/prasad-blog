import { getRandomTagColor } from "@/lib/utils";
import { Badge } from "./ui/badge";

interface Props {
	tag: string;
}
const DialogBadge = ({ tag }: Props) => {
	return (
		<Badge
			className="bg-[#C7E4FF] text-black text-[10px] hover:bg-[#C7E4FF] rounded-lg"
			style={{ backgroundColor: getRandomTagColor() }}
		>
			{tag}
		</Badge>
	);
};
export default DialogBadge;
