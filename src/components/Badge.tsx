import type { ITag } from "@/constants/tags.constants";
import { Badge as BadgeComponent } from "./ui/badge";

interface Props {
	tags: ITag;
}

const Badge = ({ tags }: Props) => {
	return (
		<>
			<BadgeComponent
				className={`text-black border-2 px-4 py-2 rounded-xl hover:cursor-pointer hover:brightness-90 hover:scale-110 select-none transition-all " border-black border" : ""}`}
				style={tags}
			>
				{tags.title}
			</BadgeComponent>
		</>
	);
};

export default Badge;
