import SearchInput from "./SearchInput";

const Footer = () => {
	return (
		<div className="fixed bottom-0 right-0 left-0 p-4 bg-white z-10 border-t-2  ">
			<div className="flex border rounded-lg shadow-sm p-2 text-[10px] lg:text-sm  font-normal">
				<SearchInput />
			</div>
			<div className="flex justify-center items-center space-x-6 pt-2">
				<img src="/youtube.svg" alt="logo" />
				<img src="/Vector.svg" alt="logo" />
				<img src="/twitter.svg" alt="logo" />
				<img src="/link.svg" alt="logo" />
			</div>
		</div>
	);
};
export default Footer;
