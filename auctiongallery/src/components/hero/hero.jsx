import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[400px] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1600794116196-4dbdb63c0f2d" // You can replace this with any background image
        alt="Car lights"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 h-full w-full flex flex-col justify-center px-8 md:px-24 bg-black bg-opacity-40 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Bid on Unique Items from Around the World
        </h1>
        <p className="text-sm md:text-lg mb-6">
          Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
        </p>
        <button className="bg-white text-black font-semibold px-5 py-2 rounded-full w-fit hover:bg-gray-200 transition">
          Explore Auctions
        </button>
      </div>
    </section>
  );
};

export default Hero;
