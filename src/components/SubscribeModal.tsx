import type { ReactNode } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

interface Props {
	children: ReactNode;
}
const SubscribeModal = ({ children }: Props) => {
	return (
		<Dialog>
			<DialogTrigger className="w-full flex items-center">
				{children}
			</DialogTrigger>
			<DialogContent
				className="p-0 w-[90%] m-4 overflow-hidden rounded-md md:w-[60%] lg:w-[40%] max-w-lg border-none"
				closeButtonClassName="text-white"
			>
				<div className="bg-black text-white text-[22px] font-bold h-20 flex items-center rounded-t-sm justify-center">
					Subscribe to Newsletter
				</div>
				<div className="p-10 space-y-6 text-lg">
					<div className="leading-8">
						<p>Hey, I'm Prasad. Every Monday I share:</p>
						<ul className="list-inside list-disc">
							<li>3 short examples</li>
							<li>2 copywriting tips</li>
							<li>1 favourite tweet</li>
						</ul>
					</div>
					<p>
						Marketers voted it the{" "}
						<span className="underline">“#1 marketing newsletter”</span>.
						130k people enjoy it.
					</p>
					<div className="flex border w-full rounded-lg shadow-sm p-2 text-[10px] lg:text-sm">
						<input
							type="email"
							id="email"
							placeholder="Your email"
							className="outline-none w-full"
						/>
						<Button className="text-[10px] rounded-md lg:text-sm">
							Try it!
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default SubscribeModal;
