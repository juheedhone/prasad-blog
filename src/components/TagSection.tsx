"use client";
import type { ITag } from "@/constants/tags.constants";
import { useState } from "react";
import Badge from "./Badge";
import ShowMoreButton from "./ShowMoreButton";

interface Props {
	tags: ITag[];
}

const TagSection = ({ tags }: Props) => {
	const [badgeShowLimit, setBadgeShowLimit] = useState(5);
	return (
		<>
			<p className="pb-4 text-xl font-bold ">Tags</p>
			<div className="flex flex-wrap gap-2 pb-8 sm:gap-4">
				{tags.map((tag) => (
					<Badge tags={tag} key={tag.title} />
				))}
				<ShowMoreButton
					onClick={setBadgeShowLimit}
					badgeShowLimit={badgeShowLimit}
				/>
			</div>
		</>
	);
};

export default TagSection;
