interface Props {
	backgroundColor: string;
	title: string;
}
const DialogBadge = ({ backgroundColor, title }: Props) => {
	return (
		<span
			className=" text-black text-[10px] hover:bg-[#C7E4FF] rounded-lg p-2"
			style={{ backgroundColor: backgroundColor }}
		>
			{title}
		</span>
	);
};
export default DialogBadge;
