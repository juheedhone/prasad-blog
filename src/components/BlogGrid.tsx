"use client";
import useIsMobile from "@/app/hooks/useIsMobile";
import Article from "@/components/Article";
import ArticleDialog from "@/components/ArticleDialog";
import Badge from "@/components/Badge";
import MobileArticle from "@/components/MobileArticle";
import ShowMoreButton from "@/components/ShowMoreButton";
import { BLOGS } from "@/constants/blog.constants";
import { TAGS } from "@/constants/tags.constants";
import { useQueryState } from "nuqs";
import { Suspense, useState } from "react";

const BlogGrid = () => {
	const isMobile = useIsMobile();
	const [articleId, setArticleId] = useQueryState("article");
	const [badgeShowLimit, setBadgeShowLimit] = useState(5);
	const [selectedBadge, setSelectedBadge] = useState<string>();

	const filteredBlogs = BLOGS.filter((blog) => {
		if (selectedBadge) {
			return blog.tag === selectedBadge;
		}
		return true;
	});

	return (
		<Suspense>
			{articleId && isMobile ? (
				<MobileArticle tag="fashion" />
			) : (
				<div className="px-4 pb-36 pt-28 h-full sm:px-8 md:px-10 lg:px-20 xl:px-24 2xl:px-32">
					<p className="font-bold text-xl pb-4 ">Tags</p>
					<div className="pb-8 gap-2 sm:gap-4 flex flex-wrap">
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
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:items-center">
						{filteredBlogs.map((blog, index) => (
							<ArticleDialog key={index}>
								<Article blog={blog} />
							</ArticleDialog>
						))}
					</div>
				</div>
			)}
		</Suspense>
	);
};

export default BlogGrid;
