import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            amazon
          </Link>
          {/* <div className="flex-grow mx-4">
            <form className="flex">
              <Input
                type="search"
                placeholder="Search Amazon"
                className="w-full rounded-l-md"
              />
              <Button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-r-md"
              >
                <Search className="h-5 w-5" />
              </Button>
            </form>
          </div> */}
          {/* <SearchBar></SearchBar> */}
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/account" className="flex items-center">
                  <User className="mr-1" /> Account
                </Link>
              </li>
              <li>
                <Link href="/orders" className="flex items-center">
                  Orders
                </Link>
              </li>
              <li>
                <Link href="/cart" className="flex items-center">
                  <ShoppingCart className="mr-1" /> Cart
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4 mt-2">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/deals" className="hover:underline">
            Deals
          </Link>
          <Link href="/service" className="hover:underline">
            Service
          </Link>
          <Link href="/registry" className="hover:underline">
            Registry
          </Link>
          <Link href="/sell" className="hover:underline">
            Sell
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
