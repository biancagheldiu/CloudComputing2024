import React from "react";

interface FlightDetailsProps {
  flight: any;
}

export const FlightDetails = ({ flight }: FlightDetailsProps) => {
  return (
    <div className="p-4 pt-[100px] bg-gradient-to-b from-gray-400 via-gray-300 to-white  px-[50px] ">
      <div
        className=" bg-white opacity-75 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow-lg rounded-lg overflow-hidden w-[50vw] m-auto p-[60px] transform transition duration-500 hover:scale-105"
        key={flight._id?.toString() ?? ""}
      >
        <h2 className="text-3xl font-semibold text-gray mb-[20px]">
          {flight.flightName}
        </h2>
        <hr className="border-gray mb-[100px] border-2"></hr>

        <div className="flex justify-between mt-2 text-gray">
          <p className="text-2xl">Departure airport code ✈️ </p>

          <p className="text-2xl">Arrival airport code ✈ </p>
        </div>
        <div className="flex justify-between mt-2 text-gray">
          <p>{flight.departureAirport}</p>
          <p>{flight.arrivalAirport}</p>
        </div>
        <div className=" mt-[100px] flex justify-between mt-2 text-gray ">
          <p className="text-2xl">Departure time</p>
          <p className="text-2xl">Arrival time</p>
        </div>
        <div className="flex justify-between text-gray mt-[20px]">
          <p>&#128336; {flight.departureTime}</p>
          <p>{"→"}</p>
          <p>&#128336; {flight.arrivalTime}</p>
        </div>
        <div className=" mt-[100px] flex justify-between mt-2 text-gray ">
          <p className="text-2xl">Crew number</p>
          <p className="text-2xl">Passengers number</p>
        </div>
        <div className="flex justify-between text-gray mt-[20px]">
          <p>𐀪 {flight.crewNo}</p>
          <p>𐀪 {flight.passengerNo}</p>
        </div>
      </div>
    </div>
  );
};
