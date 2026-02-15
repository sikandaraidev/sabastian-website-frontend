"use client";

import { profile } from "@/data/profile";
import { DynamicCredentialSlider } from "@/components/DynamicCredentialSlider";

export function Credentials() {
    return (
        <section className="py-32 px-6 bg-obsidian text-white relative border-t border-white/5">
            <div className="max-w-7xl mx-auto mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Education Grid */}
                    <div>
                        <h2 className="text-sm font-mono text-signal-blue mb-8 tracking-widest uppercase">Academic Foundation</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {profile.education.map((edu, index) => (
                                <div key={index} className="p-6 border border-white/5 bg-white/5 hover:border-signal-blue/30 transition-colors duration-300 rounded-lg group">
                                    <div className="text-3xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity">🏛️</div>
                                    <h3 className="text-lg font-normal text-white mb-1 group-hover:text-signal-blue transition-colors">{edu.degree}</h3>
                                    <p className="text-sm text-gray-400 mb-2">{edu.field}</p>
                                    <p className="text-xs font-mono text-gray-600 uppercase tracking-widest">{edu.school}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Authority/Profile Statement */}
                    <div className="flex flex-col justify-center h-full">
                        <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300 border-l-2 border-signal-blue pl-6 my-auto">
                            "Certification is not just validation; it is a commitment to the highest standards of operational integrity and defense."
                        </blockquote>
                    </div>

                </div>
            </div>

            {/* Dynamic Slider */}
            <div className="relative border-t border-white/5 pt-16">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-obsidian px-4">
                    <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">Global Certifications</span>
                </div>
                <DynamicCredentialSlider />
            </div>

        </section>
    );
}
