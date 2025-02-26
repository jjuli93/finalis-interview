"use server";

import { Client } from "@googlemaps/google-maps-services-js";

const client = new Client();

export const autocompleteLocation = async (input: string) => {
  const response = await client.placeAutocomplete({
    params: {
      input,
      key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
    },
  });

  return response.data.predictions;
};

export const getPlaceDetails = async (placeId: string) => {
  const response = await client.placeDetails({
    params: {
      place_id: placeId,
      key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
    },
  });

  return response.data.result;
};
