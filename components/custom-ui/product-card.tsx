import Image from "next/image";
import { Card, CardContent, CardFooter } from "../ui/card";
import Link from "next/link";

interface productCardProps {
  id: number;
  thumbnail: string;
  title: string;
  discountPercentage: number;
  price: number;
}
const ProductCard = ({
  id,
  thumbnail,
  title,
  discountPercentage,
  price,
}: productCardProps) => {
  return (
    <Card key={id}>
      <CardContent className="p-4">
        <Image
          src={thumbnail}
          alt={title}
          width={200}
          height={200}
          className="w-full h-40 object-cover mb-2"
        />
        <h3 className="font-semibold line-clamp-1 ">{title}</h3>
        <p className="text-red-600 font-bold">
          ${discountPercentage.toFixed(2)}
        </p>
        <p className="text-sm text-gray-500 line-through">
          ${price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter>
        <Link href={`/products/${id}`} className="w-full">
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded">
            See Details
          </button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
