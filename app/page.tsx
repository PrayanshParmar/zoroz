"use client";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getAllProducts } from "@/lib/backend-query/query";
import { ProductData } from "@/lib/types/query";
import PromoCarousal from "@/components/custom-ui/promo-carousal";
import ProductCard from "@/components/custom-ui/product-card";
import CategoryCard from "@/components/custom-ui/category-card";

const featuredCategories = [
  { name: "Laptops", image: "1", url: "laptops" },
  { name: "Groceries", image: "2", url: "groceries" },
  { name: "Home & Kitchen", image: "3", url: "kitchen-accessories" },
  { name: "Furniture", image: "4", url: "furniture" },
];

export default function Home() {
  const { data: dealProducts, isLoading }: UseQueryResult<ProductData[]> =
    useQuery({
      queryKey: ["products"],
      queryFn: getAllProducts,
      staleTime: Infinity,
    });

  return (
    <div className=" w-full h-full">
      <PromoCarousal></PromoCarousal>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {featuredCategories.map((category, index) => (
            <CategoryCard
              key={index}
              index={index}
              name={category.name}
              image={category.image}
              url={category.url}
            />
          ))}
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Today&apos;s Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {isLoading ? (
            <div>loading</div>
          ) : dealProducts ? (
            <>
              {dealProducts.map((products) => (
                <ProductCard
                  key={products.id}
                  id={products.id}
                  title={products.title}
                  thumbnail={products.thumbnail}
                  discountPercentage={products.discountPercentage}
                  price={products.price}
                />
              ))}
            </>
          ) : (
            <div>No item found</div>
          )}
        </div>
      </section>
    </div>
  );
}
