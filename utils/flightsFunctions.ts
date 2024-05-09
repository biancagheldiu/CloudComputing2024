import { IFlight } from "@/pages/api/flights";

export const getFlights = async () => {
  try {
    const response = await fetch("/api/flights", {
      method: "GET",
    });

    const data = await response.json();

    if (!data?.data) {
      return [];
    }

    return data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getFlightById = async (id: string) => {
  try {
    const response = await fetch(`/api/flights?id=${id}`, {
      method: "GET",
    });

    const data = await response.json();

    if (!data?.data) {
      return null;
    }

    return data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getFlightByName = async (flightName: string) => {
  try {
    const response = await fetch(`/api/flights?flightName=${flightName}`, {
      method: "GET",
    });

    const data = await response.json();

    if (!data?.data) {
      return null;
    }

    return data.data;
  } catch (error) {
    console.error(error);
  }
};

export const createFlight = async (flight: IFlight) => {
  try {
    delete flight._id;

    const response = await fetch("/api/flights", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(flight),
    });

    const data = await response.json();

    if (!data?.data) {
      return null;
    }

    return data.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateFlight = async (flight: IFlight) => {
  try {
    const response = await fetch("/api/flights", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(flight),
    });

    const data = await response.json();

    if (!data?.data) {
      return null;
    }

    return data.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteFlight = async (id: string) => {
  try {
    const response = await fetch(`/api/flights?id=${id}`, {
      method: "DELETE",
    });

    const data = await response.json();

    if (!data?.data) {
      return null;
    }

    return data.data;
  } catch (error) {
    console.error(error);
  }
};
