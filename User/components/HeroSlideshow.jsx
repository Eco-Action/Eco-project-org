


// components/HeroSlideshow.js
import React, { useEffect, useState } from 'react';

const images = [
    '/textures/sightful.png',  
    '/textures/eco2.jpeg',
    '/textures/eco.jpeg',
];

export default function HeroSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);

    return (
        <div className="relative w-full h-[600px] overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img
                        src={image}
                        alt={`Hero Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center text-white">
                    <h1 className="text-5xl font-bold mb-4">Protect Our Planet</h1>
                    <p className="text-lg mb-4">A Greener Earth Starts With You</p>
                    <p className="mb-6">Small actions can make a big difference. Let's work together for a sustainable future.</p>
                </div>
            </div>
        </div>
    );
}
