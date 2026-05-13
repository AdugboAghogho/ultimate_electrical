"use client";

import Link from "next/link";
import Image from "next/image";
import Banner from "@/components/Banner";
import SideBar from "@/components/SideBar";
import HeroBanner from "@/components/HeroBanner";
import ProductGrid from "@/components/ProductGrid";
import { Search, ShoppingBag } from "lucide-react";
import image from "@/public/light.jpg";
import VideoBanner from "@/components/VideoBanner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCartStore } from '@/store/useCartStore';
import { usePathname } from "next/navigation";

// import { useUser } from "@clerk/nextjs";


export default function ShopClient({
  products,
}: {
  products: any[];
}) {
  // const { user } = useUser();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // This sends the user to /search?query=theirtext
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };
  const { items } = useCartStore();
  const pathname = usePathname();



  return (
    <div className="flex max-w-400 mx-auto">
      <SideBar />

      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-18 mb-8">
          <div className="flex justify-between items-center w-full md:hidden">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 overflow-hidden relative">
                {/* {user?.imageUrl && ( */}
                <Link href="/profile">
                  <Image
                    // src={user.imageUrl || image}
                    src={image}
                    alt="User"
                    fill
                    className="object-cover"
                  />
                </Link>
                {/* )} */}
              </div>
              <div>
                <p className="text-xs text-gray-400">Welcome</p>
                <p className="font-bold text-sm">
                  {"Valued Customer"}
                  {/* {user?.fullName || "Valued Customer"} */}
                </p>
              </div>
            </div>

            {/* Cart Button (Mobile Position) */}
            <Link href="/cart">
              <button className="w-10 h-10 rounded-full bg-[#091291e7] flex items-center justify-center shadow-orange-200 shadow-lg text-white hover:scale-110 transition-transform cursor-pointer">
                <ShoppingBag className="w-5 h-5" />
              </button>
            </Link>
          </div>

          {/* --- ROW 2: Search Bar (Full width on mobile, Centered on Desktop) --- */}
          <div className="flex-1 w-full md:max-w-md relative md:mx-4">
            <form onSubmit={handleSearch}>
              <button type="submit" className="absolute left-4 top-1/2 -translate-y-1/2">
                <Search className="w-4 h-4 text-gray-400 hover:text-orange-500 transition-colors" />
              </button>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for clothes..."
                className="w-full bg-white border border-gray-100 rounded-full py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 shadow-sm"
              />
            </form>
          </div>

          {/* --- DESKTOP CART (Hidden on Mobile) --- */}
          <div className="hidden md:flex gap-3">
            <Link href="/cart">
              <button className="w-10 h-10 rounded-full bg-[#091291e7] flex items-center justify-center shadow-orange-200 shadow-lg text-white">
                <ShoppingBag
                  className={`w-6 h-6 ${pathname === "/cart" ? "fill-current" : ""}`}
                />
                {/* Badge Logic */}
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full text-black text-[15px] flex items-center justify-center font-bold">
                    {items.length}
                  </span>
                )}
              </button>
            </Link>
          </div>
        </header>

        {/* Hero Banner (Burberry style) */}
        <HeroBanner />

        <ProductGrid products={products} />

        <VideoBanner />

        <Banner />
      </main>
    </div>
  );
}
