import { defineField, defineType } from "sanity";

export const blogType = defineType({
	name: "blog",
	title: "Blog",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "backgroundImage",
			title: "Background Image",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "tags",
			title: "Tags",
			type: "array",
			of: [{ type: "string" }],
		}),

		defineField({
			name: "time",
			title: "Time to Read",
			type: "number",
			validation: (Rule) => Rule.min(0),
		}),
		defineField({
			name: "publishedAt",
			title: "Published At",
			type: "datetime",
			validation: (Rule) => Rule.required(),
		}),
	],
});
