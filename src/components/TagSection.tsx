import type { ITag } from '@/constants/tags.constants';
import { Cross1Icon } from '@radix-ui/react-icons';
import { useState } from 'react';
import ShowMoreButton from './ShowMoreButton';
import { Badge } from './ui/badge';

interface Props {
	tags: ITag[];
	selectedTag: string;
	handleTagSelect: (tag: string) => void;
}

const TagSection = ({ tags, selectedTag, handleTagSelect }: Props) => {
	const [badgeShowLimit, setBadgeShowLimit] = useState(5);
	return (
		<>
			<p className="pb-4 text-xl font-bold ">Tags</p>

			<div className="flex flex-wrap gap-2 pb-8 sm:gap-4">
				{tags.slice(0, badgeShowLimit).map((tag) => (
					// <Badge tag={tag} key={tag.title} />
					<Badge
						key={tag.title}
						className={`text-black relative border-2 px-4 py-2 rounded-xl hover:cursor-pointer hover:brightness-90 hover:scale-110 select-none transition-all border-black ${selectedTag === tag.title ? 'outline-2 outline outline-offset-2' : ''} }`}
						style={tag}
						onClick={() => handleTagSelect(tag.title)}
					>
						<span>{tag.title}</span>
						{selectedTag === tag.title && (
							<Cross1Icon
								className="absolute -top-2 -right-2 bg-white border border-black rounded-full p-1 w-5 h-5 cursor-pointer"
								onClick={(e) => {
									e.stopPropagation();
									handleTagSelect('');
									setBadgeShowLimit(5);
								}}
							/>
						)}
					</Badge>
				))}

				<ShowMoreButton
					totalTagsCount={tags.length}
					onClick={setBadgeShowLimit}
					badgeShowLimit={badgeShowLimit}
				/>
			</div>
		</>
	);
};

export default TagSection;
