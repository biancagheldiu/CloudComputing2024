import { sendMethodNotAllowed, sendOk } from "@/utils/apiMethods";
import { getCollection } from "@/utils/functions";
import { ObjectId } from "mongodb";
import { NextApiResponse } from "next";
const COLLECTION_NAME = "flights";

export interface IFlight {
  _id?: ObjectId;
  flightName?: string;
  crewNo?: string;
  passengerNo?: string;
  departureAirport?: string;
  arrivalAirport?: string;
  departureTime?: string;
  arrivalTime?: string;
}

const getFlights = async () => {
  const collection = await getCollection(COLLECTION_NAME);
  return collection.find({}).toArray();
};

const getFlight = async (id: string) => {
  const collection = await getCollection(COLLECTION_NAME);
  return collection.findOne({ _id: ObjectId.createFromHexString(id) });
};

const getFlightByName = async (flightName: string) => {
  const collection = await getCollection(COLLECTION_NAME);
  return collection.findOne({ flightName: flightName });
};

const postFlight = async (flight: IFlight) => {
  const collection = await getCollection(COLLECTION_NAME);
  return collection.insertOne(flight);
};

const putFlight = async (flight: IFlight) => {
  const collection = await getCollection(COLLECTION_NAME);
  const id = flight._id;
  delete flight._id;
  return collection.updateOne({ _id: new ObjectId(id) }, { $set: flight });
};

const deleteFlight = async (id: string) => {
  const collection = await getCollection(COLLECTION_NAME);
  return collection.deleteOne({ _id: new ObjectId(id) });
};

export default async function handler(req: any, res: NextApiResponse) {
  const isAllowedMethod =
    req.method === "GET" ||
    req.method === "POST" ||
    req.method === "PUT" ||
    req.method === "DELETE";
  if (!isAllowedMethod) {
    return sendMethodNotAllowed(res);
  }
  if (req.method === "GET" && req.query.id) {
    const id = req.query.id;
    const record = await getFlight(id);
    return sendOk(res, record);
  } else if (req.method === "GET" && req.query.flightName) {
    const flightName = req.query.flightName;
    const record = await getFlightByName(flightName);
    return sendOk(res, record);
  } else if (req.method === "GET") {
    const flights = await getFlights();
    return sendOk(res, flights);
  } else if (req.method === "POST") {
    const flight = req.body;
    const result = await postFlight(flight);
    return sendOk(res, result);
  } else if (req.method === "PUT") {
    const flight = req.body;
    const result = await putFlight(flight);
    return sendOk(res, result);
  } else if (req.method === "DELETE") {
    const id = req.query.id;
    const result = await deleteFlight(id);
    return sendOk(res, result);
  }
}
