"use client"
import React from 'react';
import { Heart } from 'lucide-react';
import { AuroraText } from '../ui/aurora-text';

export const Support = () => {
  const handleBuyMeCoffee = () => {
    window.open('https://coff.ee/meetjainn', '_blank');
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-[#0a0a0a]">
      

      {/* Center Heading */}
      <div className="mb-12 text-center">
        <AuroraText className="text-4xl md:text-5xl font-bold text-gray-100 leading-tight font-fjalla" 
          colors={["#fafafa", "#e0e0e0", "#bdbdbd"]} 
        >
          Liked Our Vision and SOA!?
        </AuroraText>
      </div>
      {/* Main Content - Coffee Support Card */}
      <div className="max-w-2xl w-full flex items-center justify-center">
      {/* Heart Icon at Top */}
      <div className="mb-8">
        <div className="relative">
          <div className="w-32 h-32 bg-[#dc586d]/10 backdrop-blur-lg border border-[#dc586d]/30 rounded-full flex items-center justify-center animate-pulse shadow-2xl shadow-[#dc586d]/20">
            <Heart
              className="w-16 h-16 text-[#dc586d] fill-[#dc586d]"
            />
          </div>
        </div>
      </div>        
        <div className="w-full flex items-center justify-center flex-col p-8">
          {/* Header */}
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 text-center">
            Buy me some coffee ☕
          </h2>
          
          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-6"></div>
          
          {/* Message */}
          <p className="text-gray-300 font-medium text-center mb-8 text-lg lg:text-xl font-inter">
            It will surely help me to be caffeinated and make SOA better everyday!
          </p>
          
          {/* Button */}
          <button
            onClick={handleBuyMeCoffee}
            className="bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 hover:from-yellow-600 hover:to-yellow-400 border border-yellow-500 text-gray-200 hover:text-gray-800 font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl"
          >
            Support SOA
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;