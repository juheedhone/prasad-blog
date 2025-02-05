import Article from "@/components/Article";
import ArticleDialog from "@/components/ArticleDialog";
import Badge from "@/components/Badge";
import ShowMoreButton from "@/components/ShowMoreButton";
import { TAGS } from "@/constants/tags.constants";

const Page = () => {
	return (
		<div className=" px-4 pb-36 pt-28 h-full">
			<p className="font-bold text-xl pb-4 ">Tags</p>
			<div className="pb-8 gap-2 flex flex-wrap">
				{TAGS.map((tag) => (
					<Badge key={tag.name} name={tag.name} color={tag.color} />
				))}
				<ShowMoreButton />
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{Array(10)
					.fill(0)
					.map((_, index) => (
						<ArticleDialog key={Math.random().toString()}>
							<Article heading="Trending marketing hack for fashion" time={2} />
						</ArticleDialog>
					))}
			</div>
		</div>
	);
};

export default Page;
