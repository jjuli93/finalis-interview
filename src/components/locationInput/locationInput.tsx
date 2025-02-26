"use client";

import { autocompleteLocation, getPlaceDetails } from "@/lib/google";
import AsyncSelect from "react-select/async";
import debounce from "lodash.debounce";
import { useState } from "react";
import { SingleValue } from "react-select";
import { ClientOnly, Stack } from "@chakra-ui/react";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { PlaceType2 } from "@googlemaps/google-maps-services-js";

export default function LocationInput() {
  const [placeId, setPlaceId] = useState<string | undefined>();
  console.log({ placeId });

  const loadOptions = debounce(
    (
      input: string,
      cb: (options: { label: string; value: string }[]) => void
    ) => {
      autocompleteLocation(input).then((options) => {
        cb(
          options.map((option) => ({
            label: option.description,
            value: option.place_id,
          }))
        );
      });
    },
    500
  );

  const handleChange = async (
    option: SingleValue<{ label: string; value: string }>
  ) => {
    if (option?.value) {
      setPlaceId(option.label);
      const details = await getPlaceDetails(option.value);
      console.log({ details });
      const location = details.geometry?.location;
      const fullAddress = option.label;
      const country = details.address_components?.find((component) =>
        component.types.includes(PlaceType2.country)
      );
      const city = details.address_components?.find((component) =>
        component.types.includes(PlaceType2.locality)
      );

      console.log({ location, fullAddress, country, city });
    }
  };

  return (
    <ClientOnly>
      <Stack width="100%">
        <AsyncSelect loadOptions={loadOptions} onChange={handleChange} />
        {placeId && (
          <GoogleMapsEmbed
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}
            height={400}
            width="100%"
            mode="place"
            zoom="15"
            q={placeId}
          />
        )}
      </Stack>
    </ClientOnly>
  );
}
