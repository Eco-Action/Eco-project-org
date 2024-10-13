import React from 'react';
import Image from 'next/image';

const AwardedPrizes = ({ awardedPrizes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {awardedPrizes.map((prize) => (
        <div key={prize.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-48">
            <Image
              src={prize.prizeImage}
              alt={prize.prizeName}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{prize.prizeName}</h3>
            <p className="text-gray-600">Awarded to: {prize.username}</p>
            <p className="text-sm text-gray-500 mt-2">
              Awarded on: {new Date(prize.awardedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AwardedPrizes;