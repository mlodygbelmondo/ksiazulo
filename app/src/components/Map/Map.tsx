/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import GoogleMap from "google-maps-react-markers";
import { useRef, useState } from "react";
import { env } from "~/env.mjs";
import Marker from "./RestaurantMarker";
import { DEFAULT_MAP_CENTER, MAP_ZOOM } from "~/utils/consts";
import { mapOptions } from "~/utils/mapOptions";

const Map = ({ restaurants }: RestaurantProps) => {
  const mapRef = useRef<google.maps.Map>();
  const [, setMapReady] = useState(false);

  const onGoogleApiLoaded = ({ map }: { map: google.maps.Map }) => {
    if (!map) return;

    mapRef.current = map;
    setMapReady(true);
  };

  const onMarkerClick = (lat: number, lng: number) => {
    if (!mapRef.current) return;

    mapRef.current.setCenter({
      lat,
      lng,
    });
    mapRef.current.setZoom(MAP_ZOOM.RESTAURANT);
  };

  return (
    <div className="h-full w-5/12">
      <GoogleMap
        apiKey={env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}
        defaultZoom={MAP_ZOOM.DEFAULT}
        ref={mapRef}
        options={mapOptions}
        defaultCenter={DEFAULT_MAP_CENTER}
        onGoogleApiLoaded={onGoogleApiLoaded}
      >
        {restaurants.map((restaurant, i) => (
          <Marker
            key={i}
            lat={restaurant.latitude}
            lng={restaurant.longitude}
            onClick={onMarkerClick}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
