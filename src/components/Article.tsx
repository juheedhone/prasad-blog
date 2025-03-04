import type { IBlog } from '@/constants/blog.constants';
import { EyeOpenIcon } from '@radix-ui/react-icons';
import DialogBadge from './SmallBadge';

interface Props {
	blog: IBlog;
}
const ArticleCard = ({ blog }: Props) => {
	return (
		<article className="relative w-full h-40 p-4 overflow-hidden transition-all rounded-xl md:max-w-72 hover:scale-105">
			<div
				className="absolute inset-0 h-full bg-center bg-cover brightness-50 -z-10"
				style={{ backgroundImage: `url(${blog.bgImage})` }}
			/>
			<div className="flex flex-col justify-between h-full">
				<h1 className="text-sm font-bold text-left text-white ">
					{blog.title}
				</h1>
				<div className="flex items-center text-xs text-white">
					<EyeOpenIcon className="mr-1 " />
					<p>{blog.timeToRead} Mins</p>
				</div>
				<div className="absolute text-white bottom-4 right-4">
					<DialogBadge
						title={blog.tag.title}
						backgroundColor={blog.tag.backgroundColor}
					/>
				</div>
			</div>
		</article>
	);
};

export default ArticleCard;
