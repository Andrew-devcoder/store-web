import CatalogItems from '@/components/product/CatalogItems';
import Link from 'next/link';

export default function Catalog() {
	return (
		<div className="flex flex-col gap-4 items-center justify-center min-h-screen p-8 pb-20">
			<CatalogItems />

			<Link
				className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
				href="/"
			>
				Back to Home
			</Link>
		</div>
	);
}
