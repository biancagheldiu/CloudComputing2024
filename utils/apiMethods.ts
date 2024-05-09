import { NextApiResponse } from "next";

export const sendOk = (res: NextApiResponse, data: any) => {
  res.status(200).json({
    data: data,
  });
};

export const sendNotFound = (res: NextApiResponse, message: string) => {
  res.status(404).json({
    error: message,
  });
};

export const sendBadRequest = (res: NextApiResponse, message: string) => {
  res.status(400).json({
    error: message,
  });
};

export const sendUnauthorized = (res: NextApiResponse, message: string) => {
  res.status(401).json({
    error: message,
  });
};

export const sendMethodNotAllowed = (res: NextApiResponse) => {
  res.status(405).json({
    error: "Method not allowed",
  });
};
