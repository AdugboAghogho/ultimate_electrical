import React from "react";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

const ProductGrid = ({
  products,
}: {
  products: any[];
}) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addItem } = useCartStore();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);


  const categoryList = useMemo(() => {
    if (!products || products.length === 0) return [];

    const uniqueCats = Array.from(new Set(products.map((p) => {
      if (typeof p.category === 'object') return p.category?.title;
      return p.category;
    }).filter(Boolean)));

    return uniqueCats.map(cat => ({
      name: String(cat).charAt(0).toUpperCase() + String(cat).slice(1).replace(/-/g, ' '),
      slug: cat
    }));
  }, [products]);

  // 2. FILTER PRODUCTS
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const pCat = typeof product.category === 'object' ? product.category?.title : product.category;
      const matchesCategory = selectedCategory
      ? pCat === selectedCategory
      : true;

      const matchesPrice = maxPrice
      ? Number(product.price) <= maxPrice
      : true;

      return matchesCategory && matchesPrice;
    });
  }, [products, selectedCategory, maxPrice]);

 
    return (
    <div className='mb-15'>
      <div className="flex gap-3 overflow-x-auto pb-4 mb-6 no-scrollbar">
        <button
          onClick={() => setActiveCategory("All")}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === "All" ? "bg-[#091291e7] text-white" : "bg-white border"}`}
        >
          All
        </button>
        {categoryList.map((cat: any) => (
          <button
            key={cat.slug}
            onClick={() => setSelectedCategory(selectedCategory === cat.slug ? null : cat.slug)}
            className={`px-6 py-2.5 cursor-pointer rounded-full text-xs font-bold shadow-xl transition-all whitespace-nowrap flex-shrink-0 ${
            selectedCategory === cat.slug
              ? "bg-[#091291] text-white scale-105"
              : "bg-white text-gray-500 border border-gray-100 hover:bg-gray-50"
            }`}
          >
        {cat.name}
  </button>
))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredProducts.map((product: any) => (
          <Link
            href={`/product/${product.slug}`}
            key={product._id}
            className="group"
          >
            <div className=" p-3 rounded-2xl shadow-xl hover:shadow-xl transition-all duration-300 border border-gray-50 h-full flex flex-col">
              {/* Image */}
              <div className="relative aspect-3/4 rounded-2xl overflow-hidden mb-3 bg-gray-100">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Details */}
              <div className="px-1 flex-1 flex flex-col">
                <h3 className="font-bold text-gray-900 mb-1 truncate">
                  {product.title}
                </h3>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    ₦{product.price},000
                  </span>

                  <button
                    className="w-10 h-10 bg-[#091291e7] rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-200 cursor-pointer hover:scale-110 transition-transform"
                    onClick={(e) => {
                      e.preventDefault(); // <--- THIS STOPS THE REDIRECT
                      addItem(product);
                    }}
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
