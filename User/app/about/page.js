

import React from 'react';
import { Leaf, Recycle, Wind, TreePine, ChevronRight, Shield } from 'lucide-react';

export default function EcoAboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-green-900/90">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1SQ2t7lXmkCRn3VZLvdIZEp3hOzXBsHDOzw&s"
            className="w-full h-full object-cover mix-blend-overlay"
            alt="Nature background"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-green mb-6">For a Greener Tomorrow</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Since 2010, we've been at the forefront of environmental conservation. 
            More than just a company, we're a movement dedicated to reducing carbon 
            emissions and preserving our planet for future generations.
          </p>
          <button className="mt-8 inline-flex items-center px-6 py-3 bg-white text-green rounded-full font-semibold hover:bg-green-50 transition-colors">
            Join Our Mission <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Leaf />}
            title="Carbon Reduction"
            description="Our initiatives have helped reduce carbon emissions by thousands of tons annually."
          />
          <FeatureCard 
            icon={<Recycle />}
            title="Waste Management"
            description="Innovative recycling programs turning waste into valuable resources."
          />
          <FeatureCard 
            icon={<Wind />}
            title="Clean Energy"
            description="Powered by 100% renewable energy sources across all our operations."
          />
          <FeatureCard 
            icon={<Shield />}
            title="Eco Certification"
            description="Internationally recognized for our environmental standards and practices."
          />
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green mb-8">Our Green Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're committed to leading the charge against climate change. By implementing 
              sustainable practices and innovative green technologies, we're working to 
              significantly reduce carbon dioxide emissions. Every decision we make is 
              guided by our commitment to environmental stewardship and creating a 
              sustainable future for all.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard number="50K+" label="Trees Planted" />
          <StatCard number="30%" label="Carbon Reduction" />
          <StatCard number="100%" label="Renewable Energy" />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
      <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
        {React.cloneElement(icon, { className: "h-6 w-6" })}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
      <div className="text-4xl font-bold text-green mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}






