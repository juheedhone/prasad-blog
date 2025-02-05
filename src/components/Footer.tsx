import IconModal from "./IconModal";
import SearchInput from "./SearchInput";

const Footer = () => {
	return (
		<div className="fixed bottom-0 right-0 left-0 p-4 bg-white z-10  md:hidden">
			<div className="flex border rounded-lg shadow-sm p-2 text-[10px] lg:text-sm  font-normal">
				<SearchInput />
			</div>

			<IconModal />
		</div>
	);
};
export default Footer;
