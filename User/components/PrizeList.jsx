
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







'use client'

import React from 'react'

const PrizeList = ({ prizes = [] }) => {
  if (!prizes || prizes.length === 0) {
    return <div className="text-center text-gray-500">No prizes available at the moment.</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {prizes.map((prize) => (
        <div key={prize._id} className="bg-white shadow-md rounded-lg p-4">
          <img src={prize.imageUrl} alt={prize.name} className="w-full h-48 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2">{prize.name}</h2>
          <p className="text-gray-600">Points required: {prize.pointsRequired}</p>
        </div>
      ))}
    </div>
  )
}

export default PrizeList