"use client";
import useIsMobile from "@/app/hooks/useIsMobile";
import Article from "@/components/Article";
import Badge from "@/components/Badge";
import MobileArticle from "@/components/MobileArticle";
import ShowMoreButton from "@/components/ShowMoreButton";
import type { IBlog } from "@/constants/blog.constants";
import { TAGS } from "@/constants/tags.constants";
import { useQueryState } from "nuqs";
import { useState } from "react";
import ArticleDialog from "./ArticleDialog";

interface Props {
	blogs: IBlog[];
}

const BlogGrid = ({ blogs }: Props) => {
	const isMobile = useIsMobile();
	const [articleId, setArticleId] = useQueryState("article");
	const [badgeShowLimit, setBadgeShowLimit] = useState(5);
	const [selectedBadge, setSelectedBadge] = useState<string>();

	// const filteredBlogs = blog.filter((blog) => {
	// 	if (selectedBadge) {
	// 		return blog.tag === selectedBadge;
	// 	}
	// 	return true;
	// });

	return (
		<>
			{articleId && isMobile ? (
				<MobileArticle tag="fashion" />
			) : (
				<div className="h-full px-4 pb-36 pt-28 sm:px-8 md:px-10 lg:px-20 xl:px-24 2xl:px-32">
					<p className="pb-4 text-xl font-bold ">Tags</p>
					<div className="flex flex-wrap gap-2 pb-8 sm:gap-4">
						{TAGS.map((tag, index) => {
							if (index < badgeShowLimit) {
								return (
									<Badge
										selected={selectedBadge === tag.name}
										selectBadge={setSelectedBadge}
										key={tag.name}
										name={tag.name}
										color={tag.color}
									/>
								);
							}
						})}
						<ShowMoreButton
							onClick={setBadgeShowLimit}
							badgeShowLimit={badgeShowLimit}
						/>
					</div>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 sm:items-center">
						{blogs.map((blog) => (
							<ArticleDialog key={blog.title}>
								<Article blog={blog} />
							</ArticleDialog>
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default BlogGrid;
