import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const SubscribeModal = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="text-[10px] lg:text-sm">Yes, Please!</Button>
			</DialogTrigger>
			<DialogContent className="p-0">
				<div className="bg-black text-white text-[22px] h-20 flex items-center rounded-sm justify-center">
					Subscribe to NewSletter
				</div>
				<div className="m-8 text-lg">
					<h1>Hey, I'm Prasad. Every Monday I share:</h1>
					<ul className="list-inside list-disc">
						<li>3 short examples</li>
						<li>2 copywriting tips</li>
						<li>1 favourite tweet</li>
					</ul>
				</div>
				<h2>
					Marketers voted it the “#1 marketing newsletter”. 130k people enjoy
					it.
				</h2>
				<div className="flex border md:max-w-xl w-full md:w-[50%] rounded-lg shadow-sm p-2 text-[10px] lg:text-sm font-normal">
					<input
						type="email"
						id="email"
						placeholder="Subscribe to tips over email"
						className="outline-none flex-1"
					/>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default SubscribeModal;
