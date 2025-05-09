import Link from 'next/link';
import ProductCard from './ProductCard';
import { products } from '@/app/lib/products';

export default function CatalogItems() {
	return (
		<>
			<div>
				<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					<h2 className="text-2xl font-bold tracking-tight text-gray-200">Catalog</h2>

					<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
						{products.map((product) => (
							<Link key={product.id} href={`/product/${product.id}`} className="group relative">
								<ProductCard product={product} />
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
