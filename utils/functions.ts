import { connectToDatabase } from "@/lib/mongodb.js";

export const getCollection = async (collectionName: string) => {
  const { database }: any = await connectToDatabase();
  return database.collection(collectionName);
};
