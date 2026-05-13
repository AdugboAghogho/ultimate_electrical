import Link from 'next/link';
import React from 'react';

export default function PromoBanner() {
    return (
        <section className="w-full max-w-[1300px] mx-auto px-3 ">
            <div className="flex flex-col md:flex-row w-full bg-[#858585e7] text-white overflow-hidden shadow-xl">

                {/* Left: Text Content */}
                <div className="w-full md:w-1/2 p-10 md:p-16 lg:p-24 flex flex-col justify-center">
                    <span className="text-[#091291e7] text-xs font-bold tracking-widest uppercase mb-4 block">
                        Limited Time Offer
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
                        The Artisan Event. <br /> Up to <span className='text-[#091291e7]'>30% </span>Off.
                    </h2>
                    <p className="text-white text-sm leading-relaxed mb-10 max-w-md">
                        Upgrade your space with our award-winning architectural lighting. Enjoy exclusive savings on our most iconic pendants, chandeliers, and floor lamps until midnight Sunday.
                    </p>

                    <Link href='/shop'>
                        <button className="bg-[#091291e7] shadow-xl rounded-3xl px-8 py-3 w-max text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors">
                            Shop The Sale
                        </button>
                    </Link>
                </div>

                {/* Right: Image */}
                <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-auto relative">
                    <img
                        src="/sth (5).jpg"
                        alt="Artisan Lighting"
                        className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80"
                    />
                </div>

            </div>
        </section>
    );
}