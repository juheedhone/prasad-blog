import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

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

export const urlFor = (source: SanityImageSource) =>
	imageUrlBuilder({ dataset: "production", projectId: "4elu8cpw" }).image(
		source,
	);
