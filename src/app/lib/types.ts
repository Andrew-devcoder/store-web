export type Product = {
	id: number;
	name: string;
	price: number;
	description: string;
	imageSrc: string;
	imageAlt: string;
	color: string;
	colors: { name: string; class: string; selectedClass: string }[];
	sizes: { name: string; inStock: boolean }[];
	rating: number;
	reviewCount: number;
};
