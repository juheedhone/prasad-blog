import Article from "@/components/Article";
import ArticleDialog from "@/components/ArticleDialog";
import Badge from "@/components/Badge";
import ShowMoreButton from "@/components/ShowMoreButton";

const Page = () => {
	return (
		<div className=" px-4 pb-36 pt-28 h-full">
			<p className="font-bold text-xl pb-4 ">Tags</p>
			<div className="pb-8 gap-2 flex flex-wrap">
				<Badge name="Fashion" color="#FFC7C7" />
				<Badge name="Photography" color="#C7FFFB" />
				<Badge name="SEO" color="#C7E4FF" />
				<Badge name="Content" color="#DEC7FF" />
				<Badge name="Culture" color="#ffC7e8" />
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
