'use client';
import type { IBlogWithContent } from '@/constants/fetch';
import { urlFor } from '@/lib/utils';
import { EyeOpenIcon } from '@radix-ui/react-icons';
import { PortableText } from 'next-sanity';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import PortableImageComponent from './PortableImageComponent';
import DialogBadge from './SmallBadge';
import { Dialog, DialogContent } from './ui/dialog';

interface Props {
	blog: IBlogWithContent;
}

const MobileArticle = ({ blog }: Props) => {
	const eventImageUrl = blog ? urlFor(blog.bgImage).url() : null;
	const components = {
		types: {
			image: PortableImageComponent,
		},
	};

	const [open, setOpen] = useState(false);
	const router = useRouter();

	useEffect(() => {
		// Open the modal automatically when the component mounts
		setOpen(true);
	}, []);

	const onClose = () => {
		setOpen(false);
		router.push('/');
	};

	return (
		<Dialog open={open} onOpenChange={onClose}>
			<DialogContent
				className="border-none md:max-w-[60%] p-0 pb-4 md:max-h-[80%]  overflow-scroll w-full h-full max-w-none max-h-none  "
				closeButtonClassName="text-white"
			>
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
							<DialogBadge
								title={blog.tag.title}
								backgroundColor={blog.tag.backgroundColor}
							/>
						</div>
					</article>
				</div>
				<div className="p-8 text-lg leading-10 ">
					<PortableText value={blog.content} components={components} />
				</div>

				<div className="block md:hidden lg:hidden">
					<Footer />
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default MobileArticle;
