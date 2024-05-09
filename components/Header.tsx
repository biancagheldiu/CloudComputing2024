import React from "react";

const Header = () => {
  return (
    <header className="bg-white flex items-center justify-between px-[50px] pt-[20px] pb-[20px]">
      <a href="/" className="text-gray text-2xl font-bold">
        FlightsHub
      </a>
      <nav className="flex items-center space-x-4">
        <div className="border-l border-gray-300 h-[35px] border-2"></div>
        <a
          href="/"
          className="text-gray hover:text-gray-400 transition duration-300"
        >
          All Flights
        </a>
        <div className="border-l border-gray-300 h-[35px] border-2"></div>
        <a
          href="/flights/create"
          className="text-gray hover:text-gray-400 transition duration-300"
        >
          Create New Flight
        </a>
      </nav>
    </header>
  );
};

export default Header;
