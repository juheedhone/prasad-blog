import { urlFor } from '@/lib/utils';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface Props {
	value: SanityImageSource;
}

const PortableImageComponent = ({ value }: Props) => {
	return (
		<img
			src={urlFor(value).width(800).auto('format').url()}
			alt=""
			loading="lazy"
			style={{
				display: 'block',
				margin: '0 auto',
			}}
		/>
	);
};

export default PortableImageComponent;
