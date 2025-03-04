// import { Dialog, DialogContent } from '@/components/ui/dialog';
// import { BLOG_QUERY } from '@/constants/sanityQueries.constants';
// import { sanityFetch } from '../../../../studio/live';

// const Page = async ({
// 	params,
// }: {
// 	params: Promise<{ slug: string }>;
// }) => {
// 	const { slug } = await params;
// 	console.log('🚀 ~ slug:', slug);

// 	const { data } = await sanityFetch({
// 		query: BLOG_QUERY,
// 		params: { slug },
// 	});
// 	console.log('🚀 ~ data:', data);

// 	return (
// 		<Dialog>
// 			<DialogContent
// 				className="border-none md:max-w-[60%] p-0 pb-4 md:max-h-[80%]  overflow-scroll w-full h-full max-w-none max-h-none  "
// 				closeButtonClassName="text-white"
// 			>
// 				{/* <MobileArticle blog={blog} /> */}
// 			</DialogContent>
// 		</Dialog>
// 	);
// };

// export default Page;

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	console.log('🚀 ~ slug:', slug);
	return <h1 className="mt-40">slug</h1>;
}
