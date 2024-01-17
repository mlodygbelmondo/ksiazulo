import { type NextRouter } from "next/router";
import { type ParsedUrlQueryInput } from "querystring";

export const updateRouterQuery = (
  router: NextRouter,
  query: ParsedUrlQueryInput | string
) =>
  void router.push(
    {
      query,
    },
    undefined,
    { shallow: true }
  );
