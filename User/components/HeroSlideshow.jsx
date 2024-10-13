


// // components/HeroSlideshow.js
// import React, { useEffect, useState } from 'react';

// const images = [
//     '/textures/sightful.png',  
//     '/textures/eco2.jpeg',
//     '/textures/eco.jpeg',
// ];

// export default function HeroSlideshow() {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//         }, 3000); // Change every 3 seconds

//         return () => clearInterval(interval); // Clean up interval on component unmount
//     }, []);

//     return (
//         <div className="relative w-full h-[600px] overflow-hidden">
//             {images.map((image, index) => (
//                 <div
//                     key={index}
//                     className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
//                 >
//                     <img
//                         src={image}
//                         alt={`Hero Slide ${index + 1}`}
//                         className="w-full h-full object-cover"
//                     />
//                 </div>
//             ))}
//             <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
//                 <div className="text-center text-white">
//                     <h1 className="text-5xl font-bold mb-4">Protect Our Planet</h1>
//                     <p className="text-lg mb-4">A Greener Earth Starts With You</p>
//                     <p className="mb-6">Small actions can make a big difference. Let's work together for a sustainable future.</p>
//                 </div>
//             </div>
//         </div>
//     );
// }


import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Recycle, Droplet, Leaf } from 'lucide-react';
import Link from 'next/link';

const images = [
    // '/textures/sightful.png',
    "https://www.ecoplasticwood.com/wp-content/uploads/2022/09/shutterstock_139546226-848x450.jpg",
    "https://www.ipi-singapore.org/contents/2024/09/ai-based-material-sorting-robot-for-plastic-recycling-17256040245781/ai-based-material-sorting-robot-for-plastic-recycling.jpeg",
    "https://img.freepik.com/premium-photo/recycling-plant-with-plastic-bottles-ready-processing-highlighting-environmental-conservation-waste-management_1274674-1704.jpg",
    // '/textures/eco2.jpeg',
    // '/textures/eco.jpeg',
];

const IconBox = ({ Icon, text }) => (
  <motion.div 
    className="flex flex-col items-center bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-lg"
    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="h-8 w-8 mb-2 text-green" />
    <span className="text-sm font-medium">{text}</span>
  </motion.div>
);

export default function HeroSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentIndex}
                    className="absolute top-0 left-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={images[currentIndex]}
                        alt={`Hero Slide ${currentIndex + 1}`}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-4">
                    <motion.h1 
                        className="text-blue text-5xl sm:text-6xl font-bold mb-6"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Re Plastify
                    </motion.h1>
                    <motion.p 
                        className="text-xl mb-8"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
Turning Plastic Waste into a Sustainable Future
                    </motion.p>
                    <motion.div 
                        className="flex justify-center space-x-8 mb-12"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <IconBox Icon={Recycle} text="Recycle" />
                        <IconBox Icon={Droplet} text="Conserve" />
                        <IconBox Icon={Leaf} text="Sustain" />
                    </motion.div>
                    
                    
                    <Link href="/AllProducts">
    <motion.button
        className="bg-blue hover:bg-blueD text-white font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
    >
        Discover Our Products
    </motion.button>
</Link>
                    
                </div>
            </div>
        </div>
    );
}