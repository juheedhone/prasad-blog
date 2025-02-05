import { Cross2Icon, EyeOpenIcon, ReloadIcon } from "@radix-ui/react-icons";
import { useQueryState } from "nuqs";
import { useEffect, useState } from "react";
import DialogBadge from "./SmallBadge";
import { Button } from "./ui/button";

const MobileArticle = () => {
	const [articleId, setArticleId] = useQueryState("article");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="sm:hidden">
			{loading ? (
				<div className="flex items-center justify-center h-screen">
					<ReloadIcon className="animate-spin h-6 w-6" />
				</div>
			) : (
				<>
					<div className="pt-20">
						<article className=" max-w-full h-48 relative overflow-hidden">
							<div className="bg-[url(/card-bg.jpeg)] absolute inset-0 brightness-50 -z-10 h-full" />
							<div className="flex flex-col justify-center h-full items-center">
								<h1 className=" text-white flex flex-col items-center text-xl font-bold text-center">
									Trending marketing hack for fashion
								</h1>
							</div>
							<div className="text-white absolute bottom-4 left-4 flex items-center text-xs">
								<EyeOpenIcon className="mr-1" />
								<p>2 Mins</p>
							</div>
							<div className="absolute bottom-4 text-white right-4">
								<DialogBadge />
							</div>
							<Button
								className="z-50 right-2 absolute top-4"
								variant="ghost"
								size="icon"
								onClick={() => setArticleId(null)}
							>
								<Cross2Icon className="h-6 w-6 text-white" />
							</Button>
						</article>
					</div>
					<p className="p-8 leading-10 text-lg">
						I got 97 cold emails last month. The only one I replied to didn't
						ask me to.
						<br /> Lizzy told me that's her secret.
						<br /> “I stopped asking for a quick call and clarified I wasn't
						asking for anything. Responses went from 5% to 25%.”
						<br /> Don't ask, don't get
					</p>
				</>
			)}
		</div>
	);
};

export default MobileArticle;
