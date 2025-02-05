import {
	EyeOpenIcon,
	InstagramLogoIcon,
	LineHeightIcon,
	LinkedInLogoIcon,
	TwitterLogoIcon,
} from "@radix-ui/react-icons";
import DialogBadge from "./SmallBadge";

const LaptopArtical = () => {
	return (
		<>
			<>
				<div className="pt-20">
					<article className=" max-w-full h-40 relative  overflow-hidden  ">
						<div className="bg-[url(/card-bg.jpeg)] absolute inset-0 brightness-50 -z-10 h-full" />
						<div className="flex flex-col justify-center h-full items-center">
							<h1 className=" text-white flex flex-col items-center text-xl font-bold max-w- text-center">
								Trending marketing hack for fashion
							</h1>
						</div>
						<div className="text-white absolute bottom-4 left-4 flex items-center text-xs">
							<EyeOpenIcon className="mr-1 " />
							<p>2 Mins</p>
						</div>
						<div className=" absolute bottom-4 text-white right-4">
							<DialogBadge />
						</div>
					</article>
				</div>

				<p className="p-8">
					I got 97 cold emails last month. The only one I replied to didn't ask
					me to. Lizzy told me that's her secret. “I stopped asking for a quick
					call and clarified I wasn't asking for anything. Responses went from
					5% to 25%.” Don't ask, don't get
					<div className="flex justify-center items-center space-x-4 mt-6 ">
						<img src="/lapArticle.svg" alt="" />
						<img src="/lapArticle.svg" alt="" />
					</div>
				</p>
				<div className="flex justify-center items-center gap-2">
        
					<p>CLICK ON ICON TO SHARE</p>
					<InstagramLogoIcon />
					<LinkedInLogoIcon />
					<TwitterLogoIcon />
				</div>
			</>
		</>
	);
};

export default LaptopArtical;
