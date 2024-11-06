import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccessPage() {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            Payment Successful
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-6">
            Thank you for your purchase! Your order has been successfully
            processed.
          </p>
          <Link href="/" passHref>
            <Button className="w-full">Return to Home</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
