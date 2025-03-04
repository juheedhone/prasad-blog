import type { TypedObject } from 'sanity';

export interface IBlogWithContent {
	id: string;
	title: string;
	timeToRead: number;
	slug: string;
	content: TypedObject | TypedObject[];
	bgImage: {
		asset: {
			_ref: string;
			_type: string;
		};
		alt?: string;
	};
	tag: {
		title: string;
		backgroundColor: string;
	};
}
