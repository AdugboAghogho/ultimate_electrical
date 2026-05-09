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
        <section className="absolute fixed bg-white/30 backdrop-blur-xl w-full top-0 z-50 backdrop-blur-md border-b border-white/10 transition-all">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center cursor-pointer">
                        <img
                            src="/LOGO.png" // Use the filename of your logo file
                            alt="Ultimate Electrical Logo"
                            className="h-8 w-auto mr-3" // Example Tailwind styling for height, width scaling, and right margin
                        />
                        <span className="text-2xl font-bold text-gray-800 tracking-tight drop-shadow-md">
                            Ultimate<span className="text-[#091291e7]">.Electrical</span>
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="#" className="text-slate-300 hover:text-[#FFD700] px-3 py-2 text-sm font-medium transition-colors drop-shadow-sm">Home</Link>
                        <Link href="#" className="text-slate-300 hover:text-[#FFD700] px-3 py-2 text-sm font-medium transition-colors drop-shadow-sm">About Us</Link>
                        <Link href="#" className="text-slate-300 hover:text-[#FFD700] px-3 py-2 text-sm font-medium transition-colors drop-shadow-sm">Services</Link>
                        <Link href="#" className="text-slate-300 hover:text-[#FFD700] px-3 py-2 text-sm font-medium transition-colors drop-shadow-sm">Contact</Link>

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
                <div className="md:hidden bg-[#0e1357e7] border-b border-white/10 absolute w-full left-0 shadow-2xl">
                    <div className="px-6 pt-4 pb-8 space-y-3">
                        <Link href="#" className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-[#0a1128] hover:bg-[#FFD700] transition-all">
                            Home
                        </Link>
                        <Link href="#" className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-[#0a1128] hover:bg-[#FFD700] transition-all">
                            About Us
                        </Link>
                        <Link href="#" className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-[#0a1128] hover:bg-[#FFD700] transition-all">
                            Services
                        </Link>
                        <Link href="#" className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-[#0a1128] hover:bg-[#FFD700] transition-all">
                            Contact
                        </Link>
                        <div className="pt-4">
                            <button className="w-full bg-[#FFD700] hover:bg-[#e6c200] text-[#0a1128] px-5 py-3.5 rounded-3xl text-base font-bold transition-all shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}