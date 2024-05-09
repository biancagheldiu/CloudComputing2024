import React, { useState } from "react";
import { useRouter } from "next/router";

const FlightForm = (props: any) => {
  const { data, onSubmit } = props;
  const router = useRouter();
  const [entry, setEntry] = useState(data);

  const updateEntry = (type: any, value: any) => {
    setEntry({ ...entry, [type]: value });
  };

  const handleCancel = () => {
    router.push("/");
  };
  const renderButtons = () => {
    return (
      <div className="w-full flex justify-center mb-0 mt-auto gap-4">
        <button
          type="button"
          onClick={() => onSubmit(entry)}
          className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 opacity-75"
        >
          {entry._id ? "Update" : "Create"}
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="opacity-75 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Cancel
        </button>
      </div>
    );
  };
  return (
    <div className="p-4 pt-[100px] bg-gradient-to-b from-gray-400 via-gray-300 to-white  px-[50px] flex justify-center p-4">
      <div className="bg-white border pb-[50px] rounded-md shadow-sm flex flex-col gap-4 min-h-[70vh] h-full w-[500px] px-[100px] pt-[50px]">
        <div>
          <label
            htmlFor="flightName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Flight Name
          </label>
          <input
            type="text"
            id="flightName"
            value={entry.flightName}
            onChange={(e) => updateEntry("flightName", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Flight name"
            required
          />
        </div>
        <label
          htmlFor="crewNo"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Crew Number
        </label>
        <input
          type="text"
          id="crewNo"
          value={entry.crewNo}
          onChange={(e) => updateEntry("crewNo", e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Crew Number: e.g -> 9"
          required
        />
        <label
          htmlFor="departureTime"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Departure Time
        </label>
        <input
          type="text"
          id="departureTime"
          value={entry.departureTime}
          onChange={(e) => updateEntry("departureTime", e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Departure Time: e.g -> 11:00"
          required
        />

        <label
          htmlFor="arrivalTime"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Arrival Time
        </label>
        <input
          type="text"
          id="arrivalTime"
          value={entry.arrivalTime}
          onChange={(e) => updateEntry("arrivalTime", e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Arrival Time: e.g -> 10:00"
          required
        />

        <label
          htmlFor="departureAirport"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Departure Airport
        </label>
        <input
          type="text"
          id="departureAirport"
          value={entry.departureAirport}
          onChange={(e) => updateEntry("departureAirport", e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Departure Airport: e.g -> FRA"
          required
        />

        <label
          htmlFor="arrivalAirport"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Arrival Airport
        </label>
        <input
          type="text"
          id="arrivalAirport"
          value={entry.arrivalAirport}
          onChange={(e) => updateEntry("arrivalAirport", e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Arrival Airport: e.g -> FRA"
          required
        />
        <label
          htmlFor="passengerNo"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Passenger Number
        </label>
        <input
          type="text"
          id="passengerNo"
          value={entry.passengerNo}
          onChange={(e) => updateEntry("passengerNo", e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="PassengerNo: e.g -> 199"
          required
        />

        {renderButtons()}
      </div>
    </div>
  );
};

export default FlightForm;
