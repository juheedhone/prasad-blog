'use client';
import type { IBlog } from '@/constants/blog.constants';
import type { ITag } from '@/constants/tags.constants';
import { useState } from 'react';
import ArticleDialog from './ArticleDialog';
import TagSection from './TagSection';

interface Props {
	blogs: IBlog[];
	tags: ITag[];
}

const BlogGrid = ({ blogs, tags }: Props) => {
	const [selectedTag, setSelectedTag] = useState<string>('');
	const filteredBlogs = selectedTag
		? blogs.filter((blog) => blog.tag.title === selectedTag)
		: blogs;

	return (
		<div className="h-full px-4 pb-36 pt-28 sm:px-8 md:px-10 lg:px-20 xl:px-24 2xl:px-32">
			<TagSection
				tags={tags}
				selectedTag={selectedTag}
				handleTagSelect={setSelectedTag}
			/>
			{filteredBlogs.length ? (
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 sm:items-center">
					{filteredBlogs.map((blog) => (
						<ArticleDialog blog={blog} key={blog.id} />
					))}
				</div>
			) : (
				<p className="font-bold text-red-400 text-lg text-center ">
					No blogs for this tag
				</p>
			)}
		</div>
	);
};

export default BlogGrid;
