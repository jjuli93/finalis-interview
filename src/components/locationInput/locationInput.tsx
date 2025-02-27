"use client";

import { autocompleteLocation, getPlaceDetails } from "@/lib/google";
import AsyncSelect from "react-select/async";
import debounce from "lodash.debounce";
import { useState } from "react";
import { SingleValue } from "react-select";
import { ClientOnly, Stack } from "@chakra-ui/react";
import { PlaceType2 } from "@googlemaps/google-maps-services-js";
import { Map } from "./components/map/map";

export type Location = {
  location: { lat: number; lng: number };
  fullAddress: string;
  country: string;
  city: string;
};

type Props = {
  onChange?: (location: Location | null) => void;
  invalid?: boolean;
};

export default function LocationInput({ onChange, invalid }: Props) {
  const [address, setAddress] = useState<string | undefined>();

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
      setAddress(option.label);
      const details = await getPlaceDetails(option.value);
      const location = details.geometry?.location;
      const fullAddress = option.label;
      const country = details.address_components?.find((component) =>
        component.types.includes(PlaceType2.country)
      );
      // TODO: double check if this implementation to get the city is OK
      const city =
        details.address_components?.find((component) =>
          component.types.includes(PlaceType2.locality)
        ) ||
        details.address_components?.find((component) =>
          component.types.includes(PlaceType2.administrative_area_level_2)
        );

      if (
        !details.types?.includes(PlaceType2.street_address) ||
        !location ||
        !country ||
        !city
      ) {
        onChange?.(null);
      } else {
        onChange?.({
          location,
          fullAddress,
          country: country.long_name,
          city: city.long_name,
        });
      }
    }
  };

  return (
    <Stack width="100%">
      <ClientOnly>
        <AsyncSelect
          loadOptions={loadOptions}
          onChange={handleChange}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              borderColor: invalid ? "red" : "grey",
            }),
          }}
        />
      </ClientOnly>
      {address && <Map address={address} />}
    </Stack>
  );
}
