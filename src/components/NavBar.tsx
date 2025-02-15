import IconModal from "./IconModal";
import SearchInput from "./SearchInput";

const NavBar = () => {
	return (
		<div className="flex justify-between items-center fixed top-0 right-0 left-0 p-4 sm:px-8 md:px-10 lg:px-20 xl:px-24 2xl:px-32 bg-white z-10">
			<div className="flex items-center gap-2 sm:gap-4">
				<img src="navLogo.png" alt="logo" className="w-10 h-10" />
				<h1 className="font-bold text-xl max-w-28">Marketing Prasad</h1>
			</div>
			<SearchInput className="hidden md:flex" />
			<div className="md:hidden">
				<img src="chamburger.png" alt="filter" />
			</div>
			<div className="hidden md:block  ">
				<IconModal />
			</div>
		</div>
	);
};

export default NavBar;
