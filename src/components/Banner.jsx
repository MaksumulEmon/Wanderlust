import { Separator } from "@heroui/react";

const Banner = () => {
    return (
        <div className="bg-[url('/assets/banner.png')] bg-cover bg-center text-white flex flex-col items-center gap-5 min-h-[500px] lg:h-150">
            {/* Main Content */}
            <div className="p-6 md:p-10 text-center flex justify-center flex-col items-center gap-4 flex-1">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    Discover Your <br className="hidden md:block" /> Next Adventure
                </h1>

                <p className="text-lg md:text-xl lg:text-2xl max-w-2xl">
                    Explore breathtaking destinations and create unforgettable memories
                    with our curated travel experiences.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <button className="uppercase bg-cyan-500 px-8 py-3 cursor-pointer hover:bg-cyan-600 transition-colors">
                        Explore Now
                    </button>
                    <button className="uppercase px-8 py-3 bg-white/20 backdrop-blur-sm border border-white/30 cursor-pointer hover:bg-white/30 transition-colors">
                        View Destination
                    </button>
                </div>
            </div>

            {/* Search Bar Container */}
            <div className="relative z-10 w-[95%] max-w-6xl -mb-12 md:-mb-16">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col md:flex-row items-stretch rounded-2xl md:rounded-full overflow-hidden p-2 md:p-3">

                    {/* Item 1: Location */}
                    <div className="flex-1 flex items-center gap-4 px-6 py-4 hover:bg-white/10 rounded-full transition-all cursor-pointer group">
                        <div className="p-2 bg-cyan-500/20 rounded-full text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                            <svg xmlns="http://w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Location</span>
                            <p className="text-sm font-semibold text-white whitespace-nowrap">Where are you going?</p>
                        </div>
                    </div>

                    <div className="hidden md:block w-px bg-white/20 my-4" />

                    {/* Item 2: Date */}
                    <div className="flex-1 flex items-center gap-4 px-6 py-4 hover:bg-white/10 rounded-full transition-all cursor-pointer group">
                        <div className="p-2 bg-cyan-500/20 rounded-full text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                            <svg xmlns="http://w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="Ref:8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Date</span>
                            <p className="text-sm font-semibold text-white whitespace-nowrap">Anytime / 3 Days</p>
                        </div>
                    </div>

                    <div className="hidden md:block w-px bg-white/20 my-4" />

                    {/* Item 3: Budget */}
                    <div className="flex-1 flex items-center gap-4 px-6 py-4 hover:bg-white/10 rounded-full transition-all cursor-pointer group">
                        <div className="p-2 bg-cyan-500/20 rounded-full text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                            <svg xmlns="http://w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Budget</span>
                            <p className="text-sm font-semibold text-white whitespace-nowrap">$500 - $3000</p>
                        </div>
                    </div>

                    {/* Search Button */}
                    <button className="md:ml-2 bg-cyan-500 hover:bg-cyan-400 text-white p-4 md:p-5 rounded-xl md:rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 group active:scale-95">
                        <svg xmlns="http://w3.org" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="md:hidden font-bold uppercase">Search Now</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;