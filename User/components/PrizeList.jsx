
// 'use client'
// import React from 'react'

// const PrizeList = ({ prizes }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {prizes.map((prize) => (
//         <div key={prize._id} className="bg-white shadow-md rounded-lg p-4">
//           <img src={prize.imageUrl} alt={prize.name} className="w-full h-48 object-cover rounded-md mb-2" />
//           <h2 className="text-xl font-semibold mb-2">{prize.name}</h2>
//           <p className="text-gray-600">Points required: {prize.pointsRequired}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default PrizeList







// 'use client'

// import React from 'react'

// const PrizeList = ({ prizes = [] }) => {
//   if (!prizes || prizes.length === 0) {
//     return <div className="text-center text-gray-500">No prizes available at the moment.</div>
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {prizes.map((prize) => (
//         <div key={prize._id} className="bg-white shadow-md rounded-lg p-4">
//           <img src={prize.imageUrl} alt={prize.name} className="w-full h-48 object-cover rounded-md mb-2" />
//           <h2 className="text-xl font-semibold mb-2">{prize.name}</h2>
//           <p className="text-gray-600">Points required: {prize.pointsRequired}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default PrizeList


'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, ArrowRight } from 'lucide-react'

const PrizeCard = ({ prize }) => (
  <motion.div 
    className="bg-gray-200 shadow-lg rounded-md overflow-hidden"
    whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative">
      <img src={prize.imageUrl} alt={prize.name} className="w-full h-48 object-cover" />
      <div className="absolute top-0 right-0 bg-blue text-white px-2 py-1 m-2 rounded-full text-sm font-semibold">
        {prize.pointsRequired} pts
      </div>
    </div>
    <div className="p-4">
    <div className="flex items-center text-gray-800">
    <Award className="w-5 h-5 mr-1 text-yellow-500" /> <span>

{prize.name}
</span>
        </div>
      
      <p className="text-gray-600 text-sm mb-4">{prize.description}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center text-yellow-500">          
        </div>
      
      </div>
    </div>
  </motion.div>
)

const PrizeList = ({ prizes = [] }) => {
  if (!prizes || prizes.length === 0) {
    return (
      <motion.div 
        className="text-center text-gray-500 p-8 bg-white rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Award className="w-16 h-16 mx-auto mb-4 text-yellow" />
        <p className="text-xl">No prizes available at the moment.</p>
        <p className="mt-2">Check back soon for exciting rewards!</p>
      </motion.div>
    )
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-16 text-green"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Exciting Prizes to Redeem
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PrizeCard prize={prize} />
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a 
            href="/Award-Winning-Author" 
            className="inline-block bg-blue hover:bg-blueD text-white font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Show Winners
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default PrizeList