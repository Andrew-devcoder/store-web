import { Product } from '@/app/lib/types';
import Image from 'next/image';

type Props = {
	product: Product;
};

export default function ProductCard({ product }: Props) {
	return (
		<>
			<Image
				alt={product.imageAlt}
				src={product.imageSrc}
				className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
			/>
			<div className="mt-4 flex justify-between">
				<div>
					<h3 className="text-sm text-gray-200">
						<span aria-hidden="true" className="absolute inset-0" />
						{product.name}
					</h3>
					<p className="mt-1 text-sm text-gray-300">{product.color}</p>
				</div>
				<p className="text-sm font-medium text-gray-400">{product.price}</p>
			</div>
		</>
	);
}
