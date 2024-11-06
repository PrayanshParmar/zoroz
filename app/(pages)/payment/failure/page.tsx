import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle } from "lucide-react";

export default function PaymentFailurePage() {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">
            <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            Payment Failed
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-6">
            We&apos;re sorry, but there was an issue processing your payment.
            Please try again or contact customer support.
          </p>
          <Link href="/checkout" passHref>
            <Button className="w-full">Try Again</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
