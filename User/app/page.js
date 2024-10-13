
// 'use client';

// import React from 'react';
// import { Leaf } from 'lucide-react';
// import Link from 'next/link';

// export default function HomePage() {
//     return (
//         <div>
//             {/* Hero Section */}
//             <section className="bg-gradient-to-r from-green-400 to-green-500 text-white py-20">
//                 <div className="max-w-7xl mx-auto px-4 text-center">
//                     <h1 className="text-5xl font-extrabold">Join the Eco-Friendly Revolution</h1>
//                     <p className="mt-4 text-lg">Shop sustainably and make a difference in the world.</p>
//                     <Link href="/AllProducts" className="mt-6 inline-block bg-white text-green-600 px-6 py-3 rounded-full font-semibold transition duration-200 hover:bg-green-200">
//                         Explore Products
//                     </Link>
//                 </div>
//             </section>

//             {/* About Section */}
//             <section className="py-20 bg-gray-100">
//                 <div className="max-w-7xl mx-auto px-4 text-center">
//                     <h2 className="text-3xl font-bold mb-6">About Us</h2>
//                     <p className="text-lg text-gray-700">
//                         We are committed to providing eco-friendly products that help reduce carbon emissions and promote sustainability. Join us in making the planet a better place.
//                     </p>
//                 </div>
//             </section>

//             {/* Products Section */}
//             <section className="py-20">
//                 <div className="max-w-7xl mx-auto px-4 text-center">
//                     <h2 className="text-3xl font-bold mb-6">Our Products</h2>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {/* Example Product Card */}
//                         {Array.from({ length: 6 }).map((_, index) => (
//                             <div key={index} className="bg-white rounded-lg shadow-md p-4 transition transform hover:scale-105">
//                                 <img src={`https://via.placeholder.com/150?text=Product+${index + 1}`} alt={`Product ${index + 1}`} className="w-full h-40 object-cover rounded-md" />
//                                 <h3 className="mt-2 text-lg font-semibold">Product {index + 1}</h3>
//                                 <p className="mt-1 text-gray-600">Eco-friendly and sustainable.</p>
//                                 <Link href={`/product/${index + 1}`} className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-md">
//                                     View Product
//                                 </Link>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Call to Action Section */}
//             <section className="bg-green-500 text-white py-20">
//                 <div className="max-w-7xl mx-auto px-4 text-center">
//                     <h2 className="text-3xl font-bold mb-6">Make a Difference Today</h2>
//                     <p className="mb-4">Every purchase helps reduce carbon emissions and supports eco-friendly initiatives.</p>
//                     <Link href="/signup" className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-semibold transition duration-200 hover:bg-green-600">
//                         Join Us
//                     </Link>
//                 </div>
//             </section>
//         </div>
//     );
// }













'use client';

