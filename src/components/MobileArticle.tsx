'use client';
import type { IBlogWithContent } from '@/constants/fetch';
import { urlFor } from '@/lib/utils';
import { EyeOpenIcon } from '@radix-ui/react-icons';
import { PortableText } from 'next-sanity';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Footer from './Footer';
import NavBar from './NavBar';
import PortableImageComponent from './PortableImageComponent';
import DialogBadge from './SmallBadge';

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

	const router = useRouter();
	const dialogRef = useRef<HTMLDialogElement>(null);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		if (!dialogRef.current?.open) {
			dialogRef.current?.showModal();
		}
	}, []);

	function onDismiss() {
		router.back();
	}

	const modalContent = (
		<div className="modal-backdrop">
			<dialog ref={dialogRef} className="modal" onClose={onDismiss}>
				<div className="border-none md:max-w-[60%] p-0 pb-4 md:max-h-[80%]  overflow-scroll w-full h-full max-w-none max-h-none  ">
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
				</div>
				<button type="button" onClick={onDismiss} className="close-button" />
			</dialog>
		</div>
	);

	// Only create portal after component has mounted on the client
	return mounted
		? createPortal(modalContent, document.getElementById('modal-root')!)
		: null;
};

export default MobileArticle;
