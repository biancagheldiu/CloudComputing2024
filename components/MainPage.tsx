import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { deleteFlight, getFlights } from "@/utils/flightsFunctions";
import { IFlight } from "@/pages/api/flights";
import { FlightCard } from "./FlightCard";

const MainPage = () => {
  const router = useRouter();
  const [flights, setFlights] = useState([]);

  const fetchRecords = async () => {
    try {
      const response = await getFlights();

      setFlights(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteFlight = async (id: string) => {
    try {
      const response = await deleteFlight(id);

      if (response.deletedCount === 1) {
        const newFlights = flights.filter(
          (record: IFlight) => record._id?.toString() !== id
        );
        setFlights(newFlights);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateFlight = (id: string) => {
    router.push(`/flights/edit?id=${id}`);
  };

  const handleOnClick = (id: string) => {
    router.push(`/flights/details?id=${id}`);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="p-4 pt-[100px] bg-gradient-to-b from-gray-400 via-gray-300 to-white ">
      <h2 className="pl-[50px] pb-[10px] text-3xl font-semibold text-gray mb-[20px]">
        All Flights
      </h2>
      <hr className="border-black border-dashed mb-[50px] border-1 mx-[50px] "></hr>
      <div className="flex px-[50px] gap-4 flex-wrap">
        {flights.map((flight: IFlight, index) => (
          <FlightCard
            onClick={handleOnClick}
            key={index}
            flight={flight}
            onDelete={handleDeleteFlight}
            onUpdate={handleUpdateFlight}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
