import { Button } from "./ui/button";

interface Props {
	onClick: (value: number) => void;
	badgeShowLimit: number;
	totalTagsCount: number;
}
const ShowMoreButton = ({ totalTagsCount, onClick, badgeShowLimit }: Props) => {
	return (
		<Button
			onClick={() => onClick(badgeShowLimit > 5 ? 5 : totalTagsCount)}
			variant="ghost"
			className="text-[#0288D1] hover:text-[#0288d1] rounded-xl"
		>
			<img src="/add.svg" alt="" />
			{badgeShowLimit > 5 ? "Show Less" : "Show More"}
		</Button>
	);
};

export default ShowMoreButton;
