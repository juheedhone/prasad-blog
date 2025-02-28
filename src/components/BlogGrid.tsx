import type { IBlog } from "@/constants/blog.constants";
import type { ITag } from "@/constants/tags.constants";
import ArticleDialog from "./ArticleDialog";
import TagSection from "./TagSection";

interface Props {
	blogs: IBlog[];
	tags: ITag[];
	slug?: string;
}

const BlogGrid = ({ blogs, tags,slug }: Props) => {
	return (
		<>
			<div className="h-full px-4 pb-36 pt-28 sm:px-8 md:px-10 lg:px-20 xl:px-24 2xl:px-32">
				<TagSection tags={tags} />
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 sm:items-center">
					{blogs.map((blog) => (
						<ArticleDialog blog={blog} key={blog.title} slug={slug} />
					))}
				</div>
			</div>
		</>
	);
};

export default BlogGrid;
