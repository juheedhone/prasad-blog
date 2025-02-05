"use client";
import Article from "@/components/Article";
import ArticleDialog from "@/components/ArticleDialog";
import Badge from "@/components/Badge";
import MobileArticle from "@/components/MobileArticle";
import ShowMoreButton from "@/components/ShowMoreButton";
import { TAGS } from "@/constants/tags.constants";
import { useQueryState } from "nuqs";
import { Suspense, useState } from "react";
import useIsMobile from "./hooks/useIsMobile";

const Page = () => {
	const isMobile = useIsMobile();
	const [articleId, setArticleId] = useQueryState("article");
	const [badgeShowLimit, setBadgeShowLimit] = useState(
		isMobile ? 5 : TAGS.length,
	);

	return (
		<Suspense>
			{articleId && isMobile ? (
				<MobileArticle />
			) : (
				<div className="px-4 pb-36 pt-28 h-full sm:px-8 md:px-10 lg:px-20 xl:px-24">
					<p className="font-bold text-xl pb-4 ">Tags</p>
					<div className="pb-8 gap-2 sm:gap-4 flex flex-wrap">
						{TAGS.map((tag, index) => {
							if (index < badgeShowLimit) {
								return (
									<Badge key={tag.name} name={tag.name} color={tag.color} />
								);
							}
						})}
						{isMobile && (
							<ShowMoreButton
								onClick={setBadgeShowLimit}
								badgeShowLimit={badgeShowLimit}
							/>
						)}
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:items-center">
						{Array(10)
							.fill(0)
							.map((_, index) => (
								<ArticleDialog key={index}>
									<Article
										heading="Trending marketing hack for fashion"
										time={2}
									/>
								</ArticleDialog>
							))}
					</div>
				</div>
			)}
		</Suspense>
	);
};

export default Page;
