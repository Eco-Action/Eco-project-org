// import React from 'react';
// import Image from 'next/image';

// const AwardedPrizes = ({ awardedPrizes }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {awardedPrizes.map((prize) => (
//         <div key={prize.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="relative h-48">
//             <Image
//               src={prize.prizeImage}
//               alt={prize.prizeName}
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//           <div className="p-4">
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">{prize.prizeName}</h3>
//             <p className="text-gray-600">Awarded to: {prize.username}</p>
//             <p className="text-sm text-gray-500 mt-2">
//               Awarded on: {new Date(prize.awardedAt).toLocaleDateString()}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AwardedPrizes;


// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const AwardedPrizes = ({ awardedPrizes }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {awardedPrizes.map((prize) => (
//         <motion.div
//           key={prize.id}
//           className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
//           whileHover={{ scale: 1.05 }} // Scale on hover
//           whileTap={{ scale: 0.95 }} // Scale down on tap
//         >
//           <div className="relative h-48">
//             <Image
//               src={prize.prizeImage}
//               alt={prize.prizeName}
//               layout="fill"
//               objectFit="cover"
//               className="transition-transform duration-300 ease-in-out" // Smooth image transition
//             />
//           </div>
//           <div className="p-4">
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">{prize.prizeName}</h3>
//             <p className="text-gray-600">Awarded to: {prize.username}</p>
//             <p className="text-sm text-gray-500 mt-2">
//               Awarded on: {new Date(prize.awardedAt).toLocaleDateString()}
//             </p>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default AwardedPrizes;










import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AwardedPrizes = ({ awardedPrizes }) => {
  // Check if awardedPrizes is an array and has items
  const hasAwardedPrizes = Array.isArray(awardedPrizes) && awardedPrizes.length > 0;

  if (!hasAwardedPrizes) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No awarded prizes to display at the moment.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {awardedPrizes.map((prize) => (
        <motion.div
          key={prize.id}
          className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative h-48">
            <Image
              src={prize.prizeImage}
              alt={prize.prizeName}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{prize.prizeName}</h3>
            <p className="text-gray-600">Awarded to: {prize.username}</p>
            <p className="text-sm text-gray-500 mt-2">
              Awarded on: {new Date(prize.awardedAt).toLocaleDateString()}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AwardedPrizes;