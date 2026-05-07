"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Star, ArrowRight, Quote, MapPin, Phone, Mail } from 'lucide-react';
import VideoBanner from './VideoBanner';
import MeetTheOwner from './MeetTheOwner';

export default function LightingWireframeLayout() {
    const [activeTab, setActiveTab] = useState('HOT');

    const newCollection = [
        { name: "PENDANT", img: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=500" },
        { name: "CHANDELIER", img: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=500" },
        { name: "WALL SCONCE", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=500" },
    ];

    const bestSellers = [
        { name: "Minimalist Drop", price: "$220", rating: 4, img: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=400" },
        { name: "Minimalist Drop", price: "$220", rating: 4, img: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=400" },
        { name: "Minimalist Drop", price: "$220", rating: 4, img: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=400" },
        { name: "Minimalist Drop", price: "$220", rating: 4, img: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=400" },
        { name: "Minimalist Drop", price: "$220", rating: 4, img: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=400" },
        { name: "Minimalist Drop", price: "$220", rating: 4, img: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=400" },
    ];

    const ourProducts = [
        { name: "Lumina Sconce", price: "$140", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400" },
        { name: "Aero Pendant", price: "$190", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400" },
        { name: "Nova Flush Mount", price: "$110", img: "https://images.unsplash.com/photo-1562095241-8c6714fd4178?q=80&w=400" },
        { name: "Echo Chandelier", price: "$340", img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=400" },
        { name: "Zenith Lamp", price: "$160", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400" },
        { name: "Halo Ring", price: "$250", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400" },
        { name: "Vertex Drop", price: "$130", img: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=400" },
        { name: "Crest Wall Light", price: "$95", img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=400" },
    ];

    const testimonials = [
        { name: "Anisa Zahir", role: "Interior Designer", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
        { name: "Marcus Thorne", role: "Architect", text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap." },
        { name: "Elena Rostova", role: "Homeowner", text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing." }
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-200">
            {/* 1. NEW COLLECTION SECTION */}
            <section className="max-w-[1300px] mx-auto shadow-xl rounded-[3rem] px-4 md:px-8 py-16 md:py-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl text-[#091291e7] md:text-4xl font-bold mb-4 tracking-tight">New Collection</h2>
                    <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
                        Discover our latest arrivals. Form meets function in our newest curated selection of modern illumination.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {newCollection.map((item, i) => (
                        <div key={i} className="flex flex-col items-center group cursor-pointer">
                            <div className="w-full aspect-square bg-[#F5F5F5] overflow-hidden mb-6">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full rounded-xl h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="border border-[#091291e7] rounded-3xl shadow-xl px-8 py-3 w-max mx-auto group-hover:border-gray-900 transition-colors">
                                <h3 className="text-xs text-[#091291e7] font-bold tracking-[0.2em] uppercase">{item.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 2. THE ARCH FEATURE SECTION */}
            <section className="bg-[#F9F9F9] shadow-xl py-20 md:py-32 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-16 md:gap-24">

                    {/* Left: Arched Image with Overlapping Stats */}
                    <div className="w-full md:w-1/2 relative mt-10 md:mt-0">
                        <div className="w-[85%] mx-auto md:w-full aspect-[3/4] bg-gray-200 rounded-t-full overflow-hidden relative shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800"
                                alt="Interior"
                                className="w-full h-full object-cover mix-blend-multiply"
                            />
                        </div>

                        <div className="absolute rounded-[3rem] -bottom-8 md:-bottom-12 -right-2 md:-right-8 bg-[#d7d8f1e7] text-white p-6 md:p-8 w-[90%] md:w-[85%] shadow-xl shadow-gray-300">
                            <div className="grid grid-cols-3 divide-x divide-gray-600 text-center">
                                <div>
                                    <h4 className="text-lg md:text-xl text-[#091291e7] font-bold mb-1">2014</h4>
                                    <p className="text-[10px] uppercase tracking-wider text-gray-900">Founded</p>
                                </div>
                                <div>
                                    <h4 className="text-lg md:text-xl text-[#091291e7] font-bold mb-1">8900+</h4>
                                    <p className="text-[10px] uppercase tracking-wider text-gray-900">Clients</p>
                                </div>
                                <div>
                                    <h4 className="text-lg md:text-xl text-[#091291e7] font-bold mb-1">3105+</h4>
                                    <p className="text-[10px] uppercase tracking-wider text-gray-900">Products</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full md:w-1/2 pt-12 md:pt-0">
                        <h2 className="text-3xl text-[#091291e7] md:text-5xl font-bold mb-6 leading-[1.1] tracking-tight">
                            Best Lighting <br /> Design Since 2014
                        </h2>
                        <div className="space-y-6 text-gray-500 text-sm leading-relaxed">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            <p>
                                When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. BEST SELLER PRODUCT SECTION */}
            <section className="max-w-[1300px] mx-auto shadow-xl rounded-[3rem] px-4 md:px-8 py-20 md:py-32 border-b border-gray-100">
                <div className="flex flex-col md:flex-row gap-12 md:gap-8">

                    <div className="w-full md:w-1/3 flex flex-col justify-center">
                        <h2 className="text-3xl text-[#091291e7] md:text-4xl font-bold mb-4 tracking-tight">Best Seller <br /> Product.</h2>
                        <p className="text-[] text-sm leading-relaxed mb-8 pr-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.
                        </p>

                        <Link href='/shop'>
                            <button className="border border-[#091291e7] bg-[#091291e7] text-white rounded-3xl shadow-xl shadow-[#091291e7] px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase hover:bg-gray-900 hover:text-white transition-colors w-max">
                                See More
                            </button>
                        </Link>
                    </div>

                    <div className="w-full md:w-2/3 flex overflow-x-auto gap-4 md:gap-6 snap-x snap-mandatory scrollbar-hide pb-4">
                        {bestSellers.map((item, i) => (
                            <div key={i} className="min-w-[260px] md:min-w-[280px] shadow-xl rounded-3xl snap-start group cursor-pointer">
                                <div className="w-full rounded-[1.5rem] aspect-[4/5] bg-[#F5F5F5] overflow-hidden mb-4">
                                    <img src={item.img} alt={item.name} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="flex justify-between ml-5 items-start">
                                    <div>
                                        <div className="flex gap-1 mb-1.5">
                                            {[...Array(5)].map((_, idx) => (
                                                <Star key={idx} className={`w-3 h-3 ${idx < item.rating ? 'fill-[#091291e7] text-[#091291e7]' : 'fill-gray-300 text-gray-300'}`} />
                                            ))}
                                        </div>
                                        <h4 className="font-bold text-sm text-[#091291e7]">{item.name}</h4>
                                    </div>
                                    <span className="text-sm font-medium mb-10 mr-5 text-gray-500">{item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <MeetTheOwner />

            {/* 4. OUR PRODUCT (TABS & GRID) SECTION */}
            <section className="max-w-[1300px] mx-auto px-4 md:px-8 py-20 md:py-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl text-[#091291e7] font-bold mb-8 tracking-tight">Our Product</h2>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs font-bold tracking-widest uppercase">
                        {['HOT', 'ON SALE', 'TRENDING NOW', 'NEW ARRIVAL'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-2 transition-all ${activeTab === tab ? 'border-b-2 border-gray-900 text-[#091291e7]' : 'text-gray-400 hover:text-gray-900'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
                    {ourProducts.map((product, i) => (
                        <div key={i} className="group cursor-pointer shadow-xl rounded-[1rem]">
                            <div className="w-full aspect-[4/5]  overflow-hidden mb-4">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-full rounded-t-[1.5rem] object-cover mix-blend-multiply opacity-95 group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="text-center">
                                <div className="flex justify-center gap-1 mb-1.5">
                                    {[...Array(5)].map((_, idx) => (
                                        <Star key={idx} className="w-3 h-3 fill-[#091291e7] text-[#091291e7]" />
                                    ))}
                                </div>
                                <h4 className="font-bold text-sm text-[#091291e7] mb-1">{product.name}</h4>
                                <span className="text-xs font-medium text-gray-500">{product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. TESTIMONIALS SECTION */}
            <section className="bg-[#F9F9F9] py-20 md:py-32">
                <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl text-[#091291e7] md:text-4xl font-bold mb-4 tracking-tight">What People Say About Us</h2>
                        <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry standard dummy text.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {testimonials.map((testimonial, i) => (
                            <div key={i} className="bg-[#EEEEEE] rounded-[2rem] shadow-xl p-8 md:p-10 relative">
                                <Quote className="w-10 h-10 text-gray-300 absolute top-6 right-6 opacity-50" />
                                <p className="text-gray-600 text-sm leading-relaxed mb-8 relative z-10">
                                    "{testimonial.text}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full shadow-xl flex items-center justify-center font-bold text-[#091291e7]">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-[#091291e7]">{testimonial.name}</h4>
                                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <VideoBanner />

            {/* 6. CONTACT US SECTION */}
            <section className="max-w-[1300px] shadow-xl mx-auto px-4 md:px-8 py-20 md:py-32">
                <div className="flex flex-col md:flex-row gap-12 md:gap-16">

                    {/* Left: Contact Form */}
                    <div className="w-full md:w-3/5">
                        <h2 className="text-3xl text-[#091291e7] md:text-4xl font-bold mb-4 tracking-tight">Get In Touch</h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-md">
                            Have a question about a product, need help with a custom order, or just want to say hello? Fill out the form below.
                        </p>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="  First Name"
                                    className="w-full rounded-lg shadow-xl border-b border-gray-300 py-3 bg-transparent text-sm focus:outline-none focus:border-gray-900 transition-colors placeholder:text-gray-400"
                                />
                                <input
                                    type="text"
                                    placeholder="  Last Name"
                                    className="w-full rounded-lg shadow-xl border-b border-gray-300 py-3 bg-transparent text-sm focus:outline-none focus:border-gray-900 transition-colors placeholder:text-gray-400"
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="  Email Address"
                                className="w-full rounded-lg shadow-xl border-b border-gray-300 py-3 bg-transparent text-sm focus:outline-none focus:border-gray-900 transition-colors placeholder:text-gray-400"
                            />
                            <textarea
                                rows={4}
                                placeholder="  Your Message"
                                className="w-full rounded-lg shadow-xl border-b border-gray-300 py-3 bg-transparent text-sm focus:outline-none focus:border-gray-900 transition-colors resize-none placeholder:text-gray-400"
                            ></textarea>

                            <button
                                type="button"
                                className="bg-[#091291e7] rounded-[3rem] shadow-xl text-white px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-black transition-colors mt-4"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right: Contact Information Block */}
                    <div className="shadow-xl rounded-[3rem] w-full md:w-2/5 bg-[#F5F5F5] p-8 md:p-12 flex flex-col justify-center">
                        <h3 className="text-xl text-[#091291e7] font-bold mb-8">Contact Information</h3>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-white flex items-center justify-center shrink-0 rounded-[3rem] shadow-xl">
                                    <MapPin className="w-4 h-4  text-[#091291e7]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm mb-1 text-[#091291e7]">Our Studio</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        1234 Design Avenue, Suite 500<br />
                                        New York, NY 10001
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-white flex items-center justify-center shrink-0 rounded-[3rem] shadow-xl">
                                    <Phone className="w-4 h-4  text-[#091291e7]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm mb-1 text-[#091291e7]">Phone</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        +1 (555) 123-4567<br />
                                        Mon-Fri 9am - 6pm EST
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-white flex items-center justify-center shrink-0 rounded-[3rem] shadow-xl">
                                    <Mail className="w-4 h-4  text-[#091291e7]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm mb-1 text-[#091291e7]">Email</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        hello@lumina.design<br />
                                        support@lumina.design
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}