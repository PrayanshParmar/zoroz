import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

interface categoryCardProps {
  index: number;
  name: string;
  image: string;
  url: string;
}
const CategoryCard = ({ index, name, image, url }: categoryCardProps) => {
  return (
    <Link href={`/category/${url}`} key={index} className="block">
      <Card>
        <CardContent className="p-4">
          <Image
            src={`/category/${image}.jpg`}
            alt={name}
            width={200}
            height={200}
            className="w-full h-40 object-cover mb-2"
          />
          <h3 className="font-semibold text-center">{name}</h3>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
