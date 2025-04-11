import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="https://i.ibb.co.com/YBnR4Xn1/Banner-min.jpg"
        alt="Banner"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 flex flex-col justify-center h-full px-6 md:px-24 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Bid on Unique Items from Around the World
        </h1>
        <p className="text-sm md:text-lg mb-6 max-w-xl">
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
