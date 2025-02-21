"use client";

import type { IBlogWithContent } from "@/constants/fetch";
import { Cross2Icon, EyeOpenIcon, ReloadIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

interface Props {
	blog: IBlogWithContent;
}

const MobileArticle = ({ blog }: Props) => {
	// const [articleId, setArticleId] = useQueryState("article");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="sm:hidden">
			{loading ? (
				<div className="flex items-center justify-center h-screen">
					<ReloadIcon className="w-6 h-6 animate-spin" />
				</div>
			) : (
				<>
					<div className="pt-20">
						<article className="relative h-48 max-w-full overflow-hidden ">
							<div
								className=" absolute inset-0 brightness-50 -z-10 h-full"
								style={{ backgroundImage: `url(${blog.bgImage})` }}
							/>
							<div className="flex flex-col items-center justify-center h-full">
								<h1 className="flex flex-col items-center text-xl font-bold text-center text-white ">
									{blog.title}
								</h1>
							</div>
							<div className="absolute flex items-center text-xs text-white bottom-4 left-4">
								<EyeOpenIcon className="mr-1" />
								<p> {blog.timeToRead}Mins</p>
							</div>
							{/* <div className="absolute text-white bottom-4 right-4">
								<DialogBadge blogs={blogs} />
							</div> */}
							<Button
								className="absolute z-50 right-2 top-4"
								variant="ghost"
								size="icon"
								// onClick={() => setArticleId(null)}
							>
								<Cross2Icon className="w-6 h-6 text-white" />
							</Button>
						</article>
					</div>
					<p className="p-8 text-lg leading-10">{blog.content}</p>
					<img src="lapArticle.svg" alt="" className="p-8 pt-0" />
				</>
			)}
		</div>
	);
};

export default MobileArticle;
