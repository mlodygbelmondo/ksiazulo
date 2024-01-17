import { type NextRouter } from "next/router";
import { updateRouterQuery } from "~/utils/common";

export const onSelectLocationClick = (
  lat: number,
  lng: number,
  zoom: number,
  city: string,
  router: NextRouter,
  setLocationText: (locationText: string | null) => void
) => {
  const routerQuery = {
    lat,
    lng,
    zoom,
    city,
  };

  updateRouterQuery(router, routerQuery);

  setLocationText(city);
};

export const clearSelectedLocation = (
  router: NextRouter,
  clearLocationText: () => void
) => {
  //TODO: Try to fix it later on if possible
  const params = new URLSearchParams(router.query as unknown as string);
  params.delete("city");

  const routerQuery = params.toString();

  updateRouterQuery(router, routerQuery);

  clearLocationText();
};
