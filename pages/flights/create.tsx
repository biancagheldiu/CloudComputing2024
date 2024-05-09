import FlightForm from "@/components/FlightForm";
import { flightDefaultValues } from "@/utils/constants";
import { createFlight } from "@/utils/flightsFunctions";
import { useRouter } from "next/router";
import { IFlight } from "../api/flights";
import Header from "@/components/Header";

const Create = () => {
  const router = useRouter();
  const entry = flightDefaultValues;

  const onSubmit = async (data: IFlight) => {
    const response = await createFlight(data);

    if (response) {
      router.push("/");
    } else {
      alert("Failed to create record");
    }
  };

  return (
    <>
      <Header />
      <FlightForm data={entry} onSubmit={onSubmit} />;
    </>
  );
};

export default Create;
