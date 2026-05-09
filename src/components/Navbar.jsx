"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Destinations', href: '/' },
        { name: 'My Bookings', href: '/' },
    ];

    const authLinks = [
        { name: 'Profile', href: '/' },
        { name: 'Login', href: '/' },
        { name: 'Sign up', href: '/' },
    ];

    return (
        <nav className="relative bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="flex justify-between items-center h-20">
                    
                    {/* Left: Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="hover:text-cyan-500 transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Center: Logo (Always Visible) */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image 
                                src={'/assets/Wanderlast.png'} 
                                alt='logo' 
                                height={120} 
                                width={120} 
                                className="w-auto h-auto"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Right: Desktop Auth Links */}
                    <div className="hidden md:flex items-center gap-6">
                        {authLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                href={link.href} 
                                className={`${link.name === 'Sign up' ? 'bg-cyan-500 text-white px-4 py-2 rounded-lg' : 'text-gray-700'} font-medium hover:opacity-80 transition-opacity`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile: Hamburger Button */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 focus:outline-none p-2"
                        >
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile: Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full z-50 shadow-xl">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {[...navLinks, ...authLinks].map((link) => (
                            <Link 
                                key={link.name} 
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-500 rounded-md"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
