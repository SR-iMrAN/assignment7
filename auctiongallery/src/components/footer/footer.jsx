import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-center py-10">
      {/* Logo */}
      <h1 className="text-2xl font-bold">
        <span className="text-blue-600">Auction</span>
        <span className="text-yellow-500">Gallery</span>
      </h1>

      {/* Slogan */}
      <p className="mt-2 text-lg font-medium text-gray-700 tracking-wide">
        Bid. &nbsp; Win. &nbsp; Own.
      </p>

      {/* Navigation */}
      <ul className="flex justify-center space-x-6 mt-4 text-sm text-gray-700 font-medium">
        <li><a href="#">Home</a></li>
        <li><a href="#">Auctions</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">How to works</a></li>
      </ul>

      {/* Copyright */}
      <p className="mt-6 text-sm text-gray-900">
        © 2025 AuctionHub. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
