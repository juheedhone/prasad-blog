'use client';
import type { IBlogWithContent } from '@/constants/fetch';
import { urlFor } from '@/lib/utils';
import {
	EyeOpenIcon,
	InstagramLogoIcon,
	LinkedInLogoIcon,
	TwitterLogoIcon,
} from '@radix-ui/react-icons';
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
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setMounted(true);
		if (!dialogRef.current?.open) {
			dialogRef.current?.showModal();
		}

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onDismiss();
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	function onDismiss() {
		router.back();
	}

	const modalContent = (
		<>
			<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
				<dialog
					ref={dialogRef}
					className="bg-white h-[calc(100%-55px-120px)] overflow-auto  sm:pt-0  relative flex justify-center items-center font-medium sm:w-[60%] sm:h-[80%] md:max-w-xl  md:rounded-lg "
					onClose={onDismiss}
				>
					<div className="flex flex-col h-full">
						<div className="block md:hidden ">
							<NavBar />
						</div>
						<div>
							<article className="relative h-48 w-full ">
								<div
									className="absolute inset-0 h-full brightness-50 w-full "
									style={{ backgroundImage: `url(${eventImageUrl})` }}
								/>
								<div className="relative flex flex-col items-center justify-center h-full">
									<h1 className="text-xl font-bold text-center text-white ">
										{blog.title}
									</h1>
								</div>
								<div className="absolute flex items-center text-xs text-white bottom-4 left-4">
									<EyeOpenIcon className="mr-1" />
									<p> {blog.timeToRead}Mins</p>
								</div>
								<div className="absolute bottom-4 right-4">
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

						<div className="block md:hidden">
							<Footer />
						</div>
						<div className="hidden md:flex items-center w-full px-8  pb-8 gap-4">
							<div className="h-[1px] bg-black w-full" />
							<div className="flex justify-center items-center gap-2 min-w-72">
								<p>CLICK ON ICON TO SHARE</p>
								<InstagramLogoIcon />
								<LinkedInLogoIcon />
								<TwitterLogoIcon />
							</div>
							<div className="h-[1px] bg-black w-full" />
						</div>
					</div>
					<button
						type="button"
						onClick={onDismiss}
						className="close-button ease-in duration-300 delay-100"
					/>
				</dialog>
			</div>
		</>
	);

	// Only create portal after component has mounted on the client
	return mounted
		? createPortal(modalContent, document.getElementById('modal-root')!)
		: null;
};

export default MobileArticle;
