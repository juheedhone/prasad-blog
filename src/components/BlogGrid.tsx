"use client";
import Badge from "@/components/Badge";
import ShowMoreButton from "@/components/ShowMoreButton";
import type { IBlog } from "@/constants/blog.constants";
import type { ITag } from "@/constants/tags.constants";
import useIsMobile from "@/hooks/useIsMobile";
import { useQueryState } from "nuqs";
import { useState } from "react";
import ArticleDialog from "./ArticleDialog";

interface Props {
	blogs: IBlog[];
	tags: ITag[];
}

const BlogGrid = ({ blogs, tags }: Props) => {
	const isMobile = useIsMobile();
	const [articleId, setArticleId] = useQueryState("article");
	const [badgeShowLimit, setBadgeShowLimit] = useState(5);
	// const [selectedBadge, setSelectedBadge] = useState<string>();

	// const filteredBlogs = blog.filter((blog) => {
	// 	if (selectedBadge) {
	// 		return blog.tag === selectedBadge;
	// 	}
	// 	return true;
	// });

	return (
		<>
			{/* {articleId && isMobile ? (
				<MobileArticle blog={blog} />
			) : ( */}
			<div className="h-full px-4 pb-36 pt-28 sm:px-8 md:px-10 lg:px-20 xl:px-24 2xl:px-32">
				<p className="pb-4 text-xl font-bold ">Tags</p>
				<div className="flex flex-wrap gap-2 pb-8 sm:gap-4">
					{/* {tag.map((tag) => {
							// if (index < badgeShowLimit) {
							<Badge
								tags={tag}
								// selected={selectedBadge === tag.name}
								// selectBadge={setSelectedBadge}
								// key={tag.name}
								// name={tag.name}
								// color={tag.color}
							/>;
						})} */}
					{tags.map((tag) => (
						<Badge tags={tag} key={tag.title} />
					))}
					<ShowMoreButton
						onClick={setBadgeShowLimit}
						badgeShowLimit={badgeShowLimit}
					/>
				</div>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 sm:items-center">
					{blogs.map((blog) => (
						<ArticleDialog blog={blog} key={blog.title} />
					))}
				</div>
			</div>
		</>
	);
};

export default BlogGrid;
