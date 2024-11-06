"use client";

import { useState } from "react";
import Image from "next/image";
import { StarIcon, Check, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ProductCardType, ProductData } from "@/lib/types/query";
import { getSingleProduct } from "@/lib/backend-query/query";
import Spinner from "@/components/custom-ui/spinner";
import formatDate from "@/lib/format-date";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RatingStars from "@/components/custom-ui/rating-star";
import { useRouter } from "next/navigation";

export default function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const { data: product }: UseQueryResult<ProductData> = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const data = await getSingleProduct(id);
      return data;
    },
  });

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product?.title}(s) to cart`);
    // Here you would typically update the cart state or send a request to your backend
  };

  const handleBuyNow = () => {
    return router.push("/checkout");
  };

  return (
    <>
      {product ? (
        <div className="w-full h-full flex flex-col gap-2">
          <div className="flex flex-col md:flex-row gap-8 mt-4">
            <div className="md:w-2/5">
              <Image
                src={product?.images[0]}
                alt={product.title}
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="md:w-2/5">
              <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
              <Link
                href="#"
                className="text-blue-600 hover:underline mb-4 block"
              >
                {product.brand}
              </Link>
              <div className="flex items-center mb-4">
                <RatingStars rating={product.rating} />
              </div>
              <div className="border-b border-gray-300 pb-4 mb-4">
                <span className="text-3xl font-bold">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              <p className="mb-4">{product.description}</p>
              <div className="mb-4">
                <h2 className="font-semibold mb-2">About this item</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Feature 1 of the product</li>
                  <li>Feature 2 of the product</li>
                  <li>Feature 3 of the product</li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/5">
              <Card>
                <CardContent className="p-4">
                  <p className="text-2xl font-bold mb-2">
                    ${product.price.toFixed(2)}
                  </p>
                  <p className="text-blue-600 mb-2">
                    FREE delivery <span className="font-bold">Tomorrow</span>
                  </p>
                  <p className="flex items-center text-sm mb-4">
                    <Truck className="w-4 h-4 mr-1" /> Fastest delivery:{" "}
                    <span className="font-bold">Today</span>
                  </p>
                  <p className="flex items-center text-sm text-green-600 mb-4">
                    <Check className="w-4 h-4 mr-1" /> In Stock
                  </p>
                  <div className="mb-4">
                    <label htmlFor="quantity" className="block mb-2">
                      Quantity:
                    </label>
                    <select
                      id="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      className="w-full border rounded p-2"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Button
                    onClick={handleAddToCart}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black mb-2"
                  >
                    Add to Cart
                  </Button>
                  <Button
                    onClick={handleBuyNow}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="mb-8">
            <Accordion type="single" collapsible>
              <AccordionItem value="return-policy">
                <AccordionTrigger>Return Policy</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p className="font-semibold">{product.returnPolicy}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
            <div className="grid gap-4">
              {product.reviews.map((review, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <span className="font-semibold mr-2">
                        {review.reviewerName}
                      </span>
                    </div>
                    <div className="flex items-center mb-2">
                      <RatingStars rating={review.rating} />
                      <span className="ml-2 text-gray-600 text-sm">
                        `Reviewed on {formatDate(review.date)}`
                      </span>
                    </div>
                    <p>{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex items-center justify-center">
          <Spinner />
        </div>
      )}
    </>
  );
}
