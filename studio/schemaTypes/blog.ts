import { defineField, defineType } from "sanity";

export default defineType({
	name: "blog",
	title: "Blog",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		}),
		defineField({
			name: "bgImage",
			title: "Background image",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "tag",
			title: "Tag",
			type: "array",
			of: [{ type: "reference", to: { type: "tag" } }],
		}),
		defineField({
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
		}),
		defineField({
			name: "content",
			title: "Content",
			type: "blockContent",
		}),
		defineField({
			name: "timeToRead",
			title: "Time To Read Blog",
			type: "number",
		}),
	],
	preview: {
		select: {
			title: "title",
			media: "mainImage",
		},
		prepare(selection) {
			return { ...selection };
		},
	},
});
