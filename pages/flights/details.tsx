import FlightForm from "@/components/FlightForm";
import { flightDefaultValues } from "@/utils/constants";
import { createFlight, getFlightById } from "@/utils/flightsFunctions";
import { useRouter } from "next/router";
import { IFlight } from "../api/flights";
import Header from "@/components/Header";
import { FlightDetails } from "@/components/FlighDetails";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";
import { ObjectId } from "mongodb";

const Details = (flight: IFlight) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [entry, setEntry] = useState(flightDefaultValues);

  const getFlight = async (id: string) => {
    const data = await getFlightById(id);

    if (data) {
      setEntry(data);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
    const id = searchParams.get("id");

    if (!id) {
      router.push("/");
    }

    getFlight(id ?? "");
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <FlightDetails flight={entry} />;
    </>
  );
};

export default Details;
