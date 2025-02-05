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
