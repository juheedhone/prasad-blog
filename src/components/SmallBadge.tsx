import { Badge } from "./ui/badge";

interface Props {
	name: string;
	color: string;
}
const DialogBadge = ({ name, color }: Props) => {
	return (
		<Badge
			className="bg-[#C7E4FF] text-black text-[10px] hover:bg-[#C7E4FF] rounded-lg"
			style={{ backgroundColor: color }}
		>
			{name}
		</Badge>
	);
};
export default DialogBadge;
