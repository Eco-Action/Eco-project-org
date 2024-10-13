


'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();
    const isAuthPage = pathname === '/login' || pathname === '/signup';

    if (isAuthPage) {
        return null; 
    }

    return (
        <footer className="bg-green-800 text-white py-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* Links Section */}
                    <div className="mb-6 md:mb-0">
                        <h5 className="text-lg font-bold mb-2">Quick Links</h5>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="hover:text-green-400">Home</a>
                            </li>
                            <li>
                                <a href="/about" className="hover:text-green-400">About Us</a>
                            </li>
                            <li>
                                <a href="/AllProducts" className="hover:text-green-400">Products</a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-green-400">Contact</a>
                            </li>
                        </ul>
                    </div>

              
                </div>

                {/* Description Section */}
                <div className="mt-10 border-t border-gray-600 pt-6 text-center">
                    <p className="text-sm">
                        © {new Date().getFullYear()} EcoShop. All rights reserved. We are dedicated to promoting sustainable living and reducing our carbon footprint.
                    </p>
                </div>
            </div>
        </footer>
    );
}
