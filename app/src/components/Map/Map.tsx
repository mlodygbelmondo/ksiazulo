/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import GoogleMap from "google-maps-react-markers";
import { useEffect, useRef, useState } from "react";
import { env } from "~/env.mjs";
import Marker from "./RestaurantMarker";
import { DEFAULT_MAP_CENTER, MAP_ZOOM } from "~/utils/consts/consts";
import { mapOptions } from "~/utils/mapOptions";
import { useRouter } from "next/router";
import { updateRouterQuery } from "~/utils/common";

const Map = ({ restaurants }: RestaurantProps) => {
  const mapRef = useRef<google.maps.Map>();
  const [, setMapReady] = useState(false);

  const router = useRouter();

  const { lat, lng, zoom } = router.query;

  useEffect(() => {
    if (
      !mapRef.current ||
      !mapRef.current.setCenter ||
      !mapRef.current.setZoom ||
      !lat ||
      !lng ||
      !zoom
    )
      return;

    mapRef.current.setCenter({
      lat: Number(lat),
      lng: Number(lng),
    });

    mapRef.current.setZoom(Number(zoom));
  }, [lat, lng, mapRef, zoom]);

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onMapChange = (e: any) => {
    const [lng, lat] = e.center;

    const routerQuery = {
      ...router.query,
      lat,
      lng,
      zoom: e.zoom,
    };

    updateRouterQuery(router, routerQuery);
  };

  const defaultCenter =
    lat && lng ? { lat: Number(lat), lng: Number(lng) } : DEFAULT_MAP_CENTER;
  const defaultZoom = zoom ? Number(zoom) : MAP_ZOOM.DEFAULT;

  return (
    <div className="h-full w-5/12">
      <GoogleMap
        apiKey={env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}
        defaultZoom={defaultZoom}
        ref={mapRef}
        options={mapOptions}
        defaultCenter={defaultCenter}
        onGoogleApiLoaded={onGoogleApiLoaded}
        onChange={onMapChange}
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
