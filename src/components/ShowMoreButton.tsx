import { Button } from "./ui/button";
import { Add, Remove } from '@mui/icons-material';


interface Props {
	onClick: (value: number) => void;
	badgeShowLimit: number;
	totalTagsCount: number;
}
const ShowMoreButton = ({ totalTagsCount, onClick, badgeShowLimit }: Props) => {
	const isShowMore = badgeShowLimit <= 5;
	return (
		<Button
			onClick={() => onClick(badgeShowLimit > 5 ? 5 : totalTagsCount)}
			variant="ghost"
			className="text-[#0288D1] hover:text-[#0288d1] rounded-xl"
		>
			{isShowMore ? <Add /> : <Remove />}
			{isShowMore ? 'Show More' : 'Show Less'}
		</Button>
	);
};

export default ShowMoreButton;
