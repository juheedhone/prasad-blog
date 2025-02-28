export interface IBlogWithContent {
	title: string;
	timeToRead: number;
	slug: string;
	content: string;
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
