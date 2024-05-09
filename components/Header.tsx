import { getFlightByName } from "@/utils/flightsFunctions";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const updateEntry = (value: any) => {
    setSearchValue(value);
  };

  const onSearch = async () => {
    const response = await getFlightByName(searchValue);

    if (response) {
      router.push(`/flights/details?id=${response._id}`);
    } else {
      alert("No results");
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };
  return (
    <header className="bg-white flex items-center justify-between px-[50px] pt-[20px] pb-[20px]">
      <div className="text-gray text-2xl font-bold">
        <Link href="/">FlightsHub</Link>
      </div>
      <nav className="flex items-center space-x-4">
        <input
          type="text"
          id="searchField"
          value={searchValue}
          onChange={(e) => updateEntry(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-[150px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search by name"
        />
        <button onClick={() => onSearch()}>🔎</button>

        <div className="border-l border-gray-300 h-[35px] border-2"></div>
        <div className="text-gray hover:text-gray-400 transition duration-300">
          <Link href="/">All Flights</Link>
        </div>
        <div className="border-l border-gray-300 h-[35px] border-2"></div>
        <div className="text-gray hover:text-gray-400 transition duration-300">
          <Link href="/flights/create">Create New Flight</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
