import { ShoppingCart, User, Package } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            amazon
          </Link>
          <nav>
            <ul className="flex space-x-2 sm:space-x-4">
              <li>
                <Link href="/account" className="flex items-center">
                  <User className="mr-1" />
                  <span className="hidden sm:block">Account</span>
                </Link>
              </li>
              <li>
                <Link href="/orders" className="flex items-center">
                  <Package className="mr-1" />
                  <span className="hidden sm:block">Orders</span>
                </Link>
              </li>
              <li>
                <Link href="/cart" className="flex items-center">
                  <ShoppingCart className="mr-1" />
                  <span className="hidden sm:block">Cart</span>
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
