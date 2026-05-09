"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <section className="absolute fixed bg-white/10 backdrop-blur-xl w-full top-0 z-50 backdrop-blur-md border-b border-white/10 transition-all">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 cursor-pointer">
                        <Link href="/" className="flex items-center">
                            {/* Logo Image */}
                            <img
                                src="/LOGO.png"
                                alt="Ultimate Electrical Logo"
                                className="h-10 w-auto mr-2"
                            />
                            {/* Brand Name */}
                            <span className="text-2xl font-bold text-[#1a2b4b] tracking-tight">
                                Ultimate<span className="text-[#0033cc]">.Electrical</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className="text-[#091291e7] hover:text-[#FFD700] px-3 py-2 text-sm font-bold transition-colors drop-shadow-sm">Home</Link>
                        <Link href="#" className="text-[#091291e7] hover:text-[#FFD700] px-3 py-2 text-sm font-bold transition-colors drop-shadow-sm">About Us</Link>
                        <Link href="/shop" className="text-[#091291e7] hover:text-[#FFD700] px-3 py-2 text-sm font-bold transition-colors drop-shadow-sm">Shop</Link>
                        <Link href="#" className="text-[#091291e7] hover:text-[#FFD700] px-3 py-2 text-sm font-bold transition-colors drop-shadow-sm">Contact</Link>

                        {/* Call to Action Button */}
                        <button className="bg-[#091291e7] hover:bg-[#e6c200] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:scale-105">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-900 hover:text-[#FFD700] focus:outline-none p-2 transition-colors"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <X className="block h-7 w-7" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-7 w-7" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown - Dark Themed */}
            {isMobileMenuOpen && (
                <div className="md:hidden rounded-b-3xl backdrop-blur-md bg-[#0f0f0f]/95 border-b border-white/10 absolute w-full left-0 shadow-2xl">
                    <div className="px-6 pt-4 pb-8 space-y-3">
                        <Link href="/" className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-[#0a1128] hover:bg-[#FFD700] transition-all">
                            Home
                        </Link>
                        <Link href="/shop" className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-[#0a1128] hover:bg-[#FFD700] transition-all">
                            Shop
                        </Link>
                        <Link href="#" className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-[#0a1128] hover:bg-[#FFD700] transition-all">
                            Services
                        </Link>
                        <Link href="#" className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-[#0a1128] hover:bg-[#FFD700] transition-all">
                            Contact
                        </Link>
                        <div className="pt-4">
                            <Link href="/shop">
                                <button className="w-full bg-[#FFD700] hover:bg-[#e6c200] text-[#0a1128] px-5 py-3.5 rounded-3xl text-base font-bold transition-all shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                                    Get Started
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}