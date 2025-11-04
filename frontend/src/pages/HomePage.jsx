import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";
import ImageSlider from "../components/ImageSlider";
import Footer from "../components/Footer";
import OurService from "../components/OurService";

const categories = [
	{ href: "/sedan", name: "Sedan", imageUrl: "/jeans.jpg"},
	{ href: "/coupe", name: "Coupe", imageUrl: "/tshirts.jpg" },
	{ href: "/sport", name: "Sport", imageUrl: "/shoes.jpg" },
	{ href: "/suv", name: "Suv", imageUrl: "/glasses.png" },
	{ href: "/wagon", name: "Wagon", imageUrl: "/jackets.jpg" },
	{ href: "/pickup", name: "Pickup", imageUrl: "/suits.jpg" },
	{ href: "/van", name: "Van", imageUrl: "/bags.jpg" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<>
		<div className='relative min-h-screen text-white overflow-hidden'>

			<ImageSlider/>

			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-[#7A3DF2] mb-4'>
					Explore Our Categories
				</h1>
				<p className='text-center text-xl text-gray-900 mb-12'>
					Discover the latest trends in eco-friendly car
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
			<OurService/>
		</div>
		
		<Footer />
		</>
	);
};
export default HomePage;
