export interface ProductData {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: MetaData;
  images: string[];
  thumbnail: string;
}

interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Review {
  rating: number;
  comment: string;
  date: string; // ISO date string
  reviewerName: string;
}

interface MetaData {
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  barcode: string;
  qrCode: string;
}

export interface ProductCardType {
  id: number;
  title: string;
  thumbnail: string;
  discountPercentage: number;
  price: number;
  rating: number;
  reviews: Review[];
}

export interface paymentStatus {
  message: "success" | "failure";
}

export interface cart {
  id: number;
  title: string;
  price: number;
  quantity: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}
