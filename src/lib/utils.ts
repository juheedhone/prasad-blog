import { TAGS } from "@/constants/tags.constants";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getRandomTags = () => {
	const randomIndex = Math.floor(Math.random() * TAGS.length);
	return TAGS[randomIndex];
};

export const getRandomTagColor = () => {
	const randomColors = [
		"#FFC7C7",
		"#C7FFFB",
		"#C7E4FF",
		"#DEC7FF",
		"#FFD7FF",
		"#FFD7C7",
		"#FFD7E4",
		"#FFD7FF",
		"#FFD7C7",
		"#FFD7E4",
		"#FFD7FF",
	];
	return randomColors[Math.floor(Math.random() * randomColors.length)];
};
