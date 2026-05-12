import React from 'react';
import { ArrowUpRight, Play, Menu } from 'lucide-react';

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
                        <button className="bg-[#FFD700] hover:bg-[#e6c200] text-[#0a1128] px-8 py-3.5 rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:scale-105 whitespace-nowrap w-full sm:w-auto">
                            View Our Product <ArrowUpRight className="w-4 h-4 shrink-0" />
                        </button>

                        <button className="bg-white/10 border border-white/20 hover:bg-white/20 text-white px-8 py-3.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all backdrop-blur-md shadow-lg whitespace-nowrap w-full sm:w-auto">
                            Watch Video <Play className="w-2 h-4 ml-1 fill-white shrink-0" />
                        </button>
                    </div>
                </main>

                {/* THE FIX: Restored Bottom Glass Info Cards to balance the layout */}
                {/* <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mt-12 pb-4">
                    {[
                        { title: "©2026", desc: "Designing experiences that engage users and drive results." },
                        { title: "Brand", desc: "Building strong brand identities that tell your story with clarity and impact." },
                        { title: "UI/UX", desc: "Thoughtfully designed interfaces that improve interaction and flow." }
                    ].map((card, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col justify-start hover:bg-white/20 transition-all shadow-2xl group">
                            <div className="w-3 h-3 border-t-2 border-l-2 border-[#FFD700] mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">{card.title}</h3>
                            <p className="text-xs text-slate-300 leading-relaxed pr-4 font-medium drop-shadow-sm">{card.desc}</p>
                        </div>
                    ))}
                </div> */}

            </div>
        </div>
    );
}