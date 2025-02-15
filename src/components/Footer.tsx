import IconModal from "./IconModal";
import SearchInput from "./SearchInput";

const Footer = () => {
	return (
		<div className="fixed bottom-0 right-0 left-0 p-4 bg-white z-10 md:hidden">
			<SearchInput />
			<IconModal />
		</div>
	);
};
export default Footer;
