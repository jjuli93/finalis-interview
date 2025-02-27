import { GoogleMapsEmbed } from "@next/third-parties/google";
import { memo } from "react";

export const Map = memo(function Map2({ address }: { address: string }) {
  return (
    <GoogleMapsEmbed
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}
      height={400}
      width="100%"
      mode="place"
      zoom="15"
      q={address}
    />
  );
});
