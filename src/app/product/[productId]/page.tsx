'use client';

import { use, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, Radio, RadioGroup } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/20/solid';

import { products } from '@/app/lib/products';
export default function ProductDetails({ params }: { params: Promise<{ productId: string }> }) {
	const { productId } = use(params);
	const id = Number(productId);
	const product = products.find((p) => p.id === id);

	const [open, setOpen] = useState(true);
	const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
	const [selectedSize, setSelectedSize] = useState(product?.sizes[2]);

	if (!product) {
		return <h1>Product not found</h1>;
	}

	function classNames(...classes: (string | undefined | null | false)[]) {
		return classes.filter(Boolean).join(' ');
	}

	return (
		<>
			<div className="flex w-full mx-auto transform text-left text-base transition data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:my-8 md:max-w-2xl md:px-4 data-closed:md:translate-y-0 data-closed:md:scale-95 lg:max-w-4xl">
				<div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
					<img
						alt={product.imageAlt}
						src={product.imageSrc}
						className="aspect-2/3 w-full rounded-lg bg-gray-100 object-cover sm:col-span-4 lg:col-span-5"
					/>
					<div className="sm:col-span-8 lg:col-span-7">
						<h2 className="text-2xl font-bold text-gray-200 sm:pr-12">{product.name}</h2>

						<section aria-labelledby="information-heading" className="mt-2">
							<p className="text-2xl text-gray-300">{product.price}</p>
							<div className="mt-6">
								<div className="flex items-center">
									<div className="flex items-center">
										{[0, 1, 2, 3, 4].map((rating) => (
											<StarIcon
												key={rating}
												aria-hidden="true"
												className={classNames(
													product?.rating > rating ? 'text-gray-200' : 'text-gray-800',
													'size-5 shrink-0'
												)}
											/>
										))}
									</div>

									<a
										href="#"
										className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
									>
										{product?.reviewCount} reviews
									</a>
								</div>
							</div>
						</section>

						<section aria-labelledby="options-heading" className="mt-10">
							<form>
								<fieldset aria-label="Choose a color">
									<legend className="text-sm font-medium text-gray-400">Color</legend>

									<RadioGroup
										value={selectedColor}
										onChange={setSelectedColor}
										className="mt-4 flex items-center gap-x-3"
									>
										{product.colors.map((color) => (
											<Radio
												key={color.name}
												value={color}
												aria-label={color.name}
												className={classNames(
													color.selectedClass,
													'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-hidden data-checked:ring-2 data-focus:data-checked:ring-3 data-focus:data-checked:ring-offset-1'
												)}
											>
												<span
													aria-hidden="true"
													className={classNames(
														color.class,
														'size-8 rounded-full border border-black/10'
													)}
												/>
											</Radio>
										))}
									</RadioGroup>
								</fieldset>

								<fieldset aria-label="Choose a size" className="mt-10">
									<div className="flex items-center justify-between">
										<div className="text-sm font-medium text-gray-400">Size</div>
										<a
											href="#"
											className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
										>
											Size guide
										</a>
									</div>

									<RadioGroup
										value={selectedSize}
										onChange={setSelectedSize}
										className="mt-4 grid grid-cols-4 gap-4"
									>
										{product.sizes.map((size) => (
											<Radio
												key={size.name}
												value={size}
												disabled={!size.inStock}
												className={classNames(
													size.inStock
														? 'cursor-pointer bg-white text-gray-900 shadow-xs'
														: 'cursor-not-allowed bg-gray-50 text-gray-200',
													'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden data-focus:ring-2 data-focus:ring-indigo-500 sm:flex-1'
												)}
											>
												<span>{size.name}</span>
												{size.inStock ? (
													<span
														aria-hidden="true"
														className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border"
													/>
												) : (
													<span
														aria-hidden="true"
														className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
													>
														<svg
															stroke="currentColor"
															viewBox="0 0 100 100"
															preserveAspectRatio="none"
															className="absolute inset-0 size-full stroke-2 text-gray-200"
														>
															<line
																x1={0}
																x2={100}
																y1={100}
																y2={0}
																vectorEffect="non-scaling-stroke"
															/>
														</svg>
													</span>
												)}
											</Radio>
										))}
									</RadioGroup>
								</fieldset>

								<button
									type="submit"
									className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
								>
									Add to bag
								</button>
							</form>
						</section>
					</div>
				</div>
			</div>
		</>
	);
}
