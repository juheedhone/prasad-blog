import type { IBlog } from '@/constants/blog.constants';
import { urlFor } from '@/lib/utils';
import { Cross2Icon, EyeOpenIcon } from '@radix-ui/react-icons';
import { PortableText, defineQuery } from 'next-sanity';
import Link from 'next/link';
import { sanityFetch } from '../../studio/live';
import Footer from './Footer';
import NavBar from './NavBar';
import PortableImageComponent from './PortableImageComponent';
import DialogBadge from './SmallBadge';
import { Button } from './ui/button';

const BLOG_QUERY = defineQuery(`
  *[_type == "blog" && slug.current == $slug][0]{
	content,
  }
`);

interface Props {
	blog: IBlog;
}

const MobileArticle = async ({ blog }: Props) => {
	const {
		data: { content },
	} = await sanityFetch({
		query: BLOG_QUERY,
		params: { slug: blog.slug.current },
	});

	const eventImageUrl = blog ? urlFor(blog.bgImage).url() : null;
	const components = {
		types: {
			image: PortableImageComponent,
		},
	};

	return (
		<div>
			{/* {loading ? (
				<div className="flex items-center justify-center h-screen">
					<ReloadIcon className="w-6 h-6 animate-spin" />
				</div>
			) : ( */}
			<>
				<div className="block md:hidden lg:hidden">
					<NavBar />
				</div>
				<div className="pt-28 sm:pt-0">
					<article className="relative h-48  max-w-full overflow-hidden  ">
						<div
							className="absolute  inset-0 h-full brightness-50 -z-10"
							style={{ backgroundImage: `url(${eventImageUrl})` }}
						/>
						<div className="flex flex-col items-center justify-center h-full">
							<h1 className="flex flex-col items-center text-xl font-bold text-center text-white ">
								{blog.title}
							</h1>
						</div>
						<div className="absolute flex items-center text-xs text-white bottom-4 left-4">
							<EyeOpenIcon className="mr-1" />
							<p> {blog.timeToRead}Mins</p>
						</div>
						<div className="absolute text-white bottom-4 right-4">
							<DialogBadge blogs={blog} />
						</div>
						<Link href="/">
							<Button
								className="absolute z-50 right-2 top-4 hover:bg-transparent hover:scale-125 transition-all hover:rotate-90"
								variant="ghost"
								size="icon"
							>
								<Cross2Icon className="w-6 h-6 text-white" />
							</Button>
						</Link>
					</article>
				</div>
				<div className="p-8 text-lg leading-10 ">
					<PortableText value={content} components={components} />
				</div>

				<div className="block md:hidden lg:hidden">
					<Footer />
				</div>
			</>
		</div>
	);
};

export default MobileArticle;
