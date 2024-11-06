import "./globals.css";
import { Inter } from "next/font/google";
import { QueryProvider } from "@/components/provider/query-provider";
import NavBar from "@/components/custom-ui/navbar";
import Footer from "@/components/custom-ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amazon Clone",
  description: "A clone of Amazon's website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <QueryProvider>
          <NavBar />
          <main className="mx-auto h-full w-full px-4">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
