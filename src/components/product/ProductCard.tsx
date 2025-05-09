import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ el }: { el: any }) {
	return (
		<>
			<Image
				alt={el.imageAlt}
				src={el.imageSrc}
				className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
			/>
			<div className="mt-4 flex justify-between">
				<div>
					<h3 className="text-sm text-gray-200">
						<span aria-hidden="true" className="absolute inset-0" />
						{el.name}
					</h3>
					<p className="mt-1 text-sm text-gray-300">{el.color}</p>
				</div>
				<p className="text-sm font-medium text-gray-400">{el.price}</p>
			</div>
		</>
	);
}
