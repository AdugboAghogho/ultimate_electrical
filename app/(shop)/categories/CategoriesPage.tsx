"use client";

import React, { useState, useMemo, useEffect } from 'react';
import SideBar from "@/components/SideBar";

export default function CategoriesPage({ products = [] }: { products: any[] }) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [maxPrice, setMaxPrice] = useState<number | null>(null);

    useEffect(() => {
        console.log("Raw products received:", products);
    }, [products]);


    // 1. GENERATE CATEGORIES
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
        <div className="flex flex-col md:flex-row max-w-[1400px] mx-auto bg-white min-h-screen">
            <SideBar />
            <main className="flex-1 p-4 md:p-12 mt-16 md:mt-0">
                <header className="mb-8 flex justify-between items-center">
                    <h1 className="text-2xl md:text-4xl font-black text-gray-900">Catalog</h1>
                    {(selectedCategory || maxPrice) && (
                        <button onClick={() => { setSelectedCategory(null); setMaxPrice(null) }} className="text-red-500 text-xs font-bold">
                            RESET
                        </button>
                    )}
                </header>

                {/* CATEGORY BUTTONS */}
                <div className="mb-8">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Collection</p>
                    <div className="flex flex-wrap gap-2">
                        {categoryList.map((cat: any) => (
                            <button
                                key={cat.slug}
                                onClick={() => setSelectedCategory(selectedCategory === cat.slug ? null : cat.slug)}
                                className={`px-5 py-2 rounded-full text-xs font-bold border transition-all ${selectedCategory === cat.slug
                                    ? "bg-[#091291] text-white border-[#091291]"
                                    : "bg-white text-gray-500 border-gray-100"
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* MASONRY GRID */}
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {filteredProducts.map((product) => (
                        <div key={product._id} className="break-inside-avoid bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
                            <img src={product.imageUrl} className="w-full rounded-xl mb-3" alt={product.title} />
                            <h3 className="font-bold text-xs truncate">{product.title}</h3>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-[#091291] font-bold">₦{product.price}k</span>
                                <button className="w-8 h-8 bg-[#091291] text-white rounded-full flex items-center justify-center">+</button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 border-2 border-dashed rounded-3xl text-gray-400">
                        No products found for this filter.
                    </div>
                )}
            </main>
        </div>
    );
}