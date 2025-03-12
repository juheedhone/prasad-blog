import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const IconModal = () => {
	return (
		<div className="flex justify-center items-center space-x-4 pt-2 ">
			<Instagram className="w-6 h-6 stroke-1.5 hover:text-blue-500 transition-all duration-300" />
			<Twitter className="w-6 h-6 stroke-1.5 hover:text-blue-500 transition-all duration-300" />
			<Linkedin className="w-6 h-6 stroke-1.5 hover:text-blue-500 transition-all duration-300" />
			<Youtube className="w-6 h-6 stroke-1.5 hover:text-blue-500 transition-all duration-300" />
		</div>
	);
};

export default IconModal;
