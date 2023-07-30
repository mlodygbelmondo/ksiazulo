/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import GoogleMap from "google-maps-react-markers";
import { useRef, useState } from "react";
import { env } from "~/env.mjs";
import Marker from "./Marker";

// import useSWR from 'swr'
// import Navbar from './navbar'
// import Footer from './footer'

// export default function Layout({ children }) {
//   const { data, error } = useSWR('/api/navigation', fetcher)

//   if (error) return <div>Failed to load</div>
//   if (!data) return <div>Loading...</div>

//   return (
//     <>
//       <Navbar links={data.links} />
//       <main>{children}</main>
//       <Footer />
//     </>
//   )
// }

const Map = ({ restaurants }: RestaurantProps) => {
  // const [coords, setCoords] = useState({
  //   lat: 54.7902566,
  //   lng: 18.4069856,
  // });

  const defaultCenter = {
    lat: 51.9537505,
    lng: 19.1343786,
  };

  const mapRef = useRef<google.maps.Map>();
  const [, setMapReady] = useState(false);

  //   useEffect(() => {
  //     navigator.geolocation.getCurrentPosition(
  //       ({ coords: { latitude, longitude } }) => {
  //         setCoords({ lat: latitude, lng: longitude });
  //       }
  //     );
  //   }, []);

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
    mapRef.current.setZoom(15);
  };

  //   useEffect(() => {
  //     if (mapRef.current && mapRef.current?.setCenter) {
  //       // set map location programmatically when the mapCenter var changes
  //       mapRef.current.setCenter(coords);
  //     }
  //   }, [mapRef]);

  return (
    <div className="h-full w-5/12">
      <GoogleMap
        apiKey={env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}
        defaultZoom={6}
        ref={mapRef}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ],
        }}
        defaultCenter={defaultCenter}
        onGoogleApiLoaded={onGoogleApiLoaded}
        // onChange={(e) => {
        //   setCoords({ lat: e.center.lat, lng: e.center.lng });
        //   // setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        // }}
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
