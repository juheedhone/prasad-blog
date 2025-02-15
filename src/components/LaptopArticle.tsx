import type { Blog } from "@/day-one-with-sanity-nextjs/src/sanity/types";
import {
	EyeOpenIcon,
	InstagramLogoIcon,
	LinkedInLogoIcon,
	TwitterLogoIcon,
} from "@radix-ui/react-icons";
import DialogBadge from "./SmallBadge";

interface Props {
	blog: Blog;
}

const LaptopArticle = ({ blog }: Props) => {
	console.log(blog)
	return (
		<>
			<article className="max-w-full h-48 relative overflow-hidden w-full ">
				<div className="bg-[url(/card-bg.jpeg)] absolute inset-0 brightness-50 -z-10" />
				<div className="flex flex-col justify-center h-full items-center text-white font-bold">
					<h1>{blog.title}</h1>
				</div>
				<div className="text-white absolute bottom-4 left-4 flex items-center text-xs">
					<EyeOpenIcon className="mr-1 " />
					<p>{blog.time}</p>
				</div>
				<div className=" absolute bottom-4 text-white right-4">
					{blog.tags?.[0] && <DialogBadge tag={blog.tags[0]} />}
				</div>
			</article>

			<p className="p-8 w-full">
				I got 97 cold emails last month.
				<br />
				The only one I replied to didn't ask me to.
				<br />
				Lizzy told me that's her secret. <br />
				“I stopped asking for a quick call and clarified I wasn't asking for
				anything. Responses went from 5% to 25%.”
				<br />
				Don't ask, don't get
				<div className="flex justify-center *:xl:w-80 *:sm:w-52 *:lg:w-60 items-center space-x-4 my-6 w-full">
					<img src="/lapArticle.svg" alt="" />
					<img src="/lapArticle.svg" alt="" />
				</div>
				<p>
					I got 97 cold emails last month.
					<br />
					The only one I replied to didn't ask me to.
				</p>
			</p>
			<div className="flex items-center w-full px-8 gap-4">
				<div className="h-[1px] bg-black w-full" />
				<div className="flex justify-center items-center gap-2 min-w-72">
					<p>CLICK ON ICON TO SHARE</p>
					<InstagramLogoIcon />
					<LinkedInLogoIcon />
					<TwitterLogoIcon />
				</div>
				<div className="h-[1px] bg-black w-full" />
			</div>
		</>
	);
};

export default LaptopArticle;
