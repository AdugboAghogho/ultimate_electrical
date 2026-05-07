"use client";
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Collection() {
    // Mock Database of 12 items
    const allProducts = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        name: `ECLAX MODEL ${i + 1}`,
        price: '$399.00',
        rating: 5,
        img: `https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=500&auto=format&fit=crop&sig=${i}` // unique sig for variety
    }));

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(allProducts.length / itemsPerPage);

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = allProducts.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <section className="px-6 md:px-12 py-16 max-w-[1400px] mx-auto text-[#1A1A1A]">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-medium tracking-tight uppercase mb-4">Our Product</h2>
                <p className="text-xs text-gray-500 uppercase tracking-wide leading-relaxed max-w-md mx-auto">
                    Each item in our collection is a testament to our commitment to quality, craftsmanship, and customer satisfaction.
                </p>
            </div>

            <div className="relative">
                {/* Render Current Page Items */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                    {currentItems.map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="w-full aspect-[4/3] bg-[#F5F5F5] rounded-3xl mb-4 flex items-center justify-center overflow-hidden transition-all group-hover:bg-[#EFEFEF]">
                                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="flex justify-between items-start px-2">
                                <div>
                                    <h3 className="font-semibold text-sm mb-2 uppercase">{product.name}</h3>
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-3.5 h-3.5 ${i < product.rating ? 'fill-[#D4A373] text-[#D4A373]' : 'text-gray-300'}`} />
                                        ))}
                                    </div>
                                </div>
                                <span className="font-bold text-sm">{product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Side Arrows for Next/Prev Page */}
                <button
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="absolute top-[40%] -left-5 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100 hover:scale-105 transition-transform hidden md:flex disabled:opacity-50"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="absolute top-[40%] -right-5 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100 hover:scale-105 transition-transform hidden md:flex disabled:opacity-50"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        className={`h-1.5 rounded-full transition-all ${currentPage === i + 1 ? 'w-8 bg-black' : 'w-1.5 bg-gray-300 hover:bg-gray-400'}`}
                    />
                ))}
            </div>
        </section>
    );
}