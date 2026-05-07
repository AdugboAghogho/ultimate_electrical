import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function MeetTheOwner() {
    return (
        <section className="w-full px-6 md:px-12 shado-xl py-24 max-w-[1400px] mx-auto font-sans">
            <div className="w-full bg-[#1A1A1A] rounded-[1.5rem] overflow-hidden flex flex-col md:flex-row items-stretch shadow-xl relative">

                {/* Left Side: Owner Portrait */}
                <div className="w-full md:w-1/2 min-h-[400px] md:min-h-[600px] relative">
                    <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                        alt="Meet the Founder"
                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 mix-blend-luminosity"
                    />
                    {/* Subtle gradient overlay to blend into the dark background */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent md:bg-gradient-to-r" />
                </div>

                {/* Right Side: Bio & Content */}
                <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center text-white relative z-10">
                    <div className="mb-4">
                        <span className="text-[#FFD700] text-xs font-bold uppercase tracking-widest mb-2 block">
                            The Visionary Behind The Light
                        </span>
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tight uppercase leading-tight mb-6">
                            "Lighting is the <br /> heartbeat of a room."
                        </h2>
                    </div>

                    <div className="space-y-6 text-sm text-gray-400 leading-relaxed max-w-md">
                        <p>
                            Hi, I’m <strong>Elena Vance</strong>. When I founded this company over a decade ago, my goal wasn't just to build lamps—it was to change how people feel when they walk into their homes.
                        </p>
                        <p>
                            I believe that exceptional lighting bridges the gap between technology and art. We obsess over every curve, every material, and every lumen so you don't have to. Our collections are designed to be the silent centerpieces of your daily life.
                        </p>
                    </div>

                    <div className="mt-12 flex items-center justify-between">
                        <div>
                            <h4 className="text-lg font-bold tracking-wider text-white uppercase">Elena Vance</h4>
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Founder & Lead Designer</p>
                        </div>
                    </div>

                    <button className="mt-12 w-max flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-[#FFD700] hover:text-white transition-colors group">
                        Read Full Story
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}