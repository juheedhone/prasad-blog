import type { IBlog } from "@/constants/blog.constants";

interface Props {
	blogs: IBlog;
}
const DialogBadge = ({ blogs }: Props) => {
	return (
		<span
			className=" text-black text-[10px] hover:bg-[#C7E4FF] rounded-lg p-2"
			style={{ backgroundColor: blogs.tag.backgroundColor }}
		>
			{blogs.tag.title}
		</span>
	);
};
export default DialogBadge;
