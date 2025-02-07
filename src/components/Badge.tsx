import { Badge as BadgeComponent } from "./ui/badge";

interface Props {
	color: string;
	name: string;
	selectBadge: (tag?: string) => void;
	selected: boolean;
}

const Badge = ({ color, name, selectBadge, selected }: Props) => {
	return (
		<>
			<BadgeComponent
				className={`text-black border-2 px-4 py-2 rounded-xl hover:cursor-pointer hover:brightness-90 hover:scale-110 select-none transition-all ${selected ? " border-black border" : ""}`}
				style={{ backgroundColor: color }}
				onClick={() => selectBadge(name)}
			>
				{name}
			</BadgeComponent>
		</>
	);
};

export default Badge;
