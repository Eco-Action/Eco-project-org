// import React from 'react';
// import { motion } from 'framer-motion';

// export default function OurStorySection() {
//     return (
//         <section className="bg-white py-20 px-4 md:px-28">
//             <div className="max-w-7xl mx-auto text-center">
//                 <motion.h2 
//                     className="text-3xl font-bold mb-6 text-green"
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.3 }}
//                 >
//                     Our Story
//                 </motion.h2>
//                 <motion.p 
//                     className="text-lg mb-6"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.6 }}
//                 >
//                     Founded with a passion for sustainability, Re Plastify started its journey to combat the global plastic waste crisis. Our story began with a simple idea: to recycle plastic effectively and creatively, turning waste into valuable resources for future generations.
//                 </motion.p>
//                 <motion.p 
//                     className="text-lg mb-6"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.9 }}
//                 >
//                     Over the years, we have grown from a small initiative into a community-driven movement. Our innovative recycling techniques and commitment to eco-friendly practices have made a significant impact, fostering a culture of sustainability and responsibility.
//                 </motion.p>
//                 <motion.p 
//                     className="text-lg mb-6"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 1.2 }}
//                 >
//                     Join us on this journey as we continue to inspire change, educate communities, and create a cleaner, greener planet for everyone. Together, we can turn the tide against plastic pollution and promote a sustainable future.
//                 </motion.p>
//                 <motion.div 
//                     className="mt-8"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 1.5 }}
//                 >
//                     <a 
//                         href="/about" 
//                         className="inline-block bg-blue hover:bg-blueD text-white font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
//                     >
//                         Learn More About Our Journey
//                     </a>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }


import React from 'react';
import { motion } from 'framer-motion';

export default function OurStorySection() {
    return (
        <section className="bg-white py-20 px-4 md:px-28">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
                {/* Text Column */}
                <div className="md:w-1/2 mb-8 md:mb-0 pr-12">
                    <motion.h2 
                        className="text-4xl font-bold mb-6 text-green"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Our Story
                    </motion.h2>
                    <motion.p 
                        className="text-lg mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Founded with a passion for sustainability, Re Plastify started its journey to combat the global plastic waste crisis. Our story began with a simple idea: to recycle plastic effectively and creatively, turning waste into valuable resources for future generations.
                    </motion.p>
                    
                    <motion.p 
                        className="text-lg mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        Join us on this journey as we continue to inspire change, educate communities, and create a cleaner, greener planet for everyone. Together, we can turn the tide against plastic pollution and promote a sustainable future.
                    </motion.p>
                    <motion.div 
                        className="mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                    >
                        <a 
                            href="/about" 
                            className="inline-block bg-blue hover:bg-blueD text-white font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Learn More About Our Journey
                        </a>
                    </motion.div>
                </div>

                {/* Image Column */}
                <div className="md:w-1/2">
                    <motion.img 
                        src="https://img.freepik.com/premium-photo/person-recycling-plastic-bottles-recycling-bin_693425-33809.jpg" 
                        alt="Our Recycling Process" 
                        className="rounded-lg shadow-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                    />
                </div>
            </div>
        </section>
    );
}
