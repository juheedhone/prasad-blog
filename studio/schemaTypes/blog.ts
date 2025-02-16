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
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "bgImage",
			title: "Background image",
			type: "image",
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "tag",
			title: "Tag",
			type: "array",
			of: [{ type: "reference", to: { type: "tag" } }],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "content",
			title: "Content",
			type: "blockContent",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "timeToRead",
			title: "Time To Read Blog",
			type: "number",
			validation: (Rule) => Rule.required(),
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
