import SubscribeModal from "./SubscribeModal";

const SearchInput = () => {
	return (
		<>
			<input
				type="email"
				id="email"
				placeholder="Subscribe to tips over email"
				className="outline-none flex-grow"
			/>
			<SubscribeModal />
		</>
	);
};

export default SearchInput;
