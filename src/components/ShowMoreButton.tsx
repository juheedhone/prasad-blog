import { TAGS } from "@/constants/tags.constants";
import { Button } from "./ui/button";

interface Props {
	onClick: (value: number) => void;
}
const ShowMoreButton = ({ onClick }: Props) => {
	return (
		<Button
			onClick={() => onClick(TAGS.length)}
			variant="ghost"
			className="text-[#0288D1] hover:text-[#0288d1] rounded-xl"
		>
			<img src="/add.svg" alt="" />
			Show more
		</Button>
	);
};

export default ShowMoreButton;
