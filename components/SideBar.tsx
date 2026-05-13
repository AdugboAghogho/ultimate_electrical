"use client";

import Image from "next/image";
import Link from "next/link"; // Added
import { usePathname } from "next/navigation"; // Added to handle active states
import {
  ShoppingBag,
  Filter,
  User,
  ShoppingCart,
} from "lucide-react";
import image from "@/public/banner (1).jpg";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="flex">
      <aside className="hidden md:flex flex-col w-70 h-screen sticky top-0 p-8 border-r border-orange-100 shadow-xl bg-white/50 backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 rounded-full bg-orange-100 overflow-hidden relative">
            <Image
              src={image}
              alt="User"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs text-gray-400">Welcome</p>
            <p className="font-bold text-sm">Valued Customer</p>
          </div>
        </div>

        <nav className="space-y-2 flex-1">
          <SidebarLink
            href="/shop"
            icon={ShoppingBag}
            label="Shop"
            active={pathname === "/shop"}
          />
          <SidebarLink
            href="/cart"
            icon={ShoppingCart}
            label="Cart"
            active={pathname === "/cart"}
          />
          {/* Changed label to Filters/Categories and icon is Filter */}
          <SidebarLink
            href="/categories"
            icon={Filter}
            label="Filters"
            active={pathname === "/categories"}
          />
          <SidebarLink
            href="/profile"
            icon={User}
            label="Profile"
            active={pathname === "/profile"}
          />
        </nav>

        <div className="mt-auto">
          <div className="bg-[#091291e7] text-white p-4 rounded-2xl shadow-lg shadow-orange-200">
            <p className="text-xs font-medium opacity-80 mb-1">New Collection</p>
            <p className="font-bold text-lg mb-2">Summer Sale</p>
            <button className="bg-white text-[#091291e7] text-xs font-bold px-4 py-2 rounded-full">
              View Now
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

function SidebarLink({ icon: Icon, label, active, href }: any) {
  return (
    <Link href={href || "#"}>
      <button
        className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all mb-2 ${active
            ? "bg-[#091291e7] text-white shadow-lg shadow-orange-200"
            : "text-gray-500 hover:bg-orange-50 hover:text-[#091291e7]"
          }`}
      >
        <Icon className="w-5 h-5" />
        <span className="font-semibold text-sm">{label}</span>
      </button>
    </Link>
  );
}

export default SideBar;