import React, { useState,useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { Building2, Users, Globe, Target, Award, Leaf } from 'lucide-react';
import HighResEarth from '../components/HighResEarth';
import HeroSlideshow from '../components/HeroSlideshow';
import PlasticInfoSection from '../components/PlasticInfoSection';
import logo1 from '../public/textures/schneiderLogo.png';
import logo2 from '../public/textures/necLogo.png';
import logo3 from '../public/textures/Logo3.png';
import logo4 from '../public/textures/Logo4.png';
import logo5 from '../public/textures/Logo5.png';
import OurValues from '@/components/OurValues';
import FAQ from '@/components/Fqa';
import PrizeList from '@/components/PrizeList';
import AwardedPrizes from '@/components/AwardedPrizes';
export default function HomePage() {
    const [isScrolling, setIsScrolling] = useState(true);
    const [selectedPartner, setSelectedPartner] = useState(null);
    const [prizes, setPrizes] = useState([]);
    const [awardedPrizes, setAwardedPrizes] = useState([]);

    useEffect(() => {
        fetchPrizes();
        fetchAwardedPrizes();
    }, []);
    
    // useEffect(() => {
    //     fetchPrizes();
    // }, []);

    const fetchPrizes = async () => {
        try {
            const response = await fetch('/api/prizes');
            const data = await response.json();
            setPrizes(data);
        } catch (error) {
            console.error('Error fetching prizes:', error);
        }
    };


    const fetchAwardedPrizes = async () => {
        try {
            const response = await fetch('/api/user-prizes');
            const data = await response.json();
            setAwardedPrizes(data);
        } catch (error) {
            console.error('Error fetching awarded prizes:', error);
        }
    };
    
    // const fetchAwardedPrizes = async () => {
    //     try {
    //         const response = await fetch('/api/awarded-prizes');
    //         const data = await response.json();
    //         setAwardedPrizes(data);
    //     } catch (error) {
    //         console.error('Error fetching awarded prizes:', error);
    //     }
    // };
    const partners = [
        {
            name: "Schneider Electric",
            logo: logo1,
            description: "A global leader in energy management and automation, Schneider Electric drives digital transformation by integrating world-leading process and energy technologies to realize the full efficiency and sustainability opportunities for businesses.",
            details: {
                founded: "1836",
                headquarters: "Rueil-Malmaison, France",
                sustainability: "Committed to carbon neutrality by 2025 and net-zero emissions by 2040",
                initiatives: [
                    "Energy efficient solutions",
                    "Smart grid technology",
                    "Sustainable resource management",
                    "Green building solutions"
                ]
            }
        },
        {
            name: "NEC Corporation",
            logo: logo2,
            description: "NEC Corporation is a leader in the integration of IT and network technologies, providing solutions for businesses and society that promote safety, security, efficiency and equality.",
            details: {
                founded: "1899",
                headquarters: "Tokyo, Japan",
                sustainability: "Committed to reducing CO2 emissions by 55% by 2030",
                initiatives: [
                    "Smart city solutions",
                    "Biometric authentication systems",
                    "AI-driven sustainability solutions",
                    "Digital transformation technologies"
                ]
            }
        },
        {
            name: "Moncler",
            logo: logo3,
            description: "Moncler is a luxury fashion brand known for its high-end outerwear and sportswear, committed to sustainable practices and responsible innovation in the fashion industry.",
            details: {
                founded: "1952",
                headquarters: "Milan, Italy",
                sustainability: "Aims to be carbon neutral by 2025 in own operations",
                initiatives: [
                    "Sustainable materials sourcing",
                    "Responsible down standard",
                    "Circular economy practices",
                    "Supply chain transparency"
                ]
            }
        },
        {
            name: "SGS",
            logo: logo4,
            description: "SGS is the world's leading testing, inspection and certification company, recognized as the global benchmark for quality and integrity in sustainability verification.",
            details: {
                founded: "1878",
                headquarters: "Geneva, Switzerland",
                sustainability: "Provides crucial sustainability certification services globally",
                initiatives: [
                    "Environmental certification",
                    "Supply chain audits",
                    "Quality assurance",
                    "Sustainability consulting"
                ]
            }
        },
        {
            name: "Sanofi",
            logo: logo5,
            description: "Sanofi is a global biopharmaceutical company focused on human health, transforming scientific innovation into healthcare solutions around the world.",
            details: {
                founded: "2004",
                headquarters: "Paris, France",
                sustainability: "Committed to carbon neutrality by 2030",
                initiatives: [
                    "Healthcare accessibility",
                    "Sustainable drug development",
                    "Eco-friendly packaging",
                    "Water conservation in operations"
                ]
            }
        }
    ];

    const handlePartnerClick = (partner) => {
        setIsScrolling(false);
        setSelectedPartner(partner);
    };

    const handleCloseInfo = () => {
        setIsScrolling(true);
        setSelectedPartner(null);
    };

    return (
        <div>
            {/* Hero Slideshow Section */}
            <HeroSlideshow />

            {/* Plastic Info Section */}
            <PlasticInfoSection />

            {/* Earth Section */}
            <section className="bg-white text-gray-800 py-20">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8">
                    <div className="text-center lg:text-left lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold text-green-600 mb-8">
                                Our Planet, Our Responsibility
                            </h2>
                            <p className="text-lg text-gray-700 mb-4">
                                🌍 Every action we take today helps secure a better future for our planet.
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                ♻️ Recycling plastic reduces waste and prevents pollution.
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                🚴 Opting for eco-friendly transportation can significantly lower CO2 emissions.
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                🌿 Planting trees helps combat climate change and purifies our air.
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                💧 Conserving water ensures a healthier ecosystem for all living beings.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 h-[600px]">
                        <HighResEarth />
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="bg-gradient-to-br from-green-50 to-green-100 text-gray-800 py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2 p-8">
                                <h2 className="text-3xl font-bold text-green-600 mb-4">About Us</h2>
                                <p className="text-lg text-gray-700 mb-6">
                                    We are dedicated to promoting eco-friendly practices and raising awareness about plastic pollution. Our mission is to inspire and empower individuals to make sustainable choices for a cleaner, greener planet.
                                </p>
                                <Link href="/about" className="inline-flex items-center bg-green-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105">
                                    <span>Read More</span>
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                            <div className="md:w-1/2 bg-green-600 flex items-center justify-center p-8">
                                <Leaf className="text-white w-32 h-32 opacity-50" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Partners Section */}
            <section className="bg-white py-12 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-green-600 text-center mb-8">Our Global Partners</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                        We collaborate with industry leaders who share our commitment to sustainability and environmental protection.
                    </p>
                    <div className="relative">
                        <div className={`flex ${isScrolling ? 'animate-scroll' : ''}`}>
                            {[1, 2].map((set) => (
                                <div key={set} className="flex space-x-16 mx-8">
                                    {partners.map((partner, index) => (
                                        <div 
                                            key={index} 
                                            className="w-40 h-20 flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:scale-110" 
                                            onClick={() => handlePartnerClick(partner)}
                                        >
                                            <Image
                                                src={partner.logo}
                                                alt={partner.name}
                                                width={160}
                                                height={80}
                                                className="object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {selectedPartner && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-3xl font-bold text-green-600">{selectedPartner.name}</h3>
                                <button 
                                    onClick={handleCloseInfo}
                                    className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="bg-green-50 p-6 rounded-lg">
                                        <Image
                                            src={selectedPartner.logo}
                                            alt={selectedPartner.name}
                                            width={200}
                                            height={100}
                                            className="object-contain mb-4"
                                        />
                                        <p className="text-gray-700 text-lg">{selectedPartner.description}</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <Building2 className="text-green-600" />
                                            <span className="font-semibold">Founded:</span>
                                            <span>{selectedPartner.details.founded}</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <Globe className="text-green-600" />
                                            <span className="font-semibold">Headquarters:</span>
                                            <span>{selectedPartner.details.headquarters}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h4 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                                            <Target className="mr-2" />
                                            Sustainability Commitment
                                        </h4>
                                        <p className="text-gray-700">{selectedPartner.details.sustainability}</p>
                                    </div>

                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h4 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                                            <Award className="mr-2" />
                                            Key Initiatives
                                        </h4>
                                        <ul className="space-y-2">
                                            {selectedPartner.details.initiatives.map((initiative, index) => (
                                                <li key={index} className="flex items-center">
                                                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                                                    {initiative}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-end">
                                <button 
                                    onClick={handleCloseInfo}
                                    className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/*Our Values Section*/}
            <section>
                <OurValues/>
            </section>

    {/* Prizes Section */}
    <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-600 text-center mb-8">Available Prizes</h2>
          <PrizeList prizes={prizes} />
        </div>
      </section>



        {/* Awarded Prizes Section */}
        <section className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-green-600 text-center mb-8">Recently Awarded Prizes</h2>
                    <AwardedPrizes awardedPrizes={awardedPrizes} />
                </div>
            </section>


            {/*Most Asked Questions Section*/}
            <section>
                <FAQ/>
            </section>

            

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
            `}</style>
        </div>
    );
}