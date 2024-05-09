import { IFlight } from "@/pages/api/flights";
import React from "react";

interface FlightCardProps {
  flight: IFlight;
  onUpdate: (arg: string) => void;
  onDelete: (arg: string) => void;
  onClick: (arg: string) => void;
}

export const FlightCard = ({
  flight,
  onUpdate,
  onDelete,
  onClick,
}: FlightCardProps) => {
  const renderButtons = () => {
    return (
      <div className="flex justify-center mt-[30px]">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => onUpdate(flight._id?.toString() ?? "")}
        >
          Update
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => onDelete(flight._id?.toString() ?? "")}
        >
          Delete
        </button>
      </div>
    );
  };
  return (
    <div
      className="cursor-pointer p-6 max-w-sm p-6 bg-white opacity-75 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow-lg rounded-lg overflow-hidden relative transform transition duration-500 hover:scale-105"
      key={flight._id?.toString() ?? ""}
      onClick={() => onClick(flight._id?.toString() ?? "")}
    >
      <h2 className="text-3xl font-semibold text-gray mb-2">
        {flight.flightName}
      </h2>

      <div className="flex justify-between mt-2 text-gray">
        <p>From: {flight.departureAirport}</p>
        <p>To: {flight.arrivalAirport}</p>
      </div>
      <div className="flex justify-between text-gray mt-[20px]">
        <p>{flight.departureTime}</p>
        <p>{"→"}</p>
        <p>{flight.arrivalTime}</p>
      </div>
      {renderButtons()}
    </div>
  );
};
