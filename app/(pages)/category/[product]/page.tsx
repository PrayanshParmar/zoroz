"use client";

import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getProductByCategory } from "@/lib/backend-query/query";
import { ProductCardType } from "@/lib/types/query";
import ProductCard from "@/components/custom-ui/product-card";
import { StarIcon } from "lucide-react";
import Link from "next/link";
import Spinner from "@/components/custom-ui/spinner";

export default function CategoryPage({
  params,
}: {
  params: { product: string };
}) {
  const { product } = params;

  const { data: products, isLoading }: UseQueryResult<ProductCardType[]> =
    useQuery({
      queryKey: ["product", product],
      queryFn: () => getProductByCategory(product),
      staleTime: Infinity,
    });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {product} Department
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <h2 className="text-lg font-semibold mb-4">Refine by</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Price</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Under $25
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    $25 to $50
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    $50 to $100
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    $100 to $200
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    $200 & Above
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Avg. Customer Review</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="flex items-center">
                    <StarIcon className="text-yellow-400 w-5 h-5" /> & Up
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center">
                    <StarIcon className="text-yellow-400 w-5 h-5" />
                    <StarIcon className="text-yellow-400 w-5 h-5" /> & Up
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center">
                    <StarIcon className="text-yellow-400 w-5 h-5" />
                    <StarIcon className="text-yellow-400 w-5 h-5" />
                    <StarIcon className="text-yellow-400 w-5 h-5" /> & Up
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center">
                    <StarIcon className="text-yellow-400 w-5 h-5" />
                    <StarIcon className="text-yellow-400 w-5 h-5" />
                    <StarIcon className="text-yellow-400 w-5 h-5" />
                    <StarIcon className="text-yellow-400 w-5 h-5" /> & Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {isLoading ? (
          <div className="w-full h-screen flex items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <>
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products?.map((products) => (
                  <ProductCard
                    key={products.id}
                    id={products.id}
                    title={products.title}
                    thumbnail={products.thumbnail}
                    discountPercentage={products.discountPercentage}
                    price={products.price}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
