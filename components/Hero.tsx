import React from 'react';
import { ArrowUpRight, Play, Menu } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <div className="relative min-h-screen w-full text-white font-sans overflow-hidden selection:bg-[#FFD700] selection:text-[#0a1128]">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/hero.mp4" type="video/mp4" />
                </video>


                <div className="absolute inset-0 bg-[#0a1128]/50 z-10" />
            </div>

            {/* Main Content Wrapper */}
            <div className="relative z-20 w-full h-screen flex flex-col justify-between max-w-[1400px] mx-auto px-6 md:px-12 py-8">
                <main className="flex-1 flex flex-col justify-center max-w-2xl mt-20 md:mt-30">
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 w-max px-4 py-1.5 rounded-full text-xs font-medium text-[#FFD700] mb-8 shadow-lg">
                        Digital Art. Real Emotion.
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold  mb-6 drop-shadow-xl">
                        Design That Speaks in <br />
                        <span className="text-[#FFD700] drop-shadow-2xl">Shadows and Light</span>
                    </h1>

                    <p className="text-white max-w-md text-sm md:text-base  mb-10 drop-shadow-lg font-medium">
                        We fuse artistic depth with cutting-edge design to build unforgettable experiences.
                    </p>

                    <div className="flex flex-row items-center gap-2 ml-[-15]">
                        <Link href='/shop'>
                            <button className="bg-[#FFD700] hover:bg-[#e6c200] text-[#0a1128] px-8 py-3.5 rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:scale-105 whitespace-nowrap w-full sm:w-auto">
                                View Our Product <ArrowUpRight className="w-4 h-4 shrink-0" />
                            </button>
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    );
}