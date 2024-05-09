import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { IFlight } from "../api/flights";
import { flightDefaultValues } from "@/utils/constants";
import { getFlightById, updateFlight } from "@/utils/flightsFunctions";
import FlightForm from "@/components/FlightForm";
import Spinner from "@/components/Spinner";
import Header from "@/components/Header";

const Edit = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [entry, setEntry] = useState(flightDefaultValues);

  const getRecord = async (id: string) => {
    const data = await getFlightById(id);

    if (data) {
      setEntry(data);
    }

    setIsLoading(false);
  };

  const onSubmit = async (data: IFlight) => {
    const response = await updateFlight(data);

    if (response) {
      router.push("/");
    } else {
      alert("Failed to update record");
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
    const id = searchParams.get("id");

    if (!id) {
      router.push("/");
    }

    getRecord(id ?? "");
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      {entry._id ? (
        <FlightForm data={entry} onSubmit={onSubmit} />
      ) : (
        <div className="text-center">Record not found</div>
      )}
    </>
  );
};

export default Edit;
