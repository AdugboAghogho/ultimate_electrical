import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function VideoBanner() {
    return (
        <section className="relative w-full h-screen overflow-hidden flex items-center rounded-3xl justify-center">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                {/* Replace this src with your actual video file path, e.g., "/bg-video.mp4" */}
                <source src="/banner.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* Content */}
            <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6 md:px-12 text-center text-white flex flex-col items-center">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-4 text-gray-200">
                    The 2026 Collection
                </span>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] max-w-4xl">
                    Redefining Light. <br /> Elevating Spaces.
                </h1>

                <p className="text-sm md:text-base text-gray-200 mb-10 max-w-xl font-light leading-relaxed">
                    Experience the intersection of masterful craftsmanship and modern technology. Our new collection brings cinematic ambiance to your everyday life.
                </p>
            </div>
        </section>
    );
}